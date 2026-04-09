"use client";

import { motion } from "framer-motion";
import { PRICING_PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-32 px-6 md:px-[120px] bg-white relative overflow-hidden" id="pricing">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--light)_0%,_transparent_70%)] -z-10 opacity-50" />

      {/* Header */}
      <div className="text-center mb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold tracking-[4px] uppercase mb-6"
        >
          Kite School Pricing
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-oswald text-[clamp(40px,5vw,56px)] text-darker font-black leading-none mb-6 uppercase"
        >
          Our <span className="text-primary italic">Programs</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray max-w-xl mx-auto leading-relaxed text-lg font-medium"
        >
          Simple, transparent pricing for every level. All programs include equipment rental, safety
          gear, and professional instruction.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -20 }}
            className={cn(
              "relative rounded-[40px] p-12 transition-all duration-500 flex flex-col h-full",
              plan.featured
                ? "bg-deep text-white shadow-[0_30px_60px_rgba(30,58,138,0.25)] ring-1 ring-primary/20"
                : "bg-light border border-primary/10 text-darker hover:bg-white hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)]"
            )}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white font-oswald text-[12px] tracking-[3px] px-6 py-2 rounded-full font-bold uppercase shadow-xl">
                {plan.badge}
              </div>
            )}

            {/* Plan Header */}
            <div className="mb-10">
              <div className={cn(
                "text-[12px] tracking-[4px] uppercase font-bold mb-4",
                plan.featured ? "text-accent" : "text-primary"
              )}>
                {plan.name}
              </div>
              <div className="flex items-start gap-1">
                <span className={cn(
                  "font-oswald text-3xl font-bold mt-2",
                  plan.featured ? "text-white/40" : "text-dark/40"
                )}>$</span>
                <span className="font-oswald text-[80px] font-black leading-none tracking-tighter">
                  {plan.price}
                </span>
              </div>
              <div className={cn(
                "text-[14px] font-bold mt-2 tracking-widest uppercase opacity-60",
                plan.featured ? "text-white" : "text-gray"
              )}>
                {plan.period}
              </div>
            </div>

            {/* Features */}
            <ul className="list-none mb-12 space-y-4 flex-grow">
              {plan.features.map((feat) => (
                <li
                  key={feat}
                  className="flex items-center gap-4 text-base font-medium"
                >
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center",
                    plan.featured ? "bg-primary/20 text-accent" : "bg-primary/10 text-primary"
                  )}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className={plan.featured ? "text-white/80" : "text-gray"}>{feat}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "w-full py-5 rounded-2xl font-oswald font-black text-sm tracking-[2px] uppercase transition-all duration-300",
                plan.featured
                  ? "bg-primary text-white shadow-xl shadow-primary/30 hover:bg-secondary"
                  : "bg-white text-primary border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white"
              )}
            >
              Book Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
