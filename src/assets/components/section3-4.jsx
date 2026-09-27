export default function Section3() {
  return (
    <>
      <section class="testimonials-section">
        <div class="testimonials-container">
          <h2 class="section-title text-center">Loved by teams worldwide</h2>
          <p class="section-subtitle text-center">
            Trusted by teams working fast, from agile startups to enterprise
            powerhouses.
          </p>

          <div class="testimonials-grid">
            <div class="testimonial-card">
              <div class="testimonial-header">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                  alt="Alex Morgan"
                  class="avatar"
                />
                <div>
                  <h4>Alex Morgan</h4>
                  <span class="user-role">CTO at Techflow</span>
                </div>
              </div>
              <p class="testimonial-text">
                "AetherAI completely transformed our deployment pipeline. The
                inference latency drop was instantly noticeable across our
                clusters."
              </p>
              <div class="stars">★★★★★</div>
            </div>

            <div class="testimonial-card">
              <div class="testimonial-header">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                  alt="Robert Fox"
                  class="avatar"
                />
                <div>
                  <h4>Robert Fox</h4>
                  <span class="user-role">Lead AI Engineer</span>
                </div>
              </div>
              <p class="testimonial-text">
                "Scalability used to be our biggest bottleneck. With flexible
                tier scaling, our operational costs dropped by nearly 30%."
              </p>
              <div class="stars">★★★★★</div>
            </div>

            <div class="testimonial-card">
              <div class="testimonial-header">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                  alt="Sarah Jenkins"
                  class="avatar"
                />
                <div>
                  <h4>Sarah Jenkins</h4>
                  <span class="user-role">Head of Product</span>
                </div>
              </div>
              <p class="testimonial-text">
                "The dashboard integration is seamless. Setting up model
                performance monitoring took minutes instead of days."
              </p>
              <div class="stars">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      <section class="dynamic-pricing-section">
        <div class="pricing-container">
          <div class="pricing-header-wrap">
            <h2 class="section-title">Flexible Scaling, Predictable Costs.</h2>
            <div class="billing-toggle-container">
              <span class="billing-label">Monthly</span>
              <label class="toggle-switch">
                <input type="checkbox" id="billingToggle" />
                <span class="slider"></span>
              </label>
              <span class="billing-label">
                Annually <span class="discount-badge">Save 20%</span>
              </span>
            </div>
          </div>

          <div class="pricing-grid">
            <div class="pricing-plan-card">
              <div class="plan-top">
                <h3>Pro</h3>
                <div class="toggle-switch-small">
                  <input type="checkbox" checked id="pro-card-toggle" />
                  <label for="pro-card-toggle" class="slider-small"></label>
                </div>
              </div>
              <div class="price-display">
                <span class="currency">$</span>
                <span class="amount" id="proPrice">
                  19.00
                </span>
              </div>
              <ul class="plan-features">
                <li>
                  <span>✓</span> 10,000 Requests / mo
                </li>
                <li>
                  <span>✓</span> Standard Analytics Dashboard
                </li>
                <li>
                  <span>✓</span> Llama-3 & Mistral Access
                </li>
                <li>
                  <span>✓</span> Community Support
                </li>
                <li>
                  <span>✓</span> Choose Plan Access
                </li>
              </ul>
              <button class="btn-plan primary">Choose Plan</button>
            </div>

            <div class="pricing-plan-card featured">
              <div class="popular-tag">Most Popular</div>
              <div class="plan-top">
                <h3>Team</h3>
                <div class="toggle-switch-small">
                  <input type="checkbox" checked id="team-card-toggle" />
                  <label for="team-card-toggle" class="slider-small"></label>
                </div>
              </div>
              <div class="price-display">
                <span class="currency">$</span>
                <span class="amount" id="teamPrice">
                  49.00
                </span>
              </div>
              <ul class="plan-features">
                <li>
                  <span>✓</span> Unlimited Model Queries
                </li>
                <li>
                  <span>✓</span> Real-time Monitoring & Alerts
                </li>
                <li>
                  <span>✓</span> GPT-4 Turbo Integration
                </li>
                <li>
                  <span>✓</span> Dedicated Support & SLA
                </li>
                <li>
                  <span>✓</span> Choose Plan Access
                </li>
              </ul>
              <button class="btn-plan gradient">Choose Plan</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
