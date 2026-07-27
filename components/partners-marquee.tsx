"use client"

import { useEffect, useRef } from "react"

export default function PartnersMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marqueeElement = marqueeRef.current
    if (!marqueeElement) return

    const animate = () => {
      if (!marqueeElement) return
      if (marqueeElement.scrollLeft >= marqueeElement.scrollWidth / 2) {
        marqueeElement.scrollLeft = 0
      } else {
        marqueeElement.scrollLeft += 1
      }
      requestAnimationFrame(animate)
    }

    const animation = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animation)
    }
  }, [])

  const clients = [
    { name: "Drop Access Limited", url: "http://dropaccess.org/" },
    { name: "Lomoarts", url: "https://lomoarts.com/" },
    { name: "Qareen International", url: "https://qareeninvestments.co.ke/" },
    { name: "Smart Youth", url: "https://smartyouth.or.tz/" },
    { name: "Ibaadurahman CBO", url: "https://ibaadurahmaan.org/" },
    { name: "Al Jamhara", url: "http://aljamhara.com/" },
    { name: "Consult Emerald", url: "http://aljamhara.com/" },
    { name: "Hardo NGO", url: "http://hardoea.org/" },
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground mt-2">
            We've partnered with leading organizations to deliver exceptional solutions
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex items-center space-x-12 md:space-x-16 lg:space-x-24 overflow-x-auto scrollbar-hide py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* First set of partner names */}
            {clients.map((client, index) => (
              <div key={`client-1-${index}`} className="flex-shrink-0 flex items-center justify-center px-4">
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg font-semibold text-foreground/80 hover:text-primary transition-colors duration-300 whitespace-nowrap"
                >
                  {client.name}
                </a>
              </div>
            ))}

            {/* Duplicate set for seamless looping */}
            {clients.map((client, index) => (
              <div key={`client-2-${index}`} className="flex-shrink-0 flex items-center justify-center px-4">
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg font-semibold text-foreground/80 hover:text-primary transition-colors duration-300 whitespace-nowrap"
                >
                  {client.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
