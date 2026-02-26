'use client'

import ProjectCard from '@/components/ProjectCard'
import RevealOnScroll from '@/components/RevealOnScroll'

const academicProjects = [
  {
    id: 1,
    title: 'Market Entry Strategy Analysis',
    description: 'Strategic analysis of market entry opportunities for emerging markets using competitive intelligence.',
    technologies: ['Research', 'Analytics', 'Strategy'],
  },
  {
    id: 2,
    title: 'AI Governance Framework',
    description: 'Developed comprehensive policy recommendations for AI regulation across different sectors.',
    technologies: ['Policy', 'AI', 'Governance'],
  },
  {
    id: 3,
    title: 'Predictive Analytics Model',
    description: 'Built machine learning model for financial forecasting with 85% accuracy rate.',
    technologies: ['Python', 'ML', 'Finance'],
  },
]

export default function AcademicProjectsTab() {
  return (
    <div>
      <RevealOnScroll>
        <h2 className="text-3xl font-serif font-bold text-gradient-animated mb-12">
          Academic Projects
        </h2>
      </RevealOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {academicProjects.map((project, index) => (
          <RevealOnScroll key={project.id} delay={index * 100}>
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  )
}
