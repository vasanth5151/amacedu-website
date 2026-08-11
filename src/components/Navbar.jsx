import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col">
      {/* top utility bar */}
      <div className="bg-brand-green text-white py-2 px-4 md:px-8 text-xs sm:text-sm font-medium w-full flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2">
          <div className="flex items-center gap-1.5">
            <FiMapPin size={14} />
            <span>Perunkozhi Village, Uthiramerur</span>
          </div>
          <span className="hidden sm:inline opacity-50">|</span>
          <a href="mailto:admin@amacedu.edu.in" className="flex items-center gap-1.5 hover:opacity-80">
            <FiMail size={14} />
            <span>admin@amacedu.edu.in</span>
          </a>
          <span className="hidden sm:inline opacity-50">|</span>
          <a href="tel:9042073453" className="flex items-center gap-1.5 hover:opacity-80">
            <FiPhone size={14} />
            <span>9042073453 / 9841172680</span>
          </a>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a href="#careers" className="hover:opacity-80">Careers</a>
          <span className="opacity-50">|</span>
          <a href="#contact" className="hover:opacity-80">Contact us</a>
        </div>
      </div>

      {/* main nav */}
      <div className={`w-full bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <nav className="container-x flex items-center justify-between py-3">

          {/* Left Logo */}
          <a href="#home" className="flex items-center shrink-0">
            <div className="flex flex-col text-[#0056b3]">
              <img src="/amacedu-logo.webp" alt="AMACEDU Logo" className="h-14 sm:h-16 w-auto object-contain" />
            </div>
          </a>

          {/* Center Links */}
          <ul className="hidden xl:flex items-center justify-center gap-6 2xl:gap-8 flex-1 px-4">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="flex items-center gap-1 text-[15px] font-semibold text-ink hover:text-brand-green transition-colors"
                >
                  {l.label}
                  {l.hasDropdown && <FiChevronDown size={16} className="mt-0.5" />}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Logo */}
          <div className="hidden xl:flex items-center shrink-0 text-right pr-2">
            <img src="/group-logo.webp" alt="Group Logo" className="h-12 xl:h-14 w-auto object-contain shrink-0" />
          </div>

          <div className="flex items-center gap-3 xl:hidden">
            <button
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-md bg-cream text-ink"
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </nav>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm xl:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 260 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[80%] max-w-sm flex-col bg-cream p-7 xl:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-extrabold text-[#0056b3]">AMACEDU</span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink"
                  aria-label="Close menu"
                >
                  <FiX size={20} />
                </button>
              </div>
              <ul className="mt-10 flex flex-col gap-2">
                {NAV_LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-semibold text-ink/80 transition hover:bg-white hover:text-ink"
                    >
                      {l.label}
                      {l.hasDropdown && <FiChevronDown size={20} />}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
