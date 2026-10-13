import { useState } from "react";

const questions = [
  [
    "How do I connect AetherAI to my existing stack?",
    "Use the SDK or REST API alongside your current services. You can start with one model endpoint and move workloads over without changing your application architecture.",
  ],
  [
    "Which models can I use?",
    "AetherAI supports leading hosted models and open-weight models, including GPT-4-class, Llama, and Mistral options. Availability depends on your selected plan and region.",
  ],
  [
    "Can I change plans at any time?",
    "Yes. Upgrade or downgrade from your workspace whenever your usage changes. Plan changes take effect on your next billing cycle.",
  ],
  [
    "How is my data protected?",
    "Requests are encrypted in transit, and workspace access can be managed by role. Review your organization's security requirements before sending sensitive data.",
  ],
  [
    "How quickly can I get started?",
    "Most teams can create a workspace in a few minutes. Run the quick-start command above, add your API key, and make your first request.",
  ],
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-heading">
          <span className="section-eyebrow">A few good questions</span>
          <h2 className="section-title">
            Clear answers, <span>no guesswork.</span>
          </h2>
        </div>
        <div className="faq-accordion-wrapper">
          {questions.map(([question, answer], index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            return (
              <article
                className={`faq-item${isOpen ? " active" : ""}`}
                key={question}
              >
                <h3>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div className="faq-answer" id={answerId}>
                    <p>{answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
