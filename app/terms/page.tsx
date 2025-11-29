import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms & Conditions | Young Turtle",
  description: "Terms and conditions for using Young Turtle services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-24 pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">Last updated: January 2024</p>

            <section className="mb-8">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by these terms, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">2. Investment Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information provided on this website is for general informational purposes only and does not
                constitute investment advice. Past performance does not guarantee future results. All investments
                involve risk, including possible loss of principal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the property of Young
                Turtle Capital Management, LLC and is protected by intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">4. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Young Turtle shall not be liable for any direct, indirect, incidental, special, or consequential damages
                resulting from the use or inability to use this website or from any information obtained through this
                website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">5. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the State of New York,
                without regard to its conflict of law provisions.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
