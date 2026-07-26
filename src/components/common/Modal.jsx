import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock.js";
import { useFocusTrap } from "../../hooks/useFocusTrap.js";

/**
 * Generic modal dialog rendered through a React Portal. Populate its body
 * via `children` so a single component can serve service details, specialist
 * details, and legal placeholders alike.
 */
export default function Modal({
  isOpen,
  onClose,
  titleId,
  descriptionId,
  children,
  maxWidthClass = "max-w-2xl",
}) {
  const panelRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useBodyScrollLock(isOpen);
  useFocusTrap(panelRef, isOpen);

  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-[#171126]/55 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            tabIndex={-1}
            className={`thin-scroll relative flex max-h-[88vh] w-full ${maxWidthClass} flex-col overflow-y-auto rounded-t-[24px] border border-[#E8E1F4] bg-white p-6 shadow-2xl sm:rounded-[24px] sm:p-8`}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24, scale: prefersReducedMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 16, scale: prefersReducedMotion ? 1 : 0.98 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="focus-ring absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E1F4] bg-white text-[#171126] transition-colors hover:bg-[#F5F1FF]"
            >
              <X size={18} aria-hidden="true" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
