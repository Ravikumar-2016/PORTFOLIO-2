import type React from "react"
import Image from "next/image"
import { Github, Users, Database, Leaf, LineChart, MessageSquare, Shield } from "lucide-react"

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
    <div className="text-blue-600 mb-4 text-4xl">{icon}</div>
    <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-lg">{description}</p>
  </div>
)

const UserTypeCard = ({ title, features }: { title: string; features: string[] }) => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h3 className="text-2xl font-semibold mb-6 text-gray-800">{title}</h3>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-600 flex items-start text-lg">
          <span className="text-blue-600 mr-2 text-xl">•</span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
)

export default function FieldGrowerPage() {
  return (
    <main className="bg-gray-100">
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-900/60 z-10" />
        <Image
          src="https://agriculture.buzz/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fsaks7ubo%2Fproduction%2F1820ee712e3c18a2cb90c9e9bc06354b6919e487-1792x1024.webp%3Fw%3D1792%26q%3D100%26auto%3Dformat&w=3840&q=100"
          alt="Field Grower"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl font-bold mb-6 text-white">FieldGrower</h1>
          <p className="text-2xl max-w-3xl mx-auto text-gray-100 mb-8">
            Revolutionizing Agriculture through Technology
          </p>
          <a
            href="https://github.com/Ravikumar-2016/FieldGrower"
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
          <h2 className="text-4xl font-bold mb-10 text-blue-800 tracking-wide text-center">What is FieldGrower?</h2>

          {/* Introduction */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 mb-12">
            <p className="text-xl leading-relaxed text-gray-700">
              <strong className="text-gray-900">FieldGrower</strong> is a revolutionary agricultural platform that
              seamlessly connects farmers, laborers, and employees. By integrating technology-driven solutions, it
              enhances productivity, resource management, and real-time market insights, making agriculture smarter and
              more efficient.
            </p>
          </div>

          {/* How FieldGrower Works */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 mb-12">
            <h3 className="text-3xl font-bold mb-6 text-blue-800 flex items-center">
              <Users className="w-7 h-7 mr-2 text-blue-600" />
              How FieldGrower Works
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-4 text-lg">
              <li>
                <strong>Farmers:</strong> Manage crops, receive AI-driven suggestions, track market prices, and hire
                laborers.
              </li>
              <li>
                <strong>Laborers:</strong> Find job opportunities, track work history, and report issues seamlessly.
              </li>
              <li>
                <strong>Employees:</strong> Resolve user queries, update market trends, and oversee farm activities.
              </li>
              <li>
                <strong>Admins:</strong> Oversee platform operations, manage users, and analyze market trends.
              </li>
            </ul>
          </div>

          {/* The Impact of FieldGrower */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 mb-12">
            <h3 className="text-3xl font-bold mb-6 text-blue-800 flex items-center">
              <LineChart className="w-7 h-7 mr-2 text-blue-600" />
              The Impact of FieldGrower
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-4 text-lg">
              <li>
                <strong>For Farmers:</strong> Increased productivity, real-time market data, and effective labor
                management.
              </li>
              <li>
                <strong>For Laborers:</strong> Easy job access, work tracking, and issue resolution support.
              </li>
              <li>
                <strong>For Employees:</strong> Simplified query resolution, database management, and market monitoring.
              </li>
              <li>
                <strong>For Admins:</strong> Complete control over platform operations with data-driven insights.
              </li>
            </ul>
          </div>

          {/* Future Vision */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 mb-12">
            <h3 className="text-3xl font-bold mb-6 text-blue-800 flex items-center">
              <Leaf className="w-7 h-7 mr-2 text-blue-600" />
              Future Vision
            </h3>
            <p className="text-xl leading-relaxed mb-6 text-gray-700">
              FieldGrower is set to evolve with the latest technological advancements, making agriculture more
              intelligent and efficient. The future roadmap includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-4 text-lg">
              <li>
                <strong>AI & Machine Learning:</strong> Smart crop recommendations and predictive market analytics.
              </li>
              <li>
                <strong>IoT Integration:</strong> Real-time monitoring of crop health and soil conditions.
              </li>
              <li>
                <strong>Mobile App:</strong> A feature-rich mobile app for seamless user experience.
              </li>
              <li>
                <strong>Blockchain:</strong> Secure and transparent transactions for agricultural trade.
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Want to explore more? Check out our{" "}
              <a
                href="https://github.com/Ravikumar-2016/FieldGrower"
                className="text-blue-600 font-bold hover:underline"
              >
                GitHub repository
              </a>
              . The project is completed and will be deployed soon! 🚀
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-blue-800 text-center">Key Features</h2>
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
          <h2 className="text-4xl font-bold mb-10 text-blue-800 text-center">Platform Users</h2>
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
          <h2 className="text-4xl font-bold mb-10 text-blue-800 text-center">Technology Stack</h2>
          <div className="bg-white rounded-lg p-10 shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-6">Current Stack</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Frontend: HTML, CSS, JavaScript</li>
                  <li>• Backend: PHP</li>
                  <li>• Database: MySQL</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-6">Future Enhancements</h3>
                <ul className="space-y-2 text-gray-700">
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
          <h2 className="text-4xl font-bold mb-10 text-blue-800 text-center">Project Contributors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">Gunti Ravikumar</h3>
                <a
                  href="https://github.com/Ravikumar-2016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              </div>
              <p className="text-gray-600">Lead Developer & Project Owner</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">HarshKumar Palas</h3>
                <a
                  href="https://github.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              </div>
              <p className="text-gray-600">Backend Developer</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

