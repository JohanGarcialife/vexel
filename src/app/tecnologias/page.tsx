import type { Metadata } from 'next'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { technologies } from '@/data/technologies'
import { TechBadge } from '@/components/ui/TechBadge'
import { CTASection } from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'Tecnologías — Next.js, React, Node.js, Go, Firebase y más',
  description:
    'Trabajamos con Next.js, React, React Native, TypeScript, Node.js, NestJS, Go, Supabase, Firebase, AWS, PostgreSQL, MongoDB, Tailwind CSS y Shadcn/ui.',
  alternates: { canonical: 'https://vexellabs.dev/tecnologias' },
}

const categories = {
  frontend: 'Frontend',
  mobile: 'Mobile',
  backend: 'Backend',
  database: 'Bases de Datos',
  cloud: 'Cloud & DevOps',
  tools: 'Herramientas',
} as const

export default function TecnologiasPage() {
  const grouped = Object.entries(categories).map(([key, label]) => ({
    key,
    label,
    techs: technologies.filter(t => t.category === key),
  }))

  return (
    <>
      <div className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Nuestras Tecnologías"
            subtitle="El stack que utilizamos para construir productos digitales de alto rendimiento."
          />
          <div className="space-y-12">
            {grouped.map(({ key, label, techs }) =>
              techs.length > 0 ? (
                <div key={key}>
                  <h2 className="text-xl font-semibold text-slate-800 mb-5">{label}</h2>
                  <div className="flex flex-wrap gap-3">
                    {techs.map(tech => (
                      <TechBadge key={tech.id} tech={tech} />
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  )
}
