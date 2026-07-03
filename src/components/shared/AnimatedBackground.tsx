export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Grid dots */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle, #6B4FBF22 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Gradient blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl animate-pulse-slow [animation-delay:2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-100/20 rounded-full blur-3xl" />
    </div>
  )
}
