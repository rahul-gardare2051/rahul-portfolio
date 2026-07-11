function SkillCard({ skill }) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300 cursor-pointer">

      <h3 className="text-xl font-semibold group-hover:text-cyan-400">
        {skill}
      </h3>

    </div>
  );
}

export default SkillCard;