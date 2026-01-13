import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurWorkProcess from "@/components/OurWorkProcess";



export default function Home() {
  return (
    <>
    <div className="w-full max-w-screen-xl mx-auto p-2 relative">
      <Navbar />
      <Hero />
      <OurWorkProcess />
      </div>
    </>
  );
}
