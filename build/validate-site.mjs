import { access, readFile, readdir } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { SEO_LAST_MODIFIED } from "../site/render-site.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = join(root, "cloudflare-pages");
const failures = [];
const titles = new Map();
const descriptions = new Map();
const canonicals = new Map();

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
  if (!html.includes("document.querySelectorAll('[data-pricing]')")) {
    failures.push(`${name}: missing site-wide pricing interaction controller`);
  }
  if (name === "pricing/index.html") {
    for (const annualPrice of ["$384", "$888", "$1,788"]) {
      if (!html.includes(`data-annual="${annualPrice}"`)) {
        failures.push(`${name}: missing annual price ${annualPrice}`);
      }
    }
    if (!html.includes('data-period="annual" aria-pressed="false"')) {
      failures.push(`${name}: annual billing control is not accessible`);
    }
  }
  if (!is404) {
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (!title || title.length < 10) failures.push(`${name}: missing title`);
    if (!description || description.length < 40) {
      failures.push(`${name}: missing useful meta description`);
    }
    if (!canonical?.startsWith("https://casvault.com/")) {
      failures.push(`${name}: missing canonical URL`);
    }
    if (title) titles.set(title, [...(titles.get(title) || []), name]);
    if (description) descriptions.set(description, [...(descriptions.get(description) || []), name]);
    if (canonical) canonicals.set(canonical, [...(canonicals.get(canonical) || []), name]);
    if (!html.includes('name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"')) {
      failures.push(`${name}: missing complete search preview directives`);
    }
    if (!html.includes('<link rel="sitemap" type="application/xml" href="/sitemap.xml">')) {
      failures.push(`${name}: missing sitemap discovery link`);
    }
  }

  const structuredData = [];
  for (const match of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )) {
    try {
      structuredData.push(JSON.parse(match[1]));
    } catch (error) {
      failures.push(`${name}: invalid JSON-LD (${error.message})`);
    }
  }
  if (!is404) {
    const graph = structuredData.flatMap((schema) => schema["@graph"] || [schema]);
    const types = new Set(graph.map((node) => node["@type"]));
    if (!types.has("Organization")) failures.push(`${name}: missing Organization schema`);
    if (!["WebPage", "AboutPage", "ContactPage", "FAQPage"].some((type) => types.has(type))) {
      failures.push(`${name}: missing page-level schema`);
    }
    const pageNode = graph.find((node) => ["WebPage", "AboutPage", "ContactPage", "FAQPage"].includes(node["@type"]));
    if (pageNode?.dateModified !== SEO_LAST_MODIFIED) failures.push(`${name}: stale schema modification date`);
    if (name === "index.html") {
      const website = graph.find((node) => node["@type"] === "WebSite");
      if (!website || website.name !== "Casevault" || website.alternateName !== "casvault.com") {
        failures.push(`${name}: incomplete WebSite schema for Google site name`);
      }
    } else if (!types.has("BreadcrumbList")) {
      failures.push(`${name}: missing BreadcrumbList schema`);
    }
    if (name === "pricing/index.html") {
      const software = graph.find((node) => node["@type"] === "WebApplication");
      if (!software || software.offers?.length !== 6) failures.push(`${name}: incomplete WebApplication offers schema`);
    }
  }

  for (const match of html.matchAll(/\shref="([^"]+)"/g)) {
    const target = internalTarget(match[1]);
    if (target && !(await exists(target))) {
      failures.push(`${name}: broken internal link ${match[1]}`);
    }
  }
}

for (const [value, files] of [...titles, ...descriptions, ...canonicals]) {
  if (files.length > 1) failures.push(`duplicate SEO value across ${files.join(", ")}: ${value}`);
}

const sitemapXml = await readFile(join(output, "sitemap.xml"), "utf8");
const robotsTxt = await readFile(join(output, "robots.txt"), "utf8");
for (const canonical of canonicals.keys()) {
  if (!sitemapXml.includes(`<loc>${canonical}</loc>`)) failures.push(`sitemap missing canonical URL ${canonical}`);
}
if ((sitemapXml.match(/<url>/g) || []).length !== canonicals.size) failures.push("sitemap URL count does not match indexable pages");
if ((sitemapXml.match(new RegExp(`<lastmod>${SEO_LAST_MODIFIED}<\\/lastmod>`, "g")) || []).length !== canonicals.size) {
  failures.push("sitemap modification dates are missing or stale");
}
if (sitemapXml.includes("<changefreq>") || sitemapXml.includes("<priority>")) {
  failures.push("sitemap contains unsupported changefreq or priority hints");
}
if (!robotsTxt.includes("Sitemap: https://casvault.com/sitemap.xml")) failures.push("robots.txt is missing the absolute sitemap URL");

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
