import { access, readFile, readdir } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = join(root, "cloudflare-pages");
const failures = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const target = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(target)));
    else files.push(target);
  }
  return files;
}

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

function internalTarget(href) {
  if (
    !href ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  ) {
    return null;
  }
  const pathname = href.split(/[?#]/)[0];
  if (!pathname) return null;
  if (pathname.startsWith("/assets/")) return join(output, pathname.slice(1));
  if (extname(pathname)) return join(output, pathname.slice(1));
  if (pathname === "/") return join(output, "index.html");
  return join(output, pathname.slice(1), "index.html");
}

const allFiles = await walk(output);
const htmlFiles = allFiles.filter((file) => file.endsWith(".html"));

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const name = relative(output, file);
  const is404 = name === "404.html";

  if (html.includes("undefined") || html.includes("NaN")) {
    failures.push(`${name}: contains an undefined or NaN placeholder`);
  }
  if ((html.match(/<h1\b/g) || []).length !== 1) {
    failures.push(`${name}: must contain exactly one H1`);
  }
  if (!html.includes("googletagmanager.com/gtag/js?id=G-DMWXJF49EN")) {
    failures.push(`${name}: missing Google Analytics tag G-DMWXJF49EN`);
  }
  if (!html.includes("gtag('config', 'G-DMWXJF49EN')")) {
    failures.push(`${name}: missing Google Analytics configuration`);
  }
  if (!html.includes('"clarity", "script", "xho5gxn9ua"')) {
    failures.push(`${name}: missing Microsoft Clarity tag xho5gxn9ua`);
  }
  if (!is404) {
    if (!/<title>[^<]{10,}<\/title>/.test(html)) failures.push(`${name}: missing title`);
    if (!/<meta name="description" content="[^"]{40,}"/.test(html)) {
      failures.push(`${name}: missing useful meta description`);
    }
    if (!/<link rel="canonical" href="https:\/\/casvault\.com\//.test(html)) {
      failures.push(`${name}: missing canonical URL`);
    }
  }

  for (const match of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      failures.push(`${name}: invalid JSON-LD (${error.message})`);
    }
  }

  for (const match of html.matchAll(/\shref="([^"]+)"/g)) {
    const target = internalTarget(match[1]);
    if (target && !(await exists(target))) {
      failures.push(`${name}: broken internal link ${match[1]}`);
    }
  }
}

for (const required of [
  "index.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "_headers",
  "_redirects",
  "site.webmanifest",
  "assets/favicon.ico",
  "assets/favicon-16x16.png",
  "assets/favicon-32x32.png",
  "assets/apple-touch-icon.png",
  "assets/android-chrome-192x192.png",
  "assets/android-chrome-512x512.png",
  "assets/casevault-wordmark.png",
  "assets/casevault-social.png",
]) {
  if (!(await exists(join(output, required)))) failures.push(`missing ${required}`);
}

if (htmlFiles.length !== 19) {
  failures.push(`expected 19 HTML files including 404; found ${htmlFiles.length}`);
}

if (failures.length) {
  console.error(`Validation failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Validated ${htmlFiles.length - 1} indexable pages, 1 custom 404, analytics, internal links, metadata, JSON-LD, and Cloudflare control files.`,
);
