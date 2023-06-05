import { BASE_URL } from '@/lib/consts';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/legal`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/skills`,
      lastModified: new Date(),
    },
  ];
}
