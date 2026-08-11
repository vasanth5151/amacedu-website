import { motion } from 'framer-motion'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import Reveal from './ui/Reveal'
import { fadeUp } from '../lib/motion'

export default function Motto() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-x">
        <div className="bg-white border border-brand-leaf shadow-card rounded-[2rem] p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Image */}
          <div className="w-full lg:w-1/2 rounded-[1.5rem] overflow-hidden shadow-soft">
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80" 
              alt="Motto of AMACEDU" 
              className="w-full h-[350px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-ink mb-6 text-center lg:text-left">
                Motto of AMACEDU
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-ink/80 text-lg leading-relaxed mb-8">
                The motto of <strong className="text-ink">Arulmigu Meenakshi Amman College of Education (AMACEDU)</strong> reflects our unwavering dedication to excellence in teacher education and holistic development:
              </p>
            </Reveal>

            <ul className="space-y-4 mb-10">
              {['Commitment to Quality Teacher Education', 'Advancing Technological Progress', 'Holistic Personal Transformation'].map((point, idx) => (
                <motion.li 
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  className="flex items-center gap-4 text-ink/80 font-medium text-lg"
                >
                  <span className="text-[#a855f7] font-bold">
                    <FiCheck strokeWidth={3} size={20} />
                  </span>
                  <span className="text-[#4b5563]">{point}</span>
                </motion.li>
              ))}
            </ul>

            <Reveal>
              <button className="btn-primary text-white">
                Read More <FiArrowRight />
              </button>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
