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
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center text-white">
            <User className="mr-2 text-teal-400" /> About Me
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
  I am Gunti Ravikumar, a B.Tech Computer Science and Engineering student at IIITDM Jabalpur.  
  Passionate about software development, I specialize in web technologies and have a growing interest in cloud computing and AI-driven applications.  
  My skills include Python, Java, C, C++, JavaScript, and frameworks like React, Node.js, and Express.  
  I have experience working with MySQL, MongoDB, and full-stack web development using HTML, CSS, and PHP.
</p>

<p className="text-lg leading-relaxed mb-6 text-gray-300">
  Constantly exploring new technologies, I aim to build scalable and impactful solutions.  
  Participating in hackathons and collaborative projects has strengthened my problem-solving skills and adaptability.  
  I am committed to continuous learning and innovation in software development.
</p>

          <button
            onClick={handleDownload}
            className="flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            <Download className="mr-2" /> Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
