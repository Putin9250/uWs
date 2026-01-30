import About from "./assets/Components/About";
import Hero from "./assets/Components/Hero";
import Navbar from "./assets/Components/Navbar";
import AdSection from "./assets/Components/ad";
import Services from "./assets/Components/Services";
import Testimonials from "./assets/Components/Testimonials";
import Portfolio from "./assets/Components/Portfolio";
import Team from "./assets/Components/Team";
import Contact from "./assets/Components/Contact";
import Process from "./assets/Components/Process";
import FAQ from "./assets/Components/FAQ";
import Footer from "./assets/Components/Footer";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./assets/Components/LandingPage";
import Pricing from "./assets/Components/Pricing/Components/Pricing";
import ScrollToTop from "./assets/Components/ScrollToTop";


function App() {
  return (
    <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
    
    </>
  );
}

export default App;
