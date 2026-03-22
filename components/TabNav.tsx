'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface TabNavProps {
  activeTab: 'resume' | 'academic' | 'live' | 'showcase'
  setActiveTab: (tab: 'resume' | 'academic' | 'live' | 'showcase') => void
}

export default function TabNav({ activeTab, setActiveTab }: TabNavProps) {
  const [isSticky, setIsSticky] = useState(false)
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
  const tabsRef = useRef<Record<string, HTMLButtonElement | null>>({})
  const navTrackRef = useRef<HTMLDivElement>(null)

  const updateUnderline = useCallback(() => {
    const activeButton = tabsRef.current[activeTab]
    if (!activeButton) return

    setUnderlineStyle({
      left: activeButton.offsetLeft,
      width: activeButton.offsetWidth,
    })
  }, [activeTab])

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    updateUnderline()

    const navTrack = navTrackRef.current

    window.addEventListener('resize', updateUnderline)
    navTrack?.addEventListener('scroll', updateUnderline)

    return () => {
      window.removeEventListener('resize', updateUnderline)
      navTrack?.removeEventListener('scroll', updateUnderline)
    }
  }, [updateUnderline])

  const tabs = [
    { id: 'resume', label: 'Resume' },
    { id: 'academic', label: 'Academic' },
    { id: 'live', label: 'Live Projects' },
    { id: 'showcase', label: 'Showcase' },
  ] as const

  return (
    <nav
      className={`w-full transition-all duration-500 ${
        isSticky
          ? 'fixed top-0 z-50 bg-primary-dark/95 backdrop-blur-md border-b border-primary-light/20 shadow-lg shadow-black/10'
          : 'bg-primary-main/80 border-b border-primary-light/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={navTrackRef} className="relative flex gap-1 md:gap-6 overflow-x-auto py-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              ref={(el) => { tabsRef.current[tab.id] = el }}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn relative py-2 px-4 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-accent'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}

          {/* Animated underline */}
          <div
            className="absolute bottom-0 h-px bg-accent pointer-events-none"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
              transition: 'left 0.35s cubic-bezier(0.22, 1, 0.36, 1), width 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
              boxShadow: '0 0 8px rgba(210, 193, 182, 0.2)',
            }}
          />
        </div>
      </div>
    </nav>
  )
}
