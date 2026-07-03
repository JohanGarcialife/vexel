import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vexellabs.dev'
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/servicios`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/portafolio`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/tecnologias`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/nosotros`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contacto`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
