import { ScrollReveal } from "@/components/scroll-reveal"
import { Sparkles, BookOpen, Users2, HeartHandshake } from "lucide-react"

const culturePoints = [
  {
    icon: Sparkles,
    title: "Intellectual Freedom",
    description: "We encourage curiosity and give researchers the autonomy to pursue novel ideas.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Access to world-class resources, conferences, and internal knowledge sharing.",
  },
  {
    icon: Users2,
    title: "Collaborative Environment",
    description: "Work alongside PhDs, engineers, and traders in a flat, open organization.",
  },
  {
    icon: HeartHandshake,
    title: "Work-Life Balance",
    description: "Competitive compensation, flexible work arrangements, and comprehensive benefits.",
  },
]

export function CultureSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            {/* Gold accent line */}
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mb-8 rounded-full" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Our Culture</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We create an environment where the best ideas win and exceptional talent thrives.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {culturePoints.map((point, index) => (
            <ScrollReveal key={point.title} delay={index * 100}>
              <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4">
                  <point.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
