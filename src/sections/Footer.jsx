import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { portfolio } from "../data/portfolio";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Top */}

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Logo */}

          <div className="text-center md:text-left">

            <h2 className="text-3xl font-black text-violet-500">
              Rahul.
            </h2>

            <p className="mt-3 max-w-md text-slate-400">
              MERN Stack Developer passionate about building
              scalable, responsive and modern web applications.
            </p>

          </div>

          {/* Quick Links */}

          <div className="flex flex-wrap justify-center gap-6 text-slate-400">

            <a
              href="#home"
              className="transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Rahul Gardare. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-400"
            >
              <FaGithub size={20} />
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin size={20} />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;