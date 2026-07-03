export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: 'web' | 'mobile' | 'cloud' | 'saas'
  featured?: boolean
  // Detail fields
  subtitle?: string
  overview?: string
  challenge?: string
  solution?: string
  client?: string
  industry?: string
  duration?: string
  team?: string
  platform?: string
  liveUrl?: string
  features?: Array<{
    icon: string
    title: string
    description: string
  }>
}
