import { createServer } from "node:http";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { render404, renderSite } from "../site/render-site.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = join(root, "cloudflare-pages");
const pages = renderSite();
const lastModified = "2026-07-27";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webmanifest": "application/manifest+json; charset=utf-8",
};

function routeFile(route) {
  return route === "/"
    ? join(output, "index.html")
    : join(output, route.slice(1), "index.html");
}

function sitemap() {
  const priorities = {
    "/": "1.0",
    "/features/": "0.9",
    "/case-management/": "0.9",
    "/document-management/": "0.9",
    "/client-portal/": "0.9",
    "/pricing/": "0.9",
  };
  const urls = Object.keys(pages)
    .map(
      (route) => `  <url>
    <loc>https://casvault.com${route === "/" ? "/" : route}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${priorities[route] || "0.7"}</priority>
  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

async function build() {
  await rm(output, { recursive: true, force: true });
  await mkdir(join(output, "assets"), { recursive: true });

  for (const [route, html] of Object.entries(pages)) {
    const target = routeFile(route);
    await mkdir(join(target, ".."), { recursive: true });
    await writeFile(target, html, "utf8");
  }

  await Promise.all([
    writeFile(join(output, "404.html"), render404(), "utf8"),
    writeFile(
      join(output, "robots.txt"),
      "User-agent: *\nAllow: /\n\nSitemap: https://casvault.com/sitemap.xml\n",
      "utf8",
    ),
    writeFile(join(output, "sitemap.xml"), sitemap(), "utf8"),
    writeFile(
      join(output, "site.webmanifest"),
      JSON.stringify(
        {
          name: "Casevault",
          short_name: "Casevault",
          description:
            "Immigration case management software for organized practices.",
          start_url: "/",
          display: "standalone",
          background_color: "#f8f7f3",
          theme_color: "#111927",
          icons: [
            { src: "/assets/android-chrome-192x192.png", sizes: "192x192", type: "image/png", purpose: "any" },
            { src: "/assets/android-chrome-512x512.png", sizes: "512x512", type: "image/png", purpose: "any" },
          ],
        },
        null,
        2,
      ),
      "utf8",
    ),
    writeFile(
      join(output, "_headers"),
      `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self'; frame-ancestors 'self'; form-action 'self'

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`,
      "utf8",
    ),
    writeFile(
      join(output, "_redirects"),
      `/home / 301
/features.html /features/ 301
/how-it-works.html /how-it-works/ 301
/pricing.html /pricing/ 301
/faq.html /faq/ 301
/contact.html /contact/ 301
/demo.html /demo/ 301
`,
      "utf8",
    ),
    cp(join(root, "public", "favicon.svg"), join(output, "assets", "favicon.svg")),
    cp(join(root, "public", "favicon.ico"), join(output, "assets", "favicon.ico")),
    cp(join(root, "public", "favicon-16x16.png"), join(output, "assets", "favicon-16x16.png")),
    cp(join(root, "public", "favicon-32x32.png"), join(output, "assets", "favicon-32x32.png")),
    cp(join(root, "public", "apple-touch-icon.png"), join(output, "assets", "apple-touch-icon.png")),
    cp(join(root, "public", "android-chrome-192x192.png"), join(output, "assets", "android-chrome-192x192.png")),
    cp(join(root, "public", "android-chrome-512x512.png"), join(output, "assets", "android-chrome-512x512.png")),
    cp(join(root, "public", "casevault-wordmark.png"), join(output, "assets", "casevault-wordmark.png")),
    cp(
      join(root, "public", "casevault-social-final.png"),
      join(output, "assets", "casevault-social.png"),
    ),
  ]);

  console.log(`Built ${Object.keys(pages).length} pages in ${output}`);
  return output;
}

async function serve() {
  await build();
  const port = Number(process.env.PORT || 4173);
  const server = createServer(async (request, response) => {
    const requestPath = decodeURIComponent(
      new URL(request.url || "/", "http://localhost").pathname,
    );
    const cleanPath = normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
    const candidates = extname(cleanPath)
      ? [join(output, cleanPath)]
      : [join(output, cleanPath, "index.html"), join(output, `${cleanPath}.html`)];

    let file;
    for (const candidate of candidates) {
      try {
        file = await import("node:fs/promises").then(({ readFile }) =>
          readFile(candidate),
        );
        response.writeHead(200, {
          "Content-Type": mimeTypes[extname(candidate)] || "application/octet-stream",
        });
        response.end(file);
        return;
      } catch {
        // Try the next clean-URL candidate.
      }
    }

    file = await import("node:fs/promises").then(({ readFile }) =>
      readFile(join(output, "404.html")),
    );
    response.writeHead(404, { "Content-Type": mimeTypes[".html"] });
    response.end(file);
  });

  server.listen(port, "127.0.0.1", () => {
    console.log(`Local URL: http://127.0.0.1:${port}`);
  });
}

if (process.argv.includes("--serve")) {
  await serve();
} else {
  await build();
}
