"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import LazyYouTube from "@/components/LazyYouTube";

export default function AboutSection() {
  const videoId = "GJc4Ir78KdE";
  const videoParams = `?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`;
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.25, once: false });

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 md:px-[80px] lg:px-[120px] grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center bg-white relative overflow-hidden"
      id="about"
    >
      {/* Decorative Blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-primary text-[12px] font-bold tracking-[5px] uppercase mb-6 flex items-center gap-3">
          <span className="w-10 h-[2px] bg-primary" />
          Our Heritage
        </div>
        
        <h2 className="font-oswald text-[clamp(40px,5vw,56px)] text-darker font-black leading-[1.1] mb-8 uppercase">
          We&apos;re On A Mission To <span className="text-primary italic">Lead</span> Awesome Wind Riding
        </h2>

        <div className="space-y-6 text-gray text-lg font-medium leading-relaxed">
          <p>
            Founded in 2008 on the sun-drenched shores of California, WaveX has grown from a small
            beach shack into the West Coast&apos;s most trusted kite school.
          </p>
          <p>
            Every lesson combines world-class instruction with top-of-the-line equipment, giving you
            the safest and most exhilarating experience on the water.
          </p>
        </div>
      </motion.div>

      {/* Large Horizontal Cinematic Video Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full lg:w-[110%] lg:-ml-[10%]"
      >
        {/* Main Video Frame */}
        <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-[0_50px_100px_rgba(30,58,138,0.3)] border-4 border-white ring-1 ring-primary/10">
          <LazyYouTube
            videoId={videoId}
            title="WaveX Kite Surfing Cinematic"
            params={videoParams}
            autoStart={true}
            className="absolute inset-0"
          />
          
          {/* Theme Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent mix-blend-overlay pointer-events-none" />
        </div>

        {/* Decorative Floating Elements */}
        <motion.div 
          animate={prefersReducedMotion || !inView ? { y: 0 } : { y: [0, -20, 0] }}
          transition={prefersReducedMotion || !inView ? { duration: 0 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" 
        />
        <motion.div 
          animate={prefersReducedMotion || !inView ? { y: 0 } : { y: [0, 20, 0] }}
          transition={prefersReducedMotion || !inView ? { duration: 0 } : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" 
        />
      </motion.div>
    </section>
  );
}
