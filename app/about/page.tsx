import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ResearchHero } from '@/components/about/research-hero'
import { ResearchApproach } from '@/components/about/research-approach'
import { CaseStudies } from '@/components/about/case-studies'
import { StrategyDevelopment } from '@/components/about/strategy-development'

export const metadata = {
    title: 'Research | Young Turtle',
    description: 'Deep quantitative research pushing the boundaries of market understanding.',
}

export default function ResearchPage() {
    return (
        <div className='min-h-screen bg-gradient-to-b from-primary/5 via-primary/10 to-navy/90'>
            <Navbar />
            <main>
                <ResearchHero />
                <ResearchApproach />
                <CaseStudies />
                <StrategyDevelopment />
            </main>
            <Footer />
        </div>
    )
}
