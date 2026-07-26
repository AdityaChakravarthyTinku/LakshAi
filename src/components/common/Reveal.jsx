import { motion, useReducedMotion } from "motion/react";

/**
 * Fades and rises content into view once, the first time it enters the
 * viewport. Disabled automatically when the user prefers reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
  as = "div",
}) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (prefersReducedMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
