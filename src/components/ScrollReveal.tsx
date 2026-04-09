"use client";

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
  direction?: "up" | "left" | "right";
}

const delayClasses = {
  0: "",
  1: "[transition-delay:100ms]",
  2: "[transition-delay:200ms]",
  3: "[transition-delay:300ms]",
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const initialTransform =
    direction === "left"
      ? "translateX(-40px)"
      : direction === "right"
      ? "translateX(40px)"
      : "translateY(40px)";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translate(0)";
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(delayClasses[delay], className)}
      style={{
        opacity: 0,
        transform: initialTransform,
        transition: "opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
      }}
    >
      {children}
    </div>
  );
}
