"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import useWhatsApp from "@/hooks/useWhatsApp";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Packages", href: "/packages" },
  { label: "Cars", href: "/car-booking" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHomePage = pathname === "/";
  const { handleRedirectTheUserToWhatsApp } = useWhatsApp();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const shouldBeSolid = scrolled || !isHomePage;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-out ${
          shouldBeSolid
            ? "py-3 bg-bg-base/80 backdrop-blur-sm border-b border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            : "py-2.5 bg-transparent border-b border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-16 flex items-center justify-between transition-all duration-500">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className={`flex items-center z-[1001] ${
                isHomePage && !scrolled
                  ? "[&_img]:brightness-0 [&_img]:invert"
                  : ""
              }`}
              aria-label="Home"
            >
              <Logo
                alt="Holiday Planner Odisha Logo"
                className="h-14 w-auto scale-180 lg:scale-250 pl-8 lg:pl-0"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-[0.95rem] font-semibold rounded-sm transition-all duration-200 ${
                    shouldBeSolid
                      ? isActive
                        ? "text-gold-400 font-bold"
                        : "text-text-secondary hover:text-text-primary hover:bg-gray-100"
                      : isActive
                        ? "text-white bg-white/20"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Group */}
          <div className="flex items-center gap-4 z-[1001]">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden sm:block px-6 py-2.5 rounded-xl text-sm font-extrabold cursor-pointer transition-all duration-500 ${
                shouldBeSolid
                  ? "bg-gradient-to-r from-gold-400 to-gold-600 text-white shadow-[0_8px_24px_rgba(99,102,241,0.12)]"
                  : "bg-white text-gold-700 shadow-md"
              } hover:-translate-y-0.5 hover:shadow-lg`}
              onClick={() =>
                handleRedirectTheUserToWhatsApp({ messageType: "generic" })
              }
            >
              Get a Quote
            </motion.button>

            {/* Hamburger */}
            <button
              className="hidden max-lg:block bg-transparent border-none cursor-pointer p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-[18px] flex flex-col justify-between">
                <span
                  className={`block w-full h-0.5 rounded-sm transition-all duration-300 ${
                    menuOpen
                      ? "translate-y-2 rotate-45 bg-text-primary"
                      : "bg-white"
                  } ${shouldBeSolid && !menuOpen ? "bg-text-primary" : ""}`}
                />
                <span
                  className={`block w-full h-0.5 rounded-sm transition-all duration-300 bg-white ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-full h-0.5 rounded-sm transition-all duration-300 ${
                    menuOpen
                      ? "-translate-y-2 -rotate-45 bg-text-primary"
                      : "bg-white"
                  } ${shouldBeSolid && !menuOpen ? "bg-text-primary" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-bg-deepest/60 backdrop-blur-sm z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
          >
            <motion.div
              className="absolute top-0 left-0 right-0 bg-bg-surface pt-[120px] px-6 pb-12 rounded-b-[32px] flex flex-col gap-8 border-b border-gray-200"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-[1.75rem] font-black tracking-tight ${
                        pathname === link.href
                          ? "text-gold-400"
                          : "text-text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full py-5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-white font-extrabold text-lg border-none shadow-[0_8px_24px_rgba(99,102,241,0.12)] cursor-pointer"
                onClick={() =>
                  handleRedirectTheUserToWhatsApp({ messageType: "generic" })
                }
              >
                Get a Quote
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
