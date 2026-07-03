'use client'

import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { SectionHeader } from '@/components/shared/SectionHeader'

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 bg-[#FCFDFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nuestros Proyectos"
          centered={true}
        />

        {/* 12-Column Responsive Masonry Grid matching reference vertical alignment */}
        <div className="grid grid-cols-12 gap-5">
          {/* Row 1 */}
          <div className="col-span-12 lg:col-span-6">
            <ProjectCard project={projects[0]} />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <ProjectCard project={projects[1]} />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <ProjectCard project={projects[2]} />
          </div>

          {/* Row 2 */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <ProjectCard project={projects[3]} />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <ProjectCard project={projects[4]} />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ProjectCard project={projects[5]} />
          </div>
        </div>
      </div>
    </section>
  )
}
