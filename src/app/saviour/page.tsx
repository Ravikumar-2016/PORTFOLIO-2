import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ArrowLeft, AlertTriangle, Navigation, Users, Wifi, Database, Brain } from "lucide-react"

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-gray-800/80 p-6 rounded-lg hover:bg-gray-700/80 transition-all transform hover:-translate-y-1">
    <div className="text-teal-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
)

export default function SaviourPage() {
  return (
    <main className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://img2.chinadaily.com.cn/images/202308/10/64d4501fa310352610ba7744.jpeg"
          alt="Natural Disaster Response"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl font-bold mb-6 text-white">Saviour Project</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 mb-8">
            A comprehensive disaster management system designed to save lives through real-time monitoring and response
          </p>
          <a
            href="https://github.com/vikrantwiz02/Saviour2.O"
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
        {/* Project Overview */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white">Project Overview</h2>
          <div className="bg-gray-800/80 p-8 rounded-lg">
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              The Saviour project is a cutting-edge disaster management system that leverages modern technology to save
              lives during natural disasters. Our system provides real-time monitoring, early warnings, and coordinated
              response capabilities to help communities prepare for and respond to emergencies effectively.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Visit our{" "}
              <a href="https://github.com/vikrantwiz02/Saviour2.O" className="text-teal-400 hover:underline">
                GitHub repository
              </a>{" "}
              to explore the complete codebase, documentation, and contribute to this life-saving initiative.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<AlertTriangle className="w-8 h-8" />}
              title="Early Warning System"
              description="Advanced AI-powered system that predicts and alerts communities about impending natural disasters"
            />
            <FeatureCard
              icon={<Navigation className="w-8 h-8" />}
              title="Emergency Navigation"
              description="Real-time routing system that guides people to the nearest safe zones and emergency facilities"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Community Network"
              description="Peer-to-peer support system enabling communities to coordinate and assist each other during crises"
            />
            <FeatureCard
              icon={<Database className="w-8 h-8" />}
              title="Resource Management"
              description="Centralized system for tracking and distributing emergency supplies and medical resources"
            />
            <FeatureCard
              icon={<Wifi className="w-8 h-8" />}
              title="Offline Operations"
              description="Mesh networking capability ensuring communication even when traditional networks fail"
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="Smart Analytics"
              description="Data-driven insights for better disaster preparedness and response optimization"
            />
          </div>
        </section>

{/* Technical Details */}
<section className="mb-20">
  <h2 className="text-4xl font-bold mb-8 text-white">Technical Architecture</h2>
  <div className="bg-gray-800/80 rounded-lg p-8">
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-teal-400 mb-4">Frontend Technologies</h3>
        <ul className="list-disc list-inside ml-4 text-gray-300 space-y-2">
          <li>React.js with Next.js for server-side rendering</li>
          <li>TailwindCSS for responsive design</li>
          <li>WebSocket for real-time updates</li>
          <li>Progressive Web App capabilities</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-teal-400 mb-4">Backend Infrastructure</h3>
        <ul className="list-disc list-inside ml-4 text-gray-300 space-y-2">
          <li>Node.js with Express for API services</li>
          <li>MongoDB for scalable data storage</li>
          <li>Redis for caching and real-time data</li>
          <li>Machine Learning models for prediction</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-teal-400 mb-4">Mobile Integration</h3>
        <ul className="list-disc list-inside ml-4 text-gray-300 space-y-2">
          <li>Native Android app using Kotlin</li>
          <li>Location-based services integration</li>
          <li>Push notification system</li>
          <li>Offline data synchronization</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Contributors */}
<section className="mb-20">
  <h2 className="text-4xl font-bold mb-8 text-white">Project Contributors</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="bg-gray-800/80 p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Vikrant</h3>
        <a
          href="https://github.com/vikrantwiz02"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
      <p className="text-gray-300">Technical Lead</p>
    </div>

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
          <h2 className="text-4xl font-bold mb-8 text-white">Join the Mission</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Help us make the world safer by contributing to the Saviour project. Check out our GitHub repository for
            detailed documentation and ways to get involved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://github.com/vikrantwiz02/Saviour2.O"
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

