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
  <div className="bg-gray-800/80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="relative w-full h-48">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        layout="fill" // This ensures the image fills the container's height and width
        objectFit="cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link
        href={`/${title.toLowerCase().replace(" ", "-")}`}
        className="inline-flex items-center text-teal-400 hover:text-teal-300"
      >
        Learn More <ExternalLink className="ml-1" size={16} />
      </Link>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center text-white">
          <Code className="mr-2 text-teal-400" /> Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
