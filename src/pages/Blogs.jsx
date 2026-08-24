import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiCalendar, FiUser, FiArrowRight, FiLoader } from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../lib/motion'
import { fetchBlogPosts } from '../services/sanityService'

import aboutBg from '../assets/facilities/faci7.jpg'

export default function Blogs() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await fetchBlogPosts()
        setPosts(fetchedPosts)
      } catch (err) {
        console.error('Failed to load blog posts:', err)
      } finally {
        setLoading(false)
      }
    }
    loadPosts()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={aboutBg} alt="AMACEDU Blog" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-brand-green/90 text-white text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
          >
            News &amp; Insights
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-6xl font-display font-bold mb-4 text-white"
          >
            Our Blog
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold tracking-wider uppercase text-white/80"
          >
            <Link to="/" className="text-white hover:text-brand-yellow transition-colors">Home</Link>
            <FiChevronRight size={14} className="text-white" />
            <span className="text-brand-yellow">Blog</span>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-x">
          <motion.div
            initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span variants={fadeUp} className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">
              Latest Updates
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-ink">
              News, Events &amp; Stories from AMACEDU
            </motion.h2>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-20 text-brand-purple gap-3 font-semibold">
              <FiLoader className="animate-spin text-2xl" /> Loading blog posts...
            </div>
          ) : (
            <motion.div
              initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {posts.map((post) => (
                <motion.article
                  key={post._id || post.slug}
                  variants={fadeUp}
                  className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-52 overflow-hidden relative">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute top-4 left-4 bg-white/95 text-brand-purple text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 md:p-7 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-ink-muted text-xs font-semibold mb-4">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar size={13} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiUser size={13} />
                        {post.author}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-ink mb-3 leading-snug group-hover:text-brand-purple transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-ink-soft text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    <a href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-brand-greenDark font-bold text-sm hover:gap-3 transition-all">
                      Read More <FiArrowRight />
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

    </div>
  )
}
