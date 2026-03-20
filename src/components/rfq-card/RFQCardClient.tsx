"use client";

import { motion } from "framer-motion";
import classes from "./rfqCard.module.scss";
import useWhatsApp from "@/hooks/useWhatsApp";
import { FaWhatsapp } from "react-icons/fa";

const RFQCardClient = () => {
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.bannerWrapper}>
          <div className={classes.parallaxBg}>
            <div className={classes.overlay} />
          </div>

          <motion.div
            className={classes.contentWrapper}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className={classes.textSide}>
              <span className={classes.eyebrow}>Your Journey Starts Here</span>
              <h2 className={classes.headline}>
                Ready to Experience <span>Odisha?</span>
              </h2>
              <p className={classes.sub}>
                Tell us your dream trip — dates, group size, must-see spots —
                and our experts will craft a bespoke itinerary with transparent
                pricing. No obligations, just inspiration.
              </p>
            </div>

            <motion.div
              className={classes.actionSide}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <button
                className={classes.cta}
                onClick={() =>
                  handleRedirectTheUserToWhatsApp({ messageType: "generic" })
                }
              >
                <FaWhatsapp />
                <span>Get Your Free Quote</span>
              </button>
              <p className={classes.noCommitment}>* No commitments required</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RFQCardClient;
