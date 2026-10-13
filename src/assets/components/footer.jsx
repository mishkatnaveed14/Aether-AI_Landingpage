import { useState } from "react";

export default function Footer() {
  const [message, setMessage] = useState("");

  function subscribe(event) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email").toString().trim();
    const existing = JSON.parse(window.localStorage.getItem("aether-newsletter") || "[]");
    if (!existing.includes(email)) {
      window.localStorage.setItem("aether-newsletter", JSON.stringify([...existing, email]));
    }
    setMessage("Signup saved on this device.");
    event.currentTarget.reset();
  }

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <a className="footer-logo" href="#home"><span className="logo-icon" aria-hidden="true">✳</span> Aether<span>AI</span></a>
            <p className="footer-desc">A clear path to production AI, from first experiment to the systems your customers rely on.</p>
            <a className="footer-email" href="mailto:hello@aether.ai">hello@aether.ai <span aria-hidden="true">↗</span></a>
          </div>
          <div className="footer-links-col"><h2>Explore</h2><ul><li><a href="#features">Platform</a></li><li><a href="#stories">Customer stories</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#faq">FAQs</a></li></ul></div>
          <div className="footer-newsletter-col">
            <h2>Product notes</h2>
            <p>Occasional updates from the AetherAI team.</p>
            <form className="newsletter-form" onSubmit={subscribe}>
              <label className="visually-hidden" htmlFor="newsletter-email">Email address</label>
              <input id="newsletter-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
              <button type="submit" aria-label="Join the mailing list">Join <span aria-hidden="true">↗</span></button>
            </form>
            <p className="newsletter-message" role="status">{message}</p>
            <p className="newsletter-note">This demo stores your signup in this browser only.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AetherAI. All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
