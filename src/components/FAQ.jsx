import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqs } from '../constants/content'
import Reveal from '../utils/Reveal'
import Reticle from '../utils/Reticle'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className="section bg-white">
      <div className="container-xl">
        <Reveal>
          <div className="flex items-center gap-2 text-teal coord-label text-xs font-semibold mb-4 justify-center">
            <Reticle size={12} />
            FAQ
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink text-center max-w-2xl mx-auto leading-tight">
            Questions we hear before every engagement
          </h2>
        </Reveal>

        <div className="max-w-3xl mx-auto mt-14">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx
            return (
              <div key={item.q} className="border-b border-line">
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-5 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display font-medium text-ink group-hover:text-teal transition-colors ${isOpen ? 'text-teal' : ''}`}>
                    {item.q}
                  </span>
                  <Plus
                    size={19}
                    className={`text-ink-faint flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 text-teal' : ''
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="text-ink-soft leading-relaxed pb-5 pr-10 text-sm">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
