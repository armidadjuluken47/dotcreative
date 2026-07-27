"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { toast } from "sonner"

export default function NewsletterPopup() {
  const formSubmitEndpoint = "https://formsubmit.co/ajax/web@dotcreative.co.ke"
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    // Check if user has already seen the popup
    const popupShown = sessionStorage.getItem("newsletterPopupShown")
    if (!popupShown) {
      // Show popup after 30 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
        sessionStorage.setItem("newsletterPopupShown", "true")
      }, 30000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          source: "Newsletter Popup",
          _subject: "New Newsletter Subscription",
          _template: "table",
          _captcha: "false",
        }),
      })

      const responseData = await response.json()
      if (!response.ok) {
        throw new Error(responseData.error || "Failed to subscribe")
      }

      toast.success("Subscribed successfully!", {
        description: "You'll receive updates in your inbox.",
      })
      setEmail("")
      setIsVisible(false)
    } catch (error) {
      toast.error("Subscription failed", {
        description: error instanceof Error ? error.message : "Please try again later.",
      })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <Card className="w-full max-w-md mx-4 animate-slide-up">
        <CardHeader className="relative">
          <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={() => setIsVisible(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          <div className="flex justify-center mb-4">
            <Image src="/images/logo.png" alt="DotCreative Logo" width={180} height={45} className="w-auto h-10" />
          </div>
          <CardTitle className="text-xl">Stay Updated</CardTitle>
          <CardDescription>
            Subscribe to our newsletter for the latest updates, industry insights, and exclusive offers.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setIsVisible(false)}>
              Not Now
            </Button>
            <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
              Subscribe
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
