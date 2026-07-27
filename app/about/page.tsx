import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Users, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/logo.png"
                alt="DotCreative Logo"
                width={300}
                height={80}
                className="w-auto h-16 md:h-20"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About DotCreative</h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to empower businesses through innovative technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2010, DotCreative began with a simple vision: to make enterprise software more accessible,
                intuitive, and effective for businesses of all sizes.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a small team of passionate developers has grown into a global technology company serving
                clients across industries and continents. Throughout our journey, we've remained committed to our core
                values of innovation, quality, and customer success.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we're proud to be at the forefront of digital transformation, helping organizations leverage the
                power of ERP, SaaS, and AI technologies to achieve their business goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary text-white hover:bg-primary/90">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/about/careers">Join Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-70"></div>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/diverse-tech-team.png"
                  alt="DotCreative Team"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the page content remains the same */}
      {/* Timeline Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

            {[
              {
                year: "2010",
                title: "Founded in San Francisco",
                description: "DotCreative was established with a focus on custom software development.",
              },
              {
                year: "2013",
                title: "First SaaS Product Launch",
                description: "Released our first cloud-based project management solution.",
              },
              {
                year: "2015",
                title: "International Expansion",
                description: "Opened offices in London and Singapore to serve global clients.",
              },
              {
                year: "2018",
                title: "Enterprise ERP Suite",
                description: "Launched our comprehensive ERP solution for mid-market and enterprise clients.",
              },
              {
                year: "2021",
                title: "AI Innovation Lab",
                description: "Established our AI research and development center.",
              },
              {
                year: "2023",
                title: "Strategic Partnerships",
                description: "Formed alliances with leading technology providers to enhance our offerings.",
              },
              {
                year: "Today",
                title: "Continued Growth",
                description: "Expanding our product portfolio and global presence.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? "ml-auto pl-12 pr-0" : "mr-auto pr-12 pl-0"} w-1/2`}
              >
                <div
                  className="absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"
                  style={{ [index % 2 === 0 ? "left" : "right"]: "-8px" }}
                ></div>
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-white" />,
                title: "Customer Focus",
                description: "We put our customers at the center of everything we do, striving to exceed expectations.",
              },
              {
                icon: <Award className="h-10 w-10 text-white" />,
                title: "Excellence",
                description: "We pursue excellence in our products, services, and interactions with stakeholders.",
              },
              {
                icon: <Check className="h-10 w-10 text-white" />,
                title: "Integrity",
                description: "We operate with honesty, transparency, and ethical business practices.",
              },
              {
                icon: <Heart className="h-10 w-10 text-white" />,
                title: "Diversity & Inclusion",
                description: "We embrace diverse perspectives and foster an inclusive environment.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "300+", label: "Team Members" },
              { number: "1,000+", label: "Clients Worldwide" },
              { number: "15+", label: "Industry Awards" },
              { number: "25+", label: "Countries Served" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image src="/images/logo.png" alt="DotCreative Logo" width={200} height={50} className="w-auto h-12" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals to join our growing team. Explore our current openings and
              become part of our journey.
            </p>
            
          </div>
        </div>
      </section>
    </>
  )
}
