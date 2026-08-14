import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { fadeUp, viewport } from '../lib/motion'

export default function ContactMap() {
  return (
    <section id="contact" className="relative h-[600px] w-full mt-20">
      {/* Background Map Placeholder (iframe) */}
      <div className="absolute inset-0 z-0 bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.7110839981524!2d79.804459!3d12.6012831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52e00272cb8197%3A0x8641e80dbba55157!2sArulmigu%20Meenakshi%20Amman%20College%20Of%20Education!5e0!3m2!1sen!2sin!4v1786447697079!5m2!1sen!2sin" 
          className="w-full h-full border-0" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      <div className="container-x h-full relative z-10 flex items-center justify-end">
        {/* Yellow Direction Pointer Graphic (Simulated) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 bg-brand-yellow px-8 py-4 rounded-l-md items-center justify-center shadow-lg"
          style={{ clipPath: 'polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%)', width: '280px', height: '100px' }}
        >
          <div className="text-ink font-extrabold text-2xl uppercase tracking-widest pl-4">AMACEDU</div>
        </motion.div>

        {/* Contact Us Box */}
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={viewport}
          variants={fadeUp}
          className="bg-brand-greenDark w-full max-w-sm rounded-3xl p-8 md:p-10 shadow-2xl text-white relative right-0 lg:right-10"
        >
          <h3 className="text-3xl font-bold mb-8">Contact Us</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-brand-leaf shrink-0 mt-1">
                <FiMapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Address</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Perunkozhi Village,<br/>Uthiramerur,<br/>Kanchipuram District - 603403
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-brand-leaf shrink-0 mt-1">
                <FiPhone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Phone</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  +91 90420 73453<br/>
                  +91 98411 72680
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-brand-leaf shrink-0 mt-1">
                <FiMail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email</h4>
                <p className="text-white/80 text-sm leading-relaxed break-all">
                  admin@amacedu.edu.in
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
