import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ArrowLeft, AlertTriangle, Navigation, Users, Wifi, Database, Brain } from "lucide-react"

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
    <div className="text-blue-600 mb-4 text-4xl">{icon}</div>
    <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-lg">{description}</p>
  </div>
)

export default function SaviourPage() {
  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-900/60 z-10" />
        <Image
          src="https://img2.chinadaily.com.cn/images/202308/10/64d4501fa310352610ba7744.jpeg"
          alt="Natural Disaster Response"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl font-bold mb-6 text-white">Saviour Project</h1>
          <p className="text-2xl max-w-3xl mx-auto text-gray-100 mb-8">
            A comprehensive disaster management system designed to save lives through real-time monitoring and response
          </p>
          <a
            href="https://github.com/vikrantwiz02/Saviour2.O"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 text-lg"
          >
            <Github className="mr-2" />
            View Project on GitHub
          </a>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Project Overview */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-blue-800 text-center">Project Overview</h2>
          <div className="space-y-8">
            {/* What is Saviour? */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
              <h3 className="text-3xl font-bold mb-6 text-blue-700">What is Saviour?</h3>
              <p className="text-xl text-gray-700 mb-6">
                Saviour is an advanced disaster management platform designed to save lives during natural disasters. It
                integrates cutting-edge technology to provide real-time solutions for disaster preparedness, response,
                and recovery.
              </p>
              <ul className="list-disc list-inside ml-4 text-xl text-gray-600 space-y-4">
                <li>
                  <strong>AI/ML-Powered Early Warnings:</strong> Predicts disasters and alerts communities in real-time.
                </li>
                <li>
                  <strong>Emergency Navigation:</strong> Guides people to safe zones with optimized routes.
                </li>
                <li>
                  <strong>Peer-to-Peer Support:</strong> Enables communities to assist each other during crises.
                </li>
                <li>
                  <strong>Offline Mesh Networking:</strong> Ensures communication even when traditional networks fail.
                </li>
                <li>
                  <strong>Web & Mobile Integration:</strong> Provides seamless access to disaster management tools.
                </li>
              </ul>
            </div>

            {/* Why Saviour? */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
              <h3 className="text-3xl font-bold mb-6 text-blue-700">Why Saviour?</h3>
              <p className="text-xl text-gray-700 mb-6">
                Traditional disaster management systems often fail during emergencies, leading to chaos, panic, and loss
                of life. Saviour addresses these challenges by leveraging modern technology to provide reliable and
                efficient solutions.
              </p>
              <ul className="list-disc list-inside ml-4 text-xl text-gray-600 space-y-4">
                <li>
                  <strong>Real-Time Alerts:</strong> Keeps communities informed about impending disasters.
                </li>
                <li>
                  <strong>Safe Navigation:</strong> Helps people reach shelters and safe zones quickly.
                </li>
                <li>
                  <strong>Offline Communication:</strong> Ensures connectivity in remote or disaster-struck areas.
                </li>
                <li>
                  <strong>AI-Driven Forecasting:</strong> Improves disaster preparedness with accurate predictions.
                </li>
                <li>
                  <strong>Resource Management:</strong> Tracks and distributes emergency supplies efficiently.
                </li>
              </ul>
            </div>
          </div>

          {/* GitHub Repository Link */}
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700 mb-6">
              Join us in making the world safer. Explore the project on{" "}
              <a href="https://github.com/vikrantwiz02/Saviour2.O" className="text-blue-600 hover:underline">
                GitHub
              </a>{" "}
              and contribute to this life-saving initiative.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-blue-800 text-center">Core Capabilities</h2>
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
          <h2 className="text-4xl font-bold mb-10 text-blue-800 text-center">Technical Architecture</h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Frontend Technologies</h3>
                <ul className="list-disc list-inside ml-4 text-gray-600 space-y-2 text-lg">
                  <li>React.js with Next.js for server-side rendering</li>
                  <li>TailwindCSS for responsive design</li>
                  <li>WebSocket for real-time updates</li>
                  <li>Progressive Web App capabilities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Backend Infrastructure</h3>
                <ul className="list-disc list-inside ml-4 text-gray-600 space-y-2 text-lg">
                  <li>Node.js with Express for API services</li>
                  <li>MongoDB for scalable data storage</li>
                  <li>Redis for caching and real-time data</li>
                  <li>Machine Learning models for prediction</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Mobile Integration</h3>
                <ul className="list-disc list-inside ml-4 text-gray-600 space-y-2 text-lg">
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
          <h2 className="text-4xl font-bold mb-10 text-blue-800 text-center">Project Contributors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">VikrantKumar</h3>
                <a
                  href="https://github.com/vikrantwiz02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-600 text-lg">Technical Lead</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">Gunti Ravikumar</h3>
                <a
                  href="https://github.com/Ravikumar-2016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-600 text-lg">Full Stack Developer</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">Harshkumar Palas</h3>
                <a
                  href="https://github.com/harshpalas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-600 text-lg">Backend Developer</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-8 text-blue-800">Join the Mission</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Help us make the world safer by contributing to the Saviour project. Check out our GitHub repository for
            detailed documentation and ways to get involved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://github.com/vikrantwiz02/Saviour2.O"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-lg"
            >
              <Github className="mr-2" />
              View Repository
            </a>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all text-lg"
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

