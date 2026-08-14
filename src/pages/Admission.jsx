import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiChevronRight,
  FiUser,
  FiPhone,
  FiMail,
  FiBookOpen,
  FiArrowRight,
  FiCheckCircle,
  FiMapPin,
  FiAlertCircle,
  FiLoader,
} from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../lib/motion'

import heroImg from '../assets/aboutpage/aca7.webp'

const COURSES = [
  'B.Ed. (Tamil)',
  'B.Ed. (English)',
  'B.Ed. (Mathematics)',
  'B.Ed. (Physical Science)',
  'M.Ed. (Master of Education)',
]

const STEPS = [
  'Fill in the enquiry form with your details',
  'Our admissions team reaches out to guide you',
  'Submit documents & complete registration',
]

const initialForm = {
  studentName: '',
  studentMobile: '',
  studentEmail: '',
  course: '',
  parentName: '',
  parentMobile: '',
}

export default function Admission() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/send-admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-[#FAFAFA] text-base text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-brand-purple/40 focus:border-brand-purple transition-colors'

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Admissions at AMACEDU" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-6xl font-display font-bold mb-4 text-white"
          >
            Admission
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold tracking-wider uppercase text-white/80"
          >
            <Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link>
            <FiChevronRight size={14} />
            <span className="text-brand-yellow">Admission</span>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-x">
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="text-center max-w-2xl mx-auto mb-14">
            <motion.span variants={fadeUp} className="text-brand-greenDark font-bold tracking-wider uppercase text-sm mb-2 block">
              Enquire Now
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-ink">
              Admissions 2026 — AMACEDU, Uthiramerur
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 max-w-6xl mx-auto items-start">

            {/* Left: Info Panel */}
            <motion.div
              initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)}
              className="bg-brand-purple rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10"></div>
              <div className="absolute -bottom-10 -left-6 w-32 h-32 rounded-full bg-brand-green/20"></div>

              <motion.h3 variants={fadeUp} className="text-2xl font-display font-bold mb-3 relative z-10">
                How It Works
              </motion.h3>
              <motion.p variants={fadeUp} className="text-white/80 text-sm leading-relaxed mb-8 relative z-10">
                Share a few details below and our admissions team will get back to you with everything you need.
              </motion.p>

              <motion.div variants={stagger(0.1)} className="space-y-5 relative z-10 mb-10">
                {STEPS.map((step, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center font-bold text-sm shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed pt-1">{step}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-4 relative z-10 pt-6 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <FiPhone className="text-brand-leaf shrink-0" size={18} />
                  <span className="text-sm text-white/90">9042073453 / 9841172680</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail className="text-brand-leaf shrink-0" size={18} />
                  <span className="text-sm text-white/90 break-all">admin@amacedu.edu.in</span>
                </div>
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-brand-leaf shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-white/90">Perunkozhi Village, Uthiramerur, Kancheepuram District — 603406</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp}
              className="bg-white rounded-3xl p-8 md:p-12 lg:p-14 shadow-[0_8px_40px_rgb(0,0,0,0.08)] border border-gray-100"
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-leaf flex items-center justify-center mb-6">
                      <FiCheckCircle className="text-brand-greenDark" size={32} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-ink mb-2">Thank You!</h3>
                    <p className="text-ink-soft text-sm max-w-sm">
                      Your enquiry has been received. Our admissions team will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                  >
                    <div className="grid md:grid-cols-2 gap-10">

                      {/* Student Details */}
                      <div>
                        <h4 className="font-bold text-ink text-xl mb-6">Student Details</h4>
                        <div className="space-y-5">
                          <div className="relative">
                            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" size={18} />
                            <input
                              type="text" name="studentName" required
                              placeholder="Student Name"
                              value={form.studentName} onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                          <div className="relative">
                            <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" size={18} />
                            <input
                              type="tel" name="studentMobile" required
                              pattern="[0-9]{10}" title="Enter a 10-digit mobile number"
                              placeholder="Student Mobile Number"
                              value={form.studentMobile} onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                          <div className="relative">
                            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" size={18} />
                            <input
                              type="email" name="studentEmail" required
                              placeholder="Student Email ID"
                              value={form.studentEmail} onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                          <div className="relative">
                            <FiBookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" size={18} />
                            <select
                              name="course" required
                              value={form.course} onChange={handleChange}
                              className={`${inputClass} appearance-none`}
                            >
                              <option value="" disabled>Course Interested In</option>
                              {COURSES.map((c) => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Parent Details */}
                      <div>
                        <h4 className="font-bold text-ink text-xl mb-6">Parent Details</h4>
                        <div className="space-y-5">
                          <div className="relative">
                            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" size={18} />
                            <input
                              type="text" name="parentName" required
                              placeholder="Parent Name"
                              value={form.parentName} onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                          <div className="relative">
                            <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" size={18} />
                            <input
                              type="tel" name="parentMobile" required
                              pattern="[0-9]{10}" title="Enter a 10-digit mobile number"
                              placeholder="Parent Mobile Number"
                              value={form.parentMobile} onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                        </div>
                      </div>

                    </div>

                    {status === 'error' && (
                      <div className="mt-8 flex items-center gap-2 text-red-600 text-sm font-medium">
                        <FiAlertCircle size={16} />
                        Something went wrong sending your enquiry. Please try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="mt-10 inline-flex items-center gap-2 bg-brand-green hover:bg-brand-greenDark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-base px-10 py-4 rounded-md transition-colors"
                    >
                      {status === 'loading' ? (
                        <>
                          <FiLoader className="animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Now <FiArrowRight />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}
