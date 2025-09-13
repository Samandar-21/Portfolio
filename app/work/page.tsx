import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, BarChart3, Globe, Database, Zap } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Business Intelligence Dashboard",
    description:
      " Banking Analysis - International Financial analysis software monitor financial indicators in real time and optimize decision-making.",
    image: "/Screenshot 2025-07-30 190356.png",
    technologies: ["Power BI", "DAX", "PowerQuery", "SQL"],
    category: "Data Analytics",
    icon: BarChart3,
    color: "bg-blue-500",
  },
  {
    title: "BenzinAI – Fuel Prices and Regional Analysis",
    description:
      "An analytical system that visually presents fuel prices, quality, and regional expenses.",
    image: "/Screenshot-2025-08-08-183539.png",
    technologies: ["Python", "Pandas", "MySQL", "Frontend"],
    category: "Web Development",
    icon: Globe,
    color: "bg-green-500",
    width: 500,
    height: 400,
  },
  {
    title: "Data Visualization Suite",
    description:
      "Advanced data visualization tools for complex datasets. Interactive charts, real-time updates, and customizable reporting features for business stakeholders.",
    image: "/data-visualization-charts-and-interactive-graphs.jpg",
    technologies: ["Data Visualization", "Python", "Power BI"],
    category: "Data Science",
    icon: Database,
    color: "bg-purple-500",
  },
  {
    title: "Education Analytics – Student and Course Analysis",
    description:
      "An interactive dashboard that provides a visual overview of student enrollment, payments, demographics, and course distribution.",
    image: "/Screenshot 2025-08-04 192352.png",
    technologies: ["PowerQuery", "DAX", "MySQL", "Python"],
    category: "Automation",
    icon: Zap,
    color: "bg-orange-500",
  },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <div className="px-6 py-16 md:px-12 lg:px-16">
        <div className="max-w-7xl">
          {/* Hero Section */}
          <div className="mb-20 text-center">
            <h1 className="font-bold text-5xl md:text-6xl mb-6 text-balance bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              My Work
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Showcasing innovative projects that combine data analytics, web development, and business intelligence
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-4 px-6 py-3 bg-accent/10 rounded-full">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for new projects</span>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 ${project.color} rounded-lg flex items-center justify-center shadow-lg`}
                  >
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-white/90 text-black hover:bg-white">
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-8">
                  <h3 className="font-bold text-2xl mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1" asChild>
                      <a href="https://github.com/Samandar-21" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/Samandar-21" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <Card className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-200/20">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-200/20">
              <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-200/20">
              <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-200/20">
              <div className="text-3xl font-bold text-orange-600 mb-2">3+</div>
              <div className="text-sm text-muted-foreground"> Monts Experience</div>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-accent/10 via-accent/5 to-background border-accent/20">
            <CardContent className="p-12 text-center">
              <h2 className="font-bold text-3xl mb-4">Ready to Work Together?</h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Let's collaborate on your next project and bring your ideas to life with data-driven solutions
              </p>
              <Button size="lg" className="px-8">
                Start a Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
