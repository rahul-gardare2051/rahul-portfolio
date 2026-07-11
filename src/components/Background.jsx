function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-slate-950"></div>

      <div className="fixed inset-0 -z-40 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

      <div className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-600 blur-[180px] opacity-20 -z-30 animate-pulse"></div>

      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500 blur-[180px] opacity-20 -z-30 animate-pulse"></div>
    </>
  );
}

export default Background;