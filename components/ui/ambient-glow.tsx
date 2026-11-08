import * as React from "react";
import { cn } from "@/lib/utils";

export interface AmbientGlowProps {
  className?: string;
}

export function AmbientGlow({ className }: AmbientGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none",
        className
      )}
    >
      {/* Top warm champagne spotlight */}
      <div
        className="absolute -top-[25%] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-[140px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(229, 217, 198, 0.4), rgba(197, 155, 67, 0.15), transparent 70%)",
        }}
      />

      {/* Mid subtle accent glow */}
      <div
        className="absolute top-[40%] -left-[10%] h-[500px] w-[600px] rounded-full opacity-10 blur-[160px]"
        style={{
          background: "radial-gradient(circle, rgba(197, 155, 67, 0.3), transparent 60%)",
        }}
      />

      {/* Bottom right grounding glow */}
      <div
        className="absolute top-[75%] -right-[15%] h-[600px] w-[700px] rounded-full opacity-15 blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, rgba(212, 194, 167, 0.25), transparent 60%)",
        }}
      />

      {/* Micro-grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

