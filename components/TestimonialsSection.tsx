"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const goTest = useCallback((n: number) => {
    setCurrent((n + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTest(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, goTest]);

  return (
    <section className="py-32 px-6 md:px-[120px] bg-white relative overflow-hidden" id="testimonials">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      {/* Header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary text-[11px] font-bold tracking-[5px] uppercase mb-4"
        >
          Customer Feedback
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-oswald text-[clamp(40px,5vw,56px)] text-darker font-black uppercase"
        >
          What They <span className="text-primary italic">Say</span>
        </motion.h2>
      </div>

      {/* Modern Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -15 }}
            className="group relative bg-light rounded-[40px] p-10 transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_rgba(59,130,246,0.12)] flex flex-col"
          >
            {/* Quote Icon */}
            <div className="mb-8">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <Quote size={28} />
              </div>
            </div>

            <p className="text-gray text-lg leading-relaxed mb-10 font-medium italic flex-grow">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* User Info */}
            <div className="flex items-center gap-5 pt-8 border-t border-primary/10">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-oswald text-xl text-darker font-bold uppercase tracking-tight">
                  {t.name}
                </div>
                <div className="text-sm text-primary font-bold uppercase tracking-widest mt-0.5">
                  {t.role}
                </div>
                {/* Stars */}
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots/Navigation could be added here for mobile slider, but 3 cards grid is great for desktop */}
    </section>
  );
}
