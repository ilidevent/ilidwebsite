import { MetadataRoute } from "next";

export default function robots():MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/partners", "/api/speakers"]
      }
    ],
    sitemap: "https://ilidevent.com/sitemap.xml"
  }
}