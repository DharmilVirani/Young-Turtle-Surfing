import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase, ArrowRight } from "lucide-react"

const roles = [
  {
    id: 1,
    title: "Quantitative Researcher",
    department: "Research",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Develop and implement systematic trading strategies using statistical and machine learning techniques.",
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    description: "Build and maintain high-performance trading infrastructure and research platforms.",
  },
  {
    id: 3,
    title: "Machine Learning Engineer",
    department: "Research",
    location: "New York, NY / Remote",
    type: "Full-time",
    description: "Design and deploy ML models for alpha generation and risk management.",
  },
  {
    id: 4,
    title: "Data Engineer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    description: "Build and maintain data pipelines processing terabytes of financial data daily.",
  },
  {
    id: 5,
    title: "Quantitative Developer",
    department: "Trading",
    location: "New York, NY",
    type: "Full-time",
    description: "Implement and optimize trading algorithms and execution systems.",
  },
]

export function OpenRoles() {
  return (
    <section id="open-roles" className="py-24 sm:py-32 bg-secondary/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            {/* Gold accent line */}
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mb-8 rounded-full" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Open Roles</h2>
            <p className="mt-4 text-lg text-muted-foreground">Find your place on our team.</p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {roles.map((role, index) => (
            <ScrollReveal key={role.id} delay={index * 50}>
              <Card className="group bg-card border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {role.title}
                        </h3>
                        <span className="px-2.5 py-0.5 text-xs font-medium text-primary bg-primary/10 rounded-md">
                          {role.department}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{role.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4" />
                          {role.type}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground rounded-md gap-2 shrink-0 bg-transparent"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact CTA */}
        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              {"Don't see a role that fits? We're always looking for exceptional talent."}
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5 bg-transparent"
            >
              <a href="mailto:careers@youngturtle.ooo">Send us your resume</a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
