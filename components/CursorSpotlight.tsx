'use client'

import { useEffect, useCallback } from 'react'

export default function CursorSpotlight() {
  const handleMouseMove = useCallback((e: MouseEvent) => {
    document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`)
    document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return null
}
