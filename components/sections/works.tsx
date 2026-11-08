"use client";

import * as React from "react";
import { motion } from "motion/react";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { Sparkles, Terminal, ArrowDown } from "lucide-react";

export function WorksSection() {
  return (
    <section
      id="work"
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
            <span>Archive Index &bull; Curated Works</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extralight tracking-tight text-white leading-tight">
            SELECTED <br />
            <span className="font-normal bg-gradient-to-r from-white via-silver-200 to-silver-500 bg-clip-text text-transparent">
              WORKS<span className="text-silver-600">.</span>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-silver-300 font-light italic leading-relaxed pt-1">
            &ldquo;A collection of ideas turned into digital experiences.&rdquo;
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-silver-500">
          <span className="h-1.5 w-1.5 rounded-full bg-silver-400 animate-pulse" />
          <span>09 CASE STUDIES // 2023 &mdash; 2026</span>
        </div>
      </motion.div>

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-14">
        {/* Project 1: SENTINEL X (Span 7) */}
        <div className="lg:col-span-7">
          <ProjectCard project={projects[0]} index={0} />
        </div>

        {/* Project 2: OUR HERITAGE (Span 5) */}
        <div className="lg:col-span-5">
          <ProjectCard project={projects[1]} index={1} />
        </div>

        {/* Project 3: MedCycle (Span 12 - Centerpiece Feature) */}
        <div className="lg:col-span-12">
          <ProjectCard project={projects[2]} index={2} />
        </div>

        {/* Project 4: NETFLOW (Span 5) */}
        <div className="lg:col-span-5">
          <ProjectCard project={projects[3]} index={3} />
        </div>

        {/* Project 5: Blood AI (Span 7) */}
        <div className="lg:col-span-7">
          <ProjectCard project={projects[4]} index={4} />
        </div>

        {/* Project 6: Disaster Management (Span 7) */}
        <div className="lg:col-span-7">
          <ProjectCard project={projects[5]} index={5} />
        </div>

        {/* Project 7: Tela Web (Span 5) */}
        <div className="lg:col-span-5">
          <ProjectCard project={projects[6]} index={6} />
        </div>

        {/* Project 8: Gaming Console UI (Span 5) */}
        <div className="lg:col-span-5">
          <ProjectCard project={projects[7]} index={7} />
        </div>

        {/* Project 9: Shoes Page (Span 7) */}
        <div className="lg:col-span-7">
          <ProjectCard project={projects[8]} index={8} />
        </div>
      </div>

      {/* Section Endmarker & Architectural Curation Tag */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-silver-500"
      >
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-silver-400" />
          <span>All visual prototypes conform to rigorous ergonomics and cyber security resilience standards.</span>
        </div>

        <div className="flex items-center gap-2 text-silver-400">
          <span>END OF CURATION</span>
          <ArrowDown className="h-3 w-3" />
        </div>
      </motion.div>
    </section>
  );
}
