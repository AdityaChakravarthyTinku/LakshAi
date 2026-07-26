import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently most visible in the viewport using
 * IntersectionObserver, for driving active nav-link styling.
 */
export function useActiveSection(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const visibilityMap = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        let bestId = null;
        let bestRatio = 0;
        visibilityMap.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId && bestRatio > 0) {
          setActiveId(bestId);
        }
      },
      {
        rootMargin: "-96px 0px -55% 0px",
        threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
        ...options,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  return activeId;
}
