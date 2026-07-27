import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/images/logo.png" alt="DotCreative Logo" width={200} height={60} className="h-14 w-auto" />
            </Link>
            <p className="text-sm text-white/80 mt-4 max-w-xs">
              Empowering businesses with innovative software solutions and expert consulting services since 2015.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/mobile-app-development" className="text-white/70 hover:text-primary transition-colors">
                 Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-app-development" className="text-white/70 hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/saas-development" className="text-white/70 hover:text-primary transition-colors">
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-white/70 hover:text-primary transition-colors">
                  Cybersecurity
                </Link>
              </li>
              
               <li>
                <Link href="/services/iot-solutions" className="text-white/70 hover:text-primary transition-colors">
                  IoT Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-white/80">
                  21 Tigoni Road, Kilimani
                  <br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary shrink-0" />
                <a href="tel:+254703822480" className="text-white/80 hover:text-primary transition-colors">
                  +254 (703) 822480
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary shrink-0" />
                <a href="mailto:info@dotcreative.co.ke" className="text-white/80 hover:text-primary transition-colors">
                  info@dotcreative.co.ke
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Mon - Fri: 9:00 AM - 6:00 PM EAT
                  <br />
                  Sat - Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
       <p className="text-sm text-white/60">
  &copy; {new Date().getFullYear()} DotCreative. A subsidiary of{" "}
  <a href="https://hasrangroup.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
    Hasran Group
  </a>. All rights reserved.
</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
           
          </div>
        </div>
      </div>
    </footer>
  )
}
