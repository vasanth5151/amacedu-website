import { motion } from 'framer-motion'
import { FiBook, FiAward, FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import { fadeUp, stagger, viewport } from '../lib/motion'

const COURSES = [
  {
    title: 'Bachelor of Education (B.Ed)',
    desc: 'A comprehensive program designed to equip aspiring teachers with the pedagogical skills and subject knowledge needed to excel in modern classrooms.',
    icon: FiBook,
  },
  {
    title: 'Master of Education (M.Ed)',
    desc: 'An advanced degree focusing on educational leadership, research, and specialized teaching methodologies for experienced educators.',
    icon: FiAward,
  }
]

export default function Ecosystem() {
  return (
    <section id="courses" className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-green/15 blur-3xl" />
      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="Curriculum"
          title={<>Courses Offered</>}
          subtitle="Empowering educators with world-class degree programs tailored for teaching excellence."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto"
        >
          {COURSES.map((f) => {
            return (
              <motion.article
                key={f.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:border-brand-green/40 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-green/15 text-brand-greenLight transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white">
                    <f.icon size={24} />
                  </span>
                  <FiArrowUpRight className="text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-greenLight" size={22} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{f.desc}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
