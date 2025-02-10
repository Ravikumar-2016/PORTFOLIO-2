"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Intro: React.FC = () => {
  return (
    <div className="flex-1 relative pt-20 bg-gradient-to-b from-blue-100 to-white">

        {/* Maths Formulae Background - Only for This Page 
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 z-0"></div> */}
      
      {/* Content Section */}
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

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 animate-[bounce_3s_infinite]">
            Hi, I&apos;m Ravikumar Gunti
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">Undergraduate at IIITDM Jabalpur</p>
          
          <div className="flex flex-col items-center">
            <Link
              href="/#about"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Explore My Work
            </Link>
            
            {/* Animated Down Arrow */}
            <div className="mt-4 animate-[bounce_3s_infinite] text-gray-600">
              <ChevronDown size={32} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Intro;
