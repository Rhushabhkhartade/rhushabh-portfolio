import { AmbientGlow } from "@/components/ui/ambient-glow";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { WorksSection } from "@/components/sections/works";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#060608] text-[#f5f5f7] overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Ambient Lighting Background */}
      <AmbientGlow />

      {/* Floating Navigation Header */}
      <Header />

      {/* Main Content Flow */}
      <main className="relative">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Selected Works */}
        <WorksSection />

        {/* 3. About Me & 4. Design Philosophy */}
        <AboutSection />

        {/* 5. Skills & Expertise */}
        <SkillsSection />

        {/* 6. Experience & Achievements */}
        <ExperienceSection />

        {/* 7. Contact */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
