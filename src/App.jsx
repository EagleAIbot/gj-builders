import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  X,
  ChevronRight,
  Menu,
  Home,
  Layers,
  BrickWall,
  Fence,
  Wrench,
  Shield,
  BadgeCheck,
  PoundSterling,
  HeartHandshake,
  Star,
  ArrowDown,
} from 'lucide-react'

function InstagramIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
import { Reveal } from './components/Reveal'
import { Marquee } from './components/Marquee'
import { useAppStore } from './store/useAppStore'
import './App.css'

const PHONE = '07956158041'
const PHONE_DISPLAY = '07956 158041'
const EMAIL = 'gjbuilders15@gmail.com'
const INSTAGRAM = 'https://www.instagram.com/g.j_builders'
const AREAS = 'Northamptonshire, Milton Keynes and surrounding areas'
const HOURS = 'Mon to Fri, 8:00am to 6:00pm. Saturday by appointment.'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const TICKER = [
  'House Extensions',
  'Renovations',
  'Bricklaying',
  'Patios',
  'All Aspects of Construction',
]

const SERVICES = [
  {
    icon: Home,
    title: 'House Extensions',
    desc: 'Creating additional living space tailored to your family\u2019s needs.',
    img: 'images/rear-extension.png',
  },
  {
    icon: Layers,
    title: 'Renovations',
    desc: 'Transforming and improving existing spaces to modern standards.',
    img: 'images/sliding-doors.png',
  },
  {
    icon: BrickWall,
    title: 'Bricklaying',
    desc: 'Professional brickwork completed to a high standard.',
    img: 'images/driveway-stone-wall.png',
  },
  {
    icon: Fence,
    title: 'Patios',
    desc: 'Creating attractive and practical outdoor spaces.',
    img: 'images/patio-garden-room.png',
  },
  {
    icon: Wrench,
    title: 'All Aspects of Construction',
    desc: 'Providing a complete range of construction services for residential projects.',
    img: 'images/extension-structure.png',
  },
]

const WHY_US = [
  { icon: BadgeCheck, title: 'Quality Workmanship', desc: 'Attention to detail and pride in every project.' },
  { icon: Shield, title: 'Reliable Service', desc: 'Professional, dependable, and committed to agreed timelines.' },
  { icon: PoundSterling, title: 'Honest Pricing', desc: 'Clear quotations with no hidden costs.' },
  { icon: HeartHandshake, title: 'Customer Satisfaction', desc: 'Dedicated to exceeding customer expectations.' },
]

const PROCESS = [
  { n: '01', title: 'Enquiry', desc: 'Get in touch by phone, email or the quote form. Tell us what you have in mind.' },
  { n: '02', title: 'Site Visit', desc: 'We visit your property to measure up and understand the full scope of the work.' },
  { n: '03', title: 'Quotation', desc: 'You receive a clear written quotation with everything itemised before any work begins.' },
  { n: '04', title: 'The Build', desc: 'We carry out the work to schedule, keep the site tidy and walk you through the finished job.' },
]

const GALLERY_FILTERS = ['All', 'Extensions', 'Renovations', 'Brickwork', 'Patios']

const GALLERY = [
  { src: 'images/rear-extension.png', alt: 'Completed single-storey rear extension with sliding doors and roof lantern', cat: 'Extensions', tag: 'Single-storey rear extension' },
  { src: 'images/extension-living-room.png', alt: 'Finished extension interior with feature wall, oak flooring and skylights', cat: 'Extensions', tag: 'Extension interior' },
  { src: 'images/extension-skylights.png', alt: 'Vaulted extension ceiling with twin skylights and feature beam', cat: 'Extensions', tag: 'Vaulted ceiling and skylights' },
  { src: 'images/extension-structure.png', alt: 'Steel beam and timber roof structure during an extension build', cat: 'Extensions', tag: 'Extension in progress' },
  { src: 'images/roof-lantern-room.png', alt: 'Renovated room with roof lantern, bifold doors and herringbone flooring', cat: 'Renovations', tag: 'Roof lantern and bifolds' },
  { src: 'images/sliding-doors.png', alt: 'New structural opening with sliding patio doors', cat: 'Renovations', tag: 'Structural opening and sliding doors' },
  { src: 'images/driveway-stone-wall.png', alt: 'Block-paved driveway with natural stone garden wall', cat: 'Brickwork', tag: 'Driveway and stone walling' },
  { src: 'images/patio-garden-room.png', alt: 'Slate patio with railway sleeper planters and garden room', cat: 'Patios', tag: 'Patio and landscaping' },
]

const REVIEWS = [
  { name: 'Sarah Mitchell', text: 'GJ Builders completed our extension on time and to an excellent standard. Communication was clear throughout and the team were respectful of our home.', when: '3 months ago' },
  { name: 'David Thompson', text: 'Professional from start to finish. The quote was detailed and honest, and the finished brickwork looks fantastic. Would highly recommend.', when: '5 months ago' },
  { name: 'Emma Collins', text: 'We had our kitchen and living area renovated and couldn\u2019t be happier. Quality workmanship, tidy site, and a fair price. Will use again.', when: '2 months ago' },
  { name: 'James Wright', text: 'Reliable, skilled, and easy to deal with. Our patio has completely changed how we use the garden. Brilliant job.', when: '4 months ago' },
  { name: 'Helen Parker', text: 'From the initial survey to the final handover, everything was handled professionally. GJ Builders exceeded our expectations.', when: '6 months ago' },
]

const FEATURED_REVIEW = {
  text: 'Honest pricing, no surprises, and great results. The team kept us updated at every stage. Exactly what you want from a local builder.',
  name: 'Mark Stevens',
  when: '1 month ago',
}

const WORK_TYPES = ['House extension', 'Renovation', 'Bricklaying', 'Patio', 'General construction', 'Other / not sure yet']
const CONTACT_METHODS = ['Phone', 'Email', 'Either']
const EMPTY_FORM = { name: '', phone: '', email: '', workType: '', message: '', contactMethod: '' }

const HERO_POINTS = [
  'Fully insured',
  'Free, no-obligation quotes',
  'Local and reliable',
  'Residential specialists',
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState(null)
  const [galleryFilter, setGalleryFilter] = useState('All')
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const [formError, setFormError] = useState(false)
  const heroRef = useRef(null)
  const isReady = useAppStore((s) => s.isReady)

  const filteredGallery = galleryFilter === 'All'
    ? GALLERY
    : GALLERY.filter((g) => g.cat === galleryFilter)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = lightbox !== null || menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox, menuOpen])

  useEffect(() => {
    if (!isReady || !heroRef.current) return
    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo('.hero-eyebrow', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .fromTo('.hero-title-line', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out' }, '-=0.4')
      .fromTo('.hero-sub', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo('.hero-actions', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .fromTo('.hero-points', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')
  }, [isReady])

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormLoading(true)
    setFormError(false)
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, _subject: 'New quote request via gjbuilders.co.uk' }),
      })
      if (res.ok) setFormSubmitted(true)
      else setFormError(true)
    } catch {
      setFormError(true)
    } finally {
      setFormLoading(false)
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app">
      <nav className={`nav${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <div className="nav-inner">
          <a href="#top" className="nav-logo" onClick={closeMenu}>
            <img
              src={scrolled || menuOpen ? 'images/gj-logo-flat.png' : 'images/gj-logo-white.png'}
              alt="GJ Builders - Built on Quality"
              className="nav-logo-img"
            />
          </a>
          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
            ))}
          </div>
          <div className="nav-actions">
            <a href={`tel:+44${PHONE.replace(/^0/, '')}`} className="nav-phone">
              <Phone size={16} /> {PHONE_DISPLAY}
            </a>
            <a href="#quote" className="btn btn-nav">Request a Quote</a>
            <button type="button" className="nav-burger" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div className="nav-mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="nav-mobile-link" onClick={closeMenu}>{link.label}</a>
              ))}
              <a href="#quote" className="btn btn-primary btn-block" onClick={closeMenu}>Request a Free Quote</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <header id="top" className="hero" ref={heroRef}>
        <div className="hero-bg">
          <img src="images/rear-extension.png" alt="" className="hero-bg-img" />
        </div>
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="hero-eyebrow">Built on Quality</p>
          <h1 className="hero-title">
            <span className="hero-title-line">Quality Building Services</span>
            <span className="hero-title-line">You Can Trust</span>
          </h1>
          <p className="hero-sub">
            Experienced local builders delivering high-quality workmanship across every project.
          </p>
          <div className="hero-actions">
            <a href="#quote" className="btn btn-primary btn-lg">
              Request a Free Quote <ArrowRight size={18} />
            </a>
            <a href="#gallery" className="btn btn-ghost btn-lg">
              View Our Work
            </a>
          </div>
        </div>

        <div className="hero-points">
          {HERO_POINTS.map((p) => (
            <div key={p} className="hero-point">
              <CheckCircle2 size={16} />
              <span>{p}</span>
            </div>
          ))}
        </div>

        <a href="#about" className="hero-scroll" aria-label="Scroll down">
          <span>Scroll</span>
          <ArrowDown size={18} />
        </a>
      </header>

      <Marquee items={TICKER} dark />

      <section id="about" className="section about">
        <div className="container">
          <div className="about-grid">
            <Reveal className="about-visual">
              <div className="about-image-main">
                <img src="images/rear-extension.png" alt="Completed single-storey rear extension by GJ Builders" loading="lazy" />
              </div>
            </Reveal>
            <Reveal className="about-copy" delay={0.1}>
              <p className="section-label">About GJ Builders</p>
              <h2 className="section-title">A local building company you can rely on</h2>
              <p className="section-body">
                GJ Builders is a trusted local building company providing professional construction
                services with a commitment to quality, reliability, and customer satisfaction. From
                renovations and extensions to outdoor projects, we take pride in delivering
                exceptional results.
              </p>
              <p className="section-body">
                The company is run by director George James, who oversees every project personally
                from the first site visit through to handover.
              </p>
              <ul className="about-list">
                <li><CheckCircle2 size={18} /> Years of experience across residential projects</li>
                <li><CheckCircle2 size={18} /> Fully insured for your peace of mind</li>
                <li><CheckCircle2 size={18} /> Local, reliable service</li>
                <li><CheckCircle2 size={18} /> Committed to customer satisfaction on every job</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="services" className="section section-dark">
        <div className="container">
          <Reveal className="section-header">
            <p className="section-label section-label-light">Our Services</p>
            <h2 className="section-title section-title-light">What we do</h2>
            <p className="section-sub section-sub-light">Professional construction services for residential projects, managed from first enquiry to final handover.</p>
          </Reveal>
          <div className="services-track">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <article className="service-card">
                  <div className="service-card-bg" style={{ backgroundImage: `url(${s.img})` }} />
                  <div className="service-card-content">
                    <div className="service-icon"><s.icon size={22} strokeWidth={1.5} /></div>
                    <h3 className="service-title">{s.title}</h3>
                    <p className="service-desc">{s.desc}</p>
                    <a href="#quote" className="service-link">Enquire <ChevronRight size={16} /></a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="section">
        <div className="container">
          <Reveal className="section-header">
            <p className="section-label">Why Choose GJ Builders</p>
            <h2 className="section-title">What you can expect from us</h2>
          </Reveal>
          <div className="why-grid">
            {WHY_US.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="why-card">
                  <div className="why-icon"><item.icon size={24} strokeWidth={1.5} /></div>
                  <h3 className="why-title">{item.title}</h3>
                  <p className="why-desc">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section section-grey">
        <div className="container">
          <Reveal className="section-header">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">From enquiry to handover</h2>
          </Reveal>
          <div className="process-track">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <article className="process-step">
                  <span className="process-num">{p.n}</span>
                  <h3 className="process-title">{p.title}</h3>
                  <p className="process-desc">{p.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="container">
          <Reveal className="section-header">
            <p className="section-label">Project Gallery</p>
            <h2 className="section-title">Recent completed work</h2>
            <p className="section-sub">A selection of extensions, renovations, brickwork and patios. Click any image to enlarge.</p>
          </Reveal>

          <Reveal>
            <div className="gallery-filters" role="tablist">
              {GALLERY_FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={galleryFilter === f}
                  className={`gallery-filter${galleryFilter === f ? ' active' : ''}`}
                  onClick={() => setGalleryFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div className="gallery-grid" layout>
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((img, i) => (
                <motion.button
                  key={img.src + img.cat}
                  type="button"
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35 }}
                  className={`gallery-item${i === 0 ? ' gallery-item--hero' : ''}`}
                  onClick={() => setLightbox(img)}
                  aria-label={`View ${img.alt}`}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <span className="gallery-tag">{img.tag}</span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button type="button" className="lightbox-close" aria-label="Close" onClick={() => setLightbox(null)}>
              <X size={24} />
            </button>
            <motion.img
              src={lightbox.src.replace('w=900', 'w=1600')}
              alt={lightbox.alt}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <p className="lightbox-caption">{lightbox.tag}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="reviews" className="section section-dark reviews-section">
        <div className="container">
          <Reveal className="section-header">
            <p className="section-label section-label-light">Google Reviews</p>
            <h2 className="section-title section-title-light">What our customers say</h2>
            <a href="https://www.google.com/search?q=GJ+Builders+reviews" target="_blank" rel="noopener noreferrer" className="reviews-badge">
              <span className="reviews-stars">★★★★★</span>
              <strong>5.0</strong>
              <span>on Google</span>
              <span className="reviews-cta">Read more reviews on Google</span>
            </a>
          </Reveal>

          <div className="reviews-featured">
            <Reveal>
              <blockquote className="review-hero">
                <p>&ldquo;{FEATURED_REVIEW.text}&rdquo;</p>
                <footer>{FEATURED_REVIEW.name} · Google · {FEATURED_REVIEW.when}</footer>
              </blockquote>
            </Reveal>
          </div>

          <div className="reviews-grid">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.06}>
                <article className="review-card">
                  <div className="review-stars">
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                  <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                  <footer className="review-footer">
                    <span className="review-name">{r.name}</span>
                    <span className="review-when">{r.when} · Google</span>
                  </footer>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="section quote-section">
        <div className="container quote-grid">
          <Reveal className="quote-copy">
            <p className="section-label">Free Quote</p>
            <h2 className="section-title">Request Your Free Quote</h2>
            <p className="section-body">
              Tell us about your project and we will get back to you with a clear,
              no-obligation quotation. You can also call us directly to discuss the work.
            </p>
            <a href={`tel:+44${PHONE.replace(/^0/, '')}`} className="quote-call">
              <Phone size={20} />
              <span>Call {PHONE_DISPLAY}</span>
            </a>
            <ul className="quote-trust">
              <li><CheckCircle2 size={18} /> Clear quotations with no hidden costs</li>
              <li><CheckCircle2 size={18} /> Free site visit before we quote</li>
              <li><CheckCircle2 size={18} /> Fully insured</li>
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="quote-form-wrap">
              {!formSubmitted ? (
                <form className="quote-form" onSubmit={handleSubmit}>
                  <h3 className="quote-form-heading">Tell us about your project</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Telephone Number</label>
                      <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Your phone number" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@email.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="workType">Type of Work Required</label>
                    <select id="workType" name="workType" value={formData.workType} onChange={handleChange} required className={formData.workType ? '' : 'placeholder'}>
                      <option value="" disabled>Select the type of work</option>
                      {WORK_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Brief Project Description</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} required placeholder="A short description of the work you would like done" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactMethod">Preferred Contact Method</label>
                    <select id="contactMethod" name="contactMethod" value={formData.contactMethod} onChange={handleChange} required className={formData.contactMethod ? '' : 'placeholder'}>
                      <option value="" disabled>How would you like us to contact you?</option>
                      {CONTACT_METHODS.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={formLoading}>
                    {formLoading ? 'Sending…' : <>Get My Free Quote <ArrowRight size={18} /></>}
                  </button>
                  {formError && <p className="form-error">Sorry, your message could not be sent. Please call or email us directly.</p>}
                </form>
              ) : (
                <div className="form-success">
                  <CheckCircle2 size={52} />
                  <h3>Thank you for contacting GJ Builders.</h3>
                  <p>We&rsquo;ll be in touch shortly.</p>
                  <button type="button" className="btn btn-outline-dark" onClick={() => { setFormSubmitted(false); setFormData(EMPTY_FORM) }}>
                    Send another enquiry
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section section-grey">
        <div className="container contact-grid">
          <Reveal>
            <p className="section-label">Contact</p>
            <h2 className="section-title">Get in touch</h2>
            <p className="section-body">Call or email to discuss your project, or use the quote form above.</p>
          </Reveal>
          <div className="contact-cards">
            {[
              { icon: Phone, label: 'Telephone', value: PHONE_DISPLAY, href: `tel:+44${PHONE.replace(/^0/, '')}` },
              { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: InstagramIcon, label: 'Instagram', value: '@g.j_builders', href: INSTAGRAM },
              { icon: MapPin, label: 'Areas covered', value: AREAS },
              { icon: Clock, label: 'Business hours', value: HOURS },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06}>
                {c.href ? (
                  <a href={c.href} className="contact-card">
                    <c.icon size={22} />
                    <div>
                      <span className="contact-label">{c.label}</span>
                      <span className="contact-value">{c.value}</span>
                    </div>
                  </a>
                ) : (
                  <div className="contact-card contact-card-static">
                    <c.icon size={22} />
                    <div>
                      <span className="contact-label">{c.label}</span>
                      <span className="contact-value">{c.value}</span>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="images/gj-logo-white.png" alt="GJ Builders - Built on Quality" className="footer-logo-img" />
            <p>Professional building services for extensions, renovations, bricklaying and patios.</p>
          </div>
          <div className="footer-col">
            <h4>Quick links</h4>
            <ul>
              {NAV_LINKS.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
              <li><a href="#quote">Request a quote</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href={`tel:+44${PHONE.replace(/^0/, '')}`}>{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@g.j_builders</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>© {new Date().getFullYear()} GJ Builders. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a href={`tel:+44${PHONE.replace(/^0/, '')}`} className="sticky-call">
        <Phone size={20} />
        <span>Call Now</span>
      </a>
    </div>
  )
}

export default App
