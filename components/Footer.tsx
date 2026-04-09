"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Waves, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Pricing", href: "/#pricing" },
];

const programs = [
  "Beginner Lesson",
  "Intermediate Rider",
  "Advanced Pro",
  "Kids Summer Camp",
  "Private Coaching",
];

export default function Footer() {
  return (
    <footer className="bg-deep pt-24 pb-12 px-6 md:px-[120px] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 relative z-10">
        {/* Brand Column */}
        <div className="flex flex-col gap-8">
          <Link href="/" className="flex items-center gap-3 group w-fit">
            <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-primary group-hover:bg-secondary transition-colors duration-300 rounded-xl rotate-45" />
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
          
          <p className="text-gray text-base leading-relaxed font-medium max-w-xs">
            California&apos;s premier kitesurfing school. We build confidence, community, and a lifelong love for the ocean.
          </p>

          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, backgroundColor: "rgba(59, 130, 246, 1)", color: "white" }}
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray transition-colors duration-300"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-oswald text-lg font-bold text-white uppercase tracking-[3px] mb-10 relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-primary" />
          </h3>
          <ul className="space-y-4">
            {footerNav.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-gray hover:text-primary font-medium transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-[2px] bg-primary group-hover:w-4 transition-all duration-300" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="font-oswald text-lg font-bold text-white uppercase tracking-[3px] mb-10 relative inline-block">
            Our Programs
            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-primary" />
          </h3>
          <ul className="space-y-4">
            {programs.map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-gray hover:text-primary font-medium transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-[2px] bg-primary group-hover:w-4 transition-all duration-300" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-oswald text-lg font-bold text-white uppercase tracking-[3px] mb-10 relative inline-block">
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-primary" />
          </h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
              <span className="text-gray font-medium leading-relaxed">
                21010 Pacific Coast Hwy, Malibu, CA 90265
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-primary flex-shrink-0" size={20} />
              <span className="text-gray font-medium">+1 (310) 555-0199</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-primary flex-shrink-0" size={20} />
              <span className="text-gray font-medium underline underline-offset-4 decoration-primary/30">
                hello@wavex.surf
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium">
        <div className="text-gray/50 italic">
          &copy; 2026 WaveX Kite School. Ride with the Blue.
        </div>
        <div className="flex gap-8 text-gray/50">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
