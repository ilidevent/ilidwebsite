import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ilidevent.com',
      priority: 1
    },
    {
      url: 'https://bettermarque.com/about',
    },
    {
      url: 'https://bettermarque.com/projects',
    },
    {
      url: 'https://bettermarque.com/services',
    },
    {
      url: 'https://bettermarque.com/contact',
    },
  ]
}