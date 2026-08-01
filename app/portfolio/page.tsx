import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioProjects } from "@/data/portfolio"

export const metadata = {
  title: "Portfolio | DotCreative",
  description:
    "Case studies of systems DotCreative has designed and delivered—from multi-shop retail SaaS to pharmaceutical GMP platforms.",
}

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-10 pb-16 md:pt-14 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl -z-10" />

        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Portfolio</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Systems we have built and put to work
            </h1>
            <p className="text-xl text-muted-foreground">
              Real implementations across retail SaaS and pharmaceutical GMP—each with a clear problem, a working
              product, and a detailed walkthrough of how it operates.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:gap-14">
            {portfolioProjects.map((project, index) => (
              <article
                key={project.slug}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-muted/30">
                    <div
                      className="absolute inset-0 opacity-40 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 80% 20%, ${project.accent}55, transparent 55%)`,
                      }}
                    />
                    <Image
                      src={project.coverImage}
                      alt={project.coverAlt}
                      width={1200}
                      height={675}
                      className="relative w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {project.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{project.industry}</span>
                    <span className="text-sm text-muted-foreground">· {project.year}</span>
                  </div>

                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">{project.name}</h2>
                  <p className="text-lg text-primary font-medium mb-4">{project.tagline}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.summary}</p>

                  <div className="flex flex-wrap gap-6 mb-8">
                    {project.outcomes.slice(0, 3).map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold font-heading">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href={`/portfolio/${project.slug}`}>
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Have a system to design or scale?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Tell us about your operations—we will map the right product, implementation path, and rollout.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/contact">Start a conversation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
