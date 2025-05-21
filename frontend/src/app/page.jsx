"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, User, Clock, Shield, Star, ArrowRight, CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex mx-auto  min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className=" flex h-16 items-center justify-between  px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                <span className="text-xl font-bold text-white">E</span>
              </div>
              <span className="text-xl font-bold tracking-tight">E-Doctor</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/browse-doctor" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Doctors
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-blue-600 transition-colors outline-none">
                Register
                <ChevronDown className="h-4 w-4 transition-transform" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/doctor-register">Doctor</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/user-register">Patient</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-full p-2 text-gray-500 hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 px-6 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/browse-doctor"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Doctors
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 border-t">
                <p className="text-sm font-medium mb-2">Register as:</p>
                <div className="flex gap-2">
                  <Link
                    href="/doctor-register"
                    className="text-sm px-3 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Doctor
                  </Link>
                  <Link
                    href="/user-register"
                    className="text-sm px-3 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Patient
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="  relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpg"
            alt="Doctors working together"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40"></div>
        </div>

        <div className=" relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                E-Doctor Healthcare
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience healthcare redefined. Connect with qualified doctors online, book appointments, and get expert
              medical advice from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8"
                asChild
              >
                <Link href="/doctor-register">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-black/10" asChild>
                <Link href="/browse-doctor">Browse Doctors</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className=" px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
              Australian digital healthcare services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why choose <span className="text-blue-600">e-Doctor</span>?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our doctors are all Australian trained GPs who hold specialist general practice qualifications accredited
              by the Australian Health Practitioner Regulation Agency (AHPRA) and can provide quality health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Easy to Use</h3>
                <p className="text-gray-600">
                  24/7 online access Australia-wide. Connect with healthcare professionals at your convenience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast & Efficient</h3>
                <p className="text-gray-600">
                  Skip the waiting room and consult with your doctor from home or anywhere convenient.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
                <p className="text-gray-600">
                  Your health information is protected with enterprise-grade security and strict privacy protocols.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className=" px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3]">
                <Image
                  src="/images/aboutus.jpg"
                  alt="Medical team collaborating"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">About Us</h2>
                <div className="h-1 w-20 bg-blue-600"></div>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  E-Doctor is Australia's leading telehealth platform, connecting patients with qualified healthcare
                  professionals through secure video consultations.
                </p>
                <p>
                  Our mission is to make healthcare accessible to everyone, regardless of location or mobility. We
                  believe that quality healthcare should be convenient, affordable, and available when you need it.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/learn-more">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className=" px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet our Team</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Our dedicated team of healthcare professionals committed to providing you with the best medical care and
              service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* First doctor - using doctor2.jpg */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-md mb-4">
                <div className="aspect-[3/4]">
                  <Image
                    src="/images/doctor2.jpg"
                    alt="Dr. Sarah Johnson"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">Dr. Sarah Johnson</h3>
              <p className="text-sm text-gray-500 mb-3">Pediatrician</p>

              <div className="flex gap-3">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Second doctor - using telehealth-doctor.jpg */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-md mb-4">
                <div className="aspect-[3/4]">
                  <Image
                    src="/images/doctor2.jpg"
                    alt="Dr. Michael Wilson"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">Dr. Michael Wilson</h3>
              <p className="text-sm text-gray-500 mb-3">Telehealth Specialist</p>

              <div className="flex gap-3">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Third doctor - using placeholder with improved details */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-md mb-4">
                <div className="aspect-[3/4]">
                 <Image
                    src="/images/doctor6.jpg"
                    alt="Dr. Michael Wilson"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">Dr. Emily Chen</h3>
              <p className="text-sm text-gray-500 mb-3">Cardiologist</p>

              <div className="flex gap-3">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Fourth doctor - using placeholder with improved details */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-md mb-4">
                <div className="aspect-[3/4]">
                  <Image
                    src="/images/doctor4.jpg"
                    alt="Dr. Michael Wilson"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">Dr. James Thompson</h3>
              <p className="text-sm text-gray-500 mb-3">Neurologist</p>

              <div className="flex gap-3">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Plans for You</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "X-Ray",
                price: "2000",
                features: ["Meet our consultants", "Reports and prescriptions", "Good healthcare", "Community support"],
                id: "plan-1",
              },
              {
                title: "Blood Test",
                price: "1000",
                features: [
                  "Unlimited file storage",
                  "10 GB bandwidth per month",
                  "10,000 tasks per month",
                  "Email support",
                  "100 Webhooks",
                ],
                id: "plan-2",
                popular: true,
              },
              {
                title: "Surgery",
                price: "15000",
                features: [
                  "Unlimited file storage",
                  "Unlimited bandwidth per month",
                  "1,000,000 tasks per month",
                  "Email and phone support",
                  "Unlimited Webhooks",
                ],
                id: "plan-3",
              },
            ].map((plan) => (
              <Card
                key={plan.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${plan.popular ? "border-blue-200 shadow-lg" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Popular</div>
                  </div>
                )}

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-center text-blue-800 mb-2">{plan.title}</h3>
                  <p className="text-center text-gray-500 mb-8">
                    For individuals and organizations who want to try our system
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="flex items-end justify-center gap-1 mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-500">per test</span>
                    </div>

                    <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                      <Link href={`/user/checkout/${plan.price}`}>
                        {plan.title === "Surgery" ? "Contact for test" : "Join for test"}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className=" px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">BLOG</h2>
            <p className="text-blue-600 max-w-2xl mx-auto">
              Stay updated with the latest healthcare insights, tips, and news from our medical experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Good Healthcare Practices",
                date: "July 19, 2025",
                image: "/images/blog3.jpeg",
                id: "blog-1",
              },
              {
                title: "Working with Legacy Health Systems",
                date: "April 07, 2025",
                image: "/images/blog2.jpeg",
                id: "blog-2",
              },
              {
                title: "10 Best Health Apps for Patients",
                date: "March 15, 2025",
                image: "/images/blog1.jpeg",
                id: "blog-3",
              },
              {
                title: "The Future of Telehealth",
                date: "January 27, 2025",
                image: "/images/blog5.jpeg",
                id: "blog-4",
              },
            ].map((blog) => (
              <Link
                key={blog.id}
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                <div className="relative mt-auto p-4">
                  <span className="block text-sm text-gray-200 mb-1">{blog.date}</span>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors">
                    {blog.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Patient Reviews</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "John McCulling",
                date: "January 28, 2025",
                rating: 5,
                review:
                  "The e-Doctor platform has been a game-changer for me. I was able to consult with a specialist without having to travel to the city. The video quality was excellent and the doctor was very thorough and attentive.",
                id: "review-1",
              },
              {
                name: "Kate Berg",
                date: "February 21, 2025",
                rating: 5,
                review:
                  "As someone with mobility issues, being able to see my doctor from home has been incredible. The platform is easy to use, even for someone not very tech-savvy like myself. I highly recommend this service.",
                id: "review-2",
              },
              {
                name: "Greg Jackson",
                date: "March 16, 2025",
                rating: 4,
                review:
                  "Very convenient service that saved me hours of waiting in a clinic. The doctor was professional and the prescription was sent directly to my local pharmacy. Would definitely use again.",
                id: "review-3",
              },
            ].map((review) => (
              <Card key={review.id} className="border shadow hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-3">
                    <div className="font-bold">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>

                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600">{review.review}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className=" px-4 md:px-6">
          <div className="max-w-3xl mx-auto rounded-2xl bg-white p-8 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">Get the latest updates</h2>
              <p className="text-gray-600">Sign up for our newsletter</p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
              />
              <Button type="submit">Subscribe</Button>
            </form>

            <p className="text-center text-xs text-gray-500">
              By signing up to our newsletter you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className=" px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Logo and description */}
            <div className="col-span-2 md:col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                  <span className="text-xl font-bold text-white">E</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">E-Doctor</span>
              </Link>

              <p className="text-gray-300 mb-6">
                Connecting patients with qualified healthcare professionals through secure video consultations, making
                healthcare accessible to everyone.
              </p>

              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation columns */}
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Doctor</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/doctor-register" className="text-gray-300 hover:text-white transition-colors">
                  Register
                </Link>
                <Link href="/doctor-login" className="text-gray-300 hover:text-white transition-colors">
                  Login
                </Link>
                <Link href="/doctor/manage-slots" className="text-gray-300 hover:text-white transition-colors">
                  Manage Slots
                </Link>
                <Link href="/doctor/appointments" className="text-gray-300 hover:text-white transition-colors">
                  Manage Appointments
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Patient</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/user-register" className="text-gray-300 hover:text-white transition-colors">
                  Register
                </Link>
                <Link href="/user-login" className="text-gray-300 hover:text-white transition-colors">
                  Login
                </Link>
                <Link href="/book-appointment" className="text-gray-300 hover:text-white transition-colors">
                  Book Appointment
                </Link>
                <Link href="/book-slot" className="text-gray-300 hover:text-white transition-colors">
                  Book Slot
                </Link>
                <Link href="/user/appointments" className="text-gray-300 hover:text-white transition-colors">
                  Manage Appointments
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Reports</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/reports/edit" className="text-gray-300 hover:text-white transition-colors">
                  Edit Report
                </Link>
                <Link href="/reports/view" className="text-gray-300 hover:text-white transition-colors">
                  View Report
                </Link>
                <Link href="/reports/download" className="text-gray-300 hover:text-white transition-colors">
                  Download Report
                </Link>
                <Link href="/reports/upload" className="text-gray-300 hover:text-white transition-colors">
                  Upload Report
                </Link>
              </nav>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center">
            <p className="text-sm text-gray-400">© 2025 E-Doctor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
