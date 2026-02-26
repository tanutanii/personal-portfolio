'use client'

import { useState, useRef, useCallback } from 'react'
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
  const activeTabIndexRef = useRef(0)

  const handleTabChange = useCallback((tab: typeof tabOrder[number]) => {
    const newIndex = tabOrder.indexOf(tab)
    setSlideDirection(newIndex > activeTabIndexRef.current ? 'left' : 'right')
    activeTabIndexRef.current = newIndex
    setActiveTab(tab)
  }, [])

  return (
    <main className="w-full">
      <Hero />
      <TabNav activeTab={activeTab} setActiveTab={handleTabChange} />

      <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
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
