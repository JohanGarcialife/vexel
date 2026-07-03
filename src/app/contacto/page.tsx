'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useContactForm } from '@/hooks/useContactForm'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Check, 
  Loader2, 
  ChevronDown, 
  MessageCircle, 
  Calendar
} from 'lucide-react'
import Link from 'next/link'

const serviceOptions = [
  'Desarrollo Web',
  'Aplicación Móvil',
  'UI/UX Design',
  'Consultoría',
  'Otro',
]

const budgetOptions = [
  '< $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '> $50,000',
]

export default function ContactoPage() {
  const { formData, isLoading, isSuccess, error, handleChange, handleSubmit, reset } =
    useContactForm()

  const [acceptPrivacy, setAcceptPrivacy] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0) // First FAQ open by default

  const faqItems = [
    {
      q: '¿Cuánto tiempo toma un proyecto?',
      a: 'El tiempo varía según la complejidad, pero los proyectos típicos toman entre 4 a 12 semanas.'
    },
    {
      q: '¿Trabajan con startups?',
      a: 'Sí, colaboramos activamente con startups diseñando MVPs rápidos y escalables para salir al mercado rápido.'
    },
    {
      q: '¿Ofrecen mantenimiento post-lanzamiento?',
      a: 'Sí, ofrecemos planes mensuales de soporte, monitoreo y optimizaciones para asegurar que el sistema rinda de forma óptima.'
    }
  ]

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!acceptPrivacy) {
      alert('Debes aceptar la política de privacidad para enviar el mensaje.')
      return
    }
    handleSubmit(e)
  }

  return (
    <div className="bg-[#FCFDFF] min-h-screen pt-28 pb-20 overflow-hidden">
      
      {/* Title Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0D1527] tracking-tight">
          Hablemos de tu proyecto
        </h1>
        <p className="text-slate-500 text-[15px] sm:text-base font-normal">
          Estamos listos para convertir tu idea en realidad
        </p>
      </div>

      {/* Main Grid split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form (7/12 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/50 rounded-[28px] p-6 sm:p-10 shadow-sm space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D1527]">
                Envíanos un mensaje
              </h2>
            </div>

            {isSuccess ? (
              <div className="text-center py-16 animate-fade-in space-y-6">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto text-green-600">
                  <Check size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#0D1527]">¡Mensaje enviado con éxito!</h3>
                <p className="text-slate-500 max-w-md mx-auto">
                  Gracias por escribirnos. Uno de nuestros arquitectos de software revisará tu solicitud y se pondrá en contacto contigo en las próximas 24 horas.
                </p>
                <Button
                  onClick={() => {
                    reset()
                    setAcceptPrivacy(false)
                  }}
                  variant="outline"
                  className="rounded-xl px-6 border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                
                {/* Nombre & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#7857ed]/30 focus:border-[#7857ed] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Tu dirección de correo electrónico"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#7857ed]/30 focus:border-[#7857ed] transition-colors"
                    />
                  </div>
                </div>

                {/* Teléfono & Empresa */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">
                      Teléfono (opcional)
                    </label>
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#7857ed]/30 focus:border-[#7857ed] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700">
                      Empresa/Organización (opcional)
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#7857ed]/30 focus:border-[#7857ed] transition-colors"
                    />
                  </div>
                </div>

                {/* Tipo de proyecto & Presupuesto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="block text-sm font-semibold text-slate-700">
                      Tipo de proyecto
                    </label>
                    <div className="relative">
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#7857ed]/30 focus:border-[#7857ed] transition-colors bg-white appearance-none pr-10"
                      >
                        <option value="">Selecciona un tipo</option>
                        {serviceOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="block text-sm font-semibold text-slate-700">
                      Presupuesto estimado
                    </label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#7857ed]/30 focus:border-[#7857ed] transition-colors bg-white appearance-none pr-10"
                      >
                        <option value="">Selecciona un rango</option>
                        {budgetOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Mensaje */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos más sobre tu proyecto..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#7857ed]/30 focus:border-[#7857ed] transition-colors resize-none"
                  />
                </div>

                {/* Checkbox Acepto */}
                <div className="flex items-center gap-3">
                  <input
                    id="acceptPrivacy"
                    type="checkbox"
                    checked={acceptPrivacy}
                    onChange={(e) => setAcceptPrivacy(e.target.checked)}
                    className="w-4 h-4 text-[#7857ed] border-slate-300 rounded focus:ring-[#7857ed]"
                  />
                  <label htmlFor="acceptPrivacy" className="text-xs sm:text-sm text-slate-500 font-normal">
                    Acepto la{' '}
                    <Link href="/privacidad" className="text-[#7857ed] hover:underline">
                      política de privacidad
                    </Link>
                  </label>
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl">{error}</p>
                )}

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#7857ed] hover:bg-[#633ee3] text-white py-3.5 h-auto rounded-xl font-semibold text-sm shadow-md shadow-[#7857ed]/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar mensaje'
                  )}
                </Button>

              </form>
            )}
          </div>

          {/* Right Column: Info & QA (5/12 cols) */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Top row - 2 contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Información de contacto */}
              <div className="bg-[#F3F4F8] border border-slate-200/50 rounded-2xl p-5 flex flex-col justify-between min-h-[160px] shadow-sm">
                <h3 className="text-[15px] font-bold text-slate-800 tracking-tight mb-3">
                  Información de contacto
                </h3>
                <div className="space-y-3.5 text-[13px] text-slate-600 font-normal">
                  <div className="flex items-center gap-2.5">
                    <Mail size={15} className="text-slate-700 shrink-0" />
                    <a href="mailto:hello@vexellabs.com" className="hover:underline">hello@vexellabs.com</a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-slate-700 shrink-0" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin size={15} className="text-slate-700 shrink-0 mt-0.5" />
                    <span className="leading-snug">123 Tech Street, San Francisco, CA 94105</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Horarios de atención */}
              <div className="bg-[#F3F4F8] border border-slate-200/50 rounded-2xl p-5 flex justify-between gap-3 min-h-[160px] shadow-sm relative overflow-hidden">
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-[15px] font-bold text-slate-800 tracking-tight">
                      Horarios de atención
                    </h3>
                    <div className="flex gap-2.5 items-start text-[12px] text-slate-600 font-normal">
                      <Clock size={15} className="text-slate-700 shrink-0 mt-0.5" />
                      <div className="space-y-1.5 leading-tight">
                        <p><span className="font-semibold text-slate-800">Lunes - Viernes:</span><br />9:00 AM - 6:00 PM</p>
                        <p><span className="font-semibold text-slate-800">Sábado:</span><br />10:00 AM - 2:00 PM</p>
                        <p><span className="font-semibold text-slate-800">Domingo:</span><br />Cerrado</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 font-semibold mt-2 shrink-0">
                    Tiempo de respuesta: 24-48 horas
                  </p>
                </div>

                {/* Right side Map panel */}
                <div className="w-[38%] bg-[#E2E8F0] border border-slate-200/80 rounded-xl overflow-hidden relative select-none">
                  <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:8px_8px] opacity-60" />
                  <svg className="absolute inset-0 w-full h-full text-white" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="-10" y1="20" x2="110" y2="60" stroke="currentColor" strokeWidth="5" />
                    <line x1="-10" y1="70" x2="110" y2="40" stroke="currentColor" strokeWidth="4" />
                    <line x1="30" y1="-10" x2="60" y2="110" stroke="currentColor" strokeWidth="5" />
                    <line x1="70" y1="-10" x2="10" y2="110" stroke="currentColor" strokeWidth="4" />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md z-10 border border-slate-100">
                    <MapPin size={12} className="text-[#334155]" fill="currentColor" fillOpacity={0.15} />
                  </div>
                  <div className="absolute bottom-1 right-1 flex flex-col gap-0.5 z-20 scale-90">
                    <div className="w-4 h-4 bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-[8px] text-slate-600 shadow-sm cursor-pointer hover:bg-slate-50">+</div>
                    <div className="w-4 h-4 bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-[8px] text-slate-600 shadow-sm cursor-pointer hover:bg-slate-50">-</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Otras formas de contactarnos */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#0D1527] tracking-tight">
                Otras formas de contactarnos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Card 1: Redes */}
                <div className="bg-[#F3F4F8] border border-slate-200/50 rounded-2xl p-5 text-center flex flex-col items-center justify-between min-h-[140px] shadow-sm">
                  <div className="w-6 h-6 text-slate-700 mx-auto flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-bold text-slate-800 leading-none">Redes Sociales</span>
                  
                  {/* Icons row */}
                  <div className="flex items-center justify-center gap-3 pt-1">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Card 2: Chat en vivo */}
                <div className="bg-[#F3F4F8] border border-slate-200/50 rounded-2xl p-5 text-center flex flex-col items-center justify-between min-h-[140px] shadow-sm">
                  <MessageCircle size={20} className="text-slate-700 mx-auto" />
                  <span className="text-[13px] font-bold text-slate-800 leading-none">Chat en Vivo</span>
                  <p className="text-[11px] text-slate-400 leading-normal font-medium">
                    Disponible durante horarios de atención
                  </p>
                </div>

                {/* Card 3: Agenda Calendly */}
                <div className="bg-[#F3F4F8] border border-slate-200/50 rounded-2xl p-5 text-center flex flex-col items-center justify-between min-h-[140px] shadow-sm">
                  <Calendar size={20} className="text-slate-700 mx-auto" />
                  <span className="text-[13px] font-bold text-slate-800 leading-none">Agendar Reunión</span>
                  <a 
                    href="https://calendly.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[12px] text-slate-800 font-semibold hover:underline underline-offset-2"
                  >
                    Calendly
                  </a>
                </div>

              </div>
            </div>

            {/* Preguntas frecuentes */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#0D1527]">
                Preguntas frecuentes
              </h3>
              <div className="space-y-3">
                {faqItems.map((item, idx) => {
                  const isOpen = openFaq === idx
                  return (
                    <div 
                      key={item.q} 
                      className="border border-slate-200/50 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                      >
                        <span className="text-[13.5px] sm:text-[14px] font-bold text-slate-800">
                          {item.q}
                        </span>
                        <ChevronDown 
                          size={16} 
                          className={`text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      <div className={`transition-all duration-200 overflow-hidden ${isOpen ? 'max-h-40 border-t border-slate-100' : 'max-h-0'}`}>
                        <p className="p-5 text-[12.5px] sm:text-[13px] text-slate-500 leading-relaxed font-normal bg-slate-50/50">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Bottom Contact Strip */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FCFDFF] border border-slate-200/50 rounded-2xl p-4 sm:p-5 shadow-sm">
              <p className="text-[13.5px] font-bold text-[#0D1527]">
                ¿Prefieres hablar directamente?
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-[#7857ed] text-[#7857ed] hover:bg-purple-50 font-bold text-xs py-2 px-5 h-9 rounded-xl transition-all duration-200"
              >
                <Link href="/agenda">
                  Agendar llamada
                </Link>
              </Button>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}
