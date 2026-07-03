'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/portafolio', label: 'Portafolio' },
  { href: '/tecnologias', label: 'Tecnologías' },
  { href: '/nosotros', label: 'Nosotros' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <svg
              width="36"
              height="36"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-slate-800 transition-transform duration-300 group-hover:scale-105"
              aria-hidden="true"
            >
              <polygon points="8,8 16,4 24,8 16,12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
              <polygon points="8,8 8,16 16,20 16,12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
              <polygon points="24,8 24,16 16,20 16,12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
              <polygon points="24,8 32,4 40,8 32,12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
              <polygon points="24,8 24,16 32,20 32,12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
              <polygon points="40,8 40,16 32,20 32,12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
              <polygon points="16,24 24,20 32,24 24,28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
              <polygon points="16,24 16,32 24,36 24,28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
              <polygon points="32,24 32,32 24,36 24,28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
              <line x1="16" y1="20" x2="16" y2="24" stroke="currentColor" strokeWidth="2"/>
              <line x1="32" y1="20" x2="32" y2="24" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="text-xl font-medium tracking-wider text-slate-800">
              VEXEL LABS
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-[15px] font-medium transition-colors duration-200 hover:text-purple-600',
                  pathname === link.href ? 'text-purple-600' : 'text-slate-800'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button asChild className="bg-[#7857ed] hover:bg-[#633ee3] text-white px-7 py-2.5 rounded-full text-[15px] font-medium transition-all duration-200 shadow-md shadow-purple-200/50 hover:shadow-lg hover:shadow-purple-300/60">
              <Link href="/contacto">Contacto</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Abrir menú"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isMobileOpen ? 'max-h-80 opacity-100 pb-4' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                  'px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-[#7857ed] hover:bg-[#633ee3] text-white rounded-full">
              <Link href="/contacto" onClick={() => setIsMobileOpen(false)}>
                Contacto
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
