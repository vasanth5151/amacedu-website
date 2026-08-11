import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaStar, FaQuoteRight } from 'react-icons/fa'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { TESTIMONIALS } from '../data/content'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const total = TESTIMONIALS.length
  const go = (d) => setI((p) => (p + d + total) % total)
  const t = TESTIMONIALS[i]

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Community voices" title="Hear from our community" />

        <Reveal className="relative mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-cream p-8 shadow-card md:p-12">
            <FaQuoteRight className="absolute right-8 top-8 text-brand-green/15" size={64} />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex gap-1 text-brand-green">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <FaStar key={s} size={16} />
                  ))}
                </div>
                <p className="relative mt-6 font-display text-xl font-medium leading-relaxed text-ink md:text-2xl">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <p className="font-display font-bold text-ink">{t.name}</p>
                    <p className="text-sm text-brand-green">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 transition hover:bg-brand-green hover:text-white hover:border-brand-green"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={19} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, d) => (
                <button
                  key={d}
                  onClick={() => setI(d)}
                  aria-label={`Testimonial ${d + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    d === i ? 'w-7 bg-brand-green' : 'w-2 bg-ink/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 transition hover:bg-brand-green hover:text-white hover:border-brand-green"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={19} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
