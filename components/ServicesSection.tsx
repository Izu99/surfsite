"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-32 px-6 md:px-[120px] bg-deep relative overflow-hidden" id="services">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="text-accent text-[12px] font-bold tracking-[5px] uppercase mb-4 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-accent" />
            Our Expertise
          </div>
          <h2 className="font-oswald text-[clamp(40px,5vw,60px)] text-white font-black leading-tight uppercase">
            Master The <span className="text-primary italic">Elements</span>
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md text-gray text-lg leading-relaxed font-medium border-l-2 border-primary/30 pl-8"
        >
          Whether you&apos;re a complete beginner or an experienced rider looking to level up, we have
          a program designed just for you.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -15 }}
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
          >
            {/* Image Container */}
            <div className="relative h-[240px] overflow-hidden">
              <Image
                src={service.img}
                alt={service.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/90 to-transparent" />
              
              {/* Icon Floating */}
              <div className="absolute -bottom-6 right-8 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12">
                {service.icon}
              </div>
            </div>

            {/* Content */}
            <div className="p-10 pt-12">
              <h3 className="font-oswald text-2xl text-white font-bold mb-4 uppercase tracking-wider group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray text-base leading-relaxed mb-8 font-medium">
                {service.description}
              </p>
              
              <div className="flex items-center gap-4 text-accent font-oswald font-bold uppercase tracking-widest text-sm cursor-pointer group/link">
                <span className="relative overflow-hidden inline-block">
                  Find Out More
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent -translate-x-full group-hover/link:translate-x-0 transition-transform duration-500" />
                </span>
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
