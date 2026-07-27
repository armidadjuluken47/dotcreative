import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export default function WebAppDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Application Development Services</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We create powerful, scalable web applications that help businesses streamline operations, engage
                customers, and drive growth. Our expert team delivers custom solutions tailored to your unique needs.
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
                  src="/images/services/web-development-banner.jpg"
                  alt="Web Application Development"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Application Development Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Web Application Development",
                description:
                  "Tailored web applications built from the ground up to address your specific business challenges and requirements.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                ),
              },
              {
                title: "Progressive Web Applications (PWAs)",
                description:
                  "Modern web apps that offer app-like experiences with offline capabilities, push notifications, and home screen installation.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 10h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M8 14h.01"></path>
                  </svg>
                ),
              },
              {
                title: "Enterprise Web Solutions",
                description:
                  "Robust, secure, and scalable web applications designed to support complex business processes and large user bases.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M20 6v14H6a2 2 0 0 1-2-2V6"></path>
                    <path d="M16 2H4a2 2 0 0 0-2 2v12"></path>
                    <path d="M12 12h6"></path>
                    <path d="M12 16h6"></path>
                    <path d="M12 8h6"></path>
                  </svg>
                ),
              },
              {
                title: "E-commerce Solutions",
                description:
                  "Feature-rich online stores with secure payment processing, inventory management, and seamless customer experiences.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                ),
              },
              {
                title: "SaaS Application Development",
                description:
                  "Cloud-based software-as-a-service applications with subscription models, multi-tenancy, and scalable architecture.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                  </svg>
                ),
              },
              {
                title: "Web Portal Development",
                description:
                  "Secure, user-friendly portals for customers, partners, or employees to access information and services.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                ),
              },
              {
                title: "API Development & Integration",
                description:
                  "Custom API development and third-party integrations to connect your web application with other systems and services.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                ),
              },
              {
                title: "Web Application Modernization",
                description:
                  "Transform legacy web applications into modern, responsive, and feature-rich solutions using the latest technologies.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                    <path d="M12 8v-2"></path>
                    <path d="M12 18v-2"></path>
                    <path d="M8 12h-2"></path>
                    <path d="M18 12h-2"></path>
                    <path d="m15 9-1 1"></path>
                    <path d="m9 15-1 1"></path>
                    <path d="m15 15-1-1"></path>
                    <path d="m9 9-1-1"></path>
                  </svg>
                ),
              },
              {
                title: "UI/UX Design for Web Applications",
                description:
                  "User-centered design that creates intuitive, engaging, and accessible web application interfaces.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 22v-2"></path>
                    <path d="m17 20.66-1-1.73"></path>
                    <path d="M11 10.27 7 3.34"></path>
                    <path d="m20.66 17-1.73-1"></path>
                    <path d="m3.34 7 1.73 1"></path>
                    <path d="M14 12h8"></path>
                    <path d="M2 12h8"></path>
                    <path d="m20.66 7-1.73 1"></path>
                    <path d="m3.34 17 1.73-1"></path>
                    <path d="m17 3.34-1 1.73"></path>
                    <path d="m11 13.73-4 6.93"></path>
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4 flex-shrink-0">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Step-by-Step Process</h2>
            <p className="text-xl text-muted-foreground">
              A structured approach to delivering high-quality web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery & Requirements",
                description:
                  "We start by understanding your business goals, target audience, and application requirements.",
               
              },
              {
                number: "02",
                title: "Planning & Architecture",
                description:
                  "Our team creates a detailed project plan and designs the technical architecture for your web application.",
                
              },
              {
                number: "03",
                title: "UI/UX Design",
                description:
                  "We design intuitive user interfaces and seamless user experiences tailored to your target audience.",
                
              },
              {
                number: "04",
                title: "Development",
                description:
                  "Our developers build your web application using the most appropriate technologies and frameworks.",
                
              },
              {
                number: "05",
                title: "Quality Assurance",
                description:
                  "Rigorous testing ensures your web application is bug-free, secure, and performs well under load.",
                
              },
              {
                number: "06",
                title: "Deployment",
                description: "We deploy your web application to your chosen hosting environment with minimal downtime.",
               
              },
              {
                number: "07",
                title: "Training & Knowledge Transfer",
                description:
                  "We provide comprehensive training to ensure your team can effectively use and manage the application.",
                
              },
              {
                number: "08",
                title: "Post-launch Assistance and Maintenance",
                description:
                  "Ongoing support, monitoring, and updates keep your web application running smoothly and securely.",
                
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="text-3xl font-bold text-primary/20 mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/modern-web-development.png"
                alt="Web Application Benefits"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of Our Web Application Development</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Our web applications are designed to provide maximum value to your business and users
              </p>
              <ul className="space-y-4">
                {[
                  "Scalable architecture that grows with your business",
                  "Responsive design that works across all devices",
                  "Optimized performance for fast loading times",
                  "Robust security to protect sensitive data",
                  "Intuitive user interfaces that enhance user experience",
                  "Seamless integration with existing systems",
                  "Comprehensive analytics to track user behavior",
                  "Regular updates and maintenance to ensure longevity",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="ml-3">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Web Application?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss your web application project and get a free consultation with our experts.
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
