import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.orbitgrowth.de';

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
