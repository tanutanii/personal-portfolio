'use client'

import academicProjectsData from '@/data/academic-projects.json'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function AcademicProjectsTab() {
  return (
    <div>
      <RevealOnScroll>
        <div className="section-header">
          <span className="section-index">01</span>
          <h2 className="section-title">Research & Academic Work</h2>
          <div className="section-line" />
        </div>
      </RevealOnScroll>
      <div className="space-y-6">
        {academicProjectsData.map((project, index) => (
          <RevealOnScroll key={project.id} delay={index * 100}>
            <div className="glass-card rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-serif font-bold text-white flex-1">{project.title}</h3>
                {project.grade && <span className="ml-4 px-3 py-1 bg-gradient-to-r from-primary-light to-accent rounded text-white text-sm font-bold">{project.grade}</span>}
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-primary-dark px-3 py-1 rounded-full text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.downloadLink && (
                  <a
                    href={project.downloadLink}
                    download
                    className="px-4 py-2 bg-gradient-to-r from-primary-light to-accent text-white rounded hover:opacity-90 transition-opacity text-sm font-semibold"
                  >
                    📥 Download Paper
                  </a>
                )}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  )
}
