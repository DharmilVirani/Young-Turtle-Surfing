import { ScrollReveal } from "@/components/scroll-reveal"
import { Search, BarChart3, Cpu, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Research",
    description: "Deep quantitative analysis of market microstructure and behavioral patterns.",
  },
  {
    icon: BarChart3,
    title: "Model",
    description: "Develop robust statistical models with rigorous backtesting and validation.",
  },
  {
    icon: Cpu,
    title: "Execute",
    description: "Systematic execution with real-time risk management and position sizing.",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description: "Continuous refinement through performance attribution and strategy evolution.",
  },
]

export function HowWeTradeSection() {
  return (
    <section className="py-24 sm:py-32 bg-white/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">How We Trade</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach from research to execution.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 100}>
              <div className="relative group">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />
                )}

                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary/60 mb-2">0{index + 1}</span>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
