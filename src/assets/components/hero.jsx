export default function Hero() {
  return (
    <>
      <section class="hero-section">
        <div class="hero-container">
          <div class="hero-content">
            <h1 class="hero-title">
              Ship AI Features <br />
              <span>10x Faster.</span>
            </h1>
            <p class="hero-description">
              The unified platform for developers to build, deploy, and scale AI
              models without the infrastructure headache.
            </p>
            <div class="hero-buttons">
              <a href="#" class="btn-primary">
                Start Free Trial
              </a>
              <a href="#" class="btn-secondary">
                View Documentation
              </a>
            </div>
          </div>

          <div class="hero-graphic">
            <div class="terminal-window">
              <div class="terminal-tabs">
                <span class="tab active">npm</span>
                <span class="tab">yarn</span>
                <span class="tab">pnpm</span>
              </div>
              <div class="terminal-body">
                <div class="command-line">
                  <code>npx aether-ai@latest init</code>
                  <button class="copy-btn" title="Copy code">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
                <div class="copied-badge">Copied!</div>
              </div>
              <div class="terminal-footer-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
            <div class="terminal-stand-neck"></div>
            <div class="terminal-stand-base"></div>
          </div>
        </div>
        <div class="hero-grid-overlay"></div>
      </section>
      <section class="marquee-section">
        <div class="marquee-container">
          <span class="ticker-label">Trusted By Industry Leaders</span>
          <div class="marquee-wrapper">
            <div class="marquee-track">
              <div class="marquee-item">
                <span class="brand-icon">▲</span> Vercel
              </div>
              <div class="marquee-item">
                <span class="brand-icon">🐙</span> GitHub
              </div>
              <div class="marquee-item">
                <span class="brand-icon">💬</span> Slack
              </div>
              <div class="marquee-item">
                <span class="brand-icon">🐳</span> Docker
              </div>
              <div class="marquee-item">
                <span class="brand-icon">⚡</span> Supabase
              </div>
              <div class="marquee-item">
                <span class="brand-icon">🛡️</span> Cloudflare
              </div>
              <div class="marquee-item">
                <span class="brand-icon">▲</span> Vercel
              </div>
              <div class="marquee-item">
                <span class="brand-icon">🐙</span> GitHub
              </div>
              <div class="marquee-item">
                <span class="brand-icon">💬</span> Slack
              </div>
              <div class="marquee-item">
                <span class="brand-icon">🐳</span> Docker
              </div>
              <div class="marquee-item">
                <span class="brand-icon">⚡</span> Supabase
              </div>
              <div class="marquee-item">
                <span class="brand-icon">🛡️</span> Cloudflare
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
