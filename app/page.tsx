import type { Metadata } from "next";

// The site root carries the full identity rather than the "[Page] — Ying Liu"
// pattern the inner pages follow.
export const metadata: Metadata = {
  title: "Ying Liu — Product Designer",
  description:
    "Using a strategist's intuition to turn ambiguity into clarity through grounded experiences.",
  openGraph: {
    title: "Ying Liu — Product Designer",
    description:
      "Using a strategist's intuition to turn ambiguity into clarity through grounded experiences.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="hero-dark" id="hero">
        <div className="grain-overlay" />

        <div className="hero-content">
          <p className="hero-role">Product Designer</p>
          <h1 className="hero-name">
            <span className="calligraphy">
              Ying <span className="cjk">瀅</span>
            </span>
          </h1>
        </div>

        <div className="hero-bottom">
          <p className="hero-bio">
            Using a strategist&apos;s intuition to turn ambiguity into clarity
            through grounded experiences.
          </p>
        </div>

        <a href="#work" className="scroll-hint" aria-label="Scroll to work">
          <span>Work</span>
          <div className="scroll-line" />
        </a>
      </section>

      <section className="work-section" id="work">
        <p className="work-header fade-up">Selected Work</p>
        <div className="projects">
          <div className="projects-grid">
            <a
              className="project-card fade-up"
              href="/work/product-education-guide"
              target="_blank"
              rel="noopener"
            >
              <div className="project-image">
                <img
                  src="/images/product-education-guide/hero-mockup.jpg"
                  alt="Client Product Education Guide"
                />
              </div>
              <div className="project-info">
                <p className="project-title">
                  Ticketmaster / Client Product Education Guide
                </p>
                <p className="project-desc">
                  Redefining the framework around client product education
                  resources to help clients learn, troubleshoot, and discover
                  resources more effectively.
                </p>
                <div className="project-meta">
                  <div className="project-meta-item">
                    <p className="project-meta-label">Role</p>
                    <p className="project-meta-value">
                      Product Designer &amp; UX Researcher
                    </p>
                  </div>
                  <div className="project-meta-item">
                    <p className="project-meta-label">Year</p>
                    <p className="project-meta-value">2024</p>
                  </div>
                </div>
                <div className="project-arrow">View →</div>
              </div>
            </a>

            <a
              className="project-card fade-up"
              href="/ticketmaster-casestudy.html"
              target="_blank"
              rel="noopener"
            >
              <div className="project-image">
                <img src="/images/site/ipad-mockup.png" alt="Ticketmaster Support Community" />
              </div>
              <div className="project-info">
                <p className="project-title">
                  Ticketmaster / Support Community
                </p>
                <p className="project-desc">
                  Shaping navigation, content systems, and search to enable
                  scalable client self-service across 14 global markets.
                </p>
                <div className="project-meta">
                  <div className="project-meta-item">
                    <p className="project-meta-label">Role</p>
                    <p className="project-meta-value">Sole Product Designer</p>
                  </div>
                  <div className="project-meta-item">
                    <p className="project-meta-label">Year</p>
                    <p className="project-meta-value">2023 – 2025</p>
                  </div>
                </div>
                <div className="project-arrow">View →</div>
              </div>
            </a>

            <a
              className="project-card fade-up"
              href="/gsm-casestudy.html"
              target="_blank"
              rel="noopener"
            >
              <div className="project-image" style={{ background: "#1B3A5C" }}>
                <img src="/images/site/gsm-hero.png" alt="UC Davis GSM" />
              </div>
              <div className="project-info">
                <p className="project-title">UC Davis GSM / Alumni Platform</p>
                <p className="project-desc">
                  End-to-end UX and UI for UC Davis GSM&apos;s first alumni
                  platform, serving 80,000+ users.
                </p>
                <div className="project-meta">
                  <div className="project-meta-item">
                    <p className="project-meta-label">Role</p>
                    <p className="project-meta-value">Lead Product Designer</p>
                  </div>
                  <div className="project-meta-item">
                    <p className="project-meta-label">Year</p>
                    <p className="project-meta-value">2023</p>
                  </div>
                </div>
                <div className="project-arrow">View →</div>
              </div>
            </a>

            <a
              className="project-card fade-up"
              href="/bereal-casestudy.html"
              target="_blank"
              rel="noopener"
            >
              <div
                className="project-image project-image-bereal"
                style={{ background: "#0A0A09" }}
              >
                <img src="/images/site/bereal-card.png" alt="BeReal" />
              </div>
              <div className="project-info">
                <p className="project-title">BeReal / New Features</p>
                <p className="project-desc">
                  Exploring where BeReal could grow — designing features that
                  expand expression without breaking authenticity.
                </p>
                <div className="project-meta">
                  <div className="project-meta-item">
                    <p className="project-meta-label">Role</p>
                    <p className="project-meta-value">Product Designer</p>
                  </div>
                  <div className="project-meta-item">
                    <p className="project-meta-label">Year</p>
                    <p className="project-meta-value">2023</p>
                  </div>
                </div>
                <div className="project-arrow">View →</div>
              </div>
            </a>

            <a
              className="project-card fade-up"
              href="https://davisdesigninteractive.medium.com/netflix-party-case-study-ec1193f097c5"
              target="_blank"
              rel="noopener"
            >
              <div className="project-image" style={{ background: "#E8E6E3" }}>
                <img src="/images/site/netflix-card.png" alt="Netflix Party" />
              </div>
              <div className="project-info">
                <p className="project-title">Netflix Party / Redesign</p>
                <p className="project-desc">
                  Helping people stay connected while watching together during
                  COVID-19.
                </p>
                <div className="project-meta">
                  <div className="project-meta-item">
                    <p className="project-meta-label">Role</p>
                    <p className="project-meta-value">UX Designer</p>
                  </div>
                  <div className="project-meta-item">
                    <p className="project-meta-label">Year</p>
                    <p className="project-meta-value">2020</p>
                  </div>
                </div>
                <div className="project-arrow">View →</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
