import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

import SectionTitle from "../components/common/SectionTitle";

function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Let's Build Something Amazing"
          subtitle="Contact Me"
        />

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-950 p-10"
          >

            <h2 className="text-4xl font-bold">
              Get In Touch
            </h2>

            <p className="mt-6 text-slate-400 leading-8">
              Looking for a MERN Stack Developer?
              Let's connect and build something awesome together.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-5">

                <FaEnvelope className="text-cyan-400 text-2xl"/>

                <span>rahulgardare2051@gmail.com</span>

              </div>

              <div className="flex items-center gap-5">

                <FaPhoneAlt className="text-green-400 text-xl"/>

                <span>+91 XXXXX XXXXX</span>

              </div>

              <div className="flex items-center gap-5">

                <FaGithub className="text-2xl"/>

                <span>github.com/rahul-gardare2051</span>

              </div>

              <div className="flex items-center gap-5">

                <FaLinkedin className="text-blue-400 text-2xl"/>

                <span>linkedin.com/in/your-linkedin</span>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-950 p-10 space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4 outline-none focus:border-violet-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4 outline-none focus:border-violet-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4 outline-none resize-none focus:border-violet-500"
            ></textarea>

            <button
              className="w-full rounded-xl bg-violet-600 py-4 font-semibold hover:bg-cyan-500 transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;