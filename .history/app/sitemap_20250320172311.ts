import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ilidevent.com",
      priority: 1,
    },
    {
      url: "https://ilidevent.com/attend",
      priority: 0.8,
    },
    {
      url: "https://ilidevent.com/about",
      priority: 0.8,
    },
    {
      url: "https://ilidevent.com/pitch-contest",
      priority: 0.6,
    },
    {
      url: "https://ilidevent.com/partners",
      priority: 0.6,
    },
    {
      url: "https://ilidevent.com/speakers",
      priority: 0.5,
    },
  ];
}
