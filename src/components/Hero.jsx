import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import CountUp from 'react-countup'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { stats } from '../constants/content'
import Reticle from '../utils/Reticle'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-mist pt-28 pb-16">
      {/* Ambient gradient blobs */}
      <div className="absolute -top-24 -right-24 w-[32rem] h-[32rem] bg-grad-radial-royal rounded-full blur-3xl animate-pulse-soft" aria-hidden="true" />
      <div className="absolute bottom-0 -left-24 w-[28rem] h-[28rem] bg-grad-radial-teal rounded-full blur-3xl animate-pulse-soft" aria-hidden="true" />

      {/* Faint targeting grid, ties to the "Laksh" (aim) concept */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />

      <div className="container-xl px-6 md:px-10 lg:px-16 relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 coord-label text-xs text-royal bg-royal/5 border border-royal/15 rounded-full px-4 py-1.5 mb-7"
          >
            <Reticle size={12} />
            Precision-built AI systems
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-[2.75rem] leading-[1.08] sm:text-6xl lg:text-[3.75rem] text-ink tracking-tight"
          >
            Empowering Businesses{' '}
            <span className="text-gradient">Through Intelligent</span> AI Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed"
          >
            Laksh AI designs, builds, and deploys enterprise-grade AI systems —
            from generative AI and LLM applications to autonomous agents — engineered
            to hit the outcomes that actually matter to your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="services"
              smooth
              duration={600}
              offset={-80}
              className="cursor-pointer group inline-flex items-center gap-2 bg-ink text-white font-semibold px-7 py-3.5 rounded-full hover:bg-royal transition-all duration-300 shadow-glow-royal"
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className="cursor-pointer inline-flex items-center gap-2 border border-ink/15 text-ink font-semibold px-7 py-3.5 rounded-full hover:border-teal hover:text-teal transition-colors duration-300"
            >
              <MessageCircle size={18} />
              Contact Us
            </Link>
          </motion.div>

          {/* Animated stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-semibold text-3xl text-ink">
                  <CountUp end={stat.value} duration={2.2} enableScrollSpy scrollSpyOnce suffix={stat.suffix} />
                </div>
                <div className="text-xs text-ink-soft mt-1 coord-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: visual signature — targeting reticle constellation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:flex items-center justify-center h-[30rem]"
        >
          <div className="absolute inset-0 rounded-full bg-grad-primary opacity-[0.06] blur-2xl" />

          {/* Concentric aim rings */}
          <div className="relative w-96 h-96 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-ink/10 animate-spin-slow" />
            <div className="absolute inset-8 rounded-full border border-royal/20" />
            <div className="absolute inset-16 rounded-full border border-teal/25" />
            <div className="absolute inset-28 rounded-full bg-white shadow-card flex items-center justify-center">
              <Reticle size={40} className="text-teal" />
            </div>

            {/* Floating coordinate cards */}
            <motion.div
              className="absolute -left-6 top-8 bg-white shadow-card rounded-xl px-4 py-3 animate-float"
            >
              <div className="coord-label text-[10px] text-ink-faint mb-0.5">LLM.ACCURACY</div>
              <div className="font-display font-semibold text-ink text-sm">98.2%</div>
            </motion.div>

            <motion.div
              className="absolute -right-8 top-24 bg-white shadow-card rounded-xl px-4 py-3 animate-float-delay"
            >
              <div className="coord-label text-[10px] text-ink-faint mb-0.5">LATENCY</div>
              <div className="font-display font-semibold text-ink text-sm">180ms</div>
            </motion.div>

            <motion.div
              className="absolute -left-2 bottom-6 bg-white shadow-card rounded-xl px-4 py-3 animate-float"
            >
              <div className="coord-label text-[10px] text-ink-faint mb-0.5">UPTIME</div>
              <div className="font-display font-semibold text-ink text-sm">99.98%</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
