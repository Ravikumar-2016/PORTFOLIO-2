"use client"

import type React from "react"
import { Mail, Phone, MapPin } from "lucide-react"

const ContactItem = ({ icon: Icon, text, href }: { icon: React.ElementType; text: string; href?: string }) => (
  <div className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors duration-300">
    <Icon className="w-6 h-6 text-teal-500" />
    {href ? (
      <a href={href} className="hover:underline text-lg font-medium">
        {text}
      </a>
    ) : (
      <span className="text-lg font-medium">{text}</span>
    )}
  </div>
)

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 text-center">
            <h2 className="text-4xl font-extrabold text-white">Get in Touch</h2>
            <p className="text-lg text-gray-100 mt-2">I&rsquo;d love to hear from you</p>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-10">
            <h3 className="text-2xl font-semibold mb-6 border-b pb-3 border-gray-200">Contact Information</h3>
            <div className="space-y-6">
              <ContactItem icon={Mail} text="ravikumargunti837@gmail.com" href="mailto:ravikumargunti837@gmail.com" />
              <ContactItem icon={Phone} text="+91 8888888888" href="tel:+918888888888" />
              <ContactItem icon={MapPin} text="IIITDM Jabalpur" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact