import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Aurora Agency",
    desc: "A sleek digital agency landing page with smooth animations and responsive design.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    git: "https://github.com/yourusername/aurora-agency",
    live: "https://aurora-agency.netlify.app",
  },
  {
    title: "ZenCart",
    desc: "An elegant e-commerce frontend built with clean UI and fluid transitions.",
    img: "https://images.unsplash.com/photo-1607083206968-13611e3b7b2d?auto=format&fit=crop&w=900&q=80",
    git: "https://github.com/yourusername/zencart",
    live: "https://zencart-demo.netlify.app",
  },
  {
    title: "VisionCraft",
    desc: "Portfolio site showcasing creative visuals and animated scroll effects.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
    git: "https://github.com/yourusername/visioncraft",
    live: "https://visioncraft-site.netlify.app",
  },
  {
    title: "MarketLink",
    desc: "Landing page for a marketing startup with a minimal white and blue palette.",
    img: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=900&q=80",
    git: "https://github.com/yourusername/marketlink",
    live: "https://marketlink-digital.netlify.app",
  },
  {
    title: "EduNova",
    desc: "Modern educational platform UI featuring responsive cards and motion effects.",
    img: "https://images.unsplash.com/photo-1579389083046-e3df9c2b0844?auto=format&fit=crop&w=900&q=80",
    git: "https://github.com/yourusername/edunova",
    live: "https://edunova-platform.netlify.app",
  },
  {
    title: "FitCore",
    desc: "Gym and fitness web app design focused on strength, simplicity, and speed.",
    img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=900&q=80",
    git: "https://github.com/yourusername/fitcore",
    live: "https://fitcore-fitness.netlify.app",
  },
];

export default function Portfolio() {
  return (
    <section
      id="PortFolio"
      className="bg-white py-20 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Our Portfolio
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
          A glimpse into our creations — websites that connect, inspire, and
          grow businesses.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: index % 2 === 0 ? 60 : -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            <div className="relative group">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:scale-110 transition-transform"
                  title="Live View"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:scale-110 transition-transform"
                  title="View on GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
