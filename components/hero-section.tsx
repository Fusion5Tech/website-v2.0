"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.05),transparent_50%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4" />
          <span>Crafting Digital Excellence</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight animate-fade-in-up">
          <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
            Fusion F5ve
          </span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance animate-fade-in-up animation-delay-200">
          Crafting Tomorrow's Digital Solutions Today
        </p>

        <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          We are a passionate team of developers dedicated to building high-quality, scalable, and user-focused software
          solutions that empower businesses and startups.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
            <a href="#contact" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#portfolio" className="flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              View Our Work
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
