import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiChevronDown, FiImage } from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../lib/motion'

import heroImg from '../assets/facilities/faci11.jpg'

import gal1 from '../assets/gallery/gal1.jpg'
import gal2 from '../assets/gallery/gal2.jpg'
import gal3 from '../assets/gallery/gal3.jpg'
import gal4 from '../assets/gallery/gal4.jpg'
import gal5 from '../assets/gallery/gal5.jpg'
import gal6 from '../assets/gallery/gal6.jpg'
import gal7 from '../assets/gallery/gal7.jpg'
import gal8 from '../assets/gallery/gal8.jpg'
import gal9 from '../assets/gallery/gal9.jpg'
import gal10 from '../assets/gallery/gal10.jpg'
import gal11 from '../assets/gallery/gal11.jpg'
import gal12 from '../assets/gallery/gal12.jpg'
import gal13 from '../assets/gallery/gal13.jpg'
import gal14 from '../assets/gallery/gal14.jpg'
import gal15 from '../assets/gallery/gal15.jpg'
import gal16 from '../assets/gallery/gal16.jpg'
import gal17 from '../assets/gallery/gal17.jpg'
import gal18 from '../assets/gallery/gal18.jpg'
import gal19 from '../assets/gallery/gal19.jpg'
import gal20 from '../assets/gallery/gal20.jpg'
import gal21 from '../assets/gallery/gal21.jpg'
import gal22 from '../assets/gallery/gal22.jpg'
import gal23 from '../assets/gallery/gal23.jpg'
import gal24 from '../assets/gallery/gal24.jpg'
import gal25 from '../assets/gallery/gal25.jpg'
import gal26 from '../assets/gallery/gal26.jpg'
import gal27 from '../assets/gallery/gal27.jpg'
import gal28 from '../assets/gallery/gal28.jpg'
import gal29 from '../assets/gallery/gal29.jpg'
import gal30 from '../assets/gallery/gal30.jpg'


const PAGE_SIZE = 9

const MAIN_GALLERY = [
  gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10,
  gal11, gal12, gal13, gal14, gal15, gal16, gal17, gal18, gal19, gal20,
  gal21, gal22, gal23, gal24, gal25, gal26, gal27, gal28, gal29, gal30,
]

function ImageCard({ src, idx }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: (idx % PAGE_SIZE) * 0.03 }}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={src}
        alt={`AMACEDU Gallery ${idx + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <FiImage className="text-white/90" size={20} />
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const visibleImages = MAIN_GALLERY.slice(0, visibleCount)
  const hasMore = visibleCount < MAIN_GALLERY.length

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative min-h-[340px] sm:min-h-[380px] md:min-h-[440px] pt-36 sm:pt-40 md:pt-32 pb-12 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Gallery at AMACEDU" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-6xl font-display font-bold mb-4 text-white"
          >
            Gallery
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold tracking-wider uppercase text-white/80"
          >
            <Link to="/" className="text-white hover:text-brand-yellow transition-colors">Home</Link>
            <FiChevronRight size={14} className="text-white" />
            <span className="text-brand-yellow">Gallery</span>
          </motion.div>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-x">
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="text-center max-w-2xl mx-auto mb-14">
            <motion.span variants={fadeUp} className="text-brand-greenDark font-bold tracking-wider uppercase text-sm mb-2 block">
              Moments Worth Sharing
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-ink">
              Campus Life at AMACEDU — Gallery
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            <AnimatePresence>
              {visibleImages.map((src, idx) => (
                <ImageCard key={idx} src={src} idx={idx} />
              ))}
            </AnimatePresence>
          </div>

          {hasMore && (
            <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp} className="flex justify-center mt-12">
              <button
                onClick={() => setVisibleCount((c) => Math.min(c + PAGE_SIZE, MAIN_GALLERY.length))}
                className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-brand-purple/20"
              >
                Load More <FiChevronDown />
              </button>
            </motion.div>
          )}
        </div>
      </section>

    </div>
  )
}
