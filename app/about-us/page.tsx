import Image from "next/image"
import Link from "next/link"
import { Users, Lightbulb, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Banner Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about-us/team-collaboration.png"
            alt="DotCreative Team Collaboration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 mix-blend-multiply"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 h-full flex flex-col justify-center text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              A community of innovators crafting cutting-edge solutions. We champion collaboration, empower employees,
              and drive innovation. Join our journey to transform the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20"></div>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about-us/team-meeting.png"
                    alt="DotCreative Team Meeting"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                OUR STORY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We aren't simply another digital company; we dreamed of a place where new ideas could thrive and a
                  friendly atmosphere allows everyone to succeed. That dream began in 2020, and we've since created a
                  dynamic and friendly workplace.
                </p>
                <p>
                  Creativity and innovation thrive here because we value developing a dream team above everything else.
                  We've evolved into a thriving community of devoted individuals, advancing and inventing cutting-edge
                  solutions.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/careers">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, #fb5176 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              Our core values are the solid pillars that support DotCreative's vibrant culture. Here's what we believe
              in:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Collaboration",
                description:
                  "DotCreative thrives on teamwork. We believe that the greatest accomplishments come from open communication and different concepts.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Employee Empowerment",
                description:
                  "We believe in our staff. We encourage them to make decisions, take control, and continually learn and grow.",
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-primary" />,
                title: "Innovation",
                description:
                  "At DotCreative, there are no outdated concepts here! We push the creative thinking and innovative problem-solving of our staff.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-8 shadow-sm border border-border transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-md"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">The talented individuals behind DotCreative's success</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Hassan Kirwa",
                role: "CEO & Co-founder",
                image: "/images/about-us/hassan.png",
              },
              {
                name: "Imran Goga",
                role: "CTO & Co-founder",
                image: "/images/about-us/imran.png",
              },
              {
                name: "Armidad Juluken",
                role: "Lead Developer(USA)",
                image: "/images/about-us/armidad.png",
              },
              {
                name: "Eden Derrick",
                role: "Web Developer(UK)",
                image: "/images/about-us/eden.png",
              },
              {
                name: "Kevin Mwangi",
                role: "Software Developer",
                image: "/images/about-us/kevin.png",
              },
               {
                name: "Susan Thuranira",
                role: "IT Suport Specialist",
                image: "/images/about-us/achieng.png",
              },
               {
                name: "Mark Sankara",
                role: "UI/UX Designer",
                image: "/images/about-us/sankara.png",
              },
               {
                name: "James Aderibigde",
                role: "Marketing Director(Nigeria)",
                image: "/images/about-us/james.png",
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full text-white">
                      <div className="flex justify-center space-x-4">{/* Social icons would go here */}</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "9+", label: "Years of Excellence" },
              { number: "50+", label: "Team Members" },
              { number: "200+", label: "Projects Completed" },
              { number: "100+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-muted rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us on our mission to transform the digital landscape with innovative solutions.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
