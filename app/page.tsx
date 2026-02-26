'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import TabNav from '@/components/TabNav'
import ResumeTab from '@/components/tabs/ResumeTab'
import AcademicProjectsTab from '@/components/tabs/AcademicProjectsTab'
import LiveProjectsTab from '@/components/tabs/LiveProjectsTab'
import PortfolioShowcaseTab from '@/components/tabs/PortfolioShowcaseTab'
import Footer from '@/components/Footer'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'resume' | 'academic' | 'live' | 'showcase'>('resume')

  return (
    <main className="w-full">
      <Hero />
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div key={activeTab} className="tab-content-enter">
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
