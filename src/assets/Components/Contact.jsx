import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,  } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState(""); // for success/error message

  // Allow only digits, max 10 characters
  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) setMobile(value);
  };

  // EmailJS send handler
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_xj74ggc", // 🔹 replace with your actual service ID
        "template_pvfbomn", // 🔹 replace with your template ID
        form.current,
        "p6OR3xZ0afJ3-rpu1" // 🔹 replace with your public key
      )
      .then(
        () => {
          setStatus("Message sent successfully! 🌸");
          form.current.reset();
          setMobile("");
          setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          console.error(error.text);
          setStatus("Something went wrong. Please try again 💬");
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <section
      id="Contact"
      className="relative w-full min-h-[90vh] bg-white text-gray-800 py-20 px-6 flex items-center justify-center overflow-hidden"
    >
      {/* Soft pastel background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),rgba(236,72,153,0.1),transparent_80%)] blur-3xl"></div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left side – Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500 leading-tight">
            Let’s Connect <br /> & Bring Ideas to Life
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0">
            Whether you’re planning your next digital project or just want to
            discuss possibilities — reach out and let’s create something
            extraordinary together.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center justify-center lg:justify-start gap-3">
              <FaEnvelope className="text-cyan-500 text-xl" />
              <span>uttamwebsolution@gmail.com</span>
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-3">
              <FaPhoneAlt className="text-pink-500 text-xl" />
              <span>+91 95825 86200</span>
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-3">
              <FaMapMarkerAlt className="text-yellow-400 text-xl" />
              <span>Uttam Nagar, Delhi, India</span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8">
      <a
        href="https://www.linkedin.com/company/uttam-web-solution/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-inherit"
      >
        <FaLinkedin size={28} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-inherit"
      >
        <FaInstagram size={28} />
      </a>
      <a
        href="https://x.com/uWs_offical"
        target="_blank"
        rel="noopener noreferrer"
        className="text-inherit"
      >
        <FaXTwitter size={28} />
      </a>
      
    </div>
        </motion.div>

        {/* Right side – Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          {/* Mobile (Optional, Max 10 Digits) */}
          <input
            type="text"
            name="message"
            placeholder="Mobile (Optional)"
            value={mobile}
            onChange={handleMobileChange}
            inputMode="numeric"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />

          <input
            type="text"
            name="message"
            placeholder="Subject"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          ></textarea>

          <motion.button
            type="submit"
            id="Process"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Send Message
          </motion.button>

          {status && (
            <p  className="text-center text-sm text-gray-600 mt-4">{status}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
