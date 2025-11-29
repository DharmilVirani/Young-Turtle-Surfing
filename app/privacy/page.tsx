import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Young Turtle",
  description: "Privacy policy for Young Turtle website and services.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-24 pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">Last updated: January 2024</p>

            <section className="mb-8">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly to us, such as when you fill out a contact form, subscribe
                to our newsletter, or communicate with us. This may include your name, email address, phone number, and
                any other information you choose to provide.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to respond to your inquiries, provide customer support, send you
                updates and marketing communications (with your consent), and improve our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as required by law or as necessary to provide our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@youngturtle.ooo.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
