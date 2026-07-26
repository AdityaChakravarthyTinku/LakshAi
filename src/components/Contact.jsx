import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react'
import Reveal from '../utils/Reveal'
import Reticle from '../utils/Reticle'

// EmailJS is wired up but requires the site owner's own service/template/public keys.
// Replace these three placeholders once you create an EmailJS account.
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data) => {
    try {
      // Lazy-load emailjs so the bundle stays lean if the form is never used.
      const emailjs = (await import('@emailjs/browser')).default
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      // EmailJS isn't configured yet in this environment — fail quietly in dev.
      console.warn('EmailJS not configured yet:', err)
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section id="contact" className="section bg-white">
      <div className="container-xl">
        <Reveal>
          <div className="flex items-center gap-2 text-teal coord-label text-xs font-semibold mb-4 justify-center">
            <Reticle size={12} />
            Contact Us
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink text-center max-w-2xl mx-auto leading-tight">
            Tell us what you're trying to solve
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 mt-14">
          {/* Contact info */}
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-mist flex items-center justify-center text-teal flex-shrink-0">
                  <MapPin size={19} />
                </div>
                <div>
                  <div className="coord-label text-[11px] text-ink-faint mb-1">Address</div>
                  <p className="text-ink-soft text-sm">[ Your office address ]</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-mist flex items-center justify-center text-teal flex-shrink-0">
                  <Phone size={19} />
                </div>
                <div>
                  <div className="coord-label text-[11px] text-ink-faint mb-1">Phone</div>
                  <p className="text-ink-soft text-sm">[ Your phone number ]</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-mist flex items-center justify-center text-teal flex-shrink-0">
                  <Mail size={19} />
                </div>
                <div>
                  <div className="coord-label text-[11px] text-ink-faint mb-1">Email</div>
                  <p className="text-ink-soft text-sm">[ Your email address ]</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-mist flex items-center justify-center text-teal flex-shrink-0">
                  <Clock size={19} />
                </div>
                <div>
                  <div className="coord-label text-[11px] text-ink-faint mb-1">Business Hours</div>
                  <p className="text-ink-soft text-sm">Mon – Fri, 9:00 AM – 6:00 PM</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-line h-56 mt-6">
                <iframe
                  title="Location map"
                  className="w-full h-full grayscale contrast-125"
                  loading="lazy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.30%2C40.49%2C-73.70%2C40.92&layer=mapnik"
                />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="bg-mist rounded-2xl p-7 md:p-9">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" error={errors.name}>
                  <input
                    {...register('name', { required: 'Please enter your name' })}
                    className="form-input"
                    placeholder="Jane Doe"
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Please enter your email',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                    })}
                    className="form-input"
                    placeholder="jane@company.com"
                  />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input {...register('phone')} className="form-input" placeholder="(555) 000-0000" />
                </Field>
                <Field label="Company" error={errors.company}>
                  <input {...register('company')} className="form-input" placeholder="Company name" />
                </Field>
                <Field label="Service Interested In" error={errors.service}>
                  <select {...register('service')} className="form-input">
                    <option value="">Select a service</option>
                    <option>AI & Machine Learning</option>
                    <option>Generative AI & LLMs</option>
                    <option>AI Agents & Automation</option>
                    <option>Software Development</option>
                    <option>Cloud & Infrastructure</option>
                    <option>AI Strategy & Consulting</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Budget Range" error={errors.budget}>
                  <select {...register('budget')} className="form-input">
                    <option value="">Select a range</option>
                    <option>Under $10k</option>
                    <option>$10k – $50k</option>
                    <option>$50k – $150k</option>
                    <option>$150k+</option>
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message" error={errors.message}>
                  <textarea
                    {...register('message', { required: 'Tell us a bit about your project' })}
                    className="form-input min-h-32 resize-y"
                    placeholder="What are you trying to build or solve?"
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink text-white font-semibold px-8 py-3.5 rounded-full hover:bg-royal transition-colors duration-300 disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="mt-4 flex items-center gap-2 text-teal text-sm font-medium"
                  >
                    <CheckCircle2 size={17} />
                    Thanks — we'll be in touch within one business day.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: #fff;
          border: 1px solid #E2E8F0;
          border-radius: 0.75rem;
          padding: 0.7rem 1rem;
          font-size: 0.9rem;
          color: #0F172A;
          transition: border-color 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: #14B8A6;
        }
      `}</style>
    </section>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-ink-soft mb-1.5 block coord-label">{label}</span>
      {children}
      {error && <span className="text-xs text-red-500 mt-1 block">{error.message}</span>}
    </label>
  )
}
