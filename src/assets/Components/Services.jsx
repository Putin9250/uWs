import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPalette,
  FaBriefcase,
  FaWordpress,
  FaTools,
  FaBullhorn,
  FaSearch,
  FaMapMarkedAlt,
} from "react-icons/fa";

// Services Data
const servicesData = [
  {
    id: "UIUX",
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "Responsive, high-performing websites with clean UI and smooth logic.",
  },
  {
    id: "Business-Devlopment",
    icon: <FaPalette />,
    title: "UI/UX Design",
    desc: "Experiences that blend creativity, clarity, and intuitive interaction.",
  },
  {
    id: "CMS-Services",
    icon: <FaBriefcase />,
    title: "Business Development",
    desc: "Strategic partnerships and digital growth that build lasting brands.",
  },
  {
    id: "Site-Managment",
    icon: <FaWordpress />,
    title: "WordPress Development",
    desc: "Dynamic, secure, and customizable WordPress sites for every business.",
  },
  {
    id: "Digital-Marketing",
    icon: <FaTools />,
    title: "Site Management",
    desc: "Regular updates, backups, and optimization for seamless performance.",
  },
  {
    id: "SEO-LOGO",
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Campaigns powered by analytics, storytelling, and smart conversions.",
  },
  {
    id: "MAP",
    icon: <FaSearch />,
    title: "SEO & Logo Design",
    desc: "Boost visibility and brand identity with refined SEO and unique design.",
  },
  {
    id: "SEO-LOGO",
    icon: <FaMapMarkedAlt />,
    title: "Google Maps Listing",
    desc: "Make your business visible on Google Maps with verified local SEO.",
  },
];

// Single Service Card
function ServiceCard({ service, index }) {
  return (
    <motion.div
      id={service.id}
      key={service.id}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="cursor-pointer group relative bg-gradient-to-br from-black/40 to-white/2 backdrop-blur-md rounded-2xl p-6 shadow-2xl
                 border border-white/10 hover:border-blue-400/50
                 backdrop-blur-2xl transition-all duration-300 
                 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 
                 flex flex-col items-start justify-between overflow-hidden"
    >
      {/* Soft Glow Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.3, scale: 1.2 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 via-cyan-300/10 to-pink-300/10 blur-2xl"
      ></motion.div>

      {/* Icon */}
      <div className="relative text-4xl mb-4 text-blue-400 group-hover:text-pink-400 group-hover:scale-110 transition-all duration-300">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="relative text-lg font-semibold mb-2 tracking-wide group-hover:text-blue-300 transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="relative text-white/70 text-sm leading-relaxed mb-4">
        {service.desc}
      </p>

      {/* Link */}
      <a href="#Contact">
        <motion.span
          whileHover={{ x: 6 }}
          className="relative text-sm text-blue-400 underline underline-offset-4 cursor-pointer group-hover:text-pink-400 transition-all duration-300"
        >
          Learn More →
        </motion.span>
      </a>
    </motion.div>
  );
}

// Main Services Section
export default function Services() {
  return (
    <section
      id="Services"
      className="relative min-h-screen bg-[url('https://static.vecteezy.com/system/resources/previews/017/114/508/original/abstract-yellow-purple-background-landscape-banner-free-vector.jpg')] bg-top bg-cover 
             opacity-95    text-white py-24 px-6 flex flex-col items-center justify-between overflow-hidden "
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-4xl md:text-5xl font-bold text-white mb-3"
      >
        Our{" "}
        <span className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">
          Services
        </span>
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 top-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl relative z-10 ">
        {servicesData.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
