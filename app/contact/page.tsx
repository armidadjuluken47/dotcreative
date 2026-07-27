"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { toast } from "sonner"

export default function ContactPage() {
  const formSubmitEndpoint = "https://formsubmit.co/ajax/web@dotcreative.co.ke"
  const [formData, setFormData] = useState({
    service: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Prepare form data
      const submissionData = {
        ...formData,
        name: `${formData.firstName} ${formData.lastName}`,
        service: formData.service || 'General Inquiry',
        countryCode: 'KE', // Default to Kenya
        phone: `+254${formData.phone}` // Add Kenya prefix
      }

      console.log('Submitting form data:', submissionData)

      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...submissionData,
          _subject: "New Contact Form Submission",
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
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })

      // Show success message
      toast.success('Message sent successfully!', {
        description: 'We will contact you soon.',
        duration: 5000,
        className: 'bg-green-50 border-green-200',
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
        className: 'bg-red-50 border-red-200',
        style: {
          background: 'linear-gradient(to right, #fef2f2, #fff1f2)',
          border: '1px solid #fca5a5',
          color: '#991b1b',
        },
      })
    }
  }

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Have questions or ready to start your digital transformation journey? Get in touch with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-background rounded-xl shadow-md border border-border p-6 md:p-8 order-2 lg:order-1">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Select onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger id="subject" className="border-primary/20 focus:border-primary">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="703822480"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={5}
                    required
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 transform hover:translate-y-[-2px]"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="bg-primary text-white rounded-xl p-6 md:p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-secondary shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium mb-1">Headquarters</h3>
                      <p className="text-white/80">
                        21 Tigoni Road, Kilimani
                        <br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-secondary shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-white/80">
                        <a href="tel:+254703822480" className="hover:text-secondary transition-colors">
                          +254 (703) 822480
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-secondary shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-white/80">
                        <a href="mailto:info@dotcreative.co.ke" className="hover:text-secondary transition-colors">
                          info@dotcreative.co.ke
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-secondary shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium mb-1">Business Hours</h3>
                      <p className="text-white/80">
                        Monday - Friday: 9:00 AM - 6:00 PM EAT
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-muted rounded-xl p-6 md:p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
                <p className="text-muted-foreground mb-6">
                  Follow us on social media to stay updated with our latest news and announcements.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-background text-foreground hover:bg-primary hover:text-white transition-colors duration-300 h-12 w-12 rounded-full flex items-center justify-center shadow-sm"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-background text-foreground hover:bg-primary hover:text-white transition-colors duration-300 h-12 w-12 rounded-full flex items-center justify-center shadow-sm"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-background text-foreground hover:bg-primary hover:text-white transition-colors duration-300 h-12 w-12 rounded-full flex items-center justify-center shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-background text-foreground hover:bg-primary hover:text-white transition-colors duration-300 h-12 w-12 rounded-full flex items-center justify-center shadow-sm"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container">
          <div className="rounded-xl overflow-hidden h-[400px] shadow-md border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8177756776705!2d36.78236867576566!3d-1.2913010356325358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a9a2710c15%3A0x9f0c56c032b2c1d0!2sTigoni%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1715603847831!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="DotCreative Headquarters Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How quickly can you implement your solutions?",
                  answer:
                    "Implementation timelines vary based on the complexity of your requirements. Typically, our SaaS solutions can be deployed within 2-4 weeks, while enterprise ERP implementations may take 2-6 months. We'll provide a detailed timeline during your consultation.",
                },
                {
                  question: "Do you offer customization for your products?",
                  answer:
                    "Yes, all our products can be customized to meet your specific business needs. Our team works closely with you to understand your requirements and tailor our solutions accordingly.",
                },
                {
                  question: "What kind of support do you provide after implementation?",
                  answer:
                    "We offer comprehensive support packages including 24/7 technical support, regular maintenance updates, and dedicated account managers. Our support team is available via phone, email, and live chat.",
                },
                {
                  question: "Can your solutions integrate with our existing systems?",
                  answer:
                    "Absolutely. Our products are designed with integration capabilities in mind. We support standard APIs and have experience integrating with a wide range of third-party systems and legacy applications.",
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
