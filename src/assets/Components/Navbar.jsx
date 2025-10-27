import { useState } from "react";
import Logo from "../SVG/4.svg";
import MenuOpen from "../SVG/7.svg";
import MenuClose from "../SVG/6.svg";
import {
  FaHome,
  FaCog,
  FaUser,
  FaPhone,
  FaLayerGroup,
  FaShapes,
  FaUserAstronaut,
  FaTools,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [openCard, setOpenCard] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-black/30 rounded-xl shadow-xl px-6 py-3 w-[90%] max-w-7xl"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 font-semibold text-white text-sm md:text-base lg:text-lg">
          <li>
            <a
              href="#Home"
              className="flex items-center gap-2 hover:scale-110 transition-transform"
            >
              <FaHome /> Home
            </a>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setOpenCard("Services")}
            onMouseLeave={() => setOpenCard(null)}
          >
            <button className="flex items-center gap-2 hover:scale-110 transition-transform">
              <FaTools /> Services
            </button>
            <AnimatePresence>
              {openCard === "Services" && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-1/2 -translate-x-1/2 bg-gradient-to-br from-purple-700 to-pink-500 text-white rounded-xl shadow-2xl p-4 w-64"
                >
                  {[
                    { desc: "Web Development", href2: "#Services" },
                    { desc: "UI/UX Design", href2: "#Services" },
                    {
                      desc: "Google Map Listing",
                      href2: "#Services",
                    },
                    {
                      desc: "Business Development",
                      href2: "#Services",
                    },
                    { desc: "WordPress Dev", href2: "#Services" },
                    { desc: "Site Management", href2: "#Services" },
                    { desc: "Digital Marketing", href2: "#Services" },
                    { desc: "SEO & LOGO", href2: "#Services" },
                  ].map((c, idx) => (
                    <motion.a
                      key={idx}
                      href={c.href2}
                      variants={itemVariants}
                      className="block mb-3 last:mb-0 text-sm text-white/80 hover:text-white hover:scale-105 transition-transform cursor-pointer"
                    >
                      {c.desc}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setOpenCard("About")}
            onMouseLeave={() => setOpenCard(null)}
          >
            <button className="flex items-center gap-2 hover:scale-110 transition-transform">
              <FaUserAstronaut /> About
            </button>
            <AnimatePresence>
              {openCard === "About" && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-1/2 -translate-x-1/2 bg-gradient-to-br from-purple-700 to-pink-500 text-white rounded-xl shadow-2xl p-4 w-64"
                >
                  <motion.a
                    href="#Mission"
                    variants={itemVariants}
                    className="block text-sm text-white/80 hover:text-white hover:scale-105 transition-transform cursor-pointer"
                  >
                    Our Mission
                  </motion.a>
                  <motion.a
                    href="#Team"
                    variants={itemVariants}
                    className="block text-sm text-white/80 hover:text-white hover:scale-105 transition-transform cursor-pointer"
                  >
                    Meet our experts
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li>
            <a
              href="#PortFolio"
              className="flex items-center gap-2 hover:scale-110 transition-transform"
            >
              <FaShapes /> Portfolio
            </a>
          </li>
          <a
            href="#"
            className="ml-4 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-400 to-pink-400 shadow-lg hover:shadow-2xl hover:scale-110 transition-transform text-black"
          >
            <FaPhone />
          </a>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            <img
              src={mobileOpen ? MenuClose : MenuOpen}
              alt="Menu Toggle"
              className="w-8 h-8"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden mt-4 bg-black/50 backdrop-blur-lg rounded-xl overflow-hidden"
          >
            <ul className="flex flex-col gap-3 p-4 text-white font-semibold">
              <li>
                <a
                  href="#Home"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 hover:text-cyan-400 transition"
                >
                  <FaHome /> Home
                </a>
              </li>

              <li>
                <button
                  onClick={() =>
                    setOpenCard(openCard === "Services" ? null : "Services")
                  }
                  className="flex items-center justify-between w-full hover:text-cyan-400 transition"
                >
                  <span className="flex items-center gap-2">
                    <FaCog /> Services
                  </span>
                  <span>{openCard === "Services" ? "-" : "+"}</span>
                </button>

                <AnimatePresence>
                  {openCard === "Services" && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="pl-6 mt-2 flex flex-col gap-2 text-sm text-white/80"
                    >
                      <li>
                        <a
                          href="#Services"
                          onClick={() => setMobileOpen(false)}
                          className="hover:text-cyan-400"
                        >
                          Web Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="#UIUX"
                          onClick={() => setMobileOpen(false)}
                          className="hover:text-cyan-400"
                        >
                          UI/UX Design
                        </a>
                      </li>
                      
                      <li>
                        <a
                          href="#Business-Devlopment"
                          onClick={() => setMobileOpen(false)}
                          className="hover:text-cyan-400"
                        >
                          Business Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="#CMS-Services"
                          onClick={() => setMobileOpen(false)}
                          className="hover:text-cyan-400"
                        >
                          WordPress Dev
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Site-Managment"
                          onClick={() => setMobileOpen(false)}
                          className="hover:text-cyan-400"
                        >
                          Site Management
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Digital-Marketing"
                          onClick={() => setMobileOpen(false)}
                          className="hover:text-cyan-400"
                        >
                          Digital Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#MAP"
                          onClick={() => setMobileOpen(false)}
                          className="hover:text-cyan-400"
                        >
                          SEO & LOGO
                        </a>
                      </li>
                      <li>
                        <a
                          href="#MAP"
                          onClick={() => setMobileOpen(false)}
                          className="hover:text-cyan-400"
                        >
                          {" "}
                          Google Maps Listing
                        </a>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <button
                  onClick={() =>
                    setOpenCard(openCard === "About" ? null : "About")
                  }
                  className="flex items-center justify-between w-full hover:text-cyan-400 transition"
                >
                  <span className="flex items-center gap-2">
                    <FaUser /> About
                  </span>
                  <span>{openCard === "About" ? "-" : "+"}</span>
                </button>

                <AnimatePresence>
                  {openCard === "About" && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="pl-6 mt-2 flex flex-col gap-2 text-sm text-white/80"
                    >
                      <li>
                        <a
                          href="#mission"
                          onClick={() => setMobileOpen(false)}
                          className="hover:text-cyan-400"
                        >
                          Our Mission
                        </a>
                      </li>
                      <li>
                        <a
                          href="#team"
                          onClick={() => setMobileOpen(false)}
                          className="hover:text-cyan-400"
                        >
                          Meet our experts
                        </a>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <a
                  href="#PortFolio"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  <FaShapes /> Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-400 to-pink-400 shadow-lg hover:scale-105 text-black font-semibold transition"
                >
                  <FaPhone /> Call Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
