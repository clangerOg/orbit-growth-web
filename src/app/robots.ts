import { BASE_URL } from '@/lib/consts';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
