"use client";

import React from "react";
import { User, Download } from "lucide-react";

const About: React.FC = () => {
  const handleDownload = () => {
    const resumeUrl = "/MyResume.pdf"; // Path to your resume in the public folder
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Gunti_Ravikumar_Resume.pdf"; // Custom name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-10 flex items-center text-gray-900">
            <User className="mr-3 text-teal-600" size={32} /> About Me
          </h2>
          <p className="text-xl leading-relaxed mb-6 text-gray-800">
            I am <span className="font-semibold">Gunti Ravikumar</span>, a <strong>B.Tech Computer Science and Engineering</strong> student at <span className="font-semibold">IIITDM Jabalpur</span>.  
            Passionate about software development, I specialize in <strong>web technologies</strong> and have a growing interest in <strong>cloud computing</strong> and <strong>AI-driven applications</strong>.  
          </p>

          <p className="text-xl leading-relaxed mb-6 text-gray-800">
            My technical stack includes <strong>Python, Java, C, C++, JavaScript</strong>, and frameworks like <strong>React, Node.js, and Express</strong>.  
            I have hands-on experience working with <strong>MySQL, MongoDB</strong>, and full-stack web development using <strong>HTML, CSS, and PHP</strong>.  
          </p>

          <p className="text-xl leading-relaxed mb-8 text-gray-800">
            Constantly exploring new technologies, I aim to build <strong>scalable and impactful solutions</strong>.  
            Participating in <strong>hackathons</strong> and <strong>collaborative projects</strong> has strengthened my <strong>problem-solving skills</strong> and adaptability.  
            I am committed to continuous learning and innovation in software development.
          </p>

          <button
            onClick={handleDownload}
            className="flex items-center px-6 py-4 text-lg bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all shadow-md"
          >
            <Download className="mr-3" size={24} /> Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
