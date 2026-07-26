const VARIANTS = {
  primary:
    "bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] text-white shadow-sm shadow-violet-900/10 hover:brightness-110 active:brightness-95",
  secondary:
    "bg-white text-[#171126] border border-[#E8E1F4] hover:border-[#A78BFA] hover:bg-[#F5F1FF]",
  ghost: "bg-transparent text-[#171126] hover:bg-[#F5F1FF]",
  onDark:
    "bg-white text-[#6D28D9] hover:bg-white/90 shadow-sm",
  outlineOnDark:
    "bg-transparent text-white border border-white/40 hover:bg-white/10",
};

/**
 * Shared button used across the site. Renders a <button> for in-page
 * actions or an <a> for navigation/mailto links when `href` is provided.
 */
export default function Button({
  as,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out select-none";
  const sizeClasses =
    size === "lg"
      ? "px-7 py-3.5 text-base"
      : size === "sm"
      ? "px-4 py-2 text-sm"
      : "px-6 py-3 text-sm";

  const classes = `${base} ${sizeClasses} ${VARIANTS[variant] ?? VARIANTS.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  const Component = as || "button";
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
