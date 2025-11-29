'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function PeopleHero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16'>
            {/* Background Image */}
            <Image
                src='/our-people-bg.jpg'
                alt='Our People'
                fill
                priority
                className='absolute inset-0 object-cover z-10'
            />

            {/* Dark overlay */}
            <div className='absolute inset-0 bg-black/40 z-10' />
            <div className='absolute inset-0 bg-white/55 z-10' />

            <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                <div
                    className={`transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <h1 className='font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight'>
                        Our People
                    </h1>
                </div>

                <div
                    className={`transition-all duration-1000 delay-200 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <p className='mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-bold leading-relaxed'>
                        World-class researchers and engineers united by intellectual curiosity and a passion for
                        understanding markets.
                    </p>
                </div>
            </div>
        </section>
    )
}
