import { motion } from 'framer-motion'
import { FiChevronRight, FiCalendar } from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../lib/motion'

const BLOG_POSTS = [
  {
    title: 'New Infrastructure Addition to Our Kanchipuram Campus',
    date: 'August 15, 2026',
    excerpt: 'We are thrilled to announce the opening of our newly renovated science and tech block...',
    img: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'MOU Signed for Better Placement Opportunities',
    date: 'July 22, 2026',
    excerpt: 'AMACEDU has partnered with leading educational groups to secure 100% placement...',
    img: 'https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Annual Sports and Cultural Meet 2026',
    date: 'July 05, 2026',
    excerpt: 'Our student-teachers showcased incredible talent and sportsmanship at the annual meet...',
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80',
  }
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50/50">
      <div className="container-x">
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={viewport} 
          variants={stagger(0.15)}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-2 block">
            Information
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-[40px] font-bold text-ink">
            Our Blog & News
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink-muted mt-4 max-w-2xl mx-auto">
            Stay updated with the latest events, achievements, and educational insights from AMACEDU.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={viewport} 
          variants={stagger(0.2)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BLOG_POSTS.map((post, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-blue/20 flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden relative border-b-4 border-brand-blue/30">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-white">
                
                <div className="flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-wider mb-4">
                  <FiCalendar size={14} />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-brand-blue mb-4 leading-snug group-hover:text-brand-purple transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-ink-muted mb-8 text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <a href="#blog" className="inline-flex items-center gap-2 text-brand-green font-bold text-sm hover:text-brand-greenDark transition-colors">
                  Read More <FiChevronRight />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
