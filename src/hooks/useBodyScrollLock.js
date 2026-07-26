import { useEffect } from "react";

/**
 * Locks body scrolling while `locked` is true (used by modals and the
 * mobile menu drawer). Restores the previous overflow value on cleanup.
 */
export function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}
