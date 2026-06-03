import { visit } from "unist-util-visit";
import type { Element, Root } from "hast";

/** Hosts that should keep default (follow) link behavior. */
const DEFAULT_FOLLOW_HOSTS = [
  "blog.skorulis.com",
  "skorulis.com",
  "www.skorulis.com",
  "max-idle.com",
];

export type RehypeExternalNofollowOptions = {
  /** Site origin used to resolve relative URLs, e.g. https://blog.skorulis.com/ */
  site: string;
  /** Extra hostnames that should not receive nofollow (in addition to the defaults). */
  followHosts?: string[];
};

function isFollowHost(hostname: string, followHosts: Set<string>): boolean {
  if (followHosts.has(hostname)) return true;
  return hostname.endsWith(".skorulis.com");
}

function mergeRel(existing: unknown, additions: string[]): string {
  const current =
    typeof existing === "string"
      ? existing
      : Array.isArray(existing)
        ? existing.join(" ")
        : "";
  const parts = new Set(current.split(/\s+/).filter(Boolean));
  for (const rel of additions) parts.add(rel);
  return [...parts].join(" ");
}

/**
 * Adds rel="nofollow noopener noreferrer" to external links in Markdown content.
 * Relative links and whitelisted hosts are unchanged.
 */
export function rehypeExternalNofollow(options: RehypeExternalNofollowOptions) {
  const site = options.site;
  let siteHost: string;
  try {
    siteHost = new URL(site).hostname;
  } catch {
    siteHost = "blog.skorulis.com";
  }

  const followHosts = new Set([
    ...DEFAULT_FOLLOW_HOSTS,
    siteHost,
    ...(options.followHosts ?? []),
  ]);

  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "a" || !node.properties) return;

      const href = node.properties.href;
      if (typeof href !== "string") return;

      let url: URL;
      try {
        url = new URL(href, site);
      } catch {
        return;
      }

      if (!["http:", "https:"].includes(url.protocol)) return;
      if (isFollowHost(url.hostname, followHosts)) return;

      node.properties.rel = mergeRel(node.properties.rel, [
        "nofollow",
        "noopener",
        "noreferrer",
      ]);
    });
  };
}
