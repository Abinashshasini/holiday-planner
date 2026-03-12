'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import classes from './faq.module.scss';

const faqs = [
  {
    question: 'Do you provide fully customized tour packages?',
    answer: 'Absolutely! We understand every traveler is unique. You can customize any of our existing itineraries or build one entirely from scratch with the help of our expert planners.'
  },
  {
    question: 'Are your cabs well maintained and sanitized?',
    answer: 'Yes, our entire fleet consists of premium, well-maintained vehicles. Every cab undergoes a rigorous cleaning and sanitization process before each trip to ensure your safety and comfort.'
  },
  {
    question: 'Do I need to pay the full amount upfront to book?',
    answer: 'No, you don\'t need to pay the full amount initially. You can secure your booking by paying a minimal advance deposit (usually 20%), and the rest can be managed closer to your trip date.'
  },
  {
    question: 'How do you ensure safety during wildlife tours?',
    answer: 'Our wildlife and nature tours (like Bhitarkanika) are led by certified local guides who know the terrain perfectly. We strictly adhere to all forest department safety guidelines and protocols.'
  },
  {
    question: 'What happens if I need to cancel my trip?',
    answer: 'We offer a highly flexible cancellation policy. Cancellations made 7 days prior to the journey receive a near-full refund. Please check our detailed cancellation terms for specific package rules.'
  }
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
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

const FAQClient = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <motion.div 
          className={classes.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className={classes.subtitle}>Got Questions?</span>
          <h2 className={classes.title}>Frequently Asked <span>Questions</span></h2>
          <p className={classes.description}>
            Everything you need to know about our services and booking process.
          </p>
        </motion.div>

        <motion.div 
          className={classes.accordion}
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
                className={`${classes.faqItem} ${isOpen ? classes.active : ''}`}
                variants={itemVariants}
              >
                <button 
                  className={classes.questionBtn} 
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={classes.questionText}>{faq.question}</span>
                  <motion.div 
                    className={classes.iconBox}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, type: 'spring' }}
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      className={classes.answerWrapper}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className={classes.answerText}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <div className={classes.footer}>
          <p>Can&apos;t find what you&apos;re looking for? <a href="/contact">Contact Support</a></p>
        </div>
      </div>
    </section>
  );
};

export default FAQClient;
