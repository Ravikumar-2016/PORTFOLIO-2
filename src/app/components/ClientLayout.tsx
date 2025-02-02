"use client"

import type React from "react"
import Header from "./Header"
import Footer from "./Footer"

interface ClientLayoutProps {
  children: React.ReactNode
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 via-teal-800 to-cyan-800 text-white">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default ClientLayout

