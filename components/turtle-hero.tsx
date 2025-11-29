"use client"

import { useEffect, useState } from "react"

export function TurtleHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Light shafts */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-light-shaft"
            style={{
              left: `${15 + i * 18}%`,
              top: 0,
              width: "2px",
              height: "100%",
              background: `linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(100,180,220,0.08) 50%, transparent 100%)`,
              transform: `rotate(${5 + i * 2}deg)`,
              transformOrigin: "top center",
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Turtle silhouette */}
      <div
        className="relative animate-swim"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <svg
          viewBox="0 0 200 160"
          className="w-48 h-40 md:w-64 md:h-52 lg:w-80 lg:h-64"
          style={{
            filter: "drop-shadow(0 0 30px rgba(70, 130, 180, 0.3))",
          }}
        >
          {/* Turtle body - elegant silhouette */}
          <ellipse cx="100" cy="85" rx="55" ry="40" fill="url(#turtleGradient)" opacity="0.85" />
          {/* Shell pattern */}
          <ellipse cx="100" cy="80" rx="45" ry="32" fill="none" stroke="rgba(100, 180, 220, 0.3)" strokeWidth="1" />
          <path d="M 70 65 Q 100 50 130 65" fill="none" stroke="rgba(100, 180, 220, 0.2)" strokeWidth="1" />
          <path d="M 65 85 Q 100 70 135 85" fill="none" stroke="rgba(100, 180, 220, 0.2)" strokeWidth="1" />
          {/* Head */}
          <ellipse cx="155" cy="75" rx="18" ry="14" fill="url(#turtleGradient)" opacity="0.8" />
          {/* Front flippers */}
          <ellipse
            cx="130"
            cy="110"
            rx="25"
            ry="10"
            fill="url(#turtleGradient)"
            opacity="0.7"
            transform="rotate(25, 130, 110)"
          />
          <ellipse
            cx="70"
            cy="110"
            rx="25"
            ry="10"
            fill="url(#turtleGradient)"
            opacity="0.7"
            transform="rotate(-25, 70, 110)"
          />
          {/* Back flippers */}
          <ellipse
            cx="55"
            cy="85"
            rx="15"
            ry="8"
            fill="url(#turtleGradient)"
            opacity="0.6"
            transform="rotate(-15, 55, 85)"
          />
          <ellipse
            cx="145"
            cy="95"
            rx="12"
            ry="6"
            fill="url(#turtleGradient)"
            opacity="0.6"
            transform="rotate(15, 145, 95)"
          />
          <defs>
            <linearGradient id="turtleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(70, 100, 140, 0.9)" />
              <stop offset="50%" stopColor="rgba(50, 80, 120, 0.85)" />
              <stop offset="100%" stopColor="rgba(30, 60, 100, 0.8)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bubble particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-particle-drift"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${20 + Math.random() * 60}%`,
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            background: `radial-gradient(circle, rgba(200, 230, 255, 0.4) 0%, rgba(100, 180, 220, 0.1) 100%)`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}
