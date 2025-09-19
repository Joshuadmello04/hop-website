import Footer from "@/components/footer";
import HeroSection from "@/components/herosection";
import { ChurchNavbar } from "@/components/navbar";
import SignupFormDemo from "@/components/signup-form-demo";
import { Spotlight } from "@/components/spotlight";
import { Testimonials } from "@/components/testimonial";

export default function Home() {
  return (
    <div className="relative h-full w-full min-h-screen bg-slate-950 overflow-hidden">
      {/* Left Glow */}
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      
      {/* Right Glow */}
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />

      {/* Page Content */}
      <ChurchNavbar />
      <HeroSection/>
      <Spotlight />
      <Testimonials/>
      <SignupFormDemo/>
      <Footer/>
    </div>
  );
}
