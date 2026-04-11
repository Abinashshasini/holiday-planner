"use client";
import { motion, Variants } from "framer-motion";
import UserRatingCard from "./UserRatingCard";
import { userRatingData } from "@/utils";

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
    <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6">
      {/* Background blurred glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-16 h-[500px] w-[500px] rounded-full bg-gold-100/30 blur-[120px]" />
        <div className="absolute -right-10 -bottom-10 h-[400px] w-[400px] rounded-full bg-ocean-300/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-base font-bold uppercase tracking-widest text-gold-400">
            Wall of Love
          </span>

          <h2 className="mt-5 font-display text-4xl font-black tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Real Stories from{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Real Travelers
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-text-secondary">
            Authentic voices from travelers who explored Odisha and created
            memories they&apos;ll cherish forever.
          </p>
        </motion.div>

        {/* Card grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {userRatingData.slice(0, 6).map((element, index) => (
            <motion.div key={element.id} variants={itemVariants}>
              <UserRatingCard
                message={element.message}
                name={element.name}
                rating={element.rating}
                time={element.time}
                packageInfo={element.packageInfo}
                index={index}
                spotlight={index === 1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RatingsClient;
