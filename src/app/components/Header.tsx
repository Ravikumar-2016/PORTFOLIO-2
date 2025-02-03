"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Instagram, Menu, X, ChevronDown } from "lucide-react"
import type React from "react"

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const toggleProjects = () => setIsProjectsOpen(!isProjectsOpen)
  const closeSidebar = () => {
    setIsSidebarOpen(false)
    setIsProjectsOpen(false)
  }

  return (
    <header className="min-h-screen flex flex-col relative overflow-hidden bg-green-900">
      {/* Top Navigation Bar */}
      <div className="w-full bg-[#0B4619] py-4 px-6 flex justify-between items-center shadow-lg border-b border-teal-500/20">
        <Link href="/" className="text-2xl font-bold text-white hover:text-teal-300 transition-colors duration-300">
          Gunti Ravikumar
        </Link>
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/Ravikumar-2016"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition-colors duration-300 p-2 rounded-lg hover:bg-teal-500/10"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/gunti-ravikumar-8b360a2a8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition-colors duration-300 p-2 rounded-lg hover:bg-teal-500/10"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/ravikumargunti2016/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition-colors duration-300 p-2 rounded-lg hover:bg-teal-500/10"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-teal-300 transition-colors duration-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300 hover:bg-teal-500/10"
            aria-label="Toggle Sidebar"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-16 relative z-10 text-center">
          <div className="max-w-4xl mx-auto mt-12">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto rounded-full border-4 border-teal-500 overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
                  alt="Profile"
                  className="w-full h-full object-cover bg-gray-100"
                  width={128}
                  height={128}
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-[bounce_3s_infinite]">
              Hi, I&apos;m Gunti Ravikumar
            </h1>
            <p className="text-xl md:text-2xl text-teal-300 mb-8">Undergraduate at IIITDM Jabalpur</p>
            <div className="flex flex-col items-center">
              <Link
                href="/#about"
                onClick={closeSidebar}
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Explore My Work
              </Link>
              {/* Animated Down Arrow */}
              <div className="mt-4 animate-[bounce_3s_infinite] text-teal-300">
                <ChevronDown size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900/95 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isSidebarOpen}
      >
        <div className="p-6">
          <button
            onClick={toggleSidebar}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-300"
            aria-label="Close Sidebar"
          >
            <X size={24} />
          </button>
          <nav className="mt-16">
            <div className="space-y-6">
              <Link
                href="/"
                onClick={closeSidebar}
                className="block text-lg text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                Home
              </Link>
              <Link
                href="/#about"
                onClick={closeSidebar}
                className="block text-lg text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                About Me
              </Link>
              <Link
                href="/#skills"
                onClick={closeSidebar}
                className="block text-lg text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                Skills
              </Link>
              <div className="space-y-4">
                <button
                  onClick={toggleProjects}
                  className="flex items-center justify-between w-full text-lg text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  aria-expanded={isProjectsOpen}
                >
                  Projects
                  <span className={`transform transition-transform duration-200 ${isProjectsOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                <div className={`space-y-3 pl-4 ${isProjectsOpen ? "block" : "hidden"}`}>
                  <Link
                    href="/field-grower"
                    onClick={closeSidebar}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  >
                    Field Grower
                  </Link>
                  <Link
                    href="/saviour"
                    onClick={closeSidebar}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  >
                    Saviour
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

