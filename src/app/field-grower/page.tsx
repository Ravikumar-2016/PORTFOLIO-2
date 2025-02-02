import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ArrowLeft, Users, Database, Leaf, LineChart, MessageSquare, Shield } from "lucide-react"

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-gray-800/80 p-6 rounded-lg hover:bg-gray-700/80 transition-all transform hover:-translate-y-1">
    <div className="text-teal-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
)

const UserTypeCard = ({ title, features }: { title: string; features: string[] }) => (
  <div className="bg-gray-800/80 p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-300 flex items-start">
          <span className="text-teal-400 mr-2">•</span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
)

export default function FieldGrowerPage() {
  return (
    <main className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://agriculture.buzz/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fsaks7ubo%2Fproduction%2F1820ee712e3c18a2cb90c9e9bc06354b6919e487-1792x1024.webp%3Fw%3D1792%26q%3D100%26auto%3Dformat&w=3840&q=100"
          alt="Field Grower"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl font-bold mb-6 text-white">FieldGrower</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 mb-8">Revolutionizing Agriculture through Technology</p>
          <a
            href="https://github.com/Ravikumar-2016/FieldGrower"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all transform hover:-translate-y-1"
          >
            <Github className="mr-2" />
            View Project on GitHub
          </a>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white">What is FieldGrower?</h2>
          <div className="bg-gray-800/80 p-8 rounded-lg">
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              FieldGrower is an innovative agricultural platform designed to bridge the gap between farmers, laborers,
              and employees by leveraging technology. It serves as a centralized hub where farmers can manage their
              crops, access real-time market data, and hire laborers, while laborers can find work opportunities and
              report issues.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Visit our{" "}
              <a href="https://github.com/Ravikumar-2016/FieldGrower" className="text-teal-400 hover:underline">
                GitHub repository
              </a>{" "}
              to explore the complete codebase and documentation. The project is completed and will be deployed soon!
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Leaf className="w-8 h-8" />}
              title="Crop Management"
              description="Comprehensive system for managing crops, fertilizers, and pesticides with smart recommendations"
            />
            <FeatureCard
              icon={<LineChart className="w-8 h-8" />}
              title="Market Insights"
              description="Real-time market prices and trends to help farmers make informed decisions"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Labor Management"
              description="Platform for farmers to find and hire laborers, and for laborers to find work"
            />
            <FeatureCard
              icon={<Database className="w-8 h-8" />}
              title="Resource Tracking"
              description="Efficient tracking and management of agricultural resources and inventory"
            />
            <FeatureCard
              icon={<MessageSquare className="w-8 h-8" />}
              title="Query Resolution"
              description="Dedicated system for reporting and resolving agricultural queries"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Admin Controls"
              description="Comprehensive admin panel for platform management and oversight"
            />
          </div>
        </section>

        {/* User Types */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white">Platform Users</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <UserTypeCard
              title="For Farmers"
              features={[
                "Manage crops and receive tailored recommendations",
                "Access real-time market prices",
                "Find and hire laborers",
                "Track work history",
                "Report issues and get solutions",
              ]}
            />
            <UserTypeCard
              title="For Laborers"
              features={[
                "Find work opportunities",
                "Apply for farm work",
                "Track work history",
                "Report issues",
                "Get support and assistance",
              ]}
            />
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white">Technology Stack</h2>
          <div className="bg-gray-800/80 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-teal-400 mb-4">Current Stack</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Frontend: HTML, CSS, JavaScript</li>
                  <li>• Backend: PHP</li>
                  <li>• Database: MySQL</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-400 mb-4">Future Enhancements</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• TypeScript implementation</li>
                  <li>• Tailwind CSS integration</li>
                  <li>• MongoDB migration</li>
                  <li>• Mobile app development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contributors */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white">Project Contributors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/80 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Ravikumar</h3>
                <a
                  href="https://github.com/Ravikumar-2016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300">Full Stack Developer</p>
            </div>
            <div className="bg-gray-800/80 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Harsh</h3>
                <a
                  href="https://github.com/harshpalas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300">Backend Developer</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white">Get Involved</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Check out our GitHub repository to explore the project. The platform is completed and will be deployed soon!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://github.com/Ravikumar-2016/FieldGrower"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all"
            >
              <Github className="mr-2" />
              View Repository
            </a>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all"
            >
              <ArrowLeft className="mr-2" />
              Back to Portfolio
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
