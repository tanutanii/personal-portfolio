'use client'

import { useRelativeMousePosition } from '@/hooks/useRelativeMousePosition'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  link?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  const { ref, position, handleMouseMove, handleMouseLeave } = useRelativeMousePosition()

  const tiltX = position.y * -8
  const tiltY = position.x * 8
  const spotlightX = ((position.x + 1) / 2) * 100
  const spotlightY = ((position.y + 1) / 2) * 100

  return (
    <div style={{ perspective: '800px' }}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group card-gradient-overlay bg-primary-main rounded-lg overflow-hidden border border-primary-light/60 hover:border-accent/70 tilt-card"
        style={{
          transform: position.isHovering
            ? `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`
            : 'rotateX(0deg) rotateY(0deg) scale(1)',
          transition: position.isHovering
            ? 'transform 0.1s ease-out, box-shadow 0.3s ease, border-color 0.3s ease'
            : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, border-color 0.3s ease',
          boxShadow: position.isHovering
            ? '0 20px 40px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(210, 193, 182, 0.15)'
            : 'none',
        }}
      >
        {/* Spotlight gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg z-10"
          style={{
            background: position.isHovering
              ? `radial-gradient(circle at ${spotlightX}% ${spotlightY}%, rgba(210,193,182,0.12) 0%, transparent 60%)`
              : 'none',
          }}
        />

        {/* Preview area with gradient */}
        <div className="h-40 bg-gradient-to-br from-primary-light/80 to-primary-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/10 group-hover:to-transparent transition-all duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 relative z-10">
          <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="tag-glow text-xs px-3 py-1 bg-primary-dark text-accent rounded-full border border-primary-light/60"
              >
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
              className="inline-flex items-center gap-1 text-accent font-medium transition-all duration-300 hover:gap-2"
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
