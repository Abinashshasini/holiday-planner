"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import classes from "./getInTouch.module.scss";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface FormData {
  name: string;
  number: string;
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
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { name, number, message } = userData;

  const handleGetInputValues = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
        const response = await axios.post(
          "https://holiday-planner-be.vercel.app/api/v1/leads/submit-lead",
          { name, number, message },
        );
        if (response) {
          toast.success(
            "Your request has been successfully submitted! We will call you soon.",
          );
          setUserData({ name: "", number: "", message: "" });
        } else {
          toast.error("Something went wrong, please try again.");
        }
      } catch (error) {
        console.log("Error", error);
        toast.error("Something went wrong, please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className={classes.section}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className={classes.container}>
        <motion.div
          className={classes.wrapper}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side: Info */}
          <motion.div variants={itemVariants} className={classes.infoPanel}>
            <span className={classes.subtitle}>Get In Touch</span>
            <h2 className={classes.title}>
              Your Dream Trip Is One Conversation Away
            </h2>
            <p className={classes.desc}>
              Whether it&apos;s a weekend beach getaway, a spiritual pilgrimage,
              or a full family adventure across Odisha — share your vision and
              our experts will turn it into reality.
            </p>

            <div className={classes.contactList}>
              <div className={classes.contactItem}>
                <div className={classes.iconBox}>
                  <FaPhoneAlt />
                </div>
                <div>
                  <h5>Call Us</h5>
                  <p>+91 79780 65576</p>
                </div>
              </div>
              <div className={classes.contactItem}>
                <div className={classes.iconBox}>
                  <FaEnvelope />
                </div>
                <div>
                  <h5>Email Us</h5>
                  <p>info@holidayplanner.in</p>
                </div>
              </div>
              <div className={classes.contactItem}>
                <div className={classes.iconBox}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h5>Visit Us</h5>
                  <p>Bhubaneswar, Odisha, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div variants={itemVariants} className={classes.formPanel}>
            <div className={classes.formWrapper}>
              <h3>Request a Callback</h3>
              <p>
                Fill out the form below and our team will get back to you
                shortly.
              </p>

              <div className={classes.inputGroup}>
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={handleGetInputValues}
                />
              </div>

              <div className={classes.inputGroup}>
                <label>Mobile Number</label>
                <div className={classes.phoneInput}>
                  <span>+91</span>
                  <input
                    type="number"
                    placeholder="9876543210"
                    value={number}
                    onChange={handleGetInputValues}
                    name="number"
                    pattern="[0-9]*"
                  />
                </div>
              </div>

              <div className={classes.inputGroup}>
                <label>Your Message (Optional)</label>
                <textarea
                  placeholder="Tell us about your travel plans..."
                  maxLength={200}
                  value={message}
                  name="message"
                  onChange={handleGetInputValues}
                />
              </div>

              <motion.button
                className={classes.submitBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Request..." : "Send Request"}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;
