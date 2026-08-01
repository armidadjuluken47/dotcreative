"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Smartphone, Globe, Brain, Cpu, ClipboardList, Calculator, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "./language-provider"

// Service dropdown items
const serviceItems = [
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    icon: <Smartphone className="h-5 w-5 text-primary" />,
    description: "Native and cross-platform mobile applications",
  },
  {
    name: "Web App Development",
    href: "/services/web-app-development",
    icon: <Globe className="h-5 w-5 text-primary" />,
    description: "Responsive and progressive web applications",
  },
  {
    name: "Project Management Consultancy",
    href: "/services/project-management-consultancy",
    icon: <ClipboardList className="h-5 w-5 text-primary" />,
    description: "Expert guidance for your technology projects",
  },
  {
    name: "AI Development",
    href: "/services/ai-development",
    icon: <Brain className="h-5 w-5 text-primary" />,
    description: "AI consulting and implementation services",
  },
  {
    name: "IoT Solutions",
    href: "/services/iot-solutions",
    icon: <Cpu className="h-5 w-5 text-primary" />,
    description: "Connected device ecosystems and platforms",
  },
  {
    name: "Cybersecurity",
    href: "/services/cybersecurity",
    icon: <Shield className="h-5 w-5 text-primary" />,
    description: "Advanced security solutions to protect your digital assets",
  },
  {
    name: "ERP Solutions",
    href: "/erp-solutions",
    icon: <Calculator className="h-5 w-5 text-primary" />,
    description: "Comprehensive ERPNext implementation and services",
  },
]

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()
  const { t } = useLanguage()

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current)
      dropdownTimerRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current)
    }

    dropdownTimerRef.current = setTimeout(() => {
      setIsOpen(false)
      dropdownTimerRef.current = null
    }, 300) // Keep dropdown open for 300ms after mouse leaves
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        href="/services"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/services" || pathname.startsWith("/services/")
            ? "text-primary font-semibold"
            : "text-foreground",
        )}
      >
        {t("nav.services")}
      </Link>

      {/* Viewport-centered mega menu so it never clips off-screen */}
      <div
        className={cn(
          "fixed left-1/2 top-[4.75rem] z-50 w-[min(48rem,calc(100vw-2rem))] rounded-lg border border-border bg-background shadow-lg transition-all duration-200",
          isOpen
            ? "pointer-events-auto -translate-x-1/2 translate-y-0 opacity-100"
            : "pointer-events-none -translate-x-1/2 translate-y-2 opacity-0",
        )}
      >
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 p-4">
          {serviceItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col p-3 rounded-md hover:bg-muted transition-colors",
                pathname === item.href ? "bg-muted/50" : "",
              )}
            >
              <div className="flex items-center mb-2">
                <div className="mr-2 shrink-0">{item.icon}</div>
                <div className="text-sm font-medium">{item.name}</div>
              </div>
              <div className="text-xs text-muted-foreground">{item.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
