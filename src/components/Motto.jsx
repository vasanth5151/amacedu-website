import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../lib/motion'
import motto from "../assets/homepage/wdw.webp"


export default function Motto() {
  return (
    <section className="bg-white py-12">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid md:grid-cols-[1fr_1.5fr] rounded-3xl overflow-hidden shadow-lg border border-gray-100"
        >
          {/* Left: Pink Text Block */}
          <div className="bg-brand-green/20 p-8 md:p-12 flex flex-col justify-center">
            <motion.span variants={fadeUp} className="text-brand-greenDark font-bold tracking-wider uppercase mb-2">Our Motto</motion.span>
            <motion.h3 variants={fadeUp} className="text-2xl md:text-3xl font-display font-bold text-ink">
              Transformation through Education
            </motion.h3>
          </div>

          {/* Right: Image */}
          <div className="relative h-48 md:h-auto border-l-4 border-white">
            <img src={motto} alt="Motto Graphic" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-purple/10 mix-blend-multiply"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
