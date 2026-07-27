import { createServer } from "node:http";
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { renderAllDemos } from "../demos/render-demos.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const galleryName = "casevault-ui-demos.html";

function pageForPath(pages, pathname) {
  const name = basename(decodeURIComponent(pathname));
  return pages[name] || pages[galleryName];
}

async function build() {
  const pages = renderAllDemos();
  const ogPath = join(root, "public", "og-gallery.png");
  const ogBase64 = existsSync(ogPath)
    ? (await readFile(ogPath)).toString("base64")
    : "";
  const dist = join(root, "dist");
  const outputDir = join(root, "outputs");

  await mkdir(join(dist, "server"), { recursive: true });
  await mkdir(join(dist, "client"), { recursive: true });
  await mkdir(join(dist, ".openai"), { recursive: true });
  await mkdir(outputDir, { recursive: true });

  for (const [name, html] of Object.entries(pages)) {
    await writeFile(join(dist, "client", name), html);
    await writeFile(join(outputDir, name), html);
  }
  await writeFile(join(dist, "client", "index.html"), pages[galleryName]);

  if (existsSync(ogPath)) {
    await copyFile(ogPath, join(dist, "client", "og-gallery.png"));
  }

  await writeFile(
    join(dist, "server", "index.js"),
    `const pages = ${JSON.stringify(pages)};
const ogBase64 = ${JSON.stringify(ogBase64)};
const galleryName = ${JSON.stringify(galleryName)};
export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/og-gallery.png" && ogBase64) {
      const binary = atob(ogBase64);
      const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
      return new Response(bytes, {
        headers: {
          "content-type": "image/png",
          "cache-control": "public, max-age=31536000, immutable"
        }
      });
    }
    if (url.pathname === "/favicon.svg") {
      return new Response("", { status: 204 });
    }
    const name = decodeURIComponent(url.pathname).split("/").filter(Boolean).pop() || galleryName;
    const html = (pages[name] || pages[galleryName]).replaceAll("__SITE_ORIGIN__", url.origin);
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300",
        "x-content-type-options": "nosniff"
      }
    });
  }
};
`,
  );

  await copyFile(
    join(root, ".openai", "hosting.json"),
    join(dist, ".openai", "hosting.json"),
  );
  console.log(`Built ${Object.keys(pages).length} Casevault demo pages.`);
}

if (process.argv.includes("--serve")) {
  const port = Number(process.env.PORT || 3000);
  const server = createServer(async (request, response) => {
    try {
      const pages = renderAllDemos();
      const html = pageForPath(pages, new URL(request.url, "http://localhost").pathname);
      response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      response.end(html);
    } catch (error) {
      response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
      response.end(String(error));
    }
  });
  server.listen(port, "127.0.0.1", () => {
    console.log(`Local URL: http://127.0.0.1:${port}/`);
  });
} else {
  await build();
}
