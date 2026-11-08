"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { ArrowUp, ArrowUpRight, Shield } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/icons";

const emptySubscribe = () => () => {};

export function Footer() {
  const currentYear = React.useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full border-t border-white/[0.08] bg-obsidian-950/90 backdrop-blur-2xl py-16 sm:py-20 select-none">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-14">
        {/* Top Grid: Brand, Navigation, Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-full border border-white/20 bg-white/[0.04]">
                <span className="font-serif text-base font-medium tracking-tight text-white">
                  RK<span className="text-silver-500">.</span>
                </span>
              </div>
              <div>
                <h3 className="text-sm font-mono tracking-wider uppercase text-white font-medium">
                  {siteConfig.fullName}
                </h3>
                <p className="text-xs font-mono text-silver-400">
                  {siteConfig.identity}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-silver-400 font-light leading-relaxed max-w-sm pt-1">
              Merging visual creativity with an understanding of digital systems. Dedicated to crafting interfaces that are clean, meaningful, and resilient.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-silver-500">
              <Shield className="h-3.5 w-3.5 text-silver-400" />
              <span>Cyber Security &bull; Threat-Aware UI</span>
            </div>
          </div>

          {/* Quick Navigation Links (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono tracking-[0.24em] uppercase text-silver-500">
              Navigation
            </span>

            <nav className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-mono">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-silver-300 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Profiles & Presence (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono tracking-[0.24em] uppercase text-silver-500">
              External Portals
            </span>

            <div className="flex flex-col space-y-2.5 text-xs font-mono">
              <a
                href={siteConfig.socials.find((s) => s.platform === "LinkedIn")?.href || "https://www.linkedin.com/in/rhushabh-khartade-980545384"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between py-1 text-silver-300 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <LinkedInIcon className="h-3.5 w-3.5 text-silver-400 group-hover:text-white transition-colors" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="h-3 w-3 text-silver-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={siteConfig.socials.find((s) => s.platform === "GitHub")?.href || "https://github.com/Rhushabhkhartade"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between py-1 text-silver-300 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <GitHubIcon className="h-3.5 w-3.5 text-silver-400 group-hover:text-white transition-colors" />
                  <span>GitHub Repository</span>
                </div>
                <ArrowUpRight className="h-3 w-3 text-silver-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Signature, Back to Top */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-silver-500">
          <div className="flex items-center gap-3">
            <span>&copy; {currentYear} {siteConfig.fullName}.</span>
            <span className="hidden sm:inline text-silver-700">&bull;</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>

          <div className="text-silver-400 tracking-wider">
            Designed &amp; Built with precision.
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-silver-300 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer select-none"
          >
            <span className="text-[11px] uppercase tracking-wider">Back to Top</span>
            <div className="flex items-center justify-center h-5 w-5 rounded-full bg-white/[0.06] group-hover:bg-white/[0.15] transition-colors">
              <ArrowUp className="h-3 w-3 text-silver-400 group-hover:text-white group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

