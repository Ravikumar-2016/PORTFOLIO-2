import type React from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden bg-green-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <nav className="flex justify-center items-center py-4">
          <div className="flex gap-10 text-lg font-semibold">
            <Link href="/" className="text-white hover:text-yellow-400 transition-colors duration-300">Home</Link>
            <Link href="/saviour" className="text-white hover:text-yellow-400 transition-colors duration-300">Saviour</Link>
            <Link href="/field-grower" className="text-white hover:text-yellow-400 transition-colors duration-300">Field Grower</Link>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto text-center mt-12">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-teal-500 overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
                alt="Profile"
                className="w-full h-full object-cover bg-gray-100"
                width={128} // width of the image
                height={128} // height of the image
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Gunti Ravikumar</h1>
          <p className="text-xl md:text-2xl text-teal-300 mb-8">B.Tech Student at IIITDM Jabalpur</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Ravikumar-2016" className="p-2 hover:text-teal-300 transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={24} className="text-white" />
            </a>
            <a href="https://www.linkedin.com/in/gunti-ravikumar-8b360a2a8" className="p-2 hover:text-teal-300 transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} className="text-white" />
            </a>
            <a href="https://www.instagram.com/ravikumargunti58/" className="p-2 hover:text-teal-300 transition-colors" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
