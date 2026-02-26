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
    <div className="group bg-primary-main rounded-lg overflow-hidden border border-primary-light hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
      {/* Preview area with gradient */}
      <div className="h-40 bg-gradient-to-br from-primary-light to-primary-dark"></div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-primary-dark text-accent rounded-full border border-primary-light"
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
            className="inline-block text-accent hover:underline font-medium"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  )
}
