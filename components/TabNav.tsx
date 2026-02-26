'use client'

import { useState, useEffect } from 'react'

interface TabNavProps {
  activeTab: 'resume' | 'academic' | 'live' | 'showcase'
  setActiveTab: (tab: 'resume' | 'academic' | 'live' | 'showcase') => void
}

export default function TabNav({ activeTab, setActiveTab }: TabNavProps) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const tabs = [
    { id: 'resume', label: 'Resume' },
    { id: 'academic', label: 'Academic Projects' },
    { id: 'live', label: 'Live Projects' },
    { id: 'showcase', label: 'Portfolio Showcase' },
  ] as const

  return (
    <nav 
      className={`w-full transition-all duration-300 ${
        isSticky 
          ? 'fixed top-0 z-50 bg-primary-dark/95 backdrop-blur-sm border-b border-primary-light' 
          : 'bg-primary-main'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex gap-2 md:gap-8 overflow-x-auto py-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-4 font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-gray-300 hover:text-white border-b-2 border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
