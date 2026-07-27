import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Management Consultancy | DotCreative",
  description:
    "Streamline your software development projects with our comprehensive project management services. From technical project management to business consulting and ITSM.",
}

export default function ProjectManagementConsultancyLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
