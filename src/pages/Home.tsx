import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, DollarSign, Award, Settings, Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const heroSlides = [
  {
    image: '/images/hero-stainless-carbon.jpg',
    subtitle: 'Manufacturer of',
    title: 'Stainless Steel / Carbon Steel',
    text: 'High-quality Stainless Steel and Carbon Steel Sheets, Plates, Pipes, and Fittings for industrial applications.',
    link: '/products',
  },
  {
    image: '/images/hero-copper-nickel.jpg',
    subtitle: 'Manufacturer of',
    title: 'Copper and Copper Nickel 90/10 and 70/30',
    text: 'Premium Copper Nickel pipe fittings in 90/10 and 70/30 grades for marine and seawater applications.',
    link: '/products/copper-nickel-pipe-fittings',
  },
  {
    image: '/images/hero-gunmetal.jpg',
    subtitle: 'Manufacturer of',
    title: 'Gunmetal Flanges',
    text: 'Durable Gunmetal flanges manufactured to precision for valves, pumps, and piping systems.',
    link: '/products/gunmetal-flanges',
  },
]

const features = [
  {
    icon: CheckCircle,
    title: 'Client Oriented',
    text: 'Immediate Response, Excellent Quality, Quick Delivery, and Customer Satisfaction define JK Pipefit LLP.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Prices',
    text: 'We offer a commendable range of Flanges & Forged Fittings with competitive prices & quality.',
  },
  {
    icon: Award,
    title: 'ISO Certified',
    text: 'ISO certified company manufacturing & exporting the finest quality Pipe Fittings & Flanges.',
  },
  {
    icon: Settings,
    title: 'Core Values',
    text: 'Quality, Integrity, Trust, Safety, and Environment guide our business decisions.',
  },
]

const products = [
  { name: 'Sheets', image: '/images/sheets.jpg', link: '/products/sheets' },
  { name: 'Pipe & Tubes', image: '/images/pipes.jpg', link: '/products/pipes-tubes' },
  { name: 'Plates', image: '/images/plates.jpg', link: '/products/plates' },
  { name: 'Flanges', image: '/images/flanges.jpg', link: '/products/flanges' },
  { name: 'Round Bars', image: '/images/round-bars.jpg', link: '/products/round-bars' },
  { name: 'Buttweld Fittings', image: '/images/buttweld-fittings.jpg', link: '/products/buttweld-fittings' },
  { name: 'Angles & Channels', image: '/images/angles-channels.jpg', link: '/products/angles-channels' },
  { name: 'Copper Nickel', image: '/images/copper-nickel-90-10.jpg', link: '/products/copper-nickel-pipe-fittings' },
]

const pipeFittingProducts = [
  { name: 'Carbon Steel Pipe Fittings', image: '/images/carbon-steel-fittings.jpg', link: '/products/carbon-steel-pipe-fittings' },
  { name: 'Stainless Steel Pipe Fittings', image: '/images/stainless-steel-fittings.jpg', link: '/products/stainless-steel-pipe-fittings' },
  { name: 'Copper Nickel Pipe Fittings', image: '/images/copper-nickel-90-10.jpg', link: '/products/copper-nickel-pipe-fittings' },
  { name: 'Gunmetal Flanges', image: '/images/gunmetal-flanges.jpg', link: '/products/gunmetal-flanges' },
]

const testimonials = [
  {
    text: 'We have been dealing with JK Pipefit LLP for the past 4 years. The Stainless Steel Pipe Fittings supplied by them are of top-notch quality that deliver consistent performance every time.',
    name: 'Deep Mehta',
    role: 'Manager',
  },
  {
    text: 'Ordered Stainless Steel Flange as per a specific drawing from JK Pipefit LLP and got it as per my specification, precise and great quality.',
    name: 'Karan Sharma',
    role: 'Director',
  },
  {
    text: 'We have been doing business with JK Pipefit LLP for more than seven years and we found them as the best overseas supplier due to their price and quality of products.',
    name: 'Sahil Shaikh',
    role: 'Asst. Director',
  },
]

const clients = [
  { name: 'Colourtex', logo: '/images/client-colourtex.png' },
  { name: 'Thirumalai Chemicals', logo: '/images/client-thirumalai.png' },
  { name: 'ACG', logo: '/images/client-acg.png' },
  { name: 'Torrent Power', logo: '/images/client-torrent.png' },
  { name: 'Balmer Lawrie', logo: '/images/client-balmer.png' },
  { name: 'Navin Fluorine', logo: '/images/client-navin.png' },
  { name: 'Larsen & Toubro', logo: '/images/client-lt.png' },
  { name: 'ONGC', logo: '/images/client-ongc.png' },
  { name: 'Vedanta', logo: '/images/client-vedanta.png' },
  { name: 'IOCL', logo: '/images/client-iocl.png' },
  { name: 'BPCL', logo: '/images/client-bpcl.png' },
  { name: 'HPCL', logo: '/images/client-hpcl.png' },
  { name: 'ISRO', logo: '/images/client-isro.png' },
]

const industries = [
  { name: 'Oil and Gas', icon: '⛽' },
  { name: 'Chemical', icon: '⚗️' },
  { name: 'Engineering', icon: '⚙️' },
  { name: 'Power Generation', icon: '⚡' },
  { name: 'Marine', icon: '🚢' },
  { name: 'Pharmaceutical', icon: '💊' },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[520px] md:h-[620px] lg:h-[680px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="hero-slide h-full"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="relative h-full flex items-center">
                <div className="auto-container">
                  <motion.div
                    key={`slide-${index}-${currentSlide}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={index === currentSlide ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="max-w-2xl"
                  >
                    <span className="sub-title text-[#c9a227] mb-3 block">{slide.subtitle}</span>
                    <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-5 leading-[1.15]">
                      {slide.title}
                    </h1>
                    <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg leading-relaxed">{slide.text}</p>
                    <Link to={slide.link} className="theme-btn theme-btn-primary">
                      Explore Products
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all border border-white/10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all border border-white/10"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'bg-[#c9a227] w-8' : 'bg-white/30 w-1.5'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="auto-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-us.jpg"
                  alt="Industrial manufacturing"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-[#1a1a2e]/5 rounded-xl -z-0 hidden lg:block" />
              <div className="absolute -top-5 -left-5 w-28 h-28 bg-[#c9a227]/10 rounded-xl -z-0 hidden lg:block" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="sub-title">About Us</span>
              <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mb-4 leading-tight">
                Manufacturer, Stockists & Exporters of Pipe Fittings & Flanges
              </h2>
              <div className="divider mb-6" />
              <p className="text-gray-500 leading-[1.8] mb-5 text-[15px]">
                As a Manufacturer, Stockists & Exporters, of a diverse range of all kinds of Pipe Fittings and Flanges.
                Our offered products are: Industrial Flanges, Pipe fittings like Elbow, Tee Coupling, Reducer, Union,
                Nipples & Olets like Sockolet, Weldolet, Threadolet, Nippolet, Sweepolet & fasteners in Ferrous &
                Non-Ferrous Metals.
              </p>
              <p className="text-gray-500 leading-[1.8] mb-8 text-[15px]">
                We are also suppliers of Pipes & Tubes, Round Bar, Sheet, Plates & Structural Items etc. We continue
                to work with Private & Government sector like JINDAL, ISRO, NPCIL, DAE, ONGC, IOCL and MRPL etc.
              </p>
              <Link to="/about-us" className="theme-btn theme-btn-primary">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50/60">
        <div className="auto-container">
          <div className="text-center mb-14">
            <span className="sub-title">Why Choose Us</span>
            <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mt-2">
              Products manufactured using high-quality raw materials
            </h2>
            <div className="divider divider-center mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="clean-card p-8"
              >
                <div className="w-12 h-12 bg-[#1a1a2e]/5 rounded-lg flex items-center justify-center mb-5">
                  <feature.icon size={22} className="text-[#1a1a2e]" />
                </div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="auto-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <span className="sub-title">Our Products</span>
              <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mt-2">High Quality Products</h2>
              <div className="divider mt-4" />
            </div>
            <Link to="/products" className="text-[#4a90a4] text-sm font-semibold flex items-center gap-1.5 hover:text-[#1a1a2e] transition-colors">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link to={product.link} className="product-card block bg-white rounded-xl overflow-hidden border border-gray-100">
                  <div className="overflow-hidden aspect-[4/5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image w-full h-full object-cover transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center border-t border-gray-50">
                    <h3 className="font-semibold text-[#1a1a2e] text-sm">{product.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipe Fittings Products */}
      <section className="section-padding bg-gray-50/60">
        <div className="auto-container">
          <div className="text-center mb-12">
            <span className="sub-title">Specialized</span>
            <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mt-2">Pipe Fittings & Flanges</h2>
            <div className="divider divider-center mt-4" />
            <p className="text-gray-500 max-w-xl mx-auto mt-4 text-[15px] leading-relaxed">
              Leading manufacturer of pipe fittings in Carbon Steel, Stainless Steel, Copper Nickel, and Gunmetal grades.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {pipeFittingProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={product.link} className="product-card block bg-white rounded-xl overflow-hidden border border-gray-100">
                  <div className="overflow-hidden aspect-[4/5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image w-full h-full object-cover transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center border-t border-gray-50">
                    <h3 className="font-semibold text-[#1a1a2e] text-sm">{product.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        className="section-padding relative bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/industries-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-[#1a1a2e]/88" />
        <div className="auto-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="sub-title text-[#c9a227]">Industries We Serve</span>
              <h2 className="text-3xl md:text-[2.25rem] font-bold text-white mb-5 leading-tight">
                Applications Across Diverse Sectors
              </h2>
              <div className="divider bg-[#c9a227] mb-6" />
              <p className="text-gray-400 leading-[1.8] mb-8 text-[15px]">
                Our products serve critical needs across Oil & Gas, Chemical, Petrochemical, Power Generation,
                Marine, Pharmaceutical, Food & Beverage, Aerospace, Automotive, Construction, and Mining industries.
              </p>
              <Link to="/about-us#application" className="theme-btn theme-btn-primary">
                View Applications
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 flex flex-col items-center gap-3 text-center border border-white/5 hover:border-[#c9a227]/20 transition-colors"
                >
                  <span className="text-3xl">{industry.icon}</span>
                  <h3 className="text-white font-medium text-sm">{industry.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="auto-container">
          <div className="text-center mb-14">
            <span className="sub-title">Testimonials</span>
            <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mt-2">What Our Clients Say</h2>
            <div className="divider divider-center mt-4" />
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative min-h-[280px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial ? 'opacity-100 visible' : 'opacity-0 invisible absolute inset-0'
                  }`}
                >
                  <div className="testimonial-card text-center">
                    <p className="text-gray-600 text-base italic leading-[1.8] mb-6">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex justify-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="star-rating fill-current" />
                      ))}
                    </div>
                    <p className="font-semibold text-[#1a1a2e]">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    index === currentTestimonial ? 'bg-[#1a1a2e] w-6' : 'bg-gray-300 w-1.5'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-gray-50/60">
        <div className="auto-container">
          <div className="text-center mb-12">
            <span className="sub-title">Trusted By</span>
            <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#1a1a2e] mt-2">Our Valued Clients</h2>
            <div className="divider divider-center mt-4" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="client-logo-card"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  title={client.name}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="auto-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We specialize in custom manufacturing to meet your specific requirements. Contact us today for a competitive quote.
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
