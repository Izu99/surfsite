"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/constants";
import { Play, ZoomIn } from "lucide-react";

export default function GallerySection() {
  return (
    <section className="py-32 px-6 md:px-[120px] bg-deep relative overflow-hidden" id="gallery">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-oswald text-[20vw] font-black text-white/[0.02] uppercase pointer-events-none select-none">
        Visuals
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-accent text-[12px] font-bold tracking-[5px] uppercase mb-4 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-accent" />
            Capture The Moment
          </div>
          <h2 className="font-oswald text-[clamp(40px,5vw,60px)] text-white font-black leading-tight uppercase">
            Visual <span className="text-primary italic">Journal</span>
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md text-gray text-lg leading-relaxed font-medium border-r-2 border-primary/30 pr-8 text-right"
        >
          Catch a glimpse of the magic that happens every day on our stretch of the California coast.
        </motion.p>
      </div>

      {/* Modern Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[700px]">
        {GALLERY_IMAGES.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className={cn(
              "relative overflow-hidden rounded-[40px] group cursor-pointer shadow-2xl",
              i === 0 ? "md:col-span-2 md:row-span-2" : "",
              i === 1 ? "md:col-span-2 md:row-span-1" : "",
              i >= 2 ? "md:col-span-1 md:row-span-1" : ""
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl"
              >
                {i % 2 === 0 ? <ZoomIn size={32} /> : <Play size={32} className="ml-1" />}
              </motion.div>
            </div>

            {/* Bottom Label */}
            <div className="absolute bottom-8 left-8 right-8 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                <span className="font-oswald text-white font-bold uppercase tracking-widest text-sm">
                  {item.alt}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Utility for conditional classes since I'm using it here
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
