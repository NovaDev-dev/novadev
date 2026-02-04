// Local Components
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between pt-48 sm:items-start">
      <Navbar/>
      <Contact/>
      <Footer/>
    </main>
  );
}
