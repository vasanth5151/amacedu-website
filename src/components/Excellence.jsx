import { motion } from 'framer-motion'
import { FiBookOpen, FiStar, FiMonitor, FiAward } from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../lib/motion'
import gall from "../assets/homepage/gall-4.webp"

const FEATURES = [
  {
    title: 'High-Quality Education',
    icon: <FiStar size={24} />,
    color: 'bg-brand-yellow/20 text-yellow-600',
  },
  {
    title: 'Comprehensive Curriculum',
    icon: <FiBookOpen size={24} />,
    color: 'bg-brand-blue/20 text-blue-600',
  },
  {
    title: 'State-of-the-Art Facilities',
    icon: <FiMonitor size={24} />,
    color: 'bg-brand-purple/20 text-brand-purple',
  },
  {
    title: 'Affordable Fee Structure',
    icon: <FiAward size={24} />,
    color: 'bg-brand-green/20 text-brand-greenDark',
  }
]

export default function Excellence() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Image */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.2)}
            className="h-[500px] w-full max-w-md mx-auto lg:mx-0 rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 relative"
          >
            <img src={gall} alt="Why Choose Us" className="w-full h-full object-cover" />
          </motion.div>

          {/* Right: Content Box */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.15)}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 relative z-10"
          >
            <motion.span variants={fadeUp} className="text-brand-purple font-semibold tracking-wider uppercase text-sm mb-2 block">
              Why Choose Us
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-ink mb-10">
              Why Choose Our Education
            </motion.h2>

            <motion.div variants={stagger(0.1)} className="grid sm:grid-cols-2 gap-6 mb-10">
              {FEATURES.map((feat, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex flex-col gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${feat.color}`}>
                    {feat.icon}
                  </div>
                  <h4 className="font-bold text-ink text-lg">{feat.title}</h4>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a href="#about" className="btn-primary inline-flex items-center justify-center px-8 py-3 text-white bg-brand-green hover:bg-brand-greenDark rounded-md font-semibold transition-colors">
                Know More
              </a>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDIwaDIwdjIwSDIwek0wIDBoMjB2MjBIMHoiIGZpbGw9IiNlNWU3ZWIiIGZpbGwtb3BhY2l0eT0iMC4yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-50 -z-10 rounded-l-[4rem]"></div>
    </section>
  )
}
