"use client"

import type React from "react"

import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <ScrollReveal>
        <div className="flex flex-col items-center justify-center text-center p-8 rounded-xl bg-card border border-border/50">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Message Sent</h3>
          <p className="text-muted-foreground">Thank you for reaching out. We will get back to you shortly.</p>
        </div>
      </ScrollReveal>
    )
  }

  return (
    <ScrollReveal>
      <div className="rounded-xl bg-card border border-border/50 p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Send us a message</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-foreground">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                required
                className="bg-background border-border/50 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-foreground">
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                required
                className="bg-background border-border/50 focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-background border-border/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-foreground">
              Company / Organization
            </Label>
            <Input id="company" name="company" className="bg-background border-border/50 focus:border-primary" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-foreground">
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              required
              className="bg-background border-border/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              className="bg-background border-border/50 focus:border-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-md py-3 font-medium gap-2"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </ScrollReveal>
  )
}
