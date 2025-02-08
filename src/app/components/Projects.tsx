import type React from "react";
import { Code, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Project } from '@/app/types';
import Image from 'next/image';

const projects: Project[] = [
  {
    title: "Field Grower",
    description:
      "Agricultural optimization solution providing crop recommendations, weather monitoring, and yield predictions to help farmers maximize their productivity.",
    imageUrl:
      "https://agriculture.buzz/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fsaks7ubo%2Fproduction%2F1820ee712e3c18a2cb90c9e9bc06354b6919e487-1792x1024.webp%3Fw%3D1792%26q%3D100%26auto%3Dformat&w=3840&q=100",
  },
  {
    title: "Saviour",
    description:
      "Disaster management system featuring real-time alerts, resource management, and emergency response coordination.",
    imageUrl: "https://img2.chinadaily.com.cn/images/202308/10/64d4501fa310352610ba7744.jpeg",
  },
];

const ProjectCard: React.FC<Project> = ({ title, description, imageUrl }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
    <div className="relative w-full h-56">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-t-2xl"
      />
    </div>
    <div className="p-6">
      <h3 className="text-3xl font-bold text-blue-700 mb-3">{title}</h3>
      <p className="text-gray-600 text-lg mb-4">{description}</p>
      <Link
        href={`/${title.toLowerCase().replace(" ", "-")}`}
        className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200 font-medium"
      >
        Learn More <ExternalLink className="ml-2" size={18} />
      </Link>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12 flex items-center text-blue-800">
          <Code className="mr-3 text-blue-600" size={36} /> Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
