import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Ying Liu",
  description:
    "Product Designer in Sacramento, CA, designing with empathy that's practiced, not performed.",
  openGraph: {
    title: "About — Ying Liu",
    description:
      "Product Designer in Sacramento, CA, designing with empathy that's practiced, not performed.",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="shadow-text top">Ying Liu</div>

        <p className="about-eyebrow">Product Designer · Sacramento, CA</p>

        <div className="polaroid">
          <img src="/images/site/polaroid_portrait_photo.png" alt="Ying Liu" />
        </div>

        <p className="about-tagline">
          Using my intuition to turn
          <br />
          ambiguity into clarity through
          <br />
          grounded experiences.
        </p>

        <div className="shadow-text bottom">瑩</div>
      </section>

      <section className="bio-section">
        <p className="bio-label">About</p>
        <p className="bio-text">
          I grew up having fun through all creative mediums (making duct tape
          wallets and miniature furniture for my LPS, taking every art elective,
          and playing minecraft with my cousins) it was how I made sense of the
          world as an only child. But what actually shaped my instincts as a
          designer was growing up with immigrant Chinese parents. It taught me
          to read the room, pick up on what people aren&apos;t saying, and pay
          attention to whether something is actually working for them.
        </p>
        <p className="bio-text">
          That&apos;s what I bring into my work: empathy that&apos;s practiced,
          not performed. I design by listening first — then turning what I hear
          into something clear and useful.
        </p>
        <p className="bio-text">
          Outside of design, you&apos;ll find me creating content on{" "}
          <a
            href="https://www.tiktok.com/@yingwliu"
            target="_blank"
            rel="noopener"
            className="bio-link"
          >
            TikTok
          </a>
          , sharing learnings on{" "}
          <a
            href="https://medium.com/@yywliu"
            target="_blank"
            rel="noopener"
            className="bio-link"
          >
            Medium
          </a>
          , or{" "}
          <span className="hover-video-trigger">
            lifting at the gym
            <span className="hover-video">
              <img src="/images/site/gym-hover.gif" alt="Ying lifting" />
            </span>
          </span>
          . Balance keeps everything sharp.
        </p>
      </section>

      <div className="details-row">
        <div className="detail-item">
          <p className="detail-label">Currently</p>
          <p className="detail-value">Open to opportunities</p>
        </div>
        <div className="detail-item">
          <p className="detail-label">Previously</p>
          <p className="detail-value">Ticketmaster</p>
        </div>
        <div className="detail-item">
          <p className="detail-label">Education</p>
          <p className="detail-value">UC Davis</p>
        </div>
      </div>

      <section className="interests-section">
        <p className="interests-label">Products I&apos;d love to work on</p>
        <p className="interests-list">
          <span>Fintech</span>
          <span>Productivity Tools</span>
          <span>Social Media</span>
          <span>Consumer-Facing</span>
          <span>Anime</span>
          <span>Overwatch</span>
          <span>Fashion</span>
        </p>
      </section>

      <section className="connect-section">
        <div className="connect-links">
          <a href="https://linkedin.com/in/yingwliu" target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a href="mailto:yxngliu@gmail.com">Email</a>
          <a href="https://medium.com/@yywliu" target="_blank" rel="noopener">
            Medium
          </a>
          <a
            className="connect-resume"
            href="https://drive.google.com/file/d/1qB0c1SUs6PF13SnWzXNWGTpOsIXcYJKH/view?usp=sharing"
            target="_blank"
            rel="noopener"
          >
            Resume
          </a>
        </div>
      </section>
    </>
  );
}
