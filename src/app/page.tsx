import Hero from "@/components/Hero";
import StudioSnapshot from "@/components/StudioSnapshot";
// import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import OurGallery from "@/components/OurGallery";
import Services from "../components/services";
import Project from "@/components/ProjectsSection";




export default function Home() {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto justify-center relative">
        <Hero />
        <StudioSnapshot />
        <Services />
        <Project />
        {/* <TestimonialsMarquee /> */}
        <OurGallery />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent blur-3xl" />
      </div>
    </>
  );
}
