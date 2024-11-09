import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/privacy", "/terms", "/**"],
      disallow: ["/dashboard/admin", "/privacy", "/terms"],
    },
    sitemap: "https://pouzz.xyz/sitemap.xml",
  };
}
