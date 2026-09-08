@import "tailwindcss";

@theme {
  --color-primary: #1a1a2e;
  --color-primary-dark: #0f0f1a;
  --color-primary-light: #252540;
  --color-accent: #4a90a4;
  --color-accent-hover: #3a7a8e;
  --color-gold: #c9a227;
  --color-gold-light: #ddb94d;
  --color-gunmetal: #2a3439;
  --color-gunmetal-light: #3d4f5f;
  --font-sans: 'Inter', sans-serif;
  --font-display: 'Signika Negative', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  color: #334155;
  background-color: #ffffff;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Signika Negative', sans-serif;
  letter-spacing: -0.02em;
}

.auto-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

@media (min-width: 768px) {
  .auto-container {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .auto-container {
    padding: 0 3rem;
  }
}

@media (min-width: 1280px) {
  .auto-container {
    padding: 0 4rem;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #2a3439;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1a1a2e;
}

/* Hero slide */
.hero-slide {
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-slide::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, rgba(26, 26, 46, 0.92) 0%, rgba(26, 26, 46, 0.5) 50%, rgba(42, 52, 57, 0.3) 100%);
}

/* Divider */
.divider {
  display: block;
  width: 48px;
  height: 3px;
  background: #c9a227;
  margin: 1rem 0;
  border-radius: 2px;
}

.divider-center {
  margin-left: auto;
  margin-right: auto;
}

/* Sub title */
.sub-title {
  display: inline-block;
  color: #4a90a4;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 0.75rem;
}

/* Theme button */
.theme-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2.25rem;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 0.375rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
}

.theme-btn-primary {
  background: #c9a227;
  color: #1a1a2e;
}

.theme-btn-primary:hover {
  background: #ddb94d;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(201, 162, 39, 0.25);
}

.theme-btn-secondary {
  background: #4a90a4;
  color: white;
}

.theme-btn-secondary:hover {
  background: #3a7a8e;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(74, 144, 164, 0.25);
}

/* Page title section */
.page-title {
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 140px 0 100px;
}

.page-title::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(26, 26, 46, 0.82);
}

/* Product card hover */
.product-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

/* Testimonial */
.testimonial-card {
  background: white;
  border-radius: 0.75rem;
  padding: 2.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

/* Navigation dropdown */
.nav-dropdown {
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-item:hover .nav-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Mobile menu */
@media (max-width: 1023px) {
  .nav-dropdown {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    display: none;
    box-shadow: none;
    padding-left: 1rem;
  }
  
  .nav-item.open .nav-dropdown {
    display: block;
  }
}

/* Star rating */
.star-rating {
  color: #c9a227;
}

/* Client logo card */
.client-logo-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}

.client-logo-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
  border-color: rgba(201, 162, 39, 0.2);
}

.client-logo-card img {
  max-height: 48px;
  width: auto;
  object-fit: contain;
}

/* WhatsApp float */
.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.35);
  z-index: 50;
  transition: all 0.3s ease;
}

.whatsapp-float:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45);
}

/* Scroll to top */
.scroll-top {
  position: fixed;
  bottom: 24px;
  right: 92px;
  width: 44px;
  height: 44px;
  background: #1a1a2e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 50;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
}

.scroll-top.visible {
  opacity: 1;
  visibility: visible;
}

.scroll-top:hover {
  background: #4a90a4;
  transform: translateY(-2px);
}

/* Section spacing utility */
.section-padding {
  padding: 5rem 0;
}

@media (min-width: 768px) {
  .section-padding {
    padding: 6rem 0;
  }
}

@media (min-width: 1024px) {
  .section-padding {
    padding: 7rem 0;
  }
}

/* Clean card style */
.clean-card {
  background: white;
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.clean-card:hover {
  border-color: rgba(201, 162, 39, 0.25);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
}

/* Gunmetal accent bg */
.gunmetal-bg {
  background: linear-gradient(135deg, #2a3439 0%, #1e2a30 100%);
}
