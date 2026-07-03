import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nosotros — Vexel Labs',
  description:
    'Vexel Labs es una agencia de software dedicada a crear soluciones digitales innovadoras que impulsan el crecimiento y la eficiencia.',
  alternates: { canonical: 'https://vexellabs.dev/nosotros' },
}

export default function NosotrosPage() {
  return (
    <div className="bg-[#FCFDFF] min-h-screen pt-24 sm:pt-28 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Soft background light */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="space-y-6 max-w-xl">
            <h1 className="text-[38px] sm:text-[50px] lg:text-[56px] font-bold text-[#0D1527] leading-[1.12] tracking-tight">
              Construyendo el
              <br />
              futuro del software.
            </h1>
            <p className="text-slate-500 text-[15px] sm:text-base leading-relaxed font-normal">
              Vexel Labs es una agencia de software dedicada a crear soluciones digitales innovadoras que impulsan el crecimiento y la eficiencia.
            </p>
          </div>

          {/* Right Vector Illustration Column */}
          <div className="relative w-full aspect-[4/3] max-w-[540px] mx-auto select-none">
            {/* SVG Circuits & Orbit Background */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 375" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Circular Orbit Track */}
              <circle cx="360" cy="150" r="70" stroke="#E2E8F0" strokeWidth="1.5" />
              {/* Dots on circular path */}
              <circle cx="360" cy="80" r="4.5" fill="#7857ed" />
              <circle cx="430" cy="150" r="3.5" fill="#94A3B8" />
              
              {/* Circuit paths Left bottom */}
              <path d="M120,290 L120,240 Q120,225 150,225 L210,225" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="120" cy="240" r="3.5" stroke="#94A3B8" strokeWidth="1.2" fill="white" />
              <circle cx="121" cy="290" r="5" fill="#7857ed" />
              <circle cx="210" cy="225" r="3.5" stroke="#94A3B8" strokeWidth="1.2" fill="white" />
              
              <path d="M100,200 L115,200" stroke="#CBD5E1" strokeWidth="1.2" />
              <circle cx="100" cy="200" r="2.5" fill="#CBD5E1" />
              
              {/* Bottom detail circle node */}
              <path d="M180,290 L180,315" stroke="#CBD5E1" strokeWidth="1.2" />
              <circle cx="180" cy="315" r="2.5" fill="#CBD5E1" />

              {/* Circuit paths Right */}
              <path d="M380,225 L430,225 Q445,225 445,200 L445,185" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="445" cy="185" r="2.5" fill="#CBD5E1" />
              <path d="M410,260 L435,260" stroke="#CBD5E1" strokeWidth="1.2" />
              <circle cx="435" cy="260" r="2.5" fill="#CBD5E1" />
            </svg>

            {/* Overlapping Mockup - Card 1 (Top Left) */}
            <div className="absolute top-[10%] left-[6%] w-[33%] bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl p-3 shadow-md animate-float">
              {/* Header Dots */}
              <div className="flex gap-1 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              </div>
              {/* Lines representation */}
              <div className="space-y-1.5">
                <div className="w-3/4 h-[3px] bg-slate-300 rounded" />
                <div className="w-1/2 h-[3px] bg-purple-300 rounded" />
                <div className="w-5/6 h-[3px] bg-slate-200 rounded" />
              </div>
            </div>

            {/* Overlapping Mockup - Card 2 (Main Center) */}
            <div className="absolute top-[26%] left-[18%] w-[64%] bg-white border border-slate-200/50 rounded-2xl p-4 shadow-xl animate-float [animation-delay:1.5s]">
              {/* Header Browser Window */}
              <div className="flex gap-1.5 mb-3 border-b border-slate-100 pb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              </div>
              {/* Fake Code Lines */}
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="w-1/4 h-[4px] bg-[#7857ed] rounded-sm" />
                  <div className="w-1/3 h-[4px] bg-slate-200 rounded-sm" />
                </div>
                <div className="w-4/5 h-[4px] bg-slate-200 rounded-sm ml-4" />
                <div className="flex gap-2 ml-4">
                  <div className="w-1/3 h-[4px] bg-[#7857ed] rounded-sm" />
                  <div className="w-1/4 h-[4px] bg-slate-200 rounded-sm" />
                </div>
                <div className="w-2/3 h-[4px] bg-slate-200 rounded-sm ml-8" />
                <div className="w-1/2 h-[4px] bg-slate-200 rounded-sm ml-4" />
                <div className="w-3/4 h-[4px] bg-slate-100 rounded-sm" />
              </div>
            </div>

            {/* Overlapping Mockup - Card 3 (Bottom Right) */}
            <div className="absolute bottom-[10%] right-[6%] w-[33%] bg-white border border-slate-200/50 rounded-xl p-3 shadow-md z-20 animate-float [animation-delay:3s]">
              {/* Header Dots */}
              <div className="flex gap-1 mb-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              </div>
              <div className="flex gap-2 items-center">
                {/* Small purple graphics widget */}
                <div className="w-7 h-7 bg-purple-50 border border-purple-100 rounded flex items-center justify-center text-purple-500 font-bold text-xs select-none">
                  {}
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                {/* Fake mini-metadata */}
                <div className="space-y-1 flex-1">
                  <div className="w-2/3 h-[3px] bg-purple-300 rounded" />
                  <div className="w-5/6 h-[3px] bg-slate-200 rounded" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* Quiénes Somos Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Left Column - Title */}
          <div className="md:col-span-2">
            <h2 className="text-4xl sm:text-[46px] font-bold text-[#0D1527] leading-[1.15] tracking-tight">
              Quiénes
              <br />
              Somos.
            </h2>
          </div>

          {/* Right Column - Paragraphs */}
          <div className="md:col-span-3 space-y-6 text-slate-500 text-[14.5px] sm:text-[15.5px] leading-relaxed font-normal">
            <p>
              Somos un equipo de desarrolladores, diseñadores y estrategas apasionados por la tecnología y la excelencia. Nos enfocamos en comprender profundamente las necesidades de nuestros clientes para entregar productos de software robustos, escalables y centrados en el usuario.
            </p>
            <p>
              Creemos en la colaboración estrecha, la transparencia y la agilidad para superar los desafíos y transformar ideas en realidad digital.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 - Misión */}
          <div className="bg-[#F3F4F8] border border-slate-200/50 border-b-[5px] border-b-[#7857ed] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-100/60 flex items-center justify-center text-[#7857ed]">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0D1527]">
                Misión
              </h3>
            </div>
            <p className="text-slate-500 text-[14.5px] sm:text-[15.5px] leading-relaxed font-normal">
              Nuestra misión es empoderar a las empresas a través de software innovador y de alta calidad, resolviendo problemas complejos y fomentando el éxito a largo plazo.
            </p>
          </div>

          {/* Card 2 - Visión */}
          <div className="bg-[#F3F4F8] border border-slate-200/50 border-b-[5px] border-b-[#7857ed] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-100/60 flex items-center justify-center text-[#7857ed]">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0D1527]">
                Visión
              </h3>
            </div>
            <p className="text-slate-500 text-[14.5px] sm:text-[15.5px] leading-relaxed font-normal">
              Ser la agencia de referencia en desarrollo de software, reconocida por nuestra excelencia técnica, creatividad y el impacto positivo de nuestras soluciones en el mundo digital.
            </p>
          </div>

        </div>
      </section>

      {/* Valores, Equipo & Statistics Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: Nuestros Valores (5/12 cols) */}
          <div className="xl:col-span-5 space-y-8">
            <h2 className="text-[28px] font-bold text-[#0D1527] tracking-tight">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <line x1="9" y1="18" x2="15" y2="18" />
                      <line x1="10" y1="22" x2="14" y2="22" />
                    </svg>
                  ),
                  title: 'Innovación',
                  description: 'Nuestra misión es empoderar a las empresas a través de una la innovación.'
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  ),
                  title: 'Excelencia Técnica',
                  description: 'Enorgoupuis os desarrolladores, dienea ue cnnonrganpio la Excelencia Técnica.'
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  title: 'Colaboración',
                  description: 'Sononies snvoro en colaboración onvstas enit las casnnrula y toomras.'
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  ),
                  title: 'Transparencia',
                  description: 'Nuestra esta es emebocaranaa eheitio con al transparencia.'
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                      <line x1="12" y1="2" x2="12" y2="12" />
                    </svg>
                  ),
                  title: 'Agilidad',
                  description: 'Somes excven en proeen para la enostiaxo la agilidad y agilidad.'
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  ),
                  title: 'Orientación al Cliente',
                  description: 'Orientación en la orientación al cliente, son en una mundia.'
                }
              ].map(val => (
                <div key={val.title} className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:border-purple-200 hover:shadow-md hover:shadow-purple-50">
                  <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center text-[#7857ed] mb-4">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-[14.5px] font-bold text-slate-800 mb-2 leading-snug">
                      {val.title}
                    </h4>
                    <p className="text-[12px] text-slate-400 leading-normal">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: El Equipo + Statistics (7/12 cols) */}
          <div className="xl:col-span-7 space-y-12">
            {/* El Equipo Grid */}
            <div className="space-y-8">
              <h2 className="text-[28px] font-bold text-[#0D1527] tracking-tight">
                El Equipo
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: 'Ana García', role: 'Frontend Developer', initial: 'AG' },
                  { name: 'Carlos Ruiz', role: 'Backend Developer', initial: 'CR' },
                  { name: 'Sofía López', role: 'UI/UX Designer', initial: 'SL' },
                  { name: 'Miguel Torres', role: 'Project Manager', initial: 'MT' },
                  { name: 'Elena Díaz', role: 'Full Stack Developer', initial: 'ED' },
                  { name: 'David Muñoz', role: 'Data Engineer', initial: 'DM' },
                  { name: 'Laura Gómez', role: 'QA Engineer', initial: 'LG' },
                  { name: 'Javier Ortiz', role: 'DevOps Engineer', initial: 'JO' },
                ].map(member => (
                  <div key={member.name} className="flex flex-col">
                    {/* Monochromatic Purple Duotone Avatar Container */}
                    <div className="relative aspect-[3/4] w-full bg-[#7857ed] rounded-[20px] overflow-hidden shadow-sm mb-3">
                      {/* Degradado y silueta como placeholder de alta calidad */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#633ee3] to-[#9b82f6] opacity-90 mix-blend-multiply flex items-center justify-center">
                        <span className="text-white/35 font-bold text-3xl tracking-widest">{member.initial}</span>
                      </div>
                      {/* Silueta abstracta de usuario */}
                      <svg viewBox="0 0 24 24" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-3/4 text-[#FCFDFF]/25" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <h4 className="text-[14.5px] font-bold text-slate-800 leading-snug">
                      {member.name}
                    </h4>
                    <p className="text-[12px] text-slate-400 font-medium">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics Row */}
            <div className="space-y-6 pt-4">
              <h2 className="text-[28px] font-bold text-[#0D1527] tracking-tight">
                Statistics
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { value: '50+', label: 'Proyectos' },
                  { value: '30+', label: 'Clientes' },
                  { value: '5+', label: 'Años' },
                  { value: '10+', label: 'Miembros' },
                ].map(stat => (
                  <div key={stat.label} className="border-t border-slate-100 pt-4">
                    <p className="text-4xl font-extrabold text-[#7857ed] tracking-tight mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm font-semibold text-slate-700 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* Tech Stack & Cultura Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: Nuestro Stack Tecnológico (5/12 cols) */}
          <div className="xl:col-span-5 space-y-8">
            <h2 className="text-[28px] font-bold text-[#0D1527] tracking-tight">
              Nuestro Stack Tecnológico
            </h2>
            <div className="grid grid-cols-4 gap-x-4 gap-y-8 text-center">
              {[
                {
                  name: 'React',
                  logo: (
                    <svg viewBox="-11.5 -10.23 23 20.46" className="w-10 h-10 mx-auto text-[#00D8FF]" fill="none">
                      <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
                      <g stroke="#00D8FF" strokeWidth="1">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                      </g>
                    </svg>
                  )
                },
                {
                  name: 'Node.js',
                  logo: (
                    <svg viewBox="0 0 80 22" className="w-16 h-8 mx-auto" fill="none">
                      <path d="M9.1 5.9v10h1.8v-5.4h3.3v5.4h1.8V8.6h-1.8v1.3h-3.3V5.9H9.1zm11.2 2.7c-2.4 0-4.3 1.8-4.3 4.2s1.9 4.2 4.3 4.2 4.3-1.9 4.3-4.2-1.9-4.2-4.3-4.2zm0 6.6c-1.4 0-2.4-.9-2.4-2.4s1-2.4 2.4-2.4 2.4.9 2.4 2.4-1 2.4-2.4 2.4zm10.7-6.6c-1.4 0-2.5.7-3.1 1.7V5.9h-1.8v10h1.8v-.9c.6 1 1.7 1.7 3.1 1.7 2.4 0 4.3-1.8 4.3-4.2s-1.9-4.3-4.3-4.3zm-.5 6.6c-1.4 0-2.4-.9-2.4-2.4s1-2.4 2.4-2.4 2.4.9 2.4 2.4-1 2.4-2.4 2.4zm10.2-6.6c-2.4 0-4.3 1.8-4.3 4.2s1.9 4.2 4.3 4.2 4.3-1.9 4.3-4.2-1.9-4.2-4.3-4.2zm0 6.6c-1.4 0-2.4-.9-2.4-2.4s1-2.4 2.4-2.4 2.4.9 2.4 2.4-1 2.4-2.4 2.4z" fill="#333333" />
                      <path d="M53 4.5l-5 2.8v5.6l5 2.8 5-2.8V7.3l-5-2.8zm-1 9c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1zm3.6 0c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1zm-6.2-7.5l2.6-1.5 2.6 1.5v3.1h-5.2V6z" fill="#339933" />
                    </svg>
                  )
                },
                {
                  name: 'Python',
                  logo: (
                    <svg viewBox="0 0 24 24" className="w-10 h-10 mx-auto" fill="none">
                      <path d="M11.75.14c-1.83.03-3.47.18-4.4.4-.95.23-1.63.56-2.18 1.13-.56.56-.8 1.25-.97 2.22l-.12.72h3.5v.5H2.43c-.87.03-1.5.24-2 .76-.5.5-.66 1.15-.7 2.06v3.25c.03.92.2 1.57.7 2.08.5.5 1.13.7 2 .73h1v-1.5c0-1.6.86-2.94 2.22-3.44.82-.3 1.72-.4 2.65-.4H14.8v-1.7c0-.98-.22-1.74-.75-2.28-.53-.54-1.3-.8-2.3-.85V.15zm-1.88 1.48a.63.63 0 1 1 0 1.25.63.63 0 0 1 0-1.25z" fill="#3776AB" />
                      <path d="M12.25 23.86c1.83-.03 3.47-.18 4.4-.4.95-.23 1.63-.56 2.18-1.13.56-.56.8-1.25.97-2.22l.12-.72h-3.5v-.5h5.15c.87-.03 1.5-.24 2-.76.5-.5.66-1.15.7-2.06v-3.25c-.03-.92-.2-1.57-.7-2.08-.5-.5-1.13-.7-2-.73h-1v1.5c0 1.6-.86 2.94-2.22 3.44-.82.3-1.72.4-2.65.4H9.2v1.7c0 .98.22 1.74.75 2.28.53.54 1.3.8 2.3.85v.03zm1.88-1.48a.63.63 0 1 1 0-1.25.63.63 0 0 1 0 1.25z" fill="#FFE873" />
                    </svg>
                  )
                },
                {
                  name: 'AWS',
                  logo: (
                    <svg viewBox="0 0 48 48" className="w-14 h-8 mx-auto" fill="currentColor">
                      <path d="M10.7 24.3h2.6l-2.4-7h-1.6l-2.4 7H9.5l.3-1.2h2.2l.3 1.2zm-1.9-2.5l.8-2.6.8 2.6H8.8zm11 2.5h1.4l1.3-4.5.9 3.1.8-3.1 1.3 4.5h1.4l-2.2-7h-1.5l-.8 3-1-3h-1.4l-2.2 7zm11.2-1.9c.7.4 1.7.6 2.5.6 1.4 0 2.2-.6 2.2-1.5 0-.9-.7-1.3-2.1-1.6-1.7-.4-2.8-.9-2.8-2.5 0-1.6 1.3-2.5 3.2-2.5 1 0 1.9.2 2.5.5v1.3c-.6-.3-1.4-.5-2.2-.5-1.3 0-2 .6-2 1.4 0 .9.8 1.2 2.1 1.5 1.7.4 2.8 1 2.8 2.5 0 1.7-1.3 2.7-3.4 2.7-1.1 0-2.2-.3-2.9-.7v-1.3z" fill="#232F3E" />
                      <path d="M8 27.5c6 3.5 19 3.5 25 0m1.5-1.5l1.5 2.5-3 .5" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  )
                },
                {
                  name: 'Docker',
                  logo: (
                    <svg viewBox="0 0 24 24" className="w-10 h-10 mx-auto" fill="#2496ED">
                      <path d="M13.983 8.871h-1.22v1.22h1.22v-1.22zM11.267 8.871H10.05v1.22h1.217v-1.22zM11.267 11.442H10.05v1.216h1.217v-1.216zM13.983 11.442h-1.22v1.216h1.22v-1.216zM16.697 11.442h-1.218v1.216h1.218v-1.216zM8.552 11.442H7.332v1.216h1.22v-1.216zM11.267 14.013H10.05v1.218h1.217v-1.218zM13.983 14.013h-1.22v1.218h1.22v-1.218zM8.552 14.013H7.332v1.218h1.22v-1.218zM11.267 6.299H10.05v1.218h1.217V6.299zM23.766 14.444c-.466-.617-1.254-.999-2.087-.969H21.65c-.078-.01-.161-.013-.243-.013h-.074c-.13-.41-.422-.76-.811-.97l-.346-.188-.188.346c-.273.509-.516 1.07-.718 1.666h-1.77v-3.846h-1.22v3.846h-7.854l-.105-.125c-.24-.287-.618-.46-1.018-.46-.724 0-1.312.589-1.312 1.31v.015c0 .034.004.066.01.1l-.009-.006a2.115 2.115 0 00-1.12.345l-.4.24.24.4c.814 1.36 2.285 2.2 3.876 2.2h7.643c4.58 0 8.293-3.712 8.293-8.293 0-.495-.045-.973-.13-1.444z" />
                    </svg>
                  )
                },
                {
                  name: 'Figma',
                  logo: (
                    <svg viewBox="0 0 24 36" className="w-7 h-10 mx-auto" fill="none">
                      <path d="M6 0a6 6 0 0 0 0 12h6V0H6z" fill="#F24E1E" />
                      <path d="M12 0h6a6 6 0 0 1 0 12h-6V0z" fill="#FF7262" />
                      <path d="M6 12a6 6 0 0 0 0 12h6V12H6z" fill="#A259FF" />
                      <path d="M12 12h6a6 6 0 0 1 0 12h-6V12z" fill="#1ABC9C" />
                      <path d="M6 24a6 6 0 0 0 6 6v-6H6z" fill="#0ACF83" />
                    </svg>
                  )
                },
                {
                  name: 'Kubernetes',
                  logo: (
                    <svg viewBox="0 0 24 24" className="w-10 h-10 mx-auto" fill="#326CE5">
                      <path d="M12.002 0l-9.87 5.7v11.4l9.87 5.7 9.87-5.7v-11.4L12.002 0zm0 3.12l7.15 4.13v8.25l-7.15 4.13-7.15-4.13v-8.25l7.15-4.13z" />
                      <path d="M12.002 8.44a3.56 3.56 0 100 7.12 3.56 3.56 0 000-7.12zm0 1.94c.9 0 1.62.72 1.62 1.62s-.72 1.62-1.62 1.62-1.62-.72-1.62-1.62.72-1.62 1.62-1.62z" />
                      <path d="M11.23 3.8h1.55v4.5h-1.55z" />
                      <path d="M11.23 15.7h1.55v4.5h-1.55z" />
                      <path d="M17.15 7.21l.77 1.34-3.9 2.25-.77-1.34z" />
                      <path d="M6.07 13.62l.77 1.34-3.9 2.25-.77-1.34z" />
                      <path d="M6.84 8.55l.77-1.34 3.9 2.25-.77 1.34z" />
                      <path d="M17.92 14.96l.77-1.34 3.9 2.25-.77-1.34z" />
                    </svg>
                  )
                },
                {
                  name: 'MongoDB',
                  logo: (
                    <svg viewBox="0 0 24 24" className="w-10 h-10 mx-auto" fill="none">
                      <path d="M11.968 0C11.968 0 7.8 4.717 7.8 9.387c0 3.328 1.956 6.307 4.168 8.163V0z" fill="#13AA52" />
                      <path d="M12.032 0C12.032 0 16.2 4.717 16.2 9.387c0 3.328-1.956 6.307-4.168 8.163V0z" fill="#499D4A" />
                      <path d="M11.385 18.067c0 .942-.4 1.76-.4 2.65a1.012 1.012 0 0 0 2.025 0c0-.89-.4-1.708-.4-2.65h-.825z" fill="#13AA52" />
                      <path d="M12.032 0v17.55c.162-.128.324-.26.481-.397 2.156-1.856 3.687-4.707 3.687-7.766C16.2 4.717 12.032 0 12.032 0z" fill="#499D4A" />
                    </svg>
                  )
                }
              ].map(tech => (
                <div key={tech.name} className="space-y-3">
                  <div className="w-16 h-16 mx-auto bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm">
                    {tech.logo}
                  </div>
                  <p className="text-[13px] font-bold text-slate-700">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Nuestra Cultura (7/12 cols) */}
          <div className="xl:col-span-7 space-y-8">
            <h2 className="text-[28px] font-bold text-[#0D1527] tracking-tight">
              Nuestra Cultura
            </h2>
            
            {/* Cultura Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              
              {/* Left Column: Big Main Image Card */}
              <div className="relative rounded-[24px] overflow-hidden min-h-[300px] bg-slate-900 shadow-sm flex flex-col justify-end p-6 group">
                {/* Monochromatic purple filter on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-purple-900/60 to-purple-950/40 mix-blend-multiply z-10" />
                
                {/* Fallback pattern vector representing developers meeting */}
                <div className="absolute inset-0 z-0 bg-[#7857ed] flex items-center justify-center opacity-85">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-white/5" fill="currentColor">
                    <circle cx="50" cy="50" r="30" />
                    <line x1="10" y1="50" x2="90" y2="50" />
                    <line x1="50" y1="10" x2="50" y2="90" />
                  </svg>
                </div>
                
                {/* Text Overlay */}
                <div className="relative z-20 space-y-2">
                  <p className="text-white font-bold text-[18px] sm:text-[20px] leading-tight tracking-tight">
                    Colaboración y Aprendizaje Continuo
                  </p>
                </div>
              </div>

              {/* Right Column: Mini Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Card 1: Equilibrio Vida-Trabajo */}
                <div className="col-span-1 bg-white border border-slate-100 rounded-2xl p-5 flex flex-col justify-center shadow-sm">
                  <h4 className="text-[14px] font-bold text-slate-800 leading-snug">
                    Equilibrio Vida-Trabajo
                  </h4>
                </div>

                {/* Card 2: Innovación Abierta */}
                <div className="col-span-1 bg-white border border-slate-100 rounded-2xl p-5 flex flex-col justify-center shadow-sm">
                  <h4 className="text-[14px] font-bold text-slate-800 leading-snug">
                    Innovación Abierta
                  </h4>
                </div>

                {/* Card 3: Hackathons y Desafíos */}
                <div className="col-span-1 relative rounded-2xl overflow-hidden min-h-[120px] bg-slate-900 p-5 flex flex-col justify-end group shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-purple-900/60 to-purple-950/40 mix-blend-multiply z-10" />
                  <div className="absolute inset-0 bg-[#7857ed]/80 z-0" />
                  <h4 className="relative z-20 text-[14px] font-bold text-white leading-snug">
                    Hackathons y Desafíos
                  </h4>
                </div>

                {/* Card 4: Código Abierto */}
                <div className="col-span-1 relative rounded-2xl overflow-hidden min-h-[120px] bg-slate-900 p-5 flex flex-col justify-end group shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-purple-900/60 to-purple-950/40 mix-blend-multiply z-10" />
                  <div className="absolute inset-0 bg-[#7857ed]/80 z-0" />
                  <h4 className="relative z-20 text-[14px] font-bold text-white leading-snug">
                    Código Abierto
                  </h4>
                </div>

                {/* Card 5: Diversidad e Inclusión */}
                <div className="col-span-2 bg-white border border-slate-100 rounded-2xl p-5 flex flex-col justify-center shadow-sm">
                  <h4 className="text-[14px] font-bold text-slate-800 leading-snug">
                    Diversidad e Inclusión
                  </h4>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Nosotros Final CTA Section */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0D1527] tracking-tight leading-tight">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-slate-500 text-[15px] sm:text-base max-w-xl mx-auto font-normal">
            Convirtamos tu próxima gran idea en un software exitoso.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-[#7857ed] hover:bg-[#633ee3] text-white px-8 py-3.5 h-auto rounded-xl font-semibold text-[15px] shadow-md shadow-purple-100 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <Link href="/contacto?ref=iniciar">
              Iniciar Proyecto
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 px-8 py-3.5 h-auto rounded-xl font-semibold text-[15px] transition-all duration-200 hover:-translate-y-0.5"
          >
            <Link href="/contacto">
              Contáctanos
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
