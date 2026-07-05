import Hero from "@/components/Hero";
import Intro from "@/components/sections/Intro";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Intro />
        <Work />
        <Services />
        <Stats />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
