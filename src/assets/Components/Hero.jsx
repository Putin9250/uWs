import { motion } from "framer-motion";
import ComputerSVG from "../SVG/conputer.svg";

export default function Hero() {
  return (
    <section
      className="relative  min-h-[100vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#0e0f1a] via-[#141628] to-[#1c1f36] text-white overflow-hidden px-4 pt-20 md:pt-0"
      id="Home"
    >
      {/* Floating Computer */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute right-[5%] top-[25%] hidden md:block"
      >
        <svg
          viewBox="0 0 400 200"
          width="300"
          height="200"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
        >
          <defs>
            <linearGradient id="rise" x1="0" y1="0" x2="400" y2="0">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>

          {/* Graph Path */}
          <motion.path
            d="M10 180 L80 150 L150 170 L220 120 L290 80 L360 40"
            stroke="url(#rise)"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />

          {/* Dots */}
          <circle cx="80" cy="150" r="4" fill="#60a5fa" />
          <circle cx="150" cy="170" r="4" fill="#60a5fa" />
          <circle cx="220" cy="120" r="4" fill="#60a5fa" />
          <circle cx="290" cy="80" r="4" fill="#60a5fa" />
          <circle cx="360" cy="40" r="4" fill="#60a5fa" />
        </svg>
      </motion.div>
      <motion.img
        src={ComputerSVG}
        alt="Floating Computer"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="
    w-[220px] sm:w-[260px] md:w-[280px] lg:w-[360px]
    opacity-80 mb-6 md:mb-0 
    absolute top-25 left-1/2 -translate-x-1/2  /* default for small screens */
    md:top-auto md:bottom-[0%] md:left-[2%] md:-translate-x-0  /* reset for md+ screens */
    lg:left-[2%] sm:to-15%
  "
      />

      {/* Rising Graph */}
      <motion.svg
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] md:w-[70%] h-[150px] md:h-[300px]"
        viewBox="0 0 500 200"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="4"
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="500" y2="0">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 150 Q100 120 150 160 Q200 110 250 140 Q300 80 350 100 Q400 60 500 80"
          stroke="url(#gradient)"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* Glowing Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-10 left-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-blue-500/20 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/3 w-12 sm:w-16 h-12 sm:h-16 bg-cyan-400/20 rounded-full blur-2xl"
      ></motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl text-center px-2 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 15,
          }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-3"
        >
          We Build <span className="text-blue-400">Digital Growth</span> That
          Lasts
        </motion.h1>

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
          className="text-white/80 text-sm sm:text-base mb-6 sm:mb-8"
        >
          From website design to brand strategy — we craft meaningful digital
          experiences that help your business stand tall in the modern world.
        </motion.p>

        {/* Buttons */}
        <motion.div
  initial={{ y: 60, opacity: 0 }}                // Start slightly below
  whileInView={{ y: 0, opacity: 1 }}             // Slide upward & fade in
  transition={{ duration: 0.8, ease: "easeOut" }} // Smooth motion
  viewport={{ once: false, amount: 0.3 }}         // Triggers on scroll each time
  className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-6 sm:mb-10"
><a href="#Started">
  <motion.button
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.96 }}
    className="bg-blue-500 cursor-pointer hover:bg-blue-600 transition-all duration-300 text-white rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-lg shadow-lg"
  >
    Get Started
  </motion.button>
</a>
<a href="#PortFolio">
  <motion.button
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.96 }}
    className="border cursor-pointer border-white/40 text-white hover:bg-white/10 transition-all duration-300 rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-lg shadow-lg"
  >
    View Work
  </motion.button>
  </a>
</motion.div>


        {/* Quick Highlights */}
        <motion.div
  initial={{ y: 40, opacity: 0 }}                 // Start slightly below
  whileInView={{ y: 0, opacity: 1 }}              // Rise into view
  transition={{ duration: 0.8, ease: "easeOut" }} // Smooth motion
  viewport={{ once: false, amount: 0.3 }}         // Trigger while scrolling
  className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white/70 text-xs sm:text-sm md:text-base"
>
  {[
    { number: "50+", label: "Projects" },
    { number: "100%", label: "Client Trust" },
    { number: "24/7", label: "Support" },
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2, // ✨ each one follows the other slightly
        ease: "easeOut",
      }}
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col items-center sm:items-start"
    >
      <span className="text-blue-400 text-lg sm:text-xl font-semibold">
        {item.number}
      </span>
      {item.label}
    </motion.div>
  ))}
</motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
      
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs sm:text-sm cursor-pointer"
        id="Started"
      >
        ↓ Scroll to explore
      </motion.div>
    </section>
  );
}
