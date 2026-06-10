import { readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const distDir = process.argv[2] ?? "dist";

function flattenHtmlRedirectDirs(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);

    if (!statSync(fullPath).isDirectory()) continue;

    if (entry.endsWith(".html")) {
      const indexPath = join(fullPath, "index.html");

      if (statSync(indexPath).isFile()) {
        const contents = readFileSync(indexPath, "utf-8");
        const targetPath = join(dir, entry);

        rmSync(fullPath, { recursive: true, force: true });
        writeFileSync(targetPath, contents);
        continue;
      }
    }

    flattenHtmlRedirectDirs(fullPath);
  }
}

flattenHtmlRedirectDirs(distDir);
