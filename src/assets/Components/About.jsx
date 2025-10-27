import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="mission" className=" bg-gradient-to-br from-[#0e0f1a] via-[#141628] to-[#1c1f36] text-white py-16 px-6 md:px-12 lg:px-20">
      {/* Page container */}
      
      <div  className="max-w-7xl mx-auto">
        {/* Hero / Intro */}
        <section className="relative z-10 text-center md:text-left mb-12">
          <motion.h1 
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            We craft digital stories that{" "}
            <span className="text-blue-400">rise like dawn</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-4 text-white/80 max-w-3xl"
          >
            Gentle as a tide and deliberate as architecture — we build websites
            and brands that carry meaning, measure impact, and stand patient
            through seasons of change.
          </motion.p>
          {/* <div id="mission"></div> */}

        </section>

        {/* Mission + Stats Row */}
        <section  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Mission Card */}
          <motion.article
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-gradient-to-br from-black/40 to-white/2 backdrop-blur-md rounded-2xl p-6 shadow-2xl"
          >
            <h3  className="text-lg sm:text-xl font-semibold mb-3">
              Our Mission
            </h3>
            <p className="text-white/80 leading-relaxed">
              We empower businesses to grow, innovate, and stand out in the
              digital world. From enhancing their brand presence to optimizing
              user experiences, we provide the strategy, design, and technology
              that drives measurable results.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80">
              <li>Growth-focused UI & UX</li>
              <li>Performance-driven development</li>
              <li>Data-informed strategies</li>
              <li>Reliable support & maintenance</li>
            </ul>
          </motion.article>

          {/* Stats Card */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="rounded-2xl p-6 shadow-2xl bg-gradient-to-br from-[#071025]/60 to-[#0b1324]/50"
          >
            <h4 className="text-lg font-semibold mb-4">By the numbers</h4>

            <div className="grid grid-cols-3 gap-4">
              <motion.div whileHover={{ scale: 1.08 }} className="text-center">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-xs text-white/70">Projects</div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="text-center">
                <div className="text-2xl font-bold text-cyan-300">100%</div>
                <div className="text-xs text-white/70">Client Trust</div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="text-center">
                <div className="text-2xl font-bold text-pink-400">24/7</div>
                <div className="text-xs text-white/70">Support</div>
              </motion.div>
            </div>

            <div  className="mt-6 text-sm text-white/70">
              Focused on measurable growth — we ship features, track impact, and
              iterate on real feedback.
            </div>
          </motion.div>
        

        </section>

     
      </div>
    </section>
  );
}
