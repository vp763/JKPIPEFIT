import { Link } from 'react-router-dom'
import { MapPin, Mail, Smartphone, Phone } from 'lucide-react'

const productLinks = [
  { label: 'Sheets', href: '/products/sheets' },
  { label: 'Plates', href: '/products/plates' },
  { label: 'Pipes & Tubes', href: '/products/pipes-tubes' },
  { label: 'Flanges', href: '/products/flanges' },
  { label: 'Round Bars', href: '/products/round-bars' },
  { label: 'Buttweld Fittings', href: '/products/buttweld-fittings' },
]

const pipeFittingLinks = [
  { label: 'Carbon Steel Pipe Fittings', href: '/products/carbon-steel-pipe-fittings' },
  { label: 'Stainless Steel Pipe Fittings', href: '/products/stainless-steel-pipe-fittings' },
  { label: 'Copper Nickel Pipe Fittings', href: '/products/copper-nickel-pipe-fittings' },
  { label: 'Gunmetal Flanges', href: '/products/gunmetal-flanges' },
  { label: 'Angles & Channels', href: '/products/angles-channels' },
]

const usefulLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Quality Policy', href: '/about-us#quality' },
  { label: 'Certification', href: '/about-us#certificate' },
  { label: 'Application', href: '/about-us#application' },
  { label: 'Contact us', href: '/contact-us' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f0f1a] text-white">
      {/* Main Footer */}
      <div className="auto-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/images/logo.png"
                alt="JK Pipefit LLP"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Leading manufacturer of high-quality pipe fittings, flanges, sheets, plates, and industrial metal products. ISO certified with 30+ years of excellence.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="tel:+919664834661"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c9a227] hover:text-[#0f0f1a] transition-all"
              >
                <Phone size={16} />
              </a>
              <a
                href="mailto:info@jkpipefit.com"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c9a227] hover:text-[#0f0f1a] transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold mb-5 text-white tracking-wide">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 text-sm hover:text-[#c9a227] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pipe Fittings Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold mb-5 text-white tracking-wide">Pipe Fittings</h4>
            <ul className="space-y-3">
              {pipeFittingLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 text-sm hover:text-[#c9a227] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold mb-5 text-white tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#c9a227] mt-0.5 shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Shop No 2, Ground Flr, Plot No 546, Patra Chawl, Pathe Bapurao Marg, Near Gulalwadi Circle, Mumbai - 400004.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Smartphone size={16} className="text-[#c9a227] mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+919664834661" className="text-gray-400 text-sm hover:text-[#c9a227] transition-colors block">
                    +91 9664834661
                  </a>
                  <a href="tel:+918422020534" className="text-gray-400 text-sm hover:text-[#c9a227] transition-colors block">
                    +91 8422020534
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#c9a227] mt-0.5 shrink-0" />
                <a href="mailto:info@jkpipefit.com" className="text-gray-400 text-sm hover:text-[#c9a227] transition-colors">
                  info@jkpipefit.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/5">
        <div className="auto-container py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p>Copyright © 2024 JK Pipefit LLP. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {usefulLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="hover:text-[#c9a227] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
