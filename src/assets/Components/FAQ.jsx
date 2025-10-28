import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      q: "What services do you offer?",
      a: "We specialize in web design, development, branding, and digital growth — turning your ideas into impactful online experiences that last.",
    },
    {
      q: "How long does a project usually take?",
      a: "Most projects range between 3 to 6 weeks depending on complexity, revisions, and collaboration speed — we value quality over haste.",
    },
    {
      q: "Do you work with small businesses or startups?",
      a: "Absolutely. We love working with growing brands, helping them build a strong foundation and clear digital identity from day one.",
    },
    {
      q: "How do we begin working together?",
      a: "Simply reach out through our contact form. We’ll schedule a free consultation to understand your goals and design the perfect strategy.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="relative w-full bg-white py-20 px-6 overflow-hidden"
    >
      {/* Subtle gradient aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),rgba(236,72,153,0.1),transparent_80%)] blur-3xl"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-10"
        >
          Answers to some of the questions we’re often asked — transparent,
          simple, and honest.
        </motion.p>

        {/* FAQ List */}
        <div className="space-y-4 text-left">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left px-6 py-5"
              >
                <span className="text-gray-800 font-semibold text-base sm:text-lg">
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="text-cyan-500"
                >
                  <FaChevronDown />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="px-6 pb-5 text-gray-600 text-sm sm:text-base"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 text-gray-500 text-sm"
        >
          Still curious?{" "}
          <a
            href="#Contact"
            className="text-pink-500 font-semibold hover:text-cyan-500 transition-colors"
          >
            Reach out to us
          </a>{" "}
          — we’d love to hear from you.
        </motion.div>
      </div>
    </section>
  );
}
