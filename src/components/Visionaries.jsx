import { motion } from 'framer-motion'
import { VISIONARIES } from '../data/content'
import { fadeUp, stagger, viewport } from '../lib/motion'

export default function Visionaries() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="container-x">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl text-ink">
            Leadership Guided by Values, Purpose, and Transformation:
          </h2>
          <div className="mt-8 text-ink/80 text-left space-y-4">
            <p>
              Inspired by Swamy Vivekananda&rsquo;s belief that education is the manifestation of the inherent perfection within every individual, our institution is built on the strong foundation of values, discipline, and purpose. This philosophy is reflected in our guiding motto:
            </p>
            <p className="font-bold text-center text-lg text-brand-green my-4">
              &ldquo;Transformation through Education.&rdquo;
            </p>
            <p>
              Under her leadership, AMACEDU is committed to nurturing educators who are not only academically accomplished but also morally strong, socially responsible, and deeply conscious of their role in shaping society. Her vision continues to drive the institution toward creating meaningful educational impact and lasting societal change.
            </p>
            <p>
              The Meenakshi Ammal Trust stands as one of the pioneering educational organizations originating from Chennai, driven by a deep commitment to social upliftment through education. The Trust was founded by the family of Thiru. A. N. Radhakrishnan, M.A., D.Com. and Tmt. Meenakshi Ammal, the Founder Chairperson, whose vision laid the foundation for an enduring educational movement.
            </p>
            <p>
              Carrying forward this legacy, Tmt. Gomathi Radhakrishnan, along with Thiru. A. N. Radhakrishnan, serves as a co-founder, contributing steadfast leadership and dedication toward expanding access to quality education.
            </p>
            
            <h3 className="font-bold text-xl text-ink mt-6">A Mission Rooted in Educational Empowerment</h3>
            <p>
              The Meenakshi Ammal Trust has consistently demonstrated a generous and socially conscious approach toward promoting higher education, particularly in rural and underserved regions. With a firm belief that education is the most powerful tool for social transformation, the Trust has focused on creating opportunities for students from weaker sections of society.
            </p>
            <p>
              Through the founders&rsquo; earnest efforts, industrious leadership, and munificent vision, the Trust has played a pivotal role in establishing institutions that offer education across diverse disciplines.
            </p>
          </div>
        </div>

        <motion.div
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-7 md:grid-cols-3"
        >
          {VISIONARIES.map((v) => (
            <motion.article
              key={v.name}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-card transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <img
                  src={v.img}
                  alt={v.name}
                  className="h-72 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              </div>
              <div className="px-4 pb-5 pt-5">
                <h3 className="font-display text-lg font-bold text-ink">{v.name}</h3>
                <p className="text-sm font-semibold text-brand-green">{v.role}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
