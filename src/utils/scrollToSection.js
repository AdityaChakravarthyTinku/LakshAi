// Height (in px) reserved for the sticky header so anchored sections are not
// hidden underneath it when scrolled to.
export const HEADER_OFFSET = 76;

/**
 * Smoothly scrolls to a section by id, accounting for the sticky header.
 * Respects the user's reduced-motion preference.
 */
export function scrollToSection(id) {
  const cleanId = id.startsWith("#") ? id.slice(1) : id;
  const el = document.getElementById(cleanId);
  if (!el) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  window.scrollTo({
    top,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}
