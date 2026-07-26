import * as Icons from 'lucide-react'
import CountUp from 'react-countup'
import { coreValues, achievements } from '../constants/content'
import Reveal from '../utils/Reveal'
import Reticle from '../utils/Reticle'

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-xl">
        <Reveal>
          <div className="flex items-center gap-2 text-teal coord-label text-xs font-semibold mb-4">
            <Reticle size={12} />
            About Laksh AI
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <Reveal>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink leading-tight max-w-xl">
                Built by engineers who ship AI systems, not just prototypes
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-ink-soft leading-relaxed max-w-xl">
                Laksh AI was founded on a simple observation: most companies don't fail at AI because
                the models aren't good enough — they fail because nobody bridges the gap between a
                promising demo and a system people can actually rely on in production.
              </p>
              <p className="mt-4 text-ink-soft leading-relaxed max-w-xl">
                We work as an extension of your team, combining AI engineering, software architecture,
                and plain-spoken strategy to build systems that hold up under real usage — not just in
                a sales demo.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                <div className="border border-line rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-lg text-ink mb-2">Our Mission</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    Give every organization access to AI systems as capable as the ones built inside
                    the biggest tech companies — without the years of in-house R&amp;D.
                  </p>
                </div>
                <div className="border border-line rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-lg text-ink mb-2">Our Vision</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    A future where intelligent systems handle the repeatable work, and people spend
                    their time on the judgment calls only they can make.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Core values grid */}
          <Reveal delay={0.15}>
            <div className="grid sm:grid-cols-2 gap-4">
              {coreValues.map((value) => {
                const Icon = Icons[value.icon]
                return (
                  <div
                    key={value.title}
                    className="bg-mist rounded-2xl p-6 hover:shadow-card transition-shadow duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white shadow-soft flex items-center justify-center mb-4 text-teal group-hover:text-royal transition-colors">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <h4 className="font-display font-semibold text-ink mb-1.5">{value.title}</h4>
                    <p className="text-sm text-ink-soft leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>

        {/* Achievements strip */}
        <Reveal delay={0.1}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-line pt-12">
            {achievements.map((item) => (
              <div key={item.label} className="text-center md:text-left">
                <div className="font-display font-semibold text-3xl md:text-4xl text-gradient">
                  <CountUp end={item.value} duration={2.2} enableScrollSpy scrollSpyOnce suffix={item.suffix} />
                </div>
                <div className="text-xs text-ink-soft mt-1.5 coord-label">{item.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
