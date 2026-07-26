import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../constants/content'
import Reveal from '../utils/Reveal'
import Reticle from '../utils/Reticle'
import 'swiper/css'
import 'swiper/css/pagination'

function initials(name) {
  return name.split(' ').map((n) => n[0]).join('')
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-xl">
        <Reveal>
          <div className="flex items-center gap-2 text-teal coord-label text-xs font-semibold mb-4 justify-center">
            <Reticle size={12} />
            Client Testimonials
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink text-center max-w-2xl mx-auto leading-tight">
            What our clients say about working with us
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 testimonial-swiper">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1100: { slidesPerView: 3 },
              }}
              className="pb-14"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.name}>
                  <div className="bg-mist rounded-2xl p-8 h-full flex flex-col border border-line">
                    <Quote className="text-teal/40 mb-4" size={28} />
                    <p className="text-ink-soft leading-relaxed flex-1">{t.feedback}</p>
                    <div className="flex gap-1 mt-6 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={15} className="fill-teal text-teal" />
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-grad-primary flex items-center justify-center text-white font-display font-semibold text-sm flex-shrink-0">
                        {initials(t.name)}
                      </div>
                      <div>
                        <div className="font-display font-semibold text-ink text-sm">{t.name}</div>
                        <div className="text-xs text-ink-soft">{t.company}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Reveal>
      </div>

      <style>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #94A3B8;
          opacity: 0.4;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #14B8A6;
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
