import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiCheckCircle, FiLoader, FiAlertCircle, FiArrowRight } from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../lib/motion'
import { sendEmail } from '../services/emailService'

import heroImg from '../assets/facilities/faci10.jpg'

const initialForm = {
  name: '',
  dob: '',
  email: '',
  mobile: '',
  address: '',
  position: '',
  startDate: '',
  highestDegree: '',
  fieldOfStudy: '',
  collegeName: '',
  graduationYear: '',
  experienceYears: '',
  previousSchool: '',
  message: '',
}

export default function Careers() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const emailSubject = `New Job Application: ${form.position || 'General Application'} - ${form.name}`
    const emailHtml = `
      <h2>New Career Application Received</h2>
      <h3>Personal Details</h3>
      <p><strong>Name:</strong> ${form.name}</p>
      <p><strong>Date of Birth:</strong> ${form.dob}</p>
      <p><strong>Email:</strong> ${form.email}</p>
      <p><strong>Mobile:</strong> ${form.mobile}</p>
      <p><strong>Address:</strong> ${form.address}</p>
      
      <h3>Position Details</h3>
      <p><strong>Position Applied For:</strong> ${form.position}</p>
      <p><strong>Preferred Start Date:</strong> ${form.startDate}</p>
      
      <h3>Educational Details</h3>
      <p><strong>Highest Degree:</strong> ${form.highestDegree}</p>
      <p><strong>Field of Study:</strong> ${form.fieldOfStudy}</p>
      <p><strong>College/University:</strong> ${form.collegeName}</p>
      <p><strong>Year of Graduation:</strong> ${form.graduationYear}</p>
      
      <h3>Professional Experience</h3>
      <p><strong>Years of Experience:</strong> ${form.experienceYears}</p>
      <p><strong>Previous School/College:</strong> ${form.previousSchool}</p>
      <p><strong>Message:</strong> ${form.message}</p>
    `

    try {
      await sendEmail({
        subject: emailSubject,
        html: emailHtml,
        text: `New application from ${form.name} for position ${form.position}. Mobile: ${form.mobile}, Email: ${form.email}`,
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
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Careers at AMACEDU" className="w-full h-full object-cover" />
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
              Careers
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-white/80 uppercase"
            >
              <Link to="/" className="text-white hover:text-brand-yellow transition-colors">Home</Link>
              <FiChevronRight size={14} className="text-white/60" />
              <span className="text-white/90">careers</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-x max-w-5xl mx-auto">
          
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-ink mb-2">
              Careers at AMACEDU, Uthiramerur
            </motion.h2>
          </motion.div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-leaf/30 border border-brand-green/30 rounded-3xl p-12 text-center my-10 max-w-xl mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-brand-green flex items-center justify-center text-white mx-auto mb-6 shadow-md">
                  <FiCheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-ink mb-3 font-display">Application Submitted!</h3>
                <p className="text-ink-soft leading-relaxed text-sm md:text-base mb-6">
                  Thank you for your interest in joining AMACEDU. Our team has received your application and will review your profile shortly.
                </p>
                <button
                  onClick={() => { setForm(initialForm); setStatus('idle'); }}
                  className="bg-[#F97D81] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Submit Another Application
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                variants={stagger(0.15)}
                onSubmit={handleSubmit}
                className="space-y-12"
              >
                {/* 1. Personal Details */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-ink inline-block relative">
                      Personal <span className="relative z-10">Details</span>
                      <span className="absolute bottom-0 left-0 w-full h-1.5 bg-[#A8E6CF] -z-0 rounded-full"></span>
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Name</label>
                      <input
                        type="text" name="name" required
                        placeholder="Enter your name"
                        value={form.name} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Date Of Birth</label>
                      <input
                        type="date" name="dob" required
                        placeholder="dd-mm-yyyy"
                        value={form.dob} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email ID</label>
                      <input
                        type="email" name="email" required
                        placeholder="Enter address.."
                        value={form.email} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Mobile No</label>
                      <input
                        type="tel" name="mobile" required
                        placeholder="Enter your mobile no"
                        value={form.mobile} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass}>Residential Address</label>
                      <textarea
                        name="address" rows={3} required
                        placeholder="Enter your address"
                        value={form.address} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Position Details */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-ink inline-block relative">
                      Position <span className="relative z-10">Details</span>
                      <span className="absolute bottom-0 left-0 w-full h-1.5 bg-[#A8E6CF] -z-0 rounded-full"></span>
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Position Applied For</label>
                      <input
                        type="text" name="position" required
                        placeholder="Enter your Position"
                        value={form.position} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Preferred Start Date</label>
                      <input
                        type="date" name="startDate" required
                        placeholder="dd-mm-yyyy"
                        value={form.startDate} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Educational Details */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-ink inline-block relative">
                      Educational <span className="relative z-10">Details</span>
                      <span className="absolute bottom-0 left-0 w-full h-1.5 bg-[#A8E6CF] -z-0 rounded-full"></span>
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Highest Degree Obtained</label>
                      <input
                        type="text" name="highestDegree" required
                        placeholder="Enter highest degree"
                        value={form.highestDegree} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Field Of Study</label>
                      <input
                        type="text" name="fieldOfStudy" required
                        placeholder="Enter field of study"
                        value={form.fieldOfStudy} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>University/College Name</label>
                      <input
                        type="text" name="collegeName" required
                        placeholder="Enter your college name"
                        value={form.collegeName} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Year Of Graduation</label>
                      <input
                        type="text" name="graduationYear" required
                        placeholder="Enter your year"
                        value={form.graduationYear} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Professional Experience */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-ink inline-block relative">
                      Professional <span className="relative z-10">Experience</span>
                      <span className="absolute bottom-0 left-0 w-full h-1.5 bg-[#A8E6CF] -z-0 rounded-full"></span>
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className={labelClass}>Years Of Experience</label>
                      <input
                        type="text" name="experienceYears" required
                        placeholder="Enter your experience"
                        value={form.experienceYears} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass}>School/College Name</label>
                      <input
                        type="text" name="previousSchool" required
                        placeholder="Enter your school/college name"
                        value={form.previousSchool} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass}>Your Messages</label>
                      <textarea
                        name="message" rows={4}
                        placeholder="Hi there, I would like to ...."
                        value={form.message} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 text-sm font-medium">
                    <FiAlertCircle size={18} />
                    Something went wrong sending your application. Please try again.
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

        </div>
      </section>

    </div>
  )
}
