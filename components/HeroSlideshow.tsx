"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const goSlide = useCallback((n: number) => {
    setCurrent((n + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goSlide(current + 1), 7000);
    return () => clearInterval(timer);
  }, [current, goSlide]);

  return (
    <section className="relative h-screen overflow-hidden flex items-center bg-deep" id="home">
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
      
      {/* PROFESSIONAL SEA WAVE ANIMATION - Fixed to be transparent and fill correctly */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30 pointer-events-none">
        <svg className="relative block w-[200%] h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          {/* Wave 1 - Back Layer */}
          <path d="M0,120V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120Z" fill="#3b82f6" fillOpacity="0.3">
            <animateTransform attributeName="transform" type="translate" from="0" to="-600" dur="20s" repeatCount="indefinite" />
          </path>
          {/* Wave 2 - Middle Layer */}
          <path d="M0,120V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V120Z" fill="#60a5fa" fillOpacity="0.5">
            <animateTransform attributeName="transform" type="translate" from="-600" to="0" dur="15s" repeatCount="indefinite" />
          </path>
          {/* Wave 3 - Front Layer - Now Blue Tinted and Transparent */}
          <path d="M0,120V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V120Z" fill="#2563eb" fillOpacity="0.4">
            <animateTransform attributeName="transform" type="translate" from="0" to="-600" dur="10s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      {/* Hero content */}
      <div className="relative z-20 pl-8 md:pl-[120px] max-w-[800px]">
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
      <div className="absolute bottom-24 left-8 md:left-[120px] flex items-end gap-12 z-20">
        <div className="flex gap-3">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goSlide(i)}
              className="group relative py-4"
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
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 1)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => goSlide(current + 1)}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-colors duration-300"
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
