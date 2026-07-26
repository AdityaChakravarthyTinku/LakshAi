import * as Icons from 'lucide-react'
import { whyChooseUs } from '../constants/content'
import Reveal from '../utils/Reveal'
import Reticle from '../utils/Reticle'

export default function WhyChooseUs() {
  return (
    <section className="section bg-mist">
      <div className="container-xl">
        <Reveal>
          <div className="flex items-center gap-2 text-teal coord-label text-xs font-semibold mb-4 justify-center">
            <Reticle size={12} />
            Why Choose Us
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink text-center max-w-2xl mx-auto leading-tight">
            Reasons enterprises trust Laksh AI with production systems
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {whyChooseUs.map((item, idx) => {
            const Icon = Icons[item.icon]
            return (
              <Reveal key={item.title} delay={idx * 0.05}>
                <div className="relative bg-white rounded-2xl p-7 h-full border border-line hover:border-teal/40 hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-teal/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-12 h-12 rounded-xl bg-grad-primary flex items-center justify-center mb-5 text-white">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="relative font-display font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="relative text-sm text-ink-soft leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
