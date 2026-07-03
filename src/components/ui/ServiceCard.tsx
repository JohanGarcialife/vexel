import { Code2, Smartphone, Layout, Cloud, LucideIcon } from 'lucide-react'
import { Service } from '@/types/service'
import { cn } from '@/lib/utils'

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  smartphone: Smartphone,
  layout: Layout,
  cloud: Cloud,
}

interface ServiceCardProps {
  service: Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Code2

  return (
    <div
      className={cn(
        'group relative bg-white rounded-2xl p-6 border border-slate-100',
        'hover:border-purple-200 hover:shadow-xl hover:shadow-purple-50',
        'transition-all duration-300 hover:-translate-y-1',
        className
      )}
    >
      {/* Icon container */}
      <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors duration-300">
        <Icon
          size={22}
          className="text-vexel-purple transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        />
      </div>

      <h3 className="text-slate-900 font-semibold text-base mb-2 leading-snug">
        {service.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>

      {/* Hover accent */}
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-vexel-purple to-violet-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  )
}
