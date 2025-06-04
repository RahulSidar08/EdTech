import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; 

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the scholarship finder work?",
      answer:
        "We match your profile with available scholarships and help you apply.",
    },
    {
      question: "Is the platform free to use?",
      answer:
        "Yes, we offer a free plan with essential features. A premium plan is available for additional benefits.",
    },
    {
      question: "How do I track my university applications?",
      answer:
        "You can use our application tracking feature to monitor your application status in real time.",
    },
    {
      question: "Can I get personalized course recommendations?",
      answer:
        "Yes! Our AI-powered system suggests courses based on your interests and career goals.",
    },
    {
      question: "How can I contact support?",
      answer: (
        <>
          You can reach out to us via email at{" "}
          <a href="mailto:support@edtech.com" className="text-blue-600 underline">
            support@edtech.com
          </a>
          .
        </>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-10 px-4 sm:px-6 lg:px-8 bg-white text-center dark:bg-gray-700 dark:text-white transition duration-300"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto text-left space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 dark:border-gray-600 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-lg font-semibold focus:outline-none"
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <span className="ml-4">
                {openIndex === index ? (
                  <Minus size={20} className="text-gray-700 dark:text-gray-300" />
                ) : (
                  <Plus size={20} className="text-gray-700 dark:text-gray-300" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
