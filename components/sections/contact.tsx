"use client";

import * as React from "react";
import { motion } from "motion/react";
import { siteConfig } from "@/content/site-config";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  ArrowUpRight,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { LinkedIn, Github } from "@/components/ui/icons";

export function ContactSection() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(siteConfig.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactChannels = [
    {
      name: "Direct Electronic Mail",
      value: siteConfig.contactEmail,
      href: `mailto:${siteConfig.contactEmail}`,
      icon: <Mail className="h-5 w-5 text-silver-300" />,
      actionLabel: "Send Email",
      isEmail: true,
      subtext: "Typical response within 24 hours",
    },
    {
      name: "LinkedIn Professional Network",
      value: "rhushabh-khartade",
      href: siteConfig.socials.find((s) => s.platform === "LinkedIn")?.href || "https://www.linkedin.com/in/rhushabh-khartade-980545384",
      icon: <LinkedIn className="h-5 w-5 text-silver-300" />,
      actionLabel: "Connect Profile",
      isEmail: false,
      subtext: "Professional trajectory & recommendations",
    },
    {
      name: "GitHub Code & Research",
      value: "@Rhushabhkhartade",
      href: siteConfig.socials.find((s) => s.platform === "GitHub")?.href || "https://github.com/Rhushabhkhartade",
      icon: <Github className="h-5 w-5 text-silver-300" />,
      actionLabel: "Explore Repositories",
      isEmail: false,
      subtext: "Open-source prototypes & code repositories",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto w-full select-none"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 border-b border-white/[0.08]"
      >
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.28em] uppercase text-silver-400">
            <MessageSquare className="h-3.5 w-3.5 text-silver-400" />
            <span>Index / 03 &bull; Initiate Dialogue</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extralight tracking-tight text-white leading-[1.08]">
            LET&apos;S CREATE <br />
            <span className="font-normal bg-gradient-to-r from-white via-silver-200 to-silver-500 bg-clip-text text-transparent">
              SOMETHING MEANINGFUL<span className="text-silver-600">.</span>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-silver-300/90 font-light leading-relaxed pt-1 max-w-2xl">
            {siteConfig.contactSupportingText}
          </p>
        </div>

        <Badge variant="status" dot>
          {siteConfig.availability.label}
        </Badge>
      </motion.div>

      {/* Main Outreach Showcase Card */}
      <div className="py-16 sm:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Prominent "Get in Touch" Hero Invitation (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative rounded-3xl border border-white/[0.1] bg-gradient-to-b from-obsidian-900/90 to-obsidian-950/90 backdrop-blur-2xl p-8 sm:p-12 lg:p-14 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between space-y-10"
          >
            {/* Ambient Background Grid */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Ambient Silver Backlight */}
            <div
              aria-hidden="true"
              className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-silver-400/[0.08] blur-3xl pointer-events-none"
            />

            {/* Top Tag & Monogram Motif */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-silver-500">
              <span className="tracking-[0.24em] uppercase text-silver-400">
                Direct Inquiry
              </span>
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-silver-400" />
                <span>STUDIO DISPATCH // 2026</span>
              </div>
            </div>

            {/* Central Callout */}
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-silver-400">
                Primary Contact Point
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-tight text-white leading-tight break-all">
                {siteConfig.contactEmail}
              </h3>
              <p className="text-sm sm:text-base text-silver-300 font-light leading-relaxed max-w-lg pt-1">
                Have a new project, design system audit, or collaborative opportunity in mind? Feel free to write directly or initiate a connection on LinkedIn.
              </p>
            </div>

            {/* Dual CTAs: Prominent Get In Touch & Quick Copy */}
            <div className="relative z-10 flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-obsidian-950 text-xs font-mono tracking-wider font-medium transition-all duration-300 hover:bg-silver-200 shadow-[0_0_35px_rgba(255,255,255,0.25)] select-none"
              >
                <span>Get in Touch</span>
                <Send className="h-4 w-4 text-obsidian-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 bg-white/[0.04] text-xs font-mono tracking-wider text-silver-200 hover:text-white hover:border-white/40 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer select-none"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-300">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-silver-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Channel Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {contactChannels.map((channel, idx) => (
              <motion.a
                key={channel.name}
                href={channel.href}
                target={channel.isEmail ? undefined : "_blank"}
                rel={channel.isEmail ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex-1 flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-obsidian-900/60 p-6 sm:p-7 backdrop-blur-xl transition-all duration-500 hover:border-white/25 hover:bg-obsidian-850/80 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              >
                {/* Header inside channel card */}
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/[0.04] text-silver-300 group-hover:scale-105 group-hover:border-white/30 group-hover:text-white transition-all duration-300">
                      {channel.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono tracking-wider uppercase text-silver-400 block">
                        {channel.name}
                      </span>
                      <span className="text-sm font-light text-white tracking-tight">
                        {channel.value}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center h-7 w-7 rounded-full border border-white/10 group-hover:border-white/30 group-hover:bg-white/[0.08] transition-colors">
                    <ArrowUpRight className="h-3.5 w-3.5 text-silver-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Subtext info */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-silver-500">
                  <span>{channel.subtext}</span>
                  <span className="text-silver-400 group-hover:text-silver-200 transition-colors">
                    {channel.actionLabel} &rarr;
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
