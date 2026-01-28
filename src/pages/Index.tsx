import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ModulesSection from "@/components/landing/ModulesSection";
import AudienceSection from "@/components/landing/AudienceSection";
import DifferentialsSection from "@/components/landing/DifferentialsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <ModulesSection />
        <AudienceSection />
        <DifferentialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
