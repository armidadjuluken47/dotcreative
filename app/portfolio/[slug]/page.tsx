import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  getAllPortfolioSlugs,
  getPortfolioProject,
  portfolioProjects,
} from "@/data/portfolio"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllPortfolioSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = getPortfolioProject(slug)
  if (!project) return { title: "Project | DotCreative" }
  return {
    title: `${project.name} | Portfolio | DotCreative`,
    description: project.summary,
  }
}

export default async function PortfolioProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getPortfolioProject(slug)
  if (!project) notFound()

  const otherProjects = portfolioProjects.filter((item) => item.slug !== project.slug)

  return (
    <>
      <section className="pt-10 pb-12 md:pt-14 md:pb-16 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full blur-3xl -z-10 opacity-30"
          style={{ background: project.accent }}
        />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-3xl -z-10" />

        <div className="container">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {project.category}
                </span>
                <span className="text-sm text-muted-foreground">{project.industry}</span>
                <span className="text-sm text-muted-foreground">· {project.year}</span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{project.name}</h1>
              <p className="text-xl md:text-2xl font-medium mb-6" style={{ color: project.accent }}>
                {project.tagline}
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{project.summary}</p>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Discuss a similar build</Link>
                </Button>
                {project.liveUrl ? (
                  <Button asChild variant="outline">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View live
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-1 rounded-2xl blur opacity-25"
                style={{ background: `linear-gradient(135deg, ${project.accent}, #255c84)` }}
              />
              <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-muted/20">
                <Image
                  src={project.coverImage}
                  alt={project.coverAlt}
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-border/60 bg-muted/20">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.client ? (
            <div>
              <p className="text-sm text-muted-foreground mb-1">Client</p>
              <p className="font-semibold">{project.client}</p>
            </div>
          ) : (
            <div>
              <p className="text-sm text-muted-foreground mb-1">Type</p>
              <p className="font-semibold">{project.category}</p>
            </div>
          )}
          <div>
            <p className="text-sm text-muted-foreground mb-1">Our role</p>
            <p className="font-semibold">{project.role}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Industry</p>
            <p className="font-semibold">{project.industry}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-4">The challenge</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.challenge}</p>
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold mb-4">What we delivered</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.solution}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">How the system works</h2>
            <p className="text-lg text-muted-foreground">
              A walkthrough of the operating model—from daily work to controls that keep the business governed.
            </p>
          </div>

          <div className="space-y-10">
            {project.howItWorks.map((section, index) => (
              <div
                key={section.title}
                className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 lg:gap-10 items-start"
              >
                <div className="font-heading text-4xl font-bold text-primary/40">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-3">{section.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{section.body}</p>
                  {section.bullets?.length ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm md:text-base">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Core modules</h2>
            <p className="text-lg text-muted-foreground">
              The building blocks operators use day to day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.modules.map((module) => (
              <div
                key={module.title}
                className="rounded-2xl border border-border/70 bg-background p-6 hover:border-primary/40 transition-colors"
              >
                <h3 className="font-heading text-xl font-bold mb-2">{module.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Results at a glance</h2>
            <p className="text-white/75 text-lg">
              Point-in-time signals from the live or populated environment—not marketing estimates.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {project.outcomes.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {project.tech?.length ? (
            <div className="mt-12 pt-10 border-t border-white/15">
              <p className="text-sm uppercase tracking-wider text-white/50 mb-4">Capabilities & stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-sm bg-white/10 text-white/90 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="rounded-3xl bg-muted/40 border border-border/60 p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-4">Ready for your own operating system?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              {project.ctaNote ?? "Let’s translate your operational complexity into a controlled digital product."}
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Book a discovery conversation</Link>
            </Button>
          </div>
        </div>
      </section>

      {otherProjects.length ? (
        <section className="pb-24">
          <div className="container">
            <h2 className="font-heading text-2xl font-bold mb-8">More from the portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={`/portfolio/${item.slug}`}
                  className="group rounded-2xl border border-border/70 overflow-hidden hover:border-primary/40 transition-colors"
                >
                  <div className="aspect-[16/9] relative bg-muted">
                    <Image
                      src={item.coverImage}
                      alt={item.coverAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{item.category}</p>
                    <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.summary}</p>
                    <span className="inline-flex items-center text-sm font-medium text-primary">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
