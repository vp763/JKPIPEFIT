import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, Truck, DollarSign, Headphones, Briefcase, Award } from 'lucide-react'

const differentiators = [
  {
    icon: CheckCircle,
    title: 'Exceptional Quality',
    text: 'We source only the finest raw materials from world-class producers, ensuring unmatched product quality.',
  },
  {
    icon: Truck,
    title: 'Prompt Deliveries',
    text: 'Our efficient supply chain management guarantees timely deliveries for every order.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Prices',
    text: 'Quality should not come at a premium. We offer the best prices without compromising quality.',
  },
  {
    icon: Headphones,
    title: 'Customer Service',
    text: 'We are more than a manufacturer; we are a partner in your success.',
  },
  {
    icon: Briefcase,
    title: 'Industry Expertise',
    text: 'Deep understanding of diverse industries from engineering to oil & gas.',
  },
]

const certificates = [
  'ISO 9001:2015',
  'PED 2014/68/EU',
  'AD 2000 Merkblatt W0',
  'NACE MR0175',
]

const applications = [
  'Oil and Gas', 'Chemical', 'Petrochemical', 'Power Generation',
  'Nuclear', 'Marine', 'Pharmaceutical', 'Food and Beverage',
  'Aerospace', 'Automotive', 'Construction', 'Mining',
]

export default function About() {
  return (
    <div>
      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/images/hero-sheets.jpg)' }}>
        <div className="relative z-10 auto-container">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="auto-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="sub-title">About Us</span>
                <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mb-4 leading-tight">JK Pipefit LLP</h2>
                <div className="divider mb-6" />

                <p className="text-gray-500 leading-[1.8] mb-5 text-[15px]">
                  JK Pipefit LLP has been a trusted name for over three decades, established in 1992. With years of
                  experience and a commitment to excellence, we consistently deliver top-notch products and services to
                  various industries.
                </p>

                <p className="text-gray-500 leading-[1.8] mb-8 text-[15px]">
                  We are a proud manufacturer and exporter of Stainless Steel, High Nickel Alloy, and Duplex
                  Steel Products in various forms like Sheets, Plates, Coils, Bars, Pipes, and Tubes, Butt Weld
                  Fittings, Forged Fittings, Flanges, and Fasteners.
                </p>

                <h3 className="text-xl font-bold text-[#1a1a2e] mb-6">What Sets Us Apart</h3>

                <div className="space-y-5">
                  {differentiators.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="flex gap-4 p-4 rounded-lg bg-gray-50/60 border border-gray-100"
                    >
                      <div className="w-11 h-11 bg-[#1a1a2e]/5 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon size={20} className="text-[#1a1a2e]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1a1a2e] mb-0.5 text-sm">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="sticky top-28">
                <div className="rounded-xl overflow-hidden shadow-xl border border-gray-100 mb-8">
                  <img
                    src="/images/about-us.jpg"
                    alt="Manufacturing machinery"
                    className="w-full"
                  />
                </div>

                <div className="bg-[#1a1a2e] rounded-xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-5 text-[#c9a227]">Quick Contact</h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-300">
                      <strong className="text-white">Phone:</strong>{' '}
                      <a href="tel:+919664834661" className="hover:text-[#c9a227] transition-colors">
                        +91 9664834661
                      </a>
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Phone:</strong>{' '}
                      <a href="tel:+918422020534" className="hover:text-[#c9a227] transition-colors">
                        +91 8422020534
                      </a>
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Email:</strong>{' '}
                      <a href="mailto:info@jkpipefit.com" className="hover:text-[#c9a227] transition-colors">
                        info@jkpipefit.com
                      </a>
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Address:</strong> Shop No 2, Ground Flr, Plot No 546, Patra Chawl, Pathe Bapurao Marg, Mumbai - 400004.
                    </p>
                  </div>
                  <Link
                    to="/contact-us"
                    className="theme-btn theme-btn-primary mt-6 w-full text-center block"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="section-padding bg-gray-50/60">
        <div className="auto-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="sub-title">Quality Policy</span>
            <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mb-4">Our Commitment to Quality</h2>
            <div className="divider divider-center mb-8" />
            <p className="text-gray-500 leading-[1.8] mb-6 text-[15px]">
              At JK Pipefit LLP, quality is not just a goal but a way of life. We have implemented a comprehensive
              quality management system covering every aspect of operations from raw material procurement to final delivery.
            </p>
            <p className="text-gray-500 leading-[1.8] mb-10 text-[15px]">
              We invest in state-of-the-art testing equipment and regularly train our staff on the latest quality
              assurance techniques.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {certificates.map((cert) => (
                <div
                  key={cert}
                  className="clean-card p-5 text-center"
                >
                  <CheckCircle size={22} className="text-[#1a1a2e] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-[#1a1a2e]">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Section */}
      <section id="certificate" className="section-padding bg-white">
        <div className="auto-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="sub-title">Certifications</span>
            <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mb-4">Our Certifications</h2>
            <div className="divider divider-center mb-8" />
            <p className="text-gray-500 max-w-xl mx-auto text-[15px] leading-relaxed">
              We hold multiple international certifications demonstrating our commitment to quality, safety, and environmental responsibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { title: 'ISO 9001:2015', desc: 'Quality Management System' },
              { title: 'ISO 14001:2015', desc: 'Environmental Management' },
              { title: 'OHSAS 18001:2007', desc: 'Occupational Health & Safety' },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-[#1a1a2e] rounded-xl p-8 text-center text-white"
              >
                <Award size={36} className="text-[#c9a227] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="application" className="section-padding bg-gray-50/60">
        <div className="auto-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="sub-title">Industries We Serve</span>
            <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mb-4">Applications</h2>
            <div className="divider divider-center mb-8" />
            <p className="text-gray-500 max-w-xl mx-auto text-[15px] leading-relaxed">
              Our products find applications across a wide range of industries worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {applications.map((app, index) => (
              <motion.div
                key={app}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="clean-card p-4 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-[#1a1a2e]/5 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle size={14} className="text-[#1a1a2e]" />
                </div>
                <span className="text-sm font-medium text-[#1a1a2e]">{app}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
