import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Cloud, Download, Shield, Smartphone, Star, UserCheck, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Shield className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Locum Pro</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#features">Features</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#testimonials">Testimonials</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#faq">FAQ</a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button asChild variant="ghost" className="text-base hover:bg-transparent hover:underline">
              <a href="https://app.locumpro.in/login">Log in</a>
            </Button>
            <Button>
              <a href="https://app.locumpro.in/register">
              Sign Up
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-background px-6 py-20 text-center shadow-2xl">
          <div className="relative z-10 mx-auto max-w-4xl space-y-8 animate-fade-in">
            <Badge className="px-4 py-1 mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              ✨ Revolutionizing Healthcare Staffing
            </Badge>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 animate-gradient">
              Empower Your Medical Practice
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Connect with qualified locum professionals, streamline scheduling, and elevate patient care with Locum Pro.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Button size="lg" className="group animate-pulse-slow">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                Watch Demo
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            <div className="flex justify-center gap-8 text-muted-foreground text-sm mt-8">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400" />
                4.9/5 Rating
              </div>
              <div>10K+ Active Users</div>
              <div>24/7 Support</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_70%)]" />
        </section>

        {/* Key Stats Section */}
        <section className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Healthcare Facilities", value: "500+" },
            { label: "Locum Professionals", value: "5,000+" },
            { label: "Shifts Filled", value: "100,000+" },
            { label: "Patient Satisfaction", value: "98%" },
          ].map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Features Section */}
        <section id="features" className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features for Healthcare Professionals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <UserCheck className="h-12 w-12 text-primary" />, title: "Find Trusted Locums", desc: "Connect with qualified professionals ready to cover your shifts." },
              { icon: <Calendar className="h-12 w-12 text-primary" />, title: "Flexible Scheduling", desc: "Easily manage and adjust your schedule with our intuitive calendar." },
              { icon: <Cloud className="h-12 w-12 text-primary" />, title: "Secure Data Storage", desc: "Store patient records and sensitive information securely in the cloud." },
              { icon: <Smartphone className="h-12 w-12 text-primary" />, title: "Mobile Accessibility", desc: "Access your locum service on the go with our fully responsive mobile app." },
              { icon: <Zap className="h-12 w-12 text-primary" />, title: "Instant Notifications", desc: "Receive real-time updates for shifts, requests, and new opportunities." },
              { icon: <Shield className="h-12 w-12 text-primary" />, title: "Health Compliance", desc: "Ensure your practice meets all necessary healthcare regulations and standards." }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">How Locum Pro Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Create Your Profile", desc: "Sign up and create a detailed profile showcasing your skills and availability." },
              { step: 2, title: "Browse Opportunities", desc: "Explore available shifts or post your staffing needs based on your role." },
              { step: 3, title: "Connect and Work", desc: "Match with the right professionals or facilities and start working together." },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mt-24 bg-muted/50 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Lee", role: "General Practitioner", quote: "Locum Pro has transformed my practice, making it incredibly easy to find reliable locum coverage." },
              { name: "Dr. John Doe", role: "Emergency Physician", quote: "The mobile app is a game-changer. I can manage my shifts and communicate with facilities on the go!" },
              { name: "Dr. Emily Wong", role: "Pediatrician", quote: "Outstanding support team and an intuitive interface. Locum Pro has streamlined our staffing process." }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {[
              { question: "How does Locum Pro work?", answer: "Locum Pro connects healthcare facilities with qualified locum professionals. Facilities can post their staffing needs, and locums can apply for shifts that match their skills and availability." },
              { question: "Is my data secure with Locum Pro?", answer: "Absolutely. We use state-of-the-art encryption and follow all HIPAA guidelines to ensure your data and patient information are always protected." },
              { question: "Can I use Locum Pro on my mobile device?", answer: "Yes! Locum Pro offers a fully responsive web application and native mobile apps for both iOS and Android devices." },
              { question: "How do I get started with Locum Pro?", answer: "Simply click the 'Get Started' button at the top of the page to create your account. You can then set up your profile and start connecting with healthcare facilities or locum professionals." }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Call to Action Section */}
        <section className="mt-24 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-background rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Staffing?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Join thousands of healthcare providers and locum professionals. Get started with Locum Pro today!
          </p>
          <Button size="lg" className="group">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="mt-24 border-t bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-muted-foreground">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Locum Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}