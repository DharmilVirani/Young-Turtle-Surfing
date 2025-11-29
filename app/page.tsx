import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { PhilosophySection } from "@/components/home/philosophy-section"
import { HowWeTradeSection } from "@/components/home/how-we-trade-section"
import { StatsSection } from "@/components/home/stats-section"
import { PreviewCardsSection } from "@/components/home/preview-cards-section"
import { CTASection } from "@/components/home/cta-section"
import { OceanGradient } from "@/components/ocean-gradient"

export default function HomePage() {
  return (
    <OceanGradient>
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <HowWeTradeSection />
        <StatsSection />
        <PreviewCardsSection />
        <CTASection />
      </main>
      <Footer />
    </OceanGradient>
  )
}
