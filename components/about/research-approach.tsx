import { ScrollReveal } from '@/components/scroll-reveal'
import { Brain, Database, LineChart, Shield } from 'lucide-react'

const approaches = [
    {
        icon: Brain,
        title: 'Machine Learning',
        description:
            'Advanced ML models trained on decades of market data to identify patterns invisible to traditional analysis.',
    },
    {
        icon: Database,
        title: 'Alternative Data',
        description: 'Proprietary datasets including satellite imagery, sentiment analysis, and transaction flows.',
    },
    {
        icon: LineChart,
        title: 'Statistical Models',
        description: 'Robust econometric frameworks with rigorous out-of-sample validation and stress testing.',
    },
    {
        icon: Shield,
        title: 'Risk Management',
        description: 'Real-time risk monitoring with dynamic position sizing and portfolio optimization.',
    },
]

export function ResearchApproach() {
    return (
        <section className='py-24 sm:py-32 bg-gradient-to-b from-primary/20 to-navy/60'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <ScrollReveal>
                    <div className='text-center mb-16'>
                        <h2 className='font-serif text-3xl sm:text-4xl font-bold text-primary'>
                            Our Research Approach
                        </h2>
                        <p className='mt-4 text-lg text-primary/80 max-w-2xl mx-auto'>
                            Combining cutting-edge technology with fundamental market understanding.
                        </p>
                    </div>
                </ScrollReveal>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
                    {approaches.map((approach, index) => (
                        <ScrollReveal key={approach.title} delay={index * 100}>
                            <div className='group relative p-8 rounded-xl bg-white/15 backdrop-blur-sm border border-white/10 hover:border-primary/80 hover:bg-white/10 transition-all duration-300'>
                                {/* Subtle parallax effect on hover */}
                                <div className='relative z-10'>
                                    <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-dust/20 to-primary/10 flex items-center justify-center mb-6 group-hover:from-cyan-dust/30 group-hover:to-primary/20 transition-colors'>
                                        <approach.icon className='w-7 h-7 text-primary/80' />
                                    </div>
                                    <h3 className='font-serif text-xl font-semibold text-primary mb-3'>
                                        {approach.title}
                                    </h3>
                                    <p className='text-primary/70 leading-relaxed'>{approach.description}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
