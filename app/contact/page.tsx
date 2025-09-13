"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen">
      <div className="px-6 py-16 md:px-12 lg:px-16">
        <div className="max-w-6xl">
          <div className="mb-16 animate-fade-in">
            <h1 className="font-bold text-4xl md:text-5xl mb-6 text-balance">Get In Touch</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Let's discuss your next project or just say hello
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">


                <CardContent className="p-4">
                <h2 className="font-bold text-lg mb-4">Contact</h2>
                <div className="space-y-5">
                  <div className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
                    <Mail className="h-4 w-4 text-accent" />
                    <span className="text-sm">sxayitboyev159@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
                    <Phone className="h-4 w-4 text-accent" />
                    <span className="text-sm">+998 94 490 09 01</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-sm">Tashkent, Uzbekistan</span>
                  </div>
                </div>
              </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:scale-110 transition-transform bg-transparent"
                    >
                      <a href="https://github.com/Samandar-21" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:scale-110 transition-transform bg-transparent"
                    >
                      <a href="https://linkedin.com//in/samandar-xayitboyev-66a651368" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>

                     <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:scale-110 transition-transform bg-transparent"
                  >
                    <a
                      href="https://t.me/Samandar_x21"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Send className="h-4 w-4" />
                    </a>
                  </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="font-bold text-2xl mb-6">Send Me a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="transition-all duration-200 focus:scale-[1.02]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="transition-all duration-200 focus:scale-[1.02]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="transition-all duration-200 focus:scale-[1.02]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="transition-all duration-200 focus:scale-[1.02]"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto hover:scale-105 transition-transform">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-20 animate-slide-up" style={{ animationDelay: "600ms" }}>
            <Card className="bg-gradient-to-r from-accent/10 via-accent/5 to-background border-accent/20 hover:shadow-xl transition-all duration-500">
              <CardContent className="p-12 text-center">
                <h2 className="font-bold text-3xl md:text-4xl mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                  Ready to Collaborate?
                </h2>
                <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                  Let's work together to bring your ideas to life. I'm passionate about creating innovative solutions
                  that drive results and exceed expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8 hover:scale-105 transition-transform">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 hover:scale-105 transition-transform bg-transparent"
                  >
                    View My Work
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
