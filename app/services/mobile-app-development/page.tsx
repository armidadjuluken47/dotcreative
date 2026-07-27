import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export default function MobileAppDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile App Development Services</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We create innovative, user-friendly mobile applications that help businesses connect with their
                customers and streamline operations. Our expert team delivers high-performance apps for iOS and Android
                platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Get a Free Consultation</Link>
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
                  src="/images/services/mobile-app-hero.webp"
                  alt="Mobile App Development"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our Mobile App Development</h2>
            <p className="text-xl text-muted-foreground">
              Our mobile applications are designed to provide maximum value to your business and users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/services/mobile-app-benefits.webp"
                alt="Mobile App Benefits"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Enhanced Customer Engagement",
                  description:
                    "Mobile apps provide direct communication channels with your customers, increasing engagement and loyalty.",
                },
                {
                  title: "Improved Brand Recognition",
                  description:
                    "A well-designed mobile app strengthens your brand identity and increases visibility in the digital marketplace.",
                },
                {
                  title: "Increased Revenue Streams",
                  description:
                    "Mobile apps open new revenue opportunities through in-app purchases, subscriptions, and premium features.",
                },
                {
                  title: "Valuable Customer Insights",
                  description:
                    "Collect valuable data on user behavior and preferences to inform business decisions and product improvements.",
                },
                {
                  title: "Competitive Advantage",
                  description:
                    "Stay ahead of competitors by offering convenient mobile access to your products and services.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mobile App Development Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive mobile app development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "iOS App Development",
                description:
                  "Native iOS applications built for iPhone and iPad using Swift and SwiftUI, optimized for performance and user experience.",
                image: "/images/services/ios-development.png",
              },
              {
                title: "Android App Development",
                description:
                  "Custom Android applications developed with Kotlin and Jetpack Compose, designed to work across the diverse Android ecosystem.",
                image: "/images/services/android-development.png",
              },
              {
                title: "Cross-Platform Development",
                description:
                  "Cost-effective solutions using React Native and Flutter to build apps that work seamlessly across multiple platforms.",
                image: "/images/services/cross-platform.png",
              },
              {
                title: "UI/UX Design",
                description:
                  "Intuitive and engaging user interfaces designed specifically for mobile, following platform guidelines and best practices.",
                image: "/images/services/mobile-ui-design.png",
              },
              {
                title: "App Testing & QA",
                description:
                  "Comprehensive testing across devices and scenarios to ensure your app is bug-free and performs reliably.",
                image: "/images/services/app-testing.png",
              },
              {
                title: "App Maintenance & Support",
                description:
                  "Ongoing support, updates, and performance optimization to keep your app running smoothly and up-to-date.",
                image: "/images/services/app-maintenance.png",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-4 h-48 relative rounded-lg overflow-hidden">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground flex-grow">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mobile App Development Process</h2>
            <p className="text-xl text-muted-foreground">
              A structured approach to delivering high-quality mobile applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Discovery & Planning",
                description:
                  "We start by understanding your business goals, target audience, and app requirements to create a comprehensive development plan.",
                image: "/images/services/discovery-planning.png",
              },
              {
                number: "02",
                title: "UI/UX Design",
                description:
                  "Our designers create intuitive, engaging interfaces and user experiences tailored specifically for mobile platforms.",
                image: "/images/services/ui-ux-design.webp",
              },
              {
                number: "03",
                title: "Development",
                description:
                  "Our expert developers build your app using the latest technologies and best practices for your chosen platform(s).",
                image: "/images/services/development.png",
              },
              {
                number: "04",
                title: "Testing",
                description:
                  "Rigorous testing across devices and scenarios ensures your app is bug-free and performs reliably in all conditions.",
                image: "/images/services/testing.jpg",
              },
              {
                number: "05",
                title: "Deployment",
                description:
                  "We handle the submission process to app stores, ensuring compliance with all guidelines and requirements.",
                image: "/images/services/deployment.jpg",
              },
              {
                number: "06",
                title: "Maintenance & Updates",
                description:
                  "Ongoing support, performance monitoring, and regular updates keep your app running smoothly and up-to-date.",
                image: "/images/services/maintenance.jpg",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="text-3xl font-bold text-primary/20 mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="mt-auto h-40 relative rounded-lg overflow-hidden">
                  <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Mobile Development Team</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Our team of experienced mobile developers, designers, and QA specialists work together to deliver
                exceptional mobile applications that exceed expectations.
              </p>
              <ul className="space-y-4">
                {[
                  "Senior iOS and Android developers with 5+ years of experience",
                  "UI/UX designers specialized in mobile interfaces",
                  "QA engineers focused on mobile testing across devices",
                  "Project managers with agile development expertise",
                  "DevOps specialists for continuous integration and delivery",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="ml-3">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
                <Link href="/contact">Work With Our Team</Link>
              </Button>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/services/maintenance.jpg"
                alt="Mobile Development Team"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss your mobile app project and get a free consultation with our experts.
            </p>
            <Button asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
