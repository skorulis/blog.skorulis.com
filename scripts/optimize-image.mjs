#!/usr/bin/env node
/**
 * Optimize image(s) with Sharp: resize if large, compress, overwrite in place.
 * Usage: node scripts/optimize-image.mjs <path> [path2 ...]
 *        npm run optimize:image -- path/to/image.png
 */

import sharp from "sharp";
import { readFileSync, renameSync, unlinkSync } from "node:fs";
import { resolve, extname } from "node:path";

const MAX_WIDTH = 1600;
const MAX_HEIGHT = 1600;
const JPEG_QUALITY = 85;
const PNG_COMPRESSION = 9; // 0–9, 9 = max compression
const WEBP_QUALITY = 85;

async function optimize(path) {
  const abs = resolve(process.cwd(), path);
  const ext = extname(path).toLowerCase();
  const before = readFileSync(abs).length;

  const pipeline = sharp(abs);
  const meta = await pipeline.metadata();
  const needResize =
    (meta.width > MAX_WIDTH || meta.height > MAX_HEIGHT) &&
    meta.width &&
    meta.height;

  if (needResize) {
    pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const tmpPath = `${abs}.opt-tmp`;
  try {
    switch (ext) {
      case ".jpg":
      case ".jpeg":
        await pipeline
          .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
          .toFile(tmpPath);
        break;
      case ".png":
        await pipeline
          .png({ compressionLevel: PNG_COMPRESSION })
          .toFile(tmpPath);
        break;
      case ".webp":
        await pipeline.webp({ quality: WEBP_QUALITY }).toFile(tmpPath);
        break;
      default: {
        const webpPath = abs.replace(ext, ".webp");
        await pipeline.webp({ quality: WEBP_QUALITY }).toFile(webpPath);
        console.warn(
          `Converted ${path} to .webp (original format not optimized)`,
        );
        return;
      }
    }
    const after = readFileSync(tmpPath).length;
    if (after >= before) {
      unlinkSync(tmpPath);
      console.log(
        `${path}: ${(before / 1024).toFixed(1)} KB (skipped — already optimal or would be larger)`,
      );
      return;
    }
    renameSync(tmpPath, abs);
    const saved = before - after;
    const pct = ((saved / before) * 100).toFixed(1);
    console.log(
      `${path}: ${(before / 1024).toFixed(1)} KB → ${(after / 1024).toFixed(1)} KB (${pct}% smaller)`,
    );
  } catch (e) {
    try {
      unlinkSync(tmpPath);
    } catch (_) {}
    throw e;
  }
}

const paths = process.argv.slice(2).filter((p) => p && !p.startsWith("-"));
if (paths.length === 0) {
  console.error("Usage: node scripts/optimize-image.mjs <image> [image2 ...]");
  console.error("   or: npm run optimize:image -- path/to/image.png");
  process.exit(1);
}

for (const path of paths) {
  try {
    await optimize(path);
  } catch (err) {
    console.error(`Error optimizing ${path}:`, err.message);
    process.exitCode = 1;
  }
}
