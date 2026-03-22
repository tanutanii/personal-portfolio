'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { useMousePosition } from '@/hooks/useMousePosition'
import siteConfig from '@/data/site-config.json'

function MagneticButton({
  children,
  className,
  href,
  target,
  rel,
}: {
  children: React.ReactNode
  className: string
  href?: string
  target?: string
  rel?: string
}) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = e.clientX - centerX
    const distY = e.clientY - centerY
    setOffset({ x: distX * 0.25, y: distY * 0.25 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 })
  }, [])

  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-block p-4 -m-4">
      {href ? (
        <a
          ref={(el) => {
            ref.current = el
          }}
          href={href}
          target={target}
          rel={rel}
          className={`${className} inline-block`}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            transition: offset.x === 0 && offset.y === 0
              ? 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
              : 'transform 0.15s ease-out',
          }}
        >
          {children}
        </a>
      ) : (
        <button
          ref={(el) => {
            ref.current = el
          }}
          className={className}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            transition: offset.x === 0 && offset.y === 0
              ? 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
              : 'transform 0.15s ease-out',
          }}
        >
          {children}
        </button>
      )}
    </div>
  )
}

export default function Hero() {
  const mouse = useMousePosition()
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 })
  const [displayedText, setDisplayedText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const tagline = '> Exploring AI, Strategy, and how things get built.'
  const linkedInUrl = siteConfig.social.find((link) => link.name.toLowerCase() === 'linkedin')?.url || '#'

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
      }, 55)
    }, 1000)
    return () => {
      clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [])

  const cx = dimensions.w / 2
  const cy = dimensions.h / 2

  return (
    <section className="w-full min-h-screen bg-primary-dark flex items-center justify-center relative overflow-hidden">
      {/* Dot grid background */}
      <div className="dot-grid" />
      {/* Mesh gradient overlay for depth */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      {/* Parallax depth layers */}
      <div
        className="absolute top-[15%] right-[10%] w-40 h-40 rounded-full parallax-orb-1"
        style={{ transform: `translate(${(mouse.x - cx) * 0.03}px, ${(mouse.y - cy) * 0.03}px)` }}
      />
      <div
        className="absolute bottom-[20%] left-[8%] w-24 h-24 parallax-orb-2"
        style={{ transform: `translate(${(mouse.x - cx) * 0.05}px, ${(mouse.y - cy) * 0.05}px)` }}
      />
      <div
        className="absolute top-[40%] left-[20%] w-32 h-32 parallax-orb-3"
        style={{ transform: `translate(${(mouse.x - cx) * 0.015}px, ${(mouse.y - cy) * 0.015}px)` }}
      />

      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 hero-slide-in">
                Tanish
              </h1>
              <h2 className="text-3xl md:text-4xl font-serif text-gradient-animated mb-4 hero-slide-in-delay-1">
                Chaudhary
              </h2>
              <p className="text-xl text-gray-300 hero-slide-in-delay-2 min-h-[1.75rem]">
                <span>{displayedText}</span>
                <span className={`typewriter-cursor ${isTypingComplete ? 'typewriter-cursor-blink' : ''}`} />
              </p>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl hero-slide-in-delay-3">
              I am a high-agency builder operating right where business strategy meets emerging tech. While I focus on the big picture of markets, policy, and growth, my real edge is that I build things myself. Driven by pure curiosity, I know my way around modern AI tools and coding. I want to bring this hands-on perspective to PE/VC or a founder&apos;s office to spot great products, figure out the strategy, and help scale them. If there&apos;s a new skill needed to get it done, I&apos;ll learn it by tomorrow.
            </p>

            <div className="flex gap-4 flex-wrap hero-slide-in-delay-5">
              <MagneticButton
                href="/resume-tanish-chaudhary.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-3 bg-accent text-primary-dark font-semibold rounded-lg"
              >
                View Resume
              </MagneticButton>
              <MagneticButton
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary-dark"
              >
                Contact
              </MagneticButton>
            </div>
          </div>

          {/* Right Column - Avatar */}
          <div className="flex items-center justify-center fade-in-scale">
            <div className="relative w-64 h-64 md:w-80 md:h-80 avatar-float">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-full avatar-glow" />

              {/* Shimmer gradient ring */}
              <div
                className="absolute inset-0 rounded-full avatar-ring shimmer-ring"
                style={{ padding: '4px' }}
              >
                {/* Inner circle with profile image */}
                <div className="w-full h-full rounded-full bg-primary-dark flex items-center justify-center overflow-hidden relative"
                  style={{
                    boxShadow: 'inset 0 -4px 12px rgba(0,0,0,0.3), inset 0 4px 12px rgba(210,193,182,0.08)',
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

              {/* Geometric accents - animated */}
              <div className="absolute -top-8 -right-8 w-20 h-20 border-2 border-accent opacity-30 rounded geo-drift" />
              <div className="absolute -bottom-12 -left-12 w-32 h-32 border border-primary-light rounded-full geo-pulse" />
              <div className="absolute -top-4 -left-6 w-12 h-12 border border-accent opacity-20 rounded-full geo-rotate"
                style={{ borderStyle: 'dashed' }}
              />
              <div className="absolute -bottom-4 -right-6 w-16 h-16 border border-primary-light opacity-15 rounded geo-drift"
                style={{ animationDelay: '2s', animationDuration: '10s' }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
