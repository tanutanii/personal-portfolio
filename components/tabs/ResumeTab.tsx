'use client'

import { useState } from 'react'
import resumeData from '@/data/resume.json'
import RevealOnScroll from '@/components/RevealOnScroll'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

function TimelineItem({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })
  return (
    <div
      ref={ref}
      className={`timeline-item transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="timeline-dot" />
      <div className="glass-card rounded-lg p-6">
        {children}
      </div>
    </div>
  )
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-primary-dark rounded-full overflow-hidden">
        <div
          className="skill-bar-fill h-full rounded-full"
          style={{
            width: isVisible ? `${level}%` : '0%',
            transition: 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </div>
    </div>
  )
}

export default function ResumeTab() {
  const { education, experience, skills, positionsOfResponsibility } = resumeData
  const [expandedElectives, setExpandedElectives] = useState(false)
  const [expandedPositions, setExpandedPositions] = useState(false)

  return (
    <div className="space-y-12">
      {/* Education */}
      <RevealOnScroll>
        <h3 className="text-3xl font-serif font-bold text-gradient-animated mb-6">Education</h3>
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.id} className="glass-card rounded-lg p-6">
              <h4 className="text-xl font-serif font-bold text-white mb-2">
                {edu.institution}
              </h4>
              <p className="text-gray-300 mb-2">{edu.degree}</p>
              <p className="text-sm text-gray-400">{edu.period}</p>
              {edu.percentage && <p className="text-sm text-gray-400">Score: {edu.percentage}</p>}
              
              {/* Major Electives Dropdown */}
              {edu.majorElectives && (
                <div className="mt-4">
                  <button
                    onClick={() => setExpandedElectives(!expandedElectives)}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <span>📚 Major Electives</span>
                    <span className={`transform transition-transform ${expandedElectives ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {expandedElectives && (
                    <div className="mt-2 p-3 bg-primary-dark rounded border border-primary-light/20">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.majorElectives.map((elective, idx) => (
                          <p key={idx} className="text-sm text-gray-300">• {elective}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Positions of Responsibility Dropdown */}
          <div className="glass-card rounded-lg p-6">
            <button
              onClick={() => setExpandedPositions(!expandedPositions)}
              className="flex items-center gap-2 text-xl font-serif font-bold text-white hover:text-gray-300 transition-colors w-full"
            >
              <span>🎖️ Positions of Responsibility</span>
              <span className={`transform transition-transform ml-auto ${expandedPositions ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {expandedPositions && (
              <div className="mt-4 space-y-4">
                {positionsOfResponsibility.map((pos) => (
                  <div key={pos.id} className="border-l-2 border-primary-light/50 pl-4 pb-4">
                    <h5 className="font-serif font-bold text-white">{pos.role}</h5>
                    <p className="text-sm text-gray-400">{pos.organization}</p>
                    <p className="text-xs text-gray-500">{pos.period}</p>
                    <ul className="mt-2 list-disc list-inside text-gray-400 space-y-1">
                      {pos.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </RevealOnScroll>

      {/* Experience - Internships */}
      <RevealOnScroll delay={100}>
        <h3 className="text-3xl font-serif font-bold text-gradient-animated mb-6">Internships</h3>
        <div className="timeline-container">
          <div className="timeline-line" />
          {experience.map((exp) => (
            <TimelineItem key={exp.id}>
              <h4 className="text-xl font-serif font-bold text-white mb-2">
                {exp.position}
              </h4>
              <p className="text-gray-300 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </div>
      </RevealOnScroll>

      {/* Skills - Animated Bars */}
      <RevealOnScroll delay={200}>
        <h3 className="text-3xl font-serif font-bold text-gradient-animated mb-6">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card rounded-lg p-6">
            <h4 className="font-serif font-bold text-white mb-4">Technical</h4>
            {skills.technical.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.proficiency} />
            ))}
          </div>
          <div className="glass-card rounded-lg p-6">
            <h4 className="font-serif font-bold text-white mb-4">Soft Skills</h4>
            {skills.soft.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.proficiency} />
            ))}
          </div>
        </div>
      </RevealOnScroll>

    </div>
  )
}
