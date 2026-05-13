import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Company',
    href: '#',
    children: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Quality', href: '/about-us#quality' },
      { label: 'Certificate', href: '/about-us#certificate' },
      { label: 'Application', href: '/about-us#application' },
    ],
  },
  {
    label: 'Products',
    href: '#',
    children: [
      { label: 'Sheets', href: '/products/sheets' },
      { label: 'Plates', href: '/products/plates' },
      { label: 'Pipes & Tubes', href: '/products/pipes-tubes' },
      { label: 'Flanges', href: '/products/flanges' },
      { label: 'Round Bars', href: '/products/round-bars' },
      { label: 'Buttweld Fittings', href: '/products/buttweld-fittings' },
      { label: 'Angles & Channels', href: '/products/angles-channels' },
      { label: 'Carbon Steel Pipe Fittings', href: '/products/carbon-steel-pipe-fittings' },
      { label: 'Stainless Steel Pipe Fittings', href: '/products/stainless-steel-pipe-fittings' },
      { label: 'Copper Nickel Pipe Fittings', href: '/products/copper-nickel-pipe-fittings' },
      { label: 'Gunmetal Flanges', href: '/products/gunmetal-flanges' },
    ],
  },
  {
    label: 'Materials',
    href: '#',
    children: [
      { label: 'Stainless Steel', href: '/products' },
      { label: 'Duplex Steel', href: '/products' },
      { label: 'Super Duplex Steel', href: '/products' },
      { label: 'SMO 254', href: '/products' },
      { label: 'Inconel', href: '/products' },
      { label: 'Monel', href: '/products' },
      { label: 'Hastelloy', href: '/products' },
      { label: 'Nickel Alloy', href: '/products' },
      { label: 'Titanium', href: '/products' },
      { label: 'Carbon Steel', href: '/products' },
      { label: 'Copper Nickel', href: '/products' },
      { label: 'Gunmetal', href: '/products' },
    ],
  },
  { label: 'Contact Us', href: '/contact-us' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location])

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="bg-[#0f0f1a] text-white py-2 hidden md:block">
        <div className="auto-container">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <span className="text-gray-400">Manufacturer of Pipe Fittings & Flanges</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+919664834661" className="flex items-center gap-1.5 hover:text-[#c9a227] transition-colors">
                <Phone size={12} />
                <span>+91 9664834661</span>
              </a>
              <a href="tel:+918422020534" className="flex items-center gap-1.5 hover:text-[#c9a227] transition-colors">
                <Phone size={12} />
                <span>+91 8422020534</span>
              </a>
              <a href="mailto:info@jkpipefit.com" className="flex items-center gap-1.5 hover:text-[#c9a227] transition-colors">
                <Mail size={12} />
                <span>info@jkpipefit.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`transition-all duration-300 ${
          scrolled ? 'fixed top-0 left-0 right-0 bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="auto-container">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="JK Pipefit LLP"
                className="h-11 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative nav-item"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.children ? (
                    <button className="flex items-center gap-1 px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-[#1a1a2e] transition-colors tracking-wide">
                      {item.label}
                      <ChevronDown size={13} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                        location.pathname === item.href
                          ? 'text-[#1a1a2e]'
                          : 'text-gray-600 hover:text-[#1a1a2e]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.children && (
                    <div
                      className={`nav-dropdown absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[260px] border border-gray-100/80 max-h-[70vh] overflow-y-auto ${
                        openDropdown === item.label ? 'opacity-100 visible translate-y-0' : ''
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-[13px] text-gray-500 hover:text-[#1a1a2e] hover:bg-gray-50/80 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <Link
                to="/contact-us"
                className="bg-[#1a1a2e] text-white text-xs font-semibold px-5 py-2.5 rounded-md hover:bg-[#c9a227] hover:text-[#1a1a2e] transition-all duration-300"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#1a1a2e]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <div className="auto-container py-4 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-gray-100 last:border-0">
                    {item.children ? (
                      <div className={`nav-item ${openDropdown === item.label ? 'open' : ''}`}>
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === item.label ? null : item.label)
                          }
                          className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-700"
                        >
                          {item.label}
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${
                              openDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-2 pl-4">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    to={child.href}
                                    className="block py-2 text-sm text-gray-500 hover:text-[#1a1a2e]"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block py-3 text-sm font-medium text-gray-700 hover:text-[#1a1a2e]"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-sm">
                  <a href="tel:+919664834661" className="flex items-center gap-2 text-gray-600">
                    <Phone size={14} className="text-[#1a1a2e]" />
                    +91 9664834661
                  </a>
                  <a href="tel:+918422020534" className="flex items-center gap-2 text-gray-600">
                    <Phone size={14} className="text-[#1a1a2e]" />
                    +91 8422020534
                  </a>
                  <a href="mailto:info@jkpipefit.com" className="flex items-center gap-2 text-gray-600">
                    <Mail size={14} className="text-[#1a1a2e]" />
                    info@jkpipefit.com
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
