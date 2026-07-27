import Image from "next/image"
import Link from "next/link"
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Users, 
  Server, 
  Monitor,
  FileText,
  Clock,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CybersecurityPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/20">
                🚨 Critical Business Protection
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-destructive bg-clip-text text-transparent">
                Cybersecurity Excellence
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                In today&apos;s digital battlefield, your business data is under constant attack. Don&apos;t become another statistic—
                <span className="font-semibold text-primary"> protect what matters most</span> with our world-class cybersecurity solutions.
              </p>
              
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 mb-8">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mr-2" />
                  <span className="font-semibold text-foreground">Did You Know?</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  95% of successful cyber attacks are due to human error. A single breach costs businesses an average of $4.45 million. 
                  <strong className="text-foreground"> Don&apos;t wait until it&apos;s too late.</strong>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                  <Link href="/contact">Get Protected Now</Link>
                </Button>
                <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3">
                  <Link href="#services">View Our Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/cybersecurity-shield-laptop.png"
                  alt="Cybersecurity Protection"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">99.9% Threat Detection</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">24/7 Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cybersecurity Matters */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Cybersecurity is 
              <span className="text-primary"> Non-Negotiable</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              In an interconnected world, cyber threats evolve daily. Your business reputation, customer trust, 
              and financial stability depend on robust cybersecurity measures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-card backdrop-blur-sm border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <AlertTriangle className="h-12 w-12 text-destructive" />
                </div>
                <div className="text-3xl font-bold mb-2 text-destructive">2,200%</div>
                <h3 className="font-semibold mb-2 text-foreground">Rising Threats</h3>
                <p className="text-sm text-muted-foreground">Increase in ransomware attacks since 2020</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-card backdrop-blur-sm border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-2 text-secondary">95%</div>
                <h3 className="font-semibold mb-2 text-foreground">Human Factor</h3>
                <p className="text-sm text-muted-foreground">Of breaches caused by human error</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-card backdrop-blur-sm border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Clock className="h-12 w-12 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2 text-primary">287 days</div>
                <h3 className="font-semibold mb-2 text-foreground">Detection Time</h3>
                <p className="text-sm text-muted-foreground">Average time to detect a data breach</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-card backdrop-blur-sm border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <FileText className="h-12 w-12 text-accent-foreground" />
                </div>
                <div className="text-3xl font-bold mb-2 text-accent-foreground">$4.45M</div>
                <h3 className="font-semibold mb-2 text-foreground">Financial Impact</h3>
                <p className="text-sm text-muted-foreground">Average cost of a single data breach</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Cybersecurity Services */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Comprehensive
              <span className="text-primary"> Security Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From vulnerability assessments to 24/7 monitoring, we provide end-to-end cybersecurity services 
              tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Security Assessment & Auditing</CardTitle>
                </div>
                <p className="text-muted-foreground">Comprehensive security evaluations to identify vulnerabilities and compliance gaps in your infrastructure.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Penetration Testing</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Vulnerability Scanning</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Compliance Audits</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Risk Assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <Monitor className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">24/7 Security Monitoring</CardTitle>
                </div>
                <p className="text-muted-foreground">Round-the-clock threat detection and incident response to protect your systems from real-time attacks.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">SIEM Implementation</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Real-time Monitoring</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Incident Response</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Threat Intelligence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Data Protection & Encryption</CardTitle>
                </div>
                <p className="text-muted-foreground">Advanced encryption solutions to secure sensitive data both at rest and in transit.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">End-to-end Encryption</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Key Management</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Data Loss Prevention</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Backup Security</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Security Awareness Training</CardTitle>
                </div>
                <p className="text-muted-foreground">Comprehensive training programs to educate your team about cybersecurity best practices.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Phishing Simulations</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Security Workshops</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Policy Development</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Compliance Training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <Server className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Network Security</CardTitle>
                </div>
                <p className="text-muted-foreground">Robust network protection solutions including firewalls, intrusion detection, and access controls.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Firewall Management</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Network Segmentation</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Access Control</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">VPN Solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Incident Response & Recovery</CardTitle>
                </div>
                <p className="text-muted-foreground">Rapid response and recovery services to minimize damage and restore operations quickly.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Emergency Response</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Forensic Analysis</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Business Continuity</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Recovery Planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-destructive to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary-foreground/20 rounded-full px-6 py-2 mb-6">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <span className="font-medium">Security Emergency? We&apos;re Here 24/7</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Don&apos;t Wait for a Cyber Attack
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Every minute your business operates without proper cybersecurity protection is a minute too long. 
              Our experts are standing by to secure your digital future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-background text-foreground hover:bg-background/90 px-8 py-3 text-lg">
                <Link href="/contact">Secure My Business Now</Link>
              </Button>
              <Button variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg">
                <Link href="tel:+1234567890">Emergency Hotline</Link>
              </Button>
            </div>
            
            <p className="text-primary-foreground/70 text-sm mt-6">
              🔒 Free security consultation • ⚡ Rapid response guaranteed • 🛡️ 24/7 expert support
            </p>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                <Star className="h-6 w-6 text-primary fill-current" />
                <Star className="h-6 w-6 text-primary fill-current" />
                <Star className="h-6 w-6 text-primary fill-current" />
                <Star className="h-6 w-6 text-primary fill-current" />
                <Star className="h-6 w-6 text-primary fill-current" />
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                &quot;DotCreative&apos;s cybersecurity team transformed our security posture completely. We sleep better knowing our data is protected by the best.&quot;
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="font-semibold text-foreground">Sarah Johnson</div>
                  <div className="text-muted-foreground">CTO, TechCorp Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 