"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ExperienceSection() {
  const [isHovered, setIsHovered] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={sectionRef} className="py-20 bg-brand-blue/20 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We Are Leading Technology Solutions Provider</h2>
            <p className="text-muted-foreground mb-8">
              Dotcreative are highly skilled software developers, ERP engineers, and AI Solutions specialists who
              consistently solve problems, complete tasks, and propel your projects forward.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Expert Development Team",
                "24/7 Technical Support",
                "Custom Software Solutions",
                "Agile Project Management",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90 group">
              <Link href="/about" className="inline-flex items-center">
                LEARN MORE ABOUT US
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Right side - Code image */}
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-xl shadow-xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={cn(
                  "relative transition-all duration-700 ease-in-out",
                  isHovered ? "scale-105" : "scale-100",
                )}
              >
                <Image
                  src="/images/code-development.jpeg"
                  alt="Code Development"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl"
                />

                {/* Overlay with code-related elements that appear on hover */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 transition-opacity duration-500",
                    isHovered ? "opacity-60" : "opacity-0",
                  )}
                ></div>
              </div>

              {/* Floating tech badges that appear on hover */}
              {[
                { name: "Web Development", icon: "/images/tech/react.png", position: "top-10 left-10" },
                { name: "Cloud Solutions", icon: "/images/tech/aws.png", position: "top-10 right-10" },
                { name: "DevOps", icon: "/images/tech/docker.png", position: "bottom-32 left-10" },
                { name: "AI Integration", icon: "/images/tech/tensorflow.png", position: "bottom-32 right-10" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute flex items-center bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-500",
                    tech.position,
                    isHovered ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Image
                    src={tech.icon || "/placeholder.svg?height=30&width=30&query=tech icon"}
                    alt={tech.name}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width background image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="/images/tech-pattern-bg.png" alt="Technology Pattern" fill className="object-cover" />
      </div>

      {/* Experience badge - Made more prominent and positioned in the center-right */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-20 lg:block hidden">
        <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-full p-8 shadow-[0_0_30px_rgba(251,81,118,0.5)] animate-pulse-slow">
          <div className="text-center">
            <div className="text-5xl font-bold">10+</div>
            <div className="text-lg mt-1 font-medium">Years of</div>
            <div className="text-lg font-medium">Experience</div>
          </div>
        </div>
      </div>

      {/* Mobile version of the badge */}
      <div className="absolute bottom-10 right-10 lg:hidden block z-20">
        <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-full p-4 shadow-[0_0_20px_rgba(251,81,118,0.5)]">
          <div className="text-center">
            <div className="text-3xl font-bold">10+</div>
            <div className="text-xs mt-1">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
