import Hero from "@/components/Hero";
import Navbar from "@/NaviGationMenu/Navbar";
import StudioSnapshot from "@/components/StudioSnapshot";





export default function Home() {
  return (
    <>
    <div className="w-full max-w-screen-xl mx-auto justify-center relative">
      <Navbar />
      <Hero />
      <StudioSnapshot />
      </div>
    </>
  );
}
