"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What qualifications are you looking for?",
    answer:
      "We seek candidates with strong quantitative backgrounds, typically with advanced degrees (MS/PhD) in fields like Mathematics, Statistics, Physics, Computer Science, or Engineering. Relevant industry experience is valued, but we also consider exceptional candidates directly from academia.",
  },
  {
    question: "What is the interview process like?",
    answer:
      "Our process typically includes an initial phone screen, technical assessments, and on-site interviews. For research roles, expect to discuss your research experience and solve quantitative problems. Engineering roles include system design and coding challenges.",
  },
  {
    question: "Do you offer remote work options?",
    answer:
      "Most roles are based in our New York office, as we value in-person collaboration. However, we offer flexibility for certain positions and maintain a hybrid work arrangement for most employees.",
  },
  {
    question: "What benefits do you offer?",
    answer:
      "We offer competitive compensation including base salary, performance bonus, and equity participation. Benefits include comprehensive health insurance, 401(k) matching, generous PTO, parental leave, and professional development budgets.",
  },
  {
    question: "How long does the hiring process take?",
    answer:
      "The typical timeline from application to offer is 3-4 weeks, depending on the role and candidate availability. We aim to move efficiently while ensuring a thorough evaluation process.",
  },
]

export function CareersFAQ() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            {/* Gold accent line */}
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mb-8 rounded-full" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left font-serif text-foreground hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}
