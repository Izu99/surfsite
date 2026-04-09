"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    title: "Location",
    lines: ["22000 Pacific Coast Hwy", "Malibu, CA 90265"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+1 (310) 555-0199"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["hello@wavex.surf"],
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Mon – Sun: 7:00 AM – 7:00 PM"],
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="bg-white">
      {/* Page Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-deep">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Kite over Malibu"
            fill
            priority
            className="object-cover object-center opacity-60"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
        
        <div className="relative z-10 pl-8 md:pl-[120px] max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-accent text-[12px] font-bold tracking-[5px] uppercase mb-6 flex items-center gap-3"
          >
            <span className="w-10 h-[2px] bg-accent" />
            Get In Touch
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-oswald text-[clamp(50px,10vw,100px)] leading-[0.9] text-white font-black uppercase"
          >
            Contact <span className="text-primary italic">Us</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32 px-6 md:px-[120px] grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-24 items-start">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-primary text-[12px] font-bold tracking-[5px] uppercase mb-6">
            Visit Our Spot
          </div>
          <h2 className="font-oswald text-[clamp(32px,4vw,48px)] text-darker font-black leading-tight mb-12 uppercase">
            On The <span className="text-primary italic">Beach</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-16">
            {CONTACT_DETAILS.map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-8 rounded-[32px] bg-light border border-primary/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <item.icon size={24} />
                </div>
                <div>
                  <div className="font-oswald text-lg text-darker font-bold uppercase tracking-tight mb-1">
                    {item.title}
                  </div>
                  {item.lines.map((line) => (
                    <div key={line} className="text-gray font-medium">{line}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Map Placeholder */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative h-[300px] rounded-[40px] overflow-hidden shadow-2xl group"
          >
            <Image
              src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80"
              alt="Malibu location"
              fill
              className="object-cover brightness-50 group-hover:brightness-75 transition-all duration-700"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
              <MapPin size={40} className="text-primary mb-4" />
              <div className="font-oswald text-2xl font-black mb-1 uppercase tracking-tighter">Malibu Beach, CA</div>
              <div className="text-white/70 font-medium mb-6">22000 Pacific Coast Hwy</div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://maps.google.com/?q=Malibu+Beach+California"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-3 rounded-full font-oswald font-bold text-sm tracking-widest uppercase shadow-xl"
              >
                Directions
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-light rounded-[48px] p-8 md:p-16 border border-primary/10 relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
          
          <div className="mb-12">
            <div className="text-primary text-[12px] font-bold tracking-[5px] uppercase mb-4">
              Send A Message
            </div>
            <h2 className="font-oswald text-[clamp(28px,3vw,40px)] text-darker font-black leading-tight uppercase">
              Start Your <span className="text-primary italic">Journey</span>
            </h2>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 flex flex-col items-center gap-6"
              >
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <CheckCircle2 size={64} />
                </div>
                <div>
                  <h3 className="font-oswald text-3xl text-darker font-black uppercase mb-4 tracking-tight">Message Received!</h3>
                  <p className="text-gray text-lg font-medium max-w-sm">
                    One of our team members will get back to you within 24 hours. Aloha! 🤙
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-primary font-oswald font-bold uppercase tracking-widest text-sm border-b-2 border-primary/20 hover:border-primary transition-all"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[3px] text-gray ml-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jake Morrison"
                      className="w-full px-8 py-5 rounded-2xl bg-white text-darker font-medium outline-none transition-all border-2 border-transparent focus:border-primary shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[3px] text-gray ml-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-8 py-5 rounded-2xl bg-white text-darker font-medium outline-none transition-all border-2 border-transparent focus:border-primary shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[3px] text-gray ml-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (310) 000-0000"
                      className="w-full px-8 py-5 rounded-2xl bg-white text-darker font-medium outline-none transition-all border-2 border-transparent focus:border-primary shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[3px] text-gray ml-2">Select Program</label>
                    <div className="relative">
                      <select
                        name="program"
                        value={form.program}
                        onChange={handleChange}
                        className="w-full px-8 py-5 rounded-2xl bg-white text-darker font-medium outline-none transition-all border-2 border-transparent focus:border-primary shadow-sm appearance-none cursor-pointer"
                      >
                        <option value="">Choose your path…</option>
                        <option>Basic — $45/session</option>
                        <option>Kite Rider — $52/session</option>
                        <option>Pro Rider — $73/session</option>
                        <option>Kids Summer Camp</option>
                        <option>General Inquiry</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                        ▼
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-[3px] text-gray ml-2">How can we help? *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your level and preferred dates…"
                    className="w-full px-8 py-5 rounded-2xl bg-white text-darker font-medium outline-none transition-all border-2 border-transparent focus:border-primary shadow-sm resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-6 rounded-2xl font-oswald font-black text-sm tracking-[3px] uppercase shadow-2xl shadow-primary/30 transition-all hover:bg-secondary flex items-center justify-center gap-4 disabled:opacity-70"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <Send size={18} />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
