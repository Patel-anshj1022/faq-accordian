// src/components/FAQAccordion.jsx

import React, { useState } from 'react';
import './FAQAccordian.css';


const faqs = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    question: "What is a component?",
    answer: "A component is a reusable piece of UI in a React application."
  },
  {
    question: "What is a hook in React?",
    answer: "Hooks are special functions that let you use state and other features in functional components."
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="accordion">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <div
              className="faq-question"
              role="button"
              tabIndex={0}
              onClick={() => toggleFAQ(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggleFAQ(index);
              }}
            >
              {faq.question}
              <span className={`arrow ${isOpen ? 'rotate' : ''}`}>▼</span>
            </div>
            <div className="faq-answer">
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
