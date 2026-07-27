"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type FaqItem = {
  question: string
  answer: string
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const leftColumnFaqs: FaqItem[] = [
    {
      question: "Can ERPNext be connected with other software applications?",
      answer:
        "Absolutely. ERPNext has strong integration capabilities, allowing for smooth interaction with other software applications including accounting software, CRM systems, e-commerce platforms, and more. DotCreative can assist you with integrating ERPNext with your existing systems, resulting in a single environment.",
    },
    {
      question: "What security measures are in place to safeguard my data in ERPNext?",
      answer:
        "ERPNext implements robust security measures including role-based access control, data encryption, regular security updates, and comprehensive audit trails. Our team ensures your data is protected with industry-standard security protocols and best practices.",
    },
    {
      question: "What is the difference between ERP and ERPNext?",
      answer:
        "ERP (Enterprise Resource Planning) is a general term for software systems that integrate core business processes. ERPNext is a specific open-source ERP software solution that offers comprehensive modules for various business functions. It's known for its flexibility, user-friendly interface, and cost-effectiveness compared to many proprietary ERP systems.",
    },
    {
      question: "What types of training options are available to ERPNext users?",
      answer:
        "We offer comprehensive training options including on-site workshops, virtual training sessions, role-specific training, and self-paced learning resources. Our training programs are customized to your team's needs and can be scheduled at your convenience to ensure smooth adoption of the ERPNext system.",
    },
    {
      question: "Will DotCreative give assistance, and what if a client needs direct help from Frappe?",
      answer:
        "DotCreative provides comprehensive support for all ERPNext implementations. As certified ERPNext partners, we handle most support requirements directly. For specialized cases requiring Frappe's involvement, we facilitate communication and ensure your concerns are addressed promptly by the appropriate team.",
    },
  ]

  const rightColumnFaqs: FaqItem[] = [
    {
      question: "What is open-source software?",
      answer:
        "Open-source software is software with source code that anyone can inspect, modify, and enhance. ERPNext being open-source means it's transparent, customizable, and not locked to a single vendor. This provides greater flexibility, community support, and often lower total cost of ownership compared to proprietary solutions.",
    },
    {
      question: "What is a software subscription fee?",
      answer:
        "A software subscription fee is a recurring payment for using ERPNext, which typically includes access to the software, updates, security patches, and basic support. The subscription model ensures you always have access to the latest features and improvements without large upfront costs.",
    },
    {
      question: "What is Frappe Cloud?",
      answer:
        "Frappe Cloud is a hosting platform specifically designed for ERPNext and other Frappe applications. It offers managed hosting with automatic backups, updates, and scaling capabilities, allowing businesses to focus on their operations rather than IT infrastructure management.",
    },
    {
      question: "Can users host ERPNext themselves?",
      answer:
        "Yes, users can self-host ERPNext on their own servers or cloud infrastructure. This gives complete control over the environment but requires technical expertise for setup and maintenance. DotCreative offers both self-hosted and managed hosting options to suit your specific requirements and IT capabilities.",
    },
    {
      question: "Can I access ERPNext from anywhere?",
      answer:
        "Yes, ERPNext is a web-based application that can be accessed from anywhere with an internet connection. Whether you're in the office, working remotely, or traveling, you can securely access your ERPNext instance from any device with a web browser, ensuring business continuity and flexibility.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const renderFaqItem = (item: FaqItem, index: number) => (
    <div key={index} className="border-b border-border">
      <button
        className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors group"
        onClick={() => toggleFaq(index)}
      >
        <h3 className="text-lg font-semibold pr-8">{item.question}</h3>
        <div className="text-primary">
          <ChevronDown className={cn("transition-transform duration-300", openIndex === index ? "rotate-180" : "")} />
        </div>
      </button>
      <div
        className={cn("overflow-hidden transition-all duration-300", openIndex === index ? "max-h-96 pb-6" : "max-h-0")}
      >
        <p className="text-muted-foreground">{item.answer}</p>
      </div>
    </div>
  )

  return (
    <>
      {/* Stylized FAQS heading */}
      <div className="relative text-center mb-16">
        <h2 className="text-[150px] font-bold text-border/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          FAQS
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold relative z-10">
          FAQS
          <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
        </h2>
      </div>

      {/* Two-column FAQ layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-6xl mx-auto">
        {/* Left Column */}
        <div>{leftColumnFaqs.map((faq, index) => renderFaqItem(faq, index))}</div>

        {/* Right Column */}
        <div>{rightColumnFaqs.map((faq, index) => renderFaqItem(faq, index + leftColumnFaqs.length))}</div>
      </div>
    </>
  )
}
