import { ScrollReveal } from "@/components/scroll-reveal"

const stats = [
  { value: "$2.4B", label: "Assets Under Management" },
  { value: "15+", label: "Years of Research" },
  { value: "40+", label: "PhD Researchers" },
  { value: "99.9%", label: "System Uptime" },
]

export function StatsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-sm sm:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
