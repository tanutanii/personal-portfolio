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
  const { education, experience, skills, leadership } = resumeData

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
            </div>
          ))}
        </div>
      </RevealOnScroll>

      {/* Experience - Vertical Timeline */}
      <RevealOnScroll delay={100}>
        <h3 className="text-3xl font-serif font-bold text-gradient-animated mb-6">Experience</h3>
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

      {/* Leadership */}
      <RevealOnScroll delay={300}>
        <h3 className="text-3xl font-serif font-bold text-gradient-animated mb-6">Leadership</h3>
        <div className="space-y-4">
          {leadership.map((role) => (
            <div key={role.id} className="glass-card rounded-lg p-6">
              <h4 className="font-serif font-bold text-white mb-2">{role.role}</h4>
              <p className="text-gray-300 mb-2">{role.organization}</p>
              <p className="text-sm text-gray-400 mb-3">{role.period}</p>
              <p className="text-gray-400">{role.description}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  )
}
