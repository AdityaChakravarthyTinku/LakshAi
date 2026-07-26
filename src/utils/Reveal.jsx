import { motion } from 'framer-motion'

/** Wraps children in a scroll-triggered fade/rise reveal.
 *  Centralizes the animation so every section behaves consistently. */
export default function Reveal({ children, delay = 0, y = 24, className = '', once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
