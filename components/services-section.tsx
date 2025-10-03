"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Cloud, Users, Zap, Database } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Node.js, and cloud platforms.",
      features: ["Responsive Design", "Full-Stack Development", "API Integration", "Performance Optimization"],
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps solutions to ensure your applications run smoothly.",
      features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Database Management", "Security & Monitoring"],
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Technical consulting and project management to help you make the right technology decisions.",
      features: ["Architecture Design", "Technology Strategy", "Code Review", "Team Training"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhance your application speed, efficiency, and user experience with expert optimization.",
      features: ["Speed Optimization", "SEO Enhancement", "Code Refactoring", "Load Testing"],
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Robust database architecture and management for scalable and secure data solutions.",
      features: ["SQL & NoSQL", "Data Modeling", "Migration Services", "Backup & Recovery"],
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent/50">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer end-to-end services to help your business thrive in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="bg-card border-border/50 hover:border-accent/50 transition-all hover:scale-105 group"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
