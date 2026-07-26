import Reveal from "./Reveal.jsx";

/**
 * Consistent eyebrow + heading + supporting text block used at the top of
 * each major section.
 */
export default function SectionHeader({
  eyebrow,
  heading,
  text,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <Reveal className={`flex flex-col ${alignment} gap-4 ${className}`}>
      {eyebrow && (
        <span className="text-xs font-bold tracking-[0.18em] text-[#7C3AED]">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold leading-[1.15] text-[#171126]">
        {heading}
      </h2>
      {text && (
        <p className="max-w-xl text-[1.0625rem] leading-relaxed text-[#5F5A6D]">
          {text}
        </p>
      )}
    </Reveal>
  );
}
