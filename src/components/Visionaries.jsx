import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../lib/motion'
import founder1 from "../assets/homepage/founder1.webp"
import founder2 from "../assets/homepage/founder2.webp"
import founder3 from "../assets/homepage/founder3.webp"


export default function Visionaries() {
  return (
    <section id="leadership" className="bg-white py-20 md:py-28 relative">
      <div className="container-x max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.15)}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-xl md:text-2xl font-bold uppercase tracking-wide text-ink">
            LEADERSHIP GUIDED BY VALUES, PURPOSE AND TRANSFORMATION
          </motion.h2>
        </motion.div>

        {/* Founder */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.15)}
        >
          <motion.div variants={fadeUp} className="bg-brand-leaf/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center border border-brand-leaf/50 shadow-sm">
            <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-2xl overflow-hidden shadow-md">
              <img src={founder1} alt="Tmt. D. Meenakshi Ammal" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-ink mb-1">Tmt. D. Meenakshi Ammal</h3>
              <p className="text-brand-purple font-semibold text-lg mb-4">Founder – Arulmigu Meenakshi Amman College of Education</p>
              <p className="text-ink-muted leading-relaxed text-sm">
                A visionary philanthropist and educationist, Tmt. D. Meenakshi Ammal laid the foundation of our institution with a noble vision to make quality education accessible to all. Her dedication to societal upliftment through education continues to inspire our journey.
              </p>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-8 text-ink-soft leading-relaxed text-center px-4 md:px-0 text-sm">
            Inspired by Swamy Vivekananda's belief that education is the manifestation of the inherent perfection within every individual, our institution is built on the strong foundation of values, discipline, and purpose. This philosophy is reflected in our guiding motto: "Transformation through Education."
          </motion.p>
        </motion.div>

        {/* Co-Founders */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.2)}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeUp} className="bg-brand-purpleLight/40 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center border border-brand-purpleLight/60 shadow-sm">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-md mb-6">
              <img src={founder2} alt="Thiru. A. N. Radhakrishnan" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-ink mb-1">Thiru. A. N. Radhakrishnan, M.A., D.Com.</h3>
            <p className="text-brand-purple font-semibold">Founder</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-brand-purpleLight/40 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center border border-brand-purpleLight/60 shadow-sm">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-md mb-6">
              <img src={founder3} alt="Tmt. Gomathi Radhakrishnan" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-ink mb-1">Tmt. Gomathi Radhakrishnan</h3>
            <p className="text-brand-purple font-semibold">Founder</p>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="mt-12 text-ink-soft leading-relaxed text-center px-4 md:px-0 text-sm space-y-6">
          <p>
            The Meenakshi Ammal Trust stands as one of the pioneering educational organizations originating from Chennai, driven by a deep commitment to social upliftment through education. The Trust was founded by the family of Thiru. A. N. Radhakrishnan, M.A., D.Com. and Tmt. Meenakshi Ammal, the Founder Chairperson, whose vision laid the foundation for an enduring educational movement.
          </p>
          <p>
            Carrying forward this legacy, Tmt. Gomathi Radhakrishnan, along with Thiru. A. N. Radhakrishnan, serves as a co-founder, contributing steadfast leadership and dedication toward expanding access to quality education.
          </p>
          
          <h3 className="text-lg font-bold text-ink mt-8 mb-4">A Mission Rooted in Educational Empowerment</h3>
          
          <p>
            The Meenakshi Ammal Trust has consistently demonstrated a generous and socially conscious approach toward promoting higher education, particularly in rural and underserved regions. With a firm belief that education is the most powerful tool for social transformation, the Trust has focused on creating opportunities for students from weaker sections of society.
          </p>
          <p>
            Through the founders’ earnest efforts, industrious leadership, and munificent vision, the Trust has played a pivotal role in establishing institutions that offer education across diverse disciplines.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
