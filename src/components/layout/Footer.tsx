import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

const footerLinks = {
  servicios: [
    { label: 'Desarrollo Web', href: '/servicios#web' },
    { label: 'Apps Móviles', href: '/servicios#mobile' },
    { label: 'UI/UX Design', href: '/servicios#design' },
    { label: 'Cloud & DevOps', href: '/servicios#cloud' },
  ],
  empresa: [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Portafolio', href: '/portafolio' },
    { label: 'Tecnologías', href: '/tecnologias' },
    { label: 'Contacto', href: '/contacto' },
  ],
}

// Social icon SVGs (lucide-react removed brand icons)
const SocialGithub = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)
const SocialLinkedin = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const SocialX = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 5.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const socialLinks = [
  { Icon: SocialGithub, href: 'https://github.com/vexellabs', label: 'GitHub' },
  { Icon: SocialLinkedin, href: 'https://linkedin.com/company/vexellabs', label: 'LinkedIn' },
  { Icon: SocialX, href: 'https://twitter.com/vexellabs', label: 'X (Twitter)' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <svg
                width="30"
                height="30"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <polygon points="8,8 16,4 24,8 16,12" stroke="#8B6FDF" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                <polygon points="8,8 8,16 16,20 16,12" stroke="#8B6FDF" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                <polygon points="24,8 24,16 16,20 16,12" stroke="#8B6FDF" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                <polygon points="24,8 32,4 40,8 32,12" stroke="#A78BFA" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                <polygon points="24,8 24,16 32,20 32,12" stroke="#A78BFA" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                <polygon points="40,8 40,16 32,20 32,12" stroke="#A78BFA" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                <polygon points="16,24 24,20 32,24 24,28" stroke="#8B6FDF" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                <polygon points="16,24 16,32 24,36 24,28" stroke="#8B6FDF" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                <polygon points="32,24 32,32 24,36 24,28" stroke="#8B6FDF" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                <line x1="16" y1="20" x2="16" y2="24" stroke="#8B6FDF" strokeWidth="1.8"/>
                <line x1="32" y1="20" x2="32" y2="24" stroke="#A78BFA" strokeWidth="1.8"/>
              </svg>
              <span className="text-lg font-bold text-white tracking-tight">
                VEXEL <span className="text-purple-400">LABS</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              Construimos software que impulsa tu negocio. Especializados en soluciones
              web, móviles y cloud de alto rendimiento.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-purple-400 shrink-0" />
                <span>hola@vexellabs.dev</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-purple-400 shrink-0" />
                <span>Latinoamérica</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Servicios</h3>
            <ul className="space-y-2.5">
              {footerLinks.servicios.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Empresa</h3>
            <ul className="space-y-2.5">
              {footerLinks.empresa.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {currentYear} Vexel Labs. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg hover:bg-slate-800 hover:text-purple-400 transition-colors duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
