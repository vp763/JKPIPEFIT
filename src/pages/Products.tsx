import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Box } from 'lucide-react'
import { getAllProducts } from '../data/products'

const allProducts = getAllProducts()

const materials = [
  'Stainless Steel', 'Duplex Steel', 'Super Duplex Steel', 'SMO 254',
  'Inconel', 'Monel', 'Hastelloy', 'Nickel Alloy',
  'Titanium', 'Carbon Steel', 'Copper Nickel', 'Alloy Steel', 'Gunmetal',
]

export default function Products() {
  return (
    <div>
      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/images/hero-pipes.jpg)' }}>
        <div className="relative z-10 auto-container">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Products</h1>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gray-50/60">
        <div className="auto-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="sub-title">Our Range</span>
            <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mt-2">Industrial and Piping Products</h2>
            <div className="divider divider-center mt-4" />
            <p className="text-gray-500 max-w-xl mx-auto mt-4 text-[15px] leading-relaxed">
              JK Pipefit LLP is a leading manufacturer of high-quality industrial and piping products in various materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.shortDescription}</p>
                  <ul className="space-y-1.5 mb-5">
                    {product.specs.slice(0, 3).map((spec) => (
                      <li key={spec} className="text-xs text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#c9a227] rounded-full shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#1a1a2e] font-semibold text-sm hover:text-[#c9a227] transition-colors"
                  >
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section-padding bg-white">
        <div className="auto-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="sub-title">Materials</span>
            <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mt-2">Materials We Work With</h2>
            <div className="divider divider-center mt-4" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {materials.map((material, index) => (
              <motion.div
                key={material}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="bg-[#1a1a2e] rounded-lg py-3.5 px-4 text-center text-white hover:bg-[#2a3439] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Box size={14} className="text-[#c9a227] shrink-0" />
                <p className="font-medium text-xs">{material}</p>
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
              Need a Custom Solution?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We specialize in custom manufacturing to meet your specific requirements. Contact us today for a quote.
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
