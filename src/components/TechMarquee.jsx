import { techStack } from '../constants/content'
import Reveal from '../utils/Reveal'
import Reticle from '../utils/Reticle'

export default function TechMarquee() {
  const doubled = [...techStack, ...techStack]

  return (
    <section className="py-16 bg-mist border-y border-line overflow-hidden">
      <div className="container-xl px-6 md:px-10 lg:px-16">
        <Reveal>
          <div className="flex items-center gap-2 text-teal coord-label text-xs font-semibold mb-8 justify-center">
            <Reticle size={12} />
            Technologies We Use
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-mist to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-mist to-transparent z-10" />
        <div className="marquee-track">
          {doubled.map((tech, idx) => (
            <div
              key={`${tech}-${idx}`}
              className="flex-shrink-0 mx-3 bg-white border border-line rounded-xl px-6 py-3.5 font-display font-medium text-ink-soft whitespace-nowrap hover:text-teal hover:border-teal/40 transition-colors duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
