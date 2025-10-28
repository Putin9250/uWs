import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaRocket, FaComments } from "react-icons/fa";

export default function Process() {
  const steps = [
    {
      icon: <FaLightbulb className="text-blue-400 text-2xl sm:text-3xl" />,
      title: "Discovery",
      desc: "We learn your vision and goals to build the perfect blueprint.",
    },
    {
      icon: <FaCode className="text-blue-400 text-2xl sm:text-3xl" />,
      title: "Development",
      desc: "We turn designs into responsive, high-performing code.",
    },
    {
      icon: <FaComments className="text-blue-400 text-2xl sm:text-3xl" />,
      title: "Feedback",
      desc: "We refine through collaboration — every idea polished to shine.",
    },
    {
      icon: <FaRocket className="text-blue-400 text-2xl sm:text-3xl" />,
      title: "Launch",
      desc: "We deploy, test, and prepare your brand for takeoff.",
    },
  ];

  return (
    <section
      
      className="relative w-full min-h-[50vh] text-white py-12 px-6 md:px-10 
      overflow-hidden bg-gradient-to-br from-[#0b0c16] via-[#121528] to-[#1b1f36]"
    >
      {/* Subtle aura backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),rgba(0,0,0,0.9))] blur-3xl opacity-70"></div>

      {/* Floating lights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[15%] w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[20%] w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-white mb-10"
      >
        Our <span className="text-blue-400">Process</span>
      </motion.h2>

      {/* Steps Grid */}
      <div className="relative cursor-pointer grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 30px rgba(59,130,246,0.3), 0 0 60px rgba(59,130,246,0.1)",
            }}
            className="bg-gradient-to-b  from-[#171b2e]/80 via-[#0e111f]/80 to-[#0b0c16]/90 
                       p-4 rounded-xl border border-white/5 backdrop-blur-md
                       flex flex-col items-center text-center transition-all duration-500"
          >
            <div className="mb-3">{step.icon}</div>
            <h3 className="text-sm sm:text-base font-semibold mb-1 text-blue-300">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-snug">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Subtle tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-10 text-white/60 text-xs sm:text-sm text-center"
      >
        Where <span className="text-blue-400 font-medium">clarity</span> meets{" "}
        <span id="FAQ" className="text-blue-400 font-medium">craft</span> — every step a symphony in motion.
      </motion.div>
    </section>
  );
}
