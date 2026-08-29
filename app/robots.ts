import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/internal-review/"],
    },
    sitemap: "https://www.vlu.edu.vn/sitemap.xml",
  };
}
