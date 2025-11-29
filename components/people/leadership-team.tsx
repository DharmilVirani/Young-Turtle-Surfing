import { ScrollReveal } from '@/components/scroll-reveal'
import { Card, CardContent } from '@/components/ui/card'
import { Linkedin } from 'lucide-react'

const team = [
    {
        name: 'Dr. Sarah Chen',
        role: 'Chief Executive Officer',
        bio: 'Former Head of Quantitative Research at Goldman Sachs. PhD in Financial Mathematics from MIT.',
        image: '/professional-woman-executive.png',
    },
    {
        name: 'Michael Okonkwo',
        role: 'Chief Investment Officer',
        bio: '20+ years in systematic trading. Previously managed $5B+ at Citadel Securities.',
        image: '/professional-man-executive-portrait.png',
    },
    {
        name: 'Dr. Elena Rodriguez',
        role: 'Head of Research',
        bio: 'PhD in Statistics from Stanford. Published 40+ papers on market microstructure.',
        image: '/professional-woman-researcher.png',
    },
    {
        name: 'James Park',
        role: 'Chief Technology Officer',
        bio: 'Ex-Google and Two Sigma. Architected trading systems processing 1M+ orders/second.',
        image: '/professional-man-tech-executive-portrait.jpg',
    },
    {
        name: 'Dr. Aisha Patel',
        role: 'Head of Machine Learning',
        bio: 'PhD in Computer Science from Berkeley. Pioneer in deep learning for time series.',
        image: '/professional-data-scientist.png',
    },
    {
        name: 'David Liu',
        role: 'Head of Trading',
        bio: '15 years of execution experience. Built algorithmic trading desks at JPMorgan.',
        image: '/professional-man-trader-portrait.jpg',
    },
]

export function LeadershipTeam() {
    return (
        <section className='py-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <ScrollReveal>
                    <div className='text-center mb-16'>
                        <h2 className='font-serif text-3xl sm:text-4xl font-bold text-foreground'>Leadership Team</h2>
                        <p className='mt-4 text-lg text-muted-foreground max-w-2xl mx-auto'>
                            Experienced leaders with deep expertise across quantitative finance and technology.
                        </p>
                    </div>
                </ScrollReveal>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                    {team.map((member, index) => (
                        <ScrollReveal key={member.name} delay={index * 100}>
                            <Card className='group h-full bg-white/70 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1'>
                                {/* Glass card with parallax effect */}
                                <div className='relative aspect-4/3 overflow-hidden'>
                                    <img
                                        src={member.image || '/placeholder.svg'}
                                        alt={member.name}
                                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                                    />
                                    <div className='absolute inset-0 bg-linear-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                </div>
                                <CardContent className='p-6'>
                                    <div className='flex items-start justify-between'>
                                        <div>
                                            <h3 className='font-serif text-lg font-semibold text-foreground'>
                                                {member.name}
                                            </h3>
                                            <p className='text-sm text-primary font-medium mt-1'>{member.role}</p>
                                        </div>
                                        <button className='p-2 rounded-full hover:bg-primary/10 transition-colors'>
                                            <Linkedin className='w-4 h-4 text-muted-foreground hover:text-primary' />
                                        </button>
                                    </div>
                                    <p className='mt-4 text-sm text-muted-foreground leading-relaxed'>{member.bio}</p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
