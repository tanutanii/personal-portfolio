'use client'

import { useState, useRef, useCallback } from 'react'

interface RelativePosition {
  x: number
  y: number
  isHovering: boolean
}

export function useRelativeMousePosition() {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<RelativePosition>({
    x: 0, y: 0, isHovering: false
  })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setPosition({ x, y, isHovering: true })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0, isHovering: false })
  }, [])

  return { ref, position, handleMouseMove, handleMouseLeave }
}
