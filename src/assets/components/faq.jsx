import { useState } from "react";

const questions = [
  { id: "connect", question: "How do I connect AetherAI to my existing stack?", answer: "Use the SDK or REST API alongside your current services. You can start with one model endpoint and move workloads over without changing your application architecture." },
  { id: "models", question: "Which models can I use?", answer: "AetherAI supports leading hosted models and open-weight models, including GPT-4-class, Llama, and Mistral options. Availability depends on your selected plan and region." },
  { id: "plans", question: "Can I change plans at any time?", answer: "Yes. Upgrade or downgrade from your workspace whenever your usage changes. Plan changes take effect on your next billing cycle." },
  { id: "security", question: "How is my data protected?", answer: "Requests are encrypted in transit, and workspace access can be managed by role. Review your organization's security requirements before sending sensitive data." },
  { id: "start", question: "How quickly can I get started?", answer: "Most teams can create a workspace in a few minutes. Run the quick-start command above, add your API key, and make your first request." },
];

export default function Faq() {
  const [openId, setOpenId] = useState("connect");
  const [search, setSearch] = useState("");
  const normalizedSearch = search.trim().toLowerCase();
  const filteredQuestions = questions.filter(({ question, answer }) =>
    `${question} ${answer}`.toLowerCase().includes(normalizedSearch),
  );

  function handleQuestionKeyDown(event, index) {
    const keys = ["ArrowDown", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key)) return;

    const buttons = event.currentTarget
      .closest(".faq-accordion-wrapper")
      .querySelectorAll(".faq-question");
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? buttons.length - 1
        : (index + (event.key === "ArrowDown" ? 1 : -1) + buttons.length) % buttons.length;

    event.preventDefault();
    buttons[nextIndex]?.focus();
  }

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-heading">
          <span className="section-eyebrow">A few good questions</span>
          <h2 className="section-title">
            Clear answers, <span>no guesswork.</span>
          </h2>
          <p className="faq-intro">Find a quick answer about getting started, plans, or security.</p>
        </div>
        <label className="faq-search-wrap">
          <span className="faq-search-icon" aria-hidden="true">⌕</span>
          <input
            type="search"
            className="faq-search"
            aria-label="Search frequently asked questions"
            placeholder="Search questions and answers"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          {search && (
            <button type="button" className="faq-search-clear" aria-label="Clear search" onClick={() => setSearch("")}>×</button>
          )}
        </label>
        <p className="faq-result-count" aria-live="polite">
          {filteredQuestions.length} {filteredQuestions.length === 1 ? "answer" : "answers"}
        </p>
        <div className="faq-accordion-wrapper">
          {filteredQuestions.map(({ id, question, answer }, index) => {
            const isOpen = openId === id;
            const answerId = `faq-answer-${id}`;
            return (
              <article
                className={`faq-item${isOpen ? " active" : ""}`}
                key={id}
              >
                <h3>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenId(isOpen ? "" : id)}
                    onKeyDown={(event) => handleQuestionKeyDown(event, index)}
                  >
                    <span>{question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      +
                    </span>
                  </button>
                </h3>
                <div className="faq-answer" id={answerId} aria-hidden={!isOpen} inert={!isOpen}>
                  <div className="faq-answer-inner">
                    <p>{answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
          {filteredQuestions.length === 0 && (
            <p className="faq-empty" role="status">No matching answers. Try a different search.</p>
          )}
        </div>
      </div>
    </section>
  );
}
