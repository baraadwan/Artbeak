"use client";

import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Why's Hubfolio instead of full-time designer?",
    answer: "",
  },
  {
    id: "2",
    question: "Speed of design delivery?",
    answer:
      "How quick is quick? For most design, we're talking 2-3 business days. We balance speed with quality, ensuring you get top-north design swiftly",
  },
  {
    id: "3",
    question: "What's the Hubfolio progress like?",
    answer: "",
  },
  {
    id: "4",
    question: "In which program do you create designs?",
    answer: "",
  },
  {
    id: "5",
    question: "What if i don't like design?",
    answer: "",
  },
  {
    id: "6",
    question: "Are there any refunds?",
    answer: "",
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string>("2"); // Start with second item open

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? "" : id);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            <span className="text-white">Ask Us</span>
            <span className="text-blue-400 italic"> Anything</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openItem === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-lg transition-all duration-300 ${
                  isOpen ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <span
                    className={`text-lg font-medium ${
                      isOpen ? "text-white" : "text-white"
                    }`}
                  >
                    {item.question}
                  </span>

                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <div className="w-6 h-6 text-white">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-6 h-6 text-yellow-400">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </button>

                {/* Answer */}
                {isOpen && item.answer && (
                  <div className="px-6 pb-6">
                    <p className="text-white text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
