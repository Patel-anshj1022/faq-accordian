import React, { useState } from 'react';
import './components/FAQAccordion.css';

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
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
