import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiChevronRight,
  FiCheckCircle,
  FiAward,
} from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../lib/motion'

import heroImg from '../assets/aboutpage/aca7.webp'
import introImg from '../assets/aboutpage/aca1.webp'
import curriculumImg from '../assets/aboutpage/about1.webp'
import bedImg from '../assets/homepage/bed.webp'
import careerImg from '../assets/aboutpage/aca5.webp'
import programview from '../assets/aboutpage/aca6.webp'
import medImg from '../assets/homepage/med.webp'
import highlightsImg from '../assets/aboutpage/aca6.webp'
import eligibilityImg from '../assets/aboutpage/about3.webp'

const CARD_STYLES = [
  'bg-brand-leaf/50 border-brand-green/20',
  'bg-brand-purpleLight border-brand-purple/20',
  'bg-blue-50 border-blue-200',
  'bg-amber-50 border-amber-200',
  'bg-pink-50 border-pink-200',
  'bg-orange-50 border-orange-200',
  'bg-emerald-50 border-emerald-200',
  'bg-violet-50 border-violet-200',
  'bg-cyan-50 border-cyan-200',
]

const BED_SPECIALIZATIONS = [
  { title: 'Tamil', desc: 'Focuses on the teaching of Tamil language and literature, with in-depth knowledge of grammar, prose, poetry, and classical texts, and strategies to make the language accessible and enjoyable for learners.' },
  { title: 'English', desc: 'Develops proficiency in both language and literature — linguistics, literary criticism, and communication skills — alongside methods of teaching English as a primary or secondary language.' },
  { title: 'Mathematics', desc: 'A comprehensive understanding of mathematical concepts, theories, and applications, using innovative teaching techniques, problem-solving approaches, and digital tools.' },
  { title: 'Physical Science (Physics and Chemistry)', desc: 'Combines physics and chemistry with hands-on experiments and demonstrations, emphasizing practical learning and the application of scientific principles to real-world problems.' },
  { title: 'Biological Science (Botany and Zoology)', desc: 'Covers both plant and animal biology, focusing on ecological systems, genetics, and environmental education, with laboratory experiments and lesson planning.' },
  { title: 'History', desc: 'An extensive study of world and Indian history, including cultural, social, and political dimensions, emphasizing critical analysis, storytelling, and visual aids.' },
  { title: 'Commerce', desc: 'Equips students with knowledge of business studies, accounting, marketing, and economics, preparing educators who can teach these subjects effectively in schools and junior colleges.' },
  { title: 'Economics', desc: 'Focuses on micro and macroeconomic principles, development theories, and policy analysis, training educators to make economics relatable and applicable to real life.' },
  { title: 'Computer Science', desc: 'Emphasizes programming, algorithms, and digital education tools, with practical sessions and project-based learning for a tech-driven academic world.' },
]

const MED_SPECIALIZATIONS = [
  { title: 'Tamil', desc: 'Focus on Tamil literature, language pedagogy, and its integration into modern curriculum.' },
  { title: 'English', desc: 'Advanced training in English language teaching, literary analysis, and linguistic studies.' },
  { title: 'Mathematics', desc: 'Exploration of mathematical teaching techniques, problem-solving strategies, and research in math education.' },
  { title: 'Physical Science (Physics and Chemistry)', desc: 'In-depth study of teaching physics and chemistry with hands-on experimental methods.' },
  { title: 'Biological Science (Botany and Zoology)', desc: 'Comprehensive training in teaching biological sciences, including ecology, genetics, and environmental education.' },
  { title: 'History', desc: 'Advanced knowledge of historical research, teaching methodologies, and cultural studies.' },
  { title: 'Commerce', desc: 'Training in business studies, economics, and commerce education tailored to modern academic needs.' },
  { title: 'Economics', desc: 'Advanced focus on teaching economic theories, policies, and their applications.' },
  { title: 'Computer Science', desc: 'Specialization in teaching programming, algorithms, and integrating technology into classrooms.' },
]

const CAREER_OPPORTUNITIES = [
  'Teaching positions in government and private schools.',
  'Higher secondary educator roles for specialized subjects.',
  'Curriculum designer or education technologist roles.',
  'Opportunities in corporate training and e-learning development.',
  'Eligibility for competitive exams like TET, CTET, and other teacher recruitment exams.',
]

const CURRICULUM_HIGHLIGHTS = [
  { title: 'Educational Philosophy and Psychology', desc: 'A deeper understanding of learning theories, human behavior, and developmental psychology.' },
  { title: 'Research Methodology', desc: 'Training in qualitative and quantitative research techniques, enabling students to conduct meaningful educational research.' },
  { title: 'Curriculum Design and Development', desc: 'Insights into creating, evaluating, and improving academic curricula for various educational levels.' },
  { title: 'Advanced Pedagogy', desc: 'Exploration of innovative teaching strategies, including technology-enhanced learning and student-centered approaches.' },
  { title: 'Internship and Fieldwork', desc: 'Real-world experiences in educational settings, helping students bridge theory with practice.' },
  { title: 'Educational Leadership and Management', desc: 'Preparing students for administrative roles by providing training in leadership, policy-making, and organizational management.' },
  { title: 'Inclusive Education', desc: 'Focus on teaching strategies for diverse classrooms, addressing the needs of students with different abilities and backgrounds.' },
]

function SpecializationGrid({ items }) {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.08)}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
    >
      {items.map((item, idx) => (
        <motion.div
          key={item.title}
          variants={fadeUp}
          className={`rounded-2xl p-6 border ${CARD_STYLES[idx % CARD_STYLES.length]} hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
        >
          <h4 className="font-bold text-ink text-base mb-2">{item.title}</h4>
          <p className="text-ink-soft text-xs md:text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function Academic() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Academics at AMACEDU" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-6xl font-display font-bold mb-4 text-white"
          >
            Academic Programs
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold tracking-wider uppercase text-white/80"
          >
            <Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link>
            <FiChevronRight size={14} />
            <span className="text-brand-yellow">Academic</span>
          </motion.div>
        </div>
      </section>

      {/* Courses Offered Intro */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-x">
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
            <motion.div variants={fadeUp} className="h-72 md:h-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img src={introImg} alt="Courses Offered at AMACEDU" className="w-full h-full object-cover" />
            </motion.div>

            <div>
              <motion.span variants={fadeUp} className="text-brand-greenDark font-bold tracking-wider uppercase text-sm mb-3 block">
                Courses Offered — AMACEDU College, Uthiramerur
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
                Courses Offered at AMACEDU
              </motion.h2>
              <motion.p variants={fadeUp} className="text-ink-soft leading-relaxed text-sm md:text-base mb-4">
                Arulmigu Meenakshi Amman College of Education (AMACEDU) offers a structured and comprehensive Bachelor of Education (B.Ed.) program, designed to develop competent, innovative, and socially responsible educators.
              </motion.p>
              <motion.p variants={fadeUp} className="text-ink-soft leading-relaxed text-sm md:text-base">
                This undergraduate program is meticulously aligned with the norms of Tamil Nadu Teachers Education University (TNTEU) and recognized by the National Council for Teacher Education (NCTE), ensuring the highest standards of academic rigor and professional excellence.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

            {/* B.Ed Intro */}
            <section className="py-16 md:py-20 bg-[#FAFAFA]">
              <div className="container-x">
                <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="max-w-3xl mb-16">
                  <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-display font-bold text-ink mb-4">
                    Bachelor of Education (B.Ed.)
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-ink-soft leading-relaxed text-sm md:text-base">
                    The B.Ed. program at AMACEDU is a two-year undergraduate degree that equips students with the theoretical knowledge, practical skills, and ethical grounding necessary for teaching. The program is available in several specializations, catering to diverse interests and career aspirations.
                  </motion.p>
                </motion.div>

                {/* Specializations */}
                <SpecializationGrid items={BED_SPECIALIZATIONS} />
              </div>
            </section>

            {/* Eligibility for Engineering Students */}
            <section className="py-14 bg-brand-purple relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-white/10"></div>
              <div className="absolute -bottom-14 left-1/4 w-40 h-40 rounded-full bg-brand-green/20"></div>
              <div className="container-x relative z-10">
                <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                  <div>
                    <motion.h3 variants={fadeUp} className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                      Eligibility for Engineering Students
                    </motion.h3>
                    <motion.p variants={fadeUp} className="text-white/85 leading-relaxed text-sm md:text-base">
                      AMACEDU welcomes engineering graduates to pursue the B.Ed program. Engineering students can specialize in Mathematics, Physical Science, Biological Science, or Computer Science, utilizing their technical background to excel in the education field.
                    </motion.p>
                  </div>
                  <motion.div variants={fadeUp} className="h-56 md:h-72 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                    <img src={eligibilityImg} alt="Engineering Students at AMACEDU" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Curriculum Structure */}
            <section className="py-20 md:py-24 bg-white">
              <div className="container-x">
                <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
                  <motion.div variants={fadeUp} className="h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white order-2 lg:order-1">
                    <img src={curriculumImg} alt="Curriculum Structure" className="w-full h-full object-cover" />
                  </motion.div>
                  <div className="order-1 lg:order-2">
                    <motion.h3 variants={fadeUp} className="text-2xl md:text-3xl font-display font-bold text-ink mb-4">
                      Curriculum Structure
                    </motion.h3>
                    <motion.p variants={fadeUp} className="text-ink-soft leading-relaxed text-sm md:text-base mb-4">
                      The curriculum of the B.Ed. program is designed to ensure a balance between theoretical understanding and practical application. Students engage in pedagogy, subject-specific methods, internships, and research activities. A significant focus is placed on using modern teaching aids and technology to enhance the learning experience.
                    </motion.p>
                    <motion.p variants={fadeUp} className="text-ink-soft leading-relaxed text-sm md:text-base">
                      The program also includes value-based education, psychological insights into student behavior, and exposure to diverse teaching methodologies. Internship opportunities provide hands-on classroom experience, preparing students for real-world teaching challenges.
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Career Opportunities */}
            <section className="py-20 md:py-24 bg-[#FAFAFA]">
              <div className="container-x">
                <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center mb-14">
                  <div>
                    <motion.h3 variants={fadeUp} className="text-2xl md:text-3xl font-display font-bold text-ink mb-5">
                      Career Opportunities
                    </motion.h3>
                    <motion.p variants={fadeUp} className="text-ink-soft leading-relaxed text-sm md:text-base mb-6">
                      The B.Ed. program at AMACEDU opens up numerous career opportunities, including:
                    </motion.p>
                    <motion.div variants={stagger(0.08)} className="space-y-3">
                      {CAREER_OPPORTUNITIES.map((item, idx) => (
                        <motion.div key={idx} variants={fadeUp} className="flex items-start gap-3">
                          <FiCheckCircle className="text-brand-greenDark shrink-0 mt-0.5" size={18} />
                          <p className="text-ink-soft text-sm leading-relaxed">{item}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                  <motion.div variants={fadeUp} className="h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                    <img src={careerImg} alt="Career Opportunities" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>

                <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp} className="max-w-4xl mx-auto space-y-4 text-center text-ink-soft leading-relaxed text-sm md:text-base">
                  <p>
                    Graduates can also pursue advanced studies, such as a Master of Education (M.Ed.), or specialize in educational research, contributing to innovation in teaching and learning methods.
                  </p>
                  <p>
                    With a strong emphasis on academic excellence, professional training, and ethical values, AMACEDU&rsquo;s B.Ed. program equips future educators to thrive in both traditional and modern educational settings, fostering their ability to make a meaningful impact in the field of education.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* M.Ed Section Divider */}
            <section className="pt-16 pb-2 bg-[#FAFAFA] text-center">
              <motion.span
                initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp}
                className="inline-block bg-brand-purple/10 text-brand-purple font-bold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full"
              >
                M.Ed. Program
              </motion.span>
            </section>

            {/* Program Overview */}
            <section className="py-16 md:py-20 bg-[#FAFAFA]">
              <div className="container-x">
                <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-center mb-16">
                  <div>
                    <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-display font-bold text-ink mb-4">
                      Program Overview
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-ink-soft leading-relaxed text-sm md:text-base">
                      The M.Ed. program is structured to deepen students&rsquo; understanding of educational theories and practices while promoting innovative approaches to teaching, curriculum development, and research. It is an ideal course for those aiming to enhance their teaching expertise, pursue educational research, or take up leadership roles in academic settings.
                    </motion.p>
                  </div>
                  <motion.div variants={fadeUp} className="h-56 md:h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                    <img src={programview} alt="M.Ed. Program at AMACEDU" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>

                {/* Specializations Offered */}
                <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp} className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-ink mb-2">Specializations Offered</h3>
                  <p className="text-ink-soft text-sm md:text-base">Students can select from a wide range of specializations based on their academic background and career goals:</p>
                </motion.div>
                <SpecializationGrid items={MED_SPECIALIZATIONS} />
              </div>
            </section>

            {/* Curriculum Highlights */}
            <section className="py-20 md:py-24 bg-white">
              <div className="container-x">
                <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
                  <motion.div variants={fadeUp} className="h-auto rounded-3xl overflow-hidden shadow-xl border-4 border-white order-2 lg:order-1 self-stretch">
                    <img src={highlightsImg} alt="M.Ed. Curriculum Highlights" className="w-full h-full object-cover" />
                  </motion.div>
                  <div className="order-1 lg:order-2">
                    <motion.h3 variants={fadeUp} className="text-2xl md:text-3xl font-display font-bold text-ink mb-3">
                      Curriculum Highlights
                    </motion.h3>
                    <motion.p variants={fadeUp} className="text-ink-soft leading-relaxed text-sm md:text-base mb-6">
                      The M.Ed. curriculum is thoughtfully designed to balance academic rigor with practical applications, ensuring a well-rounded education for students:
                    </motion.p>
                    <motion.div variants={stagger(0.08)} className="space-y-4">
                      {CURRICULUM_HIGHLIGHTS.map((item, idx) => (
                        <motion.div key={idx} variants={fadeUp} className="flex items-start gap-3">
                          <FiAward className="text-brand-purple shrink-0 mt-0.5" size={18} />
                          <p className="text-sm leading-relaxed">
                            <span className="font-bold text-ink">{item.title}</span>
                            <span className="text-ink-soft"> — {item.desc}</span>
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>

    </div>
  )
}
