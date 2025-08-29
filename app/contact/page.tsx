"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { useState, useEffect } from "react"

export default function ContactPage() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Get In Touch"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white border-r-2 border-primary animate-pulse">{typedText}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Ready to start your next project? Let's discuss how I can help you achieve your goals with machine learning
            and data science solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary animate-pulse" />
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Phone className="h-6 w-6 text-primary group-hover:animate-bounce" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">Phone</h3>
                    <p className="text-muted-foreground">+923042812430</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="h-6 w-6 text-primary group-hover:animate-bounce" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">Email</h3>
                    <p className="text-muted-foreground">hammadshah7218@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-primary group-hover:animate-bounce" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">Location</h3>
                    <p className="text-muted-foreground">Phase 1 behind Saphire Software house, Jamshoro</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card
              className="hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 animate-slide-in-left"
              style={{ animationDelay: "200ms" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-accent animate-pulse" />
                  <span>Quick Links</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent hover:scale-105 hover:shadow-lg transition-all duration-300"
                  asChild
                >
                  <a href="mailto:hammadshah7218@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent hover:scale-105 hover:shadow-lg transition-all duration-300"
                  asChild
                >
                  <a href="tel:+923042812430">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-primary animate-pulse" />
                  <span>Send Me a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <Label htmlFor="name" className="group-focus-within:text-primary transition-colors">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="focus:scale-105 transition-all duration-300 focus:shadow-lg focus:shadow-primary/20"
                        required
                      />
                    </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="email" className="group-focus-within:text-primary transition-colors">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="focus:scale-105 transition-all duration-300 focus:shadow-lg focus:shadow-primary/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="subject" className="group-focus-within:text-primary transition-colors">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="focus:scale-105 transition-all duration-300 focus:shadow-lg focus:shadow-primary/20"
                      required
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="message" className="group-focus-within:text-primary transition-colors">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      className="focus:scale-105 transition-all duration-300 focus:shadow-lg focus:shadow-primary/20"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 group-hover:animate-bounce transition-transform relative z-10" />
                    <span className="relative z-10">Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <Card
          className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <CardContent className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4 animate-pulse">Let's Build Something Amazing Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you need a machine learning solution, data analysis, or API development, I'm here to help turn
              your ideas into reality. Let's discuss your project and explore how we can leverage data science to
              achieve your goals.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
