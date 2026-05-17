import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import CampusFeatures from "@/components/CampusFeatures";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <CampusFeatures />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
