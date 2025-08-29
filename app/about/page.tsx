"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Calendar, TrendingUp, Code, Database, Brain } from "lucide-react"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [typedText, setTypedText] = useState("")
  const [aboutTypedText, setAboutTypedText] = useState("")
  const [skillsVisible, setSkillsVisible] = useState(false)
  const fullText = "ML Engineer, Data Analyst"
  const aboutFullText = "About Me"

  useEffect(() => {
    // Typing animation for subtitle
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    // Typing animation for About Me heading
    let aboutIndex = 0
    const aboutTimer = setInterval(() => {
      if (aboutIndex < aboutFullText.length) {
        setAboutTypedText(aboutFullText.slice(0, aboutIndex + 1))
        aboutIndex++
      } else {
        clearInterval(aboutTimer)
      }
    }, 120)

    // Trigger skills animation after component mounts
    const skillsTimer = setTimeout(() => setSkillsVisible(true), 500)

    return () => {
      clearInterval(timer)
      clearInterval(aboutTimer)
      clearTimeout(skillsTimer)
    }
  }, [])

  const skills = [
    { name: "Python", logo: "🐍", level: 90, category: "Programming" },
    { name: "Java", logo: "☕", level: 80, category: "Programming" },
    { name: "C++", logo: "⚡", level: 75, category: "Programming" },
    { name: "MySQL", logo: "🗄️", level: 85, category: "Database" },
    { name: "FastAPI", logo: "🚀", level: 88, category: "Framework" },
    { name: "Docker", logo: "🐳", level: 70, category: "DevOps" },
    { name: "Git", logo: "📝", level: 85, category: "Tools" },
    { name: "Power BI", logo: "📊", level: 90, category: "Analytics" },
    { name: "Pandas", logo: "🐼", level: 92, category: "Data Science" },
    { name: "NumPy", logo: "🔢", level: 88, category: "Data Science" },
    { name: "Scikit-learn", logo: "🤖", level: 85, category: "ML" },
    { name: "Matplotlib", logo: "📈", level: 80, category: "Visualization" },
    { name: "Seaborn", logo: "🎨", level: 82, category: "Visualization" },
    { name: "Streamlit", logo: "⚡", level: 75, category: "Framework" },
    { name: "HTML", logo: "🌐", level: 70, category: "Web" },
    { name: "CSS", logo: "🎨", level: 68, category: "Web" },
  ]

  const interests = [
    { icon: "🤖", title: "Machine Learning & AI", desc: "Building intelligent systems" },
    { icon: "📊", title: "Data Analysis & Visualization", desc: "Extracting insights from data" },
    { icon: "🚀", title: "API Development using FastAPI", desc: "Creating robust web services" },
    { icon: "🐳", title: "Deployment & Docker", desc: "Containerized applications" },
    { icon: "💼", title: "Business Intelligence", desc: "Data-driven decision making" },
    { icon: "🔮", title: "Predictive Analytics", desc: "Forecasting future trends" },
  ]

  const stats = [
    { label: "Projects Completed", value: "15+", icon: Code },
    { label: "Technologies Mastered", value: "16+", icon: Database },
    { label: "Years Learning", value: "3+", icon: TrendingUp },
    { label: "ML Models Built", value: "8+", icon: Brain },
  ]
  
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          {/* Typing animation to About Me heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 ">
            <span className="text-white">{aboutTypedText}</span>
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-primary mb-4 h-12">
            <span className="border-r-2 border-primary animate-pulse">{typedText}</span>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Passionate about transforming data into actionable insights and building intelligent systems that make a
            difference.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <stat.icon
                  className="h-8 w-8 mx-auto mb-3 text-primary animate-bounce"
                  style={{ animationDelay: `${index * 200}ms` }}
                />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="hover:scale-105 transition-all duration-500 hover:shadow-xl animate-slide-in-left">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">👨‍💻</span>
                  <span>Personal Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="mb-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <span className="text-lg mr-2">💼</span>
                    Professional Summary
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Driven Computer Systems Engineering student specializing in Data Analysis. Passionate about data
                    science and committed to continuous learning in new technologies. Aiming to leverage technical and
                    analytical skills to deliver data-driven solutions.
                  </p>
                </div>

                <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-primary animate-pulse" />
                  <span>+923042812430</span>
                </div>
                <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-primary animate-pulse" />
                  <span>hammadshah7218@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-primary animate-pulse" />
                  <span>Phase 1 behind Saphire Software house, Jamshoro</span>
                </div>
                <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <Calendar className="h-5 w-5 text-primary animate-pulse" />
                  <span>Available for opportunities</span>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:scale-105 transition-all duration-500 hover:shadow-xl animate-slide-in-left"
              style={{ animationDelay: "200ms" }}
            >
              <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🌍</span>
                  <span>Languages</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
                    <span className="flex items-center space-x-2">
                      <span className="text-xl">🇵🇰</span>
                      <span>Urdu</span>
                    </span>
                    <Badge variant="secondary" className="animate-pulse">
                      Native
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
                    <span className="flex items-center space-x-2">
                      <span className="text-xl">🇺🇸</span>
                      <span>English</span>
                    </span>
                    <Badge variant="secondary" className="animate-pulse">
                      Fluent
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:scale-105 transition-all duration-500 hover:shadow-xl animate-slide-in-left"
              style={{ animationDelay: "400ms" }}
            >
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">💡</span>
                  <span>I am Interested In</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="group p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                          {interest.icon}
                        </span>
                        <div>
                          <div className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                            {interest.title}
                          </div>
                          <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {interest.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <Card className="hover:scale-105 transition-all duration-500 hover:shadow-xl animate-slide-in-right">
              <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">⚡</span>
                  <span>Technical Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group space-y-3 p-4 rounded-lg hover:bg-muted/30 transition-all duration-500 hover:scale-105 hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12">
                            {skill.logo}
                          </span>
                          <div>
                            <span className="font-medium group-hover:text-primary transition-colors duration-300">
                              {skill.name}
                            </span>
                            <div className="text-xs text-muted-foreground">{skill.category}</div>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground font-bold group-hover:text-primary transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r from-primary via-accent to-primary h-3 rounded-full transition-all duration-1000 ease-out transform origin-left ${
                            skillsVisible ? "scale-x-100" : "scale-x-0"
                          } group-hover:animate-pulse`}
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${index * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
