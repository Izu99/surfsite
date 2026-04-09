"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EQUIPMENT } from "@/lib/constants";
import { ShoppingBag } from "lucide-react";

export default function EquipmentSection() {
  return (
    <section className="py-32 px-6 md:px-[120px] bg-light relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-primary text-[12px] font-bold tracking-[5px] uppercase mb-4 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-primary" />
            Premium Gear
          </div>
          <h2 className="font-oswald text-[clamp(40px,5vw,56px)] text-darker font-black leading-tight uppercase mb-8">
            Upgrade Your <br /><span className="text-primary italic">Equipment</span>
          </h2>
          <p className="text-gray text-lg leading-relaxed font-medium mb-10 max-w-lg">
            Browse our curated selection of premium kitesurfing gear. We stock the latest boards,
            kites, and accessories from the world&apos;s top brands.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#"
              className="inline-flex items-center gap-3 bg-deep text-white px-10 py-4 rounded-xl font-oswald font-bold text-sm tracking-[2px] uppercase transition-all duration-300 shadow-xl shadow-blue-900/20 group"
            >
              <ShoppingBag size={18} className="group-hover:rotate-12 transition-transform" />
              Shop The Collection
            </Link>
          </motion.div>
        </motion.div>

        {/* Equipment grid */}
        <div className="grid grid-cols-2 gap-6">
          {EQUIPMENT.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[32px] text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary/5 hover:border-primary/20 group relative overflow-hidden"
            >
              {/* Subtle hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="h-[140px] relative mb-6 overflow-hidden flex items-center justify-center z-10">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={200}
                  height={140}
                  className="object-contain transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-oswald text-xl text-darker font-bold mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <div className="text-base text-primary font-black tracking-wider">
                  {item.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
