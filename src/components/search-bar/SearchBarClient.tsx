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
    <section className="bg-bg-base border-b border-gray-100 py-12 px-5 md:px-8 relative overflow-hidden">
      <div className="pointer-events-none absolute w-[700px] h-[400px] top-0 left-1/2 -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(99,102,241,0.06),transparent_70%)]" />

      <motion.div
        className="relative z-10 max-w-[800px] mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", damping: 22 }}
      >
        <div className="text-center mb-8">
          <h2 className="font-display font-black text-text-primary text-[clamp(1.4rem,3vw,2rem)]">
            Plan Your Perfect Odisha Escape
          </h2>
          <p className="text-sm text-text-muted mt-2">
            Choose your vibe, pick a destination — we&apos;ll craft an
            unforgettable journey just for you
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm cursor-pointer transition-all duration-200 bg-transparent${
                category === c.id
                  ? " bg-gold-400/10 border-gold-400/40 text-gold-400"
                  : " border-gray-200 text-text-muted hover:border-gold-400/30 hover:text-gold-400"
              }`}
              onClick={() => setCategory(category === c.id ? "" : c.id)}
            >
              <span className="text-base">{c.icon}</span>
              {c.label}
            </button>
          ))}
        </div>

        <div className="flex bg-white border border-gray-200 rounded-full p-2 pl-7 w-full items-center gap-4 shadow-sm max-md:flex-col max-md:rounded-2xl max-md:p-4">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-gold-400 text-lg shrink-0" />
            <div className="flex flex-col">
              <label className="text-[0.65rem] text-text-muted uppercase tracking-wide font-bold">
                Destination
              </label>
              <input
                type="text"
                className="bg-transparent text-text-primary border-none outline-none text-sm placeholder:text-text-muted/60"
                placeholder="Puri, Konark, Chilika…"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>

          <div className="w-px h-8 bg-gray-200 max-md:hidden" />

          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-gold-400 text-lg shrink-0" />
            <div className="flex flex-col">
              <label className="text-[0.65rem] text-text-muted uppercase tracking-wide font-bold">
                Duration
              </label>
              <select
                className="bg-transparent text-text-primary border-none outline-none text-sm cursor-pointer"
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
            className="bg-gradient-to-r from-gold-500 to-gold-400 text-white rounded-full px-6 py-3 flex items-center gap-2 font-semibold text-sm cursor-pointer ml-auto shadow-[0_4px_16px_rgba(99,102,241,0.25)] max-md:ml-0 max-md:w-full max-md:justify-center shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSearch}
          >
            <FaSearch />
            <span>Search Trips</span>
          </motion.button>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-6 justify-center">
          <span className="text-text-muted text-[0.7rem] uppercase font-bold tracking-wider">
            Popular:
          </span>
          {["Puri Beach", "Konark Temple", "Chilika Lake", "Bhitarkanika"].map(
            (tag) => (
              <button
                key={tag}
                className="text-text-muted text-xs border border-gray-200 rounded-full px-3 py-1.5 cursor-pointer transition-all duration-200 hover:border-gold-400/40 hover:text-gold-400 hover:bg-gold-400/5 bg-transparent"
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
