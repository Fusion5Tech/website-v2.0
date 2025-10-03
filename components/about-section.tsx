"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, Award } from "lucide-react"

export default function AboutSection() {
  const team = [
    {
      name: "Malvin T Machingura",
      role: "Full Stack Developer",
      image: "/professional-developer-portrait.png",
    },
    {
      name: "Junior N Cheiro",
      role: "UI/UX Designer",
      image: "/professional-designer-portrait.png",
    },
    {
      name: "Venon T Nyadombo",
      role: "Backend Engineer",
      image: "/professional-engineer-portrait.png",
    },
    {
      name: "Nigel M Kutadzaushe",
      role: "Frontend Engineer",
      image: "/nijo.jpg",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering businesses through innovative digital solutions",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Staying ahead with cutting-edge technologies and practices",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in everything we do",
    },
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent/50">
            About Us
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Our Mission, Values & Team</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to bridge the gap between innovative technology and practical solutions
          </p>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="bg-card border-border/50">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Our Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between innovative technology and practical solutions, Fusion
                  F5ve began as a small team of passionate developers who believed in the power of collaboration and
                  cutting-edge technology.
                </p>
                <p>
                  Over the years, we've grown into a dynamic company that specializes in creating scalable, user-focused
                  software solutions. Our journey has been marked by continuous learning, adaptation, and a commitment
                  to excellence that drives everything we do.
                </p>
                <p>
                  Today, we work with businesses and startups across various industries, helping them transform their
                  ideas into powerful digital solutions that make a real impact in the world.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="bg-card border-border/50 hover:border-accent/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-card border-border/50 hover:border-accent/50 transition-all hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-accent/20"
                  />
                  <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-accent">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
