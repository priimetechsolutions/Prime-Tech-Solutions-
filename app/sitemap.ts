import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const sections = ['', '#sobre', '#servicos', '#beneficios', '#faq', '#contato']

  return sections.map((section) => ({
    url: `${siteConfig.url}/${section}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: section === '' ? 1 : 0.8,
  }))
}
