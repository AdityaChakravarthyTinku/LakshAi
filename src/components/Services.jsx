import { useState } from 'react'
import * as Icons from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../constants/services'
import Reveal from '../utils/Reveal'
import Reticle from '../utils/Reticle'

const categories = {
  'AI & Data': ['AI & Machine Learning', 'Generative AI & LLMs', 'AI Agents & Automation', 'Chatbot Development', 'Computer Vision', 'Natural Language Processing', 'Predictive Analytics', 'Business Intelligence', 'Data Engineering'],
  'Engineering': ['Software Development', 'Web Development', 'Mobile App Development', 'Enterprise Software', 'API Integration'],
  'Cloud & Security': ['Cloud AI Infrastructure', 'Cloud Migration', 'Cybersecurity'],
  'Strategy & Design': ['AI Strategy & Consulting', 'Process Automation', 'Digital Transformation', 'UI/UX Design', 'ERP & CRM Solutions'],
}

export default function Services() {
  const [active, setActive] = useState('All')
  const tabs = ['All', ...Object.keys(categories)]

  const filtered =
    active === 'All' ? services : services.filter((s) => categories[active].includes(s.title))

  return (
    <section id="services" className="section bg-white">
      <div className="container-xl">
        <Reveal>
          <div className="flex items-center gap-2 text-teal coord-label text-xs font-semibold mb-4 justify-center">
            <Reticle size={12} />
            Our Services
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink text-center max-w-2xl mx-auto leading-tight">
            Exclusive services built around your outcomes
          </h2>
        </Reveal>

        {/* Filter tabs */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mt-9">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === tab
                    ? 'bg-ink text-white'
                    : 'bg-mist text-ink-soft hover:bg-line'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {filtered.map((service, idx) => {
            const Icon = Icons[service.icon]
            return (
              <Reveal key={service.title} delay={(idx % 6) * 0.05}>
                <div className="group bg-mist rounded-2xl p-7 h-full border border-transparent hover:border-teal/30 hover:bg-white hover:shadow-card transition-all duration-300">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center text-royal group-hover:text-teal group-hover:scale-110 transition-all duration-300">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-ink-faint opacity-0 group-hover:opacity-100 group-hover:text-teal transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-ink mb-2">{service.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{service.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
