import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Brain,
  MessageSquare,
  Eye,
  BarChart,
  Database,
  Search,
  Zap,
  Bot,
  Code,
  LineChart,
  Users,
  Shield,
  Layers,
  Cpu,
  Server,
  Clock,
  DollarSign,
  TrendingUp,
  CheckCircle,
} from "lucide-react"

export default function AIDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-10 pb-16 md:pt-14 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Business with AI Development</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Harness the power of artificial intelligence to drive innovation, automate processes, and gain
                competitive advantage. Our AI development services help businesses across industries implement
                cutting-edge solutions that deliver real business value and prepare you for the future.
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
                   src="/images/services/ai-dev.webp"
                  alt="AI Development"
                  width={1000}
                  height={2000}
                  // className="w-full h-auto"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Development Services</h2>
            <p className="text-xl text-muted-foreground">
              We offer a comprehensive range of AI development services to help businesses leverage the power of
              artificial intelligence and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "Machine Learning Solutions",
                description:
                  "We develop custom machine learning models that can analyze complex data patterns, make accurate predictions, and continuously improve over time. Our solutions help you automate decision-making processes and extract valuable insights from your data.",
                features: [
                  { icon: <Database className="h-5 w-5 text-primary" />, text: "Predictive Analytics" },
                  { icon: <Search className="h-5 w-5 text-primary" />, text: "Pattern Recognition" },
                  { icon: <BarChart className="h-5 w-5 text-primary" />, text: "Data Classification" },
                  { icon: <TrendingUp className="h-5 w-5 text-primary" />, text: "Anomaly Detection" },
                ],
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-primary" />,
                title: "Natural Language Processing",
                description:
                  "Our NLP solutions enable computers to understand, interpret, and generate human language. From chatbots and virtual assistants to sentiment analysis and text summarization, we help you create intelligent systems that can process and respond to natural language.",
                features: [
                  { icon: <Bot className="h-5 w-5 text-primary" />, text: "Conversational AI" },
                  { icon: <MessageSquare className="h-5 w-5 text-primary" />, text: "Sentiment Analysis" },
                  { icon: <Search className="h-5 w-5 text-primary" />, text: "Text Classification" },
                  { icon: <Zap className="h-5 w-5 text-primary" />, text: "Language Generation" },
                ],
              },
              {
                icon: <Eye className="h-8 w-8 text-primary" />,
                title: "Computer Vision",
                description:
                  "Our computer vision solutions enable machines to interpret and understand visual information from the world. We develop systems that can recognize objects, faces, and patterns in images and videos, opening up new possibilities for automation and analysis.",
                features: [
                  { icon: <Eye className="h-5 w-5 text-primary" />, text: "Image Recognition" },
                  { icon: <Users className="h-5 w-5 text-primary" />, text: "Facial Recognition" },
                  { icon: <Search className="h-5 w-5 text-primary" />, text: "Object Detection" },
                  { icon: <Zap className="h-5 w-5 text-primary" />, text: "Video Analysis" },
                ],
              },
              {
                icon: <BarChart className="h-8 w-8 text-primary" />,
                title: "Predictive Analytics",
                description:
                  "Our predictive analytics solutions use historical data and statistical algorithms to forecast future outcomes. We help businesses anticipate trends, identify opportunities, and make data-driven decisions that drive growth and efficiency.",
                features: [
                  { icon: <LineChart className="h-5 w-5 text-primary" />, text: "Demand Forecasting" },
                  { icon: <Users className="h-5 w-5 text-primary" />, text: "Customer Behavior" },
                  { icon: <TrendingUp className="h-5 w-5 text-primary" />, text: "Market Trends" },
                  { icon: <Shield className="h-5 w-5 text-primary" />, text: "Risk Assessment" },
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

      {/* AI Implementation Process */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Implementation Process</h2>
            <p className="text-xl text-muted-foreground">
              We follow a structured approach to deliver successful AI solutions that meet your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery & Assessment",
                description:
                  "We begin by understanding your business goals, challenges, and data landscape. Our team conducts a thorough assessment to identify opportunities where AI can deliver the most value.",
                icon: <Search className="h-10 w-10 text-primary" />,
              },
              {
                number: "02",
                title: "Strategy & Planning",
                description:
                  "Based on our assessment, we develop a comprehensive AI strategy and implementation roadmap. This includes defining success metrics, resource requirements, and timelines.",
                icon: <Layers className="h-10 w-10 text-primary" />,
              },
              {
                number: "03",
                title: "Data Preparation",
                description:
                  "We collect, clean, and prepare your data for AI model training. This critical step ensures your AI solutions are built on high-quality, relevant data that will yield accurate results.",
                icon: <Database className="h-10 w-10 text-primary" />,
              },
              {
                number: "04",
                title: "Model Development",
                description:
                  "Our data scientists and AI engineers develop custom models using the latest algorithms and techniques. We continuously refine these models to achieve optimal performance.",
                icon: <Code className="h-10 w-10 text-primary" />,
              },
              {
                number: "05",
                title: "Integration",
                description:
                  "We seamlessly integrate AI solutions into your existing systems and workflows, ensuring they work harmoniously with your technology ecosystem.",
                icon: <Cpu className="h-10 w-10 text-primary" />,
              },
              {
                number: "06",
                title: "Testing & Validation",
                description:
                  "We rigorously test AI models against real-world scenarios to validate their accuracy, reliability, and performance before deployment.",
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
              },
              {
                number: "07",
                title: "Deployment",
                description:
                  "We deploy your AI solution to production environments, ensuring smooth operation and monitoring systems for optimal performance.",
                icon: <Server className="h-10 w-10 text-primary" />,
              },
              {
                number: "08",
                title: "Continuous Improvement",
                description:
                  "We provide ongoing support and maintenance, continuously monitoring and refining your AI models to improve accuracy and adapt to changing conditions.",
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4 flex-shrink-0">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of AI Development</h2>
            <p className="text-xl text-muted-foreground">
              Implementing AI solutions can transform your business in numerous ways, delivering both immediate and
              long-term benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Enhanced Efficiency",
                description:
                  "Automate repetitive tasks and streamline operations, allowing your team to focus on high-value activities that drive business growth.",
              },
              {
                icon: <BarChart className="h-10 w-10 text-primary" />,
                title: "Data-Driven Insights",
                description:
                  "Extract valuable insights from vast amounts of data, enabling better decision-making and strategic planning.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Improved Customer Experience",
                description:
                  "Deliver personalized experiences, faster service, and more accurate responses to customer needs and preferences.",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
                title: "Competitive Advantage",
                description:
                  "Stay ahead of the competition by leveraging cutting-edge AI technologies that drive innovation and differentiation.",
              },
              {
                icon: <DollarSign className="h-10 w-10 text-primary" />,
                title: "Cost Reduction",
                description:
                  "Reduce operational costs through automation, optimization, and more efficient resource allocation.",
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Scalability",
                description:
                  "AI solutions can scale with your business, handling increasing volumes of data and transactions without proportional increases in cost.",
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

      {/* Industries Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Solutions Across Industries</h2>
            <p className="text-xl text-muted-foreground">
              We develop tailored AI solutions for various industries, addressing specific challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare",
                description:
                  "AI-powered diagnostic tools, patient monitoring systems, drug discovery acceleration, and personalized treatment recommendations.",
                image: "/images/services/healthcare-ai.jpg",
              },
              {
                title: "Finance",
                description:
                  "Fraud detection, algorithmic trading, risk assessment, customer service automation, and personalized financial advice.",
                image: "/images/services/ai-in-finance-png.png",
              },
              {
                title: "Retail",
                description:
                  "Inventory optimization, demand forecasting, personalized recommendations, visual search, and automated customer service.",
                image: "/images/services/Retail.png",
              },
              {
                title: "Manufacturing",
                description:
                  "Predictive maintenance, quality control, supply chain optimization, and automated production planning.",
                image: "/images/services/Ai-manufacturing.webp",
              },
              {
                title: "Transportation",
                description:
                  "Route optimization, autonomous vehicle technology, predictive maintenance, and traffic management systems.",
                image: "/images/services/AI-Travel.png",
              },
              {
                title: "Agriculture",
                description:
                  "Crop monitoring, yield prediction, pest detection, automated irrigation, and precision farming.",
                image: "/images/services/AI-Agriculture.jpg",
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
                  <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss how our AI development services can help you innovate, automate, and gain a
              competitive edge in your industry.
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
