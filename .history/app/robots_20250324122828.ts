import { MetadataRoute } from "next";

export default function robots():MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        ex
      }
    ],
    sitemap: "https://ilidevent.com/sitemap.xml"
  }
}