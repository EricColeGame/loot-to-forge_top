import type { MetadataRoute } from "next";
import { getAllContentPaths } from "@/lib/content";
import { CONTENT_TYPES } from "@/config/navigation";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

// Pages that exist regardless of the content model
const STATIC_PAGES = ["/", "/privacy-policy", "/terms-of-service", "/copyright", "/about"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://loot-to-forge.top";

  // Listing pages — derived from CONTENT_TYPES so they can never drift apart
  const listingPaths = CONTENT_TYPES.map((ct) => `/${ct}`);

  // Dynamic paths: scan actual MDX content files
  const contentPaths = await getAllContentPaths("en");
  const dynamicPaths = contentPaths.map((item) => `/${[item.contentType, ...item.slug].join("/")}`);

  const paths = [...new Set([...STATIC_PAGES, ...listingPaths, ...dynamicPaths])];
  const listingSet = new Set(listingPaths);

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path === "/" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
      priority: path === "/" ? 1 : listingSet.has(path) ? 0.8 : 0.6,
    })),
  );
}
