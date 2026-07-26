import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { processSteps } from '../constants/content'
import Reveal from '../utils/Reveal'
import Reticle from '../utils/Reticle'

export default function Process() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="process" className="section bg-white">
      <div className="container-xl">
        <Reveal>
          <div className="flex items-center gap-2 text-teal coord-label text-xs font-semibold mb-4 justify-center">
            <Reticle size={12} />
            Development Process
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink text-center max-w-2xl mx-auto leading-tight">
            A disciplined path from idea to production
          </h2>
        </Reveal>

        <div className="max-w-3xl mx-auto mt-14">
          {processSteps.map((step, idx) => {
            const isOpen = openIdx === idx
            return (
              <Reveal key={step.title} delay={idx * 0.03}>
                <div className="border-b border-line last:border-b-0">
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full flex items-center gap-5 py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="coord-label text-xs text-ink-faint w-8 flex-shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-display font-semibold text-lg flex-1 transition-colors ${
                        isOpen ? 'text-teal' : 'text-ink group-hover:text-teal'
                      }`}
                    >
                      {step.title}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-ink-faint flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-teal' : ''
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-ink-soft leading-relaxed pl-13 pb-6 pr-8 ml-8">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
