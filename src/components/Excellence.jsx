import { motion } from 'framer-motion'
import { FiBookOpen, FiLayout, FiHome, FiDollarSign } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import { fadeUp, stagger, viewport } from '../lib/motion'

const REASONS = [
  {
    title: 'High-Quality Education',
    icon: FiBookOpen,
    color: 'bg-[#ffeaeb]',
    iconColor: 'text-brand-green',
  },
  {
    title: 'Comprehensive Curriculum',
    icon: FiLayout,
    color: 'bg-white shadow-card',
    iconColor: 'text-brand-green',
  },
  {
    title: 'State-of-the-Art Facilities',
    icon: FiHome,
    color: 'bg-[#ffeaeb]',
    iconColor: 'text-brand-green',
  },
  {
    title: 'Affordable Fee Structure',
    icon: FiDollarSign,
    color: 'bg-white shadow-card',
    iconColor: 'text-brand-green',
  },
]

export default function Excellence() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Edge"
          title="Why Choose Our Education"
          subtitle="Discover what makes AMACEDU the right choice for shaping future educators."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {REASONS.map((reason, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className={`rounded-[2rem] p-8 text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 ${reason.color}`}
            >
              <div className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-sm mb-6">
                <reason.icon size={28} className={reason.iconColor} />
              </div>
              <h3 className="font-display text-lg font-bold text-ink">{reason.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
