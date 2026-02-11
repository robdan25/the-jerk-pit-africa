import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MenuStrip from "@/components/MenuStrip";
import ThePit from "@/components/ThePit";
import RootsSection from "@/components/RootsSection";
import MuseumWall from "@/components/MuseumWall";
import LagosLocation from "@/components/LagosLocation";
import SocialProof from "@/components/SocialProof";
import ExpansionSection from "@/components/ExpansionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background">
      <Hero />
      <HowItWorks />
      <MenuStrip />
      <ThePit />
      <RootsSection />
      <MuseumWall />
      <LagosLocation />
      <SocialProof />
      <ExpansionSection />
      <Footer />
    </main>
  );
};

export default Index;
