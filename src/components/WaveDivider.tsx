"use client";

import { cn } from "@/lib/utils";

export default function WaveDivider({
  className,
  heightClassName = "h-[60px] md:h-[100px]",
}: Readonly<{
  className?: string;
  heightClassName?: string;
}>) {
  return (
    <div className={cn("absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30 pointer-events-none", className)}>
      <div className={cn("relative w-[200%] motion-safe:animate-waveFlow motion-reduce:animate-none will-change-transform", heightClassName)}>
        <svg
          className="block w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120V46.29c47.79,22.2,103.59,32.17,158,28c70.36-5.37,136.33-33.31,206.8-37.5c73.84-4.36,147.54,16.88,218.2,35.26c69.27,18,138.3,24.88,209.4,13.08c36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120Z"
            fill="#3b82f6"
            fillOpacity="0.28"
          />
          <path
            d="M0,120V15.81C13,36.92,27.64,56.86,47.69,72.05C99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8c40.92-19,84.73-46,130.83-49.67c36.26-2.85,70.9,9.42,98.6,31.56c31.77,25.39,62.32,62,103.63,73c40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84c30.2,8.66,59,6.17,87.09-7.5c22.43-10.89,48-26.93,60.65-49.24V120Z"
            fill="#60a5fa"
            fillOpacity="0.34"
          />
        </svg>
      </div>
    </div>
  );
}

