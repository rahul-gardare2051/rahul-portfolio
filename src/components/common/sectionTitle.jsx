function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <p className="text-cyan-400 uppercase tracking-[6px] text-sm">
        {subtitle}
      </p>

      <h2 className="text-5xl font-black mt-4">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;