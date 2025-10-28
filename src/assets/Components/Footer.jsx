import { motion } from "framer-motion";
import Logo from "../SVG/4.svg";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
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

  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-300 overflow-hidden pt-20 pb-10">
      {/* Subtle background glow */}
      <motion.div
        className="absolute -top-40 left-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_70%)] blur-3xl -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Main Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* 1. Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-1">
            <img
              src={Logo}
              alt="Logo"
              className="h-6 sm:h-8 md:h-10 w-auto cursor-cell"
            />
            <span
              className="cursor-help text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              uWs
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            We design, build, and evolve digital experiences that connect
            emotion with technology. Every brand has a pulse — we amplify it.
          </p>
          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaGithub size={18} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaLinkedin size={18} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaInstagram size={18} />
            </a>
            <a
              href="mailto:contact@yourbrand.com"
              className="hover:text-blue-400 transition-colors"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </motion.div>

        {/* 2. Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-blue-400 transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 3. Services Overview */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {services.map((service, i) => (
              <li
                key={i}
                className="hover:text-blue-400 transition-all duration-300"
              >
                <a href="#Services">{service}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 4. Contact + Map */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Get in Touch
          </h3>

          <div className="flex items-center gap-3 text-sm text-gray-400">
            <FaPhone className="text-blue-400" /> +91 95825 86200
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-400">
            <FaEnvelope className="text-blue-400" /> sahil24042005@gmail.com
          </div>

          <div className="flex items-start gap-3 text-sm text-gray-400">
            <FaMapMarkerAlt className="text-blue-400 mt-1" />
            Uttam Nagar, Delhi, India
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-800 mt-4">
            <iframe
              title="Uttam Nagar East Metro Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.346017087647!2d77.06604577467196!3d28.557106587291804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04db48faed13%3A0xb3c9ce9b2c8e76b!2sUttam%20Nagar%20East%20Metro%20Station!5e0!3m2!1sen!2sin!4v1696773748702!5m2!1sen!2sin"
              width="100%"
              height="160"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="border-t border-gray-800 mt-16 mb-6 mx-auto w-full"
      />

      {/* Closing Credits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-gray-500 text-sm"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-400 font-semibold">uWs</span> — Built with
        purpose and precision by <span className="text-white">Sahil Kumar</span>
        . Crafted in Delhi, guided by clarity, powered by code.
      </motion.div>

      {/* Floating light auras */}
      <motion.div
        className="absolute top-[15%] right-[12%] w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[10%] w-24 h-24 bg-pink-500/10 rounded-full blur-2xl"
        animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
    </footer>
  );
}
