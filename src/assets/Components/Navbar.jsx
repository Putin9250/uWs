import { useState } from "react";
import Logo from "../SVG/4.svg";
import MenuOpen from "../SVG/7.svg";
import MenuClose from "../SVG/6.svg";
import { FaHome, FaCog, FaUser, FaPhone } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [openCard, setOpenCard] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: "Home", icon: <FaHome />, href: "#" },
    {
      label: "Services",
      icon: <FaCog />,
      content: [
        { desc: "Web Development" },
        { desc: "UI/UX Design" },
        { desc: "Business Development" },
        { desc: "WordPress Dev" },
        { desc: "Site Management" },
        { desc: "Digital Marketing" },
        { desc: "SEO & LOGO" },

      ],
    },
    {
      label: "About",
      icon: <FaUser />,
      content: [{ title: "Team", desc: "Meet our experts" }],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } },
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
          <img src={Logo} alt="Logo" className="h-6 sm:h-8 md:h-10 w-auto cursor-cell" />
          <span
            className="cursor-help text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            uWs
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 font-semibold text-white">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.content && setOpenCard(item.label)}
              onMouseLeave={() => item.content && setOpenCard(null)}
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="flex items-center gap-2 hover:scale-110 transition-transform"
                >
                  {item.icon} {item.label}
                </a>
              ) : (
                <button className="flex items-center gap-2 hover:scale-110 transition-transform">
                  {item.icon} {item.label}
                </button>
              )}

              {item.content && (
                <AnimatePresence>
                  {openCard === item.label && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-1/2 -translate-x-1/2 bg-gradient-to-br from-purple-700 to-pink-500 text-white rounded-xl shadow-2xl p-4 w-64"
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
                        }}
                      >
                        {item.content.map((c, idx) => (
                          <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="mb-3 last:mb-0"
                          >
                            {c.title && (
                              <h4 className="font-bold text-lg cursor-pointer">{c.title}</h4>
                            )}
                            <p className="text-sm text-white/80 transition-transform hover:scale-105 cursor-pointer">
                              {c.desc}
                            </p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}

          {/* Call Button */}
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-4 bg-black/40 backdrop-blur-lg rounded-xl p-4 flex flex-col gap-4"
          >
            {menuItems.map((item) => (
              <div key={item.label}>
                <button
                  className="flex items-center justify-between w-full text-white font-semibold hover:text-cyan-400 transition"
                  onClick={() =>
                    item.content &&
                    setOpenCard(openCard === item.label ? null : item.label)
                  }
                >
                  <span className="flex items-center gap-2">
                    {item.icon} {item.label}
                  </span>
                  <span>{item.content ? (openCard === item.label ? "-" : "+") : ""}</span>
                </button>

                {item.content && (
                  <AnimatePresence>
                    {openCard === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mt-2 flex flex-col gap-2 pl-4"
                      >
                        {item.content.map((c, idx) => (
                          <div key={idx}>
                            {c.title && <h4 className="font-semibold text-white">{c.title}</h4>}
                            <p className="text-white/80 text-sm">{c.desc}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <a
              href="#"
              className="w-full py-3 rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-400 to-pink-400 shadow-lg hover:scale-105 text-black font-semibold"
            >
              <span className="flex items-center gap-2">
                <FaPhone /> Call Now
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
