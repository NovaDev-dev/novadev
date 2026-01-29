// Local Components
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Showcase from "@/components/layout/Showcase";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between py-26 sm:items-start">
      <Navbar/>
      <Hero/>
      <Showcase/>
    </main>
  );
}
