import { motion } from 'framer-motion'
import { FiArrowUpRight, FiClock } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import { BLOG } from '../data/content'
import { fadeUp, stagger, viewport } from '../lib/motion'

export default function Blog() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="From our desk"
          title="Latest from our blog"
          subtitle="Ideas, research and gentle wisdom on raising curious, confident and happy children."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-7 md:grid-cols-3"
        >
          {BLOG.map((b) => (
            <motion.article
              key={b.title}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={b.img}
                  alt={b.title}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-greenDark backdrop-blur">
                  {b.cat}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex items-center gap-2 text-xs text-ink-muted">
                  <FiClock size={13} /> {b.read}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink transition group-hover:text-brand-green">
                  {b.title}
                </h3>
                <a
                  href="#news"
                  className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green"
                >
                  Read article <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
