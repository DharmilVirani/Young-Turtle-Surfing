import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-navy p-8 sm:p-12 lg:p-16">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {[...Array(10)].map((_, i) => (
                  <line key={i} x1={i * 12} y1="0" x2={i * 12} y2="100" stroke="white" strokeWidth="0.5" />
                ))}
              </svg>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Join Our Team</h2>
                <p className="mt-4 text-lg text-white/80 max-w-xl">
                  We are always looking for exceptional talent to help us push the boundaries of quantitative research.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-md px-8 py-3 font-medium shadow-lg"
                >
                  <Link href="/careers">View Careers</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-md px-8 py-3 font-medium bg-transparent"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
