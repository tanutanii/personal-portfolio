'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { useMousePosition } from '@/hooks/useMousePosition'

function MagneticButton({ children, className }: { children: React.ReactNode; className: string }) {
  const ref = useRef<HTMLButtonElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    setOffset({ x: (e.clientX - centerX) * 0.2, y: (e.clientY - centerY) * 0.2 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 })
  }, [])

  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-block p-3 -m-3">
      <button
        ref={ref}
        className={className}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: offset.x === 0 && offset.y === 0
            ? 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
            : 'transform 0.12s ease-out',
        }}
      >
        {children}
      </button>
    </div>
  )
}

export default function Hero() {
  const mouse = useMousePosition()
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 })
  const [displayedText, setDisplayedText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const tagline = 'Exploring AI, Policy and Finance'

  useEffect(() => {
    setDimensions({ w: window.innerWidth, h: window.innerHeight })
  }, [])

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined
    const timeoutId = setTimeout(() => {
      let index = 0
      intervalId = setInterval(() => {
        if (index < tagline.length) {
          setDisplayedText(tagline.slice(0, index + 1))
          index++
        } else {
          setIsTypingComplete(true)
          if (intervalId) clearInterval(intervalId)
        }
      }, 45)
    }, 1200)
    return () => {
      clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [])

  const cx = dimensions.w / 2
  const cy = dimensions.h / 2

  return (
    <section className="w-full min-h-screen bg-primary-dark flex items-center relative overflow-hidden">
      {/* Tech grid background */}
      <div className="grid-bg" />

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      {/* Parallax depth layers */}
      <div
        className="absolute top-[15%] right-[12%] w-40 h-40 rounded-full parallax-orb-1"
        style={{ transform: `translate(${(mouse.x - cx) * 0.03}px, ${(mouse.y - cy) * 0.03}px)` }}
      />
      <div
        className="absolute bottom-[25%] left-[5%] w-24 h-24 parallax-orb-2"
        style={{ transform: `translate(${(mouse.x - cx) * 0.05}px, ${(mouse.y - cy) * 0.05}px)` }}
      />
      <div
        className="absolute top-[45%] left-[25%] w-32 h-32 parallax-orb-3"
        style={{ transform: `translate(${(mouse.x - cx) * 0.015}px, ${(mouse.y - cy) * 0.015}px)` }}
      />

      {/* Ghost text background */}
      <div className="hero-ghost-text top-[10%] left-[-5%] hero-slide-in" style={{ opacity: 0.6 }}>
        TC
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Name-dominant text block (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Terminal label */}
            <div className="hero-label hero-slide-in">
              <span className="text-accent/60">&#47;&#47;</span> portfolio.2024
            </div>

            {/* Name - oversized, dramatic */}
            <div className="hero-slide-in-delay-1">
              <h1 className="hero-name-xl text-white">
                Tanish
              </h1>
              <h2 className="hero-name-sub text-accent mt-2">
                Chaudhary
              </h2>
            </div>

            {/* Divider line */}
            <div className="h-px w-24 bg-accent/20 hero-slide-in-delay-2" />

            {/* Typewriter tagline - monospace */}
            <div className="hero-slide-in-delay-2">
              <p className="font-mono text-sm text-gray-400 tracking-wide min-h-[1.5rem]">
                <span className="text-accent/50">{'>'} </span>
                <span>{displayedText}</span>
                <span className={`typewriter-cursor ${isTypingComplete ? 'typewriter-cursor-blink' : ''}`} />
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-gray-400 leading-relaxed max-w-lg hero-slide-in-delay-3">
              PE/VC focused analyst passionate about AI applications in finance and policy.
              Building conviction through data-driven insights and strategic thinking.
            </p>

            {/* Buttons - sharp, tech */}
            <div className="flex gap-4 flex-wrap hero-slide-in-delay-4">
              <MagneticButton className="btn-primary px-7 py-2.5 bg-accent text-primary-dark font-mono">
                View Resume
              </MagneticButton>
              <MagneticButton className="btn-secondary px-7 py-2.5 border border-accent/30 text-accent font-mono hover:bg-accent/5 hover:border-accent/60">
                Contact
              </MagneticButton>
            </div>

            {/* Status line */}
            <div className="flex items-center gap-6 text-xs font-mono text-gray-500 hero-slide-in-delay-5">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400/60 inline-block" />
                IIM Indore
              </span>
              <span className="text-gray-600">|</span>
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Right: Avatar (4 cols) */}
          <div className="lg:col-span-4 flex items-center justify-center hero-slide-in-delay-3">
            <div className="relative w-52 h-52 md:w-64 md:h-64 avatar-float">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 avatar-glow" />

              {/* Shimmer gradient ring */}
              <div
                className="absolute inset-0 avatar-ring shimmer-ring"
                style={{ padding: '3px' }}
              >
                {/* Inner with profile image */}
                <div className="w-full h-full bg-primary-dark flex items-center justify-center overflow-hidden relative"
                  style={{
                    boxShadow: 'inset 0 -4px 12px rgba(0,0,0,0.3), inset 0 4px 12px rgba(210,193,182,0.06)',
                  }}
                >
                  <Image
                    src="/images/profile.jpg.jpeg"
                    alt="Tanish Chaudhary"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Geometric accents - minimal, angular */}
              <div className="absolute -top-6 -right-6 w-16 h-16 border border-accent/15 geo-drift" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 border border-primary-light/20 geo-pulse" />
              <div className="absolute -top-3 -left-5 w-8 h-8 border border-accent/10 geo-rotate"
                style={{ borderStyle: 'dashed' }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[0.6rem] text-gray-500 tracking-widest uppercase">scroll</span>
            <div className="w-px h-6 bg-gradient-to-b from-accent/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
