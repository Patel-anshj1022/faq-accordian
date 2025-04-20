import React from 'react';
import FAQAccordion from './components/FAQAccordion';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">❓ Frequently Asked Questions</h1>
      <FAQAccordion />
    </div>
  );
}

export default App;
