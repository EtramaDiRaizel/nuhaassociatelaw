"use client";

import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import ScrambleText from "@/components/ScrambleText";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="page-content">
            {/* HERO SECTION */}
            <section className="section section-hero" id="home">
              <div className="container">
                <div className="hero-content">
                  <h1 className="hero-title" style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}>
                    <ScrambleText text="nuha" animateOnMount />
                  </h1>
                  <h1 className="hero-title" style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}>
                    <ScrambleText text="associateslaw" animateOnMount />
                  </h1>
                  <div className="hero-subtitle mono">
                    <p>
                      <ScrambleText text="ADVOCATES & SOLICITORS" animateOnMount />
                    </p>
                    <p>
                      <ScrambleText text="SPECIALIZED CORPORATE DEBT RECOVERY & INSOLVENCY LITIGATION" animateOnMount />
                    </p>
                  </div>
                  
                  <div className="quick-links reveal-up" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
                    <a href="#" className="quick-link-btn" style={{ padding: '0.8rem 1.5rem', border: '1px solid var(--color-text)', borderRadius: '50px', textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                      <span className="mono" style={{ fontSize: '0.9rem' }}>Warrant to Act</span>
                    </a>
                    <a href="#" className="quick-link-btn" style={{ padding: '0.8rem 1.5rem', border: '1px solid var(--color-text)', borderRadius: '50px', textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      <span className="mono" style={{ fontSize: '0.9rem' }}>Client Profile</span>
                    </a>
                    <a href="#" className="quick-link-btn" style={{ padding: '0.8rem 1.5rem', border: '1px solid var(--color-text)', borderRadius: '50px', textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                      <span className="mono" style={{ fontSize: '0.9rem' }}>Data Privacy Policy</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* EXPERTISE & VISION */}
            <section className="section section-gallery" id="expertise" style={{paddingTop: "5vh"}}>
              <div className="container">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "2rem"}}>
                  <div className="reveal-up" style={{width: "100%", maxWidth: "300px", margin: "0 auto"}}>
                    <img src="/logo.jpg" alt="Nuha Associates Logo" style={{width: "100%", height: "auto", mixBlendMode: "multiply", objectFit: "contain"}} />
                  </div>
                  <div className="reveal-up" style={{maxWidth: "800px"}}>
                    <h2 className="section-title" style={{position: "static", marginBottom: "2rem", paddingBottom: "0"}}>EXPERTISE</h2>
                    <p className="lead-text" style={{padding: "1rem 0", fontSize: "clamp(1.5rem, 3vw, 2.5rem)"}}>
                      At Nuha & Associates, we understand that in 2026, cash flow is the lifeblood of the construction industry. Based in the heart of Selangor, we represent specialist contractors who have been sidelined by large conglomerates.
                      <br /><br />
                      We don't believe in long, drawn-out trials when a debt is clearly admitted. We specialize in Winding-Up Petitions, with an aim to turn a "refusal to pay" into a legal trigger to recover what is yours.
                    </p>
                    <p className="gallery-caption mono" style={{marginTop: "2rem", opacity: 0.7}}>CORPORATE INSOLVENCY AND INFRASTRUCTURE DEBT RECOVERY.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* MILESTONES */}
            <section className="section section-experience" id="milestones">
              <div className="container">
                <h2 className="section-title">
                  <ScrambleText text="MILESTONES" />
                </h2>

                <div className="work-list">
                  <div className="work-item reveal-up">
                    <div className="work-meta mono">2025</div>
                    <h3 className="work-company">BOUTIQUE FIRM OF THE YEAR (INSOLVENCY)</h3>
                    <p className="work-role mono">MALAYSIAN TECH-LAW REVIEW</p>
                    <ul className="work-details">
                      <li>Recognized for our innovative use of Companies Law and Bankruptcy Act in the data center and construction sectors.</li>
                    </ul>
                  </div>

                  <div className="work-item reveal-up">
                    <div className="work-meta mono">3 CONSECUTIVE YEARS</div>
                    <h3 className="work-company">TIER 1 RANKING - DISPUTE RESOLUTION</h3>
                    <p className="work-role mono">SELANGOR</p>
                    <ul className="work-details">
                      <li>Ranked as a leading firm for high-value debt recovery in Selangor.</li>
                    </ul>
                  </div>
                  
                  <div className="work-item reveal-up">
                    <div className="work-meta mono">PARTNERSHIP</div>
                    <h3 className="work-company">STRATEGIC LEGAL PARTNER</h3>
                    <p className="work-role mono">SCIDA</p>
                    <ul className="work-details">
                      <li>Official legal panelist for the Selangor Construction & Interior Design Association.</li>
                    </ul>
                  </div>

                  <div className="work-item reveal-up">
                    <div className="work-meta mono">SUCCESS RATE</div>
                    <h3 className="work-company">100% SUCCESS IN UNDISPUTED DEBT</h3>
                    <p className="work-role mono">WINDING-UP PETITIONS</p>
                    <ul className="work-details">
                      <li>We have never lost a winding-up petition where the debt was backed by a written admission or settlement letter.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* OUR TEAM */}
            <section className="section section-skills" id="team">
              <div className="container" style={{maxWidth: "1000px"}}>
                <h2 className="section-title">
                  <ScrambleText text="OUR TEAM" />
                </h2>

                <div className="skills-grid" style={{gap: "4rem", marginTop: "4rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"}}>
                  <div className="skill-category reveal-up" style={{textAlign: "center", borderTop: "none"}}>
                    <div style={{width: "200px", height: "200px", borderRadius: "50%", margin: "0 auto 1.5rem", backgroundImage: "url('/team/Nur Nuha.jpg')", backgroundSize: "cover", backgroundPosition: "top center", border: "2px solid var(--color-text)"}}></div>
                    <h3>NUR NUHA</h3>
                    <p className="mono">MANAGING PARTNER</p>
                    <p className="mono" style={{opacity: 0.6, marginTop: "0.5rem", fontSize: "0.9rem"}}>Corporate Litigation Specialist</p>
                  </div>
                  <div className="skill-category reveal-up" style={{textAlign: "center", borderTop: "none"}}>
                    <div style={{width: "200px", height: "200px", borderRadius: "50%", margin: "0 auto 1.5rem", backgroundImage: "url('/team/Nur Liyana.jpg')", backgroundSize: "cover", backgroundPosition: "top center", border: "2px solid var(--color-text)"}}></div>
                    <h3>NURLIYANA AMANI</h3>
                    <p className="mono">SENIOR PARTNER</p>
                    <p className="mono" style={{opacity: 0.6, marginTop: "0.5rem", fontSize: "0.9rem"}}>Infrastructure Disputes Expert</p>
                  </div>
                </div>
                
                <div className="reveal-up" style={{marginTop: "5rem", textAlign: "center"}}>
                  <h3 style={{fontSize: "2rem", marginBottom: "3rem", borderTop: "2px solid var(--color-text)", paddingTop: "3rem"}}>TEAM OF SENIOR ASSOCIATES</h3>
                  <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem"}}>
                    <div style={{width: "100%", maxWidth: "600px", aspectRatio: "16/9", borderRadius: "10px", margin: "0 auto", backgroundImage: "url('/team/Team.jpg')", backgroundSize: "cover", backgroundPosition: "center", border: "2px solid var(--color-text)"}}></div>
                    <div style={{display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", maxWidth: "800px"}}>
                      <div style={{textAlign: "center"}}>
                        <p className="mono" style={{fontSize: "1.2rem"}}>HAMZAH SHAHADRIAN</p>
                      </div>
                      <div style={{textAlign: "center"}}>
                        <p className="mono" style={{fontSize: "1.2rem"}}>YASMIN AZEZEE</p>
                      </div>
                      <div style={{textAlign: "center"}}>
                        <p className="mono" style={{fontSize: "1.2rem"}}>NURUL IMAN</p>
                      </div>
                      <div style={{textAlign: "center"}}>
                        <p className="mono" style={{fontSize: "1.2rem"}}>AINA AZRINA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* TESTIMONIES */}
            <section className="section section-academics" id="testimonies">
              <div className="container">
                <h2 className="section-title">
                  <ScrambleText text="TESTIMONIES" />
                </h2>

                <div className="timeline-list">
                  <div className="timeline-item reveal-up">
                    <div className="timeline-year mono">FEB 2025</div>
                    <div className="timeline-content">
                      <h3 className="timeline-degree">SOUMU CO.</h3>
                      <p className="timeline-major mono">EXTERIOR DESIGN</p>
                      <p className="timeline-school" style={{textTransform: "none", opacity: 0.8}}>"We were owed RM 30 million for an exterior design project. The debtor thought they could ignore us because they were a large 'Business Group.' Nuha & Associates didn't waste time with a 2-year trial; they went straight for a Winding-Up Petition. The debtor settled within weeks of the court hearing. Highly professional."</p>
                    </div>
                  </div>
                  <div className="timeline-item reveal-up">
                    <div className="timeline-year mono">MAY 2025</div>
                    <div className="timeline-content">
                      <h3 className="timeline-degree">ADOR SDN BHD</h3>
                      <p className="timeline-major mono">CORPORATE</p>
                      <p className="timeline-school" style={{textTransform: "none", opacity: 0.8}}>"The lawyers at Nuha & Associates have a forensic eye for detail. They found the admission of debt in a single letter that other firms overlooked. We recovered 100% of the outstanding sum without a full trial."</p>
                    </div>
                  </div>
                  <div className="timeline-item reveal-up">
                    <div className="timeline-year mono">SEP 2025</div>
                    <div className="timeline-content">
                      <h3 className="timeline-degree">AL-FAYYAD CONSTRUCTION</h3>
                      <p className="timeline-major mono">CONSTRUCTION</p>
                      <p className="timeline-school" style={{textTransform: "none", opacity: 0.8}}>"As a specialist contractor, cash flow is everything. Nuha & Associates successfully argued that the parent company's letter of undertaking was binding. Their expertise in corporate law is unmatched in Selangor."</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CLIENT PORTAL */}
            <section className="section section-projects" id="portal">
              <div className="container">
                <h2 className="section-title">
                  <ScrambleText text="CLIENT PORTAL" />
                </h2>
                
                <p className="lead-text reveal-up" style={{marginBottom: "3rem"}}>
                  INSERT YOUR IC NUMBER AND THE LAST 2 DIGITS OF YOUR PHONE MOBILE NUMBER TO TRACK YOUR CASE.
                </p>

                <div className="project-list">
                  <div className="project-card reveal-up">
                    <h3>24/7 CASE TRACKING</h3>
                    <p className="mono">See the exact status of your case and court dates.</p>
                  </div>
                  <div className="project-card reveal-up">
                    <h3>LIVE COUNTDOWN</h3>
                    <p className="mono">A digital clock tracking the 21-day statutory period for the debtor to respond.</p>
                  </div>
                  <div className="project-card reveal-up">
                    <h3>INSTANT DOCUMENT ACCESS</h3>
                    <p className="mono">Download Court Orders, Affidavits, and the necessary forms instantly.</p>
                  </div>
                  <div className="project-card reveal-up">
                    <h3>SECURE DIRECT MESSAGING</h3>
                    <p className="mono">Direct line to your lead counsel for confidential updates.</p>
                  </div>
                </div>
                
                <div className="reveal-up" style={{marginTop: "4rem"}}>
                    <a className="contact-link mono" href="http://www.courtdates.nuhaassocs.com" target="_blank" style={{fontSize: "1.5rem", borderBottom: "1px solid currentColor", paddingBottom: "0.5rem"}}>
                      <ScrambleText text="LOGIN TO PORTAL &rarr;" />
                    </a>
                </div>
              </div>
            </section>

            {/* PRICING */}
            <section className="section section-pricing" id="pricing">
              <div className="container">
                <h2 className="section-title">
                  <ScrambleText text="FIRM PRICE LIST" />
                </h2>
                
                <p className="lead-text reveal-up" style={{marginBottom: "3rem", textAlign: "center"}}>
                  TRANSPARENT FEE STRUCTURE
                </p>

                <div className="pricing-table reveal-up" style={{maxWidth: "800px", margin: "0 auto", border: "1px solid var(--color-text)", borderRadius: "8px", overflow: "hidden"}}>
                  <div style={{display: "flex", borderBottom: "1px solid var(--color-text)", padding: "1.5rem", backgroundColor: "rgba(100, 100, 100, 0.1)"}}>
                    <div style={{flex: 1, fontWeight: "bold"}} className="mono">SERVICE</div>
                    <div style={{width: "150px", fontWeight: "bold", textAlign: "right"}} className="mono">FEE (RM)</div>
                  </div>
                  <div style={{display: "flex", borderBottom: "1px solid var(--color-text)", padding: "1.5rem", alignItems: "center"}}>
                    <div style={{flex: 1}} className="mono">Consultation</div>
                    <div style={{width: "150px", textAlign: "right", fontSize: "1.2rem"}}>500</div>
                  </div>
                  <div style={{display: "flex", borderBottom: "1px solid var(--color-text)", padding: "1.5rem", alignItems: "center"}}>
                    <div style={{flex: 1}} className="mono">Notice of Demand</div>
                    <div style={{width: "150px", textAlign: "right", fontSize: "1.2rem"}}>1,500</div>
                  </div>
                  <div style={{display: "flex", padding: "1.5rem", alignItems: "center"}}>
                    <div style={{flex: 1}} className="mono">Winding-Up Petition Filing</div>
                    <div style={{width: "150px", textAlign: "right", fontSize: "1.2rem"}}>5,000</div>
                  </div>
                </div>
              </div>
            </section>

            {/* CONTACT & FOOTER */}
            <section className="section section-resume" id="contact">
              <div className="container">
                <h2 className="section-title">
                  <ScrambleText text="CONTACT US" />
                </h2>
                <div className="resume-content reveal-up">
                  <p className="lead-text">B-1-16, VISTA ALAM, SEKSYEN 14, 40100 SHAH ALAM, SELANGOR DARUL EHSAN, MALAYSIA<br /><br />OFFICE HOURS: MON - FRI | 9:00 AM - 6:00 PM</p>

                  <div className="contact-links mono">
                    <a className="contact-link" href="mailto:nuhaassociates@gmail.com">
                      <ScrambleText text="NUHAASSOCIATES@GMAIL.COM" />
                    </a>
                    <a className="contact-link" href="tel:+60355128877">
                      <ScrambleText text="+603-5512 8877" />
                    </a>
                    <span className="contact-link">
                      <ScrambleText text="+6017 475 2325 (MISS LIYANA)" />
                    </span>
                    <span className="contact-link">
                      <ScrambleText text="+6011 5500 6922 (MISS NUHA)" />
                    </span>
                  </div>
                  
                  <div style={{marginTop: "3rem"}}>
                    <a className="contact-link mono" href="https://customerreviews.google.com/" target="_blank">
                      <ScrambleText text="CHECK US OUT ON GOOGLE REVIEWS" />
                    </a>
                  </div>
                  
                  <div style={{marginTop: "4rem", textAlign: "center", borderTop: "1px solid rgba(100, 100, 100, 0.2)", paddingTop: "2rem"}}>
                    <a href="https://docs.google.com/spreadsheets" target="_blank" rel="noopener noreferrer" className="mono" style={{textDecoration: "none", color: "inherit", opacity: 0.5, fontSize: "0.85rem", transition: "opacity 0.3s"}} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.5'}>
                      PRIVATE (STAFF PORTAL) &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
