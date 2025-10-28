import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Photo1 from "../Photos/1.png";
import Photo2 from "../Photos/2.png";
import Photo3 from "../Photos/3.png";
import Photo4 from "../Photos/4.png";
import Photo5 from "../Photos/5.png";
import Photo6 from "../Photos/6.png";


const projects = [
  {
    title: "Fanta Product Website",
    desc: "An elegant e-commerce frontend built with clean UI.",
    img: Photo3,
    git: "https://github.com/Putin9250/Fanta.com",
    live: "https://legendary-stardust-fe9a5c.netlify.app/",
  },
  {
    title: "PortFolio",
    desc: "Personal portfolio website showcasing skills and projects.",
    img: Photo2,
    git: "https://github.com/Putin9250/Deepanshu2",
    live: "https://putin9250.github.io/Deepanshu2/",
  },
  {
    title: "Apple Device Service Center",
    desc: "Fast and reliable smartphone services for all major brands and issues.",
    img: Photo6,
    git: "https://iresqindia.com/",
    live: "https://iresqindia.com/",
  },
  {
    title: "Odyssey of Vladimir Putin",
    desc: "Landing page for a marketing startup with a minimal white and blue palette.",
    img: Photo4,
    git: "https://github.com/Putin9250/Odyssey-of-Vladimir-Putin",
    live: "https://putin9250.github.io/Odyssey-of-Vladimir-Putin/",
  },
  {
    title: "University Website",
    desc: "Modern educational platform UI featuring responsive cards and motion effects.",
    img: Photo5,
    git: "https://github.com/Putin9250/University",
    live: "https://putin9250.github.io/University/",
  },
  {
    title: "FitCore",
    desc: "Gym and fitness web app design focused on strength, simplicity, and speed.",
    img: Photo1,
    git: "https://github.com/Putin9250/FinalRoundFightClub",
    live: "https://putin9250.github.io/FinalRoundFightClub/",
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
                  Our Portfolio
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
                  A glimpse into our creations — websites that connect, inspire, and
          grow businesses.
                </motion.p>
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
                className="w-full h-60 object-contain group-hover:scale-105 transition-transform duration-700"
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
              <h3 className="text-2xl text-ellipsis font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>
            
          </motion.div>
          
        ))}
      <div id="Team"></div>

      </div>
    </section>
  );
}
