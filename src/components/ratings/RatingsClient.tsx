"use client";
import { motion, Variants } from "framer-motion";
import UserRatingCard from "./UserRatingCard";
import classes from "./ratings.module.scss";
import { userRatingData } from "@/utils";
import { FaStar } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const RatingsClient = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={classes.header}
        >
          <div className={classes.headerContent}>
            <span className={classes.subtitle}>Wall of Love</span>
            <h2 className={classes.title}>
              Real Stories from <span>Real Travelers</span>
            </h2>
          </div>

          <div className={classes.overallRating}>
            <div className={classes.ratingBadge}>
              4.8 <FaStar />
            </div>
            <div className={classes.ratingText}>
              <h4>500+ Verified Reviews</h4>
              <p>Odisha&apos;s highest-rated travel partner</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={classes.bentoGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {userRatingData.map((element, index) => (
            <motion.div
              key={element.id}
              variants={itemVariants}
              className={
                index === 0
                  ? classes.featuredItem
                  : index === 3
                    ? classes.wideItem
                    : ""
              }
            >
              <UserRatingCard
                message={element.message}
                name={element.name}
                rating={element.rating}
                time={element.time}
                packageInfo={element.packageInfo}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RatingsClient;
