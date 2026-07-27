import type React from "react"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import NetworkNodesBackground from "@/components/network-nodes-background"
import { Toaster } from "sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "DotCreative | Empowering Your Digital Evolution",
  description: "Innovative IT solutions for enterprise software, SaaS, and AI implementation.",
  generator: "v0.dev",
  icons: {
    icon: "/images/fav.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>
            <NetworkNodesBackground />
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <CookieBanner />
            </div>
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: "white",
                  border: "1px solid",
                },
                success: {
                  style: {
                    background: "linear-gradient(to right, #ecfdf5, #f0fdf4)",
                    border: "1px solid #86efac",
                    color: "#166534",
                  },
                },
                error: {
                  style: {
                    background: "linear-gradient(to right, #fef2f2, #fff1f2)",
                    border: "1px solid #fca5a5",
                    color: "#991b1b",
                  },
                },
                info: {
                  style: {
                    background: "linear-gradient(to right, #eff6ff, #f0f7ff)",
                    border: "1px solid #93c5fd",
                    color: "#1e40af",
                  },
                },
              }}
            />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
