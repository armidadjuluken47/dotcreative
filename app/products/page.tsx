import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const products = [
  {
    id: 1,
    name: "ERPNext Enterprise",
    category: "erp",
    description: "Open-source ERP solution with comprehensive modules for business management.",
    image: "/images/products/erpnext.jpg",
    link: "/products/erp/erpnext",
  },
  {
    id: 2,
    name: "Odoo Business Suite",
    category: "erp",
    description: "All-in-one business management software with customizable modules.",
    image: "/images/products/odoo.png",
    link: "/products/erp/odoo",
  },
  {
    id: 3,
    name: "HR Connect",
    category: "saas",
    description: "Cloud-based HR management and employee engagement platform.",
    image: "/images/products/hr-connect.png",
    link: "/products/saas/hr-connect",
  },
  {
    id: 4,
    name: "Cloud Workspace",
    category: "saas",
    description: "Collaborative workspace for remote and distributed teams.",
    image: "/images/products/cloud-workspace.png",
    link: "/products/saas/cloud-workspace",
  },
  {
    id: 5,
    name: "AI Agent Platform",
    category: "ai",
    description: "Build and deploy custom AI agents for business automation.",
    image: "/images/products/ai-agents.png",
    link: "/products/ai/agents",
  },
  {
    id: 6,
    name: "GPT Integration Suite",
    category: "ai",
    description: "Integrate GPT models into your applications and workflows.",
    image: "/images/products/gpt-integration.png",
    link: "/products/ai/gpt-integration",
  },
  {
    id: 7,
    name: "Vector Database",
    category: "ai",
    description: "High-performance vector database for AI and machine learning applications.",
    image: "/images/products/vector-db.png",
    link: "/products/ai/vector-database",
  },
  {
    id: 8,
    name: "Multimodal AI Platform",
    category: "ai",
    description: "Process text, images, and audio with advanced AI models.",
    image: "/images/products/multimodal-ai.png",
    link: "/products/ai/multimodal",
  },
]

export default function ProductsPage() {
  return (
    <>
      <section className="pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-lg text-muted-foreground">
              Discover our comprehensive suite of enterprise software solutions designed to transform your business
              operations.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="erp">ERP Solutions</TabsTrigger>
                <TabsTrigger value="saas">SaaS Suites</TabsTrigger>
                <TabsTrigger value="ai">AI Products</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="erp" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((product) => product.category === "erp")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="saas" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((product) => product.category === "saas")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="ai" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((product) => product.category === "ai")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trending AI Solutions */}
      <section className="py-16 bg-accent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trending AI Solutions</h2>
            <p className="text-muted-foreground">Stay ahead of the curve with our cutting-edge AI technologies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "RAG Systems",
                description: "Retrieval Augmented Generation for knowledge-intensive applications",
                image: "/images/ai-trends/rag.png",
              },
              {
                name: "Fine-tuning Studio",
                description: "Custom-tune foundation models for your specific use cases",
                image: "/images/ai-trends/fine-tuning.png",
              },
              {
                name: "Autonomous Agents",
                description: "Self-directed AI agents that can perform complex tasks",
                image: "/images/ai-trends/autonomous-agents.png",
              },
              {
                name: "Multimodal Processing",
                description: "Process text, images, audio, and video with a single AI system",
                image: "/images/ai-trends/multimodal.png",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <div className="h-40 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ERP Solutions Comparison</h2>
            <p className="text-muted-foreground">
              Compare our ERP solutions to find the perfect fit for your business needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-background rounded-lg shadow-sm border border-border">
              <thead>
                <tr className="border-b">
                  <th className="px-6 py-4 text-left">Features</th>
                  <th className="px-6 py-4 text-center">ERPNext</th>
                  <th className="px-6 py-4 text-center">Odoo</th>
                  <th className="px-6 py-4 text-center">Custom ERP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Open Source", erpnext: true, odoo: "Community Edition", custom: false },
                  { feature: "Accounting", erpnext: true, odoo: true, custom: true },
                  { feature: "Inventory Management", erpnext: true, odoo: true, custom: true },
                  { feature: "Manufacturing", erpnext: true, odoo: true, custom: true },
                  { feature: "HR & Payroll", erpnext: true, odoo: true, custom: true },
                  { feature: "CRM", erpnext: true, odoo: true, custom: true },
                  { feature: "E-commerce Integration", erpnext: "Limited", odoo: true, custom: true },
                  { feature: "Custom Development", erpnext: "Moderate", odoo: "Extensive", custom: "Unlimited" },
                  { feature: "Implementation Time", erpnext: "2-4 months", odoo: "3-6 months", custom: "6-12 months" },
                  { feature: "AI Integration", erpnext: "Via plugins", odoo: "Limited", custom: "Advanced" },
                ].map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-6 py-4 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.erpnext === "boolean" ? (row.erpnext ? "✓" : "✗") : row.erpnext}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.odoo === "boolean" ? (row.odoo ? "✓" : "✗") : row.odoo}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.custom === "boolean" ? (row.custom ? "✓" : "✗") : row.custom}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="bg-primary text-white rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Request a demo to see our products in action and discover how they can transform your business operations.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-muted-foreground mb-4">{product.description}</p>
        <Link href={product.link} className="text-primary font-medium inline-flex items-center hover:underline">
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
