import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Cpu,
  BarChart,
  Settings,
  Layers,
  Shield,
  Server,
  Activity,
  HelpCircle,
  Code,
  Zap,
  Database,
  Cloud,
  LineChart,
  Clock,
  CheckCircle,
  RefreshCw,
} from "lucide-react"

export default function IoTSolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-10 pb-16 md:pt-14 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Empower Your Business with IoT Solutions</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Leverage IoT to speed up your business activities! DotCreative is the leading IoT service company
                offering innovative IoT solutions. With operational efficiency and real-time decision-making, we offer
                secure and customized IoT development services for Industrial applications, smart infrastructure for
                smart cities, and wearable technologies. At DotCreative, the next-generation technology combines
                integration and security to scale IoT platforms so that your business is fit for the tools and insights
                that outperform the competition.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">LET'S TALK</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/services/IOT-Page -Bannefr.png"
                  alt="IoT Solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive IoT Services</h2>
            <p className="text-xl text-muted-foreground">
              DotCreative offers a full suite of IoT services to meet the unique needs of every business. Our expertise
              spans over entire IoT lifecycle, ensuring your desired support for every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                icon: <HelpCircle className="h-8 w-8 text-primary" />,
                title: "IoT Consulting",
                description:
                  "Our professional team examines your current operations and identifies future potentials for IoT implementation. We collaborate to create a strategic roadmap that aligns with your business goals, guaranteeing you maximum IoT benefits.",
              },
              {
                number: "2",
                icon: <Code className="h-8 w-8 text-primary" />,
                title: "Custom IoT Development",
                description:
                  "DotCreative designs and develops personalized IoT applications for every business. From concept to deployment, our team emphasizes that every solution boosts functionality, improves user experience, and drives operational efficiency.",
              },
              {
                number: "3",
                icon: <Layers className="h-8 w-8 text-primary" />,
                title: "IoT Integration",
                description:
                  "Our integration services allow for easy integration with IoT solutions to your operational systems, ensuring all devices, platforms, and applications are combined and managed. This integration leverages overall productivity without disturbing your current operations.",
              },
              {
                number: "4",
                icon: <BarChart className="h-8 w-8 text-primary" />,
                title: "IoT Data Analytics",
                description:
                  "We take the sheer data generated from the IoT devices through our analytics capabilities and transform it into usable insights. These insights can then be used immediately to make data-driven decisions, improve the ongoing processes, and find new business opportunities.",
              },
              {
                number: "5",
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "IoT Security Solutions",
                description:
                  "We care about your data and devices. Full security protocols that DotCreative impose on you involve encryption and authentication protocols that deliver an immune IoT ecosystem, protecting your data and devices from any potential threats and vulnerabilities.",
              },
              {
                number: "6",
                icon: <Server className="h-8 w-8 text-primary" />,
                title: "Scalable IoT Platforms",
                description:
                  "Our IoT platforms are highly scalable, enabling you to amplify your IoT powers as your business grows. This scalability ensures that you adapt to growing market needs without having to start all over again.",
              },
              {
                number: "7",
                icon: <Activity className="h-8 w-8 text-primary" />,
                title: "Real-Time Monitoring",
                description:
                  "We provide constant monitoring solutions that keep track of your IoT system and monitor in real-time. This way, you have proactive management, which helps you pinpoint and rectify problems before it hits your operations.",
              },
              {
                number: "8",
                icon: <Settings className="h-8 w-8 text-primary" />,
                title: "Maintenance and Support",
                description:
                  "Our interest in your success doesn't end with the deployment. We sustain the maintenance and support services for your IoT solution so that they remain in step with time and effective, allowing you to stay in the core business.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl font-bold text-primary/20 mr-3">{service.number}</div>
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Showcasing Our IoT Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Our team of IoT specialists brings extensive experience and technical knowledge to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="h-10 w-10 text-primary" />,
                title: "End-to-end IoT solutions",
                description:
                  "This is a holistic service addressing the entire IoT lifecycle, including all aspects from initial consulting to strategy development through design, development, implementation, and ongoing support for optimal results for every detail in your project.",
              },
              {
                icon: <BarChart className="h-10 w-10 text-primary" />,
                title: "Real-Time Data Analytics",
                description:
                  "Our teams analyze massive amounts of data from IoT using advanced analytical tools and provide meaningful insights. That is what helps businesses make data-driven decisions, maximize the efficiency of their operations, and quickly address newer trends or issues.",
              },
              {
                icon: <Code className="h-10 w-10 text-primary" />,
                title: "Custom Application Development",
                description:
                  "We create custom-designed IoT applications that are tailored to address unique business needs and industrial challenges. We develop solutions that ease user experience, streamline processes, and give measurable results by understanding your unique needs.",
              },
              {
                icon: <Cloud className="h-10 w-10 text-primary" />,
                title: "Cloud Integration",
                description:
                  "We are cloud solution experts, and thus, your IoT environment is protected with safe and scalable data storage and processing capabilities. We design cloud strategies for better data management, access, and integration into other systems, ensuring uninterrupted operations.",
              },
              {
                icon: <Settings className="h-10 w-10 text-primary" />,
                title: "IoT Device Management",
                description:
                  "We offer the management and monitoring of an enormous range of connected devices. Our solutions optimise performance through connection reliability, security protocols, and easy access, thus letting you focus on your core business activities without any problems from the device level.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "Compliance and Standards",
                description:
                  "We keep abreast of industry regulation and standards, and our team ensures that all of your IoT solutions are compliant and secure. We stay informed on relevant guidelines and best practices, ensuring you minimize risk and keep your IoT ecosystem intact.",
              },
            ].map((expertise, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4 flex-shrink-0">{expertise.icon}</div>
                <h3 className="text-xl font-bold mb-3">{expertise.title}</h3>
                <p className="text-muted-foreground">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of IoT Implementation</h2>
            <p className="text-xl text-muted-foreground">
              Implementing IoT solutions can transform your business operations and drive significant improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Enhanced Operational Efficiency",
                description:
                  "Automate processes, reduce manual intervention, and optimize resource utilization to significantly improve operational efficiency.",
              },
              {
                icon: <LineChart className="h-10 w-10 text-primary" />,
                title: "Data-Driven Decision Making",
                description:
                  "Gain valuable insights from real-time data to make informed decisions that drive business growth and innovation.",
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Reduced Downtime",
                description:
                  "Implement predictive maintenance to identify and address potential issues before they cause system failures or downtime.",
              },
              {
                icon: <RefreshCw className="h-10 w-10 text-primary" />,
                title: "Improved Asset Utilization",
                description:
                  "Monitor and optimize the usage of your assets to maximize their lifespan and performance.",
              },
              {
                icon: <Database className="h-10 w-10 text-primary" />,
                title: "Enhanced Customer Experience",
                description:
                  "Deliver personalized and responsive services based on real-time data and insights about customer preferences and behaviors.",
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Increased Security",
                description:
                  "Implement robust security measures to protect your data, devices, and systems from potential threats and vulnerabilities.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4 flex-shrink-0">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">IoT Solutions Across Industries</h2>
            <p className="text-xl text-muted-foreground">
              We deliver tailored IoT solutions for various industries, addressing specific challenges and
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Manufacturing",
                description:
                  "Optimize production processes, implement predictive maintenance, and enhance quality control through IoT-enabled monitoring and automation.",
                image: "/images/services/IOT-Manufacturing.jpg",
              },
              {
                title: "Healthcare",
                description:
                  "Improve patient care, enhance medical device management, and streamline healthcare operations with connected devices and real-time monitoring.",
                image: "/images/services/IOT-Helathcare.jpg",
              },
              {
                title: "Smart Cities",
                description:
                  "Develop intelligent urban infrastructure, optimize resource utilization, and enhance public services through connected devices and data analytics.",
                image: "/images/services/Smart-City.jpg",
              },
              {
                title: "Retail",
                description:
                  "Transform customer experiences, optimize inventory management, and enhance supply chain operations with IoT-enabled solutions.",
                image: "/images/services/IOT-Retail.jpg",
              },
              {
                title: "Agriculture",
                description:
                  "Implement precision farming, optimize resource utilization, and enhance crop monitoring through IoT sensors and data analytics.",
                image: "/images/services/IOT-Agriculture.png",
              },
              {
                title: "Transportation & Logistics",
                description:
                  "Improve fleet management, enhance route optimization, and implement real-time tracking for improved efficiency and reduced costs.",
                image: "/images/services/IoT-in-Logistics.jpg",
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-background rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-48 relative">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our IoT Implementation Process</h2>
            <p className="text-xl text-muted-foreground">
              We follow a structured approach to deliver successful IoT solutions that meet your business objectives.
            </p>
          </div>

          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  title: "Discovery & Assessment",
                  description:
                    "We begin by understanding your business goals, challenges, and current infrastructure. Our team conducts a thorough assessment to identify opportunities where IoT can deliver the most value.",
                  image: "/placeholder.svg?height=300&width=500&query=business meeting technology",
                },
                {
                  title: "Strategy & Planning",
                  description:
                    "Based on our assessment, we develop a comprehensive IoT strategy and implementation roadmap. This includes defining success metrics, resource requirements, and timelines.",
                  image: "/placeholder.svg?height=300&width=500&query=strategic planning technology",
                },
                {
                  title: "Solution Design",
                  description:
                    "Our experts design a tailored IoT solution that addresses your specific needs and challenges. This includes hardware selection, software architecture, and integration planning.",
                  image: "/placeholder.svg?height=300&width=500&query=IoT solution design",
                },
                {
                  title: "Development & Integration",
                  description:
                    "We develop and integrate your IoT solution, ensuring seamless connectivity between devices, platforms, and existing systems. Our approach focuses on security, scalability, and performance.",
                  image: "/placeholder.svg?height=300&width=500&query=IoT development",
                },
                {
                  title: "Testing & Validation",
                  description:
                    "We rigorously test the IoT solution to ensure it meets all requirements and performs optimally in real-world scenarios. This includes security testing, performance validation, and user acceptance testing.",
                  image: "/placeholder.svg?height=300&width=500&query=technology testing",
                },
                {
                  title: "Deployment & Training",
                  description:
                    "We deploy your IoT solution and provide comprehensive training to ensure your team can effectively manage and utilize the new system. Our focus is on smooth transition and minimal disruption.",
                  image: "/placeholder.svg?height=300&width=500&query=technology deployment",
                },
                {
                  title: "Monitoring & Optimization",
                  description:
                    "Post-deployment, we continuously monitor the performance of your IoT solution and make necessary adjustments to optimize its effectiveness and efficiency.",
                  image: "/placeholder.svg?height=300&width=500&query=data monitoring technology",
                },
                {
                  title: "Ongoing Support & Maintenance",
                  description:
                    "We provide ongoing support and maintenance to ensure your IoT solution continues to deliver value and remains up-to-date with the latest technologies and security measures.",
                  image: "/placeholder.svg?height=300&width=500&query=IT support maintenance",
                },
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:order-last"}`}>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  <div className="hidden md:flex items-center justify-center z-10 bg-primary text-white rounded-full w-10 h-10 absolute left-1/2 transform -translate-x-1/2">
                    {index + 1}
                  </div>

                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:order-first"}`}>
                    {/* <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
                      <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business with IoT?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss how our IoT solutions can help you innovate, automate, and gain a competitive
              edge in your industry.
            </p>
            <Button asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
