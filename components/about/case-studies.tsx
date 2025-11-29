import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const caseStudies = [
  {
    category: "Market Microstructure",
    title: "High-Frequency Order Flow Analysis",
    description:
      "Developed models to predict short-term price movements using order book dynamics and trade flow patterns.",
    result: "+18% improvement in execution quality",
  },
  {
    category: "Alternative Data",
    title: "Satellite Imagery for Retail Forecasting",
    description: "Leveraged parking lot occupancy data to forecast quarterly retail earnings ahead of consensus.",
    result: "73% directional accuracy",
  },
  {
    category: "Machine Learning",
    title: "Cross-Asset Correlation Networks",
    description:
      "Built dynamic correlation models to identify regime changes and optimize portfolio hedging strategies.",
    result: "35% reduction in tail risk",
  },
]

export function CaseStudies() {
  return (
    <section className="py-24 sm:py-32 bg-navy/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">Case Studies</h2>
            <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">Selected examples of our research in action.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.title} delay={index * 100}>
              <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:border-cyan-dust/30 transition-all duration-300 group">
                <CardHeader>
                  <span className="text-xs font-medium text-cyan-dust uppercase tracking-wider">{study.category}</span>
                  <CardTitle className="font-serif text-lg text-white mt-2">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/60 text-sm leading-relaxed">{study.description}</p>
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-xs text-white/40 uppercase tracking-wider">Result</span>
                    <p className="text-cyan-dust font-medium mt-1">{study.result}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
