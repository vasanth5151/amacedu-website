import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiMapPin, FiMail, FiPhone, FiCheckCircle, FiLoader, FiAlertCircle, FiArrowRight } from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../lib/motion'
import { sendEmail } from '../services/emailService'

import heroImg from '../assets/facilities/faci4.jpg'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const fullName = `${form.firstName} ${form.lastName}`.trim()
    const emailSubject = `New Contact Form Submission from ${fullName}`
    const emailHtml = `
      <h2>New Contact Form Inquiry</h2>
      <p><strong>First Name:</strong> ${form.firstName}</p>
      <p><strong>Last Name:</strong> ${form.lastName}</p>
      <p><strong>Email:</strong> ${form.email}</p>
      <p><strong>Phone:</strong> ${form.phone || 'N/A'}</p>
      <p><strong>Message:</strong> ${form.message}</p>
    `

    try {
      await sendEmail({
        subject: emailSubject,
        html: emailHtml,
        text: `Contact inquiry from ${fullName}. Phone: ${form.phone}, Email: ${form.email}. Message: ${form.message}`,
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const labelClass = "block text-sm font-semibold text-ink mb-2"
  const inputClass = "w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FAFAFA] text-base text-ink placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F97D81]/40 focus:border-[#F97D81] transition-colors"

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Hero Banner */}
      <section className="relative min-h-[340px] sm:min-h-[380px] md:min-h-[440px] pt-36 sm:pt-40 md:pt-32 pb-12 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Contact AMACEDU" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Frosted Breadcrumb Card */}
        <div className="relative z-10 text-center text-white px-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-6 rounded-2xl inline-block shadow-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-display font-bold text-white mb-2"
            >
              Contact Us
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-white/80 uppercase"
            >
              <Link to="/" className="text-white hover:text-brand-yellow transition-colors">Home</Link>
              <FiChevronRight size={14} className="text-white/60" />
              <span className="text-white/90">Contact Us</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro & 3 Cards Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-x max-w-6xl mx-auto">
          
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-ink">
              Contact AMACEDU &ndash; Uthiramerur
            </motion.h2>
          </motion.div>

          {/* 3 Info Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.15)}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Location */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1.5 transition-all flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-brand-purple flex items-center justify-center mb-5 border border-purple-100 shadow-sm">
                <FiMapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2 font-display">College Location</h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                Uthiramerur &ndash; 603 406<br />Kanchipuram.
              </p>
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1.5 transition-all flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-brand-purple flex items-center justify-center mb-5 border border-purple-100 shadow-sm">
                <FiMail size={28} />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2 font-display">Email Address</h3>
              <p className="text-ink-soft text-sm leading-relaxed break-all">
                admin@amacedu.edu.in
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1.5 transition-all flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-brand-purple flex items-center justify-center mb-5 border border-purple-100 shadow-sm">
                <FiPhone size={28} />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2 font-display">Phone Number</h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                9042073453 / 9841172680
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Map & Get In Touch Form Section */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="container-x max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            
            {/* Left: Map */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={fadeUp}
              className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 min-h-[420px] lg:min-h-full h-full relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.7110839981524!2d79.804459!3d12.6012831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52e00272cb8197%3A0x8641e80dbba55157!2sArulmigu%20Meenakshi%20Amman%20College%20Of%20Education!5e0!3m2!1sen!2sin!4v1786447697079!5m2!1sen!2sin"
                className="w-full h-full border-0 min-h-[420px]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-brand-purple block mb-2">
                CONTACT US
              </span>
              <h3 className="text-3xl font-bold text-ink mb-8 inline-block relative font-display">
                Get In <span className="relative z-10">Touch</span>
                <span className="absolute bottom-0 left-0 w-full h-1.5 bg-[#A8E6CF] -z-0 rounded-full"></span>
              </h3>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-brand-leaf/30 border border-brand-green/30 rounded-3xl p-10 text-center my-6"
                  >
                    <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center text-white mx-auto mb-4 shadow-md">
                      <FiCheckCircle size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-ink mb-2 font-display">Message Sent!</h4>
                    <p className="text-ink-soft leading-relaxed text-sm mb-6">
                      Thank you for contacting AMACEDU. We have received your message and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => { setForm(initialForm); setStatus('idle'); }}
                      className="bg-[#F97D81] text-white px-6 py-2 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClass}>First Name *</label>
                        <input
                          type="text" name="firstName" required
                          placeholder="Enter your first name"
                          value={form.firstName} onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Last Name *</label>
                        <input
                          type="text" name="lastName" required
                          placeholder="Enter your last name"
                          value={form.lastName} onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClass}>Email Address *</label>
                        <input
                          type="email" name="email" required
                          placeholder="your@gmail.com"
                          value={form.email} onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Phone Number</label>
                        <input
                          type="tel" name="phone"
                          placeholder="+1 234 567 8900"
                          value={form.phone} onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Your Message *</label>
                      <textarea
                        name="message" rows={4} required
                        placeholder="Please enter your message here..."
                        value={form.message} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-600 text-sm font-medium">
                        <FiAlertCircle size={18} />
                        Something went wrong sending your message. Please try again.
                      </div>
                    )}

                    <div>
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="bg-[#F97D81] hover:bg-[#f8676b] text-white px-8 py-3.5 rounded-xl font-bold text-base shadow-md inline-flex items-center gap-2 transition-all disabled:opacity-60"
                      >
                        {status === 'loading' ? (
                          <>
                            <FiLoader className="animate-spin" /> Sending...
                          </>
                        ) : (
                          <>
                            Send Now <FiArrowRight size={18} />
                          </>
                        )}
                      </button>
                    </div>

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
