import { motion } from "framer-motion";
import { FaChartLine, FaHandshake, FaLightbulb } from "react-icons/fa";

export default function AdSection() {
  return (
    <section 
      id="Ad"
      className="relative w-full bg-white py-20 px-6 overflow-hidden"
    >
      {/* Soft pastel glow backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),rgba(236,72,153,0.1),transparent_80%)] blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side — animated text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500 leading-tight">
            Grow Your Business with <br /> Digital Precision & Creative Power
          </h2>

          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
            We help brands evolve — through smart web strategies, engaging
            design, and performance-driven marketing. From startups to
            enterprises, we build growth that lasts.
          </p>

          <motion.a
            href="#Services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Let’s Build Together
          </motion.a>
        </motion.div>

        {/* Right side — animated icons */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center"
        >
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center max-w-[220px]"
          >
            <FaChartLine className="text-4xl mb-3 text-cyan-500 mx-auto" />
            <h3 className="font-semibold text-gray-800 mb-1">Smart Growth</h3>
            <p className="text-gray-500 text-sm">
              Digital strategies that scale your reach and revenue.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center max-w-[220px]"
          >
            <FaHandshake className="text-4xl mb-3 text-pink-500 mx-auto" />
            <h3 className="font-semibold text-gray-800 mb-1">
              Client Partnership
            </h3>
            <p className="text-gray-500 text-sm">
              We collaborate deeply to turn your goals into digital success.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center max-w-[220px]"
          >
            <FaLightbulb className="text-4xl mb-3 text-yellow-400 mx-auto" />
            <h3 className="font-semibold text-gray-800 mb-1">
              Creative Innovation
            </h3>
            <p className="text-gray-500 text-sm" >
              Ideas that inspire trust, drive traffic, and shape identity.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div id="Mission"></div>
    </section>
  );
}
