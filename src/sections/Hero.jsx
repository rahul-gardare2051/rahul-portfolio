import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";

import Button from "../components/common/Button";
import Badge from "../components/ui/Badge";
import { portfolio } from "../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-28 pb-20 lg:grid-cols-2 lg:gap-24 lg:px-8">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <div className="flex justify-center lg:justify-start">
            <Badge>Available for Work</Badge>
          </div>

          <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Hi, I'm
            <span className="block text-violet-500">
              {portfolio.name}
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Frontend Developer",
              2000,
              "Backend Developer",
              2000,
            ]}
            repeat={Infinity}
            wrapper="h2"
            className="mt-6 text-xl font-bold text-cyan-400 sm:text-2xl lg:text-3xl"
          />

          <p className="mx-auto mt-8 max-w-lg text-base leading-8 text-slate-400 lg:mx-0 lg:text-lg lg:leading-9">
            {portfolio.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a href="#contact">
              <Button>Hire Me</Button>
            </a>

            <a
              href={portfolio.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                <div className="flex items-center gap-2">
                  <FaDownload />
                  Resume
                </div>
              </Button>
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-5 lg:justify-start">

            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:text-violet-400"
            >
              <FaGithub />
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 mb-12 flex justify-center lg:order-2 lg:mb-0"
        >
          <div className="relative">

            {/* Glow */}

            <div className="absolute -inset-8 -z-10 rounded-[60px] bg-gradient-to-r from-violet-600/30 to-cyan-500/30 blur-3xl"></div>

            {/* React */}

            <div className="absolute -left-8 top-6 z-20 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-xl animate-float lg:-left-20 lg:top-10 lg:p-4">
              <FaReact className="text-3xl text-cyan-400 lg:text-4xl" />
            </div>

            {/* Node */}

            <div className="absolute -right-8 top-10 z-20 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-xl animate-float lg:-right-20 lg:top-16 lg:p-4">
              <FaNodeJs className="text-3xl text-green-500 lg:text-4xl" />
            </div>

            {/* Mongo */}

            <div className="absolute -left-8 bottom-6 z-20 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-xl animate-float lg:-left-20 lg:bottom-8 lg:p-4">
              <SiMongodb className="text-3xl text-green-400 lg:text-4xl" />
            </div>

            {/* JavaScript */}

            <div className="absolute -right-8 bottom-6 z-20 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-xl animate-float lg:-right-20 lg:bottom-8 lg:p-4">
              <SiJavascript className="text-3xl text-yellow-400 lg:text-4xl" />
            </div>

            {/* Profile */}

            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-[32px] border border-violet-500/40 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 p-[3px] shadow-[0_0_80px_rgba(139,92,246,0.35)] sm:h-[360px] sm:w-[360px] lg:h-[430px] lg:w-[430px] lg:rounded-[40px]">

              <div className="h-full w-full overflow-hidden rounded-[30px] bg-slate-950 lg:rounded-[38px]">

                <img
                  src={profile}
                  alt="Rahul Gardare"
                  className="h-full w-full object-cover transition-all duration-500 hover:scale-[1.10]"
                  style={{
                    objectPosition: "center 10%",
                    transform: "scale(1.05)",
                  }}
                />

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;