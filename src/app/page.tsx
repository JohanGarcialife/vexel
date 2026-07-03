import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ProjectsSection } from '@/components/home/ProjectsSection'
import { TechnologiesSection } from '@/components/home/TechnologiesSection'
import { CTASection } from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'Vexel Labs — Construimos software que impulsa tu negocio',
  description:
    'Agencia de desarrollo de software especializada en Next.js, React, React Native, Node.js, Go, Firebase, Supabase y AWS. Soluciones web, móviles y cloud escalables.',
  alternates: {
    canonical: 'https://vexellabs.dev',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vexel Labs',
  url: 'https://vexellabs.dev',
  logo: 'https://vexellabs.dev/logo-icon.svg',
  description:
    'Agencia de desarrollo de software especializada en soluciones web, móviles y cloud escalables.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hola@vexellabs.dev',
    contactType: 'customer service',
    availableLanguage: ['Spanish', 'English'],
  },
  sameAs: [
    'https://github.com/vexellabs',
    'https://linkedin.com/company/vexellabs',
    'https://twitter.com/vexellabs',
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TechnologiesSection />
      <CTASection />
    </>
  )
}
