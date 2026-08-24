import { motion } from 'framer-motion'
import { FiBell, FiExternalLink } from 'react-icons/fi'
import { fadeUp, viewport } from '../lib/motion'

const NEWS_EVENTS = [
  {
    id: 1,
    tag: 'Careers',
    tagBg: 'bg-emerald-100 text-emerald-800',
    title: 'Teaching positions in government and private schools.',
    link: '/academics',
    isPdf: false,
  },
  {
    id: 2,
    tag: 'Exams',
    tagBg: 'bg-purple-100 text-purple-800',
    title: 'Eligibility for competitive exams like TET, CTET, and other teacher recruitment exams.',
    link: '/academics',
    isPdf: false,
  },
  {
    id: 3,
    tag: 'Opportunities',
    tagBg: 'bg-blue-100 text-blue-800',
    title: 'Opportunities in corporate training and e-learning development.',
    link: '/academics',
    isPdf: false,
  },
  {
    id: 4,
    tag: 'Award 2025',
    tagBg: 'bg-pink-100 text-pink-800',
    title: 'PARA WOMENS AWARD PONDICHERRY 2025',
    link: 'https://www.amacedu.edu.in/uploads/recent_news/para.pdf',
    isPdf: true,
  },
  {
    id: 5,
    tag: 'Ceremony 2025',
    tagBg: 'bg-amber-100 text-amber-800',
    title: 'Awards Ceremony 2025',
    link: 'https://www.amacedu.edu.in/uploads/recent_news/amacedu.pdf',
    isPdf: true,
  },
]

export default function Motto() {
  return (
    <section className="bg-white py-12">
      <div className="container-x max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid md:grid-cols-[1fr_1.3fr] rounded-3xl overflow-hidden shadow-lg border border-gray-100 items-stretch min-h-[420px]"
        >
          {/* Left: Pink Text Block for OUR MOTTO */}
          <div className="bg-[#FDE8E8] p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-pink-100">
            <motion.span variants={fadeUp} className="text-xs md:text-sm font-extrabold tracking-widest uppercase text-[#F95658] mb-3 block">
              OUR MOTTO
            </motion.span>
            <motion.h3 variants={fadeUp} className="text-2xl md:text-4xl font-display font-extrabold text-ink leading-snug">
              Transformation through Education
            </motion.h3>
          </div>

          {/* Right: News & Events Marquee Ticker */}
          <div className="bg-white flex flex-col h-full min-h-[380px]">
            {/* Header */}
            <div className="bg-brand-purple text-white px-6 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5 font-bold text-lg">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow"></span>
                </span>
                <FiBell size={20} />
                <span>News &amp; Events</span>
              </div>
              <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-semibold">Latest Updates</span>
            </div>

            {/* Marquee Content moving bottom to top */}
            <div className="p-4 flex-1 overflow-hidden relative">
              <marquee
                direction="up"
                scrollamount="2"
                scrolldelay="30"
                className="h-[300px] w-full"
                onMouseOver={(e) => e.target.stop()}
                onMouseOut={(e) => e.target.start()}
              >
                <div className="space-y-3.5 py-2">
                  {NEWS_EVENTS.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-brand-leaf/20 border border-brand-leaf/40 hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${item.tagBg}`}>
                          {item.tag}
                        </span>
                      </div>
                      <h4 className="font-bold text-ink text-sm leading-snug hover:text-brand-purple transition-colors">
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-1.5 flex-wrap"
                        >
                          <span>{item.title}</span>
                          {item.isPdf && <FiExternalLink size={14} className="shrink-0 text-brand-purple" />}
                        </a>
                      </h4>
                    </div>
                  ))}
                </div>
              </marquee>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
