import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | DotCreative",
  description:
    "Explore our comprehensive range of technology services including mobile and web development, AI, IoT, and more.",
}

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
