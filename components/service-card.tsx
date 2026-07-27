"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  link: string
}

export function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="group h-[400px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onTouchStart={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500 transform-style-3d rounded-xl shadow-md",
          isFlipped ? "rotate-y-180" : "",
        )}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border border-border">
          <div className="relative w-full h-3/5">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <div className="p-6 bg-background h-2/5 flex flex-col justify-between">
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="flex items-center text-primary font-medium group-hover:underline">
              

            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden border border-border bg-primary text-white p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-white/90">{description}</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}
