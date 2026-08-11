import Reveal from './ui/Reveal'
import Counter from './ui/Counter'
import { motion } from 'framer-motion'
import { STATS } from '../data/content'
import { fadeUp, stagger, viewport } from '../lib/motion'

export default function Stats() {
  return (
    <section id="about" className="relative -mt-2 bg-cream py-16 md:py-20">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why families choose us</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] sm:text-4xl md:text-[2.6rem]">
            Explore skills with <span className="text-brand-green">AMAPS Campus</span>
          </h2>
          <p className="mt-4 text-ink-muted">
            Two and a half decades of nurturing young minds into confident, capable and
            compassionate individuals.
          </p>
        </Reveal>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="group rounded-3xl border border-black/5 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/30"
            >
              <div className="font-display text-4xl font-extrabold text-ink md:text-[2.75rem]">
                <Counter value={s.value} suffix={s.suffix} className="text-brand-green" />
              </div>
              <div className="mx-auto mt-3 h-px w-10 bg-brand-green/40 transition-all duration-300 group-hover:w-16" />
              <p className="mt-3 text-sm font-medium text-ink-muted">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
