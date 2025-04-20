import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is a component?",
    answer: "A component is a reusable piece of UI in a React app.",
  },
  {
    question: "What is state in React?",
    answer: "State is a built-in object that stores property values that belong to a component.",
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl mb-4 transition-all duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full px-6 py-4 text-lg font-medium text-left text-gray-800"
          >
            {faq.question}
            {activeIndex === index ? (
              <ChevronUp className="h-5 w-5 text-indigo-600" />
            ) : (
              <ChevronDown className="h-5 w-5 text-indigo-600" />
            )}
          </button>
          <div
            className={`px-6 pb-4 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
              activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
