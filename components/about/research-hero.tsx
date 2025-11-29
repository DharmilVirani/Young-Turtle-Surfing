'use client'

import { useEffect, useState } from 'react'
import { QuantParticles } from '@/components/quant-particles'

export function ResearchHero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className='relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16'>
            {/* Deep blue background with animated gradient */}
            <div
                className='absolute inset-0'
                style={{
                    background:
                        'linear-gradient(180deg, rgba(30, 58, 95, 0.95) 0%, rgba(20, 40, 70, 0.98) 50%, rgba(15, 30, 55, 1) 100%)',
                }}
            />

            {/* Quant particles with higher density */}
            <QuantParticles particleCount={80} mouseInfluence={0.04} />

            {/* Network visualization background */}
            <div className='absolute inset-0 opacity-20'>
                <svg className='w-full h-full' viewBox='0 0 1000 600' preserveAspectRatio='xMidYMid slice'>
                    {[...Array(30)].map((_, i) => {
                        const x = 50 + (i % 10) * 100
                        const y = 50 + Math.floor(i / 10) * 200
                        return (
                            <g key={i}>
                                <circle cx={x} cy={y} r='3' fill='rgba(100, 180, 220, 0.6)' />
                                {[...Array(3)].map((_, j) => {
                                    const targetIdx = (i + j + 1) % 30
                                    const tx = 50 + (targetIdx % 10) * 100
                                    const ty = 50 + Math.floor(targetIdx / 10) * 200
                                    return (
                                        <line
                                            key={j}
                                            x1={x}
                                            y1={y}
                                            x2={tx}
                                            y2={ty}
                                            stroke='rgba(100, 180, 220, 0.2)'
                                            strokeWidth='0.5'
                                        />
                                    )
                                })}
                            </g>
                        )
                    })}
                </svg>
            </div>

            {/* Content */}
            <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                <div
                    className={`transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <h1 className='font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance'>
                        The Science of Markets
                    </h1>
                </div>

                <div
                    className={`transition-all duration-1000 delay-200 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <p className='mt-6 text-lg sm:text-xl text-white/70 w-2.5xl mx-auto leading-relaxed'>
                        We don’t follow markets—we interrogate them. Our systems hunt for structural inefficiencies,
                        leverage predictive modeling to stay ahead of order flow, and convert transient statistical
                        edges into durable trading advantage.
                    </p>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/20 to-transparent' />
        </section>
    )
}
