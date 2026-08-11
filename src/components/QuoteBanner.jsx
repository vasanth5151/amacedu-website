import { motion } from 'framer-motion'
import Counter from './ui/Counter'
import Reveal from './ui/Reveal'
import { IMG } from '../data/content'
import { fadeUp, stagger, viewport } from '../lib/motion'

const BANNER_STATS = [
  { value: 120, suffix: '+', label: 'Co-curricular clubs' },
  { value: 0, suffix: '%', label: 'Compromise on safety' },
  { value: 100, suffix: '%', label: 'Board pass rate' },
  { value: 12, suffix: '', label: 'Sports disciplines' },
]

export default function QuoteBanner() {
  return (
    <section
      className="relative overflow-hidden bg-ink py-24 text-white md:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(24,22,19,0.82), rgba(24,22,19,0.92)), url(${IMG.quoteBg})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-x relative text-center">
        <Reveal>
          <p className="mx-auto max-w-4xl font-display text-2xl font-bold leading-snug sm:text-3xl md:text-[2.4rem] md:leading-[1.25]">
            &ldquo;We have been given the grace to create a school rooted in{' '}
            <span className="text-brand-greenLight">curiosity, kindness and discovery</span> —
            we simply keep that promise, every single day.&rdquo;
          </p>
        </Reveal>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4"
        >
          {BANNER_STATS.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-center">
              <div className="font-display text-4xl font-extrabold text-white md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} className="text-brand-greenLight" />
              </div>
              <p className="mt-2 text-sm text-white/60">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
