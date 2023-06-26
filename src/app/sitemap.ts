import { siteConfig } from '@/config/site';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.baseUrl}/legal`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.baseUrl}/skills`,
      lastModified: new Date(),
    },
  ];
}
