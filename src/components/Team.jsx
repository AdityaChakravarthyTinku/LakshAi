import { Linkedin } from 'lucide-react'
import { team } from '../constants/content'
import Reveal from '../utils/Reveal'
import Reticle from '../utils/Reticle'

function initials(name) {
  return name.split(' ').map((n) => n[0]).join('')
}

export default function Team() {
  return (
    <section id="team" className="section bg-mist">
      <div className="container-xl">
        <Reveal>
          <div className="flex items-center gap-2 text-teal coord-label text-xs font-semibold mb-4 justify-center">
            <Reticle size={12} />
            Meet Our Experts
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink text-center max-w-2xl mx-auto leading-tight">
            The people behind every deployment
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-14">
          {team.map((member, idx) => (
            <Reveal key={member.name} delay={(idx % 8) * 0.04}>
              <div className="bg-white rounded-2xl p-6 border border-line hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-grad-primary flex items-center justify-center text-white font-display font-semibold text-lg mb-4">
                  {initials(member.name)}
                </div>
                <h3 className="font-display font-semibold text-ink">{member.name}</h3>
                <div className="coord-label text-[11px] text-teal mt-0.5 mb-3">{member.role}</div>
                <p className="text-sm text-ink-soft leading-relaxed mb-4">{member.description}</p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-1.5 text-xs text-ink-faint group-hover:text-royal transition-colors"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin size={14} />
                  Connect
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
