import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiPlay, FiStar } from 'react-icons/fi'
import { IMG } from '../data/content'
import { fadeUp, stagger, viewport } from '../lib/motion'

const heroImages = [IMG.heroChild, IMG.classroom, IMG.playground]

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden bg-ink pt-28 md:pt-36">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-green/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-1/2 h-80 w-80 rounded-full bg-brand-greenLight/10 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
        {/* copy */}
        <motion.div variants={stagger(0.14)} initial="hidden" animate="show">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-greenLight"
          >
            <FiStar /> Admissions open 2026–27
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl md:text-[4.6rem]"
          >
            Play is a child&rsquo;s{' '}
            <span className="relative whitespace-nowrap text-brand-greenLight">
              first language
              <svg
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 300 18"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 13C60 4 220 3 298 11"
                  stroke="#F97D81"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            At AMAPS Campus we grow curious, confident and kind young minds — where every
            classroom is an adventure and every child is known by name.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#admissions" className="btn-primary">
              Begin Your Journey <FiArrowRight />
            </a>
            <a
              href="#campus"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-green text-white">
                <FiPlay size={13} />
              </span>
              Watch campus tour
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 flex items-center gap-5">
            <div className="flex -space-x-3">
              {[
                'photo-1544005313-94ddf0286df2',
                'photo-1500648767791-00dcc994a43e',
                'photo-1580489944761-15a19d654956',
                'photo-1507003211169-0a1dd7228f2d',
              ].map((id) => (
                <img
                  key={id}
                  src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=90&q=80`}
                  alt=""
                  className="h-11 w-11 rounded-full border-2 border-ink object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-white/70">
              <span className="font-bold text-white">1,200+ families</span>
              <br />
              trust AMAPS with their children
            </p>
          </motion.div>
        </motion.div>

        {/* image + slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white/10 shadow-2xl h-[420px] md:h-[500px]">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImg}
                src={heroImages[currentImg]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                alt="Joyful student at AMAPS"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            
            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between px-4 z-10 pointer-events-none">
              <button 
                onClick={(e) => { e.preventDefault(); setCurrentImg((prev) => (prev - 1 + heroImages.length) % heroImages.length); }} 
                className="pointer-events-auto h-10 w-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
              >
                &#8592;
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); setCurrentImg((prev) => (prev + 1) % heroImages.length); }} 
                className="pointer-events-auto h-10 w-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
              >
                &#8594;
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImg(idx)}
                  className={`h-2 w-2 rounded-full transition-all ${currentImg === idx ? 'w-6 bg-brand-green' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* wave divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 90" className="block w-full" preserveAspectRatio="none">
          <path d="M0 90 L0 40 Q 360 90 720 45 T 1440 40 L1440 90 Z" fill="#e0f2fe" />
        </svg>
      </div>
    </section>
  )
}
