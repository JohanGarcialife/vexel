'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/types/project'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const isMobile = project.category === 'mobile'

  return (
    <Link
      href={`/portafolio/${project.id}`}
      className={cn(
        'group bg-[#F3F4F8] border border-slate-200/50 rounded-[28px] overflow-hidden flex flex-col h-full cursor-pointer',
        'hover:border-purple-300 hover:shadow-xl hover:shadow-purple-50/50 transition-all duration-300 hover:-translate-y-1',
        className
      )}
    >
      {/* Mockup Frame Container */}
      <div className="relative h-[220px] sm:h-[240px] bg-[#E4E7EC] flex items-end justify-center overflow-hidden w-full select-none pt-6">
        {isMobile ? (
          /* Phone Frame Mockup (Centered, slightly protruding at bottom) */
          <div className="relative w-[34%] min-w-[110px] max-w-[140px] aspect-[9/18.5] bg-slate-950 rounded-[24px] border-[4px] border-slate-900 shadow-xl overflow-hidden mb-[-4px] flex items-center justify-center">
            {/* Dynamic Island Notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[35%] h-2.5 bg-slate-900 rounded-full z-20" />
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                className="object-cover"
                sizes="150px"
              />
            </div>
          </div>
        ) : (
          /* Laptop Frame Mockup (Centered, keyboard base at bottom) */
          <div className="relative w-full flex flex-col items-center justify-end h-full px-6 pb-2">
            <div className="relative w-[82%] sm:w-[78%] aspect-[16/10] bg-slate-950 rounded-t-lg border-[5px] border-slate-900 shadow-lg overflow-hidden">
              <div className="relative w-full h-full animate-pulse-slow">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            </div>
            {/* Keyboard base (horizontal bar) */}
            <div className="relative w-[94%] h-[6px] bg-slate-800 rounded-b-md shadow-md" />
            {/* Notch indent */}
            <div className="relative w-[20%] h-[1.5px] bg-slate-700/60 rounded-b-sm" />
          </div>
        )}
      </div>

      {/* Content Metadata */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-[#7857ed] transition-colors duration-200 leading-snug">
            {project.title}
          </h3>
          <p className="text-slate-500 text-[13.5px] leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-200/50 text-slate-600 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
