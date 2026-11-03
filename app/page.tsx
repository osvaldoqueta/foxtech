import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBanner from '@/components/StatsBanner';
import ServicesGrid from '@/components/ServicesGrid';
import CtaBanner from '@/components/CtaBanner';
import PowerBISection from '@/components/PowerBISection';
import WorksSection from '@/components/WorksSection';
import AboutSection from '@/components/AboutSection';
import PricingSection from '@/components/PricingSection';
import TimelineSection from '@/components/TimelineSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#080B12] selection:bg-[#FF6800]/30 selection:text-white">
      {/* 1. FOXTECH Floating Glassmorphic Navigation Bar */}
      <Navbar />

      {/* Main Page Orchestration (Reproducing FOXTECH Reference Composition + Preserved Interactive Ecosystem) */}
      <main className="flex-1 flex flex-col">
        {/* 2. Hero Section: Rocket Tag, FOXTECH Display, Subtitle, CTA Buttons, Executive Cutout Portrait & Fox Watermark */}
        <Hero />

        {/* 3. Authority Indicators Panel: 16+, 100%, +500, Suporte 24/7 */}
        <StatsBanner />

        {/* 4. Solutions & Services Section: 4 FOXTECH Cards */}
        <ServicesGrid />

        {/* 5. Conversion Call-to-Action Banner with FOXTECH Emblem */}
        <CtaBanner />

        {/* 6. Interactive Power BI Live Station & DAX Inspector */}
        <PowerBISection />

        {/* 7. Selected Works & Production Ecosystem */}
        <WorksSection />

        {/* 8. About FOXTECH & Technical Capabilities */}
        <AboutSection />

        {/* 9. Corporate Engagement Plans & Investment */}
        <PricingSection />

        {/* 10. Executive Track Record & Credentials */}
        <TimelineSection />
      </main>

      {/* 11. Direct Contact Dispatch & Corporate FOXTECH Footer */}
      <Footer />
    </div>
  );
}
