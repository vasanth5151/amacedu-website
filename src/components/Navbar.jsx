import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState({})

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col">
      {/* top utility bar */}
      <div className={`bg-[#F97D81] text-white py-2 px-4 md:px-8 text-xs sm:text-sm font-medium w-full flex-col sm:flex-row items-center justify-between gap-2 transition-all duration-300 ${scrolled ? 'hidden md:flex' : 'flex'}`}>
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
          <Link to="/careers" className="hover:opacity-80">Careers</Link>
          <span className="opacity-50">|</span>
          <Link to="/contact" className="hover:opacity-80">Contact us</Link>
        </div>
      </div>

      {/* main nav */}
      <div className={`w-full bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <nav className="container-x flex items-center justify-between py-2 sm:py-3">

          {/* Left Logo */}
          <div className="flex items-center shrink-0">
            <a href="/" className="flex items-center shrink-0">
              <img src="/amacedu-logo.webp" alt="AMACEDU Logo" className="h-8 sm:h-10 lg:h-13 w-auto object-contain" />
            </a>
          </div>

          {/* Center Links */}
          <ul className="hidden xl:flex items-center justify-center gap-3 2xl:gap-6 flex-1 px-2">
            {NAV_LINKS.map((l) => (
              <li key={l.label} className="relative group">
                <a
                  href={l.href}
                  className="flex items-center gap-1 text-[13px] 2xl:text-[15px] font-semibold text-ink hover:text-[#F97D81] transition-colors py-3"
                >
                  {l.label}
                  {l.hasDropdown && <FiChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform" />}
                </a>
                {l.hasDropdown && l.dropdown && (
                  <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden flex flex-col z-50">
                    {l.dropdown.map((sub, i) => (
                      <a
                        key={i}
                        href={sub.href}
                        target={sub.href.startsWith('http') ? '_blank' : undefined}
                        rel={sub.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="px-5 py-3 text-sm font-semibold text-ink hover:bg-brand-green/10 hover:text-brand-green transition-colors border-b border-gray-50 last:border-0"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Section: Group Logo & Mobile Hamburger Menu */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Right Logo (Visible on mobile & desktop) */}
            <a
              href="https://mat.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center shrink-0"
            >
              <img
                src="/meenakshi-group-logo.png"
                alt="Group Logo"
                className="h-7 sm:h-10 lg:h-14 max-w-[110px] sm:max-w-[180px] lg:max-w-[240px] w-auto object-contain"
              />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setOpen(true)}
              className="xl:hidden flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-[#F97D81] text-white hover:bg-[#e8666a] active:scale-95 transition-all shadow-md shrink-0"
              aria-label="Open menu"
            >
              <FiMenu size={22} />
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
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm xl:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 260 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-white p-6 xl:hidden overflow-y-auto shadow-2xl"
            >
              {/* Header: Group Logo + Close button */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <a href="https://mat.org.in/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex items-center shrink-0">
                  <img src="/meenakshi-group-logo.png" alt="Group Logo" className="h-11 max-w-[190px] w-auto object-contain" />
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  aria-label="Close menu"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Nav links list with interactive accordion dropdowns */}
              <ul className="mt-6 flex flex-col gap-1 flex-1">
                {NAV_LINKS.map((l) => (
                  <li key={l.label} className="flex flex-col border-b border-gray-50 last:border-0 py-1">
                    {l.hasDropdown ? (
                      <button
                        type="button"
                        onClick={() => toggleDropdown(l.label)}
                        className="flex items-center justify-between w-full rounded-xl px-3 py-2.5 text-base font-semibold text-gray-800 transition hover:bg-gray-50 hover:text-[#F97D81]"
                      >
                        <span>{l.label}</span>
                        <FiChevronDown
                          size={18}
                          className={`text-gray-500 transition-transform duration-200 ${
                            openDropdowns[l.label] ? 'rotate-180 text-[#F97D81]' : ''
                          }`}
                        />
                      </button>
                    ) : (
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-xl px-3 py-2.5 text-base font-semibold text-gray-800 transition hover:bg-gray-50 hover:text-[#F97D81]"
                      >
                        {l.label}
                      </a>
                    )}

                    {l.hasDropdown && l.dropdown && openDropdowns[l.label] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col pl-4 my-1 space-y-1 bg-gray-50 rounded-xl p-2"
                      >
                        {l.dropdown.map((sub, i) => (
                          <a
                            key={i}
                            href={sub.href}
                            target={sub.href.startsWith('http') ? '_blank' : undefined}
                            rel={sub.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            onClick={() => setOpen(false)}
                            className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#F97D81] transition-colors rounded-lg hover:bg-white"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
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
