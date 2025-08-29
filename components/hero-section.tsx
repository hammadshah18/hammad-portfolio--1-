"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const roles = ["ML ENGINEER", "DATA ANALYST", "API DEVELOPER"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      } else if (isDeleting && currentIndex > 0) {
        setTypedText(currentRole.substring(0, currentIndex - 1))
        setCurrentIndex(currentIndex - 1)
      } else if (!isDeleting && currentIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentIndex, currentRoleIndex, isDeleting, roles])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 lg:order-1">
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg">Hello, I'm</p>
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">MUHAMMAD HAMMAD</h1>
                <div className="text-2xl md:text-3xl text-muted-foreground font-light h-12 flex items-center">
                  <span className="text-primary">{typedText}</span>
                  <span className="animate-pulse text-primary ml-1"></span>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              As a Data Scientist and AI Engineer, I specialize in building machine learning models, developing scalable
              models, and transforming data into actionable insights. I've worked on end-to-end ML pipelines, developed
              interactive dashboards that transformed business insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group bg-primary hover:bg-primary/90">
                <Link href="/about">
                  About Me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
                asChild
              >
                <Link href="/Hammad_CV_J.pdf" download>
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Download CV
                </Link>
              </Button>
            </div>
          </div>

            <div className="relative lg:order-2">
            <div className="relative w-full max-w-lg mx-auto h-96">
         <DotLottieReact
      src="https://lottie.host/embed/7843121d-76e8-462d-bd11-36b113216646/riMwNkh6xF.lottie"
      loop
      autoplay
    />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
