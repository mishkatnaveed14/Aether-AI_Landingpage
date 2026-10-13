import { useState } from "react";

const testimonials = [
  { name: "Alex Morgan", role: "CTO, Techflow", quote: "We moved from prototype to production without rebuilding our stack. The setup was refreshingly straightforward.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" },
  { name: "Robert Fox", role: "Lead AI Engineer", quote: "One place for routing, usage, and observability made our model operations much easier to reason about.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" },
  { name: "Sarah Jenkins", role: "Head of Product", quote: "We connected our first model in an afternoon and finally gave the team a workflow they enjoy using.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" },
];

const plans = [
  { name: "Pro", monthly: 19, yearly: 15, features: ["10,000 requests / month", "Analytics dashboard", "Llama and Mistral access", "Community support"] },
  { name: "Team", monthly: 49, yearly: 39, featured: true, features: ["Everything in Pro", "Unlimited model queries", "Monitoring and alerts", "Dedicated support and SLA"] },
];

export default function Section3() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <section className="testimonials-section" id="stories">
        <div className="testimonials-container">
          <div className="section-intro centered">
            <span className="section-eyebrow">Teams move faster</span>
            <h2 className="section-title">Built for the work <span>after the demo.</span></h2>
            <p className="section-subtitle">A reliable path from first request to production workloads.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(({ name, role, quote, image }) => (
              <article className="testimonial-card" key={name}>
                <div className="testimonial-mark" aria-hidden="true">“</div>
                <p className="testimonial-text">{quote}</p>
                <div className="testimonial-header">
                  <img src={image} alt="" className="avatar" loading="lazy" />
                  <div><h3>{name}</h3><span className="user-role">{role}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dynamic-pricing-section" id="pricing">
        <div className="pricing-container">
          <div className="pricing-header-wrap">
            <div className="section-intro">
              <span className="section-eyebrow">Straightforward pricing</span>
              <h2 className="section-title">Room to scale. <span>No surprises.</span></h2>
              <p className="section-subtitle">Start small, then choose the plan that fits your team.</p>
            </div>
            <div className="billing-toggle-container">
              <span className={!annual ? "billing-label selected" : "billing-label"}>Monthly</span>
              <button className={`billing-switch${annual ? " checked" : ""}`} type="button" role="switch" aria-checked={annual} aria-label="Toggle annual billing" onClick={() => setAnnual((value) => !value)}>
                <span />
              </button>
              <span className={annual ? "billing-label selected" : "billing-label"}>Yearly <span className="discount-badge">Save 20%</span></span>
            </div>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`pricing-plan-card${plan.featured ? " featured" : ""}`} key={plan.name}>
                {plan.featured && <span className="popular-tag">Most popular</span>}
                <div className="plan-top"><h3>{plan.name}</h3><span className="plan-caption">{plan.name === "Pro" ? "For makers" : "For teams"}</span></div>
                <div className="price-display"><span className="currency">$</span><span className="amount">{annual ? plan.yearly : plan.monthly}</span><span className="price-period">/ user / mo</span></div>
                <p className="plan-billing-note">{annual ? "Billed annually" : "Billed monthly"}</p>
                <ul className="plan-features">{plan.features.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
                <a className={`btn-plan${plan.featured ? " gradient" : " primary"}`} href={`mailto:hello@aether.ai?subject=${encodeURIComponent(`${plan.name} plan`)}`}>Choose {plan.name} <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
