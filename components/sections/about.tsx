"use client";

import * as React from "react";
import { motion } from "motion/react";
import { siteConfig } from "@/content/site-config";
import type { PhilosophyPrinciple } from "@/types/portfolio";
import { cn } from "@/lib/utils";
import { Shield, Sparkles, Compass, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 select-none">
      {/* ========================================================================= */}
      {/* SECTION 1: ABOUT ME                                                       */}
      {/* ========================================================================= */}
      <section
        id="about"
        className="relative py-24 sm:py-32 lg:py-40 border-b border-white/[0.08]"
      >
        {/* Editorial Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between pb-12 border-b border-white/[0.06] text-xs font-mono text-silver-500"
        >
          <div className="flex items-center gap-2">
            <Compass className="h-3.5 w-3.5 text-silver-400" />
            <span className="tracking-[0.28em] uppercase text-silver-400">
              Index / 02 &bull; Biography
            </span>
          </div>

          <span className="tracking-widest uppercase text-[11px] text-silver-500 hidden sm:inline">
            Rhushabh Kishor Khartade
          </span>
        </motion.div>

        {/* Asymmetric About Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start">
          {/* Left Column: Architectural Profile Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-[0.24em] uppercase text-silver-400">
                Identity &bull; Discipline
              </span>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extralight tracking-tight text-white leading-[1.1]">
                ABOUT <br />
                <span className="font-normal bg-gradient-to-r from-white via-silver-200 to-silver-500 bg-clip-text text-transparent">
                  ME<span className="text-silver-600">.</span>
                </span>
              </h2>
            </div>

            {/* Spec Identity Box */}
            <div className="relative rounded-2xl border border-white/[0.1] bg-obsidian-900/60 p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              {/* Corner crosshairs */}
              <span className="absolute top-2.5 left-2.5 text-[9px] font-mono text-silver-600 select-none pointer-events-none">
                +
              </span>
              <span className="absolute top-2.5 right-2.5 text-[9px] font-mono text-silver-600 select-none pointer-events-none">
                +
              </span>
              <span className="absolute bottom-2.5 left-2.5 text-[9px] font-mono text-silver-600 select-none pointer-events-none">
                +
              </span>
              <span className="absolute bottom-2.5 right-2.5 text-[9px] font-mono text-silver-600 select-none pointer-events-none">
                +
              </span>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-silver-500">
                  Full Name
                </span>
                <p className="text-base font-light text-white tracking-wide">
                  {siteConfig.fullName}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-silver-500">
                  Dual Specialization
                </span>
                <p className="text-sm font-mono text-silver-200">
                  {siteConfig.identity}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-silver-500">
                  Core Intersection
                </span>
                <div className="flex items-center gap-2 text-xs font-mono text-silver-300">
                  <Shield className="h-3.5 w-3.5 text-silver-400" />
                  <span>UI Design &times; Cyber Security</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-silver-500">
                <span>STATUS: AVAILABLE</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sophisticated Editorial Typography (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 lg:pt-8"
          >
            {/* Primary Highlight Statement */}
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extralight tracking-tight text-white leading-[1.35] border-l-2 border-white/20 pl-6 sm:pl-8">
              &ldquo;{siteConfig.aboutParagraphs[0]}&rdquo;
            </blockquote>

            {/* Secondary Narrative Statement */}
            <div className="pl-6 sm:pl-8 space-y-6">
              <p className="text-base sm:text-lg text-silver-300/90 font-light leading-relaxed">
                {siteConfig.aboutParagraphs[1]}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-silver-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-silver-300" />
                  <span>Clean Visual Aesthetics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-silver-300" />
                  <span>Meaningful Interactions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-silver-300" />
                  <span>Resilient System Logic</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: DESIGN PHILOSOPHY                                              */}
      {/* ========================================================================= */}
      <section
        id="philosophy"
        className="relative py-24 sm:py-32 lg:py-40"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 border-b border-white/[0.08]"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.28em] uppercase text-silver-400">
              <Sparkles className="h-3.5 w-3.5 text-silver-400" />
              <span>Core Tenets &bull; Manifesto</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extralight tracking-tight text-white leading-tight">
              DESIGN <br />
              <span className="font-normal bg-gradient-to-r from-white via-silver-200 to-silver-500 bg-clip-text text-transparent">
                PHILOSOPHY<span className="text-silver-600">.</span>
              </span>
            </h2>

            <p className="text-base sm:text-lg text-silver-300 font-light italic leading-relaxed pt-1">
              &ldquo;Four guiding principles that inform every layout, component, and interaction.&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-silver-500">
            <span className="h-1.5 w-1.5 rounded-full bg-silver-400" />
            <span>04 PRINCIPLES // STUDIO STANDARDS</span>
          </div>
        </motion.div>

        {/* Asymmetric 4-Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-16">
          {siteConfig.philosophy.map((item, index) => (
            <PhilosophyCard key={item.number} item={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

interface PhilosophyCardProps {
  item: PhilosophyPrinciple;
  index: number;
}

function PhilosophyCard({ item, index }: PhilosophyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-obsidian-900/60 p-8 sm:p-10 lg:p-12 backdrop-blur-xl transition-all duration-500 hover:border-white/25 hover:bg-obsidian-850/80 shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-hidden"
      )}
    >
      {/* Subtle Ambient Sheen */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-silver-400/[0.04] blur-2xl group-hover:bg-silver-300/[0.08] transition-all duration-700 pointer-events-none"
      />

      {/* Top Number & Tag */}
      <div className="relative z-10 flex items-center justify-between pb-8 border-b border-white/[0.06] text-xs font-mono text-silver-500">
        <span className="text-xl sm:text-2xl font-light tracking-tighter text-silver-300 group-hover:text-white transition-colors">
          {item.number}
        </span>
        <span className="tracking-[0.2em] uppercase text-[10px] text-silver-500">
          PRINCIPLE // 0{index + 1}
        </span>
      </div>

      {/* Center Title & Description */}
      <div className="relative z-10 py-6 space-y-4">
        <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white group-hover:text-silver-100 transition-colors">
          {item.title}
        </h3>

        <p className="text-sm sm:text-base text-silver-300/80 font-light leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Bottom Footer Accent */}
      <div className="relative z-10 pt-6 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-silver-600">
        <span>ARCHITECTURAL STANDARD</span>
        <span className="text-silver-500 group-hover:text-silver-300 transition-colors">
          CONFIRMED &bull; 2026
        </span>
      </div>
    </motion.article>
  );
}
