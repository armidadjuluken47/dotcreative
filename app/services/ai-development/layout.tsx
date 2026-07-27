import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Development Services | DotCreative",
  description:
    "Transform your business with our cutting-edge AI development services. From machine learning and natural language processing to computer vision and predictive analytics.",
}

export default function AIDevelopmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
