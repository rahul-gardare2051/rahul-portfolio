function Button({
  children,
  variant = "primary",
}) {

  const base =
    "px-7 py-3 rounded-xl font-semibold transition-all duration-300";

  const styles = {

    primary:
      "bg-violet-600 hover:bg-cyan-500",

    secondary:
      "border border-violet-600 hover:bg-violet-600"

  };

  return (

    <button className={`${base} ${styles[variant]}`}>

      {children}

    </button>

  );

}

export default Button;