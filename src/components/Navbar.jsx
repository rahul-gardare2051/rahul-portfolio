import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Logo from "./Logo";
import { portfolio } from "../data/portfolio";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [active, setActive] = useState("home");

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

useEffect(() => {
  const handleScroll = () => {
    const sections = links.map((link) =>
      document.getElementById(link.id)
    );

    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      if (
        section &&
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        setActive(section.id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
   <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-18 items-center justify-between py-4 lg:h-20">
          {/* Logo */}
          
          <Logo />

          {/* Desktop Menu */}
  <ul className="hidden md:flex items-center gap-10 text-sm font-medium">

  {links.map((link) => (

    <li key={link.id}>

      <a
        href={`#${link.id}`}
        className={`transition-all duration-300 ${
          active === link.id
            ? "text-cyan-400"
            : "text-slate-300 hover:text-cyan-400"
        }`}
      >
        {link.label}
      </a>

    </li>

  ))}

</ul>

          {/* Right Side */}
  <div className="flex items-center gap-5">
  <a
       href={portfolio.resume}
        target="_blank"
        rel="noopener noreferrer"
         className="hidden md:flex items-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30"
>
  Resume
</a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
             className="rounded-xl p-2 text-4xl transition hover:bg-slate-800 md:hidden"
            >
              {menuOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="animate-in slide-in-from-top md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl">
        <ul className="flex flex-col gap-5 p-6 text-center">

  {links.map((link) => (

    <li key={link.id}>

      <a
        href={`#${link.id}`}
        onClick={() => setMenuOpen(false)}
        className={`rounded-xl py-3 text-lg font-semibold transition-all duration-300 ${
          active === link.id
            ? "text-cyan-400"
            : "text-slate-300"
        }`}
      >
        {link.label}
      </a>

    </li>

  ))}
      
       <li>
  <a
    href={portfolio.resume}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold"
  >
    Download Resume
  </a>
</li>
</ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;