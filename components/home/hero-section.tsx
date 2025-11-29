'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16'>
            {/* Background Video (smaller height) */}
            <video autoPlay loop muted playsInline className='absolute inset-0 w-full h-full object-cover'>
                <source src='/man-surfing-2.mp4' type='video/mp4' />
            </video>

            {/* Gradient Overlay */}
            <div
                className='absolute inset-0 pointer-events-none z-5'
                style={{
                    background:
                        'linear-gradient(to top, rgba(200,220,245,0.6) 0%, rgba(240,245,255,0.5) 40%, rgba(255,255,255,0.4) 100%)',
                }}
            />
            <div className='absolute inset-0 bg-black/40 z-5'></div>
            <div className='absolute inset-0 bg-white/30 z-5'></div>

            {/* Content */}
            <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                <div
                    className={`transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <h1 className='font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight text-balance'>
                        Exploring Market Depth With Scientific Precision.
                    </h1>
                </div>
            </div>
        </section>
    )
}
