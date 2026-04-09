"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { STATS } from "@/lib/constants";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(spring, (latest) => 
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function StatsSection() {
  return (
    <section
      className="bg-deep py-32 px-6 md:px-[120px] relative overflow-hidden"
      id="stats"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 25 30, 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <path d="M0 60 Q 25 40, 50 60 T 100 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-primary text-[12px] font-bold tracking-[5px] uppercase mb-4 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-primary" />
            Proven Excellence
          </div>
          <h2 className="font-oswald text-[clamp(40px,5vw,56px)] text-white font-black leading-tight uppercase mb-8">
            Why Kitesurf <br />With <span className="text-primary italic">WaveX?</span>
          </h2>
          <p className="text-gray text-lg leading-relaxed font-medium mb-10 max-w-lg">
            We don&apos;t just teach kitesurfing — we build confidence, community, and a lifelong love of
            the ocean. Our certified instructors make learning safe and seriously fun.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/#pricing"
              className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-oswald font-bold text-sm tracking-[2px] uppercase transition-all duration-300 shadow-xl shadow-primary/20"
            >
              Explore Programs
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[40px] text-center group hover:border-primary/50 transition-colors"
            >
              <div className="font-oswald text-[clamp(40px,5vw,60px)] text-white font-black leading-none mb-3 group-hover:text-primary transition-colors">
                <Counter value={stat.number} />
                {stat.number >= 100 && stat.label !== "Years Running" ? "+" : ""}
              </div>
              <div className="text-[12px] tracking-[3px] uppercase text-accent font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
