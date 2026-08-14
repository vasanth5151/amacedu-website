import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiChevronRight,
  FiPlus,
  FiMinus,
  FiCheckCircle,
  FiAward,
  FiCompass,
  FiTarget,
} from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../lib/motion'

import aboutBg from '../assets/homepage/about2.webp'
import about1 from '../assets/aboutpage/about1.webp'
import about2 from '../assets/aboutpage/about2.webp'
import about3 from '../assets/aboutpage/about3.webp'
import about4 from '../assets/aboutpage/about4.webp'


const ACCREDITATIONS = [
  { short: 'NCTE', label: 'Recognized by the National Council for Teacher Education' },
  { short: 'TNTEU', label: 'Affiliated with Tamil Nadu Teachers Education University' },
  { short: 'NAAC ‘B’', label: 'Accredited for quality teaching, learning & infrastructure' },
]

const GOALS = [
  {
    title: 'To Bring About a Total Reformation in Teacher Education',
    desc: 'Rethinking how educators are trained, so pedagogy keeps pace with a changing classroom.',
  },
  {
    title: 'To Produce Good, Efficient, and Committed Teachers with a Patriotic Favor',
    desc: 'Preparing educators who are not only skilled and dedicated but also inspired by a deep sense of patriotism to lead societal transformation toward an ideal community.',
  },
  {
    title: 'To Lead Our Country to the Top of the World',
    desc: 'Building a generation of teachers whose classrooms carry the nation forward.',
  },
  {
    title: 'To Provide Young Researchers',
    desc: 'Nurturing curiosity and inquiry so graduates go on to contribute to education research.',
  },
]

const OBJECTIVES = [
  {
    title: 'To Educate and Guide Students to Pursue Higher Studies',
    desc: 'Encouraging and mentoring students to continue their academic journey and achieve advanced qualifications.',
  },
  {
    title: 'To Conduct Personality Development Programmes',
    desc: 'Organizing sessions with professionals and faculty to develop confidence, leadership, and interpersonal skills.',
  },
  {
    title: 'To Conduct Special Programmes to Develop Communication Skills',
    desc: 'Enhancing language proficiency and communication abilities through targeted programs.',
  },
  {
    title: 'To Arrange Meetings with Various Education Consultants',
    desc: 'Facilitating interactions with education experts to provide insights into career opportunities and educational advancements.',
  },
  {
    title: 'To Create Awareness on Education Among Students',
    desc: 'Promoting the importance of education and its transformative power for individuals and society.',
  },
  {
    title: 'To Inculcate Dedicated Teaching and Culture Among Graduates and Postgraduates',
    desc: 'Instilling a passion for teaching and a commitment to ethical practices among Science, Arts, and Language graduates and postgraduates.',
  },
  {
    title: 'To Conduct Programmes in Internship and Enabling Teaching Skills',
    desc: 'Organizing practical teaching internships and workshops to enhance teaching proficiency.',
  },
  {
    title: 'To Identify and Motivate Budding Teachers',
    desc: 'Recognizing and nurturing the potential of aspiring educators to help them excel in their careers.',
  },
  {
    title: 'To Facilitate Teacher Trainees in Providing Information and Guidance for Placement',
    desc: 'Offering resources and support to help teacher trainees secure positions in reputed educational institutions.',
  },
  {
    title: 'To Conduct Upgraded Technology-Based Training Programmes',
    desc: 'Equipping teacher trainees with the latest technological tools and methodologies for modern teaching practices.',
  },
]

const MOTTO_POINTS = [
  {
    title: 'Commitment to Quality Teacher Education',
    desc: 'We are steadfast in our mission to provide high-quality teacher education, mobilizing all resources to equip our students with the competence and confidence to excel in a dynamic and competitive world.',
  },
  {
    title: 'Advancing Technological Progress',
    desc: 'We relentlessly strive to deliver qualitative education that empowers students to contribute to the nation’s technological and educational advancements.',
  },
  {
    title: 'Holistic Personal Transformation',
    desc: 'Our goal is to bring meaningful changes to the physical, mental, intellectual, emotional, and spiritual dimensions of every individual, nurturing them to achieve a higher level of life and consciousness.',
  },
]

export default function AboutCollege() {
  const [openGoal, setOpenGoal] = useState(1)

  const scrollRef = useRef(null)
  const dragState = useRef({ isDown: false, startX: 0, startScroll: 0, moved: false })

  const onDragStart = (clientX) => {
    const el = scrollRef.current
    if (!el) return
    dragState.current.isDown = true
    dragState.current.moved = false
    dragState.current.startX = clientX
    dragState.current.startScroll = el.scrollLeft
  }

  const onDragMove = (clientX) => {
    const el = scrollRef.current
    if (!el || !dragState.current.isDown) return
    const delta = clientX - dragState.current.startX
    if (Math.abs(delta) > 3) dragState.current.moved = true
    el.scrollLeft = dragState.current.startScroll - delta
  }

  const onDragEnd = () => {
    dragState.current.isDown = false
  }

  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. Hero */}
      <section className="relative h-[380px] md:h-[460px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={aboutBg} alt="About AMACEDU College" className="w-full h-full object-cover text-white" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-brand-green/90 text-white text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
          >
            Teacher Education College &middot; Kancheepuram
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-6xl font-display font-bold mb-4 text-white"
          >
            About AMACEDU
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold tracking-wider uppercase text-white/80"
          >
            <Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link>
            <FiChevronRight size={14} />
            <span className="text-brand-yellow">About College</span>
          </motion.div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="container-x">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">

            {/* Image collage */}
            <motion.div
              initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)}
              className="relative max-w-md mx-auto lg:mx-0"
            >
              <motion.div variants={fadeUp} className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white h-[340px] md:h-[420px]">
                <img src={about1} alt="AMACEDU Campus" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="absolute -bottom-8 -right-6 md:-right-10 w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <img src={about2} alt="AMACEDU Students" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="absolute -top-6 -left-6 bg-brand-purple text-white rounded-2xl px-6 py-4 shadow-xl"
              >
                <div className="text-3xl font-display font-extrabold leading-none">18+</div>
                <div className="text-xs uppercase tracking-wider font-semibold opacity-90 mt-1">Years of Legacy</div>
              </motion.div>
            </motion.div>

            {/* Text content */}
            <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)}>
              <motion.span variants={fadeUp} className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">
                About AMACEDU: Teacher Education College in Kancheepuram
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-ink mb-6 leading-tight">
                Arulmigu Meenakshi Amman<br className="hidden md:block" /> College Of Education
              </motion.h2>

              <motion.p variants={fadeUp} className="text-ink-soft leading-relaxed mb-4 text-sm md:text-base">
                Arulmigu Meenakshi Amman College of Education (AMACEDU), established in December 2006, is a premier teacher education institution in Tamil Nadu, committed to developing competent, ethical, and socially responsible educators. Located in the serene surroundings of Perunkozhi Village, Uthiramerur, Kancheepuram District, the college operates under the prestigious Meenakshi Ammal Trust, a name synonymous with educational excellence and community service.
              </motion.p>

              <motion.p variants={fadeUp} className="text-ink-soft leading-relaxed mb-4 text-sm md:text-base">
                We offer B.Ed. and M.Ed. programs designed to provide aspiring educators with a balanced blend of theoretical knowledge, practical classroom exposure, and professional ethics, ensuring they graduate as confident, skilled, and socially aware teachers ready to make a difference.
              </motion.p>

              {/* Accreditation badges */}
              <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-4 mt-8">
                {ACCREDITATIONS.map((a, idx) => (
                  <div key={idx} className="bg-brand-leaf/40 border border-brand-green/20 rounded-xl p-4 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-center gap-1.5 text-brand-greenDark font-extrabold text-base mb-1">
                      <FiAward size={16} />
                      {a.short}
                    </div>
                    <p className="text-[11px] text-ink-soft leading-snug">{a.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Goals of AMACEDU */}
      <section className="py-20 md:py-24 bg-[#FAFAFA] relative border-y border-gray-100">
        <div className="container-x">
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="grid lg:grid-cols-[1fr_1fr] gap-14 items-start">

            {/* Left: Accordion */}
            <div>
              <motion.span variants={fadeUp} className="text-brand-purple font-bold tracking-wider uppercase text-sm mb-2 block">
                What Drives Us
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-ink mb-10">
                Goals of AMACEDU
              </motion.h2>

              <motion.div variants={stagger(0.1)} className="space-y-4">
                {GOALS.map((goal, idx) => {
                  const isOpen = openGoal === idx
                  return (
                    <motion.div
                      key={idx}
                      variants={fadeUp}
                      className={`rounded-2xl overflow-hidden border transition-colors duration-300 ${isOpen ? 'bg-brand-purple border-brand-purple text-white shadow-lg' : 'bg-white border-gray-200'}`}
                    >
                      <button
                        onClick={() => setOpenGoal(isOpen ? -1 : idx)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold"
                      >
                        <span className={isOpen ? 'text-white' : 'text-ink'}>{goal.title}</span>
                        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-white text-brand-purple' : 'bg-brand-purple/10 text-brand-purple'}`}>
                          {isOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
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
                            <p className="px-6 pb-5 text-sm leading-relaxed text-white/90">{goal.desc}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>

            {/* Right: Image */}
            <motion.div variants={fadeUp} className="sticky top-24 h-[380px] md:h-[520px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
              <img src={about3} alt="AMACEDU Goals" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 4. Objectives of AMACEDU */}
      <section className="py-20 md:py-24 bg-[#FAFAFA] overflow-hidden">
        <div className="container-x">
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="text-center max-w-2xl mx-auto mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-ink">
              Objectives of AMACEDU
            </motion.h2>
          </motion.div>
        </div>

        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-6 md:gap-8 overflow-x-auto px-6 sm:px-8 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={(e) => onDragStart(e.pageX)}
          onMouseMove={(e) => onDragMove(e.pageX)}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
        >
          {OBJECTIVES.map((obj, idx) => (
            <div
              key={idx}
              onClickCapture={(e) => { if (dragState.current.moved) e.preventDefault() }}
              className="w-[280px] md:w-[320px] shrink-0 bg-[#FBFBBE] rounded-2xl p-8"
            >
              <h4 className="font-bold text-ink text-lg mb-4 leading-snug">{obj.title}</h4>
              <p className="text-ink-soft text-sm leading-relaxed">&ldquo; {obj.desc} &rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Motto */}
      <section className="py-20 md:py-24 bg-[#FDF2F8] relative overflow-hidden">
        <div className="container-x">
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">

            <motion.div variants={fadeUp} className="h-64 lg:h-full min-h-[320px]">
              <img src={about4} alt="Motto of AMACEDU" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div variants={stagger(0.12)} className="p-8 md:p-12">
              <motion.span variants={fadeUp} className="text-brand-purple font-bold tracking-wider uppercase text-sm mb-2 block">
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-ink mb-3">
                Motto of AMACEDU
              </motion.h2>
              <motion.p variants={fadeUp} className="text-ink-soft text-sm leading-relaxed mb-8">
                The motto of Arulmigu Meenakshi Amman College of Education (AMACEDU) reflects our unwavering dedication to excellence in teacher education and holistic development.
              </motion.p>

              <div className="space-y-5">
                {MOTTO_POINTS.map((pt, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="flex gap-4">
                    <FiCheckCircle className="text-brand-purple shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-ink mb-1 text-sm md:text-base">{pt.title}</h4>
                      <p className="text-ink-soft text-xs md:text-sm leading-relaxed">{pt.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p variants={fadeUp} className="text-ink-soft text-sm leading-relaxed mt-8 pt-6 border-t border-gray-100">
                We aim to transform students into world-class educators, capable of transcending their current abilities to meet global standards.
              </motion.p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 6. Vision & Mission */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-x">
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="grid md:grid-cols-2 gap-6 md:gap-8">

            <motion.div variants={fadeUp} className="bg-brand-purple rounded-3xl p-10 md:p-12 text-white shadow-lg relative overflow-hidden">
              <FiCompass className="absolute -bottom-6 -right-6 opacity-10" size={140} />
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                <FiCompass size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">Vision</h3>
              <p className="text-white/85 leading-relaxed text-sm md:text-base">
                Our vision is to bring about a total reformation in teacher education, striving to produce skilled, efficient, and committed teachers imbued with a sense of patriotism and dedication to societal betterment.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-ink rounded-3xl p-10 md:p-12 text-white shadow-lg relative overflow-hidden">
              <FiTarget className="absolute -bottom-6 -right-6 opacity-10" size={140} />
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                <FiTarget size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">Mission</h3>
              <p className="text-white/85 leading-relaxed text-sm md:text-base">
                Our mission is to facilitate holistic development by fostering meaningful changes in the physical, mental, intellectual, emotional, and spiritual dimensions of every individual, empowering them to become transformative educators and responsible citizens.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  )
}
