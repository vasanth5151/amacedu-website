import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { FAQS } from '../data/content'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Good to know"
            title="Frequently asked questions"
            subtitle="Everything parents ask us most, answered simply. Still curious? Our admissions team is a call away."
          />
          <Reveal className="mt-8">
            <div className="rounded-3xl bg-cream p-6">
              <p className="font-display font-bold text-ink">Still have questions?</p>
              <p className="mt-1 text-sm text-ink-muted">
                Talk to our friendly admissions team any weekday, 9am–5pm.
              </p>
              <a href="#contact" className="btn-primary mt-4">
                Contact admissions
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen ? 'border-brand-green/30 bg-cream' : 'border-black/10 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-bold text-ink">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`grid h-8 w-8 flex-none place-items-center rounded-full ${
                      isOpen ? 'bg-brand-green text-white' : 'bg-cream text-ink'
                    }`}
                  >
                    <FiPlus size={17} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-ink-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
