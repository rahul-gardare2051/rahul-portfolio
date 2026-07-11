import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="h-20 flex justify-between items-center">

          {/* Logo */}

          <h1 className="text-3xl font-black text-violet-500 cursor-pointer">

            Rahul.

          </h1>

          {/* Desktop Menu */}

          <ul className="hidden md:flex gap-10 text-slate-300 font-medium">

            <li><a href="#home">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#skills">Skills</a></li>

            <li><a href="#projects">Projects</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>

          {/* Right Side */}

          <div className="flex items-center gap-5">

            <button
              className="hidden md:block bg-violet-600 hover:bg-cyan-500 duration-300 px-6 py-3 rounded-xl font-semibold">

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

      {

        menuOpen && (

          <div className="md:hidden border-t border-slate-800 bg-slate-900">

            <ul className="flex flex-col p-6 gap-6 text-lg">

              <li><a href="#home">Home</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#skills">Skills</a></li>

              <li><a href="#projects">Projects</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

        )

      }

    </header>

  );

}

export default Navbar;