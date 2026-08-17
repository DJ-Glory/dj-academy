import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    { url: '/',                                        priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/courses',                                 priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/simulator',                               priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/skill-test',                              priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/tools',                                   priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/knowledge-hub',                           priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/knowledge-hub/what-is-bpm',              priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/knowledge-hub/what-is-beatmatching',     priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/knowledge-hub/rekordbox-vs-serato',      priority: 0.6, changeFrequency: 'yearly' as const },
  ]

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${SITE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
