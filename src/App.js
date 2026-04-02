import React, { useEffect } from 'react';
import { NavLink, Route, Routes, useParams, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './App.css';

const services = [
  {
    slug: 'ai-automation-systems',
    title: 'AI Automation Systems',
    tagline: 'Core intelligence layer',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: '⚙️',
    includes: ['AI Calling Agents', 'AI Chatbots', 'Workflow automation', 'Business process automation'],
    shortLine: 'Automate your business operations with intelligent AI systems.',
    detail: 'We design and deploy intelligent automation systems that handle repetitive tasks with speed and accuracy. Our solutions minimize human error, optimize resource allocation, and ensure 24/7 operational continuity. We build robust systems that scale with your business while reducing operational costs significantly.',
    techStack: ['Python', 'TensorFlow', 'OpenAI', 'AWS']
  },
  {
    slug: 'crm-growth-systems',
    title: 'CRM & Growth Systems',
    tagline: 'Revenue + lead management',
    image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: '📈',
    includes: ['CRM development', 'Lead management', 'Sales funnel automation', 'Meta Ads integration'],
    shortLine: 'Manage, nurture, and convert leads with powerful CRM solutions.',
    detail: 'Our CRM and growth systems unify your lead journey from acquisition to conversion. We implement tailored strategies that provide deep insights into client behaviors, automate follow-ups, and ensure no lead falls through the cracks, maximizing your ROI and scaling your revenue predictably.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'HubSpot']
  },
  {
    slug: 'on-demand-web-mobile-applications',
    title: 'Web & Mobile Apps',
    tagline: 'Custom tech builds',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: '💻',
    includes: ['Web applications', 'Mobile apps', 'SaaS platforms', 'Fully AI-integrated systems'],
    shortLine: 'Build scalable web and mobile apps tailored to your business needs.',
    detail: 'We craft custom applications that are secure, scalable, and user-friendly. Our development team focuses on creating intuitive interfaces backed by powerful and high-performance server architectures, ensuring a seamless experience for your end users on any device, anywhere in the world.',
    techStack: ['Next.js', 'React Native', 'MongoDB', 'Docker']
  },
  {
    slug: 'ecommerce-digital-platforms',
    title: 'E-commerce Platforms',
    tagline: 'Business platforms',
    image: 'https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: '🛒',
    includes: ['E-commerce websites', 'Payment integrations', 'Automation in sales & operations'],
    shortLine: 'Launch and scale your online business with automated platforms.',
    detail: 'We build robust e-commerce and digital business platforms with seamless checkout and automation. From inventory synchronization to dynamic pricing models, our solutions are designed to handle high transaction volumes effortlessly while providing a frictionless shopping experience for your customers.',
    techStack: ['Shopify', 'Stripe', 'Node.js', 'Redis']
  }
];

const processSteps = [
  { step: '01', title: 'Initial Consultation', description: 'Discuss your business goals and needs during a personalized consultation.', icon: '💬' },
  { step: '02', title: 'Strategy Development', description: 'We create a tailored digital plan designed to meet your objectives.', icon: '📝' },
  { step: '03', title: 'Plan Implementation', description: 'Execute customized strategies with our proactive support.', icon: '⚙️' },
  { step: '04', title: 'Ongoing Monitoring', description: 'Regular reviews and adjustments to ensure sustained growth.', icon: '🔍' }
];

const products = [
  {
    slug: 'ai-lead-generation',
    title: 'AI Lead Gen Tool',
    tagline: 'Smart Prospecting',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: '🤖',
    includes: ['Automated outreach', 'Lead scoring', 'Data enrichment', 'CRM syncing'],
    shortLine: 'Discover and qualify leads automatically with AI.',
    detail: 'Our AI Lead Generation tool helps you find the right prospects and engages with them intelligently, saving you hours of manual prospecting.'
  },
  {
    slug: 'workflow-automator',
    title: 'Workflow Automator',
    tagline: 'Process Efficiency',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: '⚡',
    includes: ['Drag-and-drop builder', 'API integrations', 'Real-time monitoring', 'Error handling'],
    shortLine: 'Connect your apps and automate workflows without coding.',
    detail: 'Optimize your business operations by automating repetitive tasks and syncing data seamlessly across all your digital platforms.'
  },
  {
    slug: 'smart-chatbot',
    title: 'Smart AI Chatbot',
    tagline: '24/7 Support',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: '💬',
    includes: ['NLP understanding', 'Seamless human handoff', 'Multilingual support', 'Knowledge base integration'],
    shortLine: 'Provide instant support to your customers at any time.',
    detail: 'Improve customer satisfaction with an AI chatbot that resolves queries instantly and accurately, 24/7.'
  }
];

const testimonials = [
  { name: 'Sarah Jenkins', role: 'CEO at TechFlow', text: "Overminds completely transformed our sales process. Their custom CRM integration saved us 20 hours a week.", rating: 5 },
  { name: 'Marcus Chen', role: 'Founder, CloudSync', text: "The AI chatbot they developed handles 80% of our customer queries instantly. Absolutely game-changing.", rating: 5 },
  { name: 'Emily Rodriguez', role: 'Director of Ops', text: "Professional, fast, and incredibly knowledgeable. The web application they built for us is flawless.", rating: 5 }
];

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Google Cloud', icon: '⛅' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Next.js', icon: '▲' }
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Navbar() {
  return (
    <>
      <div className="topbar-shell">
        <div className="container topbar">
          <div className="topbar-left">
            <span>✉️ overminds@gmail.com</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Phone size={14} /> +91 7666782771</span>
          </div>
          <div className="topbar-right" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <a href="#linkedin" aria-label="LinkedIn" style={{ display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="#instagram" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="#facebook" aria-label="Facebook" style={{ display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
          </div>
        </div>
      </div>
      <header className="nav-shell">
        <div className="container nav">
          <NavLink to="/" className="brand">
            <img src="/overminds_new.png" alt="Overminds" />
          </NavLink>
          <div className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>

        </div>
      </header>
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero" style={{ 
      backgroundImage: `url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(7, 59, 76, 0.45) 0%, rgba(7, 59, 76, 0.2) 100%)', zIndex: 0 }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content">
          <span className="chip" style={{ background: 'rgba(255, 209, 102, 0.2)', color: 'var(--c-yellow)', borderColor: 'rgba(255, 209, 102, 0.4)' }}>Innovate. Automate. Accelerate.</span>
          <h1 style={{ color: '#fff' }}>Professional technology services to scale your company faster</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Overminds designs and builds digital systems that improve productivity, customer experience, and long-term growth.</p>
          <NavLink to="/contact" className="btn" style={{ marginTop: '0.5rem' }}>Start Your Journey Today &nbsp;➔</NavLink>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <div className="container">
      <div className="hero-stats">
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div>
            <h3>150+ Projects</h3>
            <p>Delivered across web and automation platforms.</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div>
            <h3>95% Satisfaction</h3>
            <p>Achieved through consistent delivery quality.</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🛡️</div>
          <div>
            <h3>24/7 Support</h3>
            <p>Operational support and monitoring.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="section">
      <div className="container about-wrap">
        <div className="about-img">
          <div className="about-shape"></div>
          <img src="https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Team" />
        </div>
        <div className="about-content">
          <span className="chip">About Overminds</span>
          <h2>Committed to Your Digital Success and Scalability</h2>
          <p>We are a multidisciplinary technology partner focused on helping teams launch faster, automate smarter, and scale with confidence.</p>
          <ul className="check-list">
            <li>Client-First Mindset designed for outcomes</li>
            <li>End-to-End Delivery from plan to execution</li>
            <li>Smarter systems to reduce repetitive work</li>
          </ul>
          <NavLink to="/about" className="btn btn-secondary about-btn">Learn More About Us</NavLink>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="section-header">
          <span className="chip">Our Solutions</span>
          <h2>Our Core Services</h2>
          <p>We combine technology, automation, and execution discipline to help you scale revenue and improve operational efficiency.</p>
        </div>
        <div className="services-grid four-cols">
          {services.map((s) => (
            <div className="service-card" key={s.slug}>
              <div className="service-img">
                <img src={s.image} alt={s.title} />
                <div className="service-icon">{s.icon}</div>
              </div>
              <div className="service-body">
                <h3>{s.title}</h3>
                <p>{s.shortLine}</p>
                <NavLink to={`/services/${s.slug}`} className="service-link">Read More ➔</NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="chip">Work Process</span>
          <h2>How We Operate</h2>
        </div>
        <div className="process-wrap">
          {processSteps.map((p, idx) => (
            <div className="process-step-item" key={idx}>
              <div className="p-icon">
                {p.icon}
                <div className="p-num">{p.step}</div>
              </div>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="section-header">
          <span className="chip">Our Portfolio</span>
          <h2>Our Products</h2>
          <p>Explore our ready-to-use software products designed to jumpstart your business transformation.</p>
        </div>
        <div className="services-grid">
          {products.map((p) => (
            <div className="service-card" key={p.slug}>
              <div className="service-img">
                <img src={p.image} alt={p.title} />
                <div className="service-icon">{p.icon}</div>
              </div>
              <div className="service-body">
                <h3>{p.title}</h3>
                <p>{p.shortLine}</p>
                <NavLink to={`/products/${p.slug}`} className="service-link">View Product ➔</NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-header">
          <span className="chip">Testimonials</span>
          <h2>What Our Clients Say</h2>
          <p>Read how our digital solutions have driven real-world results for our partners.</p>
        </div>
        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {testimonials.map((t, idx) => (
            <div className="service-card" key={idx} style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left', background: '#fff', borderTop: '4px solid var(--c-teal)', boxShadow: '0 12px 35px rgba(0,0,0,0.08)', borderRadius: '12px', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 45px rgba(0,0,0,0.12)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.08)'; }}>
              <div style={{ color: '#FFD166', letterSpacing: '4px', fontSize: '1.4rem' }}>
                {'★'.repeat(t.rating)}
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.7', flex: 1, margin: 0 }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ width: '50px', height: '50px', background: 'var(--bg-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'var(--c-navy)', fontWeight: 'bold' }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ margin: 0, color: 'var(--c-navy)', fontSize: '1rem' }}>{t.name}</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackMarquee() {
  const scrollItems = [...techStack, ...techStack, ...techStack, ...techStack];
  return (
    <div className="marquee-shell" style={{ background: '#fff' }}>
      <div className="marquee-content">
        {scrollItems.map((tech, idx) => (
          <div className="tech-item" key={idx}>
            <span style={{ fontSize: '2.5rem' }}>{tech.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactBlock() {
  return (
    <section className="section bg-light contact-block-sec" style={{ position: 'relative', padding: '8rem 0' }}>
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-image-panel">
            <div className="contact-gradient-overlay" />
            <div className="contact-panel-content">
              <span className="contact-badge">Start Your Journey</span>
              <h3 className="contact-panel-heading">Let's build something extraordinary.</h3>
              <p className="contact-panel-desc">Join 150+ innovative companies who have scaled their operations and accelerated growth with our customized technology systems.</p>

              <div className="contact-info-list">
                <div className="c-info-item">
                  <div className="c-info-icon">📍</div>
                  <div className="c-info-text">
                    <strong>Global Reach</strong>
                    <span>Remote-first, serving globally</span>
                  </div>
                </div>
                <div className="c-info-item">
                  <div className="c-info-icon">✉️</div>
                  <div className="c-info-text">
                    <strong>Email Us</strong>
                    <span>overminds@gmail.com</span>
                  </div>
                </div>
                <div className="c-info-item">
                  <div className="c-info-icon">📞</div>
                  <div className="c-info-text">
                    <strong>Call Us</strong>
                    <span>+91 90000 00000</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Background design shapes inside image panel */}
            <div className="abs-shape shape-1"></div>
            <div className="abs-shape shape-2"></div>
          </div>

          <div className="contact-form-panel">
            <div className="contact-form-header">
              <h2>Schedule Your Free Strategy Consultation</h2>
              <p>Fill out the information below and our technology experts will get in touch with you shortly to discuss your custom plan.</p>
            </div>

            <form className="modern-c-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group-grid">
                <div className="input-group">
                  <input type="text" id="name" placeholder=" " required />
                  <label htmlFor="name">Full Name</label>
                  <div className="input-highlight"></div>
                </div>
                <div className="input-group">
                  <input type="email" id="email" placeholder=" " required />
                  <label htmlFor="email">Email Address</label>
                  <div className="input-highlight"></div>
                </div>
              </div>

              <div className="form-group-grid">
                <div className="input-group">
                  <input type="text" id="phone" placeholder=" " required />
                  <label htmlFor="phone">Phone Number</label>
                  <div className="input-highlight"></div>
                </div>
                <div className="input-group">
                  <input type="text" id="subject" placeholder=" " required />
                  <label htmlFor="subject">Subject / Company</label>
                  <div className="input-highlight"></div>
                </div>
              </div>

              <div className="input-group full-width">
                <textarea id="message" rows="4" placeholder=" " required></textarea>
                <label htmlFor="message">How can we help you scale?</label>
                <div className="input-highlight"></div>
              </div>

              <div className="form-action" style={{ marginTop: '1.5rem' }}>
                <button type="submit" className="custom-submit-btn glow-btn">
                  Submit Message
                  <span className="btn-icon">➔</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="section bg-light" style={{ textAlign: 'center', padding: '5rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.5rem', color: 'var(--c-navy)' }}>Ready to automate & scale your business?</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
          The future of your business rests on intelligent systems. Let's work together to drive efficiency and unlock unprecedented growth.
        </p>
        <NavLink to="/contact" className="btn" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Get in Touch Now &nbsp;➔</NavLink>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src="/overminds_new.png" alt="Logo" />
              <span>Overminds</span>
            </div>
            <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
              We help teams automate operations, improve lead conversion, and launch modern digital products with speed and quality.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="f-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h4>Our Services</h4>
            <ul className="f-links">
              {services.map(s => <li key={s.slug}><NavLink to={`/services/${s.slug}`}>{s.title}</NavLink></li>)}
            </ul>
          </div>
          <div>
            <h4>Contact Info</h4>
            <ul className="f-links">
              <li>Email:overminds@gmail.com</li>
              <li>Phone: +91 90000 00000</li>
              <li>Hours: Mon - Sat, 9:00 AM - 7:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="border-top">
          <span>© {new Date().getFullYear()} Overminds. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#privacy" style={{ color: '#a8b8c5' }}>Privacy Policy</a>
            <a href="#terms" style={{ color: '#a8b8c5' }}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CommonServiceDetail({ service }) {
  return (
    <>
      <div className="section bg-light" style={{ padding: '4rem 0' }}>
        <div className="container section-header" style={{ marginBottom: 0 }}>
          <span className="chip">{service.tagline}</span>
          <h2>{service.title}</h2>
          <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: 'var(--c-blue)' }}>{service.shortLine}</p>
        </div>
      </div>

      <div className="container section about-wrap">
        <div className="about-img">
          <div className="about-shape"></div>
          <img src={service.image} alt={service.title} />
        </div>
        <div className="about-content">
          <h2>Service Overview</h2>
          <p>{service.detail}</p>
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>What's Included:</h3>
          <ul className="check-list">
            {service.includes.map(inc => <li key={inc}>{inc}</li>)}
          </ul>
        </div>
      </div>

      {/* How it helps your business section - modern, aesthetic, client-attractive */}
      <div className="section bg-light" style={{ padding: '4rem 0' }}>
        <div style={{ width: 'min(1440px, 96%)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <span className="chip" style={{ background: 'linear-gradient(135deg, var(--c-yellow) 0%, #ffb347 100%)', color: '#fff', border: 'none', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.5px', boxShadow: '0 4px 12px rgba(255,209,102,0.3)' }}>Business Impact</span>
            <h2 style={{ margin: '2rem 0 1.5rem', color: 'var(--c-navy)', fontWeight: 800, fontSize: '2.8rem', letterSpacing: '-1px', lineHeight: '1.2' }}>How Our AI Systems Improve Your Business Performance</h2>
            <p style={{ color: '#4a5568', fontSize: '1.3rem', lineHeight: '1.7', marginBottom: '3.5rem', fontWeight: 500, maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
              Automate workflows, reduce operational costs, and increase conversions — all with intelligent AI-driven systems built for your business.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', padding: '2.5rem 1.5rem', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--c-blue)' }}>⚡</div>
              <div style={{ color: 'var(--c-navy)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Automated Operations</div>
              <div style={{ color: '#4a5568', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>Reduce manual work and automate repetitive tasks — saving hours of effort every day.</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--c-navy)', fontWeight: 600 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>⏱ <span>Save 4–6 hrs/day</span></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>⚙️ <span>70% process automation</span></div>
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', padding: '2.5rem 1.5rem', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--c-yellow)' }}>📊</div>
              <div style={{ color: 'var(--c-navy)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Data-Driven Decisions</div>
              <div style={{ color: '#4a5568', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>Track leads, performance, and business metrics in real-time with smart dashboards.</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--c-navy)', fontWeight: 600 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>📈 <span>Real-time analytics</span></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>🎯 <span>Better conversion tracking</span></div>
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', padding: '2.5rem 1.5rem', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--c-blue)' }}>🤝</div>
              <div style={{ color: 'var(--c-navy)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>24/7 Customer Handling</div>
              <div style={{ color: '#4a5568', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>Respond instantly to customer queries and never miss a potential lead.</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--c-navy)', fontWeight: 600 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>💬 <span>Instant replies</span></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>🌐 <span>Multi-platform support</span></div>
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', padding: '2.5rem 1.5rem', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ff6b6b' }}>💰</div>
              <div style={{ color: 'var(--c-navy)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Reduce Operational Cost</div>
              <div style={{ color: '#4a5568', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>Replace repetitive manual tasks with automation and reduce dependency on large teams.</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--c-navy)', fontWeight: 600 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>💸 <span>Save up to 60% cost</span></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>🤖 <span>AI replaces repetitive work</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it works section - energetic, aesthetic, professional */}
      <div className="section" style={{ background: '#fff', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="chip" style={{ background: 'rgba(17, 138, 178, 0.15)', color: 'var(--c-blue)', borderColor: 'rgba(17, 138, 178, 0.3)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.5px' }}>How It Works</span>
            <h2 style={{ margin: '1.5rem 0 1rem', color: 'var(--c-navy)', fontWeight: 800, fontSize: '2.3rem', letterSpacing: '-1px' }}>Your Success Journey</h2>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
            <div className="service-card" style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.04)', padding: '2.5rem 1.5rem', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--c-blue)' }}>💡</div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--c-navy)', fontWeight: 700 }}>1. Discovery & Strategy</h4>
              <p style={{ color: '#2d3748', fontSize: '1.05rem', lineHeight: '1.6' }}>We dive deep into your goals and challenges, then craft a winning strategy tailored just for you.</p>
            </div>
            <div className="service-card" style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.04)', padding: '2.5rem 1.5rem', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--c-yellow)' }}>⚙️</div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--c-navy)', fontWeight: 700 }}>2. Implementation</h4>
              <p style={{ color: '#2d3748', fontSize: '1.05rem', lineHeight: '1.6' }}>Our experts build, integrate, and launch your solution with zero hassle and full transparency.</p>
            </div>
            <div className="service-card" style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.04)', padding: '2.5rem 1.5rem', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--c-blue)' }}>🚀</div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--c-navy)', fontWeight: 700 }}>3. Growth & Support</h4>
              <p style={{ color: '#2d3748', fontSize: '1.05rem', lineHeight: '1.6' }}>We monitor, optimize, and support your business so you can scale confidently and sustainably.</p>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}

function CommonProductDetail({ product }) {
  return (
    <>
      <div className="hero" style={{ backgroundImage: `url(${product.image})`, padding: '8rem 0', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="hero-content" style={{ background: 'rgba(7, 59, 76, 0.90)', padding: '3rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span className="chip" style={{ background: 'rgba(255, 209, 102, 0.15)', color: 'var(--c-yellow)', borderColor: 'rgba(255, 209, 102, 0.3)' }}>{product.tagline}</span>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.title}</h1>
            <p style={{ fontSize: '1.1rem', margin: '0' }}>{product.shortLine}</p>
          </div>
        </div>
      </div>

      <div className="container section">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="chip">Features</span>
          <h2>Product Capabilities</h2>
          <p style={{ maxWidth: '750px', margin: '1rem auto', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>{product.detail}</p>
        </div>
        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {product.includes.map((feature, idx) => {
            const icons = ['🚀', '⚙️', '🛡️', '📈', '⚡', '💡'];
            return (
              <div className="service-card" key={idx} style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icons[idx % icons.length]}</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--c-navy)' }}>{feature}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <CallToAction />
    </>
  );
}

// Inner Pages
function ServicesPage() {
  return (
    <>
      <div className="hero" style={{
        backgroundImage: `url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        padding: '8rem 0',
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(7, 59, 76, 0.5) 0%, rgba(7, 59, 76, 0.3) 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="chip" style={{ background: 'rgba(255, 209, 102, 0.15)', color: 'var(--c-yellow)', borderColor: 'rgba(255, 209, 102, 0.3)' }}>Our Expertise</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>All Services</h1>
          <p style={{ color: '#fff', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
            Explore our comprehensive range of technology solutions designed to scale your business and automate your workflows.
          </p>
        </div>
      </div>

      <div className="section bg-light">
        <div className="container">
          {services.map((service, index) => (
            <div className={`service-detail-row ${index % 2 !== 0 ? 'reverse' : ''}`} key={service.slug}>
              <div className="service-detail-img">
                <img
                  src={service.image}
                  alt={`${service.title} - ${service.shortLine}`}
                />
              </div>
              <div className="service-detail-content">
                <span className="chip">{service.tagline}</span>
                <h2>{service.icon} {service.title}</h2>
                <p className="lead-text">
                  {service.detail}
                </p>

                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul className="check-list">
                    {service.includes.map(inc => <li key={inc}>{inc}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CallToAction />
    </>
  );
}

function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  if (!service) return <div className="container section"><h2>Not Found</h2></div>;

  return <CommonServiceDetail service={service} />;
}

function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  if (!product) return <div className="container section"><h2>Not Found</h2></div>;

  return <CommonProductDetail product={product} />;
}

function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero" style={{
        backgroundImage: `url('https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        padding: '8rem 0',
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(7, 59, 76, 0.5) 0%, rgba(7, 59, 76, 0.3) 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="chip" style={{ background: 'rgba(255, 209, 102, 0.15)', color: 'var(--c-yellow)', borderColor: 'rgba(255, 209, 102, 0.3)' }}>Discover Our Story</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>About Us</h1>
          <p style={{ color: '#fff', fontSize: '1.2rem', maxWidth: '750px', margin: '0 auto', opacity: 0.9 }}>
            Overminds designs and builds digital systems that improve productivity, customer experience, and long-term growth.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <section className="section bg-light">
        <div className="container about-wrap">
          <div className="about-img">
            <div className="about-shape"></div>
            <img src="https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Our Mission" />
          </div>
          <div className="about-content">
            <span className="chip">Our Mission</span>
            <h2>Empowering Businesses with Intelligent Automation</h2>
            <p>We are on a mission to deliver multidisciplinary technology partnerships focused on helping teams launch faster, automate smarter, and scale with confidence.</p>
            <p>Our commitment is directly tied to your digital success. By implementing scalable architectures and AI-driven workflows, we ensure your business remains ahead of the curve in an increasingly competitive landscape.</p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="chip">Our Approach</span>
            <h2>How We Work With You</h2>
            <p>A proven methodology to transform your operations from strategy to ongoing support.</p>
          </div>
          <div className="process-wrap">
            <div className="process-step-item">
              <div className="p-icon">🔍<div className="p-num">01</div></div>
              <h4>Understand your business</h4>
              <p>We start by deeply analyzing your goals, existing workflows, and desired outcomes.</p>
            </div>
            <div className="process-step-item">
              <div className="p-icon">📊<div className="p-num">02</div></div>
              <h4>Identify gaps & inefficiencies</h4>
              <p>We pinpoint operational bottlenecks and areas where automation can drive the most impact.</p>
            </div>
            <div className="process-step-item">
              <div className="p-icon">⚙️<div className="p-num">03</div></div>
              <h4>Build tailored automation systems</h4>
              <p>We engineer custom software and AI solutions perfectly aligned with your needs.</p>
            </div>
            <div className="process-step-item">
              <div className="p-icon">🚀<div className="p-num">04</div></div>
              <h4>Deploy, optimize, and support</h4>
              <p>We launch the systems, continuously monitor performance, and provide iterative enhancements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="chip">Industries</span>
            <h2>Industries We Serve</h2>
            <p>Our solutions are adaptable and yield high impact across various sectors.</p>
          </div>
          <div className="services-grid four-cols">
            <div className="service-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏥</div>
              <h3>Healthcare</h3>
              <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>Streamlining patient management and administrative automation.</p>
            </div>
            <div className="service-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛍️</div>
              <h3>E-Commerce</h3>
              <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>Enhancing customer journeys and automating inventory systems.</p>
            </div>
            <div className="service-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏢</div>
              <h3>Real Estate</h3>
              <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>Lead qualification and property management automation.</p>
            </div>
            <div className="service-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
              <h3>Finance</h3>
              <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>Secure process automation and insightful data analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="section" style={{ background: 'var(--c-navy)', color: '#fff' }}>
        <div className="container">
          <div className="section-header" style={{ color: '#fff' }}>
            <span className="chip" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>The Results</span>
            <h2 style={{ color: '#fff' }}>Our Impact</h2>
            <p style={{ color: '#a8b8c5' }}>We deliver measurable results that fundamentally improve how your business operates.</p>
          </div>
          <div className="hero-stats" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            <div className="stat-card" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
              <div className="stat-icon" style={{ background: 'transparent', fontSize: '2.5rem' }}>📉</div>
              <div>
                <h3 style={{ color: '#FFD166', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Up to 70%</h3>
                <p style={{ color: '#fff', margin: 0, fontSize: '0.95rem' }}>Reduction in manual work</p>
              </div>
            </div>
            <div className="stat-card" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
              <div className="stat-icon" style={{ background: 'transparent', fontSize: '2.5rem' }}>🤖</div>
              <div>
                <h3 style={{ color: '#FFD166', fontSize: '1.8rem', marginBottom: '0.5rem' }}>24/7</h3>
                <p style={{ color: '#fff', margin: 0, fontSize: '0.95rem' }}>Automated customer handling</p>
              </div>
            </div>
            <div className="stat-card" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
              <div className="stat-icon" style={{ background: 'transparent', fontSize: '2.5rem' }}>📈</div>
              <div>
                <h3 style={{ color: '#FFD166', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Improved</h3>
                <p style={{ color: '#fff', margin: 0, fontSize: '0.95rem' }}>Lead conversion rates</p>
              </div>
            </div>
            <div className="stat-card" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
              <div className="stat-icon" style={{ background: 'transparent', fontSize: '2.5rem' }}>💰</div>
              <div>
                <h3 style={{ color: '#FFD166', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Significant</h3>
                <p style={{ color: '#fff', margin: 0, fontSize: '0.95rem' }}>Operational cost savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline & Call to Action */}
      <CallToAction />
    </>
  );
}

function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero" style={{
        backgroundImage: `url('https://images.pexels.com/photos/8294618/pexels-photo-8294618.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        padding: '8rem 0',
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(7, 59, 76, 0.5) 0%, rgba(7, 59, 76, 0.3) 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="chip" style={{ background: 'rgba(255, 209, 102, 0.15)', color: 'var(--c-yellow)', borderColor: 'rgba(255, 209, 102, 0.3)' }}>Get In Touch</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Contact Us</h1>
          <p style={{ color: '#fff', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
            We're here to help you scale. Reach out to discuss how our solutions can transform your business.
          </p>
        </div>
      </div>

      <div className="section bg-light" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="standalone-form-wrapper">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>Send Us A Message</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Fill out the form below and we'll get back to you shortly.</p>
            </div>
            <form className="standalone-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group-grid">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
              <textarea rows="5" placeholder="Your Message"></textarea>
              <button type="submit" className="custom-submit-btn">Submit Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <TestimonialSection />
      <ContactBlock />
      <TechStackMarquee />
    </>
  );
}

export default function App() {
  return (
    <div className="site">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
