import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12', className)}>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
