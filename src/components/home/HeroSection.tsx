'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FCFDFF]">
      {/* Background radial soft light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(120,87,237,0.06),transparent_50%)] pointer-events-none" />

      {/* Edge Wireframe Line Art - Left (Bigger, darker strokes) */}
      <div className="absolute left-0 top-[18%] w-[180px] lg:w-[320px] h-[350px] opacity-80 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 250 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-50,0 L220,135 M-50,20 L220,155 M-50,40 L220,175 M-50,60 L220,195 M-50,80 L220,215 M-50,100 L220,235 M-50,120 L220,255 M-50,140 L220,275 M-50,160 L220,295 M-50,180 L220,315" stroke="#CBD5E1" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* Edge Wireframe Line Art - Right (Bigger, darker strokes) */}
      <div className="absolute right-0 top-[22%] w-[200px] lg:w-[340px] h-[400px] opacity-80 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 280 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M300,-20 L20,120 M300,0 L20,140 M300,20 L20,160 M300,40 L20,180 M300,60 L20,200 M300,80 L20,220 M300,100 L20,240 M300,120 L20,260 M300,140 L20,280 M300,160 L20,300" stroke="#CBD5E1" strokeWidth="1.5"/>
          <path d="M280,180 L180,230 L180,310 L280,260 Z" stroke="#CBD5E1" strokeWidth="1.2" fill="none"/>
          <path d="M180,230 L80,180 L80,260 L180,310 Z" stroke="#CBD5E1" strokeWidth="1.2" fill="none"/>
          <path d="M180,150 L280,200 L180,230 L80,200 Z" stroke="#CBD5E1" strokeWidth="1.2" fill="none"/>
        </svg>
      </div>

      {/* Decorative Dot Grids (Bigger, less transparent) */}
      <div className="absolute top-[26%] left-[15%] opacity-55 select-none pointer-events-none">
        <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="2" fill="#E2E8F0"/>
          <circle cx="17" cy="5" r="2" fill="#E2E8F0"/>
          <circle cx="29" cy="5" r="2" fill="#E2E8F0"/>
          <circle cx="41" cy="5" r="2" fill="#E2E8F0"/>
          <circle cx="53" cy="5" r="2" fill="#E2E8F0"/>
          <circle cx="65" cy="5" r="2" fill="#E2E8F0"/>
          <circle cx="5" cy="17" r="2" fill="#E2E8F0"/>
          <circle cx="17" cy="17" r="2" fill="#E2E8F0"/>
          <circle cx="29" cy="17" r="2" fill="#E2E8F0"/>
          <circle cx="41" cy="17" r="2" fill="#E2E8F0"/>
          <circle cx="53" cy="17" r="2" fill="#E2E8F0"/>
          <circle cx="65" cy="17" r="2" fill="#E2E8F0"/>
          <circle cx="5" cy="29" r="2" fill="#E2E8F0"/>
          <circle cx="17" cy="29" r="2" fill="#E2E8F0"/>
          <circle cx="29" cy="29" r="2" fill="#E2E8F0"/>
          <circle cx="41" cy="29" r="2" fill="#E2E8F0"/>
          <circle cx="53" cy="29" r="2" fill="#E2E8F0"/>
          <circle cx="65" cy="29" r="2" fill="#E2E8F0"/>
          <circle cx="5" cy="41" r="2" fill="#E2E8F0"/>
          <circle cx="17" cy="41" r="2" fill="#E2E8F0"/>
          <circle cx="29" cy="41" r="2" fill="#E2E8F0"/>
          <circle cx="41" cy="41" r="2" fill="#E2E8F0"/>
          <circle cx="53" cy="41" r="2" fill="#E2E8F0"/>
          <circle cx="65" cy="41" r="2" fill="#E2E8F0"/>
        </svg>
      </div>

      <div className="absolute bottom-[20%] right-[15%] opacity-55 select-none pointer-events-none">
        <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="2" fill="#E2E8F0"/>
          <circle cx="17" cy="5" r="2" fill="#E2E8F0"/>
          <circle cx="29" cy="5" r="2" fill="#E2E8F0"/>
          <circle cx="41" cy="5" r="2" fill="#E2E8F0"/>
          <circle cx="53" cy="5" r="2" fill="#E2E8F0"/>
          <circle cx="65" cy="5" r="2" fill="#E2E8F0"/>
          <circle cx="5" cy="17" r="2" fill="#E2E8F0"/>
          <circle cx="17" cy="17" r="2" fill="#E2E8F0"/>
          <circle cx="29" cy="17" r="2" fill="#E2E8F0"/>
          <circle cx="41" cy="17" r="2" fill="#E2E8F0"/>
          <circle cx="53" cy="17" r="2" fill="#E2E8F0"/>
          <circle cx="65" cy="17" r="2" fill="#E2E8F0"/>
          <circle cx="5" cy="29" r="2" fill="#E2E8F0"/>
          <circle cx="17" cy="29" r="2" fill="#E2E8F0"/>
          <circle cx="29" cy="29" r="2" fill="#E2E8F0"/>
          <circle cx="41" cy="29" r="2" fill="#E2E8F0"/>
          <circle cx="53" cy="29" r="2" fill="#E2E8F0"/>
          <circle cx="65" cy="29" r="2" fill="#E2E8F0"/>
          <circle cx="5" cy="41" r="2" fill="#E2E8F0"/>
          <circle cx="17" cy="41" r="2" fill="#E2E8F0"/>
          <circle cx="29" cy="41" r="2" fill="#E2E8F0"/>
          <circle cx="41" cy="41" r="2" fill="#E2E8F0"/>
          <circle cx="53" cy="41" r="2" fill="#E2E8F0"/>
          <circle cx="65" cy="41" r="2" fill="#E2E8F0"/>
        </svg>
      </div>

      {/* Floating Hexagons/Circles (Larger and darker) */}
      <div className="absolute top-[48%] left-[21%] w-3.5 h-3.5 bg-purple-400 rotate-12 rounded-sm opacity-85" />
      <div className="absolute top-[35%] right-[25%] w-3 h-3 bg-purple-300 rounded-full opacity-70" />
      <div className="absolute bottom-[28%] left-[27%] w-2.5 h-2.5 bg-slate-400 rounded-full opacity-65" />
      <div className="absolute top-[52%] right-[11%] w-4 h-4 bg-purple-500 rotate-[45deg] rounded-sm opacity-85" />

      {/* 3D Cube Decor - Left Bottom (Bigger, more solid colors) */}
      <div className="absolute bottom-[14%] left-[10%] lg:left-[14%] opacity-100 animate-float select-none pointer-events-none">
        <svg width="150" height="180" viewBox="0 0 150 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shadow planes */}
          <polygon points="20,155 80,135 140,155 80,173" fill="#7857ed" fillOpacity="0.25"/>
          <polygon points="15,159 80,139 145,159 80,177" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.35" fill="none"/>
          
          {/* Solid 3D Cube */}
          {/* Top Face */}
          <polygon points="80,25 135,53 80,80 25,53" fill="#9b82f6" fillOpacity="0.9" stroke="#7857ed" strokeWidth="1.5" strokeLinejoin="round"/>
          {/* Left Face */}
          <polygon points="25,53 80,80 80,135 25,108" fill="#7857ed" fillOpacity="0.95" stroke="#7857ed" strokeWidth="1.5" strokeLinejoin="round"/>
          {/* Right Face */}
          <polygon points="80,80 135,53 135,108 80,135" fill="#5d39d3" fillOpacity="1" stroke="#7857ed" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* 3D Cube Decor - Right Top (Bigger, more defined wireframe lines) */}
      <div className="absolute top-[12%] right-[10%] lg:right-[15%] opacity-100 animate-float [animation-delay:2s] select-none pointer-events-none">
        <svg width="170" height="210" viewBox="0 0 170 210" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shadow plane */}
          <polygon points="25,160 85,140 145,160 85,178" fill="#7857ed" fillOpacity="0.35" stroke="#7857ed" strokeWidth="1.2" strokeOpacity="0.7"/>
          
          {/* Wireframe Cube */}
          {/* Top Face */}
          <polygon points="85,25 140,53 85,80 30,53" fill="#7857ed" fillOpacity="0.12" stroke="#7857ed" strokeWidth="1.8" strokeLinejoin="round"/>
          {/* Left Face */}
          <polygon points="30,53 85,80 85,135 30,108" fill="#7857ed" fillOpacity="0.08" stroke="#7857ed" strokeWidth="1.8" strokeLinejoin="round"/>
          {/* Right Face */}
          <polygon points="85,80 140,53 140,108 85,135" fill="#7857ed" fillOpacity="0.05" stroke="#7857ed" strokeWidth="1.8" strokeLinejoin="round"/>
          
          {/* Back edges */}
          <line x1="30" y1="108" x2="85" y2="135" stroke="#7857ed" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5"/>
          <line x1="85" y1="25" x2="85" y2="80" stroke="#7857ed" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
        {/* Headline */}
        <h1 className="text-[38px] sm:text-[52px] lg:text-[62px] font-bold text-[#0D1527] leading-[1.12] mb-6 tracking-tight animate-fade-in [animation-delay:0.1s]">
          Construimos software
          <br />
          que impulsa tu negocio
        </h1>

        {/* Subtitle */}
        <p className="text-[15px] sm:text-[17px] text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed font-normal animate-fade-in [animation-delay:0.2s]">
          Especialistas en Next.js, React, Tailwind CSS y arquitecturas
          escalables para potenciar tu empresa en el mundo digital.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in [animation-delay:0.3s]">
          <Button
            asChild
            size="lg"
            className="bg-[#7857ed] hover:bg-[#633ee3] text-white px-9 py-3.5 h-auto rounded-full font-medium text-[15px] shadow-md shadow-purple-200/50 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <Link href="/contacto">
              Comenzar Proyecto
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
