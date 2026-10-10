
"use client";

import { useState } from "react";

const instagram = "https://www.instagram.com/mkflorals__/";
const email = "mkfloralss@gmail.com";
const enquiry = `mailto:${email}?subject=${encodeURIComponent("Floral Design Enquiry")}`;
const phone = "tel:+18147318482";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Flower({
  variant = "full",
  className = "",
}: {
  variant?: "full" | "stem" | "sprig";
  className?: string;
}) {
  if (variant === "sprig") {
    return (
      <svg className={className} viewBox="0 0 240 450" fill="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <path d="M118 438C132 320 113 211 121 35" />
          {Array.from({ length: 7 }, (_, i) => {
            const y = 85 + i * 47;
            const left = i % 2 === 0;
            const x = left ? 42 : 198;
            return (
              <g key={i}>
                <path d={`M120 ${y + 37}Q${left ? 84 : 156} ${y + 5} ${x} ${y - 15}`} />
                <path
                  d={`M${x} ${y - 15}Q${left ? 6 : 234} ${y - 50} ${left ? 26 : 214} ${y + 7}Q${left ? 70 : 170} ${y + 30} ${x} ${y - 15}Z`}
                />
              </g>
            );
          })}
          <path d="M121 60C79 33 95 3 121 11C147 3 163 33 121 60Z" />
        </g>
      </svg>
    );
  }

  if (variant === "stem") {
    return (
      <svg className={className} viewBox="0 0 360 550" fill="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M180 540C196 395 173 275 180 170" />
          <path d="M184 385Q259 302 319 338Q294 416 184 385Z" />
          <path d="M180 437Q92 364 39 405Q71 471 180 437Z" />
          <path d="M184 385 306 341M180 437 49 408" />
          {Array.from({ length: 9 }, (_, i) => (
            <ellipse
              key={i}
              cx="180"
              cy="95"
              rx="36"
              ry="78"
              transform={`rotate(${i * 40} 180 163)`}
            />
          ))}
          <circle cx="180" cy="163" r="29" />
          <circle cx="180" cy="163" r="17" />
        </g>
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 600 650" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M300 636C309 505 286 395 300 278" />
        <path d="M299 478Q415 373 514 431Q478 518 299 478Z" />
        <path d="M300 537Q180 441 88 500Q146 582 300 537Z" />
        <path d="M299 478 497 437M300 537 102 504" />
        {Array.from({ length: 12 }, (_, i) => (
          <ellipse
            key={i}
            cx="300"
            cy="134"
            rx="52"
            ry="124"
            transform={`rotate(${i * 30} 300 260)`}
          />
        ))}
        <circle cx="300" cy="260" r="49" />
        <circle cx="300" cy="260" r="30" />
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i * Math.PI) / 4;
          return (
            <circle
              key={i}
              cx={300 + 18 * Math.cos(angle)}
              cy={260 + 18 * Math.sin(angle)}
              r="2.5"
              fill="currentColor"
              stroke="none"
            />
          );
        })}
      </g>
    </svg>
  );
}

function Monogram() {
  return (
    <span className="monogram" aria-label="MK Floral">
      MK<span className="monogram-dot">.</span>
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <div className="concept-note">
        INDEPENDENT WEBSITE CONCEPT — NOT THE OFFICIAL MK FLORAL WEBSITE
      </div>

      <header className="header">
        <a className="brand" href="#top" onClick={closeMenu}>
          <Monogram />
          <span>FLORAL ATELIER</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">OUR APPROACH</a>
          <a href="#services">SERVICES</a>
          <a href="#inspiration">INSPIRATION</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <a className="header-enquire" href={enquiry}>
          ENQUIRE NOW <Arrow />
        </a>

        <button
          type="button"
          className={`menu-button ${menuOpen ? "active" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? "visible" : ""}`}
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        <a href="#about" onClick={closeMenu}>OUR APPROACH</a>
        <a href="#services" onClick={closeMenu}>SERVICES</a>
        <a href="#inspiration" onClick={closeMenu}>INSPIRATION</a>
        <a href="#contact" onClick={closeMenu}>CONTACT</a>
        <a href={enquiry} onClick={closeMenu}>ENQUIRE NOW ↗</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="line" />
            <span>FLORAL DESIGN FOR LIFE&apos;S BEAUTIFUL MOMENTS</span>
          </div>

          <h1>
            Where<br />
            flowers<br />
            <em>become</em><br />
            memories<span>.</span>
          </h1>

          <p>
            Thoughtfully imagined wedding florals and
            luxury proposal styling, created to make
            your most meaningful moments feel extraordinary.
          </p>

          <a className="primary-link" href="#services">
            EXPLORE OUR SERVICES <Arrow />
          </a>

          <div className="hero-bottom">
            <span>ERIE, PENNSYLVANIA</span>
            <span>EST. IN BEAUTIFUL MOMENTS</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-frame">
            <span className="hero-visual-top">THE ART OF FLOWERS</span>
            <div className="hero-flower-composition">
              <Flower variant="full" className="hero-main-flower" />
              <Flower variant="sprig" className="hero-side-flower" />
            </div>
            <span className="hero-visual-bottom">A LOVE LETTER IN BLOOM — 001</span>
          </div>
          <div className="hero-seal">
            <span>MADE WITH</span>
            <strong>love</strong>
            <span>✳ & FLOWERS ✳</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="about" className="intro-section">
        <div className="section-index">
          <span>01 / OUR PHILOSOPHY</span>
          <span>AN EXPRESSION OF BEAUTY</span>
        </div>

        <div className="intro-layout">
          <div className="intro-small">
            <span className="asterisk">✳</span>
            <span>THE BEAUTY IS IN THE DETAILS</span>
          </div>
          <div className="intro-main">
            <h2>
              More than<br />
              <em>just flowers.</em>
            </h2>
            <p>
              Some moments deserve something truly special.
              MK Floral specializes in custom floral designs
              for weddings and luxury proposal styling —
              bringing a romantic, considered touch to
              life&apos;s unforgettable celebrations.
            </p>
            <a className="text-link" href={instagram} target="_blank" rel="noopener noreferrer">
              DISCOVER MK FLORAL <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-section">
        <div className="section-index section-index-light">
          <span>02 / WHAT WE CREATE</span>
          <span>BEAUTIFULLY CONSIDERED FLORALS</span>
        </div>

        <div className="services-heading">
          <div>
            <span className="eyebrow">CURATED FOR YOUR OCCASION</span>
            <h2>
              Our <em>offerings.</em>
            </h2>
          </div>
          <p>
            From the walk down the aisle to the moment
            you ask forever, flowers help tell your story.
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card wedding-card">
            <div className="service-top">
              <span>01 / WEDDINGS</span>
              <span>✳</span>
            </div>
            <div className="service-art wedding-art">
              <Flower variant="full" />
              <span className="art-caption">ILLUSTRATIVE BOTANICAL STUDY</span>
            </div>
            <div className="service-bottom">
              <span>YOUR DAY, IN BLOOM</span>
              <h3>Wedding<br /><em>Florals</em></h3>
              <p>
                Custom floral design to complement
                the atmosphere and emotion of your wedding day.
              </p>
              <a href={enquiry}>
                ENQUIRE ABOUT WEDDINGS <Arrow />
              </a>
            </div>
          </article>

          <article className="service-card proposal-card">
            <div className="service-top">
              <span>02 / PROPOSALS</span>
              <span>✳</span>
            </div>
            <div className="service-art proposal-art">
              <div className="proposal-arch">
                <Flower variant="stem" />
              </div>
              <span className="art-caption">ILLUSTRATIVE BOTANICAL STUDY</span>
            </div>
            <div className="service-bottom">
              <span>THE BEGINNING OF FOREVER</span>
              <h3>Luxury<br /><em>Proposals</em></h3>
              <p>
                Romantic floral styling designed
                around one of life&apos;s most memorable questions.
              </p>
              <a href={enquiry}>
                ENQUIRE ABOUT PROPOSALS <Arrow />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* EDITORIAL MOMENT */}
      <section className="quote-section">
        <div className="quote-side">THE ART OF CELEBRATION</div>
        <div className="quote-content">
          <span>✳</span>
          <h2>
            Let your love<br />
            <em>blossom.</em>
          </h2>
          <p>
            For the moments you&apos;ll remember,
            and the details you&apos;ll never forget.
          </p>
        </div>
        <Flower variant="sprig" className="quote-sprig" />
      </section>

      {/* REAL PORTFOLIO */}
      <section id="inspiration" className="inspiration-section">
        <div className="section-index">
          <span>03 / THE PORTFOLIO</span>
          <span>REAL MOMENTS, REAL FLOWERS</span>
        </div>

        <div className="inspiration-layout">
          <div className="inspiration-copy">
            <span className="eyebrow">A GLIMPSE OF OUR WORLD</span>
            <h2>
              A little<br />
              <em>inspiration.</em>
            </h2>
            <p>
              Explore MK Floral&apos;s actual floral designs,
              celebrations, and styling work on Instagram.
              Find inspiration for your own special occasion.
            </p>
            <a
              className="primary-link"
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW THE REAL PORTFOLIO <Arrow />
            </a>
          </div>

          <div className="inspiration-art">
            <div className="inspiration-art-inner">
              <Flower variant="stem" />
              <span className="inspiration-art-word">bloom</span>
            </div>
            <div className="inspiration-art-footer">
              <span>MK FLORAL / BOTANICAL STUDY</span>
              <span>03 / 04</span>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY GUIDE */}
      <section className="journey-section">
        <div className="section-index section-index-light">
          <span>04 / YOUR FLORAL STORY</span>
          <span>HOW TO GET STARTED</span>
        </div>

        <div className="journey-heading">
          <span className="eyebrow">YOUR MOMENT BEGINS HERE</span>
          <h2>
            Let&apos;s create<br />
            <em>something lovely.</em>
          </h2>
        </div>

        <div className="journey-steps">
          <div>
            <span>01</span>
            <h3>YOUR OCCASION</h3>
            <p>Tell us whether you&apos;re planning a wedding or a proposal.</p>
          </div>
          <div>
            <span>02</span>
            <h3>YOUR VISION</h3>
            <p>Share your date, ideas, inspiration, and floral preferences.</p>
          </div>
          <div>
            <span>03</span>
            <h3>GET IN TOUCH</h3>
            <p>Send an enquiry to discuss the details directly with MK Floral.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-decor">
          <Flower variant="sprig" />
        </div>
        <div className="contact-content">
          <span className="contact-kicker">LET&apos;S MAKE SOMETHING BEAUTIFUL</span>
          <h2>
            Your story<br />
            deserves to<br />
            <em>blossom.</em>
          </h2>
          <p>
            Planning a wedding or a proposal?
            Reach out and share what you have in mind.
          </p>
          <a className="contact-button" href={enquiry}>
            START AN ENQUIRY <Arrow />
          </a>
          <div className="contact-links">
            <a href={`mailto:${email}`}>{email}</a>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              INSTAGRAM <Arrow />
            </a>
            <a href={phone}>814-731-8482</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <div>
            <a href="#top" className="footer-logo">
              MK<span>.</span>
            </a>
            <p>FLORAL DESIGN FOR BEAUTIFUL MOMENTS</p>
          </div>
          <div className="footer-nav">
            <a href="#about">OUR APPROACH</a>
            <a href="#services">SERVICES</a>
            <a href="#inspiration">INSPIRATION</a>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              INSTAGRAM ↗
            </a>
            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MK FLORAL — WEBSITE CONCEPT</span>
          <span>ERIE, PENNSYLVANIA</span>
          <span>INDEPENDENT CONCEPT — NOT THE OFFICIAL BUSINESS WEBSITE</span>
        </div>
      </footer>
    </main>
  );
}
