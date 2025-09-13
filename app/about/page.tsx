import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { BarChart3, Code, Database, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="px-6 py-16 md:px-12 lg:px-16">
        <div className="max-w-4xl">
          <div className="mb-16">
            <h1 className="font-bold text-4xl md:text-5xl mb-6 text-balance animate-fade-in">About Us</h1>
            <p className="text-xl text-muted-foreground text-pretty animate-fade-in-delay">Who Am I?</p>
          </div>

          <div className="mb-12 text-center animate-scale-in">
            <div className="relative w-64 h-64 mx-auto mb-6">
              <Image
                src="/photo_2025-09-10_14-51-11.jpg"
                alt="Samandar Hayitboyev"
                width={256}
                height={256}
                className="rounded-lg object-cover border-4 border-accent/20 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="font-bold text-2xl mb-2">Samandar Hayitboyev</h2>
            <p className="text-lg text-muted-foreground">Data Analyst & Developer</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <Card className="animate-slide-in-left hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:border-accent/30">
                <CardContent className="p-8">
                  <h2 className="font-bold text-2xl mb-4">Who Am I?</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-pretty">
                      Hi I'm Samandar I was born on 01.09.2004 in Fergana region. I am a highly motivated and
                      goal-oriented individual with strong interests in business and psychology. I am passionate about
                      continuous growth and self-improvement, always looking for opportunities to expand my knowledge
                      and skills.
                    </p>
                    <p className="text-pretty">
                      I focus on sports and personal development, learn new concepts in business, and read books that
                      broaden my horizons and strengthen my analytical thinking. My approach combines technical
                      expertise with creative problem-solving to deliver solutions that make a real impact.
                    </p>
                    <p className="text-pretty">I am happy to know you that 5+ projects done sucessfully!</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-slide-in-left-delay hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:border-accent/30">
                <CardContent className="p-8">
                  <h2 className="font-bold text-2xl mb-6">What I Do</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors duration-300">
                          <BarChart3 className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Analysis</h3>
                        <p className="text-sm text-muted-foreground text-pretty">
                          Data analysis and business intelligence using Power BI and advanced analytics tools.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors duration-300">
                          <Code className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Web Design</h3>
                        <p className="text-sm text-muted-foreground text-pretty">
                          Creating modern and responsive web interfaces with focus on user experience.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors duration-300">
                          <Database className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Backend</h3>
                        <p className="text-sm text-muted-foreground text-pretty">
                          Backend development and database management for robust applications.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors duration-300">
                          <TrendingUp className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Python Developer</h3>
                        <p className="text-sm text-muted-foreground text-pretty">
                          Python development for data analysis, automation, and web applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="animate-slide-in-right hover:shadow-lg hover:scale-[1.05] transition-all duration-300 hover:border-accent/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Achievement</h3>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2 animate-bounce-in">5+</div>
                    <p className="text-sm text-muted-foreground">Projects Done Successfully!</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-slide-in-right-delay hover:shadow-lg hover:scale-[1.05] transition-all duration-300 hover:border-accent/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    >
                      Business
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    >
                      Psychology
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    >
                      Sports
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    >
                      Data Analysis
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    >
                      Reading
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    >
                      Self-improvement
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-slide-in-right-delay-2 hover:shadow-lg hover:scale-[1.05] transition-all duration-300 hover:border-accent/30 hover:bg-accent/5">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-4">Ready to Collaborate?</h3>
                  <p className="text-sm text-muted-foreground mb-4">Hire me</p>
                  <div className="text-2xl font-bold text-accent animate-pulse">Let's Work Together!</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
