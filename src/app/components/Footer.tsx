import type React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#35d7ff] p-3 rounded-md shadow-md hover:shadow-lg transition-all w-full">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-5 mb-2">
          <a
            href="https://github.com/Ravikumar-2016"
            className="text-white hover:text-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/gunti-ravikumar-8b360a2a8"
            className="text-white hover:text-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://www.instagram.com/ravikumargunti2016/"
            className="text-white hover:text-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={22} />
          </a>
        </div>
        <p className="text-white text-sm font-medium whitespace-nowrap">
          © {new Date().getFullYear()} Gunti Ravikumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
