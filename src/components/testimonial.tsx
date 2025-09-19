import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Hop connected me to a group dynamic individuals. I made a lot of friends and conduct events for the youth now.",
      name: "Samuel Michael",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Its the best thing i could ever ask for. I have a loving family, friends and a community that helps me grow in every aspect of life",
      name: "Maitri Patel",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Being a stranger in this big city, HOP provided me a family which is so loving and caring.",
      name: "Dikshita Patel",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <AnimatedTestimonials testimonials={testimonials} />
    </>
  );
}
