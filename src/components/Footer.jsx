import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiYoutube, FiMapPin, FiPhone, FiMail, FiArrowUp } from 'react-icons/fi';


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#e0f2fe]/60 to-[#f0fdf4]/60 border-t border-gray-100">
      {/* Background Texture Overlay (Optional, gives a subtle grunge/paper effect if combined with CSS, here simulated via gradients) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="container-x py-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-12 md:gap-8 relative z-10">

          {/* Left Side: Logo and Socials */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-8">
            <div>
              <img src="/amacedu-footer-logo.webp" alt="AMACEDU Footer Logo" />
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/people/Arulmigu-Meenakshi-Amman-College-Of-Education/61581166913347/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded border border-[#8B5CF6]/40 text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-colors bg-white" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/amac_edu/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded border border-[#8B5CF6]/40 text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-colors bg-white" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
              <a href="https://x.com/amacedu_edu" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded border border-[#8B5CF6]/40 text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-colors bg-white" aria-label="X">
                <FiTwitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/arulmigu-meenakshi-amman-college-of-educations/?viewAsMember=true" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded border border-[#8B5CF6]/40 text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-colors bg-white" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@amacedu" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded border border-[#8B5CF6]/40 text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-colors bg-white" aria-label="YouTube">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Box */}
          <div className="w-full md:w-[450px] bg-[#F97D81] text-white p-10 rounded-sm shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-black">Get in Touch</h3>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 text-black/80">
                <div className="mt-1 text-[#C6F6D5]">
                  <FiMapPin size={24} fill="#C6F6D5" className="text-[#C6F6D5]" />
                </div>
                <p className="leading-relaxed">
                  Perunkozhi Village, Uthiramerur TK,<br />
                  Kancheepuram District, TamilNadu<br />
                  Pin Code - 603406
                </p>
              </div>

              <div className="flex items-center gap-4 text-black/80">
                <div className="text-[#C6F6D5]">
                  <FiPhone size={24} fill="#C6F6D5" className="text-[#C6F6D5]" />
                </div>
                <p>9042073453 / 9841172680</p>
              </div>

              <div className="flex items-center gap-4 text-black/80">
                <div className="text-[#C6F6D5]">
                  <FiMail size={24} fill="#C6F6D5" className="text-[#C6F6D5]" />
                </div>
                <p>admin@amacedu.edu.in</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */ }
  <div className="border-t border-gray-200 bg-transparent relative z-10">
    <div className="container-x py-4 flex justify-center items-center">
      <p className="text-gray-600 text-sm">
        Copyright &copy; 2026 <span className="font-semibold text-gray-800">Arulmigu Meenakshi Amman College of Education</span> , All Rights Reserved.
      </p>
    </div>
  </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border-2 border-[#8B5CF6]/40 text-[#8B5CF6] flex items-center justify-center hover:bg-[#8B5CF6] hover:text-white transition-colors bg-white/80 backdrop-blur-sm shadow-lg"
        aria-label="Back to top"
      >
        <FiArrowUp size={24} />
      </button>
    </footer >
  );
}
