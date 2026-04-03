import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is this course about?",
    answer:
      "This course helps you become a UI/UX designer with real-world skills and projects.",
  },
  {
    question: "How long does it take to complete?",
    answer:
      "You can complete it in 30 days with consistent practice and learning.",
  },
  {
    question: "Do I get lifetime access?",
    answer: "Yes, you get lifetime access to all lessons and updates.",
  },
  {
    question: "Is this beginner friendly?",
    answer: "Absolutely! It’s designed for complete beginners.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-20 px-4" id="faq">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm mb-4">
          FAQ
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Got questions? We’ve got answers
        </h2>

        <p className="text-gray-500 mb-8">
          Everything you need to know before joining the course.
        </p>

        {/* Button */}
        <button className="bg-[#6241eb] text-white px-6 py-3 rounded-xl shadow mb-10 hover:bg-gray-900 transition">
          Contact Us
        </button>

        {/* FAQ List */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5"
              >
                <span className="font-medium text-lg">{faq.question}</span>

                {/* Plus Icon */}
                <motion.span
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-light"
                >
                  +
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 overflow-hidden"
                  >
                    <p className="pb-5 text-gray-500">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
