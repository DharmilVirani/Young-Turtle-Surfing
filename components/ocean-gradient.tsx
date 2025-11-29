"use client"

import { useEffect, useState, type ReactNode } from "react"

interface OceanGradientProps {
  children: ReactNode
  className?: string
}

export function OceanGradient({ children, className = "" }: OceanGradientProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(window.scrollY / scrollHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Interpolate colors based on scroll
  const getGradient = () => {
    const topOpacity = Math.max(0, 0.02 - scrollProgress * 0.02)
    const midOpacity = Math.min(0.15, scrollProgress * 0.3)
    const bottomOpacity = Math.min(0.4, scrollProgress * 0.8)

    return `linear-gradient(180deg, 
      rgba(255, 255, 255, 1) 0%,
      rgba(240, 248, 255, ${1 - topOpacity}) 10%,
      rgba(200, 225, 245, ${0.3 + midOpacity}) 40%,
      rgba(100, 150, 200, ${0.4 + midOpacity}) 70%,
      rgba(40, 70, 120, ${0.6 + bottomOpacity}) 100%
    )`
  }

  return (
    <div className={`min-h-screen ${className}`} style={{ background: getGradient() }}>
      {children}
    </div>
  )
}
