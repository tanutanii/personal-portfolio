'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Hero from '@/components/Hero'
import TabNav from '@/components/TabNav'
import ResumeTab from '@/components/tabs/ResumeTab'
import AcademicProjectsTab from '@/components/tabs/AcademicProjectsTab'
import LiveProjectsTab from '@/components/tabs/LiveProjectsTab'
import PortfolioShowcaseTab from '@/components/tabs/PortfolioShowcaseTab'
import Footer from '@/components/Footer'

const tabOrder = ['resume', 'academic', 'live', 'showcase'] as const

export default function Home() {
  const [activeTab, setActiveTab] = useState<typeof tabOrder[number]>('resume')
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left')
  const [scrollProgress, setScrollProgress] = useState(0)
  const activeTabIndexRef = useRef(0)

  const handleTabChange = useCallback((tab: typeof tabOrder[number]) => {
    const newIndex = tabOrder.indexOf(tab)
    setSlideDirection(newIndex > activeTabIndexRef.current ? 'left' : 'right')
    activeTabIndexRef.current = newIndex
    setActiveTab(tab)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="w-full">
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <Hero />
      <TabNav activeTab={activeTab} setActiveTab={handleTabChange} />

      <section className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div key={activeTab} className={`tab-slide-${slideDirection}`}>
          {activeTab === 'resume' && <ResumeTab />}
          {activeTab === 'academic' && <AcademicProjectsTab />}
          {activeTab === 'live' && <LiveProjectsTab />}
          {activeTab === 'showcase' && <PortfolioShowcaseTab />}
        </div>
      </section>

      <Footer />
    </main>
  )
}
