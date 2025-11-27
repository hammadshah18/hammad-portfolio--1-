"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Calendar, GraduationCap, Briefcase } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function ResumePage() {
  const [typedText, setTypedText] = useState("")
  const fullText = "My Resume"

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

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="border-r-2 border-primary animate-pulse">{typedText}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 animate-slide-up">
            Download my complete resume to learn more about my experience and qualifications.
          </p>

          {/* <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 animate-bounce-slow"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            <span className="relative z-10">Download Resume</span>
          </Button> */}

          <Button
                variant="outline"
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 animate-bounce-slow"
                asChild
              >
                <Link href="/HammadResume.pdf" download>
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Download Resume
                </Link>
              </Button>
        
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Education Journey */}
          <Card className="hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-slide-in-left">
            <CardHeader className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <GraduationCap className="h-8 w-8 text-primary animate-pulse" />
                <span>Education Journey</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-chart-3 animate-pulse"></div>

                {/* Current Education */}
                <div className="relative pl-16 mb-12 group hover:translate-x-4 transition-all duration-500">
                  <div className="absolute left-4 w-5 h-5 bg-primary rounded-full animate-ping"></div>
                  <div className="absolute left-4 w-5 h-5 bg-primary rounded-full shadow-lg shadow-primary/50"></div>
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border-l-4 border-primary group-hover:shadow-xl transition-all duration-500">
                    <h3 className="font-bold text-xl text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                      BE in Computer Engineering
                    </h3>
                    <p className="text-accent font-semibold mb-2">Mehran UET, Jamshoro</p>
                    <div className="flex items-center space-x-4 text-muted-foreground mb-2 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>2023 – Present</span>
                      </div>
                    </div>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold text-sm">
                      CGPA: 3.26
                    </div>
                  </div>
                </div>

                {/* Intermediate */}
                <div className="relative pl-16 mb-12 group hover:translate-x-4 transition-all duration-500">
                  <div
                    className="absolute left-4 w-5 h-5 bg-accent rounded-full animate-ping"
                    style={{ animationDelay: "500ms" }}
                  ></div>
                  <div className="absolute left-4 w-5 h-5 bg-accent rounded-full shadow-lg shadow-accent/50"></div>
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border-l-4 border-primary group-hover:shadow-xl transition-all duration-500">
                    <h3 className="font-bold text-xl text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                      Intermediate (Pre-Engineering)
                    </h3>
                    <p className="text-accent font-semibold mb-2">The City College</p>
                    <div className="flex items-center space-x-4 text-muted-foreground mb-2 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>2021 – 2023</span>
                      </div>
                    </div>
                    <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold text-sm">
                      Percentage: 84%
                    </div>
                  </div>
                </div>

                {/* Matriculation */}
                <div className="relative pl-16 group hover:translate-x-4 transition-all duration-500">
                  <div
                    className="absolute left-4 w-5 h-5 bg-accent rounded-full animate-ping"
                    style={{ animationDelay: "1000ms" }}
                  ></div>
                  <div className="absolute left-4 w-5 h-5 bg-accent rounded-full shadow-lg shadow-accent/50"></div> {/*this will change*/}
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border-l-4 border-primary group-hover:shadow-xl transition-all duration-500">
                    <h3 className="font-bold text-xl text-primary mb-4 group-hover:scale-105 transition-transform duration-300">
                      Matriculation
                    </h3>
                    <p className="text-accent font-semibold mb-2">The City School</p>
                    <div className="flex items-center space-x-4 text-muted-foreground mb-2 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>2019 – 2021</span>
                      </div>
                    </div>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold text-sm">
                      Percentage: 95%
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Professional Summary */}
          <Card className="hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 animate-slide-in-right">
            <CardHeader className="bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10">
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <Briefcase className="h-8 w-8 text-accent animate-pulse" />
                <span>Professional Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Summary Text */}
                <div className="group hover:translate-x-2 transition-all duration-500">
                  <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-6 rounded-xl border-l-4 border-accent group-hover:shadow-xl transition-all duration-500">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      AI Engineer skilled in Machine Learning, Deep Learning, NLP, and LLMs. Adept at developing and deploying AI-driven applications using Python, FastAPI, and SQL. Experienced in end-to-end model development, API integration, and visualization with Matplotlib and Seaborn. Passionate about building scalable, production-ready systems that transform data into actionable insights and measurable business impact
                    </p>
                  </div>
                </div>

                {/* Key Strengths */}
                <div className="group hover:translate-x-2 transition-all duration-500">
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border-l-4 border-primary group-hover:shadow-xl transition-all duration-500">
                    <h3 className="font-bold text-xl text-primary mb-4 group-hover:scale-105 transition-transform duration-300">
                      Key Strengths
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span>Machine Learning & Data Analysis</span>
                      </li>
                      <li className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors duration-300">
                        <div
                          className="w-2 h-2 bg-accent rounded-full animate-pulse"
                          style={{ animationDelay: "200ms" }}
                        ></div>
                        <span>API Development with FastAPI</span>
                      </li>
                      <li className="flex items-center space-x-3 text-muted-foreground hover:text-chart-3 transition-colors duration-300">
                        <div
                          className="w-2 h-2 bg-chart-3 rounded-full animate-pulse"
                          style={{ animationDelay: "400ms" }}
                        ></div>
                        <span>Data Visualization & Dashboard Creation</span>
                      </li>
                      <li className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                        <div
                          className="w-2 h-2 bg-primary rounded-full animate-pulse"
                          style={{ animationDelay: "600ms" }}
                        ></div>
                        <span>Database Management & SQL</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Career Objective */}
                <div className="group hover:translate-x-2 transition-all duration-500">
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border-l-4 border-primary group-hover:shadow-xl transition-all duration-500">
                    <h3 className="font-bold text-xl text-primary mb-4 group-hover:scale-105 transition-transform duration-300">
                      Career Objective
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Seeking opportunities to apply machine learning expertise and analytical skills in challenging
                      data science roles. Committed to developing innovative solutions that drive business growth
                      through data-driven insights and cutting-edge technology.
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="group hover:translate-x-2 transition-all duration-500">
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border-l-4 border-primary group-hover:shadow-xl transition-all duration-500">
                    <h3 className="font-bold text-xl text-primary mb-4 group-hover:scale-105 transition-transform duration-300">
                      Contact Information
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p className="hover:text-primary transition-colors duration-300">📧 hammadshah7218@gmail.com</p>
                      <p className="hover:text-accent transition-colors duration-300">📱 +923042812430</p>
                      <p className="hover:text-chart-3 transition-colors duration-300">
                        📍 Phase 1 behind Saphire Software house, Jamshoro
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}