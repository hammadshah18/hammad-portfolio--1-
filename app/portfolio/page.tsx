"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const toRotate = ["Portfolio", "Projects", "Work"]
  const period = 2000


  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, typingSpeed)

    return () => {
      clearInterval(ticker)
    }
  }, [displayedText])

  const tick = () => {
    const i = loopNum % toRotate.length
    const fullText = toRotate[i]
    const updatedText = isDeleting
      ? fullText.substring(0, displayedText.length - 1)
      : fullText.substring(0, displayedText.length + 1)

    setDisplayedText(updatedText)

    if (isDeleting) {
      setTypingSpeed((prevSpeed) => prevSpeed / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setTypingSpeed(period)
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setTypingSpeed(150)
    }
  }

  const projects = [
    {
      title: "HR Analytics Dashboard",
      description:
        "Created an interactive dashboard using Power BI to analyze employee data, including attrition rate, performance, satisfaction level, and department-wise insights. Enabled HR teams to make data-driven decisions through visualized metrics and filters.",
      technologies: ["Power BI", "Data Analysis", "HR Analytics", "Dashboard Design"],
      category: "Data Visualization",
      image: "/hr-analytics-dashboard-with-charts-and-metrics.png",
      demoLink: "https://github.com/hammadshah18/HR-Analytics-Dashboard",
      githubLink: "https://github.com/hammadshah18/HR-Analytics-Dashboard",
    },
    {
      title: "Car Price Predictor",
      description:
        "Built a machine learning model to predict car prices using features like brand, model year, mileage, and engine specs. Applied data preprocessing, feature engineering, and regression techniques to improve prediction accuracy.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Regression"],
      category: "Machine Learning",
      image: "/car-price-prediction-machine-learning-model.png",
      demoLink: "https://carpricepredictor-jvdrasjavyzvtst4goa56u.streamlit.app/",
      githubLink: "https://github.com/hammadshah18/CarPricePredictor",
    },
    {
      title: "Movie Recommender System",
      description:
        "Developed a recommendation engine using collaborative and content-based filtering to suggest personalized movies. Incorporated data preprocessing, similarity metrics, and evaluation methods to fine-tune recommendation quality.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Recommendation Systems", "Collaborative Filtering"],
      category: "Machine Learning",
      image: "/movie-recommendation-system-interface.png",
      demoLink: "https://github.com/hammadshah18/Movie-Recommender-System",
      githubLink: "https://github.com/hammadshah18/Movie-Recommender-System",
    },
    {
      title: "Insurance Premium Predictor",
      description:
        "Built a FastAPI web service to estimate insurance premiums from client inputs like age, BMI, smoking status, and other risk factors. Utilized a machine learning model under the hood, with endpoints designed for easy integration or testing.",
      technologies: ["FastAPI", "Python", "Machine Learning", "API Development", "Pydantic"],
      category: "API Development",
      image: "/insurance-premium-calculator-web-interface.png",
      demoLink: "https://github.com/hammadshah18/Insurance-Premium-Predictor",
      githubLink: "https://github.com/hammadshah18/Insurance-Premium-Predictor",
    },
    {
      title: "Karachi House Price Predictor",
      description:
        "Developed a Machine Learning model to predict house prices in Karachi using regression techniques. Performed data preprocessing, feature engineering, and model evaluation to ensure accuracy. Built an interactive interface for users to input property details and get price predictions.",
      technologies: ["Python", "Scikit-learn", "Streamlit", "Real Estate Analytics", "Regression"],
      category: "Machine Learning",
      image: "/house-price-prediction-karachi-real-estate.png",
      demoLink: "https://karachihousepricepredictor-5suw5z6fhsc5ibwtdxgj4q.streamlit.app/",
      githubLink: "https://github.com/hammadshah18/KarachiHousePricePredictor",
    },
    {
      title: "Email Spam Classifier",
      description:
        "Developed a Machine Learning model to Classify an Email Spam or Not Spam , Performed data preprocessing, feature engineering, and model evaluation to ensure accuracy. Built an interactive interface for users to input for type an message to check Email Spam or Not,Use Naive Bayes Classifer for better accuracy ",
      technologies: ["Python", "Scikit-learn", "Streamlit", "Classifier"],
      category: "Machine Learning",
      image: "/email-Spam-Classifier.png",
      demoLink: "https://emailspamclassifier-roogpzwt4pmtqrylmxbage.streamlit.app/",
      githubLink: "https://github.com/hammadshah18/EmailSpamClassifier",
    },
    {
      title: "UK-Universities Analysis Dashboard",
      description:
        "I developed a UK University Review Sentiment Analysis Dashboard using Machine Learning (XGBoost + TF-IDF) and deployed it with StreamlitPredicts sentiment (Negative, Neutral, Positive) from student reviews.Predicts ratings based on text feedback.Provides visual dashboards with graphs showing sentiment trends, top universities, and rating distributions ",
      technologies: ["NLP", "ML", "Streamlit", "XGBoost + TF-IDF"],
      category: "NLP",
      image: "/uk-Analysis-pic.png",
      demoLink: "https://uk-universities-sentiment-analysis-rating-prediction-dashboard.streamlit.app/",
      githubLink: "https://github.com/hammadshah18/UK-Universities-Sentiment-Analysis-Rating-Prediction-Dashboard",
    },
  ]

  const categories = ["All", "Machine Learning","NLP" ,"Data Visualization", "API Development"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-particles"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="typing-text">{displayedText}</span>
            <span className="typing-cursor">|</span>
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Explore my collection of machine learning projects, data analysis dashboards, and API developments that
            showcase my technical expertise.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={category === activeFilter ? "default" : "outline"}
              className="rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300 animate-bounce-in"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-slide-in-up hover:scale-105 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-2 hover:border-primary/50"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="animate-bounce-in hover:scale-110 transition-transform duration-300"
                    onClick={() => window.open(project.demoLink, "_blank", "noopener,noreferrer")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="animate-bounce-in hover:scale-110 transition-transform duration-300"
                    style={{ animationDelay: "0.1s" }}
                    onClick={() => window.open(project.githubLink, "_blank", "noopener,noreferrer")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              <CardHeader className="group-hover:bg-primary/5 transition-colors duration-300">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="secondary"
                    className="text-xs group-hover:scale-110 transition-transform duration-300"
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 group-hover:scale-105 transform-gpu">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 group-hover:bg-primary/5 transition-colors duration-300">
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs hover:scale-110 hover:bg-primary/20 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="py-12 relative z-10">
              <h2 className="text-3xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
                Interested in My Work?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
                I'm always excited to work on new projects and collaborate on innovative solutions. Let's discuss your
                ideas!
              </p>
              <Button
                asChild
                size="lg"
                className="hover:scale-110 hover:shadow-lg transition-all duration-300 animate-pulse-glow"
              >
                <Link href="/contact">Start a Project</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
