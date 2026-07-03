import type { Metadata } from 'next'
import { CTASection } from '@/components/home/CTASection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicios — Desarrollo Web, Móvil, Cloud y UI/UX',
  description:
    'Ofrecemos desarrollo web moderno con Next.js y React, apps móviles con React Native, UI/UX design y soluciones cloud escalables en AWS, Firebase y Supabase.',
  alternates: { canonical: 'https://vexellabs.dev/servicios' },
}

const servicesList = [
  {
    title: 'Desarrollo Web',
    shortDesc: 'Aplicaciones web modernas con Next.js, React y Tailwind CSS',
    bullets: [
      'Diseño responsive',
      'SEO optimizado',
      'Performance optimization',
      'Integración de APIs',
      'Panel de administración',
    ],
    techs: 'Next.js, React, Tailwind, TypeScript',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="12" width="64" height="56" rx="8" />
        <line x1="8" y1="28" x2="72" y2="28" />
        <circle cx="16" cy="20" r="2" fill="currentColor" />
        <circle cx="24" cy="20" r="2" fill="currentColor" />
        <circle cx="32" cy="20" r="2" fill="currentColor" />
        <path d="M26 42 L18 48 L26 54" />
        <line x1="43" y1="38" x2="37" y2="58" />
        <path d="M54 42 L62 48 L54 54" />
      </svg>
    )
  },
  {
    title: 'Aplicaciones Móviles',
    shortDesc: 'Apps nativas y cross-platform para iOS y Android',
    bullets: [
      'Desarrollo iOS y Android',
      'UI/UX native',
      'Integración con APIs',
      'Push notifications',
      'Publicación en stores',
    ],
    techs: 'React Native, Flutter, Swift, Kotlin',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="22" y="10" width="36" height="60" rx="8" />
        <line x1="36" y1="16" x2="44" y2="16" />
        <line x1="37" y1="64" x2="43" y2="64" />
        <path d="M30 46 L40 28 L50 46 Z" strokeWidth="1.8" />
        <line x1="34" y1="41" x2="46" y2="41" />
      </svg>
    )
  },
  {
    title: 'UI/UX Design',
    shortDesc: 'Diseño de interfaces centradas en el usuario',
    bullets: [
      'Research y análisis',
      'Wireframes y prototipos',
      'Design systems',
      'Testing de usabilidad',
      'Handoff a desarrollo',
    ],
    techs: 'Figma, Adobe XD, Sketch',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 48 C 26 24, 54 24, 64 48" />
        <circle cx="16" cy="48" r="3" fill="white" />
        <circle cx="64" cy="48" r="3" fill="white" />
        <line x1="40" y1="18" x2="40" y2="34" />
        <circle cx="40" cy="18" r="3" fill="white" />
        <path d="M40 38 L30 52 L36 58 L40 54 L44 58 L50 52 Z" />
        <circle cx="40" cy="46" r="1.5" fill="currentColor" />
        <line x1="40" y1="46" x2="40" y2="54" />
      </svg>
    )
  },
  {
    title: 'Cloud Solutions',
    shortDesc: 'Infraestructura escalable y DevOps',
    bullets: [
      'Arquitectura cloud',
      'CI/CD pipelines',
      'Monitoreo y logging',
      'Seguridad y backups',
      'Escalabilidad automática',
    ],
    techs: 'AWS, Google Cloud, Docker, Kubernetes',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26 36 C 20 36, 16 42, 16 48 C 16 56, 22 62, 30 62 L54 62 C 60 62, 64 58, 64 52 C 64 46, 60 42, 54 42 C 54 34, 46 28, 38 28 C 34 28, 28 31, 26 36 Z" />
        <rect x="30" y="38" width="20" height="20" rx="3" fill="white" strokeWidth="1.8" />
        <line x1="33" y1="43" x2="47" y2="43" strokeWidth="1.5" />
        <line x1="33" y1="48" x2="47" y2="48" strokeWidth="1.5" />
        <line x1="33" y1="53" x2="47" y2="53" strokeWidth="1.5" />
        <circle cx="35" cy="43" r="0.8" fill="currentColor" />
        <circle cx="35" cy="48" r="0.8" fill="currentColor" />
        <circle cx="35" cy="53" r="0.8" fill="currentColor" />
      </svg>
    )
  }
]

const pricingPackages = [
  {
    title: 'STARTER',
    subtitle: 'Package',
    badge: 'Ideal para MVPs',
    badgeStyle: 'bg-purple-100/60 text-[#7857ed]',
    price: '$5,000 - $15,000',
    description: 'Perfecto para startups y proyectos pequeños',
    bullets: [
      'Landing page o sitio web básico',
      'Diseño responsive',
      '3-5 páginas',
      'SEO básico',
      '1 mes de soporte'
    ],
    delivery: 'Delivery: 4-6 semanas',
    buttonText: 'Comenzar',
    buttonStyle: 'border border-slate-200 text-slate-800 hover:border-slate-800 hover:bg-slate-50',
    isFeatured: false
  },
  {
    title: 'PROFESSIONAL',
    subtitle: 'Package',
    star: true,
    badge: 'Más popular',
    badgeStyle: 'bg-[#7857ed] text-white',
    price: '$15,000 - $35,000',
    description: 'Para negocios establecidos que buscan escalar',
    bullets: [
      'Aplicación web completa',
      'Panel de administración',
      'Integraciones de APIs',
      'Base de datos',
      'SEO avanzado',
      '3 meses de soporte'
    ],
    delivery: 'Delivery: 8-12 semanas',
    buttonText: 'Comenzar',
    buttonStyle: 'bg-[#7857ed] text-white hover:bg-[#633ee3] shadow-md shadow-[#7857ed]/15',
    isFeatured: true
  },
  {
    title: 'ENTERPRISE',
    subtitle: 'Package',
    badge: 'Solución completa',
    badgeStyle: 'bg-purple-100/60 text-[#7857ed]',
    price: '$35,000+',
    description: 'Proyectos complejos y de gran escala',
    bullets: [
      'Solución end-to-end personalizada',
      'Apps web y móviles',
      'Arquitectura cloud escalable',
      'DevOps y CI/CD',
      'Equipo dedicado',
      '6 meses de soporte'
    ],
    delivery: 'Delivery: 12-24 semanas',
    buttonText: 'Contactar',
    buttonStyle: 'border border-slate-200 text-slate-800 hover:border-slate-800 hover:bg-slate-50',
    isFeatured: false
  }
]

const workflowSteps = [
  {
    number: '01',
    title: 'Descubrimiento',
    duration: '(1-2 semanas)',
    description: 'Entendemos tu negocio, objetivos y usuarios.'
  },
  {
    number: '02',
    title: 'Planificación',
    duration: '(1 semana)',
    description: 'Definimos alcance, arquitectura y roadmap.'
  },
  {
    number: '03',
    title: 'Diseño',
    duration: '(2-3 semanas)',
    description: 'Creamos wireframes, prototipos y diseño final.'
  },
  {
    number: '04',
    title: 'Desarrollo',
    duration: '(6-12 semanas)',
    description: 'Desarrollo iterativo con sprints de 2 semanas.'
  },
  {
    number: '05',
    title: 'Testing & QA',
    duration: '(1-2 semanas)',
    description: 'Pruebas exhaustivas y corrección de bugs.'
  },
  {
    number: '06',
    title: 'Lanzamiento & Soporte',
    duration: '(Ongoing)',
    description: 'Deploy, monitoreo y soporte continuo.'
  }
]

export default function ServiciosPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0D1527] tracking-tight">
          Nuestros Servicios
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 max-w-3xl mx-auto">
          Soluciones tecnológicas end-to-end para impulsar tu negocio
        </h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          En Vexel Labs, combinamos expertise técnico con una metodología ágil para crear productos digitales escalables, seguros y de alto rendimiento que transforman ideas en realidades de negocio.
        </p>
      </div>

      {/* Services Grid */}
      <div className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((svc) => (
            <div 
              key={svc.title}
              className="bg-white border border-slate-200/60 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1"
            >
              <div className="space-y-5">
                {/* Icon wrapper */}
                <div className="w-16 h-16 text-slate-800 flex items-center justify-center">
                  {svc.icon}
                </div>

                {/* Title & short desc */}
                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-[#0D1527]">
                    {svc.title}
                  </h3>
                  <p className="text-[13.5px] text-slate-600 leading-normal font-normal">
                    {svc.shortDesc}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 pt-2">
                  {svc.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-[13.5px] text-slate-600 font-normal">
                      <span className="text-[#7857ed] font-bold text-sm select-none">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom section techs & action button */}
              <div className="space-y-5 pt-4 border-t border-slate-100">
                <p className="text-[11.5px] font-semibold text-slate-400 leading-normal tracking-wide">
                  {svc.techs}
                </p>
                <Link
                  href="/contacto"
                  className="block w-full py-2.5 text-center text-[13px] font-bold text-slate-700 hover:text-[#7857ed] border border-slate-200 hover:border-[#7857ed] rounded-full transition-all duration-200 hover:bg-purple-50/30"
                >
                  Más información
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Cómo Trabajamos Section */}
      <div className="bg-[#FCFDFF] border-t border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center space-y-3 mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1527] tracking-tight">
              Cómo Trabajamos
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-normal">
              Metodología ágil y transparente
            </p>
          </div>

          {/* Timeline container */}
          <div className="relative">
            {/* Timeline line connecting node circles across cards */}
            <div className="hidden lg:block absolute top-[94px] left-6 right-6 h-[1px] bg-slate-200 -z-0" />
            
            {/* Steps Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-12 gap-x-6 relative z-10">
              {workflowSteps.map((step, idx) => (
                <div key={step.number} className="relative flex flex-col space-y-3 group">
                  
                  {/* Step label & title */}
                  <div className="space-y-1.5">
                    <span className="text-3xl font-extrabold text-slate-300 group-hover:text-[#7857ed] transition-colors duration-300">
                      {step.number}
                    </span>
                    <h3 className="text-[15px] font-bold text-[#0D1527] leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[12px] text-slate-400 font-semibold leading-none">
                      {step.duration}
                    </p>
                  </div>

                  {/* Dot/Arrow Connection Visual Row */}
                  <div className="relative w-full my-2 flex items-center justify-between">
                    {/* Circle Node */}
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-300 bg-white group-hover:border-[#7857ed] transition-colors duration-300 z-10 shrink-0" />
                    
                    {/* Connector line (only on lg:grid-cols-6, except for the last step) */}
                    {idx < 5 && (
                      <div className="hidden lg:flex absolute left-3.5 right-0 h-[1.5px] bg-slate-200 group-hover:bg-[#7857ed]/40 transition-colors duration-300 items-center justify-end">
                        {/* Arrow tip pointing right */}
                        <span className="border-t-[1.5px] border-r-[1.5px] border-slate-200 group-hover:border-[#7857ed]/50 w-1.5 h-1.5 rotate-45 -mr-0.5" />
                      </div>
                    )}
                  </div>

                  {/* Description text */}
                  <p className="text-[13px] text-slate-500 leading-relaxed font-normal">
                    {step.description}
                  </p>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Pricing Packages Section */}
      <div className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.title}
                className={`bg-white rounded-[28px] p-6 sm:p-8 flex flex-col justify-between space-y-8 relative transition-all duration-300 ${
                  pkg.isFeatured
                    ? 'border-2 border-[#7857ed] shadow-xl shadow-purple-50/70 scale-[1.02] z-10'
                    : 'border border-slate-200/60 hover:border-slate-400/80 shadow-sm'
                }`}
              >
                
                {/* Package Head */}
                <div className="space-y-6">
                  
                  {/* Badge & Title line */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-black text-[#0D1527] tracking-tight leading-none">
                        {pkg.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400 mt-1 flex items-center gap-1">
                        {pkg.subtitle}
                        {pkg.star && <span className="text-yellow-400 text-sm">★</span>}
                      </p>
                    </div>
                    
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full shrink-0 ${pkg.badgeStyle}`}>
                      {pkg.badge}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <p className="text-3xl sm:text-4xl font-extrabold text-[#0D1527] tracking-tight">
                      {pkg.price}
                    </p>
                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 pt-2">
                    {pkg.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-[13px] text-slate-600 font-normal">
                        <span className="w-1.5 h-1.5 rounded-full border border-slate-400 bg-transparent shrink-0 mt-1.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Package Footer & button */}
                <div className="space-y-5 pt-4 border-t border-slate-100">
                  <p className="text-[12.5px] text-slate-600 font-normal">
                    <span className="font-bold text-slate-800">Delivery:</span> {pkg.delivery.replace('Delivery: ', '')}
                  </p>
                  
                  <Link
                    href="/contacto"
                    className={`block w-full py-3 text-center text-[13px] font-bold rounded-full transition-all duration-200 ${pkg.buttonStyle}`}
                  >
                    {pkg.buttonText}
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Servicios Complementarios & Stack Section */}
      <div className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Servicios Complementarios */}
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D1527] tracking-tight">
                Servicios Complementarios
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Mantenimiento y Soporte',
                  'Consultoría Técnica',
                  'Auditoría de Código',
                  'Migración de Plataformas',
                  'Training y Capacitación'
                ].map((item) => (
                  <div 
                    key={item}
                    className="bg-white border border-slate-200/60 rounded-[18px] px-5 py-4 flex items-center shadow-sm hover:border-slate-300 transition-colors"
                  >
                    <span className="text-[13.5px] font-bold text-slate-800 flex items-center gap-2">
                      <span className="text-slate-400 select-none text-base leading-none">•</span>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Stack Tecnológico */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D1527] tracking-tight">
                Stack Tecnológico
              </h2>
              
              <div className="space-y-6 bg-slate-50/20 border border-slate-100/60 rounded-[28px] p-6 sm:p-8 select-none">
                
                {/* Row 1: Web Stack */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                  {/* Next.js */}
                  <div className="flex items-center gap-1.5 shrink-0 text-slate-800">
                    <svg viewBox="0 0 120 30" className="h-5" fill="currentColor">
                      <path d="M14.3 24.3l-5.6-7.8h-.1v7.8H5.3V9.7h4.1l4.9 6.8h.1V9.7h3.3v14.6h-3.4zM24.7 20.3c0 2.7 2 4.4 4.8 4.4 2.2 0 3.7-1.1 4.3-2.7h-3.3v-2.3h6.5v.7c0 4.1-3 6.7-7.5 6.7-5 0-8.1-3.3-8.1-8.1 0-5 3.3-8.2 8.2-8.2 4.5 0 7.4 2.7 7.4 7.2v.3h-12.3zm8.9-3.9c-.3-1.6-1.6-2.6-3.8-2.6-2.3 0-3.8 1.1-4.7 2.6h8.5zM42.1 12.5l2.4-3.5h3.9l-4.4 5.9 4.6 6.7h-3.9l-2.6-4.1-2.7 4.1H35.6l4.6-6.7-4.4-5.9h3.9l2.4 3.5zm8.1 11.2c.4 0 .7-.3.7-.7s-.3-.7-.7-.7-.7.3-.7.7.3.7.7.7zm2.4.6h1.2v-1.9H55v1.9h1.2v-4.4h-1.2v1.2h-1.4v-1.2h-1.2v4.4z" />
                    </svg>
                    <span className="text-[9px] font-bold text-slate-400 self-end -mb-0.5">JS</span>
                  </div>

                  {/* React */}
                  <div className="flex items-center gap-1.5 shrink-0 text-[#00d8ff]">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 animate-pulse-slow" fill="none" stroke="currentColor" strokeWidth="2">
                      <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(0 12 12)" />
                      <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(60 12 12)" />
                      <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(120 12 12)" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                    <span className="text-[13px] font-bold text-slate-600">React</span>
                  </div>

                  {/* Tailwind */}
                  <div className="flex items-center gap-1.5 shrink-0 text-[#38bdf8]">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C9.664 13.382 8.303 12 5.329 12z" />
                    </svg>
                    <span className="text-[13px] font-bold text-slate-600">tailwindcss</span>
                  </div>

                  {/* TypeScript */}
                  <div className="flex items-center gap-1.5 shrink-0 text-[#3178c6]">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 rounded" fill="currentColor">
                      <rect width="24" height="24" rx="3" />
                      <path d="M15.5 12h-2v5.5h-1.5V12h-2v-1.5h5.5V12zm5.5 2.5c0 1.2-.5 2.2-1.5 2.7s-2.1.2-2.9-.3l.7-1.1c.6.4 1.3.6 1.9.3.5-.2.8-.7.8-1.2V14h-1.5v-1.5h1.5v-.5c0-.8-.5-1.3-1.3-1.3-.6 0-1.2.3-1.6.8l-.9-.9c.7-.9 1.7-1.3 2.8-1.3 1.9 0 2.8 1 2.8 2.7v4z" fill="white" />
                    </svg>
                    <span className="text-[13px] font-bold text-slate-600">TypeScript</span>
                  </div>

                  {/* React Native Cyan */}
                  <div className="flex items-center gap-1.5 shrink-0 text-[#00d8ff]/90">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(0 12 12)" />
                      <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(60 12 12)" />
                      <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(120 12 12)" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                  </div>

                </div>

                {/* Row 2: Mobile & Design */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-4 border-t border-slate-100/60">
                  
                  {/* Flutter */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M14.3 2.3L5 11.6l3.7 3.7 9.3-9.3h-3.7z" className="fill-[#02569B]" />
                      <path d="M18 11.6L8.7 20.9l3.7 3.7L21.7 15.3H18z" className="fill-[#0175C2]" />
                      <path d="M14.3 11.6l-5.6 5.6 1.9 1.9 5.6-5.6h-1.9z" className="fill-[#29B6F6]" />
                    </svg>
                    <span className="text-[13px] font-bold text-slate-600">Flutter</span>
                  </div>

                  {/* Swift */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#f05138]" fill="currentColor">
                      <path d="M22.016 13.064c-.015-.098-.03-.207-.052-.33-.314-1.782-1.39-3.267-2.613-4.323-1.636-1.411-3.666-2.128-5.748-2.316.03.048.06.094.09.139.757 1.134 1.34 2.457 1.05 3.968-.15.787-.551 1.489-.968 2.115-.99 1.485-2.28 2.505-3.84 3.255-1.294.622-2.67.926-4.072.848.435.48.922.9 1.462 1.256 1.77 1.166 3.93 1.586 6.008 1.451 1.751-.116 3.525-.795 4.886-1.946.994-.844 1.785-1.928 2.411-3.116.518-.986.953-2.025 1.386-3.001zm-3.653-5.269c-.068.048-.124.116-.176.195-1.125 1.718-3.09 2.528-4.995 2.872.221-.491.461-1.028.66-1.613.352-1.031.398-2.145.023-3.15-.045.011-.086.023-.131.038-2.018.66-3.566 2.115-4.47 3.945-.484.975-.724 2.01-.818 3.03-.023.236-.038.473-.038.713 0 .045.008.09.008.135-.008-.03-.023-.056-.038-.083-.757-1.309-2.018-2.19-3.398-2.678l-.068-.023c1.076 1.631 1.313 3.656.761 5.569-.323 1.121-.99 2.081-1.748 2.914 1.8-.18 3.548-.87 4.98-1.969 1.455-1.11 2.505-2.58 3.323-4.17 1.05-2.04 1.028-4.328.18-6.398l-.03-.09zm0 0" />
                    </svg>
                    <span className="text-[13px] font-bold text-slate-600">Swift</span>
                  </div>

                  {/* Kotlin */}
                  <div className="flex items-center gap-1.5 shrink-0 text-[#7F52FF]">
                    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 rounded" fill="none">
                      <path d="M24 24H0V0h24L12 12z" fill="currentColor" className="text-purple-600" />
                      <path d="M0 24L12 12L24 24Z" fill="currentColor" className="text-orange-500" />
                    </svg>
                    <span className="text-[13px] font-bold text-slate-600">Kotlin</span>
                  </div>

                  {/* Figma */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none">
                      <path d="M12 6a3 3 0 1 0-6 0 3 3 0 0 0 6 0z" fill="#F24E1E" />
                      <path d="M6 12a3 3 0 0 0 6 0 3 3 0 1 0-6 0z" fill="#A259FF" />
                      <path d="M12 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" fill="#1ABC9C" />
                      <path d="M12 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" fill="#19B5FE" />
                      <path d="M6 18a3 3 0 0 0 6 0v-6H6a3 3 0 0 0 0 6z" fill="#0ACF83" />
                    </svg>
                    <span className="text-[13px] font-bold text-slate-600">Figma</span>
                  </div>

                  {/* Adobe XD */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-5 h-5 rounded bg-[#470137] text-[#FF61F6] flex items-center justify-center font-bold text-[9px] select-none border border-[#FF61F6]/20">
                      Xd
                    </div>
                    <span className="text-[13px] font-bold text-slate-600">Xd</span>
                  </div>

                  {/* Sketch */}
                  <div className="flex items-center gap-1.5 shrink-0 text-[#fdb300]">
                    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
                      <path d="M12 2L2 9.5L12 22L22 9.5L12 2Z" fillOpacity="0.2" />
                      <path d="M2 9.5L12 2L22 9.5L12 12.5L2 9.5Z" />
                      <path d="M12 22L2 9.5L12 12.5L22 9.5L12 22Z" fillOpacity="0.4" />
                    </svg>
                    <span className="text-[13px] font-bold text-slate-600">Sketch</span>
                  </div>

                </div>

                {/* Row 3: Backend & Databases */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-4 border-t border-slate-100/60">
                  
                  {/* Node */}
                  <div className="flex items-center gap-1.5 shrink-0 text-[#339933]">
                    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
                      <path d="M12 1.5l10.5 6v12L12 25.5l-10.5-6v-12z" fillOpacity="0.1" />
                      <path d="M12 3.2v9.3l9.1-5.2z" />
                      <path d="M12 12.5v9.3l-9.1-5.2z" fillOpacity="0.6" />
                      <path d="M21.1 7.3v9.3L12 21.8v-9.3z" fillOpacity="0.4" />
                    </svg>
                    <span className="text-[13px] font-bold text-slate-600">node</span>
                  </div>

                  {/* Python */}
                  <div className="flex items-center gap-1.5 shrink-0 text-[#3776ab]">
                    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
                      <path d="M12 2c-5.523 0-5 2.183-5 4v1h5v1H7c-1.817 0-3 .929-3 3v4c0 1.8 1.183 3 3 3h1v-2c0-1.88 1.455-3 3-3h4c1.545 0 3-1.12 3-3V7c0-1.817-1.183-5-7-5z" fill="#306998" />
                      <path d="M12 22c5.523 0 5-2.183 5-4v-1h-5v-1h5c1.817 0 3-.929 3-3v-4c0-1.8-1.183-3-3-3h-1v2c0 1.88-1.455 3-3 3h-4c-1.545 0-3 1.12-3 3v4c0 1.8 1.183 5 7 5z" fill="#FFE873" />
                    </svg>
                    <span className="text-[13px] font-bold text-slate-600">python</span>
                  </div>

                  {/* GraphQL */}
                  <div className="flex items-center gap-1.5 shrink-0 text-[#e10098]">
                    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" />
                      <circle cx="12" cy="12" r="3" fill="currentColor" />
                      <line x1="12" y1="2" x2="12" y2="22" />
                      <line x1="2" y1="7" x2="22" y2="17" />
                      <line x1="2" y1="17" x2="22" y2="7" />
                    </svg>
                    <span className="text-[13px] font-bold text-slate-600">GraphQL</span>
                  </div>

                  {/* PostgreSQL */}
                  <div className="flex items-center gap-1.5 shrink-0 text-[#336791]">
                    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
                      <path d="M12 2c-4.4 0-8 3.6-8 8v4c0 .6.4 1 1 1h1v3c0 2.2 1.8 4 4 4h4c2.2 0 4-1.8 4-4v-3h1c.6 0 1-.4 1-1v-4c0-4.4-3.6-8-8-8zm-2 12H8v-2h2v2zm6-2h-2v-2h2v2z" />
                    </svg>
                    <span className="text-[13px] font-bold text-slate-600">PostgreSQL</span>
                  </div>

                  {/* MongoDB */}
                  <div className="flex items-center gap-1.5 shrink-0 text-[#13aa52]">
                    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
                      <path d="M12 1.5C12 1.5 6.5 8 6.5 13.5C6.5 17 8.5 20.5 12 22.5C15.5 20.5 17.5 17 17.5 13.5C17.5 8 12 1.5 12 1.5ZM12 19.5c-2.2-1.3-3.5-3.3-3.5-6C8.5 9.8 12 5 12 5s3.5 4.8 3.5 8.5C15.5 16.2 14.2 18.2 12 19.5Z" />
                    </svg>
                    <span className="text-[13px] font-bold text-slate-600">mongoDB</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Custom Services CTA Section */}
      <div className="py-20 bg-white border-t border-slate-100/60 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D1527] tracking-tight">
          ¿No estás seguro qué paquete elegir?
        </h2>
        <p className="text-slate-500 text-[14px] sm:text-base font-normal max-w-xl mx-auto px-4 leading-relaxed">
          Agenda una consulta gratuita y te ayudaremos a encontrar la mejor solución
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contacto"
            className="px-6 py-3 rounded-full text-[13.5px] font-bold text-white bg-[#7857ed] hover:bg-[#633ee3] shadow-md shadow-[#7857ed]/15 transition-all duration-200 hover:-translate-y-0.5"
          >
            Agendar consulta
          </Link>
          <Link
            href="/portafolio"
            className="px-6 py-3 rounded-full text-[13.5px] font-bold text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-800 transition-all duration-200 hover:-translate-y-0.5"
          >
            Ver portafolio
          </Link>
        </div>
      </div>

    </div>
  )
}
