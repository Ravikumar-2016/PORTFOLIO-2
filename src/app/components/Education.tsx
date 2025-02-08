"use client"

import { useState } from "react"
import { School, BookOpen } from "lucide-react"
import type { Education } from "@/app/types"
import { motion } from "framer-motion"
import type React from "react" // Added import for React

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

const EducationItem: React.FC<Education & { index: number; lastItem: boolean }> = ({
  institution,
  period,
  description,
  index,
  lastItem,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative flex items-start space-x-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <BookOpen size={24} className="text-white" />
        </motion.div>
        {!lastItem && (
          <motion.div
            className="w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
          ></motion.div>
        )}
      </div>

      {/* Content */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full border border-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{institution}</h3>
        <p className="text-lg text-purple-600 font-semibold mb-2">{period}</p>
        <p className="text-gray-600">{description}</p>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold mb-12 flex items-center justify-center text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <School className="mr-3 text-purple-600" size={36} /> Educational Journey
        </motion.h2>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <EducationItem key={index} index={index} lastItem={index === educationData.length - 1} {...edu} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

