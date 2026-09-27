export default function Faq() {
  return (
    <>
      <section style={{
        
      }} class="faq-section">
        <div class="faq-container">
          <h2 class="section-title">FAQ Accordion</h2>

          <div class="faq-accordion-wrapper">
            <div class="faq-item active">
              <button class="faq-question">
                <span>How does AetherAI integrate with existing COCO?</span>
                <span class="faq-icon">⌄</span>
              </button>
              <div class="faq-answer">
                <p>
                  AetherAI integrates seamlessly with existing COCO
                  architectures through standard API endpoints and lightweight
                  SDKs, allowing you to deploy models without changing your core
                  pipeline setup.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>How does AetherAI integrate with existing CGEO?</span>
                <span class="faq-icon">⌄</span>
              </button>
              <div class="faq-answer">
                <p>
                  Our platform provides specialized connectors for CGEO
                  frameworks, automatically mapping parameters and syncing data
                  streams with minimal configuration overhead.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>How does AetherAI integrate with existing CUE07?</span>
                <span class="faq-icon">⌄</span>
              </button>
              <div class="faq-answer">
                <p>
                  AetherAI integrates with existing CUE07 structures via robust
                  security protocols and real-time synchronization pipelines,
                  ensuring safe data transit and minimal latency.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>How does AetherKI integrate with existing COCO?</span>
                <span class="faq-icon">⌄</span>
              </button>
              <div class="faq-answer">
                <p>
                  The integration utilizes cross-platform adapters designed to
                  bridge compatibility layers securely, making data sharing and
                  model orchestration effortless.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>How does AetherAI integrate with existing COCO?</span>
                <span class="faq-icon">⌄</span>
              </button>
              <div class="faq-answer">
                <p>
                  Setup can be completed in minutes using our automated CLI tool
                  (`npx aether-ai@latest init`), mapping all dependencies and
                  configurations instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
