"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne-400 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer rounded-full";

    const sizeStyles = {
      sm: "h-9 px-4 text-xs tracking-wider uppercase",
      md: "h-11 px-6 text-sm tracking-wide",
      lg: "h-13 px-8 text-base tracking-wide",
    };

    const variantStyles = {
      primary:
        "bg-champagne-300 text-obsidian-950 hover:bg-champagne-200 active:bg-champagne-400 shadow-[0_0_24px_rgba(229,217,198,0.25)] hover:shadow-[0_0_32px_rgba(229,217,198,0.4)]",
      secondary:
        "bg-obsidian-800 text-champagne-100 border border-white/10 hover:border-white/20 hover:bg-obsidian-700",
      outline:
        "border border-champagne-300/40 text-champagne-200 hover:border-champagne-300 hover:bg-champagne-300/5 active:bg-champagne-300/10",
      ghost:
        "text-titanium-300 hover:text-champagne-100 hover:bg-white/5 active:bg-white/10",
      glass:
        "backdrop-blur-md bg-white/[0.04] text-champagne-100 border border-white/10 hover:border-champagne-300/40 hover:bg-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

