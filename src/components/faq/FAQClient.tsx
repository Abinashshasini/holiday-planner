"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Do you provide fully customized tour packages?",
    answer:
      "Absolutely! We understand every traveler is unique. You can customize any of our existing itineraries or build one entirely from scratch with the help of our expert planners. Just tell us your dates, budget, and interests — we'll handle every detail from temple visits to coastal sunsets.",
  },
  {
    question: "Are your cabs well maintained and sanitized?",
    answer:
      "Yes, our entire fleet consists of premium, well-maintained vehicles. Every cab undergoes a rigorous cleaning and sanitization process before each trip. From compact sedans to luxury Innovas and 12-seater tempo travellers — every vehicle is GPS-tracked and fully insured.",
  },
  {
    question: "Do I need to pay the full amount upfront to book?",
    answer:
      "No, you don't need to pay the full amount initially. You can secure your booking by paying a minimal advance deposit (usually 20%), and the rest can be managed closer to your trip date. We accept UPI, bank transfer, and all major payment methods.",
  },
  {
    question: "How do you ensure safety during wildlife tours?",
    answer:
      "Our wildlife and nature tours (like Bhitarkanika and Satakosia) are led by certified local guides who know the terrain perfectly. We strictly adhere to all forest department safety guidelines, provide first-aid kits, and maintain emergency communication at all times.",
  },
  {
    question: "What happens if I need to cancel my trip?",
    answer:
      "We offer a highly flexible cancellation policy. Cancellations made 7 days prior to the journey receive a near-full refund. For last-minute changes, we'll work with you to reschedule at no extra cost whenever possible.",
  },
  {
    question: "What makes Holiday Planner different from other agencies?",
    answer:
      "Unlike booking portals, we're Bhubaneswar-based locals who've explored every corner of Odisha. Our government-recognized guides, personally vetted hotels, and 24/7 on-trip support set us apart. With 500+ happy travelers and a 4.8★ Google rating, we're Odisha's most trusted travel partner.",
  },
  {
    question: "Can you arrange VIP darshan at Jagannath Temple?",
    answer:
      "Yes! We organize special darshan arrangements at Jagannath Puri and other major temples across Odisha. Skip the long queues and experience the divine in comfort. This service is included in our heritage and spiritual tour packages.",
  },
  {
    question: "Can I customise an existing package or build my own itinerary?",
    answer:
      "Absolutely — every package we offer can be tailored to your exact needs. Want to add an extra night in Chilika, swap a hotel, or change travel dates? Just tell us. We also build fully custom itineraries from scratch — just share your group size, budget and interests.",
  },
  {
    question: "Is airport or railway station pickup included?",
    answer:
      "Yes, pickup and drop from Bhubaneswar Airport (BBI) and Bhubaneswar Railway Station are included in all of our package tours. For standalone cab bookings, we also offer airport transfers — available 24/7.",
  },
  {
    question: "Are child safety seats available in your vehicles?",
    answer:
      "Yes, child seats can be arranged on request at no additional charge. Please mention this when booking (or in the message field of our contact form) and we will ensure the vehicle is equipped before your trip departs.",
  },
  {
    question: "Can I pay in instalments or use EMI?",
    answer:
      "Yes. A 20% advance secures your booking, and the remaining balance is due closer to your departure date. For larger group tours, we can arrange a custom payment schedule. We accept UPI, bank transfer, credit/debit cards, and all major payment wallets.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const FAQClient = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-bg-base">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <motion.div
          className="text-center mb-14 max-md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-base font-bold uppercase tracking-widest text-gold-400">
            Got Questions?
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-black text-text-primary leading-[1.1] mb-5 tracking-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[700px] mx-auto max-md:text-[0.95rem]">
            Everything you need to know about our services and booking process.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 w-full max-md:gap-2.5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className={`bg-bg-surface rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-gold-400/25 shadow-card -translate-y-0.5"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-card"
                }`}
                variants={itemVariants}
              >
                <button
                  className="w-full flex items-center justify-between py-7 px-10 max-md:py-4 max-md:px-5 bg-transparent border-none cursor-pointer text-left gap-6 max-md:gap-3"
                  onClick={() => toggleFAQ(index)}
                >
                  <span
                    className={`font-display text-xl max-md:text-[0.95rem] font-bold leading-[1.3] tracking-tight transition-colors duration-200 ${
                      isOpen ? "text-gold-400" : "text-text-primary"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    className={`w-11 h-11 max-md:w-8 max-md:h-8 shrink-0 rounded-xl max-md:rounded-lg flex items-center justify-center transition-all duration-300 text-sm max-md:text-[0.7rem] ${
                      isOpen
                        ? "bg-gradient-to-r from-gold-400 to-gold-500 text-bg-base shadow-gold-sm"
                        : "bg-gray-50 text-text-muted"
                    }`}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-10 max-md:px-5 pb-4 max-md:pb-2.5 text-[1.1rem] max-md:text-[0.85rem] text-text-secondary leading-[1.7] font-medium">
                        {faq.answer}
                      </p>
                      <a
                        href="https://api.whatsapp.com/send?phone=+918249262728&text=Hi%2C%20I%20have%20a%20question%20about%20your%20tours."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mx-10 max-md:mx-5 mb-7 max-md:mb-4 text-sm max-md:text-[0.82rem] font-bold text-[#25d366] no-underline hover:opacity-80 hover:underline transition-opacity duration-200"
                      >
                        Still have questions? Chat on WhatsApp →
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center mt-14 max-md:mt-8 text-[1.1rem] max-md:text-sm text-text-secondary font-semibold">
          <p>
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="/contact"
              className="text-gold-400 font-extrabold no-underline border-b-2 border-gold-400/30 hover:text-gold-300 hover:border-gold-400 transition-all duration-200"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQClient;
