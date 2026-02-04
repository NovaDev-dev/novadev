// Local Components
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Showcase from "@/components/layout/Showcase";
import Services from "@/components/layout/Services";
import Testimonials from "@/components/layout/Testimonials";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between pt-26 sm:items-start">
      <Navbar/>
      <Hero/>
      <Showcase/>
      <Services/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
