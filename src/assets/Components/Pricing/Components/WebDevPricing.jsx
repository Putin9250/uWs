import { motion } from "framer-motion";
import Logo from "../Photos/Logo2.png";

export default function WebDevPricing() {
  const quickLinks = [
    { name: "Home", href: "#Home" },
    { name: "Services", href: "#Services" },
    { name: "About", href: "#Mission" },
    { name: "Portfolio", href: "#PortFolio" },
    { name: "Team", href: "#Team" },
    { name: "Contact", href: "#Contact" },
    { name: "FAQ", href: "#FAQ" },
  ];

  const services = [
    "Web Development",
    "UI/UX Design",
    "Business Development",
    "WordPress Development",
    "Site Management",
    "Digital Marketing",
    "SEO & Logo Design",
    "Google Maps Listing",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen text-white bg-gradient-to-b from-[#0a0f1a] via-[#101623] to-[#121826] overflow-hidden flex flex-col">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('https://tse3.mm.bing.net/th/id/OIP.3Cz4OINTEOwQy59WDGbJOAHaEW?w=2000&h=1176&rs=1&pid=ImgDetMain&o=7&rm=3')] bg-cover bg-center opacity-15 blur-sm"></div>

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative z-10 text-center mt-20 px-4"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide">
            Simple | Modern | <span className="text-blue-400">Affordable Websites.</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            We craft professional websites that help your business shine — fast,
            mobile-friendly, and at a price that fits every pocket.
          </p>
        </div>
      </motion.div>

      {/* Ribbon Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 mt-10 text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/20 rounded-xl py-4 px-6 w-fit mx-auto"
      >
        <p className="text-white/90 text-sm md:text-base">
          🚀 Limited Offer — Get{" "}
          <span className="text-blue-400 font-semibold">Free Google Maps Listing</span>{" "}
          with all plans this month!
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 mt-16 "
      >
        {/** Starter Plan */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md text-center shadow-lg hover:border-green-400/40 transition-all duration-300"
        >
          <div className="bg-green-500/20 text-green-400 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
            Best for Beginners
          </div>
          <h2 className="text-2xl font-semibold mb-2">Starter Website</h2>
          <p className="text-white/60 mb-4">Simple 3-page website for individuals or small shops</p>
          <h3 className="text-4xl font-bold text-green-400 mb-4">₹1,499</h3>
          <p className="text-white/60 text-sm mb-6">One-time payment. No hidden fees.</p>
          <ul className="text-left space-y-3 text-sm bg-white/5 rounded-xl p-5 mb-6">
            {[
              "Home, About, Contact pages",
              "Fully responsive for mobile & desktop",
              "Email contact form integration",
              "Basic SEO setup",
              "Free hosting (1 month)",
              "Delivery in 2–3 days",
              "15 days free support",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start"
              >
                <span className="text-green-400 mr-2">✓</span> {item}
              </motion.li>
            ))}
          </ul>
          <p className="text-white/50 text-xs mt-2 italic">
            *Domain not included — hosted on free subdomain (Netlify/Vercel).*
          </p>
          <button className="w-full cursor-pointer bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md">
            Get Started
          </button>
        </motion.div>

        {/** Business Plan */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.07 }}
          className="bg-gradient-to-b from-blue-600/10 to-blue-800/10 border border-blue-400/30 rounded-2xl p-8 backdrop-blur-lg text-center shadow-xl hover:border-blue-400/60 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-blue-500 text-xs text-white font-semibold px-3 py-1 rounded-bl-xl">
            Popular
          </div>
          <h2 className="text-2xl font-semibold mb-2">Business Website</h2>
          <p className="text-white/60 mb-4">Perfect for startups, local shops, or brands</p>
          <h3 className="text-4xl font-bold text-blue-400 mb-4">₹3,999</h3>
          <p className="text-white/60 text-sm mb-6">Strong online presence without breaking the bank</p>
          <ul className="text-left space-y-3 text-sm bg-white/5 rounded-xl p-5 mb-6">
            {[
              "5–7 custom-designed pages",
              "Mobile, tablet, and desktop optimized",
              "WhatsApp + contact forms",
              "SEO optimization (Google-ready)",
              "Fast-loading performance",
              "Free hosting (2 months)",
              "Delivery in 5–7 days",
              "1 month free support",
              "Basic photo gallery",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start"
              >
                <span className="text-blue-400 mr-2">✓</span> {item}
              </motion.li>
            ))}
          </ul>
          <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md">
            Choose Business Plan
          </button>
        </motion.div>

        {/** Premium Plan */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md text-center shadow-lg hover:border-purple-400/40 transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold mb-2">Premium Website</h2>
          <p className="text-white/60 mb-4">For professionals & growing enterprises</p>
          <h3 className="text-4xl font-bold text-purple-400 mb-4">₹6,999</h3>
          <p className="text-white/60 text-sm mb-6">Feature-packed, sleek, and lightning-fast</p>
          <ul className="text-left space-y-3 text-sm bg-white/5 rounded-xl p-5 mb-6">
            {[
              "8–12 modern pages",
              "React.js + Tailwind-powered site",
              "Scroll & motion animations",
              "Multiple forms + live chat support",
              "Advanced SEO + Analytics setup",
              "Free hosting (3 months)",
              "Delivery in 8–10 days",
              "2 months free support",
              "Social media + video integration",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start"
              >
                <span className="text-purple-400 mr-2">✓</span> {item}
              </motion.li>
            ))}
          </ul>
          <button className="w-full cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md">
            Go Premium
          </button>
        </motion.div>
      </motion.div>

      {/* Universal Benefits */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative z-10 mt-20 px-6 md:px-16 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8">All Plans Include</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["📱", "Responsive Design", "Looks great on every device"],
            ["⚡", "Fast Loading", "Built for performance and speed"],
            ["🔍", "SEO Ready", "Optimized for Google visibility"],
            ["🎨", "Custom Look", "Designed to match your brand"],
            ["📧", "Email Form", "Stay connected with your visitors"],
            ["🔒", "Basic Security", "Your website stays safe & stable"],
            ["💾", "Backup Support", "We’ll keep your data secure"],
            ["📞", "Friendly Help", "Always here when you need us"],
          ].map(([icon, title, desc], i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border cursor-pointer border-white/10 rounded-xl p-4 text-center hover:border-blue-400/40 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{icon}</div>
              <h3 className="font-semibold text-blue-400">{title}</h3>
              <p className="text-white/70 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonial Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mt-20 py-10 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-t border-blue-400/10"
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <p className="italic text-white/80 mb-4">
            “Our clients love how easy and professional their websites turned out. Clean design,
            quick delivery, and transparent pricing — that’s what we stand for.”
          </p>
          <p className="text-blue-400 font-semibold">— UWS Team</p>
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mt-20 mb-16 px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-400/30 rounded-2xl p-10 max-w-4xl mx-auto shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-3">Let’s Build Your Dream Website</h2>
          <p className="text-white/70 mb-8 text-lg max-w-2xl mx-auto">
            Whether you’re a startup or a personal brand — let’s bring your online identity to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-md">
              <a href="http://localhost:5174/uWs/#Contact" 
  // target="_blank" 
  rel="noopener noreferrer">
              Free Consultation</a>
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
              View Work Samples
            </button>
          </div>
          <p className="text-white/60 mt-6 text-sm">
            📞 Call/WhatsApp: +91 9582 5862 00 • 📧 Email: uttamwebsolution@gmail.com
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
