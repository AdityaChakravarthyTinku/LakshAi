import { useEffect, useState } from 'react'

/** Tracks whether the page has scrolled past a threshold, and scroll direction.
 *  Used to shrink the navbar and toggle its background on scroll. */
export function useScrollDirection(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
