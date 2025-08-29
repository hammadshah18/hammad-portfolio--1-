"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Brain, Database, Code, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ServicesPage() {
  const [typedText, setTypedText] = useState("")
  const fullText = "My Services"

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

  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning Solutions",
      description:
        "Custom ML models for prediction, classification, and recommendation systems tailored to your business needs.",
      features: ["Predictive Analytics", "Classification Models", "Recommendation Systems", "Model Optimization"],
      color: "text-chart-1",
      bgColor: "group-hover:bg-chart-1/10",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Analysis & Visualization",
      description:
        "Transform raw data into actionable insights with comprehensive analysis and interactive dashboards.",
      features: ["Power BI Dashboards", "Statistical Analysis", "Data Preprocessing", "Interactive Reports"],
      color: "text-chart-2",
      bgColor: "group-hover:bg-chart-2/10",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "API Development",
      description:
        "Build robust APIs for ML model deployment and data integration using FastAPI and modern frameworks.",
      features: ["FastAPI Development", "Model Deployment", "API Integration", "Documentation"],
      color: "text-chart-3",
      bgColor: "group-hover:bg-chart-3/10",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Management",
      description: "Design and optimize database solutions for efficient data storage and retrieval.",
      features: ["MySQL Database Design", "Query Optimization", "Data Migration", "Performance Tuning"],
      color: "text-chart-4",
      bgColor: "group-hover:bg-chart-4/10",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Business Intelligence",
      description: "Help businesses make data-driven decisions with comprehensive BI solutions and insights.",
      features: ["KPI Dashboards", "Trend Analysis", "Performance Metrics", "Strategic Insights"],
      color: "text-chart-5",
      bgColor: "group-hover:bg-chart-5/10",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automation Solutions",
      description: "Streamline processes with intelligent automation and workflow optimization.",
      features: ["Process Automation", "Workflow Design", "Efficiency Optimization", "Custom Scripts"],
      color: "text-primary",
      bgColor: "group-hover:bg-primary/50",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white border-r-2 border-primary animate-pulse">{typedText}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive machine learning and data science solutions to help your business leverage the power of data.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50 ${service.bgColor}`}
            >
              <CardHeader className="relative overflow-hidden">
                <div
                  className={`${service.color} mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 transform-gpu`}
                >
                  {service.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 group-hover:bg-accent transition-all duration-300"></div>
                      <span className="text-sm group-hover:font-medium transition-all duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 hover:shadow-xl transition-all duration-300">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help you leverage machine learning and data science to achieve your business
              goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover:scale-105 transition-transform duration-200">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:scale-105 transition-transform duration-200 bg-transparent"
              >
                <Link href="/portfolio">View My Work</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
