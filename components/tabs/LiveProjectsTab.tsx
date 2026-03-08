'use client'

import ProjectCard from '@/components/ProjectCard'
import RevealOnScroll from '@/components/RevealOnScroll'

const liveProjects = [
  {
    id: 1,
    title: 'Crochet by Arsh',
    description: 'E-commerce platform for handmade crochet products with payment integration and inventory management.',
    technologies: ['Next.js', 'Stripe', 'MongoDB'],
    link: 'https://crochetbyarsh.com',
  },
  {
    id: 2,
    title: 'Content Publishing Automation',
    description: 'Developed automation system for content distribution across multiple platforms simultaneously.',
    technologies: ['Python', 'APIs', 'Automation'],
    link: '#',
  },
]

export default function LiveProjectsTab() {
  return (
    <div>
      <RevealOnScroll>
        <div className="section-header">
          <span className="section-index">01</span>
          <h2 className="section-title">Live Projects</h2>
          <div className="section-line" />
        </div>
      </RevealOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {liveProjects.map((project, index) => (
          <RevealOnScroll key={project.id} delay={index * 100}>
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              index={index}
            />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  )
}
