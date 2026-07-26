import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/**
 * Traps keyboard focus inside `containerRef` while `active` is true, moves
 * initial focus into the container, and restores focus to the element that
 * was focused before activation once deactivated.
 */
export function useFocusTrap(containerRef, active) {
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!active) return undefined;

    previouslyFocused.current = document.activeElement;

    const container = containerRef.current;
    if (!container) return undefined;

    const focusables = () =>
      Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR));

    const initial = focusables()[0];
    if (initial) {
      initial.focus();
    } else {
      container.focus();
    }

    function handleKeyDown(event) {
      if (event.key !== "Tab") return;

      const nodes = focusables();
      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (previouslyFocused.current && previouslyFocused.current.focus) {
        previouslyFocused.current.focus();
      }
    };
  }, [active, containerRef]);
}
