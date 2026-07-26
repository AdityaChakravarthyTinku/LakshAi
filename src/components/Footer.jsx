import { Link } from 'react-scroll'
import { Linkedin, Twitter, Github, Send } from 'lucide-react'
import Reticle from '../utils/Reticle'

const quickLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About Us', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Process', to: 'process' },
  { label: 'Contact', to: 'contact' },
]

const serviceLinks = [
  'AI & Machine Learning',
  'Generative AI & LLMs',
  'AI Agents & Automation',
  'Software Development',
  'Cloud AI Infrastructure',
  'AI Strategy & Consulting',
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-40 bg-teal/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container-xl px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Reticle size={20} className="text-teal" />
              <span className="font-display font-semibold text-xl">
                Laksh<span className="text-teal">AI</span>
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              We design, build, and deploy enterprise-grade AI systems that turn ambition into
              measurable outcomes.
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal hover:text-ink transition-colors duration-300"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="coord-label text-xs text-white/50 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-70}
                    className="cursor-pointer text-sm text-white/70 hover:text-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="coord-label text-xs text-white/50 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link
                    to="services"
                    smooth
                    duration={600}
                    offset={-70}
                    className="cursor-pointer text-sm text-white/70 hover:text-teal transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="coord-label text-xs text-white/50 mb-4">Newsletter</h4>
            <p className="text-sm text-white/55 mb-4 leading-relaxed">
              Occasional notes on applied AI — no spam.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-white/10 border border-white/15 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-teal transition-colors min-w-0"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-teal text-ink flex items-center justify-center flex-shrink-0 hover:bg-teal-soft transition-colors"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/45">
          <span>© {new Date().getFullYear()} Laksh AI. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-teal transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-teal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
