function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <h1 className="text-3xl font-bold text-violet-500">
          Rahul.
        </h1>

        <ul className="hidden md:flex gap-10 text-slate-200">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">

          <button className="hidden md:block bg-violet-600 hover:bg-cyan-500 duration-300 px-6 py-3 rounded-lg font-semibold">
            Resume
          </button>

          <button className="md:hidden text-3xl">
            ☰
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;