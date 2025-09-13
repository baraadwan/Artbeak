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
    question: `What does "risk-free website redesign" mean?`,
    answer:
      "It means you don't pay anything upfront. We redesign your website first, and you only pay if you're satisfied with the results. No risk, no pressure.",
  },
  {
    id: "2",
    question: "How long does a website redesign take?",
    answer:
      "Most redesigns are completed in 1–2 weeks for a standard business site. Complex projects may take longer, but we always provide a clear timeline upfront.",
  },
  {
    id: "3",
    question:
      "Will my website be mobile-friendly and optimized for conversions?",
    answer:
      "Absolutely. Every site we build is fully responsive, fast, and designed to maximize user engagement and conversions.",
  },
  {
    id: "4",
    question: "Can you redesign my website without affecting my current site?",
    answer:
      "Yes. We work on a separate staging version of your site so your current website stays live until you approve the redesign.",
  },
  {
    id: "5",
    question: "Do you also improve my website's SEO and performance?",
    answer:
      "Yes. Our redesign includes basic SEO optimization, page speed improvements, and layout adjustments that encourage visitors to take action.",
  },
  {
    id: "6",
    question: "What if I don't like the redesign?",
    answer:
      "No problem. Since it's risk-free, you are under no obligation to pay if the redesign doesn't meet your expectations.",
  },
  {
    id: "7",
    question: "Can you help increase my sales or leads through the redesign?",
    answer:
      "Yes. Our focus is not just on aesthetics but on conversion optimization—turning more visitors into paying customers.",
  },
  {
    id: "8",
    question: "How do I get started?",
    answer:
      "Simply fill out a short form or schedule a call. We'll review your website, discuss goals, and start the redesign process without any upfront cost.",
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
          {faqItems.map((item, index) => {
            const isOpen = openItem === item.id;

            return (
              <motion.div
                key={item.id}
                className={`rounded-lg transition-all duration-300 ${
                  isOpen ? "bg-blue-600" : "bg-[#151515] hover:bg-[#1a1a1a]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
