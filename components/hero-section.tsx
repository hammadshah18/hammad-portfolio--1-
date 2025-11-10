"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Globe, Code, Database, Brain, BarChart, Award, Trophy, Briefcase } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Lottie from "lottie-react"
import animationData from "../public/animation.json"

export default function HomePage() {
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const roles = ["ML ENGINEER", "DATA ANALYST", "API DEVELOPER", "AI ENGINEER"]
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
    <main className="overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Text */}
            <div className="space-y-8 lg:order-1">
              <div className="space-y-4">
                <p className="text-primary font-medium text-lg">Hello, I'm</p>
                <div className="relative">
                  <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                    MUHAMMAD HAMMAD
                  </h1>
                  <div className="text-2xl md:text-3xl text-muted-foreground font-light h-12 flex items-center">
                    <span className="text-primary">{typedText}</span>
                    <span className="animate-pulse text-primary ml-1">|</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                A passionate <span className="text-primary font-medium">Data Scientist</span> and
                <span className="text-primary font-medium"> AI Engineer</span> focused on transforming
                complex data into actionable insights. I build end-to-end ML systems, scalable APIs, and
                intelligent dashboards that drive data-driven decisions.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {[
                  { value: "10+", label: "ML Projects" },
                  { value: "2+", label: "Years Experience" },
                  { value: "5+", label: "Model APIs Built" },
                  { value: "2+", label: "Hackathons" },
                ].map((item, i) => (
                  <div key={i} className="bg-primary/10 p-4 rounded-2xl">
                    <h3 className="text-2xl font-bold text-primary">{item.value}</h3>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
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

                <Button
                  variant="outline"
                  size="lg"
                  className="group bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
                  asChild
                >
                  <Link href="/portfolio">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 pt-6">
                <Link href="https://github.com/hammadshah18" target="_blank" className="text-muted-foreground hover:text-primary transition">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://linkedin.com/in/hammad-shah-90741b25b" target="_blank" className="text-muted-foreground hover:text-primary transition">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://www.hammadshah.me" target="_blank" className="text-muted-foreground hover:text-primary transition">
                  <Globe className="h-6 w-6" />
                </Link>
              </div>
            </div>

            {/* Animation */}
            <div className="relative lg:order-2">
              <div className="relative w-full max-w-lg mx-auto h-96">
                <Lottie animationData={animationData} loop autoplay />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 text-white">What I Do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Brain className="h-10 w-10 text-primary" />, title: "Machine Learning", desc: "Design, train, and deploy predictive models for real-world problems." },
              { icon: <Code className="h-10 w-10 text-primary" />, title: "API Development", desc: "Build fast, reliable REST APIs using FastAPI and integrate ML models." },
              { icon: <Database className="h-10 w-10 text-primary" />, title: "Data Analytics", desc: "Turn raw data into insights using Python, Pandas, and visualization tools." },
              { icon: <BarChart className="h-10 w-10 text-primary" />, title: "Dashboards", desc: "Create interactive dashboards to visualize data and trends clearly." },
            ].map((service, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card hover:shadow-lg transition-all">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATES SECTION ================= */}
      <section className="py-24 bg-primary/5 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 text-white">Certificates</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Google AI Essentials", desc: "Completed Google's AI Essentials program focused on core AI foundations." },
              { title: "Google Prompt Engineering", desc: "Earned certification for mastering AI prompting and generative model workflows." },
              { title: "NASA Space Apps Hackathon", desc: "Participated in NASA Hackathon 2024, building AI-powered space solutions." },
              { title: "Huawei ICT Hackathon", desc: "Showcased innovative AI project, focusing on data-driven problem solving." },
            ].map((cert, i) => (
              <div key={i} className="bg-card p-6 rounded-2xl hover:shadow-lg transition-all">
                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS SECTION ================= */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 text-white">Achievements</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Cerevo AI Platform", desc: "Developed an AI-Powered Career Guidance Platform using FastAPI + React + LangChain." },
              { title: "Hackathon Recognition", desc: "Recognized among top innovative ideas for healthcare data intelligence solutions." },
              { title: "Academic Excellence", desc: "Maintained top performance in Computer Systems Engineering at MUET." },
            ].map((achieve, i) => (
              <div key={i} className="bg-card p-6 rounded-2xl hover:shadow-lg transition-all">
                <Trophy className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{achieve.title}</h3>
                <p className="text-muted-foreground text-sm">{achieve.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FREELANCE SHOWCASE SECTION ================= */}
      <section className="py-24 bg-primary/5 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 text-white">Freelance Showcase</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <Link href="https://www.upwork.com/freelancers/~01cf48d929986cd2df" target="_blank" className="group block bg-card rounded-2xl overflow-hidden hover:shadow-lg transition-all">
              <img src="/upwork-profile.png" alt="Upwork Profile" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" /> Upwork Profile
                </h3>
                <p className="text-muted-foreground text-sm">Explore my AI, ML, and API projects delivered globally with 5-star client satisfaction.</p>
              </div>
            </Link>

            <div className="group block bg-card rounded-2xl overflow-hidden hover:shadow-lg transition-all">
              <Link href="https://www.fiverr.com/" target="_blank" className="group block bg-card rounded-2xl overflow-hidden hover:shadow-lg transition-all"></Link>
              <img src="/fiverr-profile.jpg" alt="Fiverr Profile" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" /> Fiverr Profile
                </h3>
                <p className="text-muted-foreground text-sm">Freelancing AI & Data Science solutions — from model deployment to business analytics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 text-center bg-gradient-to-r from-primary/10 to-accent/10">
        <h2 className="text-4xl font-bold mb-4 text-white">Let’s Build Something Amazing Together </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you’re looking for collaboration, freelance projects, or mentorship — I’m always open to connecting.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/contact">
            Contact Me <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </main>
  )
}
