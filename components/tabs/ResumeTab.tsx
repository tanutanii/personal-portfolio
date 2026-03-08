'use client'

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
      <div className="glass-card p-5">
        {children}
      </div>
    </div>
  )
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 })

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-xs font-mono text-gray-400">{name}</span>
        <span className="text-xs font-mono text-gray-600">{level}%</span>
      </div>
      <div className="h-1 bg-primary-dark/80 overflow-hidden">
        <div
          className="skill-bar-fill h-full"
          style={{
            width: isVisible ? `${level}%` : '0%',
            transition: 'width 1s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </div>
    </div>
  )
}

export default function ResumeTab() {
  const { education, experience, skills, leadership } = resumeData

  return (
    <div className="space-y-16">
      {/* Education */}
      <RevealOnScroll>
        <div className="section-header">
          <span className="section-index">01</span>
          <h3 className="section-title">Education</h3>
          <div className="section-line" />
        </div>
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.id} className="glass-card p-5 education-badge">
              <h4 className="text-lg font-semibold text-white mb-1 tracking-tight">
                {edu.institution}
              </h4>
              <p className="text-sm text-gray-300 mb-1">{edu.degree}</p>
              <p className="text-xs font-mono text-gray-500">{edu.period}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      {/* Experience */}
      <RevealOnScroll delay={100}>
        <div className="section-header">
          <span className="section-index">02</span>
          <h3 className="section-title">Experience</h3>
          <div className="section-line" />
        </div>
        <div className="timeline-container">
          <div className="timeline-line" />
          {experience.map((exp) => (
            <TimelineItem key={exp.id}>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="text-base font-semibold text-white tracking-tight">
                  {exp.position}
                </h4>
                <span className="role-accent shrink-0">{exp.period}</span>
              </div>
              <p className="text-sm text-accent/70 mb-3 font-mono text-xs">{exp.company}</p>
              <ul className="space-y-1">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex gap-2">
                    <span className="text-accent/30 shrink-0">-</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </div>
      </RevealOnScroll>

      {/* Skills */}
      <RevealOnScroll delay={200}>
        <div className="section-header">
          <span className="section-index">03</span>
          <h3 className="section-title">Skills</h3>
          <div className="section-line" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-5">
            <h4 className="text-xs font-mono font-medium text-accent/60 uppercase tracking-wider mb-4">Technical</h4>
            {skills.technical.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.proficiency} />
            ))}
          </div>
          <div className="glass-card p-5">
            <h4 className="text-xs font-mono font-medium text-accent/60 uppercase tracking-wider mb-4">Soft Skills</h4>
            {skills.soft.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.proficiency} />
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Leadership */}
      <RevealOnScroll delay={300}>
        <div className="section-header">
          <span className="section-index">04</span>
          <h3 className="section-title">Leadership</h3>
          <div className="section-line" />
        </div>
        <div className="space-y-4">
          {leadership.map((role) => (
            <div key={role.id} className="glass-card p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="text-base font-semibold text-white tracking-tight">{role.role}</h4>
                <span className="role-accent shrink-0">{role.period}</span>
              </div>
              <p className="text-sm font-mono text-accent/60 mb-2">{role.organization}</p>
              <p className="text-sm text-gray-400">{role.description}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  )
}
