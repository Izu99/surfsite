"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function CTABanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-primary py-24 px-6 md:px-[120px] relative overflow-hidden">
      {/* Decorative Waves */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="white" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center lg:text-left"
        >
          <h2 className="font-oswald text-[clamp(32px,5vw,52px)] text-white font-black leading-[1.1] uppercase mb-6">
            Get 30% Off Your<br />First <span className="text-deep italic">Blue Session</span>
          </h2>
          <p className="text-white/80 text-lg font-medium tracking-wide">
            Join our newsletter and never miss a lesson, event, or deal. Ride more, pay less.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-lg"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-deep/30 backdrop-blur-xl border border-white/20 text-white rounded-[32px] p-8 text-center flex flex-col items-center gap-4"
              >
                <CheckCircle2 size={48} className="text-accent" />
                <div>
                  <div className="font-oswald text-2xl font-bold uppercase tracking-wider">You&apos;re in!</div>
                  <p className="text-white/60 mt-1">Check your inbox for the welcome gift.</p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="relative group"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-8 pr-48 py-6 rounded-[32px] bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white text-lg outline-none transition-all focus:border-white focus:bg-white/20 placeholder:text-white/40"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-8 rounded-[24px] bg-deep text-white font-oswald font-black text-sm tracking-[2px] uppercase flex items-center gap-3 transition-all hover:bg-black active:scale-95 group-hover:shadow-2xl"
                >
                  <Send size={18} />
                  Subscribe
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
