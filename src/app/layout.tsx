import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Gunti Ravikumar",
  description: "Personal portfolio showcasing projects and skills of Gunti Ravikumar",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        <div className="pt-16">
          {" "}
          {/* Add padding top to account for fixed header */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

