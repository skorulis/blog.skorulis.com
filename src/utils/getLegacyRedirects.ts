import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { BLOG_PATH } from "../blog-path";
import { getPath } from "./getPath";

function isDraft(content: string): boolean {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return false;
  return /^draft:\s*true\s*$/m.test(match[1]);
}

function findMarkdownFiles(dir: string): string[] {
  const files: string[] = [];

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

/**
 * Build redirect map from legacy Jekyll `.html` post URLs to current paths.
 */
export function getLegacyRedirects(): Record<string, string> {
  const blogDir = join(process.cwd(), BLOG_PATH);
  const redirects: Record<string, string> = {};

  for (const absolutePath of findMarkdownFiles(blogDir)) {
    const content = readFileSync(absolutePath, "utf-8");
    if (isDraft(content)) continue;

    const id = relative(blogDir, absolutePath).replace(/\.md$/, "");
    const filePath = join(BLOG_PATH, relative(blogDir, absolutePath));
    const target = getPath(id, filePath);

    redirects[`${target}.html`] = target;
  }

  return redirects;
}
