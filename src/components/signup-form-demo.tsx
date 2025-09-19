"use client"
import type React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { MapPin, Clock, Phone } from "lucide-react"

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-red-100/80 text-lg max-w-2xl mx-auto">
            Wed love to hear from you. Share your prayer requests and connect with our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Signup Form */}
          <div className="bg-black/40 backdrop-blur-md border border-red-500/20 rounded-2xl p-8 shadow-2xl shadow-red-500/10">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">♥</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Share Your Prayer Request</h3>
            </div>
            <p className="text-red-100/80 mb-8">
              We believe in the power of prayer. Share your heart with us and let our community pray for you.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <LabelInputContainer>
                <Label htmlFor="fullname" className="text-red-100 font-medium">
                  Full Name *
                </Label>
                <Input
                  id="fullname"
                  placeholder="Your full name"
                  type="text"
                  className="bg-black/30 border-red-500/30 text-white placeholder:text-red-200/50 focus:border-red-400 focus:ring-red-400/20 backdrop-blur-sm"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="phone" className="text-red-100 font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  placeholder="+91 98765 43210"
                  type="tel"
                  className="bg-black/30 border-red-500/30 text-white placeholder:text-red-200/50 focus:border-red-400 focus:ring-red-400/20 backdrop-blur-sm"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="prayer" className="text-red-100 font-medium">
                  Prayer Request *
                </Label>
                <textarea
                  id="prayer"
                  placeholder="Please share what you'd like us to pray for..."
                  rows={4}
                  className="w-full px-3 py-2 bg-black/30 border border-red-500/30 rounded-md text-white placeholder:text-red-200/50 focus:border-red-400 focus:ring-red-400/20 backdrop-blur-sm resize-none"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="email" className="text-red-100 font-medium">
                  Email Address (Optional)
                </Label>
                <Input
                  id="email"
                  placeholder="your.email@example.com (for updates)"
                  type="email"
                  className="bg-black/30 border-red-500/30 text-white placeholder:text-red-200/50 focus:border-red-400 focus:ring-red-400/20 backdrop-blur-sm"
                />
                <p className="text-xs text-red-200/60 mt-1">
                  Optional: Receive encouraging messages and prayer updates
                </p>
              </LabelInputContainer>

              <button
                className="group/btn relative block h-12 w-full rounded-lg bg-gradient-to-r from-red-600 to-red-700 font-semibold text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:from-red-500 hover:to-red-600 hover:shadow-xl hover:shadow-red-500/30 backdrop-blur-sm border border-red-400/20"
                type="submit"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span className="mr-2">📤</span>
                  Send Prayer Request
                </span>
                <BottomGradient />
              </button>
            </form>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8">
            {/* Visit Us Card */}
            <div className="bg-black/40 backdrop-blur-md border border-red-500/20 rounded-2xl p-8 shadow-2xl shadow-red-500/10">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-xl font-bold text-white">Visit Us</h3>
              </div>
              <div className="text-red-100/80 space-y-2">
                <p className="font-medium">Rotary Club Of Bombay West</p>
                <p>Gr. Floor, Rotary Club</p>
                <p>Juhu Tara Rd, Mangelwadi</p>
                <p>Shivaji Nagr, Santacruz (West)</p>
                <p>Mumbai, Maharashtra 400054</p>
              </div>
            </div>

            {/* Service Times Card */}
            <div className="bg-black/40 backdrop-blur-md border border-red-500/20 rounded-2xl p-8 shadow-2xl shadow-red-500/10">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-xl font-bold text-white">Service Times</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <div>
                    <p className="text-white font-medium">Hindi Service</p>
                    <p className="text-red-100/80 text-sm">Sunday: 8:00 AM - 11:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <div>
                    <p className="text-white font-medium">English Service</p>
                    <p className="text-red-100/80 text-sm">Sunday: 11:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Prayer Line Card */}
            <div className="bg-gradient-to-r from-red-600/20 to-red-700/20 backdrop-blur-md border border-red-400/30 rounded-2xl p-8 shadow-2xl shadow-red-500/10">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-red-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Emergency Prayer Line</h3>
              </div>
              <p className="text-red-100/80 mb-6">
                Need immediate prayer support? Our dedicated prayer line is available 24/7
              </p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 border border-red-400/20">
                Call Prayer Line
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
}
