import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

import SectionTitle from "../components/common/SectionTitle";
import { portfolio } from "../data/portfolio";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_22r0vbw",
      "template_2wfuiy4",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "a0Q-yrZ3U0QP8s0Hr"
    );

    alert("✅ Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.error(error);

    alert("❌ Failed to send message.");
  }
};

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 py-24 lg:py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[140px]"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <SectionTitle
          title="Let's Build Something Amazing"
          subtitle="Contact Me"
        />

        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(139,92,246,.25)] lg:p-10"
          >

            <h2 className="text-3xl font-black lg:text-4xl">
              Get In Touch
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400 lg:text-lg">
              Looking for a MERN Stack Developer?
              I'm always open to discussing new opportunities,
              freelance work, or exciting projects.
            </p>

            <div className="mt-10 space-y-7">

              <div className="group flex items-center gap-5 transition-all duration-300 hover:translate-x-2">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">

                  <FaEnvelope className="text-2xl text-cyan-400 transition group-hover:scale-110" />

                </div>

                <span className="text-slate-300">
                  {portfolio.email}
                </span>

              </div>

              <div className="group flex items-center gap-5 transition-all duration-300 hover:translate-x-2">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">

                  <FaPhoneAlt className="text-xl text-green-400 transition group-hover:scale-110" />

                </div>

                <span className="text-slate-300">
                  {portfolio.phone}
                </span>

              </div>

              <div className="group flex items-center gap-5 transition-all duration-300 hover:translate-x-2">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">

                  <FaGithub className="text-2xl transition group-hover:scale-110" />

                </div>

                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-cyan-400"
                >
                  {portfolio.github.replace("https://", "")}
                </a>

              </div>

              <div className="group flex items-center gap-5 transition-all duration-300 hover:translate-x-2">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">

                  <FaLinkedin className="text-2xl text-blue-400 transition group-hover:scale-110" />

                </div>

                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-cyan-400"
                >
                  LinkedIn Profile
                </a>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

                   <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.25)] lg:p-10"
          >

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-slate-200 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-slate-200 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-slate-200 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
            >
              Send Message
            </button>

            <p className="text-center text-sm text-slate-500">
              Usually I reply within 24 hours.
            </p>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;