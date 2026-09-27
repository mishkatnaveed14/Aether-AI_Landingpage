export default function Footer() {
  return (
    <>
      <footer class="footer-section">
        <div class="footer-container">
          <div class="footer-top-grid">
            <div class="footer-brand-col">
              <div class="footer-logo">
                <span class="logo-icon">▲</span> AetherAI
              </div>
              <p class="footer-desc">
                The unified platform for developers to build, deploy, and scale
                AI models without the infrastructure headache.
              </p>
              <div class="footer-socials">
                <a href="#" aria-label="Github">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            <div class="footer-links-col">
              <h4>Footer</h4>
              <ul>
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Solutions</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
              </ul>
            </div>

            <div class="footer-links-col">
              <h4>Tools</h4>
              <ul>
                <li>
                  <a href="#">React SDK</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Changelog</a>
                </li>
              </ul>
            </div>

            <div class="footer-links-col">
              <h4>Follow</h4>
              <ul>
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Discord</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </div>

            <div class="footer-newsletter-col">
              <h4>Newsletter</h4>
              <p>
                Subscribe to our newsletter for the latest updates and features.
              </p>
              <form class="newsletter-form" onsubmit="event.preventDefault();">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; 2026 AetherAI Platform. All rights reserved.</p>
            <div class="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
