import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../lib/motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import faci1 from "../assets/homepage/faci1.webp"
import faci2 from "../assets/homepage/faci2.webp"
import faci3 from "../assets/homepage/faci3.webp"
import faci4 from "../assets/homepage/faci4.webp"
import faci5 from "../assets/homepage/faci5.webp"
import faci6 from "../assets/homepage/faci6.webp"
import faci7 from "../assets/homepage/faci7.webp"

const FACILITIES = [
  {
    title: 'Transportation',
    img: faci4,
  },
  {
    title: 'Campus Infrastructure',
    img: faci5,
  },
  {
    title: 'Technology Integration',
    img: faci6,
  },
  {
    title: 'Hygeienic Environment',
    img: faci7,
  },
  {
    title: 'Library',
    img: faci1,
  },
  {
    title: 'Biology Lab',
    img: faci2,
  },
  {
    title: 'Physics Lab',
    img: faci3,
  }
]

export default function ExploreGallery() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="facilities" className="bg-white py-20 relative">
      <div className="container-x">
        <div className="flex flex-col items-center md:items-start mb-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.15)}
            className="text-center md:text-left"
          >
            <motion.span variants={fadeUp} className="text-[#F97D81] font-semibold tracking-wider uppercase text-sm mb-2 block">
              Infrastructure
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-[40px] font-bold text-ink">
              Facilities at AMACEDU
            </motion.h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="w-full relative"
        >
          {/* Image Slider */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {FACILITIES.map((fac, idx) => (
              <div
                key={idx}
                className="relative group min-w-[280px] md:min-w-[320px] max-w-sm shrink-0 snap-center"
              >
                <div className="rounded-xl overflow-hidden shadow-sm aspect-[4/3] border border-gray-200 bg-gray-50 relative group-hover:shadow-md transition-shadow">
                  <img src={fac.img} alt={fac.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                  {/* Floating Title Box */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white py-2.5 px-4 rounded-lg shadow-sm text-center font-bold text-ink text-sm sm:text-base border border-gray-100">
                    {fac.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows Below Slider */}
          <div className="flex justify-center items-center gap-6 mt-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-[#F97D81]/20 text-[#F97D81] flex items-center justify-center hover:bg-[#F97D81] hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <FiChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border-2 border-[#F97D81]/20 text-[#F97D81] flex items-center justify-center hover:bg-[#F97D81] hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
