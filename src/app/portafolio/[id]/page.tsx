import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { projects } from '@/data/projects'
import { Button } from '@/components/ui/button'

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

// Generate static routes for all projects
export async function generateStaticParams() {
  return projects.map(p => ({
    id: p.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find(p => p.id === id)

  if (!project) return {}

  return {
    title: `${project.id === 'ecommerce-fashion' ? 'NexCommerce' : project.title} — Caso de Estudio`,
    description: project.subtitle ?? project.description,
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find(p => p.id === id)

  if (!project) {
    notFound()
  }

  const isMobile = project.category === 'mobile'
  const displayTitle = project.id === 'ecommerce-fashion' ? 'NexCommerce' : project.title

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Upper Section with light cool gray background split */}
      <div 
        className="relative pt-8 pb-12 sm:pb-16 flex flex-col items-center"
        style={{
          background: 'linear-gradient(to bottom, #F3F4F8 82%, #FFFFFF 18%)'
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/portafolio" 
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200 mb-8 font-medium"
          >
            <ArrowLeft size={16} />
            Volver al portafolio
          </Link>
        </div>

        {/* Hero Content */}
        <div className="w-full max-w-4xl mx-auto px-4 text-center z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#0D1527] tracking-tight mb-4">
            {displayTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium mb-6">
            {project.subtitle}
          </p>

          {/* Tech Badges (Pills with transparent background and purple outline) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-[13px] font-medium px-4 py-1.5 rounded-full border border-purple-200 text-purple-600 bg-white/40 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Large Mockup Container */}
        <div className="w-full max-w-5xl mx-auto px-4 flex items-end justify-center select-none z-20">
          {isMobile ? (
            /* Large Phone Frame Mockup */
            <div className="relative w-[30%] min-w-[180px] max-w-[240px] aspect-[9/18.5] bg-slate-950 rounded-[32px] border-[6px] border-slate-900 shadow-2xl overflow-hidden mb-[-12px]">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[35%] h-3 bg-slate-900 rounded-full z-20" />
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          ) : (
            /* Large Laptop Frame Mockup */
            <div className="relative w-full sm:w-[90%] lg:w-[82%] flex flex-col items-center justify-end">
              <div className="relative w-full aspect-[16/10] bg-slate-950 rounded-t-2xl border-[8px] border-slate-900 shadow-2xl overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Laptop Keyboard Base */}
              <div className="relative w-[114%] h-[12px] bg-slate-800 rounded-b-xl shadow-lg border-t border-slate-700/50" />
              {/* Opener Notch */}
              <div className="relative w-[18%] h-[3px] bg-slate-700/80 rounded-b-md" />
            </div>
          )}
        </div>
      </div>

      {/* Main Grid Content (2/3 & 1/3) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Overview, Challenge, Solution) */}
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D1527] mb-4">
                Overview
              </h2>
              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed font-normal">
                {project.overview}
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D1527] mb-4">
                El Desafío
              </h2>
              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed font-normal">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D1527] mb-4">
                La Solución
              </h2>
              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Right Column (Sidebar details card) */}
          <div className="md:col-span-1">
            <div className="bg-[#F3F4F8] border border-slate-200/50 rounded-[28px] p-6 sm:p-8 space-y-8 sticky top-28 shadow-sm">
              <div className="space-y-4">
                {[
                  { label: 'Cliente', value: project.client },
                  { label: 'Industria', value: project.industry },
                  { label: 'Duración', value: project.duration },
                  { label: 'Equipo', value: project.team },
                  { label: 'Plataforma', value: project.platform },
                ].map(item => (
                  <div key={item.label} className="border-b border-slate-200/40 pb-3 last:border-0 last:pb-0">
                    <p className="text-xs text-slate-400 font-medium tracking-wide uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-slate-800 leading-snug">
                      {item.value || 'N/A'}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Live Site Button */}
              {project.liveUrl && (
                <div>
                  <Button
                    asChild
                    className="w-full bg-[#7857ed] hover:bg-[#633ee3] text-white py-3 h-auto rounded-xl font-semibold text-sm shadow-md shadow-purple-100 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Ver sitio en vivo
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Dynamic Key Features Section */}
      {project.features && project.features.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 pt-16 pb-20 mt-8">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
            {project.features.map(feat => (
              <div key={feat.title} className="space-y-4">
                <div className="w-10 h-10 flex items-center justify-start text-[#7857ed]">
                  {renderFeatureIcon(feat.icon)}
                </div>
                <h3 className="text-base font-bold text-[#0D1527] leading-snug">
                  {feat.title}
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Case Study Final CTA Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-[#F3F4F8] border border-slate-200/50 rounded-[28px] py-12 px-6 text-center flex flex-col items-center justify-center shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0D1527] mb-6 tracking-tight">
            ¿Tienes un proyecto similar?
          </h3>
          <Button
            asChild
            size="lg"
            className="bg-[#7857ed] hover:bg-[#633ee3] text-white px-8 py-3.5 h-auto rounded-xl font-semibold text-[15px] shadow-md shadow-purple-100 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <Link href="/contacto">
              Hablemos de tu proyecto
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function renderFeatureIcon(icon: string) {
  const props = {
    className: "w-8 h-8 text-[#7857ed]",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  }

  switch (icon) {
    case 'package':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    case 'search':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    case 'credit-card':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <rect x="2" y="4" width="20" height="14" rx="2" />
          <line x1="2" y1="9" x2="22" y2="9" />
          <line x1="6" y1="14" x2="10" y2="14" />
          <circle cx="18" cy="14" r="2" />
        </svg>
      )
    case 'laptop':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <rect x="2" y="3" width="14" height="11" rx="1.5" />
          <line x1="1" y1="18" x2="17" y2="18" />
          <rect x="16" y="8" width="6" height="10" rx="1" />
        </svg>
      )
    case 'grid':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <circle cx="17" cy="6" r="3" fill="currentColor" fillOpacity="0.15" />
          <rect x="3" y="15" width="6" height="6" rx="1" />
          <rect x="15" y="15" width="6" height="6" rx="1" />
        </svg>
      )
    case 'bar-chart':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    default:
      return null
  }
}
