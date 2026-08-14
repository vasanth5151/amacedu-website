import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiChevronRight,
  FiBookOpen,
  FiHome,
  FiCoffee,
  FiTruck,
  FiLayers,
  FiCpu,
  FiDroplet,
  FiStar,
  FiHeart,
  FiMonitor,
  FiUsers,
  FiAward,
  FiShield,
} from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../lib/motion'

import faci1 from '../assets/facilities/faci1.jpg'
import faci2 from '../assets/facilities/faci2.jpg'
import faci3 from '../assets/facilities/faci3.jpg'
import faci4 from '../assets/facilities/faci4.jpg'
import faci5 from '../assets/facilities/faci5.jpg'
import faci6 from '../assets/facilities/faci6.jpg'
import faci7 from '../assets/facilities/faci7.jpg'
import faci8 from '../assets/facilities/faci8.jpg'
import faci9 from '../assets/facilities/faci9.jpg'
import faci10 from '../assets/facilities/faci10.jpg'
import faci11 from '../assets/facilities/faci11.jpg'
import faci12 from '../assets/facilities/faci12.jpg'
import faci13 from '../assets/facilities/faci13.jpg'
import faci14 from '../assets/facilities/faci14.jpg'

const heroImg = faci1
const FACILITIES = [
  {
    tag: 'Library',
    icon: <FiBookOpen size={16} />,
    color: 'bg-amber-500',
    img: faci1,
    points: [
      'The college boasts one of the largest and most well-equipped libraries, catering to the academic and research needs of students and faculty.',
      'It provides access to a vast collection of books, journals, magazines, and digital resources, including CDs, for in-depth subject analysis and enhanced understanding.',
      'The library is digitally enabled for efficient cataloging and easy accessibility of resources.',
    ],
  },
  {
    tag: 'Hostel',
    icon: <FiHome size={16} />,
    color: 'bg-brand-purple',
    img: faci2,
    points: [
      'Separate hostel facilities for male and female teacher students are available within the campus.',
      'The hostels are newly constructed and equipped with modern amenities to provide a safe and comfortable stay.',
      'The hostels operate on a dividing system, managed by a committee comprising the warden and a student secretary, ensuring smooth and fair functioning.',
    ],
  },
  {
    tag: 'Canteen',
    icon: <FiCoffee size={16} />,
    color: 'bg-blue-500',
    img: faci14,
    points: [
      'The college canteen is strategically located and serves hygienic and nutritious food, snacks, and beverages at a reasonable cost.',
      'It is designed to cater to the diverse tastes and dietary needs of students and staff in a clean and inviting environment.',
    ],
  },
  {
    tag: 'Transport',
    icon: <FiTruck size={16} />,
    color: 'bg-indigo-500',
    img: faci3,
    points: [
      'AMACEDU owns and operates its fleet of vehicles to provide reliable and convenient transportation for students and staff.',
      'The transport facility ensures safe and hassle-free commuting from various locations to the college campus.',
    ],
  },
  {
    tag: 'State-of-the-Art Infrastructure',
    icon: <FiLayers size={16} />,
    color: 'bg-violet-600',
    img: faci4,
    points: [
      'The campus is equipped with modern classrooms, laboratories, and seminar halls to facilitate an engaging and productive learning experience.',
      'Advanced audio-visual rooms and physical education facilities provide students with hands-on and practical exposure in their respective areas of training.',
    ],
  },
]

const FACILITIES_COMPACT = [
  {
    tag: 'Technology Integration',
    icon: <FiCpu size={16} />,
    color: 'bg-pink-500',
    img: faci5,
    desc: 'The institution integrates technology into its learning framework, providing teacher trainees with access to modern teaching aids and equipment that align with contemporary educational trends.',
  },
  {
    tag: 'Hygienic Environment',
    icon: <FiDroplet size={16} />,
    color: 'bg-cyan-500',
    img: faci6,
    desc: 'The campus is well-maintained with a focus on cleanliness and hygiene, ensuring a healthy and conducive environment for learning and living.',
  },
]

const SPECIAL_FEATURES = [
  {
    title: 'Visionary Founder',
    icon: <FiStar size={20} />,
    color: 'bg-brand-yellow/20 text-yellow-600',
    img: faci7,
    desc: 'Established by Thirumathi D. Meenakshi Ammal, a visionary leader and dedicated administrator whose tireless efforts have significantly contributed to the institution’s growth and success in the field of education.',
  },
  {
    title: 'Holistic Development',
    icon: <FiHeart size={20} />,
    color: 'bg-pink-100 text-pink-600',
    img: faci8,
    desc: 'The institution emphasizes the inculcation of character, virtues, knowledge, wisdom, and academic excellence among its students.',
  },
  {
    title: 'Modern Teaching Training',
    icon: <FiMonitor size={20} />,
    color: 'bg-blue-100 text-blue-600',
    img: faci9,
    desc: 'Provides training in the use of the latest modern teaching technologies, ensuring that future educators are prepared to meet contemporary challenges.',
  },
  {
    title: 'State-of-the-Art Infrastructure',
    icon: <FiLayers size={20} />,
    color: 'bg-violet-100 text-violet-600',
    img: faci10,
    desc: 'A sophisticated laboratory for hands-on learning, a digitalized library with an extensive collection of educational resources, spacious well-ventilated classrooms, a seminar hall, physical education facilities, and an audio-visual room.',
  },
  {
    title: 'Qualified Faculty',
    icon: <FiUsers size={20} />,
    color: 'bg-emerald-100 text-emerald-600',
    img: faci11,
    desc: 'A team of highly experienced and well-qualified staff, dedicated to shaping competent and innovative educators.',
  },
  {
    title: 'Specialized Teacher Training',
    icon: <FiAward size={20} />,
    color: 'bg-amber-100 text-amber-600',
    img: faci12,
    desc: 'Offers comprehensive training programs to mould student teachers into exemplary professionals capable of contributing meaningfully to society.',
  },
  {
    title: 'Ethical and Professional Excellence',
    icon: <FiShield size={20} />,
    color: 'bg-brand-purpleLight text-brand-purple',
    img: faci13,
    desc: 'Focuses on nurturing professional and ethical excellence, ensuring students graduate as responsible and effective educators.',
  },
]

export default function Facilities() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Facilities at AMACEDU" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-6xl font-display font-bold mb-4 text-white"
          >
            Facilities
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold tracking-wider uppercase text-white/80"
          >
            <Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link>
            <FiChevronRight size={14} />
            <span className="text-brand-yellow">Facilities</span>
          </motion.div>
        </div>
      </section>

      {/* Facilities Intro */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-x">
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="text-center max-w-2xl mx-auto mb-16">
            <motion.span variants={fadeUp} className="text-brand-greenDark font-bold tracking-wider uppercase text-sm mb-2 block">
              Campus &amp; Amenities
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-ink">
              Facilities at AMACEDU, Uthiramerur
            </motion.h2>
          </motion.div>

          {/* Zigzag Facility Cards */}
          <div className="space-y-10 md:space-y-14 mb-14">
            {FACILITIES.map((f, idx) => (
              <motion.div
                key={f.tag}
                initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)}
                className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.07)] border border-gray-100 bg-white items-stretch"
              >
                <motion.div
                  variants={fadeUp}
                  className={`h-56 md:h-64 lg:h-72 flex items-center justify-center bg-gray-50 p-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <img src={f.img} alt={f.tag} className="max-w-[220px] max-h-full w-auto h-auto object-contain rounded-xl shadow-md" />
                </motion.div>
                <motion.div variants={fadeUp} className={`p-8 md:p-10 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className={`inline-flex items-center gap-2 self-start ${f.color} text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5`}>
                    {f.icon}
                    {f.tag}
                  </span>
                  <div className="space-y-3">
                    {f.points.map((p, i) => (
                      <p key={i} className="text-ink-soft text-sm md:text-base leading-relaxed">{p}</p>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Compact Pair: Technology Integration + Hygienic Environment */}
          <motion.div
            initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)}
            className="grid md:grid-cols-2 gap-6 md:gap-8"
          >
            {FACILITIES_COMPACT.map((f) => (
              <motion.div
                key={f.tag}
                variants={fadeUp}
                className="rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.07)] border border-gray-100 bg-white flex flex-col"
              >
                <div className="h-40 flex items-center justify-center bg-gray-50 p-4">
                  <img src={f.img} alt={f.tag} className="max-w-[200px] max-h-full w-auto h-auto object-contain rounded-lg shadow-sm" />
                </div>
                <div className="p-6 md:p-7">
                  <span className={`inline-flex items-center gap-2 ${f.color} text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4`}>
                    {f.icon}
                    {f.tag}
                  </span>
                  <p className="text-ink-soft text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 md:py-24 bg-[#FAFAFA]">
        <div className="container-x">
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="text-center max-w-2xl mx-auto mb-14">
            <motion.span variants={fadeUp} className="text-brand-purple font-bold tracking-wider uppercase text-sm mb-2 block">
              What Sets Us Apart
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-ink">
              Special Features
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.1)}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {SPECIAL_FEATURES.map((feat) => (
              <motion.div
                key={feat.title}
                variants={fadeUp}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-36 relative flex items-center justify-center bg-gray-50 p-4">
                  <img src={feat.img} alt={feat.title} className="max-w-[180px] max-h-full w-auto h-auto object-contain rounded-lg shadow-sm" />
                  <div className={`absolute -bottom-5 left-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-md border-2 border-white ${feat.color}`}>
                    {feat.icon}
                  </div>
                </div>
                <div className="p-6 md:p-7 pt-8">
                  <h4 className="font-bold text-ink text-lg mb-3 leading-snug">{feat.title}</h4>
                  <p className="text-ink-soft text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  )
}
