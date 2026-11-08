"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { education, achievements, certificates } from "@/content/experience";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Trophy,
  Award,
  Sparkles,
  BookOpen,
  Terminal,
  Calendar,
  MapPin,
  CheckCircle2,
  Shield,
  Layers,
  X,
  Maximize2,
} from "lucide-react";

export function ExperienceSection() {
  const [activeCert, setActiveCert] = React.useState<string | null>(null);

  // Check if any certificate has an actual image supplied
  const validCertificates = React.useMemo(() => {
    return certificates.filter((c) => Boolean(c.image && c.image.trim() !== ""));
  }, []);

  const hasCertificates = validCertificates.length > 0;

  const getAchievementIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("winner") || cat.includes("recognition")) {
      return <Trophy className="h-4 w-4 text-silver-300" />;
    }
    if (cat.includes("leadership") || cat.includes("editorial")) {
      return <BookOpen className="h-4 w-4 text-silver-300" />;
    }
    if (cat.includes("hackathon") || cat.includes("competitive") || cat.includes("prototyping")) {
      return <Terminal className="h-4 w-4 text-silver-300" />;
    }
    if (cat.includes("ideathon") || cat.includes("innovation") || cat.includes("ideation")) {
      return <Sparkles className="h-4 w-4 text-silver-300" />;
    }
    return <Award className="h-4 w-4 text-silver-300" />;
  };

  return (
    <section
      id="experience"
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
            <span>Academic & Competitive Milestones</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extralight tracking-tight text-white leading-tight">
            EXPERIENCE & <br />
            <span className="font-normal bg-gradient-to-r from-white via-silver-200 to-silver-500 bg-clip-text text-transparent">
              ACHIEVEMENTS<span className="text-silver-600">.</span>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-silver-300 font-light italic leading-relaxed pt-1">
            &ldquo;A track record of continuous learning, leadership, and competitive design execution.&rdquo;
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-silver-500">
          <span className="h-1.5 w-1.5 rounded-full bg-silver-400 animate-pulse" />
          <span>CYBER SECURITY &bull; UI/UX CURATION</span>
        </div>
      </motion.div>

      {/* Main Content Layout: Asymmetric Dual Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-14 items-start">
        {/* Left Column: Education & Academic Anchor (Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
        >
          <div className="text-xs font-mono tracking-[0.24em] uppercase text-silver-500 flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-silver-400" />
            <span>Academic Foundation</span>
          </div>

          {/* Education Showcase Card */}
          <div className="group relative rounded-2xl border border-white/[0.08] bg-obsidian-900/60 backdrop-blur-xl p-6 sm:p-8 transition-all duration-500 hover:border-silver-400/30 hover:bg-obsidian-850/80 shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Ambient Sheen */}
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-silver-400/[0.04] blur-3xl group-hover:bg-silver-300/[0.08] transition-all duration-700 pointer-events-none"
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

            <div className="space-y-6">
              {/* Header Badges */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-silver-300">
                  {education.status || "Undergraduate Candidate"}
                </span>

                <div className="flex items-center gap-1.5 text-silver-400">
                  <Calendar className="h-3 w-3 text-silver-500" />
                  <span>{education.period}</span>
                </div>
              </div>

              {/* Title & Degree */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                  {education.degree}
                </h3>
                <p className="text-sm font-mono text-silver-300">
                  {education.institution}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-mono text-silver-500">
                  <MapPin className="h-3 w-3 text-silver-600" />
                  <span>{education.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-silver-300/80 font-light leading-relaxed pt-2 border-t border-white/[0.06]">
                {education.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-silver-500">
                  Academic Focus & Synergies
                </span>
                <ul className="space-y-2 text-xs text-silver-300/90 font-light">
                  {education.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="h-3.5 w-3.5 text-silver-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Pill */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-silver-500">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-silver-400" />
                  <span>Cyber Security Track</span>
                </span>
                <span className="text-silver-400">JDCOET</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Achievements & Leadership Timeline (Span 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-mono tracking-[0.24em] uppercase text-silver-500 flex items-center gap-2">
            <Trophy className="h-4 w-4 text-silver-400" />
            <span>Honors, Leadership & Sprints</span>
          </div>

          <div className="space-y-6">
            {achievements.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.1,
                }}
                className="group relative rounded-2xl border border-white/[0.08] bg-obsidian-900/60 backdrop-blur-xl p-6 sm:p-8 transition-all duration-500 hover:border-silver-400/30 hover:bg-obsidian-850/80 shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                {/* Subtle Ambient Accent */}
                <div
                  aria-hidden="true"
                  className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-silver-400/[0.03] blur-3xl group-hover:bg-silver-300/[0.06] transition-all duration-700 pointer-events-none"
                />

                <div className="relative z-10 space-y-5">
                  {/* Card Header: Index, Category & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06] text-xs font-mono">
                    <div className="flex items-center gap-2.5">
                      <span className="text-silver-300 font-semibold tracking-wider">
                        {item.index}
                      </span>
                      <span className="text-silver-700">&bull;</span>
                      <span className="tracking-widest uppercase text-[11px] text-silver-400">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <Badge
                          variant="champagne"
                          className="text-[11px] py-0.5 px-2.5 border-white/20 text-silver-200 bg-white/[0.05]"
                        >
                          {item.badge}
                        </Badge>
                      )}
                      {item.period && (
                        <span className="text-silver-500 text-[11px]">
                          {item.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white group-hover:text-silver-100 transition-colors">
                        {item.title}
                      </h3>
                      <div className="p-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-silver-400 group-hover:border-white/20 group-hover:text-white transition-colors shrink-0">
                        {getAchievementIcon(item.category)}
                      </div>
                    </div>

                    {item.organization && (
                      <p className="text-xs sm:text-sm font-mono text-silver-400">
                        {item.organization}
                        {item.role && (
                          <span className="text-silver-600"> &bull; {item.role}</span>
                        )}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-silver-300/80 font-light leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-silver-500 block">
                        Key Responsibilities & Impact
                      </span>
                      <ul className="space-y-1.5 text-xs text-silver-300/90 font-light">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-silver-500 shrink-0 mt-0.5">&bull;</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Future-Ready Certificate Gallery (Gracefully hidden until certificate images are added) */}
      {hasCertificates && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-14 border-t border-white/[0.08] space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.24em] uppercase text-silver-400">
                <Award className="h-3.5 w-3.5 text-silver-400" />
                <span>Verified Credentials</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mt-1">
                Certificates & Accreditations
              </h3>
            </div>
            <span className="text-xs font-mono text-silver-500">
              {validCertificates.length.toString().padStart(2, "0")} CREDENTIALS ARCHIVED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {validCertificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => cert.image && setActiveCert(cert.image)}
                className="group relative rounded-xl border border-white/[0.08] bg-obsidian-900/60 p-5 cursor-pointer hover:border-silver-400/30 transition-all duration-300"
              >
                {cert.image && (
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-obsidian-950 mb-4 border border-white/[0.06]">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-obsidian-950/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="p-2 rounded-full bg-obsidian-900/90 border border-white/20 text-white">
                        <Maximize2 className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                )}
                <h4 className="text-sm font-medium text-white group-hover:text-silver-200 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-xs font-mono text-silver-400 mt-1">
                  {cert.issuer} {cert.date && `• ${cert.date}`}
                </p>
              </div>
            ))}
          </div>

          {/* Certificate Zoom Modal */}
          <AnimatePresence>
            {activeCert && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCert(null)}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/85 backdrop-blur-xl"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-4xl max-h-[90vh] w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 bg-obsidian-900"
                >
                  <button
                    onClick={() => setActiveCert(null)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-obsidian-900/80 border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <Image
                    src={activeCert}
                    alt="Certificate Preview"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

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
          <span>Continuous refinement in cybersecurity resilience & human-computer interaction.</span>
        </div>

        <div className="flex items-center gap-2 text-silver-400">
          <span>CURATED TIMELINE</span>
          <span className="text-silver-600">&bull;</span>
          <span>RHUSHABH KHARTADE</span>
        </div>
      </motion.div>
    </section>
  );
}
