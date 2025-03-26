"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Instagram, Menu, X, ChevronDown, Home, User, Code, Briefcase } from "lucide-react"
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
    <>
      {/* Fixed Navigation Bar */}
      <div className="fixed top-0 left-0 w-full bg-[#35d7ff] py-4 px-4 md:px-8 flex items-center shadow-lg border-b border-teal-500/20 z-50">
        <div className="w-full flex justify-between md:justify-center md:space-x-6 items-center">
          {/* Link to the About Me section */}
          <Link href="/#about" className="text-2xl font-bold text-white hover:text-teal-300 transition-colors duration-300">
            Ravikumar
          </Link>
          <div className="flex items-center space-x-2 md:space-x-6">
            <a
              href="https://github.com/Ravikumar-2016"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-300 transition-colors duration-300 p-1.5 rounded-lg hover:bg-teal-500/10"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/ravikumar-gunti-8b360a2a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-300 transition-colors duration-300 p-1.5 rounded-lg hover:bg-teal-500/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://www.instagram.com/ravikumar_gunti__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-300 transition-colors duration-300 p-1.5 rounded-lg hover:bg-teal-500/10"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <button
              onClick={toggleSidebar}
              className="text-white hover:text-teal-300 transition-colors duration-300 p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300 hover:bg-teal-500/10"
              aria-label="Toggle Sidebar"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 to-gray-800 z-50 transform transition-all duration-300 ease-out shadow-2xl ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isSidebarOpen}
      >
        <div className="relative h-full">
          {/* Close button */}
          <button
            onClick={toggleSidebar}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-300 p-1 rounded-lg hover:bg-white/10"
            aria-label="Close Sidebar"
          >
            <X size={24} />
          </button>

          {/* Profile section */}
          <div className="pt-20 pb-8 px-8 border-b border-gray-700/50">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#35d7ff] flex items-center justify-center">
                <span className="text-2xl font-bold text-white">R</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Ravikumar</h3>
                <p className="text-sm text-gray-400">Full Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-8">
            <div className="space-y-6">
              <Link
                href="/"
                onClick={closeSidebar}
                className="flex items-center space-x-3 text-gray-300 hover:text-white group px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10"
              >
                <Home size={20} className="text-gray-400 group-hover:text-[#35d7ff]" />
                <span className="font-medium">Home</span>
              </Link>

              {/* Link to the About Me section */}
              <Link
                href="/#about"
                onClick={closeSidebar}
                className="flex items-center space-x-3 text-gray-300 hover:text-white group px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10"
              >
                <User size={20} className="text-gray-400 group-hover:text-[#35d7ff]" />
                <span className="font-medium">About Me</span>
              </Link>

              {/* Link to the Skills section */}
              <Link
                href="/#skills"
                onClick={closeSidebar}
                className="flex items-center space-x-3 text-gray-300 hover:text-white group px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10"
              >
                <Code size={20} className="text-gray-400 group-hover:text-[#35d7ff]" />
                <span className="font-medium">Skills</span>
              </Link>

              <div className="space-y-3">
                <button
                  onClick={toggleProjects}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white group px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10"
                >
                  <div className="flex items-center space-x-3">
                    <Briefcase size={20} className="text-gray-400 group-hover:text-[#35d7ff]" />
                    <span className="font-medium">Projects</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 transition-transform duration-200 ${isProjectsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`space-y-1 pl-9 transition-all duration-200 ${
                    isProjectsOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <Link
                    href="/field-grower"
                    onClick={closeSidebar}
                    className="block text-gray-400 hover:text-white py-2 px-3 rounded-lg transition-colors duration-200 hover:bg-white/10"
                  >
                    Field Grower
                  </Link>
                  <Link
                    href="/saviour"
                    onClick={closeSidebar}
                    className="block text-gray-400 hover:text-white py-2 px-3 rounded-lg transition-colors duration-200 hover:bg-white/10"
                  >
                    Saviour
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-gray-700/50">
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/Ravikumar-2016"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#35d7ff] transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ravikumar-gunti-8b360a2a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#35d7ff] transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/ravikumar_gunti__/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#35d7ff] transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header