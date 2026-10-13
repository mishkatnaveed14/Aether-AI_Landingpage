import { useState } from "react";

const commands = {
  npm: "npx aether-ai@latest init",
  yarn: "yarn dlx aether-ai@latest init",
  pnpm: "pnpm dlx aether-ai@latest init",
};

export default function Hero() {
  const [packageManager, setPackageManager] = useState("npm");
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(commands[packageManager]);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-kicker"><span className="kicker-dot" /> AI infrastructure, minus the overhead</span>
            <h1 className="hero-title">Ship AI features <span>10× faster.</span></h1>
            <p className="hero-description">
              One calm, reliable platform to build, deploy, and scale AI products. Spend less time wiring infrastructure and more time shipping what matters.
            </p>
            <div className="hero-buttons">
              <a href="#pricing" className="btn-primary">Start building <span aria-hidden="true">↗</span></a>
              <a href="#features" className="btn-secondary">Explore the platform</a>
            </div>
            <div className="hero-proof"><span aria-hidden="true">✦ ✦ ✦ ✦ ✦</span> Built for teams who ship</div>
          </div>

          <div className="hero-graphic" aria-label="Aether AI quick-start command">
            <div className="terminal-window">
              <div className="terminal-topbar">
                <span className="terminal-lights"><i /><i /><i /></span>
                <span>quickstart / terminal</span>
                <span className="terminal-ready">● ready</span>
              </div>
              <div className="terminal-tabs" role="tablist" aria-label="Package manager">
                {Object.keys(commands).map((manager) => (
                  <button
                    className={`tab${packageManager === manager ? " active" : ""}`}
                    key={manager}
                    type="button"
                    role="tab"
                    aria-selected={packageManager === manager}
                    onClick={() => setPackageManager(manager)}
                  >{manager}</button>
                ))}
              </div>
              <div className="terminal-body">
                <div className="terminal-caption">Initialize your workspace</div>
                <div className="command-line">
                  <code><span>$</span> {commands[packageManager]}</code>
                  <button className="copy-btn" type="button" title="Copy command" aria-label="Copy command" onClick={copyCommand}>
                    {copied ? "✓" : "▢"}
                  </button>
                </div>
                <div className={`copied-badge${copied ? " visible" : ""}`} role="status">Copied to clipboard</div>
              </div>
              <div className="terminal-output"><span>✓</span> Workspace configured <span>·</span> 3.2s</div>
            </div>
            <div className="terminal-stand-neck" />
            <div className="terminal-stand-base" />
          </div>
        </div>
        <div className="hero-grid-overlay" />
      </section>

      <section className="cs-marquee-section" aria-label="Integrations">
        <div className="cs-marquee-container">
          <span className="cs-ticker-tag">Fits your stack</span>
          <div className="cs-marquee-track">
            <span className="cs-badge-item">Vercel</span>
            <span className="cs-badge-item">GitHub</span>
            <span className="cs-badge-item">Slack</span>
            <span className="cs-badge-item">Docker</span>
            <span className="cs-badge-item">Supabase</span>
          </div>
        </div>
      </section>
    </>
  );
}
