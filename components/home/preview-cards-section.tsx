'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Users, BookOpen, FileText } from 'lucide-react'
import Image from 'next/image'

const previews = [
    {
        href: '/people',
        icon: Users,
        title: 'Our People',
        description: 'World-class researchers and engineers united by intellectual curiosity.',
    },
    {
        href: '/research',
        icon: BookOpen,
        title: 'Research',
        description: 'Pushing the boundaries of quantitative finance through rigorous analysis.',
    },
    {
        href: '/articles',
        icon: FileText,
        title: 'Articles',
        description: 'Insights and perspectives on markets, technology, and strategy.',
    },
]

export function PreviewCardsSection() {
    return (
        <section className='relative py-24 sm:py-32 overflow-hidden'>
            {/* Background Image */}
            <Image
                src='/exploration-bg.jpg' // replace with your image in public/
                alt='Background'
                fill
                className='absolute inset-0 object-cover z-0'
                priority
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-black/50 z-5'></div>

            <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <ScrollReveal>
                    <div className='text-center mb-16'>
                        <h2 className='font-serif text-3xl sm:text-4xl font-bold text-white'>Explore More</h2>
                    </div>
                </ScrollReveal>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
                    {previews.map((preview, index) => (
                        <ScrollReveal key={preview.href} delay={index * 100}>
                            <Link href={preview.href} className='block group'>
                                <Card className='h-full bg-white/70 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1'>
                                    <CardHeader>
                                        <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors'>
                                            <preview.icon className='w-6 h-6 text-primary' />
                                        </div>
                                        <CardTitle className='font-serif text-xl flex items-center gap-2 text-foreground'>
                                            {preview.title}
                                            <ArrowRight className='w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all' />
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className='text-muted-foreground leading-relaxed'>
                                            {preview.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
