import { motion } from 'framer-motion'
import { FiCheckCircle, FiChevronRight } from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../lib/motion'
import about1 from "../assets/homepage/about1.webp";
import about2 from "../assets/homepage/about2.webp";

export default function ShapingFutures() {
  return (
    <section id="about" className="py-20 md:py-28 bg-brand-leaf/20 relative overflow-hidden">
      <div className="container-x grid gap-12 lg:grid-cols-2 items-center relative z-10">

        {/* Left Side: Images */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.2)}
          className="relative h-[450px] md:h-[550px] w-full max-w-lg mx-auto lg:mx-0"
        >
          {/* Main Back Image */}
          <motion.div variants={fadeUp} className="absolute right-0 top-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <img src={about1} alt="Students" className="w-full h-full object-cover" />
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            variants={fadeUp}
            className="absolute -bottom-6 right-10 bg-white py-4 px-6 rounded-xl shadow-lg border border-gray-100 z-20 flex items-center gap-4"
          >
            <div className="text-brand-purple">
              <span className="text-4xl font-extrabold block leading-none">15+</span>
            </div>
            <div className="text-sm font-semibold text-ink leading-tight">
              Years of<br />Excellence
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.15)}
        >
          <motion.span variants={fadeUp} className="text-brand-purple font-semibold tracking-wider uppercase text-sm mb-2 block">
            About Us
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[40px] font-bold text-ink mb-6 leading-tight">
            Shaping Educators, Transforming Society
          </motion.h2>

          <motion.p variants={fadeUp} className="text-ink-muted text-[16px] mb-8 leading-relaxed">
            Arulmigu Meenakshi Amman College of Education (AMACEDU) is dedicated to fostering excellence in teacher education. We believe in providing holistic development, blending traditional values with modern educational practices to shape the leaders of tomorrow.
          </motion.p>

          <motion.ul variants={stagger(0.1)} className="space-y-4 mb-10">
            {[
              "State-of-the-art infrastructure & modern labs",
              "Experienced and dedicated faculty members",
              "100% placement assistance",
              "Focus on holistic and moral development"
            ].map((item, idx) => (
              <motion.li key={idx} variants={fadeUp} className="flex items-start gap-3 text-ink-soft">
                <FiCheckCircle className="text-brand-green mt-1 shrink-0" size={20} />
                <span className="font-medium">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp}>
            <a href="#about" className="btn-primary inline-flex items-center gap-2 text-white bg-brand-green hover:bg-brand-greenDark px-8 py-3 rounded-md font-semibold transition-colors shadow-md shadow-brand-green/20">
              Know More <FiChevronRight />
            </a>
          </motion.div>
        </motion.div>

      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  )
}
