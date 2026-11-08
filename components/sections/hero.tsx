"use client";

import * as React from "react";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { siteConfig } from "@/content/site-config";
import { PortraitFrame } from "@/components/ui/portrait-frame";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDown, Shield, Sparkles } from "lucide-react";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="overview"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto w-full select-none"
    >
      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto w-full">
        {/* Left Column: Typographic Editorial Composition */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8"
        >
          {/* Identity Tag & Availability Pill */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <Badge variant="status" dot>
              {siteConfig.availability.label}
            </Badge>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-mono text-silver-400">
              <Shield className="h-3 w-3 text-silver-400" />
              <span>Cyber Security Disciplined</span>
            </span>
          </motion.div>

          {/* Primary Name Header */}
          <motion.div variants={itemVariants} className="space-y-2">
            <span className="text-xs sm:text-sm font-mono tracking-[0.28em] uppercase text-silver-400 font-medium">
              Portfolio &bull; Index 2026
            </span>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extralight tracking-tight text-white leading-[1.05]">
              RHUSHABH <br />
              <span className="font-normal tracking-tighter bg-gradient-to-r from-white via-silver-200 to-silver-500 bg-clip-text text-transparent">
                KHARTADE<span className="text-silver-600">.</span>
              </span>
            </h1>
          </motion.div>

          {/* Primary & Secondary Dual Identity */}
          <motion.div variants={itemVariants} className="space-y-2 pt-1 border-l-2 border-white/20 pl-4 sm:pl-5">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-silver-100 uppercase">
                UI Designer
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-silver-500" />
              <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-silver-400">
                Primary
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm sm:text-base font-light text-silver-400">
              <Shield className="h-4 w-4 text-silver-400 flex-shrink-0" />
              <span className="tracking-wide">
                Cyber Security Student &bull; Focus on System Resilience & Digital Fortification
              </span>
            </div>
          </motion.div>

          {/* Professional Introduction */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl text-base sm:text-lg text-silver-300/90 font-light leading-relaxed"
          >
            {siteConfig.bio}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
          >
            <Link href="#work" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto group bg-white text-obsidian-950 hover:bg-silver-200 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <span>View Selected Work</span>
                <ArrowDown className="ml-2 h-4 w-4 text-obsidian-950 group-hover:translate-y-0.5 transition-transform" />
              </Button>
            </Link>

            <Link href="#contact" className="w-full sm:w-auto">
              <Button
                variant="glass"
                size="lg"
                className="w-full sm:w-auto border-white/15 text-silver-100 hover:border-white/30"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="ml-2 h-4 w-4 text-silver-400" />
              </Button>
            </Link>
          </motion.div>

          {/* Disciplines Micro Bar */}
          <motion.div
            variants={itemVariants}
            className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-silver-500"
          >
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3 w-3 text-silver-400" />
              <span>Minimalist Design Systems</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-silver-700">&bull;</span>
              <span>Information Architecture</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-silver-700">&bull;</span>
              <span>Threat-Aware Interfaces</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: High-End Portrait Framing */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <PortraitFrame
            src="/images/profile/rhushabh.jpg"
            alt="Rhushabh Khartade — UI Designer & Cyber Security Student"
          />
        </div>
      </div>

      {/* Bottom Scroll Indicator Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="pt-8 sm:pt-12 border-t border-white/[0.06] flex items-center justify-between w-full text-[11px] font-mono text-silver-500"
      >
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-silver-400 animate-pulse" />
          <span className="tracking-widest uppercase">
            Designed with precision &bull; Next.js 16
          </span>
        </div>

        {/* Animated Scroll Prompt */}
        <Link
          href="#work"
          className="group flex items-center gap-2 text-silver-400 hover:text-white transition-colors"
        >
          <span className="tracking-widest uppercase text-[10px] hidden sm:inline">
            Scroll to explore
          </span>
          <div className="flex items-center justify-center h-7 w-7 rounded-full border border-white/10 group-hover:border-white/30 transition-colors">
            <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <span>COORDINATES: 18.5204° N, 73.8567° E</span>
        </div>
      </motion.div>
    </section>
  );
}

