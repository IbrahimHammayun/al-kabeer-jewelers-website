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
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <OwnerSection />
      <ContactSection />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />
    </main>
  );
};

export default Index;
