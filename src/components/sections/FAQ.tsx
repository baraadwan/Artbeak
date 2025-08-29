"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Why's Hubfolio instead of full-time designer?",
    answer:
      "Hubfolio offers flexibility and cost-effectiveness compared to hiring a full-time designer. You get access to our entire team's expertise without the overhead of salary, benefits, and training costs.",
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
    answer:
      "Our process is streamlined for efficiency. We start with a discovery call, gather your requirements, create initial concepts, refine based on your feedback, and deliver final designs with all necessary assets and documentation.",
  },
  {
    id: "4",
    question: "In which program do you create designs?",
    answer:
      "We primarily work with industry-standard tools like Figma, Adobe Creative Suite, and Sketch. We can adapt to your preferred platform if you have specific requirements.",
  },
  {
    id: "5",
    question: "What if i don't like design?",
    answer:
      "We believe in getting it right. If you're not satisfied with the initial designs, we offer revision rounds to ensure the final product meets your expectations and business goals.",
  },
  {
    id: "6",
    question: "Are there any refunds?",
    answer:
      "We offer a satisfaction guarantee. If you're completely unsatisfied with our work and we cannot resolve the issues through revisions, we have a partial refund policy detailed in our service agreement.",
  },
  {
    id: "7",
    question: "Are there any refunds?",
    answer:
      "We offer a satisfaction guarantee. If you're completely unsatisfied with our work and we cannot resolve the issues through revisions, we have a partial refund policy detailed in our service agreement.",
  },
  {
    id: "8",
    question: "Are there any refunds?",
    answer:
      "We offer a satisfaction guarantee. If you're completely unsatisfied with our work and we cannot resolve the issues through revisions, we have a partial refund policy detailed in our service agreement.",
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string>("2"); // Start with second item open

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? "" : id);
  };

  return (
    <section id="faq" className="py-20 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold">
            <span className="text-white">Ask Us</span>
            <span className="text-[#0047ff] font-display italic font-normal">
              {" "}
              Anything
            </span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-1.5">
          {faqItems.map((item) => {
            const isOpen = openItem === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-lg transition-all duration-300 ${
                  isOpen ? "bg-blue-600" : "bg-[#151515] hover:bg-[#1a1a1a]"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between cursor-pointer"
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
                        <Minus className="w-6 h-6" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 text-[#c5f011]">
                        <Plus className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && item.answer && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 pb-6">
                        <motion.p
                          className="text-white text-base leading-relaxed"
                          initial={{ y: -4, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -4, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          {item.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
