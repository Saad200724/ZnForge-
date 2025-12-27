import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { AIFeature } from "@/components/landing/AIFeature";
import { Values } from "@/components/landing/Values";
import { Portfolio } from "@/components/landing/Portfolio";
import { Services } from "@/components/landing/Services";
import { Pricing } from "@/components/landing/Pricing";
import { Comparison } from "@/components/landing/Comparison";
import { FAQ } from "@/components/landing/FAQ";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AIFeature />
      <Portfolio />
      <Values />
      <Services />
      <Pricing />
      <Comparison />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;