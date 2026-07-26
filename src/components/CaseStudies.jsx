import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '../constants/content'
import Reveal from '../utils/Reveal'
import Reticle from '../utils/Reticle'

export default function CaseStudies() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section className="section bg-mist">
      <div className="container-xl">
        <Reveal>
          <div className="flex items-center gap-2 text-teal coord-label text-xs font-semibold mb-4 justify-center">
            <Reticle size={12} />
            Case Studies
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink text-center max-w-2xl mx-auto leading-tight">
            Outcomes, not just deliverables
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {caseStudies.map((study, idx) => {
            const isOpen = expanded === idx
            return (
              <Reveal key={study.title} delay={idx * 0.08}>
                <div className="bg-white rounded-2xl p-7 h-full border border-line flex flex-col">
                  <h3 className="font-display font-semibold text-lg text-ink leading-snug mb-4">
                    {study.title}
                  </h3>

                  <div className="space-y-3 text-sm flex-1">
                    <div>
                      <span className="coord-label text-[10px] text-ink-faint">Problem</span>
                      <p className="text-ink-soft mt-1 leading-relaxed">{study.problem}</p>
                    </div>

                    {isOpen && (
                      <>
                        <div>
                          <span className="coord-label text-[10px] text-ink-faint">Solution</span>
                          <p className="text-ink-soft mt-1 leading-relaxed">{study.solution}</p>
                        </div>
                        <div>
                          <span className="coord-label text-[10px] text-ink-faint">Outcome</span>
                          <p className="text-ink-soft mt-1 leading-relaxed">{study.outcome}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {study.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] bg-mist border border-line rounded-full px-2.5 py-1 text-ink-soft"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <button
                    onClick={() => setExpanded(isOpen ? null : idx)}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:gap-2.5 transition-all duration-300 self-start"
                  >
                    {isOpen ? 'Show less' : 'Read More'}
                    <ArrowRight size={15} className={isOpen ? 'rotate-90' : ''} style={{ transition: 'transform 0.3s' }} />
                  </button>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
