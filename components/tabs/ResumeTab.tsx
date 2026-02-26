'use client'

import resumeData from '@/data/resume.json'

export default function ResumeTab() {
  const { education, experience, skills, leadership } = resumeData

  return (
    <div className="space-y-12">
      {/* Education */}
      <div className="stagger-item stagger-delay-0">
        <h3 className="text-3xl font-serif font-bold text-accent mb-6 accent-glow">Education</h3>
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.id} className="card-hover card-gradient-overlay bg-primary-main rounded-lg p-6 border border-primary-light/60">
              <h4 className="text-xl font-serif font-bold text-white mb-2">
                {edu.institution}
              </h4>
              <p className="text-gray-300 mb-2">{edu.degree}</p>
              <p className="text-sm text-gray-400">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="stagger-item stagger-delay-1">
        <h3 className="text-3xl font-serif font-bold text-accent mb-6 accent-glow">Experience</h3>
        <div className="space-y-4">
          {experience.map((exp) => (
            <div key={exp.id} className="card-hover card-gradient-overlay bg-primary-main rounded-lg p-6 border border-primary-light/60">
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
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="stagger-item stagger-delay-2">
        <h3 className="text-3xl font-serif font-bold text-accent mb-6 accent-glow">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-hover card-gradient-overlay bg-primary-main rounded-lg p-6 border border-primary-light/60">
            <h4 className="font-serif font-bold text-white mb-4">Technical</h4>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag px-3 py-1 bg-primary-dark text-accent text-sm rounded-full border border-primary-light/60 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="card-hover card-gradient-overlay bg-primary-main rounded-lg p-6 border border-primary-light/60">
            <h4 className="font-serif font-bold text-white mb-4">Soft Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag px-3 py-1 bg-primary-dark text-accent text-sm rounded-full border border-primary-light/60 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="stagger-item stagger-delay-3">
        <h3 className="text-3xl font-serif font-bold text-accent mb-6 accent-glow">Leadership</h3>
        <div className="space-y-4">
          {leadership.map((role) => (
            <div key={role.id} className="card-hover card-gradient-overlay bg-primary-main rounded-lg p-6 border border-primary-light/60">
              <h4 className="font-serif font-bold text-white mb-2">{role.role}</h4>
              <p className="text-gray-300 mb-2">{role.organization}</p>
              <p className="text-sm text-gray-400 mb-3">{role.period}</p>
              <p className="text-gray-400">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
