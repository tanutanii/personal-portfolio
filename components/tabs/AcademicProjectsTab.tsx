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
        <div className="section-header">
          <span className="section-index">01</span>
          <h2 className="section-title">Academic Projects</h2>
          <div className="section-line" />
        </div>
      </RevealOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {academicProjects.map((project, index) => (
          <RevealOnScroll key={project.id} delay={index * 100}>
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              index={index}
            />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  )
}
