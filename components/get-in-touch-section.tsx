"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown } from "lucide-react"
import { toast } from "sonner"

// Country codes data
const countryCodes = [
  { code: "US", name: "United States", dial_code: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dial_code: "+44", flag: "🇬🇧" },
  { code: "CA", name: "Canada", dial_code: "+1", flag: "🇨🇦" },
  { code: "AU", name: "Australia", dial_code: "+61", flag: "🇦🇺" },
  { code: "DE", name: "Germany", dial_code: "+49", flag: "🇩🇪" },
  { code: "FR", name: "France", dial_code: "+33", flag: "🇫🇷" },
  { code: "IN", name: "India", dial_code: "+91", flag: "🇮🇳" },
  { code: "IT", name: "Italy", dial_code: "+39", flag: "🇮🇹" },
  { code: "JP", name: "Japan", dial_code: "+81", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", dial_code: "+82", flag: "🇰🇷" },
  { code: "NG", name: "Nigeria", dial_code: "+234", flag: "🇳🇬" },
  { code: "BR", name: "Brazil", dial_code: "+55", flag: "🇧🇷" },
  { code: "NL", name: "Netherlands", dial_code: "+31", flag: "🇳🇱" },
  { code: "ES", name: "Spain", dial_code: "+34", flag: "🇪🇸" },
  { code: "SE", name: "Sweden", dial_code: "+46", flag: "🇸🇪" },
  { code: "CH", name: "Switzerland", dial_code: "+41", flag: "🇨🇭" },
  { code: "ZA", name: "South Africa", dial_code: "+27", flag: "🇿🇦" },
  { code: "SG", name: "Singapore", dial_code: "+65", flag: "🇸🇬" },
  { code: "AE", name: "United Arab Emirates", dial_code: "+971", flag: "🇦🇪" },
  { code: "MX", name: "Mexico", dial_code: "+52", flag: "🇲🇽" },
  { code: "KE", name: "Kenya", dial_code: "+254", flag: "🇰🇪" },
  { code: "GH", name: "Ghana", dial_code: "+233", flag: "🇬🇭" },
  { code: "EG", name: "Egypt", dial_code: "+20", flag: "🇪🇬" },
  { code: "SA", name: "Saudi Arabia", dial_code: "+966", flag: "🇸🇦" },
  { code: "CN", name: "China", dial_code: "+86", flag: "🇨🇳" },
  { code: "RU", name: "Russia", dial_code: "+7", flag: "🇷🇺" },
  { code: "IL", name: "Israel", dial_code: "+972", flag: "🇮🇱" },
  { code: "NZ", name: "New Zealand", dial_code: "+64", flag: "🇳🇿" },
  { code: "TH", name: "Thailand", dial_code: "+66", flag: "🇹🇭" },
  { code: "PT", name: "Portugal", dial_code: "+351", flag: "🇵🇹" },
]

export default function GetInTouchSection() {
  const formSubmitEndpoint = "https://formsubmit.co/ajax/web@dotcreative.co.ke"
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    countryCode: "KE", // Changed default from US to Kenya (KE)
    phone: "",
    message: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Find selected country to get dial code
      const selectedCountry = countryCodes.find((country) => country.code === formData.countryCode)
      
      // Prepare form data with formatted phone number
      const submissionData = {
        ...formData,
        phone: `${selectedCountry?.dial_code}${formData.phone}` // Combine dial code with phone
      }

      console.log('Submitting form data:', submissionData) // Debug log

      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...submissionData,
          _subject: "New Consultation Request",
          _template: "table",
          _captcha: "false",
        }),
      })

      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to submit form')
      }

      // Reset form
      setFormData({
        service: "",
        name: "",
        email: "",
        countryCode: "KE",
        phone: "",
        message: "",
      })

      // Show success message
      toast.success('Message sent successfully!', {
        description: 'We will contact you soon.',
        duration: 5000,
        style: {
          background: 'linear-gradient(to right, #ecfdf5, #f0fdf4)',
          border: '1px solid #86efac',
          color: '#166534',
        },
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Failed to send message', {
        description: error instanceof Error ? error.message : 'Please try again later.',
        duration: 5000,
        style: {
          background: 'linear-gradient(to right, #fef2f2, #fff1f2)',
          border: '1px solid #fca5a5',
          color: '#991b1b',
        },
      })
    }
  }

  // Find the selected country
  const selectedCountry = countryCodes.find((country) => country.code === formData.countryCode) || countryCodes[0]

  return (
    <section className="py-24 relative overflow-hidden bg-[#f8f9fa]">
      {/* Background watermark */}
      <div className="absolute inset-0 z-0 opacity-[0.03] flex items-center justify-center">
        <div className="text-[20rem] font-bold tracking-wider text-gray-400">LET'S TALK</div>
      </div>

      {/* Background logo watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.05]">
        <div
          className="w-[600px] h-[600px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/logo.png')" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-700">GET IN TOUCH WITH US</h2>
          <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Project info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
                LET'S START A <span className="text-primary">PROJECT</span>
                <br />
                <span className="text-primary">TOGETHER</span>
              </h3>
              <p className="text-gray-600 mt-6 text-lg">
                We'll contact you within a couple of hours to schedule a meeting to discuss your goals.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-gray-800">Three steps come next:</h4>
              <ul className="space-y-4 mt-4">
                {[
                  "We set up a business consultation to discuss your idea.",
                  "We dive into the details of your project and conduct our own pre-discovery.",
                  "You get an offer tailored to your requirements with an actionable plan.",
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center"></div>
                    </div>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Book a Free <span className="text-primary">Consultation</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Select onValueChange={(value) => handleChange("service", value)}>
                  <SelectTrigger className="w-full border-primary/20 focus:border-primary focus:ring-primary rounded-md border border-gray-300 py-3 px-4 text-gray-500">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="erp">Enterprise Resource Planning</SelectItem>
                    <SelectItem value="saas">SaaS Development</SelectItem>
                    <SelectItem value="ai">AI Solutions</SelectItem>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="consulting">IT Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem> {/* Added "Other" option */}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full rounded-md border border-gray-300 py-3 px-4 text-gray-800 focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full rounded-md border border-gray-300 py-3 px-4 text-gray-800 focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div className="flex gap-2">
                <div className="relative w-[90px]">
                  <Select onValueChange={(value) => handleChange("countryCode", value)}>
                    <SelectTrigger className="w-full h-10 border border-gray-300 rounded-l-md border-r-1 focus:border-primary focus:ring-primary flex items-center justify-center px-2">
                      <div className="flex items-center">
                        <span className="text-lg">{selectedCountry.flag}</span>
                      </div>
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px] overflow-y-auto">
                      {countryCodes.map((country) => (
                        <SelectItem 
                          key={country.code} 
                          value={country.code} 
                          className="flex items-center py-2 cursor-pointer hover:bg-gray-50"
                        >
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{country.flag}</span>
                              <span className="font-medium">{country.name}</span>
                            </div>
                            <span className="text-sm text-gray-500">{country.dial_code}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="flex-1 rounded-r-md border border-gray-300 py-3 px-4 text-gray-800 focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Describe Your Project Need."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full rounded-md border border-gray-300 py-3 px-4 text-gray-800 focus:border-primary focus:ring-primary min-h-[120px]"
                  required
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 py-2 rounded-full">
                  Submit <span className="ml-2">→</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
