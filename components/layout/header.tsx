"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X, Shield } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 bg-obsidian-950/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "py-5 sm:py-7 bg-transparent"
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Monogram Brand */}
        <Link
          href="#overview"
          className="group relative flex items-center gap-3 select-none outline-none"
        >
          <div className="relative flex items-center justify-center h-10 w-10 rounded-full border border-white/20 bg-white/[0.04] transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/[0.08] group-hover:scale-105">
            <span className="font-serif text-base font-medium tracking-tight text-silver-100 group-hover:text-white transition-colors">
              RK<span className="text-silver-500">.</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-silver-200 font-medium">
              Rhushabh
            </span>
            <span className="text-[10px] font-mono tracking-widest text-silver-500">
              Khartade
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full border border-white/[0.08] bg-obsidian-900/60 backdrop-blur-xl shadow-inner">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative px-4 py-1.5 text-xs font-mono tracking-wider text-silver-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action: Availability & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Subtle Availability Beacon */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-[11px] font-mono text-silver-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Work</span>
          </div>

          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/[0.05] text-xs font-mono tracking-wider text-silver-100 hover:text-white hover:border-white/50 hover:bg-white/[0.12] transition-all duration-300"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-silver-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/[0.04] text-silver-200 hover:text-white hover:border-white/30 transition-colors"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-white/[0.08] bg-obsidian-950/95 backdrop-blur-2xl px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-white/[0.06] text-xs font-mono text-silver-400">
                <Shield className="h-3.5 w-3.5 text-silver-400" />
                <span>UI Designer &bull; Cyber Security Student</span>
              </div>

              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-light tracking-wide text-silver-200 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for commissions</span>
                </div>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-silver-100 text-obsidian-950 text-xs font-mono font-medium tracking-wider"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

