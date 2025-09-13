// import type React from "react"
// import type { Metadata } from "next"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
// import { Analytics } from "@vercel/analytics/next"
// import { Suspense } from "react"
// import "./globals.css"
// import { Sidebar } from "@/components/sidebar"

// export const metadata: Metadata = {
//   title: "Hayitboyev Samander - Portfolio",
//   description: "Frontend Developer & UI/UX Designer Portfolio",
//   generator: "v0.app",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
//         <div className="flex min-h-screen">
//           <Sidebar />
//           <main className="flex-1 md:ml-0">
//             <Suspense fallback={null}>{children}</Suspense>
//           </main>
//         </div>
//         <Analytics />
//       </body>
//     </html>
//   )
// }
import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"

export const metadata: Metadata = {
  title: "Hayitboyev Samandar - Portfolio",
  description: "Frontend Developer & UI/UX Designer Portfolio",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 w-full transition-all duration-300 ease-in-out ml-16 md:ml-16">
            <div className="min-h-screen w-full">
              <Suspense fallback={null}>{children}</Suspense>
            </div>
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
