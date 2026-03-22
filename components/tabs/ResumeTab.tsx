'use client'

import { useMemo, useState } from 'react'
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

export default function ResumeTab() {
  const { education, experience, positionsOfResponsibility } = resumeData
  const [expandedElectives, setExpandedElectives] = useState(false)
  const [expandedOrganization, setExpandedOrganization] = useState<string | null>(null)

  const getYearsFromPeriod = (period: string) => {
    const matches = period.match(/\d{2,4}/g) || []
    return matches.map((value) => {
      const year = Number(value)
      if (Number.isNaN(year)) return 0
      return year < 100 ? 2000 + year : year
    }).filter((year) => year > 0)
  }

  const groupedPositions = useMemo(() => {
    const groups = positionsOfResponsibility.reduce<Record<string, typeof positionsOfResponsibility>>((acc, position) => {
      if (!acc[position.organization]) {
        acc[position.organization] = []
      }
      acc[position.organization].push(position)
      return acc
    }, {})

    return Object.entries(groups)
      .map(([organization, roles]) => {
        const sortedRoles = [...roles].sort((a, b) => {
          const aYears = getYearsFromPeriod(a.period)
          const bYears = getYearsFromPeriod(b.period)
          return (Math.max(...bYears, 0) - Math.max(...aYears, 0))
        })

        const allYears = sortedRoles.flatMap((role) => getYearsFromPeriod(role.period))
        const minYear = allYears.length ? Math.min(...allYears) : null
        const maxYear = allYears.length ? Math.max(...allYears) : null

        return {
          organization,
          roles: sortedRoles,
          durationLabel: minYear && maxYear ? `${minYear} - ${maxYear}` : 'Duration unavailable',
          sortKey: maxYear || 0,
        }
      })
      .sort((a, b) => b.sortKey - a.sortKey)
  }, [positionsOfResponsibility])

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
            <h4 className="text-xl font-serif font-bold text-white mb-4">🎖️ Positions of Responsibility</h4>
            <div className="space-y-3">
              {groupedPositions.map((group) => {
                const isOpen = expandedOrganization === group.organization
                return (
                  <div key={group.organization} className="border border-primary-light/20 rounded">
                    <button
                      onClick={() => setExpandedOrganization(isOpen ? null : group.organization)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary-dark/50 transition-colors"
                    >
                      <span className="font-serif font-semibold text-white">{group.organization}</span>
                      <span className="mono text-xs text-gray-400 ml-auto">{group.durationLabel}</span>
                      <span className={`transform transition-transform text-gray-400 ${isOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 space-y-4">
                        {group.roles.map((pos) => (
                          <div key={pos.id} className="border-l-2 border-primary-light/50 pl-4">
                            <h5 className="font-serif font-bold text-white">{pos.role}</h5>
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
                )
              })}
            </div>
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

    </div>
  )
}
