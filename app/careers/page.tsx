import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { CultureSection } from "@/components/careers/culture-section"
import { OpenRoles } from "@/components/careers/open-roles"
import { CareersFAQ } from "@/components/careers/careers-faq"

export const metadata = {
  title: "Careers | Young Turtle",
  description: "Join our team of world-class researchers and engineers.",
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <CareersHero />
        <CultureSection />
        <OpenRoles />
        <CareersFAQ />
      </main>
      <Footer />
    </div>
  )
}
