import { Navigation, Header } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { WhySection } from "@/components/WhySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BetaTestingSection } from "@/components/BetaTestingSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WhySection />
        <TestimonialsSection />
        <BetaTestingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
