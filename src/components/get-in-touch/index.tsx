"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface FormData {
  name: string;
  number: string;
  tripType: string;
  groupSize: string;
  preferredDate: string;
  message?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const GetInTouch = () => {
  const [userData, setUserData] = useState<FormData>({
    name: "",
    number: "",
    tripType: "",
    groupSize: "",
    preferredDate: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { name, number, tripType, groupSize, preferredDate, message } =
    userData;

  const handleGetInputValues = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "number" && value.length > 10) return;
    setUserData({ ...userData, [name]: value });
  };

  const handleValidateCredential = () => {
    let isValid = true;
    const nameRegex = /^[a-zA-Z\s]{3,60}$/;
    if (!nameRegex.test(userData.name)) {
      toast.error("Please enter a valid name.");
      isValid = false;
      return;
    }
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(userData.number)) {
      toast.error("Mobile number must be a valid 10-digit Indian number.");
      isValid = false;
      return;
    }
    return isValid;
  };

  const handleSubmit = async () => {
    if (handleValidateCredential()) {
      setIsSubmitting(true);
      try {
        // Primary save: Sanity Studio dashboard
        await axios.post("/api/leads", {
          name,
          number,
          tripType,
          groupSize,
          preferredDate,
          message,
        });
        toast.success(
          "Your request has been successfully submitted! We will call you soon.",
        );
        setUserData({
          name: "",
          number: "",
          tripType: "",
          groupSize: "",
          preferredDate: "",
          message: "",
        });
      } catch (error) {
        console.log("Error", error);
        toast.error("Something went wrong, please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <motion.div
          className="relative flex flex-col lg:flex-row bg-bg-surface rounded-3xl overflow-hidden shadow-[var(--shadow-card-rest)] border border-gray-200 before:content-[''] before:absolute before:w-[600px] before:h-[600px] before:rounded-full before:pointer-events-none before:-top-[100px] before:-left-[100px] before:bg-[radial-gradient(circle,rgba(77,148,232,0.15)_0%,rgba(77,148,232,0)_70%)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side: Info */}
          <motion.div
            variants={itemVariants}
            className="flex-1 p-8 md:p-12 lg:py-16 lg:px-12 text-text-primary relative z-[1]"
          >
            <span className="text-base font-bold uppercase tracking-widest text-gold-400 pb-4">
              Get In Touch
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-text-primary leading-[1.1] mb-6 -tracking-[0.02em]">
              Your Dream Trip Is One Conversation Away
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-12 max-w-[480px]">
              Whether it&apos;s a weekend beach getaway, a spiritual pilgrimage,
              or a full family adventure across Odisha — share your vision and
              our experts will turn it into reality.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gold-400 text-xl border border-gray-200">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">
                    Call Us
                  </h5>
                  <p className="text-base font-bold text-text-primary">
                    <a href="tel:+919861151591">+91 98611 51591</a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gold-400 text-xl border border-gray-200">
                  <FaEnvelope />
                </div>
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">
                    Email Us
                  </h5>
                  <p className="text-base font-bold text-text-primary">
                    <a href="mailto:holidayplannertravel@gmail.com">
                      holidayplannertravel@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gold-400 text-xl border border-gray-200">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">
                    Visit Us
                  </h5>
                  <p className="text-base font-bold text-text-primary">
                    Bhubaneswar, Odisha, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            variants={itemVariants}
            className="flex-1 bg-bg-elevated p-8 md:p-12 lg:py-16 lg:px-12 relative border-t lg:border-t-0 lg:border-l border-gray-200"
          >
            <div className="max-w-md mx-auto">
              <h3 className="font-display text-[1.8rem] font-black text-text-primary mb-2">
                Request a Callback
              </h3>
              <p className="text-sm text-text-secondary mb-8">
                Fill out the form below and our team will get back to you
                shortly.
              </p>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-text-secondary mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={handleGetInputValues}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base text-text-primary placeholder:text-text-muted outline-none transition-all focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-text-secondary mb-2">
                  Mobile Number
                </label>
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden transition-all focus-within:border-gold-400/40 focus-within:ring-2 focus-within:ring-gold-400/10">
                  <span className="px-4 py-3.5 font-bold text-text-secondary bg-gray-50 border-r border-gray-200">
                    +91
                  </span>
                  <input
                    type="number"
                    placeholder="9876543210"
                    value={number}
                    onChange={handleGetInputValues}
                    name="number"
                    pattern="[0-9]*"
                    className="w-full bg-transparent border-none px-4 py-3.5 text-base text-text-primary placeholder:text-text-muted outline-none focus:ring-0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-text-secondary mb-2">
                    Trip Type
                  </label>
                  <select
                    name="tripType"
                    value={tripType}
                    onChange={handleGetInputValues}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base text-text-primary outline-none transition-all focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E')] bg-no-repeat bg-[position:right_14px_center] pr-10 cursor-pointer"
                  >
                    <option value="">Select type…</option>
                    <option value="Packages">Holiday Package</option>
                    <option value="Car Rental">Car Rental</option>
                    <option value="Custom Trip">Custom Trip</option>
                    <option value="Corporate">Corporate / Group</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-text-secondary mb-2">
                    Group Size
                  </label>
                  <select
                    name="groupSize"
                    value={groupSize}
                    onChange={handleGetInputValues}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base text-text-primary outline-none transition-all focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E')] bg-no-repeat bg-[position:right_14px_center] pr-10 cursor-pointer"
                  >
                    <option value="">Select size…</option>
                    <option value="1-2">1 – 2 people</option>
                    <option value="3-5">3 – 5 people</option>
                    <option value="6-10">6 – 10 people</option>
                    <option value="10+">10+ people</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-text-secondary mb-2">
                  Preferred Travel Date (Optional)
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={preferredDate}
                  onChange={handleGetInputValues}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base text-text-primary outline-none transition-all focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-text-secondary mb-2">
                  Your Message (Optional)
                </label>
                <textarea
                  placeholder="Tell us about your travel plans..."
                  maxLength={200}
                  value={message}
                  name="message"
                  onChange={handleGetInputValues}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base text-text-primary placeholder:text-text-muted outline-none transition-all focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/10 resize-vertical min-h-[120px]"
                />
              </div>

              <motion.button
                className="w-full bg-gradient-to-r from-gold-400 to-gold-500 text-bg-base font-semibold px-7 py-3.5 rounded-xl shadow-gold-sm hover:shadow-gold transition-all text-base cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send My Trip Request"}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;
