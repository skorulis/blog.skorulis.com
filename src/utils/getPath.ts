import { BLOG_PATH } from "../blog-path";
import { slugifyStr } from "./slugify";

/**
 * Get full path of a blog post
 * @param id - id of the blog post (aka slug)
 * @param filePath - the blog post full file location
 * @param includeBase - whether to include `/posts` in return value
 * @returns blog post path with trailing slash (canonical directory URL)
 */
export function getPath(
  id: string,
  filePath: string | undefined,
  includeBase = false,
) {
  const pathSegments = filePath
    ?.replace(BLOG_PATH, "")
    .split("/")
    .filter((path) => path !== "") // remove empty string in the segments ["", "other-path"] <- empty string will be removed
    .filter((path) => !path.startsWith("_")) // exclude directories start with underscore "_"
    .slice(0, -1) // remove the last segment_ file name_ since it's unnecessary
    .map((segment) => slugifyStr(segment)); // slugify each segment path

  // Making sure `id` does not contain the directory
  const blogId = id.split("/");
  const rawSlug = blogId.at(-1) ?? id;
  const slugMatch = rawSlug.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
  const dateSegments = slugMatch
    ? [slugMatch[1], slugMatch[2], slugMatch[3]]
    : [];
  const slug = slugMatch ? slugMatch[4] : rawSlug;
  const basePath = includeBase ? ["posts"] : [];

  // Trailing slash matches Astro directory routes and sitemap canonical URLs
  if (!pathSegments || pathSegments.length < 1) {
    return `/${[...basePath, ...dateSegments, slug].join("/")}/`;
  }

  return `/${[...basePath, ...pathSegments, ...dateSegments, slug].join("/")}/`;
}
