"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  interactive?: boolean;
  glow?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, interactive = false, glow = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={interactive ? { y: -4, transition: { duration: 0.25 } } : undefined}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-obsidian-900/60 p-6 md:p-8 backdrop-blur-xl transition-colors duration-500",
          interactive && "hover:border-champagne-300/30 hover:bg-obsidian-850/70",
          glow && "shadow-[0_0_50px_-12px_rgba(214,196,172,0.12)]",
          className
        )}
        {...props}
      >
        {/* Subtle radial inner sheen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(214, 196, 172, 0.08), transparent 40%)",
          }}
        />
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

