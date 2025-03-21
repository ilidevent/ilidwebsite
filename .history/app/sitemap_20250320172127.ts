import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ilidevent.com',
      priority: 1
    },
    {
      url: 'https://ilidevent.com/attend',
      priority: 0.9
    },
  ]
}