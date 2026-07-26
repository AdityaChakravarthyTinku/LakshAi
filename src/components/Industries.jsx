import { industries } from '../constants/content'
import Reveal from '../utils/Reveal'
import Reticle from '../utils/Reticle'

export default function Industries() {
  return (
    <section id="industries" className="section bg-white">
      <div className="container-xl">
        <Reveal>
          <div className="flex items-center gap-2 text-teal coord-label text-xs font-semibold mb-4 justify-center">
            <Reticle size={12} />
            Industries We Serve
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink text-center max-w-2xl mx-auto leading-tight">
            Domain-aware AI, not one-size-fits-all models
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12">
          {industries.map((industry, idx) => (
            <Reveal key={industry} delay={(idx % 8) * 0.04}>
              <div className="group border border-line rounded-xl px-6 py-8 text-center hover:border-teal hover:bg-mist transition-all duration-300 cursor-default">
                <span className="font-display font-medium text-ink group-hover:text-teal transition-colors">
                  {industry}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
