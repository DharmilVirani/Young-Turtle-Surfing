import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Hypothesis Generation",
    description: "Identify market inefficiencies through fundamental research and data exploration.",
  },
  {
    number: "02",
    title: "Data Engineering",
    description: "Clean, normalize, and structure diverse data sources for quantitative analysis.",
  },
  {
    number: "03",
    title: "Model Development",
    description: "Build and test statistical models with rigorous in-sample and out-of-sample validation.",
  },
  {
    number: "04",
    title: "Backtesting",
    description: "Simulate strategy performance across multiple market regimes and stress scenarios.",
  },
  {
    number: "05",
    title: "Production Deployment",
    description: "Deploy strategies with real-time monitoring, risk controls, and continuous optimization.",
  },
]

export function StrategyDevelopment() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-navy/80 to-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">Strategy Development Process</h2>
            <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
              From hypothesis to production with scientific rigor at every step.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-dust/50 via-cyan-dust/30 to-transparent hidden lg:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 100}>
                <div className="relative flex items-start gap-8 group">
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-navy border-2 border-cyan-dust/30 flex items-center justify-center group-hover:border-cyan-dust/60 transition-colors">
                    <span className="font-serif text-lg font-bold text-cyan-dust">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-serif text-xl font-semibold text-white">{step.title}</h3>
                      {index < steps.length - 1 && <ArrowRight className="w-4 h-4 text-cyan-dust/50 hidden lg:block" />}
                    </div>
                    <p className="text-white/60 leading-relaxed max-w-2xl">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
