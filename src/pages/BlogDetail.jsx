import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCalendar, FiUser, FiArrowLeft, FiTag, FiClock, FiShare2, FiCheckCircle } from 'react-icons/fi'
import { fadeUp, stagger } from '../lib/motion'
import { fetchBlogPostBySlug, fetchBlogPosts } from '../services/sanityService'

export default function BlogDetail() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    async function loadPostData() {
      setLoading(true)
      try {
        const [singlePost, allPosts] = await Promise.all([
          fetchBlogPostBySlug(slug),
          fetchBlogPosts(),
        ])
        setPost(singlePost)
        if (allPosts) {
          setRelatedPosts(allPosts.filter((p) => p.slug !== slug && p._id !== slug).slice(0, 3))
        }
      } catch (err) {
        console.error('Failed to load blog post detail:', err)
      } finally {
        setLoading(false)
      }
    }
    loadPostData()
  }, [slug])

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        url: window.location.href,
      }).catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-28 pb-20">
        <div className="w-12 h-12 border-4 border-[#F97D81]/30 border-t-[#F97D81] rounded-full animate-spin mb-4" />
        <p className="text-gray-500 font-semibold">Loading article...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-28 pb-20 px-4 text-center">
        <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">Blog Post Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md">The blog article you are looking for might have been moved or updated.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 bg-[#F97D81] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e8666a] transition-all"
        >
          <FiArrowLeft /> Back to All Blogs
        </Link>
      </div>
    )
  }

  const parseInlineFormatting = (text) => {
    if (!text) return text
    const parts = text.split(/(\*\*.*?\*\*|__.*?__)/g)
    return parts.map((part, i) => {
      if ((part.startsWith('**') && part.endsWith('**')) || (part.startsWith('__') && part.endsWith('__'))) {
        return <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>
      }
      return part
    })
  }

  // Render body content with bold headings, subheadings, quotes, lists
  const renderBodyContent = (body) => {
    if (!body) {
      return <p className="text-gray-700 text-lg leading-relaxed">{post.excerpt}</p>
    }

    if (typeof body === 'string') {
      const blocks = body.split('\n\n').filter(Boolean)

      return blocks.map((block, idx) => {
        const trimmed = block.trim()

        // 1. Markdown headers #, ##, ###
        if (/^#{1,4}\s+/.test(trimmed)) {
          const title = trimmed.replace(/^#{1,4}\s+/, '')
          return (
            <h2 key={idx} className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 mt-10 mb-4 border-l-4 border-[#F97D81] pl-4 py-1 bg-pink-50/50 rounded-r-xl">
              {title}
            </h2>
          )
        }

        // 2. Block quotes
        if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
          return (
            <blockquote key={idx} className="border-l-4 border-[#F97D81] pl-6 py-3 my-6 bg-pink-50/60 rounded-r-2xl italic text-gray-800 text-lg sm:text-xl font-medium shadow-sm">
              {trimmed.replace(/^"|"$/g, '')}
            </blockquote>
          )
        }

        const lines = trimmed.split('\n').filter(Boolean)

        // 3. Multi-line blocks where 1st line is a heading / list title
        if (lines.length > 1) {
          const firstLine = lines[0].trim()
          const isFirstLineHeading = 
            firstLine.length < 90 && 
            (!firstLine.endsWith('.') || firstLine.endsWith(':') || /^\d+[\.\s]/.test(firstLine))

          if (isFirstLineHeading) {
            return (
              <div key={idx} className="my-8">
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-gray-900 mb-4 border-l-4 border-[#F97D81] pl-3.5 py-0.5">
                  {firstLine}
                </h3>
                {lines.slice(1).map((line, lIdx) => {
                  const lineTrimmed = line.trim()
                  if (!lineTrimmed) return null
                  if (lineTrimmed.includes(':') && lineTrimmed.length < 120 && !lineTrimmed.endsWith('.')) {
                    const [label, ...valParts] = lineTrimmed.split(':')
                    return (
                      <div key={lIdx} className="mb-3 pl-4 border-l-2 border-pink-200">
                        <span className="font-bold text-gray-900">{label}:</span>{' '}
                        <span className="text-gray-700">{valParts.join(':')}</span>
                      </div>
                    )
                  }
                  return (
                    <p key={lIdx} className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                      {parseInlineFormatting(lineTrimmed)}
                    </p>
                  )
                })}
              </div>
            )
          }
        }

        // 4. Standalone heading block (short line without period, or ends with ?, :, or is a numbered section title)
        const isStandaloneHeading =
          trimmed.length < 110 &&
          (!trimmed.endsWith('.') || trimmed.endsWith(':') || trimmed.endsWith('?') || /^\d+[\.\s]/.test(trimmed) || /^(introduction|conclusion|faq|summary|overview)/i.test(trimmed))

        if (isStandaloneHeading) {
          return (
            <h3 key={idx} className="text-xl sm:text-2xl font-display font-extrabold text-gray-900 mt-10 mb-4 border-l-4 border-[#F97D81] pl-3.5 py-0.5 bg-pink-50/30 rounded-r-lg">
              {parseInlineFormatting(trimmed)}
            </h3>
          )
        }

        // 5. Standard paragraph
        return (
          <p key={idx} className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            {parseInlineFormatting(trimmed)}
          </p>
        )
      })
    }

    return <p className="text-gray-700 text-lg leading-relaxed">{post.excerpt}</p>
  }

  return (
    <div className="min-h-screen bg-[#FAFAFC] pt-28 pb-20">
      <div className="container-x max-w-4xl mx-auto px-4">
        
        {/* Back navigation & Share */}
        <div className="flex items-center justify-between py-4 mb-6 border-b border-gray-200/80">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-[#F97D81] transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Blogs
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm transition-all"
          >
            {copied ? (
              <>
                <FiCheckCircle className="text-emerald-500" /> Link Copied!
              </>
            ) : (
              <>
                <FiShare2 /> Share Article
              </>
            )}
          </button>
        </div>

        {/* Article Header */}
        <motion.header
          initial="hidden"
          animate="show"
          variants={stagger(0.1)}
          className="mb-8"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-[#F97D81]/10 text-[#F97D81] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              <FiTag size={12} /> {post.category}
            </span>
            <span className="text-gray-400 text-xs flex items-center gap-1">
              <FiClock size={12} /> 5 min read
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-6"
          >
            {post.title}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-6 text-sm text-gray-500 pb-6 border-b border-gray-200"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#F97D81]/20 flex items-center justify-center text-[#F97D81] font-bold text-xs">
                <FiUser size={14} />
              </div>
              <span className="font-medium text-gray-700">{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-500">
              <FiCalendar size={14} />
              <span>{post.date}</span>
            </div>
          </motion.div>
        </motion.header>

        {/* Featured Image */}
        {post.img && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </motion.div>
        )}

        {/* Article Body */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 mb-16"
        >
          <div className="prose prose-lg max-w-none">
            {renderBodyContent(post.body)}
          </div>

          {/* Admission CTA Box */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 border border-pink-200/60 text-center">
            <h4 className="text-2xl font-display font-bold text-gray-900 mb-2">
              Ready to Shape the Future of Education?
            </h4>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm sm:text-base">
              Explore teacher education programs at Arulmigu Meenakshi Amman College of Education (AMACEDU) and kickstart your teaching career today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/admissions"
                className="bg-[#F97D81] hover:bg-[#e8666a] text-white px-7 py-3 rounded-xl font-semibold shadow-md transition-all"
              >
                Apply for Admission
              </Link>
              <Link
                to="/contact"
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Contact Campus
              </Link>
            </div>
          </div>
        </motion.article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel._id || rel.slug}
                  to={`/blog/${rel.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={rel.img}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-xs font-bold text-[#F97D81] uppercase mb-2 block">
                      {rel.category}
                    </span>
                    <h4 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-[#F97D81] transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-gray-500 text-xs line-clamp-2 mb-4 flex-1">
                      {rel.excerpt}
                    </p>
                    <span className="text-xs font-semibold text-gray-400">
                      {rel.date}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
