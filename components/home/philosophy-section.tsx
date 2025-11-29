import { ScrollReveal } from '@/components/scroll-reveal'
import Image from 'next/image'

export function PhilosophySection() {
    return (
        <section className='relative py-24 sm:py-32 overflow-hidden'>
            {/* Background Image */}
            <Image
                src='/philosophy-bg.jpg' // put your image in /public
                alt='Philosophy Background'
                fill
                priority
                className='absolute inset-0 object-cover -z-10'
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-black/50 -z-10' />

            {/* Content */}
            <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <ScrollReveal>
                    <div className='text-center max-w-3xl mx-auto'>
                        <h2 className='font-serif text-3xl sm:text-4xl font-bold text-white'>Our Philosophy</h2>

                        <div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-xl sm:text-2xl font-serif text-white/80'>
                            <span className='text-primary font-semibold'>Depth.</span>
                            <span className='hidden sm:block w-2 h-2 bg-primary/30 rounded-full' />
                            <span className='text-primary font-semibold'>Precision.</span>
                            <span className='hidden sm:block w-2 h-2 bg-primary/30 rounded-full' />
                            <span className='text-primary font-semibold'>Discipline.</span>
                        </div>

                        <p className='mt-8 text-lg text-white/80 leading-relaxed'>
                            We combine rigorous quantitative analysis with deep market understanding to identify
                            opportunities others miss. Our systematic approach removes emotion from decision-making
                            while embracing the complexity of modern markets.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
