import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "champagne" | "gold" | "status";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "border-white/10 bg-white/[0.03] text-titanium-300 hover:border-white/20",
    champagne:
      "border-champagne-300/30 bg-champagne-300/10 text-champagne-200",
    gold:
      "border-gold-500/30 bg-gold-500/10 text-gold-300",
    status:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono tracking-wider transition-colors select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            variant === "status" ? "bg-emerald-400 animate-pulse" : "bg-champagne-400"
          )}
        />
      )}
      {children}
    </span>
  );
}

