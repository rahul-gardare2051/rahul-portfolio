import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import SectionTitle from "../components/common/SectionTitle";

function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionTitle
          title="Let's Work Together"
          subtitle="Contact"
        />

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <div>

            <h2 className="text-4xl font-bold">
              Have an Idea?
            </h2>

            <p className="mt-6 text-slate-400 leading-8">
              I'm always open to discussing new opportunities,
              freelance projects and full-time roles.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">

                <FaEnvelope className="text-cyan-400 text-2xl" />

                <span>
                  rahul@example.com
                </span>

              </div>

              <div className="flex items-center gap-4">

                <FaGithub className="text-2xl" />

                <span>
                  github.com/rahul-gardare2051
                </span>

              </div>

              <div className="flex items-center gap-4">

                <FaLinkedin className="text-2xl text-blue-400" />

                <span>
                  linkedin.com/in/your-linkedin
                </span>

              </div>

            </div>

          </div>

          {/* Right */}

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-violet-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-violet-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-violet-500 resize-none"
            ></textarea>

            <button
              className="rounded-xl bg-violet-600 px-8 py-4 font-semibold hover:bg-cyan-500 duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;