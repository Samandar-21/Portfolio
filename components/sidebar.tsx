// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { usePathname } from "next/navigation"
// import { SiTelegram } from "react-icons/si"  // ⬅️ qo‘shildi
// import { Button } from "@/components/ui/button"
// import {
//   Menu,
//   X,
//   Home,
//   User,
//   Code,
//   Mail,
//   Github,
//   Linkedin,
//   Twitter,
//   Download,
//   GraduationCap,
//   Briefcase,
// } from "lucide-react"
// import { cn } from "@/lib/utils"

// const navigation = [
//   { name: "Home", href: "/", icon: Home },
//   { name: "About", href: "/about", icon: User },
//   { name: "Skills", href: "/skills", icon: Code },
//   { name: "Education", href: "/education", icon: GraduationCap },
//   { name: "Work", href: "/work", icon: Briefcase },
//   { name: "Contact", href: "/contact", icon: Mail },
// ]


// const socialLinks = [
//   { name: "GitHub", href: "https://github.com/Samandar-21", icon: Github },
//   { name: "LinkedIn", href: "https://linkedin.com/in/samandar-xayitboyev-66a651368", icon: Linkedin },
//   { name: "Telegram", href: "https://t.me/Samandar_x21", icon: SiTelegram }, // ⬅️ yangi
// ]



// // const socialLinks = [
// //   { name: "GitHub", href: "https://github.com", icon: Github },
// //   { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
// //   { name: "Twitter", href: "https://twitter.com", icon: Twitter },
// // ]

// export function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const pathname = usePathname()

//   return (
//     <>
//       {/* Mobile menu button */}
//       <Button
//         variant="ghost"
//         size="sm"
//         className="fixed top-4 left-4 z-50 md:hidden"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//       </Button>

//       {/* Sidebar */}
//       <div
//         className={cn(
//           "fixed inset-y-0 left-0 z-40 w-80 bg-card border-r transform transition-transform duration-300 ease-in-out",
//           "md:translate-x-0 md:static md:inset-0",
//           isOpen ? "translate-x-0" : "-translate-x-full",
//         )}
//       >
//         <div className="flex flex-col h-full p-6">
//           {/* Profile Section */}
//           <div className="text-center mb-8">
//             <div className="relative w-32 h-32 mx-auto mb-4">
//               <Image
//                 src="/photo_2025-09-10_14-51-11.jpg"
//                 alt="Hayitboyev Samandar"
//                 width={128}
//                 height={128}
//                 className="rounded-full object-cover border-4 border-accent/20"
//               />
//             </div>
//             <h1 className="font-bold text-xl mb-1">Hayitboyev Samandar</h1>
//             <p className="text-sm text-muted-foreground mb-4">Pro Data Analyst</p>

//             {/* Social Links */}
//             <div className="flex justify-center gap-2 mb-4">
//               {socialLinks.map((link) => (
//                 <Button key={link.name} variant="ghost" size="sm" asChild>
//                   <Link href={link.href} target="_blank">
//                     <link.icon className="h-4 w-4" />
//                   </Link>
//                 </Button>
//               ))}
//             </div>

//           {/* Download CV Button */}
//           <Button
//             variant="outline"
//             size="sm"
//             className="w-full bg-transparent"
//             onClick={() => window.open("/my_cv.pdf", "_blank")}
//           >
//             <Download className="mr-2 h-4 w-4" />
//             Download CV
//           </Button>

//           </div>

//           {/* Navigation */}
//           <nav className="flex-1">
//             <ul className="space-y-2">
//               {navigation.map((item) => {
//                 const isActive = pathname === item.href
//                 return (
//                   <li key={item.name}>
//                     <Link
//                       href={item.href}
//                       className={cn(
//                         "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
//                         isActive
//                           ? "bg-accent text-accent-foreground"
//                           : "text-muted-foreground hover:text-foreground hover:bg-accent/10",
//                       )}
//                       onClick={() => setIsOpen(false)}
//                     >
//                       <item.icon className="h-5 w-5" />
//                       {item.name}
//                     </Link>
//                   </li>
//                 )
//               })}
//             </ul>
//           </nav>

//           {/* Footer */}
//           <div className="text-center text-xs text-muted-foreground">© 2025 Hayitboyev Samandar</div>
//         </div>
//       </div>

//       {/* Overlay for mobile */}
//       {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
//     </>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { SiTelegram } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Code, Mail, Github, Linkedin, Download, GraduationCap, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Code },
  { name: "Education", href: "/education", icon: GraduationCap },
  { name: "Work", href: "/work", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Mail },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Samandar-21", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/samandar-xayitboyev-66a651368", icon: Linkedin },
  { name: "Telegram", href: "https://t.me/camanch1k_14", icon: SiTelegram },
]

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const body = document.body
    if (isMobile) {
      body.style.marginLeft = "0px"
    } else {
      body.style.marginLeft = isExpanded ? "320px" : "64px"
    }

    return () => {
      body.style.marginLeft = "0px"
    }
  }, [isExpanded, isMobile])

  const handleNavClick = () => {
    if (isMobile) {
      setIsExpanded(false)
    }
  }

  return (
    <>
      {isMobile && (
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "fixed top-4 right-4 z-50 transition-all duration-300 ease-in-out",
            "bg-card/90 backdrop-blur-md border hover:bg-accent rounded-xl shadow-lg",
            "hover:shadow-xl active:scale-95 p-3",
            "md:hidden", // Hide on desktop since desktop has its own toggle
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <X className="h-5 w-5 transition-colors duration-200" />
          ) : (
            <Menu className="h-5 w-5 transition-colors duration-200" />
          )}
        </Button>
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 bg-card border-r transform transition-all duration-300 ease-in-out",
          isExpanded ? "w-80 translate-x-0" : isMobile ? "w-80 -translate-x-full" : "w-16 translate-x-0",
        )}
      >
        <div className="flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent hover:scrollbar-thumb-accent/40">
          {!isMobile && (
            <div className="p-2 border-b">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "w-full transition-all duration-300 ease-in-out",
                  "bg-card/80 backdrop-blur-sm border hover:bg-accent rounded-lg",
                  "hover:shadow-xl active:scale-95",
                  isExpanded ? "justify-start" : "justify-center",
                )}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <>
                    <X className="h-5 w-5 transition-colors duration-200" />
                    {isExpanded && <span className="ml-2">Close</span>}
                  </>
                ) : (
                  <Menu className="h-5 w-5 transition-colors duration-200" />
                )}
              </Button>
            </div>
          )}

          {/* Profile Section - only show when expanded */}
          {isExpanded && (
            <div className="text-center p-6 mb-4 animate-fade-in">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/photo_2025-09-10_14-51-11.jpg"
                  alt="Hayitboyev Samandar"
                  width={128}
                  height={128}
                  className="rounded-full object-cover border-4 border-accent/20 transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h1 className="font-bold text-xl mb-1">Hayitboyev Samandar</h1>
              <p className="text-sm text-muted-foreground mb-4">Pro Data Analyst</p>

              {/* Social Links */}
              <div className="flex justify-center gap-2 mb-4">
                {socialLinks.map((link, index) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="animate-fade-in hover:scale-110 transition-transform duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Link href={link.href} target="_blank">
                      <link.icon className="h-4 w-4" />
                    </Link>
                  </Button>
                ))}
              </div>

              {/* Download CV Button */}
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-transparent animate-fade-in hover:scale-105 transition-transform duration-200"
                onClick={() => window.open("/my_cv.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4">
            <ul className="space-y-2">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name} className="animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                    <Link
                      href={item.href}
                      onClick={handleNavClick}
                      className={cn(
                        "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                        "hover:translate-x-1 hover:shadow-md group",
                        isExpanded ? "justify-start" : "justify-center",
                        isActive
                          ? "bg-accent text-accent-foreground shadow-md"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/10",
                      )}
                      title={!isExpanded ? item.name : undefined}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {isExpanded && <span>{item.name}</span>}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer - only show when expanded */}
          {isExpanded && (
            <div className="text-center text-xs text-muted-foreground p-4 animate-fade-in">
              © 2025 Hayitboyev Samandar
            </div>
          )}
        </div>
      </div>

      {isExpanded && isMobile && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setIsExpanded(false)} />
      )}
    </>
  )
}
