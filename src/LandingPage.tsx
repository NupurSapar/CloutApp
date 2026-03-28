"use client"

import { useEffect, useState } from "react"
import "./Page.css"

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Gradient Background */}
        <div className="hero-gradient" />
        {/* Animated Sparkles */}
        <div className="sparkles-container">
          <Sparkle delay={0} top="15%" left="15%" size={48} />
          <Sparkle delay={1.5} top="10%" right="20%" size={32} />
          <Sparkle delay={3} top="40%" left="10%" size={24} />
          <Sparkle delay={2} bottom="30%" right="15%" size={40} />
        </div>

      <div className="stars1">
        <Sparkle size={145}/>
      </div>
      <div className="stars2">
        <Sparkle size={60}/>
      </div>
      <div className="stars3">
        <Sparkle size={30}/>
      </div>
      <div className="stars4">
        <Sparkle size={100}/>
      </div>
      

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title" style={{ animationDelay: "0.2s" }}>
            CLOUT
          </h1>

          <button className="signup-btn" style={{ animationDelay: "0.4s" }}>
            Sign up
          </button>

          <p className="hero-subtitle" style={{ animationDelay: "0.6s" }}>
            Connecting brands to influencers
          </p>

          <div className="hero-login" style={{ animationDelay: "0.8s" }}>
            <span>Already with us?</span>
            <button className="login-link">Login</button>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-border">
            <div className="scroll-dot" />
          </div>
        </div>
      </section>

      {/* Main Card Section */}
<section className="section-white">

  <div className="hero-buttons" style={{ animationDelay: "1s" }}>
    <button className="btn-business">For Business</button>
    <button className="btn-creators">For Creators</button>
  </div>

  <div className="card main-card">
    <div className="card-content">

      {/* SPLIT STARTS HERE */}
      <div className="card-body">

        {/* LEFT HALF */}
        <div className="card-left">
          <div>
            <h2 className="card-title">Profit From</h2>
            <h2 className="card-title-gradient">Social Media</h2>
          </div>

          <button className="launch-btn">Launch Campaign</button>

          <div className="card-text">
            <p>
              A Dynamic network of dedicated creators helps your brand reach the right audience and spark real
              connections. Tap into authentic content that captures attention and drives genuine engagement while
              making every marketing spend worth harder for you.
            </p>
          </div>
        </div>

        {/* RIGHT HALF */}
        <div className="card-image">
  <img
    src="/src/instagram.png"
    alt="Instagram post preview"
    className="card-img"
  />
</div>


      </div>
      {/* SPLIT ENDS HERE */}

    </div>
  </div>
</section>


      {/* Brands Section */}
      <section className="brands-section">
  <div className="brands-wrapper">
    <div className="brands-track">

      {[
        "nykaa",
        "amazon",
        "zara",
        "myntra",
        "lakme",
        "boat",
        "cliq",
        "cult",
        "fabindia",
        "groww",
        "lenskart",
        "mamaearth",
        "nykaa",
        "amazon",
        "zara",
        "myntra",
        "lakme",
        "boat",
        "cliq",
        "cult",
        "fabindia",
        "groww",
        "lenskart",
        "mamaearth",
      ].map((brand, i) => (
        <div className="brand-item" key={i}>
          <img
            src={`/src/brands/${brand}.png`}
            alt={brand}
            className="brand-logo"
          />
        </div>
      ))}

    </div>
  </div>
</section>


      {/* Why Use Section */}
      <section className="section-white">
        <div className="container">
          <div className="why-grid">
            <div className="why-image">
              <img
                src="/src/whyimg.png"
                alt="Why use Clout"
                className="why-img"
              />
            </div>


            <div className="why-content">
              <h2 className="why-title">
                Why Use <span className="text-blue">Clout</span>?
              </h2>

              <ul className="features-list">
                {[
                  { title: "AI-Powered Matchmaking:", desc: "Find the right fit in seconds." },
                  { title: "Real-Time Analytics:", desc: "Track impressions, engagement, and ROI live." },
                  { title: "Fraud Detection:", desc: "Work only with genuine influencers." },
                  { title: "Secure Payments:", desc: "Smart contracts & escrow ensure transparency." },
                  { title: "Multilingual Reach:", desc: "Run campaigns in Hindi, Marathi, Tamil, Telugu & more." },
                ].map((item, i) => (
                  <li key={i} className="feature-item" style={{ animationDelay: `${i * 0.1}s` }}>
                    <span className="check-mark">✓</span>
                    <div>
                      <span className="feature-title">{item.title}</span> {item.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Functions Section */}
      <section className="functions-section">
  <div className="container">
    <h2 className="functions-heading">
      Functions / Technology Used
    </h2>

    <div className="functions-grid">
      {[
        {
          image: "/src/functions/ai2.png",
          title: "AI-Powered Discovery Engine",
          desc: "AI scans engagement, demographics & past work.",
        },
        {
          image: "/src/functions/phone2.png",
          title: "Smart Campaign Management",
          desc: "Contracts, onboarding, & milestones handled.",
        },
        {
          image: "/src/functions/Shield2.png",
          title: "Fraud Detection Algorithms",
          desc: "Detect fake followers & remove bots.",
        },
        {
          image: "/src/functions/dashboard3.png",
          title: "Analytics Dashboard",
          desc: "Real-time insights & campaign tracking.",
        },
        {
          image: "/src/functions/payment.png",
          title: "Secure Escrow Payments",
          desc: "Payment protection for both sides.",
        },
      ].map((item, i) => (
        <div key={i} className="function-card">
          <img
            src={item.image}
            alt={item.title}
            className="function-img"
          />
          <h3 className="function-title">{item.title}</h3>
          <p className="function-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Testimonials */}
      <section className="section-white">
        <div className="container">
          <h2 className="section-title">Trusted by 4+ million users worldwide</h2>

          <div className="testimonials-grid">
            {[
              {
                name: "Nupur Sapar",
                role: "Business Owner",
                rating: 5,
                text: "The platform is super intuitive and made me an actual boss. Campaigns...",
              },
              {
                name: "Pranusha Shinde",
                role: "Influencer",
                rating: 5,
                text: "Been using this for months now, Clout, it's like my very own coach that helps me excel at influencer marketing...",
              },
              {
                name: "Aayushi Maindalkar",
                role: "Creator",
                rating: 5,
                text: "Have collaborated five total with Clout's team I got paid instantly. Friendly and great...",
              },
              {
                name: "Hailey Bieber",
                role: "Brand Manager",
                rating: 5,
                text: "From onboarding my whole brand's needs, Clout has been flawless. Their analytics...",
              },
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="testimonial-header">
                  <div className="testimonial-avatar" />
                  <div>
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <button className="testimonial-readmore">Read more &gt;</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
  <div className="container-small">
    <h2 className="faq-heading">
      Frequently Asked <span className="text-gray">Questions</span>
    </h2>

    <div className="faq-layout">
      {/* Illustration */}
      <div className="faq-illustration">
        <img src="/src/think.png" alt="FAQ Illustration" />
      </div>

      {/* FAQ List */}
      <div className="faq-list">
        <details className="faq-item">
          <summary className="faq-question">
            Is Clout for small businesses too?
            <span className="faq-arrow">⌄</span>
          </summary>
          <div className="faq-answer">
            Absolutely. From startups to corporations, anyone can run campaigns.
          </div>
        </details>

        <details className="faq-item">
          <summary className="faq-question">
            Is there a Subscription Fee?
            <span className="faq-arrow">⌄</span>
          </summary>
          <div className="faq-answer">
            No subscription fees. Pay only for the campaigns you run.
          </div>
        </details>

        <details className="faq-item">
          <summary className="faq-question">
            Can I pay influencers directly through Clout?
            <span className="faq-arrow">⌄</span>
          </summary>
          <div className="faq-answer">
            Yes! Our secure escrow system handles all payments safely.
          </div>
        </details>
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="footer">
  <div className="footer-container">
    
    {/* Top Row */}
    <div className="footer-top">
      <p className="footer-brand">
        Clout – AI-Driven Influencer Marketing Platform
      </p>

      <div className="footer-contact">
        <span>📧 support@clout.ai</span>
        <span>🌐 www.clout.ai</span>
      </div>
    </div>

    <div className="footer-divider" />

    {/* Bottom Row */}
    <div className="footer-bottom">
      <div className="footer-links">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Cookies</a>
      </div>

      <div className="footer-socials">
        <a href="#">in</a>
        <a href="#">f</a>
        <a href="#">x</a>
      </div>
    </div>

  </div>
</footer>

    </div>
  )
}

// Sparkle Component
function Sparkle({
  delay = 0,
  top,
  bottom,
  left,
  right,
  size = 32,
}: {
  delay?: number
  top?: string
  bottom?: string
  left?: string
  right?: string
  size?: number
}) {
  return (
    <div
      className="sparkle"
      style={{
        top,
        bottom,
        left,
        right,
        animationDelay: `${delay}s`,
        width: size,
        height: size,
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="sparkle-svg">
        <path
          d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
          fill="currentColor"
          className="sparkle-path"
        />
      </svg>
    </div>
  )
}
