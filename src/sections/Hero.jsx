import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import Button from "../components/common/Button";
import { portfolio } from "../data/portfolio";
import Badge from "../components/ui/Badge";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-28 pb-20 lg:grid-cols-2 lg:px-8">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
       <Badge>
       Available for Work
       </Badge>
          <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight tracking-tight">
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
            className="mt-6 text-3xl font-bold text-cyan-400"
          />

          <p className="mt-8 max-w-lg text-lg leading-9 text-slate-400">
            {portfolio.description}
          </p>

         <div className="mt-12 flex flex-wrap items-center gap-5">
            <Button>
              Hire Me
            </Button>

            <Button variant="secondary">
              <div className="flex items-center gap-2">
                <FaDownload />
                Resume
              </div>
            </Button>

          </div>

         <div className="mt-12 flex items-center gap-7 text-3xl">
            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-400"
            >
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

  {/* Glow */}

  <div className="absolute inset-0 rounded-full bg-violet-600 blur-[120px] opacity-40 animate-pulse"></div>

  {/* React */}

  <div className="absolute -left-8 top-10 animate-bounce rounded-full bg-slate-900 p-4 shadow-xl">
    ⚛️
  </div>

  {/* Node */}

  <div className="absolute -right-6 top-20 animate-bounce rounded-full bg-slate-900 p-4 shadow-xl">
    🟢
  </div>

  {/* Mongo */}

  <div className="absolute left-2 bottom-14 animate-bounce rounded-full bg-slate-900 p-4 shadow-xl">
    🍃
  </div>

  {/* JavaScript */}

  <div className="absolute -right-5 bottom-10 animate-bounce rounded-full bg-slate-900 p-4 shadow-xl">
    🟨
  </div>

  {/* Avatar */}

  <div className="relative h-[430px] w-[430px] rounded-[40px] bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 p-[3px] shadow-2xl shadow-violet-500/20">

  <div className="h-full w-full rounded-[38px] bg-slate-950 flex items-center justify-center overflow-hidden">

    <img
      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800"
      alt="Profile"
      className="h-full w-full object-cover"
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