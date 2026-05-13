import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Smartphone, Mail, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div>
      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/images/contact-banner.jpg)' }}>
        <div className="relative z-10 auto-container">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="auto-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="sub-title">Get in Touch</span>
              <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mb-4 leading-tight">
                Contact Information
              </h2>
              <div className="divider mb-8" />

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/80 border border-gray-100">
                  <div className="w-11 h-11 bg-[#1a1a2e]/5 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#1a1a2e]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-1 text-sm">Head Office</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Shop No 2, Ground Flr, Plot No 546, Patra Chawl, Pathe Bapurao Marg, Near Gulalwadi Circle, Mumbai – 400004.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/80 border border-gray-100">
                  <div className="w-11 h-11 bg-[#1a1a2e]/5 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#1a1a2e]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-1 text-sm">Phone</h4>
                    <p className="text-gray-500 text-sm">
                      <a href="tel:+912223872212" className="hover:text-[#1a1a2e] transition-colors">+91 22 23872212</a>
                      {' | '}
                      <a href="tel:+912266362696" className="hover:text-[#1a1a2e] transition-colors">+91 22 66362696</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/80 border border-gray-100">
                  <div className="w-11 h-11 bg-[#1a1a2e]/5 rounded-lg flex items-center justify-center shrink-0">
                    <Smartphone size={18} className="text-[#1a1a2e]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-1 text-sm">Mobile</h4>
                    <p className="text-gray-500 text-sm">
                      <a href="tel:+919664834661" className="hover:text-[#1a1a2e] transition-colors block">+91 9664834661</a>
                      <a href="tel:+918422020534" className="hover:text-[#1a1a2e] transition-colors block">+91 8422020534</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/80 border border-gray-100">
                  <div className="w-11 h-11 bg-[#1a1a2e]/5 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#1a1a2e]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-1 text-sm">Email</h4>
                    <a href="mailto:info@jkpipefit.com" className="text-gray-500 text-sm hover:text-[#1a1a2e] transition-colors">
                      info@jkpipefit.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-gray-50/80 rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-6">Send us a Message</h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle size={44} className="text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-[#1a1a2e] mb-2">Thank You!</h4>
                    <p className="text-gray-500">Your message has been sent successfully. We will get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a1a2e]/10 focus:border-[#1a1a2e] outline-none transition-colors text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a1a2e]/10 focus:border-[#1a1a2e] outline-none transition-colors text-sm"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a1a2e]/10 focus:border-[#1a1a2e] outline-none transition-colors text-sm"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Subject</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a1a2e]/10 focus:border-[#1a1a2e] outline-none transition-colors text-sm"
                        >
                          <option value="">Select a subject</option>
                          <option value="sheets">Sheets Inquiry</option>
                          <option value="plates">Plates Inquiry</option>
                          <option value="pipes">Pipes & Tubes Inquiry</option>
                          <option value="flanges">Flanges Inquiry</option>
                          <option value="round-bars">Round Bars Inquiry</option>
                          <option value="fittings">Buttweld Fittings Inquiry</option>
                          <option value="angles">Angles & Channels Inquiry</option>
                          <option value="carbon-steel">Carbon Steel Pipe Fittings</option>
                          <option value="stainless-steel">Stainless Steel Pipe Fittings</option>
                          <option value="copper-nickel">Copper Nickel Pipe Fittings</option>
                          <option value="gunmetal">Gunmetal Flanges</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Your Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a1a2e]/10 focus:border-[#1a1a2e] outline-none transition-colors resize-none text-sm"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="theme-btn theme-btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <Send size={14} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
