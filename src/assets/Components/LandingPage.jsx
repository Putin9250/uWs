import Navbar from "./Navbar";
import Hero from "./Hero";
import AdSection from "./ad";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Contact from "./Contact";
import Process from "./Process";
import FAQ from "./FAQ";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AdSection />
      <About />
      <Testimonials />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Process />
      <FAQ />
      <Footer />
    </>
  );
}
