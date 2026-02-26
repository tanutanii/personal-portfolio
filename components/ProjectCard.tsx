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
  return (
    <div className="group card-hover card-gradient-overlay bg-primary-main rounded-lg overflow-hidden border border-primary-light/60 hover:border-accent/70">
      {/* Preview area with gradient */}
      <div className="h-40 bg-gradient-to-br from-primary-light/80 to-primary-dark relative overflow-hidden">
        {/* Subtle animated gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/10 group-hover:to-transparent transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
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
  )
}
