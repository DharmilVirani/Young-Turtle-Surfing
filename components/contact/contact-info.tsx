import { ScrollReveal } from "@/components/scroll-reveal"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@youngturtle.ooo",
    href: "mailto:info@youngturtle.ooo",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (212) 555-0123",
    href: "tel:+12125550123",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Financial District\nNew York, NY 10004",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday - Friday\n9:00 AM - 6:00 PM EST",
    href: null,
  },
]

export function ContactInfo() {
  return (
    <ScrollReveal delay={100}>
      <div className="space-y-8">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            {"Our team is here to help. Reach out through any of the channels below, "}
            and we will respond within one business day.
          </p>
        </div>

        <div className="space-y-6">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <detail.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{detail.label}</p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-foreground hover:text-primary transition-colors whitespace-pre-line"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-foreground whitespace-pre-line">{detail.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Legal / Compliance Note */}
        <div className="pt-8 border-t border-border/50">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Compliance</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Young Turtle Capital Management, LLC is registered with the Securities and Exchange Commission as an
            Investment Adviser. Registration does not imply a certain level of skill or training. For regulatory
            inquiries, please contact our Chief Compliance Officer.
          </p>
        </div>
      </div>
    </ScrollReveal>
  )
}
