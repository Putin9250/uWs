import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import Photo7 from "../Photos/7.jpeg";
import Photo8 from "../Photos/8.jpeg";
import Photo9 from "../Photos/9.jpeg";
import Photo10 from "../Photos/10.jpeg";

export default function Team() {
  const members = [
    {
      name: "Sahil Kumar",
      role: "Head Director",
      desc: "Guiding vision and innovation with creative precision and strategic clarity.",
      img: Photo7,
      
    },
    {
      name: "MD Shahrukh",
      role: "Full Stack Developer",
      desc: "Bringing life to ideas through efficient backend logic and dynamic frontends.",
      img: Photo8,
      
    },
    {
      name: "Deepanshu Jain",
      role: "WordPress Developer",
      desc: "Building smooth, SEO-friendly WordPress sites that convert visitors into clients.",
      img: Photo9,
      
    },
    {
      name: "Deeksha Sharma",
      role: "UI/UX & Graphic Designer",
      desc: "Designing emotions into pixels — making user experiences delightful and human.",
      img: Photo10,
      
    },
  ];

  // Animations for sliding up & down
  const slideVariant = (direction) => ({
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  });

  return (
    <section
      id="team"
      className="relative min-h-[60vh] py-16 px-6 md:px-12 bg-gradient-to-b from-[#0e0f1a] via-[#141628] to-[#1c1f36] text-white overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-blue-500/10 blur-3xl rounded-full top-10 left-10" />
        <div className="absolute w-80 h-80 bg-pink-500/10 blur-3xl rounded-full bottom-10 right-10" />
      </div>

      {/* heading */}
      <motion.div
        variants={slideVariant("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Meet Our {""}
          <span className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">
            Team
          </span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          A blend of thinkers, creators, and innovators shaping digital growth
          into reality.
        </p>
      </motion.div>

      {/* team grid */}
      <div className="relative cursor-pointer z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <motion.div
            key={index}
            variants={slideVariant(index % 2 === 0 ? "up" : "down")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-md hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-200"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border border-blue-500/40"
            />
            <h3 className="text-xl font-semibold text-white mb-1">
              {member.name}
            </h3>
            <p className="text-blue-400 text-sm mb-3">{member.role}</p>
            <p className="text-white/70 text-sm mb-4">{member.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
