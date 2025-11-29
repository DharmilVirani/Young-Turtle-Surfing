'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
    baseX: number
    baseY: number
}

interface QuantParticlesProps {
    className?: string
    particleCount?: number
    mouseInfluence?: number
}

export function QuantParticles({ className = '', particleCount = 60, mouseInfluence = 0.02 }: QuantParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const particlesRef = useRef<Particle[]>([])
    const mouseRef = useRef({ x: 0, y: 0 })
    const animationRef = useRef<number>(0)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    const initParticles = useCallback(
        (width: number, height: number) => {
            const particles: Particle[] = []
            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * width
                const y = Math.random() * height
                particles.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    size: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.4 + 0.2,
                })
            }
            particlesRef.current = particles
        },
        [particleCount]
    )

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const updateDimensions = () => {
            const rect = canvas.getBoundingClientRect()
            canvas.width = rect.width
            canvas.height = rect.height
            setDimensions({ width: rect.width, height: rect.height })
            initParticles(rect.width, rect.height)
        }

        updateDimensions()
        window.addEventListener('resize', updateDimensions)

        return () => window.removeEventListener('resize', updateDimensions)
    }, [initParticles])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const canvas = canvasRef.current
            if (!canvas) return
            const rect = canvas.getBoundingClientRect()
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particlesRef.current.forEach((particle) => {
                // Mouse influence
                const dx = mouseRef.current.x - particle.x
                const dy = mouseRef.current.y - particle.y
                const dist = Math.sqrt(dx * dx + dy * dy)

                if (dist < 150) {
                    particle.vx += dx * mouseInfluence * 0.01
                    particle.vy += dy * mouseInfluence * 0.01
                }

                // Return to base position
                particle.vx += (particle.baseX - particle.x) * 0.001
                particle.vy += (particle.baseY - particle.y) * 0.001

                // Apply velocity with damping
                particle.x += particle.vx
                particle.y += particle.vy
                particle.vx *= 0.98
                particle.vy *= 0.98

                // Draw particle with glow
                ctx.beginPath()
                const gradient = ctx.createRadialGradient(
                    particle.x,
                    particle.y,
                    0,
                    particle.x,
                    particle.y,
                    particle.size * 3
                )
                gradient.addColorStop(0, `rgba(100, 180, 220, ${particle.opacity})`)
                gradient.addColorStop(0.5, `rgba(70, 130, 180, ${particle.opacity * 0.5})`)
                gradient.addColorStop(1, 'rgba(70, 130, 180, 0)')
                ctx.fillStyle = gradient
                ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
                ctx.fill()

                // Core particle
                ctx.beginPath()
                ctx.fillStyle = `rgba(200, 230, 255, ${particle.opacity + 0.2})`
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fill()
            })

            // Draw connections
            ctx.strokeStyle = 'rgba(100, 180, 220, 0.1)'
            ctx.lineWidth = 0.5
            particlesRef.current.forEach((p1, i) => {
                particlesRef.current.slice(i + 1).forEach((p2) => {
                    const dx = p1.x - p2.x
                    const dy = p1.y - p2.y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 100) {
                        ctx.beginPath()
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.globalAlpha = 1 - dist / 100
                        ctx.stroke()
                        ctx.globalAlpha = 1
                    }
                })
            })

            animationRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [dimensions, mouseInfluence])

    return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} />
}
