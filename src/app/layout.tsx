import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Vexel Labs — Agencia de Desarrollo de Software',
    template: '%s | Vexel Labs',
  },
  description:
    'Vexel Labs es una agencia de desarrollo de software especializada en Next.js, React, React Native, Node.js, Go y arquitecturas cloud escalables. Construimos software que impulsa tu negocio.',
  keywords: [
    'agencia de desarrollo de software',
    'desarrollo web',
    'Next.js',
    'React',
    'React Native',
    'Node.js',
    'NestJS',
    'Go',
    'Firebase',
    'Supabase',
    'AWS',
    'aplicaciones móviles',
    'Vexel Labs',
  ],
  authors: [{ name: 'Vexel Labs', url: 'https://vexellabs.dev' }],
  creator: 'Vexel Labs',
  publisher: 'Vexel Labs',
  metadataBase: new URL('https://vexellabs.dev'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://vexellabs.dev',
    siteName: 'Vexel Labs',
    title: 'Vexel Labs — Agencia de Desarrollo de Software',
    description:
      'Especialistas en Next.js, React, Tailwind CSS y arquitecturas escalables para potenciar tu empresa en el mundo digital.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vexel Labs — Construimos software que impulsa tu negocio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vexel Labs — Agencia de Desarrollo de Software',
    description: 'Especialistas en Next.js, React, Tailwind CSS y arquitecturas escalables.',
    images: ['/og-image.jpg'],
    creator: '@vexellabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vexellabs.dev',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
