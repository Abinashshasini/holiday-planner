"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./navbar.module.scss";
import useWhatsApp from "@/hooks/useWhatsApp";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "./logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Packages", href: "/packages" },
  { label: "Cars", href: "/car-booking" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
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

  // If not home page, we want the "scrolled" (solid/glass) look by default
  const shouldBeSolid = scrolled || !isHomePage;
  const logoClass = `${classes.logo} ${isHomePage && !scrolled ? classes.mono : ""}`;

  return (
    <>
      <motion.header
        className={`${classes.navbar} ${shouldBeSolid ? classes.scrolled : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={classes.inner}>
          <div className={classes.iconCnt}>
            {pathname !== "/" && (
              <div onClick={() => router.back()}>
                <IoIosArrowBack color="#111" size={24} />
              </div>
            )}
            <Link href="/" className={logoClass} aria-label="Home">
              <img
                src={Logo.src}
                alt="Holiday Planner Logo"
                className={classes.logoImage}
              />
            </Link>
          </div>

          {/* Logo */}

          {/* Desktop Nav */}
          <nav className={classes.desktopNav}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${classes.navLink} ${isActive ? classes.active : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Group */}
          <div className={classes.ctaGroup}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={classes.ctaBtn}
              onClick={() =>
                handleRedirectTheUserToWhatsApp({ messageType: "generic" })
              }
            >
              Get a Quote
            </motion.button>

            {/* Hamburger */}
            <button
              className={`${classes.hamburger} ${menuOpen ? classes.open : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className={classes.hamburgerIcon}>
                <span />
                <span />
                <span />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={classes.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
          >
            <motion.div
              className={classes.drawer}
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className={classes.drawerLinks}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`${classes.drawerLink} ${pathname === link.href ? classes.active : ""}`}
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
                className={classes.drawerCta}
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
