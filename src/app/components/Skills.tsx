import type React from "react";
import { Award, Code, User } from "lucide-react";
import type { Skill } from "@/app/types";

const technicalSkills: Skill[] = [
  { name: "Problem Solving", level: 90 },
  { name: "Data Structures", level: 85 },
  { name: "Algorithms", level: 80 },
  { name: "Web Development", level: 75 },
];

const softSkills: Skill[] = [
  { name: "Team Leadership", level: 85 },
  { name: "Project Management", level: 80 },
  { name: "Communication", level: 90 },
  { name: "Adaptability", level: 85 },
];

const SkillBar: React.FC<Skill> = ({ name, level }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-gray-800 text-lg font-semibold">{name}</span>
      <span className="text-teal-700 text-lg font-bold">{level}%</span>
    </div>
    <div className="h-3 bg-gray-300 rounded-full">
      <div
        className="h-full bg-teal-500 rounded-full transition-all duration-1000"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-14 text-center flex items-center justify-center gap-3 text-gray-900">
          <Award className="inline-block text-teal-600" size={40} /> Skills & Expertise
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800">
                <Code className="text-teal-600" size={32} /> Technical Skills
              </h3>
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800">
                <User className="text-teal-600" size={32} /> Soft Skills
              </h3>
              {softSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;