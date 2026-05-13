import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Ruler, Layers, FileText, Box, Wrench } from 'lucide-react'
import { getProductBySlug } from '../data/products'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = getProductBySlug(slug || '')

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Product Not Found</h2>
          <p className="text-gray-500 mb-6">The product you are looking for does not exist.</p>
          <Link to="/products" className="theme-btn theme-btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Page Title */}
      <section
        className="page-title"
        style={{ backgroundImage: `url(${product.bannerImage})` }}
      >
        <div className="relative z-10 auto-container">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{product.name}</h1>
        </div>
      </section>

      {/* Product Overview */}
      <section className="section-padding bg-white">
        <div className="auto-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="sub-title">Product Details</span>
              <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mb-4 leading-tight">{product.name}</h2>
              <div className="divider mb-6" />
              <p className="text-gray-500 leading-[1.8] mb-8 text-[15px]">{product.description}</p>

              <div className="bg-gray-50/80 rounded-xl p-6 mb-8 border border-gray-100">
                <h3 className="text-base font-bold text-[#1a1a2e] mb-4 flex items-center gap-2">
                  <Ruler size={18} className="text-[#c9a227]" />
                  Specifications
                </h3>
                <ul className="space-y-2.5">
                  {product.specs.map((spec) => (
                    <li key={spec} className="text-sm text-gray-500 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#c9a227] rounded-full mt-1.5 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact-us"
                className="theme-btn theme-btn-primary inline-flex items-center gap-2"
              >
                Enquire Now <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="section-padding bg-gray-50/60">
        <div className="auto-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="sub-title">Available Types</span>
            <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mt-2">
              {product.name} Types
            </h2>
            <div className="divider divider-center mt-4" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {product.types.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="clean-card p-4 flex items-center gap-3"
              >
                <div className="w-9 h-9 bg-[#1a1a2e]/5 rounded-lg flex items-center justify-center shrink-0">
                  <Layers size={16} className="text-[#1a1a2e]" />
                </div>
                <span className="font-medium text-[#1a1a2e] text-sm">{type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grades & Standards */}
      <section className="section-padding bg-white">
        <div className="auto-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-5 flex items-center gap-2">
                <Box size={22} className="text-[#c9a227]" />
                Material Grades
              </h3>
              <div className="divider mb-6" />
              <ul className="space-y-3">
                {product.grades.map((grade) => (
                  <li key={grade} className="text-sm text-gray-500 flex items-start gap-2.5">
                    <CheckCircle size={15} className="text-[#1a1a2e] mt-0.5 shrink-0" />
                    {grade}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-5 flex items-center gap-2">
                <FileText size={22} className="text-[#c9a227]" />
                Standards & Specifications
              </h3>
              <div className="divider mb-6" />
              <div className="flex flex-wrap gap-2 mb-10">
                {product.standards.map((standard) => (
                  <span
                    key={standard}
                    className="bg-[#1a1a2e] text-white text-xs font-semibold px-3 py-1.5 rounded-md"
                  >
                    {standard}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#1a1a2e] mb-5 flex items-center gap-2">
                <Ruler size={22} className="text-[#c9a227]" />
                Sizes Available
              </h3>
              <div className="divider mb-6" />
              <ul className="space-y-2">
                {product.sizes.map((size) => (
                  <li key={size} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#c9a227] rounded-full shrink-0" />
                    {size}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-gray-50/60">
        <div className="auto-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="sub-title">Industries</span>
            <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mt-2">Applications</h2>
            <div className="divider divider-center mt-4" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {product.applications.map((app, index) => (
              <motion.div
                key={app}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="clean-card p-4 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-[#1a1a2e]/5 rounded-full flex items-center justify-center shrink-0">
                  <Wrench size={14} className="text-[#1a1a2e]" />
                </div>
                <span className="font-medium text-[#1a1a2e] text-sm">{app}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="auto-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need {product.name}?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Contact us today for a competitive quote. We offer custom manufacturing to meet your specific requirements.
            </p>
            <Link to="/contact-us" className="theme-btn theme-btn-primary">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
