import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Logo from "./Logo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex justify-between items-center">
          {/* Logo */}
          
          <Logo />

          {/* Desktop Menu */}
  <ul  className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-300">
  {[
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ].map((item) => (
    <li key={item}>
      <a
        href={`#${item.toLowerCase()}`}
        className="relative transition-colors duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        {item}
      </a>
    </li>
  ))}
</ul>
          

          {/* Right Side */}
          <div className="flex items-center gap-5">
            <button className="hidden md:flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold shadow-lg shadow-violet-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500">
                Resume
                </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-4xl"
            >
              {menuOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <ul className="flex flex-col p-6 gap-6 text-lg">
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;