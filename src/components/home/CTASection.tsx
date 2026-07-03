'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-24 bg-[#FCFDFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0D1527] tracking-tight mb-8">
          ¿Listo para comenzar tu proyecto?
        </h2>

        {/* Action Button */}
        <div>
          <Button
            asChild
            size="lg"
            className="bg-[#7857ed] hover:bg-[#633ee3] text-white px-9 py-3.5 h-auto rounded-full font-medium text-[15px] shadow-md shadow-purple-200/50 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <Link href="/contacto">
              Contactar
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
