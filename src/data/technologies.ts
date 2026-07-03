export interface Technology {
  id: string
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'cloud' | 'tools'
}

export const technologies: Technology[] = [
  { id: 'nextjs', name: 'Next.js', icon: 'nextjs', category: 'frontend' },
  { id: 'react', name: 'React', icon: 'react', category: 'frontend' },
  { id: 'tailwind', name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend' },
  { id: 'shadcn', name: 'Shadcn/ui', icon: 'shadcn', category: 'frontend' },
  { id: 'typescript', name: 'TypeScript', icon: 'typescript', category: 'tools' },
  { id: 'reactnative', name: 'React Native', icon: 'react', category: 'mobile' },
  { id: 'expo', name: 'Expo', icon: 'expo', category: 'mobile' },
  { id: 'nodejs', name: 'Node.js', icon: 'nodejs', category: 'backend' },
  { id: 'express', name: 'Express.js', icon: 'express', category: 'backend' },
  { id: 'nestjs', name: 'NestJS', icon: 'nestjs', category: 'backend' },
  { id: 'go', name: 'Go', icon: 'go', category: 'backend' },
  { id: 'firebase', name: 'Firebase', icon: 'firebase', category: 'cloud' },
  { id: 'supabase', name: 'Supabase', icon: 'supabase', category: 'cloud' },
  { id: 'aws', name: 'AWS', icon: 'aws', category: 'cloud' },
  { id: 'postgresql', name: 'PostgreSQL', icon: 'postgresql', category: 'database' },
  { id: 'mongodb', name: 'MongoDB', icon: 'mongodb', category: 'database' },
]
