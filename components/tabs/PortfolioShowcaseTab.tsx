'use client'

import { useState } from 'react'
import RevealOnScroll from '@/components/RevealOnScroll'

const portfolioItems = [
  {
    id: 1,
    title: 'AI in Healthcare',
    category: 'AI',
    description: 'Analysis of AI applications in healthcare industry',
  },
  {
    id: 2,
    title: 'Process Automation ROI',
    category: 'Automation',
    description: 'Case study on automation benefits and implementation',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'Website',
    description: 'Personal portfolio showcasing skills and projects',
  },
  {
    id: 4,
    title: 'Brand Identity Design',
    category: 'Design',
    description: 'Logo and visual identity design for startups',
  },
  {
    id: 5,
    title: 'Company Explainer Video',
    category: 'Video',
    description: 'Animated explainer video for SaaS product',
  },
  {
    id: 6,
    title: 'Industry Insights Blog',
    category: 'Posts',
    description: 'Series of long-form articles on AI and finance',
  },
]

const categories = ['All', 'AI', 'Automation', 'Website', 'Design', 'Video', 'Posts'] as const

export default function PortfolioShowcaseTab() {
  const [activeFilter, setActiveFilter] = useState<typeof categories[number]>('All')

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div>
      <RevealOnScroll>
        <div className="section-header">
          <span className="section-index">01</span>
          <h2 className="section-title">Portfolio Showcase</h2>
          <div className="section-line" />
        </div>
      </RevealOnScroll>

      {/* Filter buttons - tech style */}
      <RevealOnScroll delay={100}>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`filter-btn px-4 py-1.5 ${
                activeFilter === category
                  ? 'bg-accent text-primary-dark filter-btn-active'
                  : 'bg-transparent border border-primary-light/30 text-gray-400 hover:border-accent/50 hover:text-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </RevealOnScroll>

      {/* Portfolio grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="portfolio-item-enter card-gradient-overlay group glass-card p-5"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            {/* Index number */}
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

            {/* Reveal on hover */}
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
