function Button({
  children,
  variant = "primary",
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-7 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-violet-600 text-white hover:-translate-y-1 hover:bg-cyan-500",

    secondary:
      "border border-violet-500 text-white hover:bg-violet-600 hover:-translate-y-1",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;