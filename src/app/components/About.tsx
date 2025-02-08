"use client";

import type React from "react";
import { User, Download } from "lucide-react";

const About: React.FC = () => {
  const handleDownload = () => {
    const details = `
    Gunti Ravikumar
    B.Tech Student at IIITDM Jabalpur
    
    Contact:
    Email: ravikumargunti837@gmail.com
    Phone: +918888888888
    
    Education:
    - B.Tech at IIITDM Jabalpur (2023-2027)
    - Intermediate at Narayana Junior College (2021-2023)
    - Secondary Education at MJPTBCWREIS (2017-2021)
    
    Technical Skills:
    - Problem Solving (90%)
    - Data Structures (85%)
    - Algorithms (80%)
    - Web Development (75%)
    
    Soft Skills:
    - Team Leadership (85%)
    - Project Management (80%)
    - Communication (90%)
    - Adaptability (85%)
    
    Projects:
    1. Field Grower
    - Agricultural optimization solution
    - Features: crop recommendation, weather monitoring, yield prediction
    
    2. Saviour
    - Disaster management system
    - Features: real-time alerts, resource management, emergency response coordination
    `;

    const blob = new Blob([details], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Gunti_Ravikumar_Details.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
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
