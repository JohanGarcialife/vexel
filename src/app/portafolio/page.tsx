import type { Metadata } from 'next'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { CTASection } from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'Portafolio — Proyectos de Vexel Labs',
  description:
    'Explora los proyectos que hemos desarrollado: plataformas e-commerce, SaaS dashboards, apps bancarias móviles, fitness trackers y más.',
  alternates: { canonical: 'https://vexellabs.dev/portafolio' },
}

export default function PortafolioPage() {
  return (
    <>
      <div className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Nuestro Portafolio"
            subtitle="Proyectos que demuestran nuestra capacidad técnica y atención al detalle."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  )
}
