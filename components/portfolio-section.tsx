"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Live",
      image: "/modern-ecommerce-dashboard.png",
    },
    {
      title: "Healthcare Dashboard",
      description: "Real-time analytics dashboard for healthcare providers with patient management.",
      tech: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      status: "In Development",
      image: "/healthcare-analytics-dashboard.png",
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication.",
      tech: ["React Native", "Firebase", "Encryption"],
      status: "Completed",
      image: "/mobile-banking-app.png",
    },
    {
      title: "Social Media Analytics",
      description: "AI-powered social media analytics platform for businesses.",
      tech: ["Next.js", "TensorFlow", "AWS", "GraphQL"],
      status: "Planning",
      image: "/social-media-analytics.jpg",
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates and team coordination.",
      tech: ["React", "Socket.io", "Express", "MySQL"],
      status: "Live",
      image: "/project-management-dashboard.png",
    },
    {
      title: "Educational Platform",
      description: "Online learning management system with video streaming and progress tracking.",
      tech: ["Angular", "Spring Boot", "PostgreSQL", "AWS S3"],
      status: "Completed",
      image: "/online-learning-platform.png",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/50"
      case "Completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/50"
      case "In Development":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
      default:
        return "bg-muted text-muted-foreground border-border"
    }
  }

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent/50">
            Our Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Recent Work & Success Stories
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore some of our projects across various industries and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 hover:border-accent/50 transition-all overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 p-0">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
