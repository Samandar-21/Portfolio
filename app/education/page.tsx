"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, GraduationCap, Calendar, MapPin } from "lucide-react"
import { useState } from "react"

const educationData = [
  {
    institution: "UZBEKISTAN STATE WORLD UNIVERSITY",
    period: "2022 - Present",
    location: "Tashkent, Uzbekistan",
    description:
      "Computational linguistics and natural language processing with focus on multilingual systems and AI-powered translation.",
    achievements: ["High academic performance", "Mathematics excellence", "Leadership activities"],
  },
  {
    institution: "JAPAN DIGITAL UNIVERSITY",
    period: "2022 - Present",
    location: "Tashkent, Uzbekistan",
    description:
      "Pursuing advanced studies in digital technologies and computer science. Gaining expertise in modern programming languages, data structures, and software development methodologies.",
    achievements: ["Digital innovation projects", "International collaboration", "Advanced programming", "Japanese culture"],
  },
  {
    institution: "KYOTO TACHIBANA UNIVERSITY",
    period: "2023 - Present",
    location: "Online, Japan",
    description:
      "International Exchange Program focused on Business Management and Cross-Cultural Communication. Alongside technical skills,  strengthens knowledge of general psychology and interpersonal communication skills.",
    achievements: ["Cultural exchange", "Business studies", "General psychology"],
  },
  {
    institution: "PROWEB IT ACADEMY",
    period: "2025",
    location: "Tashkent, Uzbekistan",
    description:
      "Intensive practical training in web development, data analysis, and modern IT technologies. Hands-on experience with industry-standard tools and real-world projects.",
    achievements: ["Web development certification", "Data analysis specialization", "Industry projects"],
  },
]

export default function EducationPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <div className="min-h-screen">
      <div className="px-6 py-16 md:px-12 lg:px-16">
        <div className="max-w-4xl">
          <div className="mb-16">
            <h1 className="font-bold text-4xl md:text-5xl mb-6 text-balance">Education</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              My academic journey and continuous learning path
            </p>
          </div>

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="p-6 cursor-pointer" onClick={() => toggleCard(index)}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <GraduationCap className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{edu.institution}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {edu.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {edu.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      {expandedCard === index ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>

                  {expandedCard === index && (
                    <div className="px-6 pb-6 border-t">
                      <div className="pt-6 space-y-4">
                        <p className="text-muted-foreground text-pretty">{edu.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">Key Achievements:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {edu.achievements.map((achievement, achIndex) => (
                              <li key={achIndex}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
