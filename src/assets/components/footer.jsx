import { useState } from "react";

export default function Footer() {
  const [message, setMessage] = useState("");

  function subscribe(event) {
    event.preventDefault();
    const email = new FormData(event.currentTarget)
      .get("email")
      .toString()
      .trim();
    const existing = JSON.parse(
      window.localStorage.getItem("aether-newsletter") || "[]",
    );
    if (!existing.includes(email)) {
      window.localStorage.setItem(
        "aether-newsletter",
        JSON.stringify([...existing, email]),
      );
    }
    setMessage("Signup saved on this device.");
    event.currentTarget.reset();
  }

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        <div className="footer-index-row">
          <span>
            <span className="footer-index-symbol">✳</span> AETHERAI / 2026
          </span>
          <span>MODEL INFRASTRUCTURE FOR WHAT'S NEXT</span>
          <span>01 — 26</span>
        </div>

        <div className="footer-main">
          <div className="footer-main-copy">
            <p className="footer-kicker">THE NEXT RELEASE STARTS HERE</p>
            <h2>
              Make the next <em>big thing.</em>
            </h2>
            <a className="footer-cta" href="mailto:hello@aether.ai">
              Talk to our team <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="footer-newsletter-col">
            <p className="footer-note-number">FIELD NOTES / 001</p>
            <h3>Signal, not noise.</h3>
            <p>
              New ideas and product notes, when we have something worth sharing.
            </p>
            <form className="newsletter-form" onSubmit={subscribe}>
              <label className="visually-hidden" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
              <button type="submit" aria-label="Join the mailing list">
                Join <span aria-hidden="true">↗</span>
              </button>
            </form>
            <p className="newsletter-message" role="status">
              {message}
            </p>
            <p className="newsletter-note">Saved locally in this demo.</p>
          </div>
        </div>

        <div className="footer-details">
          <div className="footer-brand-col">
            <a className="footer-logo" href="#home">
              <span className="logo-icon" aria-hidden="true">
                ✳
              </span>
              Aether<span>AI</span>
            </a>
            <p className="footer-desc">
              Build with clarity. Ship with confidence.
            </p>
          </div>
          <div className="footer-links-col">
            <h2>Explore</h2>
            <a href="#features">Platform</a>
            <a href="#stories">Customer stories</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQs</a>
          </div>
          <div className="footer-links-col">
            <h2>Say hello</h2>
            <a href="mailto:hello@aether.ai">hello@aether.ai</a>
            <a href="#home">Back to the top ↑</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AetherAI. Built for the builders.</p>
          <span>DESIGNED TO MOVE YOU FORWARD</span>
        </div>
      </div>
    </footer>
  );
}
