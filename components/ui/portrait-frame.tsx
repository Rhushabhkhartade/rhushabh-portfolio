"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ShieldCheck, Sparkles } from "lucide-react";

export interface PortraitFrameProps {
  className?: string;
  src?: string;
  alt?: string;
}

export function PortraitFrame({
  className,
  src = "/images/profile/rhushabh.jpg",
  alt = "Rhushabh Khartade — UI Designer",
}: PortraitFrameProps) {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={cn("relative group w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px]", className)}
    >
      {/* Outer ambient glow backlight */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-silver-400/10 via-silver-600/5 to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
      />

      {/* Main framed box */}
      <div className="relative aspect-[4/5] w-full rounded-2xl border border-white/[0.12] bg-gradient-to-b from-obsidian-900/90 to-obsidian-950/90 backdrop-blur-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        {/* Subtle interior lighting */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.06] via-transparent to-transparent pointer-events-none"
        />

        {/* Studio registration marks (corner crosshairs) */}
        <div className="absolute top-3 left-3 text-[10px] font-mono text-silver-600 select-none z-20 pointer-events-none">
          +
        </div>
        <div className="absolute top-3 right-3 text-[10px] font-mono text-silver-600 select-none z-20 pointer-events-none">
          +
        </div>
        <div className="absolute bottom-3 left-3 text-[10px] font-mono text-silver-600 select-none z-20 pointer-events-none">
          +
        </div>
        <div className="absolute bottom-3 right-3 text-[10px] font-mono text-silver-600 select-none z-20 pointer-events-none">
          +
        </div>

        {/* Photo Container */}
        {!imageError ? (
          <div className="relative h-full w-full">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              priority
              className={cn(
                "object-cover object-center grayscale contrast-[1.08] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-[0.5]",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />

            {/* Loading / Placeholder while checking image */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-obsidian-950/80">
                <EditorialPlaceholder />
              </div>
            )}
          </div>
        ) : (
          <EditorialPlaceholder />
        )}

        {/* Bottom Metadata Glass Bar */}
        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-obsidian-950 via-obsidian-950/80 to-transparent backdrop-blur-md border-t border-white/[0.08] z-20 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-silver-300 font-medium">
              Rhushabh Khartade
            </div>
            <div className="text-[10px] font-mono tracking-wider text-silver-500">
              UI DESIGN &bull; CYBER SEC
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono text-silver-300">
            <ShieldCheck className="h-3 w-3 text-silver-300" />
            <span>AUTHENTICATED</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EditorialPlaceholder() {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center text-center p-8 select-none">
      {/* Background Architectural Grid Lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Central Monogram Emblem */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative flex items-center justify-center h-28 w-28 rounded-full border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[0_0_40px_rgba(255,255,255,0.06)]">
          <span className="font-serif text-4xl sm:text-5xl font-light tracking-tighter text-silver-100">
            RK<span className="text-silver-500">.</span>
          </span>
          <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-silver-300 animate-pulse" />
        </div>

        {/* Minimalist Editorial Labels */}
        <div className="mt-8 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-[0.24em] uppercase text-silver-300">
            <Sparkles className="h-3 w-3 text-silver-400" />
            <span>Portrait Archive</span>
          </div>
          <p className="text-xs text-silver-500 max-w-[220px] font-light leading-relaxed">
            Architectural aesthetic composition &bull; Studio 2026
          </p>
        </div>
      </div>

      {/* Subtle Frame ID Tag */}
      <div className="absolute top-6 left-6 font-mono text-[9px] tracking-widest text-silver-600">
        SPEC / PORTRAIT-01
      </div>
      <div className="absolute top-6 right-6 font-mono text-[9px] tracking-widest text-silver-600">
        INDEX / 2026
      </div>
    </div>
  );
}

