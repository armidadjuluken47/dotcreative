import Image from "next/image"
import Link from "next/link"
import { Code, Database, Brain, Rocket, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollToTop from "@/components/scroll-to-top"
import NewsletterPopup from "@/components/newsletter-popup"
import HeroSlider from "@/components/hero-slider"
import PartnersMarquee from "@/components/partners-marquee"
import { ServiceCard } from "@/components/service-card"
import ExperienceSection from "@/components/experience-section"
import TestimonialsSection from "@/components/testimonials-section"
import GetInTouchSection from "@/components/get-in-touch-section"

export default function Home() {
  return (
    <>
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Partners Marquee Section */}
      <PartnersMarquee />

      {/* Core Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive IT solutions tailored to meet the unique needs of your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Enterprise Resource Planning"
              description="Comprehensive ERP solutions including ERPNext and Odoo to streamline your business operations. We not only implement these systems but also build custom modules, develop integrations, and create tailored solutions on top of your ERP platform, with specialized expertise in ERPNext customization."
              image="/images/services/erp-service.png"
              link="/services/erp"
            />

            <ServiceCard
              title="SaaS Development"
              description="Cloud-based software solutions including custom SaaS development and white-label platforms. We build scalable, secure, and feature-rich software-as-a-service applications that help businesses reduce infrastructure costs and improve operational efficiency."
              image="/images/services/saas-service.png"
              link="/services/saas"
            />

            <ServiceCard
              title="AI Solutions"
              description="Intelligent automation with AI agents, GPT integration, and machine learning models. Our AI solutions help businesses automate processes, gain insights from data, and create intelligent systems that adapt and learn over time."
              image="/images/services/ai-service.png"
              link="/services/ai"
            />

            <ServiceCard
              title="Web Development"
              description="Custom web applications and responsive websites built with modern technologies. We create engaging, high-performance web experiences that drive business growth and deliver exceptional user experiences across all devices."
              image="/images/services/web-service.png"
              link="/services/web"
            />

            <ServiceCard
              title="IT Consulting"
              description="Strategic IT consulting to align technology with your business objectives. Our experienced consultants help you navigate digital transformation, optimize IT infrastructure, and implement solutions that drive efficiency and competitive advantage."
              image="/images/services/consulting-service.png"
              link="/services/consulting"
            />
            <ServiceCard
              title="Cybersecurity"
              description="Comprehensive cybersecurity services to safeguard your digital assets and ensure business continuity. Our experts assess vulnerabilities, implement robust security measures, and deliver proactive threat protection tailored to your organization’s needs—enabling you to operate with confidence in an increasingly complex digital landscape."
              image="/images/services/cybersec2.png"
              link="/services/cybersecurity"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Expertise Section (formerly "Why developers love us") */}
      <section className="py-20 bg-secondary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="relative inline-block">
                <span className="relative z-10">Accelerating Your Digital Evolution</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></span>
              </span>
            </h2>
            <p className="text-xl text-white/80">
              Our team of experts transforms complex challenges into elegant solutions that drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Software Development Excellence",
                description:
                  "Our skilled developers craft robust, scalable applications using cutting-edge technologies. We consistently deliver clean, maintainable code that solves real business problems and adapts to changing requirements.",
                icon: <Code className="h-6 w-6 text-primary" />,
              },
              {
                title: "ERP Implementation Mastery",
                description:
                  "As certified ERP engineers, we streamline your operations with customized solutions that integrate seamlessly with your existing systems. Our expertise ensures smooth implementations that minimize disruption and maximize ROI.",
                icon: <Database className="h-6 w-6 text-primary" />,
              },
              {
                title: "AI & Machine Learning Innovation",
                description:
                  "Our AI specialists build intelligent solutions that automate processes, uncover insights, and create competitive advantages. We transform your data into actionable intelligence that propels your business forward.",
                icon: <Brain className="h-6 w-6 text-primary" />,
              },
              {
                title: "Agile Project Delivery",
                description:
                  "We embrace agile methodologies to deliver value quickly and consistently. Our transparent approach keeps you informed at every stage, ensuring your project stays on track and meets all objectives.",
                icon: <Rocket className="h-6 w-6 text-primary" />,
              },
              {
                title: "Problem-Solving Approach",
                description:
                  "We don't just write code—we solve problems. Our team analyzes challenges from multiple angles to develop comprehensive solutions that address both immediate needs and long-term goals.",
                icon: <Zap className="h-6 w-6 text-primary" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-secondary-foreground/10 rounded-lg p-6 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Get In Touch Section */}
      <GetInTouchSection />

      {/* CTA Section with Logo */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image src="/images/logo.png" alt="DotCreative Logo" width={250} height={60} className="w-auto h-14" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your company?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of businesses that have revolutionized their operations with our solutions. From
              streamlining processes with custom ERP systems to unlocking new opportunities with AI, we deliver
              technology that drives real business growth and competitive advantage.
            </p>
            <Button asChild className="bg-white text-primary hover:bg-white/90 px-6 py-2">
              <Link href="/contact">LET'S TALK</Link>
            </Button>
          </div>
        </div>
      </section>

      <ScrollToTop />
      <NewsletterPopup />
    </>
  )
}
