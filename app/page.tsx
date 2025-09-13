"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const experiences = [
  {
    id: 1,
    company: "Tech Solutions Inc",
    role: "Frontend Developer",
    period: "2023 - Present",
    description: "Developed responsive web applications using React and Next.js",
    image: "/modern-office-workspace-with-computers.jpg",
  },
  {
    id: 2,
    company: "Digital Agency Pro",
    role: "UI/UX Developer",
    period: "2022 - 2023",
    description: "Created user interfaces and improved user experience for client projects",
    image: "/creative-design-workspace-with-mockups.jpg",
  },
  {
    id: 3,
    company: "StartUp Ventures",
    role: "Web Developer",
    period: "2021 - 2022",
    description: "Built and maintained company websites and web applications",
    image: "/startup-office-with-developers-coding.jpg",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % experiences.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 md:px-12 lg:px-16 animate-fade-in">
        <div className="max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-balance leading-tight animate-slide-up">
                Hi, I'm
                <span className="block text-accent">Samandar</span>
              </h1>
              <p
                className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                Backend Developer & Data Analyst passionate about creating digital solutions and analyzing data
                insights.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <Button asChild size="lg" className="font-medium hover:scale-105 transition-transform">
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-medium bg-transparent hover:scale-105 transition-transform"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Swiper Section */}
      <section className="px-6 py-16 md:px-12 lg:px-16 bg-muted/30">
        <div className="max-w-6xl">
          <div className="mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4">My Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Companies I've worked with and projects I've contributed to throughout my career.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {experiences.map((exp) => (
                  <div key={exp.id} className="w-full flex-shrink-0">
                    <Card className="mx-2">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-2 gap-0">
                          <div className="relative h-64 md:h-80">
                            <Image
                              src={exp.image || "/placeholder.svg"}
                              alt={exp.company}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-8 flex flex-col justify-center">
                            <div className="space-y-4">
                              <div>
                                <h3 className="font-bold text-2xl mb-2">{exp.company}</h3>
                                <p className="text-accent font-medium">{exp.role}</p>
                                <p className="text-sm text-muted-foreground">{exp.period}</p>
                              </div>
                              <p className="text-muted-foreground">{exp.description}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-accent" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

              <section className="px-6 py-16 md:px-12 lg:px-16">
  <div className="max-w-6xl">
    <div className="grid grid-cols-3 gap-8 text-center">
      <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
        <div className="font-bold text-4xl md:text-5xl text-accent mb-2">10+</div>
        <div className="text-sm text-muted-foreground">Projects Done</div>
      </div>
      <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
        <div className="font-bold text-4xl md:text-5xl text-accent mb-2">5+</div>
        <div className="text-sm text-muted-foreground">Happy Clients</div>
      </div>
      <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
        <div className="font-bold text-4xl md:text-5xl text-accent mb-2">97%</div>
        <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="px-6 py-16 md:px-12 lg:px-16 bg-accent text-accent-foreground">
        <div className="max-w-4xl text-center">
          <h2 className="font-bold text-3xl md:text-4xl mb-4">Let's Work Together</h2>
          <p className="text-lg mb-8 opacity-90">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-medium">
            <Link href="/contact">
              Start Collaboration <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
