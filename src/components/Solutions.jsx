import { useState } from 'react'
import * as Icons from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { solutions } from '../constants/solutions'
import Reveal from '../utils/Reveal'
import Reticle from '../utils/Reticle'

export default function Solutions() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="solutions" className="section bg-grad-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container-xl relative z-10">
        <Reveal>
          <div className="flex items-center gap-2 text-teal-soft coord-label text-xs font-semibold mb-4 justify-center">
            <Reticle size={12} />
            AI Solutions
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-white text-center max-w-2xl mx-auto leading-tight">
            Solutions tuned to how your industry actually works
          </h2>
          <p className="text-center text-white/60 max-w-xl mx-auto mt-4">
            Select a solution to see how we approach it end to end.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {solutions.map((sol, idx) => {
            const Icon = Icons[sol.icon]
            return (
              <Reveal key={sol.title} delay={(idx % 6) * 0.05}>
                <button
                  onClick={() => setSelected(sol)}
                  className="text-left w-full bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 hover:border-teal/40 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-teal-soft group-hover:bg-teal group-hover:text-ink transition-all duration-300">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display font-semibold text-white mb-1.5">{sol.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{sol.summary}</p>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-ink/70 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-card"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 text-ink-faint hover:text-ink transition-colors"
                aria-label="Close"
              >
                <X size={22} />
              </button>
              {selected && (
                <>
                  <div className="w-12 h-12 rounded-xl bg-grad-primary flex items-center justify-center mb-5 text-white">
                    {(() => {
                      const Icon = Icons[selected.icon]
                      return <Icon size={22} strokeWidth={1.75} />
                    })()}
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-ink mb-3">{selected.title}</h3>
                  <p className="text-ink-soft leading-relaxed">{selected.details}</p>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
