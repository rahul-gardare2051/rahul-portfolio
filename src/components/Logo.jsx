function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3 group"
    >
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center font-black text-lg shadow-lg shadow-violet-500/30 group-hover:rotate-6 transition-transform duration-300">
        RG
      </div>

      <div className="hidden sm:block">
        <h1 className="text-xl font-black tracking-wide">
          Rahul
        </h1>

        <p className="text-xs text-slate-400">
          MERN Developer
        </p>
      </div>
    </a>
  );
}

export default Logo;