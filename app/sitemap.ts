import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/profile";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    ...projects.map((p) => ({ url: `${siteUrl}/work/${p.slug}` })),
  ];
}
