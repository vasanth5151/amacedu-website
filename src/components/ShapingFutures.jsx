import { motion } from 'framer-motion'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, viewport } from '../lib/motion'
import about1 from "../assets/homepage/about1.webp";

export default function ShapingFutures() {
  return (
    <section id="about" className="py-20 md:py-28 bg-brand-leaf/20 relative overflow-hidden">
      <div className="container-x relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">

          {/* Left Side: Image */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.2)}
            className="relative h-[400px] md:h-[480px] w-full max-w-lg mx-auto lg:mx-0"
          >
            {/* Main Image */}
            <motion.div variants={fadeUp} className="w-full h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img src={about1} alt="AMACEDU Students" className="w-full h-full object-cover" />
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
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-[40px] font-bold text-ink mb-6 leading-tight font-display">
              Shaping Educators. Transforming Futures.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-ink-soft text-[15px] md:text-[16px] mb-4 leading-relaxed">
              Arulmigu Meenakshi Amman College of Education (AMACEDU) is a distinguished College of Education in Tamil Nadu, dedicated to nurturing passionate, skilled, and socially responsible educators. We believe that true education goes beyond classrooms &mdash; it shapes character, inspires creativity, and empowers individuals to make a lasting impact on society.
            </motion.p>

            <motion.p variants={fadeUp} className="text-ink-soft text-[15px] md:text-[16px] mb-4 leading-relaxed">
              At AMACEDU, we provide a transformative learning experience by combining a strong academic foundation with modern infrastructure and a team of dedicated, competent faculty members. Our well-structured teacher education programs are designed to develop critical thinking, innovative teaching practices, and ethical values essential for today’s evolving education system.
            </motion.p>

            <motion.p variants={fadeUp} className="text-ink-soft text-[15px] md:text-[16px] mb-6 leading-relaxed">
              We are committed to creating educators who not only excel academically but also emerge as confident mentors, responsible leaders, and valuable contributors to society. Every student who joins AMACEDU embarks on a journey of growth, exploration, and meaningful transformation, preparing them to shape young minds and build a better future.
            </motion.p>

            <motion.div variants={fadeUp} className="pt-2">
              <Link to="/about-us" className="btn-primary inline-flex items-center gap-2 text-white bg-brand-green hover:bg-brand-greenDark px-8 py-3 rounded-md font-semibold transition-colors shadow-md shadow-brand-green/20">
                Know More <FiChevronRight />
              </Link>
            </motion.div>
          </motion.div>

        </div>



      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  )
}
