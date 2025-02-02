import type React from "react"
import { Github, Instagram, Linkedin } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/Ravikumar-2016"
            className="text-gray-400 hover:text-teal-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/gunti-ravikumar-8b360a2a8"
            className="text-gray-400 hover:text-teal-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/ravikumargunti2016/"
            className="text-gray-400 hover:text-teal-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} />
          </a>
        </div>
        <p className="text-gray-400">© {new Date().getFullYear()} Gunti Ravikumar. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

