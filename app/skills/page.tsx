"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

const skills = [
  { name: "Power BI", level: 85, color: "bg-blue-500" },
  { name: "PowerQuery", level: 85, color: "bg-indigo-500" },
  { name: "MySQL", level: 80, color: "bg-orange-500" },
  { name: "DAX", level: 75, color: "bg-purple-500" },
  { name: "Python", level: 70, color: "bg-green-500" },
  { name: "Pandas", level: 78, color: "bg-teal-500" },
  { name: "Data Visualization", level: 88, color: "bg-pink-500" },
  { name: "Frontend", level: 70, color: "bg-red-500" },
]

export default function SkillsPage() {
  const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0))

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevels(skills.map((skill) => skill.level))
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen">
      <div className="px-6 py-16 md:px-12 lg:px-16">
        <div className="max-w-4xl">
          <div className="mb-16 animate-fade-in">
            <h1 className="font-bold text-4xl md:text-5xl mb-6 text-balance">Skills</h1>
            <p className="text-xl text-muted-foreground text-pretty">My technical expertise and proficiency levels</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-base">{skill.name}</h3>
                    <span className="text-sm font-bold text-accent">{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <Progress value={animatedLevels[index]} className="h-2 bg-muted" />
                    <div
                      className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                      style={{ width: `${animatedLevels[index]}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
