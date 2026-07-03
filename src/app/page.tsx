import Hero from "@/components/Hero";
import Intro from "@/components/sections/Intro";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
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
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
