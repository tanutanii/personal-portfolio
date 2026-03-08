'use client'

import portfolioShowcaseData from '@/data/portfolio-showcase.json'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function PortfolioShowcaseTab() {
  if (portfolioShowcaseData.length === 0) {
    return (
      <div>
        <RevealOnScroll>
          <div className="section-header">
            <span className="section-index">01</span>
            <h2 className="section-title">Portfolio Showcase</h2>
            <div className="section-line" />
          </div>
        </RevealOnScroll>
        <div className="glass-card rounded-lg p-12 text-center">
          <p className="text-gray-300 text-lg">Coming soon...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <RevealOnScroll>
        <div className="section-header">
          <span className="section-index">01</span>
          <h2 className="section-title">Portfolio Showcase</h2>
          <div className="section-line" />
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioShowcaseData.map((item, index) => (
          <div
            key={item.id}
            className="portfolio-item-enter card-gradient-overlay group glass-card p-5"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="card-number">{String(index + 1).padStart(2, '0')}</div>

            <div className="mb-3">
              <span className="tech-tag inline-block">
                {item.category}
              </span>
            </div>
            <h3 className="text-base font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300 tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
              {item.description}
            </p>

            <div className="card-reveal-divider mt-4" />
            <div className="card-reveal-content">
              <div className="pt-3 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">View Details</span>
                <span className="text-accent text-sm">&rarr;</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
