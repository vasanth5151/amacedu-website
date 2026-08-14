import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronRight, FiChevronLeft, FiChevronsRight } from 'react-icons/fi'
import { fadeUp, stagger } from '../lib/motion'

import banner1 from '../assets/homepage/banner1.webp'
import banner2 from '../assets/homepage/banner2.webp'
import banner3 from '../assets/homepage/banner3.webp'

const SLIDER_IMAGES = [
  banner1,
  banner2,
  banner3
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % SLIDER_IMAGES.length);
  const prevSlide = () => setCurrentIdx((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-white pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div variants={stagger(0.15)} initial="hidden" animate="show" className="max-w-xl">
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-2 text-[#F97D81] font-bold tracking-wider uppercase text-sm">
            <FiChevronsRight size={20} />
            <span>START WITH A BEST EDUCATION</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-ink mb-6"
          >
            A Premier College of Education Shaping Future Educators in <span className="text-[#F97D81]">Tamil Nadu</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-lg text-ink-muted leading-relaxed mb-8 border-l-4 border-[#F97D81] pl-4">
            A premier College of Education in Tamil Nadu, AMACEDU is committed to delivering a transformative teacher education experience through academic excellence, modern infrastructure, and value-based learning.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a href="#courses" className="btn-primary inline-flex items-center gap-2 text-white bg-brand-green hover:bg-brand-greenDark px-8 py-3 rounded-md font-semibold transition-colors">
              Explore Courses
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image Slider */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative h-full min-h-[400px] lg:min-h-[500px]"
        >
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIdx}
                src={SLIDER_IMAGES[currentIdx]}
                alt={`Hero Slide ${currentIdx + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Buttons (visible on hover) */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white/80 hover:bg-white text-brand-purple rounded-full flex items-center justify-center shadow-lg transition-colors"
                aria-label="Previous Slide"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white/80 hover:bg-white text-brand-purple rounded-full flex items-center justify-center shadow-lg transition-colors"
                aria-label="Next Slide"
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {SLIDER_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIdx ? 'bg-brand-purple w-6' : 'bg-white/60 hover:bg-white'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Watermark/Graphic */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-20 opacity-5 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="199" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
        </svg>
      </div>
    </section>
  )
}
