import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Calculator,
  Users,
  Package,
  ShoppingCart,
  CreditCard,
  BarChart,
  HeartHandshake,
  ClipboardList,
  LineChart,
  ShieldCheck,
  Code,
  Settings,
  Cloud,
  BarChart2,
  Headphones,
  Search,
  FileSpreadsheet,
  Pencil,
  Server,
  TrendingUp,
} from "lucide-react"
import { FaqSection } from "@/components/faq-section"

export default function ERPSolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-10 pb-16 md:pt-14 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Partner for Reliable ERPNext Software Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                DotCreative is pleased to collaborate with ERPNext, a prominent open-source cloud ERP platform. Our
                expertise in Cloud-based ERP enables us to provide clients with robust, scalable, and cost-effective ERP
                systems, and complex solutions adapted to unique company requirements.
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
            <div className="relative h-full flex items-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden h-full">
                <Image
                  src="/images/erp-solutions-banner.png"
                  alt="ERPNext Solutions"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  style={{ minHeight: "350px" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular ERP Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular ERP Services we Provide</h2>
            <p className="text-xl text-muted-foreground">
              We specialize in establishing ERP (Enterprise Resource Planning) solutions that ease processes, increase
              efficiency, and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                icon: <Code className="h-8 w-8 text-primary" />,
                title: "ERPNext Development Services",
                description:
                  "Our expertise in ERP software development includes customization, integration, migration, upgrades, training, and support, ensuring that you can leverage the full power of ERPNext to drive business growth and success.",
              },
              {
                number: "2",
                icon: <Settings className="h-8 w-8 text-primary" />,
                title: "Implementation Services and Consulting",
                description:
                  "Our experienced personnel offer comprehensive implementation services and advice to enable a smooth transition to ERP implementation and installation. As trusted advisors, we collaborate with you to understand your business goals and create solutions that meet your needs.",
              },
              {
                number: "3",
                icon: <TrendingUp className="h-8 w-8 text-primary" />,
                title: "Leading ERP Solution Providers",
                description:
                  "Our services include customization and configuration, training, data migration, integration with existing systems, and ERP maintenance and updates, among other things. As one of the market's leading solution providers, we work with top ERP software vendors to provide cutting-edge solutions.",
              },
              {
                number: "4",
                icon: <BarChart className="h-8 w-8 text-primary" />,
                title: "Real Comprehensive ERPNext Services for All Industries",
                description:
                  "Our ERPNext services are intended to streamline operations, increase customer happiness, and raise profitability in all sectors. We address the particular problems that various sectors confront, assuring personalized solutions that improve efficiency and performance.",
              },
              {
                number: "5",
                icon: <Cloud className="h-8 w-8 text-primary" />,
                title: "Cloud-based ERP solutions",
                description:
                  "DotCreative allows you to use the potential of cloud solutions. Our cloud services provide unrivaled accessibility, allowing you to manage your business operations from anywhere at any time. Our ERP systems provide the independence and flexibility of cloud technology.",
              },
              {
                number: "6",
                icon: <BarChart2 className="h-8 w-8 text-primary" />,
                title: "Analytics and Reporting",
                description:
                  "With modern analytics capabilities like predictive analytics and machine learning algorithms, we assist you in maintaining your data through interactive dashboards that make complicated information simple to understand, allowing you to immediately spot opportunities and prevent risks.",
              },
              {
                number: "7",
                icon: <Headphones className="h-8 w-8 text-primary" />,
                title: "Annual Maintenance Contract (AMC) and Support",
                description:
                  "We provide comprehensive project assistance to ensure that your program runs successfully. Our dedicated team works across multiple time zones to give quick assistance to our clients. DotCreative provides dependable ERPNext AMC and support services.",
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

      {/* ERPNext Modules Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Diverse ERPNext Modules</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive modules to streamline every aspect of your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Calculator className="h-10 w-10 text-primary" />,
                title: "Finance & Accounting",
                description:
                  "Manage your company's financial activities, such as accounts payable and receivable, general ledger, budgeting, and financial reporting.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Human Resources",
                description:
                  "Streamline human resources procedures like payroll, employee attendance, performance management, recruitment, and training.",
              },
              {
                icon: <Package className="h-10 w-10 text-primary" />,
                title: "Stock Management",
                description:
                  "Our ERPNext stock management systems improve inventory control through real-time tracking, minimizing waste and preventing stockouts. This assures proper inventory levels, increased operational efficiency and cost savings.",
              },
              {
                icon: <ShoppingCart className="h-10 w-10 text-primary" />,
                title: "Buying",
                description:
                  "Our ERPNext buying technologies improve procurement by automating purchase orders and managing supplier relationships efficiently. This streamlines procurement tactics, resulting in prompt delivery and better bargaining terms.",
              },
              {
                icon: <CreditCard className="h-10 w-10 text-primary" />,
                title: "Payroll",
                description:
                  "Our ERPNext payroll services automate payroll calculations, tax deductions, and salary payments to ensure accuracy and compliance. This improves payroll operations and offers extensive information to ensure transparency and efficiency.",
              },
              {
                icon: <BarChart className="h-10 w-10 text-primary" />,
                title: "Sales and marketing",
                description:
                  "Track and handle sales orders, and build marketing strategies. Analyze customer data to boost sales performance.",
              },
              {
                icon: <HeartHandshake className="h-10 w-10 text-primary" />,
                title: "CRM",
                description:
                  "Customer data may be centralized, interactions tracked, leads managed, and customer happiness improved through targeted communication and service.",
              },
              {
                icon: <ClipboardList className="h-10 w-10 text-primary" />,
                title: "Project Management",
                description:
                  "To ensure project success, plan, execute, and monitor projects, allocating resources, tracking progress, and managing budgets.",
              },
              {
                icon: <LineChart className="h-10 w-10 text-primary" />,
                title: "Business Intelligence and Reporting",
                description:
                  "Analyze data from numerous modules to obtain insights into business performance, trends, and opportunities using bespoke reports and dashboards.",
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-primary" />,
                title: "Quality Management",
                description:
                  "Ensure product and service quality through quality control procedures, inspections, audits, and adherence to industry norms and laws.",
              },
            ].map((module, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4 flex-shrink-0">{module.icon}</div>
                <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                <p className="text-muted-foreground">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Consultancy Process Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase relative">
              Our Seamless ERP Consultancy Process
              <div className="w-48 h-1 bg-primary mx-auto mt-4"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* First row */}
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                  <Search className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-white/80">We start with a detailed learning of your company's needs and ambitions.</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                  <FileSpreadsheet className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Gap Analysis</h3>
              <p className="text-white/80">
                Our team conducts a thorough examination of your requirements and existing systems.
              </p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                  <Pencil className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-white/80">
                We create a customized ERP solution that resonates with your enterprise's needs.
              </p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                  <Settings className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-white/80">
                Our professionals create and customize the ERP system based on your specifications.
              </p>
            </div>

            {/* Second row */}
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                  <ClipboardList className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold">
                  5
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Testing</h3>
              <p className="text-white/80">
                Rigorous testing verifies the ERP solution's functionality and performance.
              </p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                  <Server className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold">
                  6
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Deployment</h3>
              <p className="text-white/80">We implement the ERP system and provide extensive training to your team.</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                  <Headphones className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold">
                  7
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Support</h3>
              <p className="text-white/80">Ongoing support and maintenance ensure that the ERP system runs smoothly.</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold">
                  8
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Optimization</h3>
              <p className="text-white/80">
                Continuous improvement and optimization to satisfy changing business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <FaqSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business with ERPNext?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss how our ERPNext solutions can streamline your operations and drive growth.
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
