import React, { useState } from "react";
import "./FAQAccordion.css";
import type { FAQ } from "../../types/tour";

interface FAQAccordionProps {
  faqs: FAQ[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`faq-item ${expanded === faq.id ? "expanded" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleExpand(faq.id)}
              aria-expanded={expanded === faq.id}
            >
              <span className="question-text">{faq.question}</span>
              <span className="faq-icon">
                {expanded === faq.id ? "−" : "+"}
              </span>
            </button>
            {expanded === faq.id && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
