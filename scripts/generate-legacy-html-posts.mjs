import { copyFileSync, existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import kebabcase from "lodash.kebabcase";
import slugify from "slugify";

const BLOG_PATH = "src/data/blog";
const distDir = process.argv[2] ?? "dist";
// Keep in sync with SITE.website in src/config.ts
const SITE_WEBSITE = "https://blog.skorulis.com/";

function slugifyStr(str) {
  if (/[^\x00-\x7F]/.test(str)) return kebabcase(str);
  return slugify(str, { lower: true });
}

function getPath(id, filePath) {
  const pathSegments = filePath
    .replace(BLOG_PATH, "")
    .split("/")
    .filter(path => path !== "")
    .filter(path => !path.startsWith("_"))
    .slice(0, -1)
    .map(segment => slugifyStr(segment));

  const rawSlug = id.split("/").at(-1) ?? id;
  const slugMatch = rawSlug.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
  const dateSegments = slugMatch
    ? [slugMatch[1], slugMatch[2], slugMatch[3]]
    : [];
  const slug = slugMatch ? slugMatch[4] : rawSlug;

  if (!pathSegments || pathSegments.length < 1) {
    return `/${[...dateSegments, slug].join("/")}`;
  }

  return `/${[...pathSegments, ...dateSegments, slug].join("/")}`;
}

function isDraft(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return false;
  return /^draft:\s*true\s*$/m.test(match[1]);
}

function findMarkdownFiles(dir) {
  const files = [];

  for (const entry of readdirSync(dir)) {
    if (entry.startsWith("_")) continue;

    const fullPath = join(dir, entry);

    if (statSync(fullPath).isDirectory()) {
      files.push(...findMarkdownFiles(fullPath));
      continue;
    }

    if (entry.endsWith(".md") && !entry.startsWith("_")) {
      files.push(fullPath);
    }
  }

  return files;
}

const blogDir = join(process.cwd(), BLOG_PATH);

for (const absolutePath of findMarkdownFiles(blogDir)) {
  const content = readFileSync(absolutePath, "utf-8");
  if (isDraft(content)) continue;

  const id = relative(blogDir, absolutePath).replace(/\.md$/, "");
  const filePath = join(BLOG_PATH, relative(blogDir, absolutePath));
  const postPath = getPath(id, filePath);
  const source = join(distDir, postPath, "index.html");
  const target = join(distDir, `${postPath.slice(1)}.html`);

  if (!existsSync(source)) {
    console.warn(`Skipping legacy .html copy, missing build output: ${source}`);
    continue;
  }

  copyFileSync(source, target);

  const canonicalUrl = new URL(postPath, SITE_WEBSITE).href;
  let html = readFileSync(target, "utf-8");

  html = html
    .replace(
      /<link rel="canonical" href="[^"]*">/,
      `<link rel="canonical" href="${canonicalUrl}">`,
    )
    .replace(
      /<meta property="og:url" content="[^"]*">/,
      `<meta property="og:url" content="${canonicalUrl}">`,
    )
    .replace(
      /<meta property="twitter:url" content="[^"]*">/,
      `<meta property="twitter:url" content="${canonicalUrl}">`,
    );

  writeFileSync(target, html);
}
