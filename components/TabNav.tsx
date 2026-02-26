'use client'

import { useState, useEffect, useRef } from 'react'

interface TabNavProps {
  activeTab: 'resume' | 'academic' | 'live' | 'showcase'
  setActiveTab: (tab: 'resume' | 'academic' | 'live' | 'showcase') => void
}

export default function TabNav({ activeTab, setActiveTab }: TabNavProps) {
  const [isSticky, setIsSticky] = useState(false)
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
  const tabsRef = useRef<Record<string, HTMLButtonElement | null>>({})

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const activeButton = tabsRef.current[activeTab]
    if (activeButton) {
      const parent = activeButton.parentElement
      if (parent) {
        setUnderlineStyle({
          left: activeButton.offsetLeft - parent.offsetLeft,
          width: activeButton.offsetWidth,
        })
      }
    }
  }, [activeTab])

  const tabs = [
    { id: 'resume', label: 'Resume' },
    { id: 'academic', label: 'Academic Projects' },
    { id: 'live', label: 'Live Projects' },
    { id: 'showcase', label: 'Portfolio Showcase' },
  ] as const

  return (
    <nav
      className={`w-full transition-all duration-500 ${
        isSticky
          ? 'fixed top-0 z-50 bg-primary-dark/95 backdrop-blur-md border-b border-primary-light/50 shadow-lg shadow-black/10'
          : 'bg-primary-main'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative flex gap-2 md:gap-8 overflow-x-auto py-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              ref={(el) => { tabsRef.current[tab.id] = el }}
              onClick={() => setActiveTab(tab.id)}
              className={`relative py-2 px-4 font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-accent'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}

          {/* Animated underline */}
          <div
            className="absolute bottom-3 h-[2px] bg-accent rounded-full transition-all duration-400"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
              transition: 'left 0.35s cubic-bezier(0.22, 1, 0.36, 1), width 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
              boxShadow: '0 0 8px rgba(210, 193, 182, 0.3)',
            }}
          />
        </div>
      </div>
    </nav>
  )
}
