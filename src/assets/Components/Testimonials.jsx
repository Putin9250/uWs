import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Their designs whisper elegance and logic. Every interface feels alive — crafted for both heart and hand.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80",
    },
    {
      quote:
        "A journey of creativity and trust — they didn’t just build a product; they built confidence into our brand.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80",
    },
    {
      quote:
        "Collaborating with them felt seamless — like every pixel, every line of code was aligned with purpose.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80",
    },
    {
      quote:
        "The subtlety, precision, and storytelling in their web work are beyond compare. A truly thoughtful team.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80",
    },
    {
      quote:
        "Their sense of design and detail brought our ideas to life. The site performs beautifully and feels uniquely ours.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80",
    },
    {
      quote:
        "Beyond skill — they brought empathy, creativity, and passion. Our digital identity now truly reflects who we are.",
      name: "David Lee",
      designation: "Founder at BrightWave Media",
      src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const cardVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -60 : 60,
      y: i % 3 === 0 ? 40 : -40,
      scale: 0.96,
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        type: "spring",
        stiffness: 60,
        damping: 14,
      },
    }),
  };

  return (
    <section
      id="Testimonials"
      className="w-full bg-gradient-to-b from-white via-white to-gray-50 py-20 px-6 overflow-hidden"
    >
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 15,
          }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent"
        >
          Voices of Trust
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 50,
            damping: 15,
          }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-gray-500 text-sm md:text-base"
        >
          Echoes from those who’ve walked with us on this creative path.
        </motion.p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{
              scale: 1.04,
              y: -6,
              transition: { type: "spring", stiffness: 100, damping: 12 },
            }}
            className="relative bg-white border border-transparent rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
            style={{
              background:
                "linear-gradient(white, white) padding-box, linear-gradient(to right, #06b6d4, #ec4899) border-box",
              border: "2px solid transparent",
            }}
          >
            <motion.img
              src={t.src}
              alt={t.name}
              whileHover={{ scale: 1.1, rotate: 1.5 }}
              transition={{ type: "spring", stiffness: 80, damping: 10 }}
              className="w-20 h-20 rounded-full object-cover mb-4 shadow-md border-2 border-transparent bg-gradient-to-r from-cyan-400 to-pink-400 p-[2px] mx-auto"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="italic text-gray-700 text-sm md:text-base mb-4 leading-relaxed"
            >
              “{t.quote}”
            </motion.p>
            <div>
              <h4 className="font-semibold text-lg bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500">{t.designation}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
