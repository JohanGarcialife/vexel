import { technologies } from '@/data/technologies'
import { TechBadge } from '@/components/ui/TechBadge'
import { SectionHeader } from '@/components/shared/SectionHeader'

export function TechnologiesSection() {
  return (
    <section id="tecnologias" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Tecnologías"
          subtitle="Trabajamos con las herramientas más modernas y demandadas del mercado."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map(tech => (
            <TechBadge key={tech.id} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  )
}
