'use client'

export default function ResumeTab() {
  return (
    <div className="space-y-12">
      {/* Education */}
      <div className="stagger-item stagger-delay-0">
        <h3 className="text-3xl font-serif font-bold text-accent mb-6 accent-glow">Education</h3>
        <div className="card-hover card-gradient-overlay bg-primary-main rounded-lg p-6 border border-primary-light/60">
          <h4 className="text-xl font-serif font-bold text-white mb-2">
            Indian Institute of Management (IIM) Indore
          </h4>
          <p className="text-gray-300 mb-2">MBA in Business Administration</p>
          <p className="text-sm text-gray-400">2022 - 2024</p>
        </div>
      </div>

      {/* Experience */}
      <div className="stagger-item stagger-delay-1">
        <h3 className="text-3xl font-serif font-bold text-accent mb-6 accent-glow">Experience</h3>
        <div className="space-y-4">
          <div className="card-hover card-gradient-overlay bg-primary-main rounded-lg p-6 border border-primary-light/60">
            <h4 className="text-xl font-serif font-bold text-white mb-2">
              Senior Consultant
            </h4>
            <p className="text-gray-300 mb-2">Edelman Intelligence</p>
            <p className="text-sm text-gray-400 mb-3">2021 - 2022</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Led market entry strategy analysis for Fortune 500 clients</li>
              <li>Conducted competitive intelligence across 8+ markets</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="stagger-item stagger-delay-2">
        <h3 className="text-3xl font-serif font-bold text-accent mb-6 accent-glow">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-hover card-gradient-overlay bg-primary-main rounded-lg p-6 border border-primary-light/60">
            <h4 className="font-serif font-bold text-white mb-4">Technical</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'SQL', 'Excel', 'Tableau', 'R'].map((skill) => (
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
              {['Leadership', 'Communication', 'Strategic Thinking', 'Negotiation'].map((skill) => (
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
        <div className="card-hover card-gradient-overlay bg-primary-main rounded-lg p-6 border border-primary-light/60">
          <h4 className="font-serif font-bold text-white mb-2">President, Investment Club</h4>
          <p className="text-gray-300 mb-2">IIM Indore</p>
          <p className="text-gray-400">Managed investment portfolio and organized quarterly case competitions</p>
        </div>
      </div>
    </div>
  )
}
