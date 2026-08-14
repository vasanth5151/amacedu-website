import { motion } from 'framer-motion'
import { FiUsers, FiAward, FiBook, FiTrendingUp } from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../lib/motion'

const STATS = [
  { label: 'Qualified Staffs', value: '50+', icon: <FiUsers size={32} /> },
  { label: 'Students', value: '2000+', icon: <FiBook size={32} /> },
  { label: 'Years of Excellence', value: '15+', icon: <FiAward size={32} /> },
  { label: 'Placement', value: '100%', icon: <FiTrendingUp size={32} /> },
]

export default function Stats() {
  return (
    <section className="bg-brand-purple py-16 text-white overflow-hidden relative">
      <div className="container-x relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={viewport} 
          variants={stagger(0.1)}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x divide-white/20"
        >
          {STATS.map((stat, idx) => (
            <motion.div key={idx} variants={fadeUp} className="flex flex-col items-center justify-center px-4">
              <div className="mb-4 text-brand-leaf opacity-90">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2 font-display">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-wider font-semibold opacity-80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Abstract Waves Decoration */}
      <div className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  )
}
