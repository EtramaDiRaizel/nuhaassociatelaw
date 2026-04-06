"use client";

import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="hero" id="home">
        <div className="hero__bg">
          <img src="/hero-bg.png" alt="" />
        </div>
        <div className="hero__overlay" />
        <div className="hero__content">
          <ScrollReveal delay={200}>
            <p className="hero__tagline">Advocates &amp; Solicitors</p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <h1 className="hero__title">
              Your First Choice of Legal Partners
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <p className="hero__subtitle">
              Specialized in Corporate Debt Recovery &amp; Insolvency
              Litigation. We are here to represent you.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={800}>
            <a href="#contact" className="hero__cta">
              Contact Us
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
        <div className="hero__bottom">
          <span className="hero__est">
            Est. 2024 · Boutique Law Firm · Shah Alam, Selangor
          </span>
        </div>
      </section>

      {/* ===== EXPERTISE / ABOUT ===== */}
      <section className="section about" id="expertise">
        <div className="container">
          <div className="about__grid">
            <ScrollReveal direction="left">
              <div className="about__logo">
                <img src="/logo.jpg" alt="Nuha Associates Logo" />
              </div>
            </ScrollReveal>
            <div className="about__text">
              <ScrollReveal>
                <span className="section-label">Our Expertise</span>
                <h2 className="section-heading">
                  Corporate Insolvency &amp; Infrastructure Debt Recovery
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p>
                  At Nuha &amp; Associates, we understand that in 2026, cash
                  flow is the lifeblood of the construction industry. Based in
                  the heart of Selangor, we represent specialist contractors who
                  have been sidelined by large conglomerates.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <p>
                  We don&apos;t believe in long, drawn-out trials when a debt is
                  clearly admitted. We specialize in Winding-Up Petitions, with
                  an aim to turn a &quot;refusal to pay&quot; into a legal
                  trigger to recover what is yours.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRACTICE AREAS ===== */}
      <section className="section practice" id="practice">
        <div className="practice__bg">
          <img src="/practice-bg.png" alt="" />
        </div>
        <div className="container practice__content">
          <ScrollReveal>
            <span
              className="section-label"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              What We Do
            </span>
            <h2 className="section-heading section-heading--white">
              Practice Areas
            </h2>
            <p className="section-subtext section-subtext--white">
              Our lawyers are strategically focused on various practice areas to
              make the most of their skills and experience.
            </p>
          </ScrollReveal>
          <div className="practice__grid">
            {[
              "Corporate Debt Recovery",
              "Winding-Up Petitions",
              "Insolvency Litigation",
              "Construction Disputes",
              "Notice of Demand",
              "Corporate & Commercial",
              "Banking & Finance",
              "Dispute Resolution",
              "Real Estate",
              "Employment & Labour",
            ].map((area, i) => (
              <ScrollReveal key={i} delay={100 + i * 80}>
                <div className="practice__item">{area}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MILESTONES ===== */}
      <section className="section milestones" id="milestones">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Track Record</span>
            <h2 className="section-heading">Milestones</h2>
          </ScrollReveal>
          <div className="milestones__grid">
            <ScrollReveal delay={100}>
              <div className="milestone-card">
                <span className="milestone-card__year">2025</span>
                <h3 className="milestone-card__title">
                  Boutique Firm of the Year (Insolvency)
                </h3>
                <p className="milestone-card__sub">
                  Malaysian Tech-Law Review
                </p>
                <p className="milestone-card__desc">
                  Recognized for our innovative use of Companies Law and
                  Bankruptcy Act in the data center and construction sectors.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="milestone-card">
                <span className="milestone-card__year">
                  3 Consecutive Years
                </span>
                <h3 className="milestone-card__title">
                  Tier 1 Ranking — Dispute Resolution
                </h3>
                <p className="milestone-card__sub">Selangor</p>
                <p className="milestone-card__desc">
                  Ranked as a leading firm for high-value debt recovery in
                  Selangor.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="milestone-card">
                <span className="milestone-card__year">Partnership</span>
                <h3 className="milestone-card__title">
                  Strategic Legal Partner
                </h3>
                <p className="milestone-card__sub">SCIDA</p>
                <p className="milestone-card__desc">
                  Official legal panelist for the Selangor Construction &amp;
                  Interior Design Association.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="milestone-card">
                <span className="milestone-card__year">Success Rate</span>
                <h3 className="milestone-card__title">
                  100% Success in Undisputed Debt
                </h3>
                <p className="milestone-card__sub">Winding-Up Petitions</p>
                <p className="milestone-card__desc">
                  We have never lost a winding-up petition where the debt was
                  backed by a written admission or settlement letter.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== OUR TEAM ===== */}
      <section className="section team" id="team">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Our People</span>
            <h2 className="section-heading">Meet Our Team</h2>
            <p className="section-subtext">
              At Nuha &amp; Associates, our greatest asset is our people.
              Dedicated to the highest possible standard of integrity,
              commitment and professionalism.
            </p>
          </ScrollReveal>

          <div className="team__partners">
            <ScrollReveal delay={100}>
              <div className="partner-card">
                <img
                  src="/team/Nur Nuha.jpg"
                  alt="Nur Nuha"
                  className="partner-card__photo"
                />
                <div className="partner-card__info">
                  <h3 className="partner-card__name">Nur Nuha</h3>
                  <p className="partner-card__role">Managing Partner</p>
                  <p className="partner-card__specialty">
                    Corporate Litigation Specialist
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="partner-card">
                <img
                  src="/team/Nur Liyana.jpg"
                  alt="Nurliyana Amani"
                  className="partner-card__photo"
                />
                <div className="partner-card__info">
                  <h3 className="partner-card__name">Nurliyana Amani</h3>
                  <p className="partner-card__role">Senior Partner</p>
                  <p className="partner-card__specialty">
                    Infrastructure Disputes Expert
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="team__seniors">
              <h3 className="team__seniors-title">
                Team of Senior Associates
              </h3>
              <div className="team__photo-group">
                <img src="/team/Team.jpg" alt="Senior Associates Team" />
              </div>
              <div className="team__names">
                <span>Hamzah Shahadrian</span>
                <span>Yasmin Azezee</span>
                <span>Nurul Iman</span>
                <span>Aina Azrina</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials" id="testimonials">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">What Clients Say</span>
            <h2 className="section-heading">Testimonials</h2>
          </ScrollReveal>
          <div className="testimonials__grid">
            <ScrollReveal delay={100}>
              <div className="testimonial-card">
                <span className="testimonial-card__quote">&ldquo;</span>
                <p className="testimonial-card__text">
                  We were owed RM 30 million for an exterior design project. The
                  debtor thought they could ignore us because they were a large
                  &apos;Business Group.&apos; Nuha &amp; Associates didn&apos;t
                  waste time with a 2-year trial; they went straight for a
                  Winding-Up Petition. The debtor settled within weeks of the
                  court hearing. Highly professional.
                </p>
                <p className="testimonial-card__author">Soumu Co.</p>
                <p className="testimonial-card__company">Exterior Design</p>
                <p className="testimonial-card__date">February 2025</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="testimonial-card">
                <span className="testimonial-card__quote">&ldquo;</span>
                <p className="testimonial-card__text">
                  The lawyers at Nuha &amp; Associates have a forensic eye for
                  detail. They found the admission of debt in a single letter
                  that other firms overlooked. We recovered 100% of the
                  outstanding sum without a full trial.
                </p>
                <p className="testimonial-card__author">Ador Sdn Bhd</p>
                <p className="testimonial-card__company">Corporate</p>
                <p className="testimonial-card__date">May 2025</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="testimonial-card">
                <span className="testimonial-card__quote">&ldquo;</span>
                <p className="testimonial-card__text">
                  As a specialist contractor, cash flow is everything. Nuha
                  &amp; Associates successfully argued that the parent
                  company&apos;s letter of undertaking was binding. Their
                  expertise in corporate law is unmatched in Selangor.
                </p>
                <p className="testimonial-card__author">
                  Al-Fayyad Construction
                </p>
                <p className="testimonial-card__company">Construction</p>
                <p className="testimonial-card__date">September 2025</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CLIENT PORTAL ===== */}
      <section className="section portal" id="portal">
        <div className="container">
          <ScrollReveal>
            <span
              className="section-label"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              For Clients
            </span>
            <h2 className="section-heading section-heading--white">
              Client Portal
            </h2>
            <p className="section-subtext section-subtext--white">
              Insert your IC number and the last 2 digits of your mobile number
              to track your case.
            </p>
          </ScrollReveal>

          <div className="portal__grid">
            <ScrollReveal delay={100}>
              <div className="portal__card">
                <svg
                  className="portal__card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <h3>24/7 Case Tracking</h3>
                <p>See the exact status of your case and court dates.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="portal__card">
                <svg
                  className="portal__card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <h3>Live Countdown</h3>
                <p>
                  A digital clock tracking the 21-day statutory period for the
                  debtor to respond.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="portal__card">
                <svg
                  className="portal__card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <h3>Instant Document Access</h3>
                <p>
                  Download Court Orders, Affidavits, and necessary forms
                  instantly.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="portal__card">
                <svg
                  className="portal__card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <h3>Secure Direct Messaging</h3>
                <p>
                  Direct line to your lead counsel for confidential updates.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={500}>
            <a
              className="portal__cta"
              href="http://www.courtdates.nuhaassocs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login to Portal
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="section quicklinks" id="resources">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Resources</span>
            <h2 className="section-heading">Quick Links</h2>
          </ScrollReveal>
          <div className="quicklinks__grid">
            <ScrollReveal delay={100}>
              <a href="#" className="quicklink-card">
                <div className="quicklink-card__icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div className="quicklink-card__text">
                  <h3>Warrant to Act</h3>
                  <p>Download authorization form</p>
                </div>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <a href="#" className="quicklink-card">
                <div className="quicklink-card__icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="quicklink-card__text">
                  <h3>Client Profile</h3>
                  <p>Complete your client intake form</p>
                </div>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <a href="#" className="quicklink-card">
                <div className="quicklink-card__icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="quicklink-card__text">
                  <h3>Data Privacy Policy</h3>
                  <p>View our privacy commitment</p>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="section pricing" id="pricing">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Transparent Fees</span>
            <h2 className="section-heading" style={{ textAlign: "center" }}>
              Firm Price List
            </h2>
            <p
              className="section-subtext"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              We believe in transparent, upfront pricing. No hidden charges.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="pricing__table">
              <div className="pricing__header">
                <div style={{ flex: 1 }}>Service</div>
                <div style={{ width: 150, textAlign: "right" }}>Fee (RM)</div>
              </div>
              <div className="pricing__row">
                <div className="pricing__service">Consultation</div>
                <div className="pricing__fee">500</div>
              </div>
              <div className="pricing__row">
                <div className="pricing__service">Notice of Demand</div>
                <div className="pricing__fee">1,500</div>
              </div>
              <div className="pricing__row">
                <div className="pricing__service">
                  Winding-Up Petition Filing
                </div>
                <div className="pricing__fee">5,000</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="section contact" id="contact">
        <div className="contact__bg">
          <img src="/contact-bg.png" alt="" />
        </div>
        <div className="container contact__content">
          <ScrollReveal>
            <span
              className="section-label"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Get In Touch
            </span>
            <h2 className="section-heading section-heading--white">
              Contact Us
            </h2>
          </ScrollReveal>
          <div className="contact__grid">
            <ScrollReveal delay={100}>
              <div className="contact__info">
                <h3>Our Office</h3>
                <p className="contact__address">
                  B-1-16, Vista Alam, Seksyen 14,
                  <br />
                  40100 Shah Alam, Selangor Darul Ehsan,
                  <br />
                  Malaysia
                </p>

                <a
                  href="mailto:nuhaassociates@gmail.com"
                  className="contact__detail"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  nuhaassociates@gmail.com
                </a>
                <a href="tel:+60355128877" className="contact__detail">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +603-5512 8877
                </a>
                <span className="contact__detail">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +6017 475 2325 (Miss Liyana)
                </span>
                <span className="contact__detail">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +6011 5500 6922 (Miss Nuha)
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="contact__hours">
                <h3>Office Hours</h3>
                <p className="contact__hours-text">
                  Monday — Friday
                  <br />
                  9:00 AM — 6:00 PM
                </p>
                <a
                  href="https://customerreviews.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__review-link"
                >
                  Check Us Out on Google Reviews →
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <span className="footer__copy">
          © {new Date().getFullYear()} Nuha &amp; Associates. All rights
          reserved.
        </span>
        <div className="footer__socials">
          <a href="#" aria-label="Facebook">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
        <a
          href="https://docs.google.com/spreadsheets"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__staff-link"
        >
          Staff Portal →
        </a>
      </footer>
    </>
  );
}
