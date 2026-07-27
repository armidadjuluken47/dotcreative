"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import ServicesDropdown from "./services-dropdown"
import { cn } from "@/lib/utils"
import { useLanguage, type LanguageCode } from "./language-provider"

// Service items for mobile menu
import { Smartphone, Globe, Brain, Cpu, ClipboardList, Calculator } from "lucide-react"

const serviceItems = [
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    icon: <Smartphone className="h-5 w-5 text-primary" />,
  },
  {
    name: "Web App Development",
    href: "/services/web-app-development",
    icon: <Globe className="h-5 w-5 text-primary" />,
  },
  {
    name: "Project Management Consultancy",
    href: "/services/project-management-consultancy",
    icon: <ClipboardList className="h-5 w-5 text-primary" />,
  },
  {
    name: "AI Development",
    href: "/services/ai-development",
    icon: <Brain className="h-5 w-5 text-primary" />,
  },
  {
    name: "IoT Solutions",
    href: "/services/iot-solutions",
    icon: <Cpu className="h-5 w-5 text-primary" />,
  },
  {
    name: "ERP Solutions",
    href: "/erp-solutions",
    icon: <Calculator className="h-5 w-5 text-primary" />,
  },
   {
    name: "Cybersecurity",
    href: "/services/mobile-app-development",
    icon: <ShieldCheck className="h-5 w-5 text-primary" />,
  },
]

const navItems = [
  { key: "nav.aboutUs", href: "/about-us" },
  { key: "nav.erpSolutions", href: "/erp-solutions" },
  { key: "nav.contactUs", href: "/contact" },
  { key: "nav.blog", href: "/blog" },
]

const languageOptions = [
  { code: "en" as LanguageCode, label: "English", flag: "🇬🇧" },
  { code: "fr" as LanguageCode, label: "French", flag: "🇫🇷" },
  { code: "de" as LanguageCode, label: "German", flag: "🇩🇪" },
  { code: "ar" as LanguageCode, label: "Arabic", flag: "🇸🇦" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="DotCreative Logo" width={220} height={50} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ServicesDropdown />
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary font-semibold" : "text-foreground",
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center gap-1 rounded-full border border-border bg-background/80 px-2 py-1">
              {languageOptions.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  className={cn(
                    "h-8 w-8 rounded-full text-base transition-colors",
                    language === lang.code
                      ? "bg-primary/15 ring-1 ring-primary"
                      : "hover:bg-muted",
                  )}
                  aria-label={lang.label}
                  title={lang.label}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
            <ModeToggle />
            <Button asChild className="bg-primary text-white hover:bg-primary/90">
              <Link href="/contact">{t("nav.bookDemo")}</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <div className="flex items-center gap-1 rounded-full border border-border bg-background/80 px-2 py-1">
              {languageOptions.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  className={cn(
                    "h-7 w-7 rounded-full text-sm transition-colors",
                    language === lang.code
                      ? "bg-primary/15 ring-1 ring-primary"
                      : "hover:bg-muted",
                  )}
                  aria-label={lang.label}
                  title={lang.label}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
            <ModeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/services"
                    className={cn(
                      "py-2",
                      pathname === "/services" || pathname.startsWith("/services/")
                        ? "text-primary font-semibold"
                        : "text-foreground",
                    )}
                  >
                    {t("nav.services")}
                  </Link>
                  <button
                    onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                    className="p-2 text-foreground"
                  >
                    {showServicesDropdown ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                  </button>
                </div>

                {/* Mobile Services Dropdown */}
                {showServicesDropdown && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-border pl-4">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="mr-3">{service.icon}</div>
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn("py-2", pathname === item.href ? "text-primary font-semibold" : "text-foreground")}
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 mt-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  {t("nav.bookDemo")}
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
