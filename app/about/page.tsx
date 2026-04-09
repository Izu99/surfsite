"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import StatsSection from "@/components/StatsSection";
import CTABanner from "@/components/CTABanner";

const TEAM = [
  {
    name: "Jake Morrison",
    role: "Head Instructor & Founder",
    bio: "Kitesurfing since 2001, IKO Level 3 certified. Jake founded WaveX after a decade competing on the world circuit.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Leila Santos",
    role: "Senior Coach",
    bio: "Former national champion with 8 years of teaching experience. Leila specialises in beginner-to-intermediate progression.",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Ryan Park",
    role: "Advanced Coach",
    bio: "Freestyle specialist and drone photographer. Ryan coaches advanced riders looking to master tricks and wave riding.",
    img: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    name: "Mia Chen",
    role: "Kids Program Director",
    bio: "Passionate about youth ocean education, Mia runs our popular kids camps with an emphasis on safety and fun.",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

const VALUES = [
  { icon: "🛡️", title: "Safety First", desc: "Every session starts with a thorough safety briefing. Our protocols exceed IKO standards." },
  { icon: "🎓", title: "Expert Coaching", desc: "All instructors hold IKO Level 2+ certification and undergo ongoing professional development." },
  { icon: "🌊", title: "Ocean Passion", desc: "We live and breathe the ocean. Our love for the sport is genuinely contagious." },
  { icon: "🤝", title: "Community", desc: "WaveX is more than a school — it's a family of riders who support each other every session." },
];

export default function AboutPage() {
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
            src="https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=1600&q=80"
            alt="WaveX team on the beach"
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
            Our Legacy
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-oswald text-[clamp(50px,10vw,100px)] leading-[0.9] text-white font-black uppercase"
          >
            About <span className="text-primary italic">WaveX</span>
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-6 md:px-[120px] grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-primary text-[12px] font-bold tracking-[5px] uppercase mb-6">Founded 2008</div>
          <h2 className="font-oswald text-[clamp(32px,4vw,48px)] text-darker font-black leading-tight mb-8 uppercase text-balance">
            From A Beach Shack To California&apos;s <span className="text-primary italic">Premier</span> Kite School
          </h2>
          <div className="space-y-6 text-gray text-lg font-medium leading-relaxed mb-12">
            <p>
              WaveX began with a single kite, a van, and a dream. Word spread quickly about the quality 
              of coaching, and within two seasons WaveX had outgrown its humble origins.
            </p>
            <p>
              Today we operate a full beachside facility with a dedicated equipment store, rest area, and
              video coaching suite. Over 2,500 riders have graduated through our programs.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-oswald font-bold text-sm tracking-[2px] uppercase shadow-xl shadow-primary/20"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 h-[500px]"
        >
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&q=80"
              alt="Action"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="relative rounded-[32px] overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&q=80"
                alt="Beach"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="relative rounded-[32px] overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1549180030-48bf079fb38a?w=600&q=80"
                alt="Waves"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 md:px-[120px] bg-light relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-oswald text-[15vw] font-black text-primary/[0.03] uppercase pointer-events-none select-none">
          Values
        </div>
        
        <div className="text-center mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-[12px] font-bold tracking-[5px] uppercase mb-4"
          >
            What Drives Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-oswald text-[clamp(32px,4vw,56px)] text-darker font-black uppercase"
          >
            Our Core <span className="text-primary italic">Values</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[40px] text-center shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-[24px] flex items-center justify-center text-4xl mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                {v.icon}
              </div>
              <h3 className="font-oswald text-2xl text-darker font-bold mb-4 uppercase tracking-tight">{v.title}</h3>
              <p className="text-gray font-medium leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <StatsSection />

      {/* Team Section */}
      <section className="py-32 px-6 md:px-[120px] bg-white">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-[12px] font-bold tracking-[5px] uppercase mb-4"
          >
            Expert Instructors
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-oswald text-[clamp(32px,4vw,56px)] text-darker font-black uppercase"
          >
            Meet The <span className="text-primary italic">Pro Team</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-8 shadow-2xl">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-oswald text-2xl text-darker font-bold uppercase tracking-tight mb-1">{member.name}</h3>
              <div className="text-primary font-bold text-sm uppercase tracking-widest mb-4">{member.role}</div>
              <p className="text-gray font-medium leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
