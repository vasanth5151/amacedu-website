import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../lib/motion'
import bed from "../assets/homepage/bed.webp"
import med from "../assets/homepage/med.webp"


const COURSES = [
  {
    title: 'Bachelor of Education (B.Ed)',
    duration: '2 Years',
    desc: 'Our B.Ed program is designed to prepare competent, compassionate, and inspiring teachers. The curriculum focuses on modern pedagogical skills, child psychology, and hands-on teaching experience.',
    img: bed,
    tag: 'B.Ed Course',
    tagColor: 'bg-brand-yellow text-ink',
    details: [
      'Eligibility: Any UG Degree',
    ]
  },
  {
    title: 'Master of Education (M.Ed)',
    duration: '2 Years',
    desc: 'The M.Ed program focuses on educational research, administration, and advanced pedagogy. It prepares students for leadership roles in educational institutions and research bodies.',
    img: med,
    tag: 'M.Ed Course',
    tagColor: 'bg-brand-purple text-white',
    details: [
      'Eligibility: B.Ed Degree',

    ]
  },
]

export default function Ecosystem() {
  return (
    <section id="courses" className="bg-brand-leaf/10 py-20 md:py-28 relative">
      <div className="container-x relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.15)}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-brand-purple font-semibold tracking-wider uppercase text-sm mb-2 block">
            Curriculum
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-[40px] font-bold text-ink">
            Courses Offered
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.2)}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          {COURSES.map((course, idx) => (
            <motion.div key={course.title} variants={fadeUp} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col relative group transition-transform hover:-translate-y-2">
              <div className="h-64 relative overflow-hidden">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className={`absolute top-4 right-4 ${course.tagColor} px-4 py-1.5 rounded-full font-bold text-sm shadow-md`}>
                  {course.tag}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col relative">
                <h3 className="text-2xl font-bold text-ink mb-4">{course.title}</h3>

                <ul className="space-y-2 mb-6 text-sm text-brand-purple font-medium">
                  {course.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>

                <p className="text-ink-muted leading-relaxed mb-12">
                  {course.desc}
                </p>

                {/* Floating Bottom Right Button */}
                <a href="#apply" className="absolute bottom-6 right-6 w-12 h-12 bg-brand-purple hover:bg-brand-purple/90 text-white rounded-xl flex items-center justify-center shadow-md transition-colors">
                  <FiArrowRight size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  )
}
