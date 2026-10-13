const features = [
  { number: "01", title: "One API, many models", description: "Route requests across leading model providers through one consistent interface.", detail: "Unified model access" },
  { number: "02", title: "Production-ready by default", description: "Track latency, usage, and errors from the same place you manage deployments.", detail: "Observability built in" },
  { number: "03", title: "Control that scales", description: "Set team roles, usage limits, and access policies as your product grows.", detail: "Governance included" },
];

export default function Section2() {
  return (
    <section className="cs-feature-section" id="features">
      <div className="cs-container">
        <div className="cs-section-header">
          <span className="section-eyebrow">Everything in one workflow</span>
          <h2>From first prompt to <span>production.</span></h2>
          <p>All the essentials for building useful AI products, without stitching together another toolchain.</p>
        </div>
        <div className="cs-grid">
          {features.map((feature) => (
            <article className="cs-card" key={feature.number}>
              <div className="feature-card-top"><span>{feature.number}</span><span className="feature-spark" aria-hidden="true">✳</span></div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-detail"><span className="feature-check" aria-hidden="true">✓</span>{feature.detail}</div>
            </article>
          ))}
        </div>
        <a className="features-link" href="#pricing">See plans that fit your team <span aria-hidden="true">→</span></a>
      </div>
    </section>
  );
}