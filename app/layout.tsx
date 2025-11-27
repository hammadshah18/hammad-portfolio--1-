import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
// import LightRays from "@/components/lightrays"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Muhammad Hammad - ML Engineer Portfolio",
  description:
    "Portfolio of Muhammad Hammad, a passionate ML Engineer and Data Scientist specializing in machine learning solutions and data analysis.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

  {/* <div style={{ width: '100%', height: '600px', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
  <LightRays
    raysOrigin="top-center"
    raysColor="#498ac6ff"
    raysSpeed={1.3}
    lightSpread={3.0}  
    rayLength={2.0}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
</div> */}
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
