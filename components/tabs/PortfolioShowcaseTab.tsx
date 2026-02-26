'use client'

import { useState } from 'react'

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
      <h2 className="text-3xl font-serif font-bold text-accent mb-8">Portfolio Showcase</h2>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeFilter === category
                ? 'bg-accent text-primary-dark'
                : 'bg-primary-main border border-primary-light text-white hover:border-accent'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-primary-main rounded-lg p-6 border border-primary-light hover:border-accent transition-all hover:-translate-y-1"
          >
            <div className="mb-4">
              <span className="text-xs bg-primary-dark text-accent px-3 py-1 rounded-full border border-primary-light">
                {item.category}
              </span>
            </div>
            <h3 className="text-lg font-serif font-bold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
