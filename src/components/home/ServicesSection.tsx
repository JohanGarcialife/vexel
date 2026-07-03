'use client'

import { SectionHeader } from '@/components/shared/SectionHeader'

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-[#FCFDFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nuestros Servicios"
          centered={true}
        />

        <div className="grid grid-cols-6 gap-5">
          {/* 1. Desarrollo Web Moderno (col-span 3) */}
          <div className="col-span-6 lg:col-span-3 bg-[#F3F4F8] border border-slate-200/50 rounded-[28px] p-8 sm:p-12 flex flex-col items-center text-center transition-all duration-300 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50">
            {/* SVG Icon */}
            <div className="mb-6 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-20 h-20 text-[#7857ed]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="12" width="48" height="40" rx="4" />
                <line x1="8" y1="24" x2="56" y2="24" />
                <circle cx="15" cy="18" r="1" fill="currentColor" />
                <circle cx="21" cy="18" r="1" fill="currentColor" />
                <circle cx="27" cy="18" r="1" fill="currentColor" />
                <path d="M24 34L18 38L24 42" />
                <path d="M40 34L46 38L40 42" />
                <line x1="35" y1="32" x2="29" y2="44" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0D1527] mb-3">
              Desarrollo Web Moderno
            </h3>
            <p className="text-slate-500 text-[14.5px] leading-relaxed max-w-sm">
              Sitios web y aplicaciones web de alto rendimiento utilizando Next.js y React, optimizados para velocidad y SEO.
            </p>
          </div>

          {/* 2a. Mobile Apps - Icon Box (col-span 1) */}
          <div className="col-span-6 sm:col-span-2 lg:col-span-1 bg-[#F3F4F8] border border-slate-200/50 rounded-[28px] p-6 flex items-center justify-center transition-all duration-300 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50">
            <svg viewBox="0 0 64 64" className="w-20 h-20 text-[#7857ed]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="20" y="8" width="24" height="48" rx="4" />
              <line x1="28" y1="12" x2="36" y2="12" strokeWidth="2.2" />
              <circle cx="32" cy="50" r="2" fill="currentColor" />
              <path d="M38 32H50" strokeWidth="2" />
              <path d="M46 27L51 32L46 37" strokeWidth="2" />
            </svg>
          </div>

          {/* 2b. Mobile Apps - Text Box (col-span 2) */}
          <div className="col-span-6 sm:col-span-4 lg:col-span-2 bg-[#F3F4F8] border border-slate-200/50 rounded-[28px] p-8 sm:p-10 flex flex-col justify-center transition-all duration-300 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50">
            <h3 className="text-xl font-semibold text-[#0D1527] mb-1">
              Apps Móviles
            </h3>
            <h4 className="text-[14.5px] font-medium text-slate-800 mb-3 leading-snug">
              Aplicaciones Móviles Nativas y Cross-Platform
            </h4>
            <p className="text-slate-500 text-[14px] leading-relaxed">
              Apps para iOS y Android con React Native y Flutter, ofreciendo experiencias de usuario fluidas y consistentes.
            </p>
          </div>

          {/* 3a. UI/UX Design - Icon Box (col-span 1) */}
          <div className="col-span-6 sm:col-span-2 lg:col-span-1 bg-[#F3F4F8] border border-slate-200/50 rounded-[28px] p-6 flex items-center justify-center transition-all duration-300 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50">
            <svg viewBox="0 0 64 64" className="w-20 h-20 text-[#7857ed]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="8" y="12" width="48" height="40" rx="4" />
              <line x1="8" y1="24" x2="56" y2="24" />
              <line x1="28" y1="24" x2="28" y2="52" />
              <line x1="28" y1="38" x2="56" y2="38" />
              <circle cx="15" cy="18" r="1.2" fill="currentColor" />
              <circle cx="21" cy="18" r="1.2" fill="currentColor" />
              <circle cx="27" cy="18" r="1.2" fill="currentColor" />
              {/* Selection cursor arrow */}
              <path d="M44 38L52 50L47 48L44 38Z" fill="currentColor" />
              <path d="M44 38L52 50L47 48" />
            </svg>
          </div>

          {/* 3b. UI/UX Design - Text Box (col-span 2) */}
          <div className="col-span-6 sm:col-span-4 lg:col-span-2 bg-[#F3F4F8] border border-slate-200/50 rounded-[28px] p-8 sm:p-10 flex flex-col justify-center transition-all duration-300 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50">
            <h3 className="text-xl font-semibold text-[#0D1527] mb-1">
              UI/UX Design
            </h3>
            <h4 className="text-[14.5px] font-medium text-slate-800 mb-3 leading-snug">
              Diseño de Interfaz y Experiencia de Usuario
            </h4>
            <p className="text-slate-500 text-[14px] leading-relaxed">
              Creación de interfaces intuitivas y atractivas, enfocadas en la usabilidad y la satisfacción del usuario, siguiendo principios modernos de diseño.
            </p>
          </div>

          {/* 4. Soluciones en la Nube Escalables (col-span 3) */}
          <div className="col-span-6 lg:col-span-3 bg-[#F3F4F8] border border-slate-200/50 rounded-[28px] p-8 sm:p-12 flex flex-col items-center text-center transition-all duration-300 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50">
            {/* SVG Icon */}
            <div className="mb-6 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-22 h-22 text-[#7857ed]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 46C13.58 46 10 42.42 10 38C10 34.03 12.89 30.73 16.8 30.13C18.26 22.08 25.28 16 33.71 16C41.7 16 48.42 21.46 50.17 28.97C54.6 29.56 58 33.39 58 38C58 42.42 54.42 46 50 46H18Z" />
                <line x1="28" y1="30" x2="28" y2="42" />
                <path d="M24 38L28 42L32 38" />
                <line x1="36" y1="42" x2="36" y2="30" />
                <path d="M32 34L36 30L40 34" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0D1527] mb-3">
              Soluciones en la Nube Escalables
            </h3>
            <p className="text-slate-500 text-[14.5px] leading-relaxed max-w-sm">
              Implementación de arquitecturas serverless, despliegue automatizado y gestión de infraestructura en AWS, Vercel y Google Cloud.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
