import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../lib/motion'
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi'

import gallery1 from "../assets/homepage/gallery1.webp"
import gallery2 from "../assets/homepage/gallery2.webp"
import gallery3 from "../assets/homepage/gallery3.webp"
import gallery4 from "../assets/homepage/gallery4.webp"
import gallery5 from "../assets/homepage/gallery5.webp"

const IMAGES = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5
]


export default function GalleryRow() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-white py-20 overflow-hidden relative">
      <div className="container-x mb-12 flex flex-col md:flex-row items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-ink uppercase tracking-wider mb-2">
            Gallery
          </h2>
        </div>
      </div>

      {/* Image Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.6 }}
        className="w-full relative px-4 group"
      >
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="min-w-[200px] md:min-w-[250px] lg:min-w-[280px] aspect-[4/3] rounded-2xl overflow-hidden shadow-md shrink-0 snap-center"
            >
              <img src={img} alt={`Gallery Image ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </div>
          ))}
        </div>

        {/* Overlay Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 shadow-xl rounded-full text-brand-green flex items-center justify-center hover:bg-brand-green hover:text-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
          aria-label="Scroll left"
        >
          <FiChevronLeft size={28} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 shadow-xl rounded-full text-brand-green flex items-center justify-center hover:bg-brand-green hover:text-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
          aria-label="Scroll right"
        >
          <FiChevronRight size={28} />
        </button>
      </motion.div>

      {/* View Gallery Button */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="mt-10 flex justify-center"
      >
        <a href="#gallery" className="btn-primary inline-flex items-center gap-2 bg-[#F97D81] hover:bg-[#e06b6f] text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg">
          View Gallery <FiArrowRight />
        </a>
      </motion.div>

    </section>
  )
}
