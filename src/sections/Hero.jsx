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
import { portfolio } from "../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}

      <div className="absolute w-[500px] h-[500px] bg-violet-600 rounded-full blur-[180px] opacity-20 -top-40 -left-40"></div>

      <div className="absolute w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[180px] opacity-20 bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center relative z-10">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <p className="text-cyan-400 text-xl">
            Hello 👋 I'm
          </p>

          <h1 className="text-7xl font-black mt-3">
            {portfolio.name}
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="text-4xl font-bold text-violet-500 mt-5"
          />

          <p className="text-slate-400 mt-8 leading-8 max-w-xl">
            {portfolio.description}
          </p>

          <div className="flex gap-5 mt-10">

            <Button>
              Hire Me
            </Button>

            <Button variant="secondary">

              <div className="flex gap-3 items-center">

                <FaDownload />

                Resume

              </div>

            </Button>

          </div>

          <div className="flex gap-7 mt-12 text-3xl">

            <a href={portfolio.github}>
              <FaGithub />
            </a>

            <a href={portfolio.linkedin}>
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Floating Icons */}

            <FaReact className="absolute -top-6 left-10 text-6xl text-cyan-400 animate-bounce" />

            <FaNodeJs className="absolute top-24 -left-12 text-6xl text-green-500 animate-bounce" />

            <SiMongodb className="absolute bottom-10 -left-8 text-6xl text-green-400 animate-bounce" />

            <SiJavascript className="absolute top-20 -right-10 text-6xl text-yellow-400 animate-bounce" />

            {/* Avatar */}

            <div className="absolute inset-0 rounded-full bg-violet-600 blur-3xl opacity-40"></div>

            <div className="relative w-[430px] h-[430px] rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 p-2">

              <div className="w-full h-full rounded-full bg-slate-950 flex justify-center items-center text-8xl font-black">

                RG

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;