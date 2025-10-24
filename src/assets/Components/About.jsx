import React from "react";
import { motion } from "framer-motion";

/**
 * About.jsx
 * - Responsive About page matching the hero color pattern
 * - Uses Tailwind classes consistent with existing project
 * - Includes scroll-triggered animations for a living experience
 */

export default function About() {
  return (
    <section  className="min-h-screen bg-gradient-to-br from-[#0e0f1a] via-[#141628] to-[#1c1f36] text-white py-16 px-6 md:px-12 lg:px-20">
      {/* Page container */}
      <div  className="max-w-7xl mx-auto">
        {/* Hero / Intro */}
        <section className="relative z-10 text-center md:text-left mb-12">
          <motion.h1 id="Mission"
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
          <div id="mission"></div>

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
            <h3 id="Team" className="text-lg sm:text-xl font-semibold mb-3">
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
              iterate on real feedback.<div id="team"></div>
            </div>
          </motion.div>
        

        </section>

        {/* Team */}
        <section  className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-2xl font-bold mb-6 text-center md:text-left"
          >
            The team — a small constellation
          </motion.h2>

          <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sahil Kumar",
                role: "Founder · Frontend",
                bio: "Design-led engineer, strategy-curious.",
              },
              {
                name: "Nina Roy",
                role: "Product Designer",
                bio: "Shapes interaction with quiet empathy.",
              },
              {
                name: "Arjun Patel",
                role: "Backend & DevOps",
                bio: "Keeps the trains running and the logs clean.",
              },
            ].map((m, i) => (
              <motion.article
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ scale: 1.04 }}
                className="bg-gradient-to-br from-black/30 to-white/2 rounded-xl p-5 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center text-black font-bold">
                    {m.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold">{m.name}</div>
                    <div className="text-xs text-white/70">{m.role}</div>
                  </div>
                </div>

                <p className="mt-4 text-white/80 text-sm">{m.bio}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Philosophy / Process */}
        <section className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-xl font-semibold mb-4"
          >
            Our process
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Discover",
                desc: "We listen, research, and map the problem space.",
              },
              {
                title: "Design",
                desc: "We prototype, test, and define a shared vision.",
              },
              {
                title: "Deliver",
                desc: "We build, measure, and iterate — fast and with care.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl p-5 bg-gradient-to-br from-black/30 to-white/2 shadow"
              >
                <div className="text-sm text-white/70 font-semibold mb-2">
                  {s.title}
                </div>
                <div className="text-white/80 text-sm">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-8 mb-20">
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-[#071026]/60 to-[#081229]/50 shadow-2xl text-center"
          >
            <h4 className="text-2xl font-bold mb-3">
              Ready to start a conversation?
            </h4>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Tell us about your idea — we’ll listen, design, and build
              something that grows.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 rounded-full bg-blue-400 hover:bg-blue-500 text-black font-semibold shadow"
              >
                Get in touch
              </a>
              <a
                href="#work"
                className="inline-block px-6 py-3 rounded-full border border-white/30 hover:bg-white/5 text-white"
              >
                See our work
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
}
