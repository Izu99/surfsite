"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Waves } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-[80px] h-[80px] transition-all duration-500",
        scrolled 
          ? "bg-deep/80 backdrop-blur-xl border-b border-white/5 h-[70px] shadow-2xl shadow-blue-900/20" 
          : "bg-transparent"
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-primary group-hover:bg-secondary transition-colors duration-300 rounded-xl rotate-45"
            whileHover={{ rotate: 135 }}
          />
          <Waves className="relative text-white z-10 w-6 h-6" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-oswald font-black text-white text-xl tracking-tighter uppercase">
            WAVEX
          </span>
          <span className="font-opensans text-[10px] text-accent font-bold tracking-[3px] uppercase">
            Kite School
          </span>
        </div>
      </Link>

      {/* Desktop links */}
      <ul className="hidden lg:flex gap-10 list-none items-center">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "nav-link-underline text-white text-[14px] font-bold tracking-[2px] uppercase transition-all duration-300 hover:text-accent",
                pathname === link.href && "text-accent active"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-[80px] left-0 right-0 bg-deep/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col py-8 px-8 gap-4 list-none">
              {NAV_LINKS.map((link, i) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block py-2 text-white/80 text-lg font-oswald font-bold tracking-[2px] uppercase hover:text-accent transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
