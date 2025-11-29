"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function CareersHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-24 pt-32 overflow-hidden bg-gradient-to-b from-secondary to-background">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(20)].map((_, i) => (
            <line key={i} x1={i * 5} y1="0" x2={i * 5} y2="100" stroke="currentColor" strokeWidth="0.2" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Build the Future of Finance
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join a team of exceptional researchers and engineers working at the intersection of technology and financial
            markets.
          </p>
        </div>

        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-8 py-3 font-medium"
          >
            <a href="#open-roles">View Open Roles</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/5 rounded-md px-8 py-3 font-medium gap-2 bg-transparent"
          >
            <a href="mailto:careers@youngturtle.ooo">
              <Mail className="w-4 h-4" />
              careers@youngturtle.ooo
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
