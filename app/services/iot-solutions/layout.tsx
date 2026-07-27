import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IoT Solutions | DotCreative",
  description:
    "Empower your business with our comprehensive IoT solutions. From consulting and custom development to integration, analytics, and security solutions.",
}

export default function IoTSolutionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
