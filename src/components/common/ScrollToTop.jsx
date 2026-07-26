import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

/**
 * Floating scroll-to-top button. Appears only after the visitor has
 * scrolled a meaningful distance down the page.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 640);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll back to top"
          className="focus-ring fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#171126] text-white shadow-lg shadow-[#171126]/20 sm:bottom-8 sm:right-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
        >
          <ArrowUp size={20} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
