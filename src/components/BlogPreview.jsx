import { ArrowRight } from 'lucide-react'
import { blogPosts } from '../constants/content'
import Reveal from '../utils/Reveal'
import Reticle from '../utils/Reticle'

export default function BlogPreview() {
  return (
    <section className="section bg-mist">
      <div className="container-xl">
        <Reveal>
          <div className="flex items-center gap-2 text-teal coord-label text-xs font-semibold mb-4 justify-center">
            <Reticle size={12} />
            Latest AI Articles
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink text-center max-w-2xl mx-auto leading-tight">
            Notes from the field
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {blogPosts.map((post, idx) => (
            <Reveal key={post.title} delay={idx * 0.08}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="group block bg-white rounded-2xl overflow-hidden border border-line hover:shadow-card transition-all duration-300 h-full"
              >
                <div className="h-40 bg-grad-primary relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-ink leading-snug mb-2 group-hover:text-teal transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed mb-4">{post.summary}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal group-hover:gap-2.5 transition-all duration-300">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
