"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaStar,
  FaUmbrellaBeach,
  FaLandmark,
  FaLeaf,
  FaMask,
} from "react-icons/fa";
import classes from "./searchBar.module.scss";
import useWhatsApp from "@/hooks/useWhatsApp";

const categories = [
  { id: "", label: "All", icon: <FaStar /> },
  { id: "beach", label: "Beach", icon: <FaUmbrellaBeach /> },
  { id: "heritage", label: "Heritage", icon: <FaLandmark /> },
  { id: "nature", label: "Nature", icon: <FaLeaf /> },
  { id: "tribal", label: "Tribal", icon: <FaMask /> },
];

const SearchBarClient = () => {
  const router = useRouter();
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    if (destination || duration || category) {
      handleRedirectTheUserToWhatsApp({
        messageType: "dynamic",
        dynamicMessage: `Hi! I'm looking for a tour in Odisha.\n📍 Destination: ${destination || "Any"}\n📅 Duration: ${duration || "Any"}\n🏷️ Category: ${category || "Any"}\nPlease suggest the best package for me!`,
      });
    } else {
      router.push("/packages");
    }
  };

  return (
    <section className={classes.section}>
      <div className={classes.glow} />

      <motion.div
        className={classes.inner}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", damping: 22 }}
      >
        <div className={classes.header}>
          <h2 className={classes.title}>Plan Your Perfect Odisha Escape</h2>
          <p className={classes.sub}>
            Choose your vibe, pick a destination — we&apos;ll craft an
            unforgettable journey just for you
          </p>
        </div>

        <div className={classes.catRow}>
          {categories.map((c) => (
            <button
              key={c.id}
              className={`${classes.catPill} ${category === c.id ? classes.catActive : ""}`}
              onClick={() => setCategory(category === c.id ? "" : c.id)}
            >
              <span className={classes.catIcon}>{c.icon}</span>
              {c.label}
            </button>
          ))}
        </div>

        <div className={classes.fieldRow}>
          <div className={classes.field}>
            <FaMapMarkerAlt className={classes.fieldIcon} />
            <div className={classes.fieldBody}>
              <label className={classes.fieldLabel}>Destination</label>
              <input
                type="text"
                className={classes.fieldInput}
                placeholder="Puri, Konark, Chilika…"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>

          <div className={classes.sep} />

          <div className={classes.field}>
            <FaCalendarAlt className={classes.fieldIcon} />
            <div className={classes.fieldBody}>
              <label className={classes.fieldLabel}>Duration</label>
              <select
                className={classes.fieldInput}
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="">Any length</option>
                <option value="1-2 Days">1–2 Days</option>
                <option value="3-4 Days">3–4 Days</option>
                <option value="5+ Days">5+ Days</option>
              </select>
            </div>
          </div>

          <motion.button
            className={classes.searchBtn}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSearch}
          >
            <FaSearch />
            <span>Search Trips</span>
          </motion.button>
        </div>

        <div className={classes.quickTags}>
          <span className={classes.quickLabel}>Popular:</span>
          {["Puri Beach", "Konark Temple", "Chilika Lake", "Bhitarkanika"].map(
            (tag) => (
              <button
                key={tag}
                className={classes.tag}
                onClick={() => {
                  setDestination(tag);
                  handleRedirectTheUserToWhatsApp({
                    messageType: "dynamic",
                    dynamicMessage: `Hi! I'm interested in a tour to ${tag}. Please help me find the best package!`,
                  });
                }}
              >
                {tag}
              </button>
            ),
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default SearchBarClient;
