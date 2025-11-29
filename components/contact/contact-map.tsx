import { ScrollReveal } from "@/components/scroll-reveal"

export function ContactMap() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg">
            {/* Google Maps embed - Financial District, NYC */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3862556754773!2d-74.01186008459418!3d40.70717944513573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x40a06c78f79e5de6!2sFinancial%20District%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Young Turtle Office Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
