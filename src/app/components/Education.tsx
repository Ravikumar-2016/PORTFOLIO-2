import type React from "react"
import { School, BookOpen } from "lucide-react"
import type { Education } from '@/app/types'

const educationData: Education[] = [
  {
    institution: "B.Tech at IIITDM Jabalpur",
    period: "2023-2027",
    description: "Pursuing Bachelor's in Technology",
  },
  {
    institution: "Narayana Junior College",
    period: "2021-2023",
    description: "Intermediate Education",
  },
  {
    institution: "MJPTBCWREIS",
    period: "2017-2021",
    description: "Secondary Education",
  },
]

const EducationItem: React.FC<Education> = ({ institution, period, description }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
      <BookOpen size={24} className="text-white" />
    </div>
    <div className="ml-4">
      <h3 className="text-xl font-bold text-white">{institution}</h3>
      <p className="text-teal-400">{period}</p>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  </div>
)

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center text-white">
          <School className="mr-2 text-teal-400" /> Education
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

