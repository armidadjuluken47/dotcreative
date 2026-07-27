import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ClipboardList,
  Users,
  BarChart,
  Settings,
  Briefcase,
  GitPullRequest,
  Workflow,
  CheckCircle,
  Clock,
  DollarSign,
  TrendingUp,
  MessageSquare,
} from "lucide-react"

export default function ProjectManagementConsultancyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Streamline Your Projects with Our Project Management Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Do you find it difficult to stay on schedule with your software development projects? Do communication
                gaps, budget breaks, and missed deadlines occur? DotCreative is aware that technical expertise alone is
                not enough to deliver projects successfully in the modern IT environment. Our goal is to make your
                projects succeed, and we lead the industry in providing comprehensive project management services.
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
                  src="/images/services/project-management-banner.webp"
                  alt="Project Management Consultancy"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Next-Level Project Management Services</h2>
            <p className="text-xl text-muted-foreground">
              Our comprehensive project management services are designed to ensure your projects are delivered on time,
              within budget, and to the highest quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <ClipboardList className="h-8 w-8 text-primary" />,
                title: "Technical Project Management",
                description:
                  "Our team is very knowledgeable about the software development lifecycle (SDLC). With the use of this expertise, we can carefully design and carry out your projects, making sure they follow accepted best practices and procedures. We approach risk reduction proactively, seeing any obstacles early on and resolving them before they affect your development.",
                features: [
                  { icon: <Clock className="h-5 w-5 text-primary" />, text: "Timely Delivery" },
                  { icon: <DollarSign className="h-5 w-5 text-primary" />, text: "Budget Compliance" },
                  { icon: <CheckCircle className="h-5 w-5 text-primary" />, text: "Quality Assurance" },
                  { icon: <TrendingUp className="h-5 w-5 text-primary" />, text: "Risk Management" },
                ],
              },
              {
                icon: <GitPullRequest className="h-8 w-8 text-primary" />,
                title: "Software Development Consulting Services",
                description:
                  "We provide multiple professional consulting services that are specifically suited to the requirements of your software development projects, going above and beyond standard project management. Our experts can help you apply Agile approaches (like Scrum) to encourage flexibility and ongoing development through the product development lifecycle.",
                features: [
                  { icon: <Workflow className="h-5 w-5 text-primary" />, text: "Agile Implementation" },
                  { icon: <Settings className="h-5 w-5 text-primary" />, text: "Process Optimization" },
                  { icon: <MessageSquare className="h-5 w-5 text-primary" />, text: "Communication Strategy" },
                  { icon: <TrendingUp className="h-5 w-5 text-primary" />, text: "Continuous Improvement" },
                ],
              },
              {
                icon: <Briefcase className="h-8 w-8 text-primary" />,
                title: "Business Consulting",
                description:
                  "We know that software development projects are part of a broader business framework. You may close the gap between project goals and your ultimate company objectives with the assistance of our team of business advisors. They may help define specific project goals aligned with your business plan, ensuring that your software adds value.",
                features: [
                  { icon: <BarChart className="h-5 w-5 text-primary" />, text: "Strategic Alignment" },
                  { icon: <TrendingUp className="h-5 w-5 text-primary" />, text: "Value Optimization" },
                  { icon: <Users className="h-5 w-5 text-primary" />, text: "Stakeholder Management" },
                  { icon: <DollarSign className="h-5 w-5 text-primary" />, text: "ROI Maximization" },
                ],
              },
              {
                icon: <Settings className="h-8 w-8 text-primary" />,
                title: "IT Service Management (ITSM)",
                description:
                  "Our method also incorporates the IT Service Management (ITSM) principles. With the help of an ITSM framework, IT services may be elevated from a technical barrier to a strategic business role that synchronizes with the company's goals. This means that throughout the project, an emphasis will be placed on proactive problem-solving.",
                features: [
                  { icon: <Settings className="h-5 w-5 text-primary" />, text: "Service Integration" },
                  { icon: <CheckCircle className="h-5 w-5 text-primary" />, text: "Quality Control" },
                  { icon: <TrendingUp className="h-5 w-5 text-primary" />, text: "Continuous Improvement" },
                  { icon: <MessageSquare className="h-5 w-5 text-primary" />, text: "Transparent Communication" },
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 flex-shrink-0">{service.icon}</div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="mr-2 flex-shrink-0">{feature.icon}</div>
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Project Management Services</h2>
            <p className="text-xl text-muted-foreground">
              Beyond our core offerings, we provide specialized services to meet your unique project management needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Settings className="h-12 w-12 text-primary" />,
                title: "Project Management Software Selection and Implementation",
                description:
                  "To increase project visibility and expedite workflows, we can assist you in selecting the appropriate project management solutions.",
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Solutions for Freelance Project Management",
                description:
                  "We utilize a network of highly qualified independent project managers to match the demands of your team.",
              },
              {
                icon: <Workflow className="h-12 w-12 text-primary" />,
                title: "Personalized Project Management Software",
                description:
                  "We can create project management software customized to your unique procedures and workflows.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center h-full"
              >
                <div className="bg-primary/10 p-4 rounded-full mb-6 flex-shrink-0">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Project Management Services</h2>
            <p className="text-xl text-muted-foreground">
              Our approach to project management delivers tangible benefits that drive project success and business
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Improved Time Management",
                description:
                  "Our structured approach ensures projects are completed on time, reducing delays and accelerating time-to-market.",
              },
              {
                icon: <DollarSign className="h-10 w-10 text-primary" />,
                title: "Cost Efficiency",
                description:
                  "Careful planning and monitoring help control costs and prevent budget overruns, maximizing your ROI.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "Enhanced Quality",
                description:
                  "Our quality assurance processes ensure deliverables meet or exceed expectations and industry standards.",
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-primary" />,
                title: "Better Communication",
                description:
                  "We establish clear communication channels and reporting structures to keep all stakeholders informed.",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
                title: "Risk Mitigation",
                description:
                  "Proactive identification and management of risks prevent issues from impacting project success.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Team Productivity",
                description:
                  "Our management approach optimizes resource allocation and enhances team collaboration and efficiency.",
              },
              {
                icon: <Workflow className="h-10 w-10 text-primary" />,
                title: "Process Optimization",
                description:
                  "We continuously refine processes to eliminate bottlenecks and improve overall project workflow.",
              },
              {
                icon: <BarChart className="h-10 w-10 text-primary" />,
                title: "Strategic Alignment",
                description:
                  "We ensure projects align with and contribute to your broader business goals and objectives.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4 flex-shrink-0">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Project Management?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss how our project management services can help you deliver successful projects
              consistently.
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
