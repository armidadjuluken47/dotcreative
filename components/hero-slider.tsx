"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Introducing DotCreative",
    description: "Our expertise lies in developing top-tier software solutions and essential IT technologies.",
    image: "/images/hero/workspace-collaboration.jpg",
  },
  {
    id: 2,
    title: "Digital Transformation",
    description: "We help businesses evolve through strategic digital transformation and innovative technologies.",
    image: "/images/hero/digital-lightbulb.jpg",
  },
  {
    id: 3,
    title: "Enterprise Solutions",
    description:
      "Custom ERP and SaaS platforms designed to streamline your business operations and boost productivity.",
    image: "/images/hero/erp-dashboard.png",
  },
  {
    id: 4,
    title: "AI & Automation",
    description: "Cutting-edge AI solutions that automate processes and deliver actionable insights for your business.",
    image: "/images/hero/humanoid-robot.jpg",
  },
  {
    id: 5,
    title: "Cybersecurity Excellence",
    description: "Shield your business from cyber threats with our comprehensive security solutions and expert protection services.",
    image: "/images/services/cybersec2.png",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide, isAnimating])

  return (
    <div className="relative h-[600px] sm:h-[650px] md:h-[700px] lg:h-[750px] overflow-hidden">
      {/* Semi-transparent gradient overlay to ensure content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/30 z-0"></div>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-500 ease-in-out",
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          <div className="container h-full flex flex-col md:flex-row items-center justify-between py-12 md:py-16 lg:py-20">
            <div className="w-full md:w-1/2 z-20 text-center md:text-left mb-8 md:mb-0 px-4">
              <div className="flex justify-center md:justify-start mb-6">
                <Image
                  src="/images/logo.png"
                  alt="DotCreative Logo"
                  width={280}
                  height={70}
                  className="w-auto h-12 md:h-16"
                />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
                {slide.description}
              </p>
              <Button asChild className="bg-primary text-white hover:bg-primary/90 px-6 py-2">
                <Link href="/contact">LET'S TALK</Link>
              </Button>
            </div>
            <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
              <div className="hero-image-container">
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover w-full h-full"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-primary w-8" : "bg-primary/30",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-primary hover:bg-white/40 rounded-full p-2 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-primary hover:bg-white/40 rounded-full p-2 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
