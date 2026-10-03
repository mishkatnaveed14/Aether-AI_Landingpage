export default function Section2() {
  return (
    <>
      {/* <section class="feature-section">
        <div class="feature-container">
          <h2 class="section-title">Engineered for Velocity</h2>

          <div class="features-grid">
            <div class="feature-card large-card">
              <div class="card-header">
                <h3>Model Performance Dashboard</h3>
                <div class="toggle-switch-small">
                  <input type="checkbox" checked id="perf-toggle" />
                  <label for="perf-toggle" class="slider-small"></label>
                </div>
              </div>
              <div class="card-body">
                <div class="inference-box">
                  <span class="inference-title">Inference Latency (ms)</span>
                  <div class="status-live">
                    <span class="dot"></span> Live • Chart.js
                  </div>
                </div>

                <div class="chartjs-container">
                  <div class="chart-y-axis">
                    <span>2.0s</span>
                    <span>1.35s</span>
                    <span>0.7s</span>
                    <span>0s</span>
                  </div>
                  <div class="chart-canvas-area">
                    <div class="grid-line"></div>
                    <div class="grid-line"></div>
                    <div class="grid-line"></div>

                    <svg
                      viewBox="0 0 600 160"
                      class="chartjs-svg"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="chartGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stop-color="#6366f1"
                            stop-opacity="0.4"
                          />
                          <stop
                            offset="100%"
                            stop-color="#6366f1"
                            stop-opacity="0.0"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 120 Q 75 40, 150 90 T 300 60 T 450 30 T 600 70 L 600 160 L 0 160 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M 0 120 Q 75 40, 150 90 T 300 60 T 450 30 T 600 70"
                        fill="none"
                        stroke="#818cf8"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <circle
                        cx="530"
                        cy="45"
                        r="5"
                        fill="#38bdf8"
                        stroke="#ffffff"
                        stroke-width="2"
                        class="pulse-point"
                      />
                    </svg>
                  </div>
                </div>
                <div class="chart-x-axis">
                  <span>15:00</span>
                  <span>15:30</span>
                  <span>16:00</span>
                  <span>16:30</span>
                  <span>17:00</span>
                  <span>17:30</span>
                  <span>18:00</span>
                </div>

                <div class="model-tags-list">
                  <div class="model-tag-row">
                    <div class="tag-left">
                      <span class="badge-dot blue"></span>{" "}
                      <code>gpt-4-turbo</code>
                    </div>
                    <span class="status-badge stable">Optimal</span>
                  </div>
                  <div class="model-tag-row">
                    <div class="tag-left">
                      <span class="badge-dot green"></span>{" "}
                      <code>llama-3-70b</code>
                    </div>
                    <span class="status-badge stable">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="feature-card pricing-card">
              <div class="card-header">
                <h3>Pro Plan</h3>
                <div class="toggle-switch-small">
                  <input type="checkbox" id="pro-toggle" />
                  <label for="pro-toggle" class="slider-small"></label>
                </div>
              </div>
              <div class="card-body">
                <div class="price-tag">
                  $49<span class="price-sub">/mo</span>
                </div>
                <ul class="feature-list">
                  <li>
                    <span>✓</span> Model API Access
                  </li>
                  <li>
                    <span>✓</span> Advanced Analytics
                  </li>
                  <li>
                    <span>✓</span> Priority Support
                  </li>
                  <li>
                    <span>✓</span> Custom Rate Limits
                  </li>
                </ul>
                <a href="#" class="btn-choose-plan">
                  Choose Plan
                </a>
              </div>
            </div>

            <div class="feature-card pricing-card">
              <div class="card-header">
                <h3>Team Plan</h3>
                <div class="toggle-switch-small">
                  <input type="checkbox" checked id="team-toggle" />
                  <label for="team-toggle" class="slider-small"></label>
                </div>
              </div>
              <div class="card-body">
                <div class="price-tag">
                  $39<span class="price-sub">/mo</span>
                </div>
                <ul class="feature-list">
                  <li>
                    <span>✓</span> Everything in Pro
                  </li>
                  <li>
                    <span>✓</span> Team Workspace
                  </li>
                  <li>
                    <span>✓</span> Role-based Access
                  </li>
                  <li>
                    <span>✓</span> 99.9% Uptime SLA
                  </li>
                </ul>
                <a href="#" class="btn-choose-plan">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

    <section class="cs-feature-section">
      <div class="cs-container">
        <div class="cs-section-header">
          <h2>Interactive Modules & Features</h2>
          <p>Explore modern learning spaces built for high performance.</p>
        </div>

        <div class="cs-grid">
          {/* Card 1 */}
          <div class="cs-card highlight-card">
            <div class="cs-card-top">
              <span class="cs-pill">Live Workspace</span>
              <span class="dot-live"></span>
            </div>
            <h3>Real-time Code & AI Playground</h3>
            <p>Test models and code instantly with live container environments.</p>
            <div class="cs-mock-box">
              <code>&gt; aether-ai@latest init --template</code>
            </div>
          </div>

          {/* Card 2 */}
          <div class="cs-card">
            <h3>Flexible Pricing</h3>
            <div class="cs-price">$19<span>/mo</span></div>
            <ul class="cs-list">
              <li>✓ Full Course Access</li>
              <li>✓ AI Mentor Support</li>
              <li>✓ Custom Challenges</li>
            </ul>
            <button class="cs-btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
 </>
  );
}
