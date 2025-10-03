"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ from: "bot", text: "Hi! How can I help you today?" }])
  const [input, setInput] = useState("")

  const responses: Record<string, string> = {
    about:
      "Fusion F5ve began as a small team of passionate developers who bridge the gap between innovative technology and practical solutions. We specialize in scalable, user-focused software solutions.",
    mission:
      "Our mission is to empower businesses and startups by transforming their ideas into impactful digital solutions. Our values include collaboration, excellence, and continuous learning.",
    team: "Meet our team:\n- Malvin T Machingura - Full Stack Developer\n- Junior N Cheiro - UI/UX Designer\n- Venon T Nyadombo - Backend Engineer\n- Nigel M Kutadzaushe - Frontend Engineer.",
    ready: "Ready to work with us? Let's discuss your project!",
    services:
      "We offer comprehensive digital solutions:\n\n1. Web Development: Custom web applications\n2. Mobile Apps: Native and cross-platform\n3. Cloud Solutions: Scalable infrastructure\n4. Consulting: Technical consulting and project management",
    story:
      "Founded with a vision to bridge the gap between innovative technology and practical solutions, Fusion F5ve began as a small team of passionate developers. Over the years, we've grown into a dynamic company that specializes in creating scalable, user-focused software solutions.",
  }

  const sendMessage = () => {
    if (!input.trim()) return

    setMessages([...messages, { from: "user", text: input }])

    const userMessage = input.toLowerCase()
    let botResponse = "I'm sorry, I didn't understand that. Try asking about our services, team, or mission!"

    for (const [key, value] of Object.entries(responses)) {
      if (userMessage.includes(key)) {
        botResponse = value
        break
      }
    }

    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: "bot", text: botResponse }])
    }, 600)

    setInput("")
  }

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground z-50"
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {open && (
        <Card className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] shadow-2xl z-50 bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between border-b border-border p-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="font-semibold">Fusion F5ve ChatBot</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`px-4 py-2 rounded-lg max-w-[80%] ${
                      msg.from === "user" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border p-4 flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="bg-background border-border"
              />
              <Button onClick={sendMessage} size="icon" className="bg-accent hover:bg-accent/90 flex-shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
