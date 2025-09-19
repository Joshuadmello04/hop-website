import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Translucent Overlay on Left Side */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent md:from-black/80 md:via-black/50 md:to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
              <span className="block text-balance">Welcome to</span>
              <span className="block bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                House of Prayer
              </span>
            </h1>

            {/* Subheading */}
            <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl lg:text-2xl">
              A Community of Faith, Hope, and Love
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-red-600 text-white hover:bg-red-700 px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Join Us This Sunday
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-12 w-6 items-start justify-center rounded-full border-2 border-white/50 p-2">
          <div className="h-2 w-1 animate-pulse rounded-full bg-white/70"></div>
        </div>
      </div>
    </section>
  )
}
