import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web App Development | DotCreative",
  description:
    "Modern web application development services including progressive web apps, custom solutions, and enterprise applications.",
}

export default function WebAppDevelopmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
