import type React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#35d7ff] p-3 rounded-md shadow-md hover:shadow-lg transition-all w-full">
      <div className="container mx-auto px-4 text-center">
      
        <p className="text-white text-sm font-medium whitespace-nowrap">
          © {new Date().getFullYear()} Gunti Ravikumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
