import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import Reveal from './ui/Reveal'
import { IMG } from '../data/content'

const TABS = [
  {
    key: 'academics',
    label: 'Academics',
    points: [
      'CBSE curriculum enriched with in-house STEAM modules',
      'Concept-first teaching over rote memorisation',
      'Continuous, stress-free assessment framework',
    ],
    img: IMG.classroom,
  },
  {
    key: 'sports',
    label: 'Sports',
    points: [
      'Professional coaching across 12+ disciplines',
      'Olympic-size courts, fields and an athletics track',
      'Inter-school tournaments every term',
    ],
    img: IMG.sports,
  },
  {
    key: 'arts',
    label: 'Arts & Culture',
    points: [
      'Dedicated studios for music, dance and visual art',
      'Annual cultural fest and open-mic showcases',
      'Every child performs, no one sits on the sidelines',
    ],
    img: IMG.paint,
  },
  {
    key: 'transport',
    label: 'Transport',
    points: [
      'GPS-tracked fleet with live parent notifications',
      'Trained attendants on every route',
      'Door-to-campus coverage across the city',
    ],
    img: IMG.campus,
  },
]

export default function ShapingFutures() {
  const [active, setActive] = useState(TABS[0].key)
  const tab = TABS.find((t) => t.key === active)

  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* left image collage (2 images) */}
        <Reveal className="relative flex gap-4 h-full">
          <div className="w-1/2 flex flex-col gap-4 mt-8">
            <img
              src={IMG.classroom}
              alt="Classroom"
              className="w-full h-[220px] rounded-[2rem] object-cover shadow-soft"
            />
            <div className="rounded-[2rem] bg-sand px-6 py-8 shadow-card flex flex-col justify-center items-center text-center">
              <p className="font-display text-4xl font-extrabold text-ink">25+</p>
              <p className="text-sm font-semibold text-ink-muted">Years of Legacy</p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-4 mb-8">
            <img
              src={IMG.reading}
              alt="Reading"
              className="w-full h-[320px] rounded-[2.5rem] object-cover shadow-soft"
            />
          </div>
        </Reveal>

        {/* right copy + tabs */}
        <div>
          <Reveal>
            <span className="eyebrow">About Us</span>
          </Reveal>
          <Reveal>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] sm:text-4xl md:text-[2.7rem]">
              Shaping futures,{' '}
              <span className="text-brand-green">nurturing excellence</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-5 max-w-lg text-ink-muted">
              We design each day so children grow across every dimension — mind, body and
              character. Explore the pillars that make an AMAPS education whole.
            </p>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-2.5">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  active === t.key
                    ? 'bg-brand-green text-white shadow-card'
                    : 'bg-cream text-ink/70 hover:bg-cream-deep'
                }`}
              >
                {t.label}
              </button>
            ))}
          </Reveal>

          <div className="mt-7 min-h-[150px]">
            <AnimatePresence mode="wait">
              <motion.ul
                key={tab.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="space-y-3.5"
              >
                {tab.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-brand-leaf text-brand-greenDark">
                      <FiCheck size={13} strokeWidth={3} />
                    </span>
                    <span className="text-ink/80">{p}</span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          <Reveal>
            <a href="#academics" className="btn-primary mt-8">
              Discover our approach <FiArrowRight />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
