"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import type { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Shield,
  Layers,
  Sparkles,
  Activity,
  Cpu,
  X,
  Maximize2,
  Calendar,
  CheckCircle2,
} from "lucide-react";

export interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
  onSelect?: (project: Project) => void;
}

export function ProjectCard({ project, index, className, onSelect }: ProjectCardProps) {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [detailOpen, setDetailOpen] = React.useState(false);
  const [activeModalImage, setActiveModalImage] = React.useState<string | null>(project.image || null);

  const indexFormatted = String(index + 1).padStart(2, "0");
  const currentSrc = project.image || null;

  const handleImageError = () => {
    setImageError(true);
  };

  const getGalleryLabel = (src: string, i: number) => {
    const s = src.toLowerCase();
    if (s.includes("net-monitoring")) return "Network Monitoring";
    if (s.includes("emergency-alert")) return "Emergency Alert";
    if (s.includes("rescue-operation")) return "Rescue Operation";
    if (s.includes("live-monitoring")) return "Live Monitoring";
    if (s.includes("monitoring")) return "System Telemetry";
    if (s.includes("delivery")) return "Delivery Tracking";
    if (s.includes("checkout")) return "Checkout Flow";
    if (s.includes("dashboard")) return "Dashboard View";
    if (s.includes("payment")) return "Payment Review";
    if (s.includes("store")) return "Console Store";
    if (s.includes("home")) return "Overview Portal";
    return `Screen ${i + 1}`;
  };

  const getCategoryIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("security") || cat.includes("threat") || cat.includes("crisis") || cat.includes("safety")) {
      return <Shield className="h-4 w-4 text-silver-300" />;
    }
    if (cat.includes("editorial") || cat.includes("cultural") || cat.includes("footwear")) {
      return <Sparkles className="h-4 w-4 text-silver-300" />;
    }
    if (cat.includes("health") || cat.includes("medical")) {
      return <Activity className="h-4 w-4 text-silver-300" />;
    }
    if (cat.includes("ai") || cat.includes("telemetry") || cat.includes("media") || cat.includes("console")) {
      return <Cpu className="h-4 w-4 text-silver-300" />;
    }
    return <Layers className="h-4 w-4 text-silver-300" />;
  };

  const handleOpen = () => {
    if (onSelect) {
      onSelect(project);
    } else {
      setDetailOpen(true);
    }
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
        className={cn(
          "group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-obsidian-900/60 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-silver-400/30 hover:bg-obsidian-850/80 shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_14px_45px_rgba(0,0,0,0.6)] overflow-hidden",
          className
        )}
      >
        {/* Subtle Top-Right Ambient Sheen */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-silver-400/[0.04] blur-3xl group-hover:bg-silver-300/[0.08] transition-all duration-700 pointer-events-none"
        />

        {/* Card Header: Index & Year */}
        <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/[0.06] text-xs font-mono text-silver-500">
          <div className="flex items-center gap-2.5">
            <span className="text-silver-300 font-semibold tracking-wider">
              {indexFormatted}
            </span>
            <span className="text-silver-700">&bull;</span>
            <span className="tracking-widest uppercase text-[11px] text-silver-400">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2 text-silver-500 text-[11px] font-mono">
            {project.projectType && (
              <span
                className={cn(
                  "px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider border",
                  project.projectType === "Functional Application"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                    : "border-white/10 bg-white/[0.03] text-silver-400"
                )}
              >
                {project.projectType}
              </span>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3 text-silver-600" />
              <span>{project.year}</span>
            </div>
          </div>
        </div>

        {/* Visual Screenshot / Elegant Architectural Placeholder Area */}
        <div
          onClick={handleOpen}
          className="relative aspect-[16/10] w-full rounded-xl border border-white/[0.08] bg-obsidian-950/90 overflow-hidden my-6 cursor-pointer group/media select-none"
        >
          {/* Subtle Grid Background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.05] pointer-events-none group-hover/media:opacity-[0.08] transition-opacity duration-500"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Screenshot Display with Hover Zoom */}
          {currentSrc && !imageError ? (
            <div className="relative h-full w-full">
              <Image
                src={currentSrc}
                alt={`${project.title} — Interface Screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className={cn(
                  "object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 group-hover/media:scale-105",
                  imageLoaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setImageLoaded(true)}
                onError={handleImageError}
              />

              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-obsidian-950/90">
                  <TastefulPlaceholder project={project} indexFormatted={indexFormatted} />
                </div>
              )}
            </div>
          ) : (
            <TastefulPlaceholder project={project} indexFormatted={indexFormatted} />
          )}

          {/* Hover Floating Action Pill */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/media:opacity-100 transition-all duration-300 bg-obsidian-950/40 backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-obsidian-900/90 text-white text-xs font-mono tracking-wider shadow-2xl scale-95 group-hover/media:scale-100 transition-transform duration-300">
              <Maximize2 className="h-3.5 w-3.5 text-silver-300" />
              <span>View Project Specs</span>
            </span>
          </div>

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
        </div>

        {/* Project Details Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            {/* Title */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white group-hover:text-silver-100 transition-colors">
                {project.title}
              </h3>

              <div className="p-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-silver-400 group-hover:border-white/20 group-hover:text-white transition-colors">
                {getCategoryIcon(project.category)}
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xs sm:text-sm font-mono tracking-wide text-silver-400 leading-snug">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-sm text-silver-300/80 font-light leading-relaxed pt-1">
              {project.description}
            </p>
          </div>

          {/* Contribution Highlight Box */}
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 space-y-1.5">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider uppercase text-silver-400 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5 text-silver-300" />
              <span>My Contribution</span>
            </div>
            <p className="text-xs text-silver-300/90 font-light leading-relaxed pl-5.5">
              {project.contribution}
            </p>
          </div>

          {/* Technology Tags */}
          <div className="space-y-2 pt-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-silver-500">
              Stack & Methodologies
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="default"
                  className="text-[11px] py-1 px-3 border-white/[0.08] text-silver-300 bg-white/[0.02]"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Card Footer Action */}
          <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-silver-500">
              CASE ARCHIVE // 2026
            </span>

            <button
              onClick={handleOpen}
              className="group/cta inline-flex items-center gap-2 text-xs font-mono tracking-wider text-silver-200 hover:text-white transition-colors cursor-pointer outline-none"
            >
              <span>View Project</span>
              <div className="flex items-center justify-center h-6 w-6 rounded-full border border-white/10 group-hover/cta:border-white/30 group-hover/cta:bg-white/[0.08] transition-colors">
                <ArrowUpRight className="h-3 w-3 text-silver-400 group-hover/cta:text-white group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </motion.article>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {detailOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-obsidian-950/80 backdrop-blur-xl"
            onClick={() => setDetailOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-obsidian-900 p-6 sm:p-10 shadow-2xl text-silver-200 select-none"
            >
              {/* Close Button */}
              <button
                onClick={() => setDetailOpen(false)}
                aria-label="Close project modal"
                className="absolute top-6 right-6 flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/[0.04] text-silver-400 hover:text-white hover:border-white/30 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-silver-400">
                    <span>{indexFormatted}</span>
                    <span>&bull;</span>
                    <span>{project.category}</span>
                    {project.projectType && (
                      <>
                        <span>&bull;</span>
                        <span className={project.projectType === "Functional Application" ? "text-emerald-400" : "text-silver-300"}>
                          {project.projectType}
                        </span>
                      </>
                    )}
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-base font-mono text-silver-400">
                    {project.tagline}
                  </p>
                </div>

                {/* Modal High-Resolution Preview (when screenshot is available) */}
                {(activeModalImage || currentSrc) && !imageError && (
                  <div className="space-y-3">
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl border border-white/10 overflow-hidden bg-obsidian-950">
                      <Image
                        src={activeModalImage || currentSrc!}
                        alt={`${project.title} — Interface Specifications`}
                        fill
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-cover object-top"
                      />
                    </div>

                    {project.gallery && project.gallery.length > 1 && (
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-silver-500 mr-1">
                          Views:
                        </span>
                        {project.gallery.map((imgSrc, i) => {
                          const isActive = (activeModalImage || currentSrc) === imgSrc;
                          return (
                            <button
                              key={imgSrc}
                              type="button"
                              onClick={() => setActiveModalImage(imgSrc)}
                              className={cn(
                                "px-3 py-1 rounded-full text-[11px] font-mono tracking-wider transition-all cursor-pointer border",
                                isActive
                                  ? "border-silver-300 bg-white/10 text-white font-medium shadow-sm"
                                  : "border-white/[0.08] bg-white/[0.02] text-silver-400 hover:text-white hover:border-white/20"
                              )}
                            >
                              {getGalleryLabel(imgSrc, i)}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                <div className="pt-2 pb-4 border-y border-white/[0.08] space-y-4">
                  <div>
                    <h4 className="text-xs font-mono tracking-widest uppercase text-silver-400 mb-2">
                      Design Overview
                    </h4>
                    <p className="text-sm sm:text-base text-silver-300 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 space-y-2">
                    <h4 className="text-xs font-mono tracking-widest uppercase text-white font-medium flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-silver-300" />
                      <span>My Contribution & Role</span>
                    </h4>
                    <p className="text-sm text-silver-300 font-light leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono tracking-widest uppercase text-silver-400 mb-3">
                    Technologies & Disciplines
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <Badge key={t} variant="champagne" className="text-xs py-1 px-3">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-mono text-silver-500">
                  <span>Rhushabh Khartade &bull; UI Designer</span>
                  <button
                    onClick={() => setDetailOpen(false)}
                    className="text-silver-300 hover:text-white underline cursor-pointer"
                  >
                    Close Specification
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function TastefulPlaceholder({
  project,
  indexFormatted,
}: {
  project: Project;
  indexFormatted: string;
}) {
  return (
    <div className="relative h-full w-full flex flex-col justify-between p-6 select-none bg-gradient-to-b from-obsidian-900/90 to-obsidian-950">
      {/* Top Header of Placeholder */}
      <div className="flex items-center justify-between text-[10px] font-mono text-silver-500">
        <span className="tracking-widest uppercase">SPEC // {project.id}</span>
        <span>INDEX {indexFormatted}</span>
      </div>

      {/* Center Geometric Emblem */}
      <div className="my-auto flex flex-col items-center justify-center text-center space-y-3">
        <div className="relative flex items-center justify-center h-16 w-16 rounded-2xl border border-white/10 bg-white/[0.03] shadow-inner transition-transform duration-500 group-hover:scale-105 group-hover/media:scale-105">
          <span className="font-serif text-2xl font-light text-silver-200">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
          <div className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-silver-400 animate-pulse" />
        </div>
        <div>
          <span className="text-xs font-mono tracking-widest uppercase text-silver-300">
            {project.title}
          </span>
          <p className="text-[11px] font-mono text-silver-500 tracking-wider">
            Curated Interface System &bull; {project.year}
          </p>
        </div>
      </div>

      {/* Bottom Footer of Placeholder */}
      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-silver-600">
        <span>EDITORIAL CASE ARCHIVE</span>
        <span>ARCHITECTURAL UI</span>
      </div>
    </div>
  );
}

