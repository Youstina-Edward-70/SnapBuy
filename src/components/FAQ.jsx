import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "To place an order, add items to your cart, proceed to checkout, and follow the on-screen instructions.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, PayPal, and other secure online payment options.",
  },
  {
    question: "How can I track my SnapBuy order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can track your order in real-time through our 'Order Tracking' page or using the carrier's website. Most orders are delivered within 3-7 business days.",
  },
  {
    question: "What is SnapBuy's return and refund policy?",
    answer: "You can return most items within 30 days of delivery for a full refund. Products must be unused, in original packaging with all tags attached. Refunds are processed within 5-7 business days after we receive your return.",
  },
  {
    question: "Are all products on SnapBuy authentic and brand new?",
    answer: "Yes, we guarantee 100% authenticity for all products. We work directly with authorized distributors and brands. All items are brand new, sealed, and come with manufacturer warranties where applicable.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-10 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden transition duration-500"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full p-4 text-left bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-500"
            >
              <span className="font-semibold text-gray-800 dark:text-gray-100 transition duration-500">
                {faq.question}
              </span>
              <FaChevronDown
                className={`text-gray-600 dark:text-gray-300 transform transition duration-500 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="p-4 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600 transition duration-500">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
