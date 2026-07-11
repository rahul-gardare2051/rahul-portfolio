function Badge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">

      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>

      {children}

    </div>
  );
}

export default Badge;