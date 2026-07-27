"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Sarah Finley",
    role: "CTO",
    company: "Global Innovations Inc.",
    location: "United States",
    image: "/images/testimonials/sarah.jpeg",
    quote:
      "DotCreative's SDK generation has saved our team countless hours of development time. The documentation is beautiful and our developers love how easy it is to use.",
  },
  {
    id: 2,
    name: "Oluwaseun Adeyemi",
    role: "CEO",
    company: "TechNova Africa",
    location: "Nigeria",
    image: "/images/testimonials/african-ceo-male.png",
    quote:
      "Working with DotCreative on our ERP implementation was a game-changer for our business. Their team understood our unique market challenges and delivered a solution that has transformed our operations across multiple African countries.",
  },
  {
    id: 3,
    name: "Amara Okafor",
    role: "Director of Technology",
    company: "Fintech Solutions Kenya",
    location: "Kenya",
    image: "/images/testimonials/african-tech-director-female.png",
    quote:
      "The AI solution DotCreative built for our financial services platform has dramatically improved our fraud detection capabilities. Their understanding of both AI technology and African market nuances made them the perfect partner for this critical project.",
  },
  {
    id: 4,
    name: "Kwame Mensah",
    role: "Operations Manager",
    company: "GhanaHealth Systems",
    location: "Ghana",
    image: "/images/testimonials/african-manager-male.png",
    quote:
      "DotCreative's custom healthcare management system has helped us extend medical services to remote areas across Ghana. Their team was responsive, professional, and truly committed to creating technology that makes a difference in people's lives.",
  },
  {
    id: 5,
    name: "Nadia Turay",
    role: "Founder",
    company: "EduTech Africa",
    location: "Sierra Leone",
    image: "/images/testimonials/african-founder-female.png",
    quote:
      "As a startup focused on educational technology for African schools, we needed a partner who understood both technology and our continent's unique challenges. DotCreative delivered a scalable platform that works even in areas with limited connectivity.",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    return () => clearInterval(interval)
  }, [activeIndex, isAnimating])

  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="relative inline-block">
              <span className="relative z-10">What Our Clients Say</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></span>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by businesses across the globe, including leading African enterprises
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main testimonial slider */}
          <div ref={testimonialsRef} className="relative overflow-hidden rounded-xl bg-background shadow-lg">
            <div className="absolute top-6 left-6 text-primary opacity-20">
              <Quote size={60} />
            </div>

            <div className="p-8 md:p-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "transition-opacity duration-500 flex flex-col md:flex-row items-center gap-8",
                    activeIndex === index ? "opacity-100" : "opacity-0 absolute inset-0",
                  )}
                >
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="relative w-32 h-32 mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover border-4 border-primary/20"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <div className="flex items-center justify-center mt-1">
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <blockquote className="text-lg md:text-xl italic relative z-10">{testimonial.quote}</blockquote>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-primary w-8" : "bg-primary/30",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

         
        </div>
      </div>
    </section>
  )
}
