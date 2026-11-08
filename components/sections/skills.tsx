"use client";

import * as React from "react";
import { motion } from "motion/react";
import { skillGroups } from "@/content/skills";
import {
  Palette,
  Shield,
  Sparkles,
  Terminal,
  Layers,
  CheckCircle2,
  Cpu,
} from "lucide-react";

export function SkillsSection() {
  const creativeGroup = skillGroups[0];
  const securityGroup = skillGroups[1];

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto w-full select-none"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 border-b border-white/[0.08]"
      >
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.28em] uppercase text-silver-400">
            <Sparkles className="h-3.5 w-3.5 text-silver-400" />
            <span>Core Competencies & Tooling</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extralight tracking-tight text-white leading-tight">
            SKILLS & <br />
            <span className="font-normal bg-gradient-to-r from-white via-silver-200 to-silver-500 bg-clip-text text-transparent">
              EXPERTISE<span className="text-silver-600">.</span>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-silver-300 font-light italic leading-relaxed pt-1">
            &ldquo;Combining aesthetic sensibility with digital systems resilience.&rdquo;
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-silver-500">
          <span className="h-1.5 w-1.5 rounded-full bg-silver-400 animate-pulse" />
          <span>DUAL DISCIPLINE MATRIX</span>
        </div>
      </motion.div>

      {/* Two Distinct Editorial Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-14 items-start">
        {/* Column 1: UI Design & Creative */}
        {creativeGroup && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-2xl border border-white/[0.08] bg-obsidian-900/60 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-silver-400/30 hover:bg-obsidian-850/80 shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Top-Right Ambient Sheen */}
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-silver-400/[0.04] blur-3xl group-hover:bg-silver-300/[0.08] transition-all duration-700 pointer-events-none"
            />

            {/* Corner Crosshairs */}
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

            <div className="relative z-10 space-y-6">
              {/* Category Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full border border-white/10 bg-white/[0.04] text-silver-200">
                    <Palette className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-silver-500 block">
                      Discipline 01
                    </span>
                    <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                      {creativeGroup.category}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono text-silver-400">
                  {creativeGroup.skills.length.toString().padStart(2, "0")} CAPABILITIES
                </span>
              </div>

              {/* Category Narrative */}
              <p className="text-xs sm:text-sm text-silver-300/80 font-light leading-relaxed">
                Focusing on visual clarity, spatial harmony, and accessible interface typography. Translating complex system requirements into clean, human-centered digital experiences.
              </p>

              {/* Skills Item Roster */}
              <div className="space-y-2.5 pt-2">
                {creativeGroup.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-silver-400 group-hover/item:scale-125 transition-transform" />
                      <span className="text-sm font-light text-white group-hover/item:text-silver-100 transition-colors">
                        {skill.name}
                      </span>
                    </div>

                    {skill.tag && (
                      <span className="text-[11px] font-mono uppercase tracking-wider text-silver-400 px-2.5 py-0.5 rounded-full border border-white/[0.08] bg-obsidian-950/60">
                        {skill.tag}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Column Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-silver-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-silver-400" />
                  <span>Figma & Design Systems</span>
                </span>
                <span className="text-silver-400">DESIGN FOCUS</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Column 2: Cyber Security & Technology */}
        {securityGroup && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="group relative rounded-2xl border border-white/[0.08] bg-obsidian-900/60 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-silver-400/30 hover:bg-obsidian-850/80 shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Top-Right Ambient Sheen */}
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-silver-400/[0.04] blur-3xl group-hover:bg-silver-300/[0.08] transition-all duration-700 pointer-events-none"
            />

            {/* Corner Crosshairs */}
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

            <div className="relative z-10 space-y-6">
              {/* Category Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full border border-white/10 bg-white/[0.04] text-silver-200">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-silver-500 block">
                      Discipline 02
                    </span>
                    <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                      {securityGroup.category}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono text-silver-400">
                  {securityGroup.skills.length.toString().padStart(2, "0")} CAPABILITIES
                </span>
              </div>

              {/* Category Narrative */}
              <p className="text-xs sm:text-sm text-silver-300/80 font-light leading-relaxed">
                Foundations in computer science, operating environments, networking topologies, and programming. Informing UI decisions with technical understanding and security awareness.
              </p>

              {/* Skills Item Roster */}
              <div className="space-y-2.5 pt-2">
                {securityGroup.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-silver-400 group-hover/item:scale-125 transition-transform" />
                      <span className="text-sm font-light text-white group-hover/item:text-silver-100 transition-colors">
                        {skill.name}
                      </span>
                    </div>

                    {skill.tag && (
                      <span className="text-[11px] font-mono uppercase tracking-wider text-silver-400 px-2.5 py-0.5 rounded-full border border-white/[0.08] bg-obsidian-950/60">
                        {skill.tag}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Column Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-silver-500">
                <span className="flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-silver-400" />
                  <span>Linux & Security Fundamentals</span>
                </span>
                <span className="text-silver-400">TECH FOCUS</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Section Endmarker */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-silver-500"
      >
        <div className="flex items-center gap-2">
          <Layers className="h-3.5 w-3.5 text-silver-400" />
          <span>Bridging technical foundations with human-centered visual design.</span>
        </div>

        <div className="flex items-center gap-2 text-silver-400">
          <Cpu className="h-3.5 w-3.5" />
          <span>UI DESIGN &bull; CYBER SECURITY</span>
        </div>
      </motion.div>
    </section>
  );
}

