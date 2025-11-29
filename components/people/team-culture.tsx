import { ScrollReveal } from '@/components/scroll-reveal'
import { Target, Users, Lightbulb, Award } from 'lucide-react'

const values = [
    {
        icon: Target,
        title: 'Intellectual Rigor',
        description: 'We pursue truth through evidence and challenge assumptions with data.',
    },
    {
        icon: Users,
        title: 'Collaboration',
        description: 'The best ideas emerge from diverse perspectives working together.',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'We embrace new technologies and methodologies to stay ahead.',
    },
    {
        icon: Award,
        title: 'Excellence',
        description: 'We hold ourselves to the highest standards in everything we do.',
    },
]

export function TeamCulture() {
    return (
        <section className='py-24 sm:py-32 bg-linear-to-b from-transparent to-primary/5'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <ScrollReveal>
                    <div className='text-center mb-16'>
                        <h2 className='font-serif text-3xl sm:text-4xl font-bold text-foreground'>Our Values</h2>
                        <p className='mt-4 text-lg text-muted-foreground max-w-2xl mx-auto'>
                            The principles that guide how we work and collaborate.
                        </p>
                    </div>
                </ScrollReveal>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                    {values.map((value, index) => (
                        <ScrollReveal key={value.title} delay={index * 100}>
                            <div className='text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300'>
                                <div className='w-14 h-14 mx-auto rounded-xl bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4'>
                                    <value.icon className='w-7 h-7 text-primary' />
                                </div>
                                <h3 className='font-serif text-lg font-semibold text-foreground mb-2'>{value.title}</h3>
                                <p className='text-sm text-muted-foreground leading-relaxed'>{value.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
