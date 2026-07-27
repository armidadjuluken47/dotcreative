import Image from "next/image"
import Link from "next/link"
import { Smartphone, Globe, FileText, Cloud, RefreshCw, Code, Brain, Cpu, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Service items with icons
const serviceItems = [
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    description:
      "We build native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
    image: "/images/services/mobile-app-benefits.webp",
  },
  {
    name: "Web App Development",
    href: "/services/web-app-development",
    icon: <Globe className="h-10 w-10 text-primary" />,
    description:
      "Our web applications are responsive, scalable, and built with modern frameworks to ensure optimal performance and user engagement.",
    image: "/images/services/web-service.png",
  },
  {
    name: "Project Consultancy",
    href: "/services/project-consultancy",
    icon: <FileText className="h-10 w-10 text-primary" />,
    description:
      "Our expert consultants provide strategic guidance to help you navigate complex technology decisions and optimize your project outcomes.",
    image: "/images/services/project-management-consultant-service.png",
  },
  {
    name: "SaaS Development",
    href: "/services/saas-development",
    icon: <Cloud className="h-10 w-10 text-primary" />,
    description:
      "We create custom software-as-a-service solutions that help businesses streamline operations and deliver value to their customers.",
    image: "/images/services/saas.png",
  },
  {
    name: "Application Modernization",
    href: "/services/application-modernization",
    icon: <RefreshCw className="h-10 w-10 text-primary" />,
    description:
      "Transform your legacy systems into modern, cloud-native applications that are scalable, secure, and future-proof.",
    image: "/images/services/app-modern.png",
  },
  {
    name: "API Development",
    href: "/services/api-development",
    icon: <Code className="h-10 w-10 text-primary" />,
    description:
      "We design and develop robust APIs that enable seamless integration between systems and unlock new business capabilities.",
    image: "/images/services/api.png",
  },
  {
    name: "AI Development",
    href: "/services/ai-development",
    icon: <Brain className="h-10 w-10 text-primary" />,
    description:
      "Our AI services include consulting, implementation, and integration of machine learning and artificial intelligence solutions.",
    image: "/images/services/ai.png",
  },
  {
    name: "IoT Solutions",
    href: "/services/iot-solutions",
    icon: <Cpu className="h-10 w-10 text-primary" />,
    description:
      "We build connected device ecosystems and platforms that enable smart, data-driven decision making for businesses.",
    image: "/images/services/iot.png",
  },
  {
    name: "Cybersecurity Solutions",
    href: "/services/cybersecurity",
    icon: <Shield className="h-10 w-10 text-primary" />,
    description:
      "Comprehensive security solutions to protect your digital assets, data, and infrastructure from evolving cyber threats.",
    image: "/images/services/cybersec2.png",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We offer a comprehensive range of technology services to help businesses innovate, transform, and succeed
              in the digital era.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="bg-background rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center text-primary font-medium group-hover:underline">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-muted-foreground">
              We follow a proven methodology to deliver successful outcomes for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We start by understanding your business goals, requirements, and challenges.",
              },
              {
                number: "02",
                title: "Planning",
                description: "Our team creates a detailed roadmap and technical strategy for your project.",
              },
              {
                number: "03",
                title: "Development",
                description: "We build your solution using agile methodologies and best practices.",
              },
              {
                number: "04",
                title: "Delivery & Support",
                description: "We deploy your solution and provide ongoing maintenance and support.",
              },
            ].map((step, index) => (
              <div key={index} className="relative p-6 border border-border rounded-xl bg-background">
                <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss how we can help you achieve your technology goals.
            </p>
            <Button asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
