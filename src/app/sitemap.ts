import { MetadataRoute } from 'next'
import { blogFeatures } from '@/app/dashboard/blog/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.silzeypos.com' // Replace with your actual domain

  // Get all blog post slugs from the blog data
  const blogPostUrls = Object.keys(blogFeatures).map(slug => ({
    url: `${baseUrl}/dashboard/blog/${slug}`,
    lastModified: new Date(),
  }));

  // Define other static, public pages
  const staticPages = [
    '/',
    '/request-free-demo/Qmgi0BZZgp0FANkfZWYC',
    '/dashboard/pos-mobile-app',
    '/dashboard/app-development',
    '/dashboard/futuristic-design',
    '/dashboard/user-flexibility',
    '/dashboard/cheaper-prices',
    '/dashboard/no-hidden-fees',
    '/dashboard/integrated-pos-hardware',
    '/dashboard/ecommerce-sync',
    '/dashboard/real-time-reports',
    '/dashboard/cannabis-compliance',
    '/dashboard/loyalty-and-crm',
    '/dashboard/cloud-based',
    '/dashboard/business-consulting',
    '/dashboard/startup-support',
    '/dashboard/startup-marketing',
    '/dashboard/cats',
    '/dashboard/automated-compliance-audits',
    '/dashboard/secure-cannabis-transactions',
    '/dashboard/careers',
    '/dashboard/legal-aide',
    '/dashboard/seo',
    '/dashboard/opposition-research',
    '/dashboard/cms',
    '/dashboard/ai',
  ];

  const staticPageUrls = staticPages.map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  return [
    ...staticPageUrls,
    ...blogPostUrls,
  ];
}
