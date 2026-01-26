import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CollectionSection } from "@/components/CollectionSection";
import { OwnerSection } from "@/components/OwnerSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <OwnerSection />
      <ContactSection />
      <Footer />
      
      {/* Floating WhatsApp Button - Bottom Left */}
      <WhatsAppButton variant="floating" />
    </main>
  );
};

export default Index;
