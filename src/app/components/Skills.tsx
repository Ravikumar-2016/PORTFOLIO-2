import type React from "react"
import { Award, Code, User } from "lucide-react"
import type { Skill } from "@/app/types";


const technicalSkills: Skill[] = [
  { name: "Problem Solving", level: 90 },
  { name: "Data Structures", level: 85 },
  { name: "Algorithms", level: 80 },
  { name: "Web Development", level: 75 },
]

const softSkills: Skill[] = [
  { name: "Team Leadership", level: 85 },
  { name: "Project Management", level: 80 },
  { name: "Communication", level: 90 },
  { name: "Adaptability", level: 85 },
]

const SkillBar: React.FC<Skill> = ({ name, level }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-gray-300">{name}</span>
      <span className="text-teal-400">{level}%</span>
    </div>
    <div className="h-2 bg-gray-700 rounded-full">
      <div
        className="h-full bg-teal-500 rounded-full transition-all duration-1000"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
)

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2 text-white">
          <Award className="inline-block text-teal-400" /> Skills & Expertise
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                <Code className="text-teal-400" /> Technical Skills
              </h3>
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                <User className="text-teal-400" /> Soft Skills
              </h3>
              {softSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

