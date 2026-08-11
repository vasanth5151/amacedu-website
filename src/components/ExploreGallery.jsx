import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { GALLERY } from '../data/content'

export default function ExploreGallery() {
  const [index, setIndex] = useState(0)
  const total = GALLERY.length
  const go = (dir) => setIndex((i) => (i + dir + total) % total)

  // build a 3-up window
  const visible = [0, 1, 2].map((o) => GALLERY[(index + o) % total])

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Infrastructure"
          title="State-of-the-Art Facilities"
          subtitle="Step inside our classrooms, studios, and labs designed to provide a comprehensive learning experience."
        />

        <Reveal className="relative mt-14">
          <div className="grid gap-5 md:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((item, i) => (
                <motion.figure
                  key={item.img}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45 }}
                  className={`group relative overflow-hidden rounded-[2rem] shadow-card ${
                    i === 1 ? 'md:-translate-y-4' : ''
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <figcaption className="absolute bottom-5 left-5 right-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-greenLight">
                      Campus
                    </span>
                    <p className="font-display text-xl font-bold text-white">{item.label}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-9 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 text-ink transition hover:bg-brand-green hover:text-white hover:border-brand-green"
              aria-label="Previous"
            >
              <FiChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {GALLERY.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-7 bg-brand-green' : 'w-2 bg-ink/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 text-ink transition hover:bg-brand-green hover:text-white hover:border-brand-green"
              aria-label="Next"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
