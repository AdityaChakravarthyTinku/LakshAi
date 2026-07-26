import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../constants/navLinks'
import { useScrollDirection } from '../hooks/useScrollDirection'
import { useActiveSection } from '../hooks/useActiveSection'
import Reticle from '../utils/Reticle'

export default function Navbar() {
  const scrolled = useScrollDirection(40)
  const active = useActiveSection(navLinks.map((l) => l.to))
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-xl px-6 md:px-10 lg:px-16 flex items-center justify-between">
        <Link to="hero" smooth duration={600} className="flex items-center gap-2 cursor-pointer group">
          <span className="text-ink group-hover:text-teal transition-colors">
            <Reticle size={22} />
          </span>
          <span className="font-display font-semibold text-xl tracking-tight text-ink">
            Laksh<span className="text-teal">AI</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7 coord-label text-xs font-medium text-ink-soft">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                spy
                className={`cursor-pointer transition-colors hover:text-teal relative pb-1 ${
                  active === link.to ? 'text-ink' : ''
                }`}
              >
                {link.label}
                {active === link.to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-teal"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className="cursor-pointer inline-flex items-center gap-2 bg-ink text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-royal transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>

        <button
          className="lg:hidden text-ink p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white shadow-card overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-70}
                    onClick={() => setOpen(false)}
                    className="cursor-pointer block py-3 text-ink-soft hover:text-teal transition-colors coord-label text-sm border-b border-line"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-70}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer inline-block w-full text-center bg-ink text-white font-semibold px-5 py-3 rounded-full"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
