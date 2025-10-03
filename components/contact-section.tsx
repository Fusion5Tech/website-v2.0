"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Github } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent/50">
            Contact Us
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Get in touch with us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Email</h4>
                    <p className="text-muted-foreground">hello@fusionf5ve.com</p>
                    <p className="text-muted-foreground">info@fusionf5ve.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Phone</h4>
                    <p className="text-muted-foreground">+263 784 058 498</p>
                    <p className="text-muted-foreground">+263 775 101 044</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Location</h4>
                    <p className="text-muted-foreground">Harare, Zimbabwe</p>
                    <p className="text-muted-foreground">Available for remote work worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:border-accent hover:text-accent bg-transparent"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:border-accent hover:text-accent bg-transparent"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:border-accent hover:text-accent bg-transparent"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project or ask us anything..."
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">We'll get back to you within 24 hours.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
