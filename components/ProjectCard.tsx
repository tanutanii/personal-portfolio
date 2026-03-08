'use client'

import { useRelativeMousePosition } from '@/hooks/useRelativeMousePosition'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  link?: string
  index?: number
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  index,
}: ProjectCardProps) {
  const { ref, position, handleMouseMove, handleMouseLeave } = useRelativeMousePosition()

  const tiltX = position.y * -6
  const tiltY = position.x * 6
  const spotlightX = ((position.x + 1) / 2) * 100
  const spotlightY = ((position.y + 1) / 2) * 100

  const displayIndex = index !== undefined ? String(index + 1).padStart(2, '0') : undefined

  return (
    <div style={{ perspective: '800px' }}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group card-gradient-overlay bg-primary-main/80 overflow-hidden border border-primary-light/30 hover:border-accent/40 tilt-card"
        style={{
          transform: position.isHovering
            ? `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.01)`
            : 'rotateX(0deg) rotateY(0deg) scale(1)',
          transition: position.isHovering
            ? 'transform 0.1s ease-out, box-shadow 0.3s ease, border-color 0.3s ease'
            : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, border-color 0.3s ease',
          boxShadow: position.isHovering
            ? '0 16px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(210, 193, 182, 0.08)'
            : 'none',
        }}
      >
        {/* Spotlight gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
          style={{
            background: position.isHovering
              ? `radial-gradient(circle at ${spotlightX}% ${spotlightY}%, rgba(210,193,182,0.08) 0%, transparent 60%)`
              : 'none',
          }}
        />

        {/* Card number */}
        {displayIndex && (
          <div className="card-number">{displayIndex}</div>
        )}

        {/* Preview area with crosshatch pattern */}
        <div className="h-32 bg-gradient-to-br from-primary-light/40 to-primary-dark card-preview-pattern relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-accent/0 group-hover:to-accent/5 transition-all duration-500" />
          {/* Decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 relative z-10">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300 tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
            {description}
          </p>

          {/* Technologies - monospace tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {technologies.map((tech, i) => (
              <span key={i} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          {/* Link */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-accent/70 hover:text-accent transition-all duration-300 uppercase tracking-wider"
            >
              View Project
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
