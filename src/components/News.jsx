import { motion } from 'framer-motion'
import { FiArrowUpRight, FiCalendar } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { NEWS } from '../data/content'
import { fadeUp, stagger, viewport } from '../lib/motion'

export default function News() {
  return (
    <section id="news" className="bg-cream py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Happening now"
            title="Latest news & events"
            subtitle="Keep up with the milestones, celebrations and achievements shaping life on campus."
          />
          <Reveal>
            <a href="#news" className="btn-ghost">
              View all news <FiArrowUpRight />
            </a>
          </Reveal>
        </div>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-7 md:grid-cols-3"
        >
          {NEWS.map((n) => (
            <motion.article
              key={n.title}
              variants={fadeUp}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={n.img}
                  alt={n.title}
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-white">
                  {n.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                  <FiCalendar size={13} /> {n.date}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink transition group-hover:text-brand-green">
                  {n.title}
                </h3>
                <a
                  href="#news"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green"
                >
                  Read more <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
