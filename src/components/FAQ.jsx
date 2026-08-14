import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../lib/motion'
import faqimage from "../assets/homepage/faq.webp"

const FAQS = [
  {
    question: 'What course is offered at Arulmigu Meenakshi Amman College of Education?',
    answer: 'The college offers the Bachelor of Education (B.Ed) program.',
  },
  {
    question: 'Is the B.Ed program approved?',
    answer: 'Yes, the program is approved by NCTE and affiliated with a recognized university.',
  },
  {
    question: 'Who can apply for B.Ed admission?',
    answer: 'Graduates from eligible disciplines can apply as per university and government norms.',
  },
  {
    question: 'Does the college provide teaching practice training?',
    answer: 'Yes, the college offers practical teaching exposure, internships, and school-based training.',
  },
  {
    question: 'Why choose this B.Ed college in Tamil Nadu?',
    answer: 'It offers structured pedagogy, experienced educators, and strong academic mentoring.',
  }
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">

          {/* Left: Pink FAQ Box */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.15)}
            className="bg-brand-greenDark rounded-3xl p-8 md:p-12 shadow-lg text-white"
          >
            <motion.span variants={fadeUp} className="bg-white text-brand-greenDark font-bold px-3 py-1 rounded text-sm mb-4 inline-block shadow-sm">
              FAQ
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-8">
              Frequently Asked Questions
            </motion.h2>

            <motion.div variants={stagger(0.1)} className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openIdx === idx
                return (
                  <motion.div key={idx} variants={fadeUp} className="bg-white text-ink rounded-xl overflow-hidden shadow-sm transition-all duration-300">
                    <button
                      onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between font-bold"
                    >
                      <span>{faq.question}</span>
                      <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-purple text-white' : 'bg-brand-green/20 text-brand-greenDark'}`}>
                        {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-5 pt-0 text-ink-muted text-sm leading-relaxed border-t border-gray-100 mt-2">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right: Images Collage */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.2)}
            className="relative h-[500px] w-full hidden lg:block"
          >
            {/* Background Graphic */}
            <div className="absolute top-0 right-10 text-9xl font-display font-extrabold text-brand-leaf/40 -z-10 rotate-12">
              ?
            </div>

            <motion.div variants={fadeUp} className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white z-10">
              <img src={faqimage} alt="FAQ Image" className="w-full h-full object-cover" />
            </motion.div>


            {/* Decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-yellow/30 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
