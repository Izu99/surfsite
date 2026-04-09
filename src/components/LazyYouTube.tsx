"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LazyYouTube({
  videoId,
  title,
  className,
  autoStart = true,
  params,
}: Readonly<{
  videoId: string;
  title: string;
  className?: string;
  autoStart?: boolean;
  params?: string;
}>) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35, once: false });
  const [activated, setActivated] = useState(false);

  const src = useMemo(() => {
    const base =
      params ??
      `?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`;
    return `https://www.youtube.com/embed/${videoId}${base}`;
  }, [params, videoId]);

  // Auto-start only when on-screen (and not reduced motion).
  useEffect(() => {
    if (!autoStart) return;
    if (prefersReducedMotion) return;
    if (inView) setActivated(true);
  }, [autoStart, inView, prefersReducedMotion]);

  // When scrolled away, unmount the iframe to drop CPU usage.
  useEffect(() => {
    if (!inView) setActivated(false);
  }, [inView]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div className="relative aspect-video rounded-[32px] overflow-hidden">
        {activated ? (
          <iframe
            src={src}
            title={title}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[115%] scale-[1.2]"
            allow="autoplay; encrypted-media"
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActivated(true)}
            className="absolute inset-0 w-full h-full bg-deep/20 group"
            aria-label="Play video"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-deep/40 to-transparent" />
            <motion.div
              initial={false}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl"
            >
              <Play size={30} className="ml-1" />
            </motion.div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 text-white/80 text-sm font-medium">
                Tap to load video (saves CPU/RAM)
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

