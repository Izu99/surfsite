"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goSlide = useCallback((n: number) => {
    setCurrent((n + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="relative h-[100svh] overflow-hidden flex items-center bg-deep"
      id="home"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="relative w-full h-full"
          >
            <Image
              src={HERO_SLIDES[current].img}
              alt={HERO_SLIDES[current].alt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-deep/80 via-deep/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-deep to-transparent z-10" />
      
      {/* Lightweight wave divider (CSS-based) */}
      <WaveDivider />

      {/* Hero content */}
      <div className="relative z-20 px-6 md:px-[120px] max-w-[800px] pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[13px] tracking-[4px] uppercase text-accent mb-4 font-bold font-opensans flex items-center gap-3"
        >
          <span className="w-8 h-[2px] bg-accent" />
          Wind. Water. Blue Lifestyle.
        </motion.div>
        
        <motion.h1
          key={`title-${current}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-oswald text-[clamp(56px,10vw,100px)] leading-[0.9] text-white font-black uppercase mb-6"
        >
          Ride The<br />
          <span className="text-transparent border-text-blue">Blue Waves</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap gap-5"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/#services"
              className="bg-primary hover:bg-secondary text-white px-10 py-4 rounded-xl font-oswald font-bold text-sm tracking-[2px] uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(59,130,246,0.3)] block"
            >
              Start Learning
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/#pricing"
              className="bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-xl font-oswald font-bold text-sm tracking-[2px] uppercase border border-white/20 hover:bg-white/20 transition-all duration-300 block"
            >
              Our Programs
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-24 left-6 md:left-[120px] flex items-end gap-12 z-20">
        <div className="flex gap-3">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goSlide(i)}
              className="group relative py-4"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div className={cn(
                "h-[3px] transition-all duration-500 rounded-full",
                i === current ? "bg-accent w-12" : "bg-white/20 w-6 group-hover:bg-white/40"
              )} />
            </button>
          ))}
        </div>
        <div className="hidden md:block font-oswald text-4xl font-bold text-white/10">
          0{current + 1} <span className="text-xl font-normal opacity-50">/ 0{HERO_SLIDES.length}</span>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute right-8 md:right-[120px] bottom-24 flex gap-4 z-20">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 1)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => goSlide(current - 1)}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 1)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => goSlide(current + 1)}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      <style jsx>{`
        .border-text-blue {
          -webkit-text-stroke: 2px #60a5fa;
        }
      `}</style>
    </section>
  );
}
