"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const erpSolutions = [
  {
    title: "Financial Management",
    href: "/erp-solutions/financial-management",
    description: "Comprehensive financial tools for accounting, budgeting, and reporting.",
  },
  {
    title: "Inventory Management",
    href: "/erp-solutions/inventory-management",
    description: "Real-time tracking and optimization of your inventory levels.",
  },
  {
    title: "HR Management",
    href: "/erp-solutions/hr-management",
    description: "Complete employee management and payroll processing system.",
  },
  {
    title: "Supply Chain",
    href: "/erp-solutions/supply-chain",
    description: "End-to-end supply chain visibility and management solutions.",
  },
]

const services = [
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    description: "Native and cross-platform mobile applications.",
  },
  {
    title: "Web App Development",
    href: "/services/web-app-development",
    description: "Modern web applications with cutting-edge technologies.",
  },
  {
    title: "Project Management",
    href: "/services/project-management-consultancy",
    description: "Professional project management and consulting services.",
  },
  {
    title: "AI Development",
    href: "/services/ai-development",
    description: "Custom AI and machine learning solutions.",
  },
  {
    title: "IoT Solutions",
    href: "/services/iot-solutions",
    description: "Connected device solutions and IoT implementations.",
  },
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Advanced security solutions to protect your digital assets.",
  },
]

export default function NavigationMenuDemo() {
  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {services.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>ERP Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {erpSolutions.map((solution) => (
                <ListItem
                  key={solution.title}
                  title={solution.title}
                  href={solution.href}
                >
                  {solution.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/cybersecurity" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Cybersecurity
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}) 