import heroImage from "@/assets/hero-jewelry.jpg";
import { WhatsAppButton } from "./WhatsAppButton";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury gold jewellery"
          className="h-full w-full object-cover object-[center_30%] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/90 md:from-charcoal/70 md:via-charcoal/50 md:to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pt-16 text-center">
        {/* Brand Name */}
        <div className="fade-in mb-4">
          <span className="font-elegant text-sm tracking-[0.3em] text-gold-light md:text-base">
            PREMIUM GOLD JEWELLERY
          </span>
        </div>
        
        <h1 className="heading-display mb-6 text-3xl font-bold tracking-wide text-cream sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="gold-text-gradient">Jadeed Al Kabeer</span>
          <br />
          <span className="text-cream">Jewellers</span>
        </h1>

        {/* Decorative Line */}
        <div className="mb-6 flex items-center gap-4">
          <div className="h-px w-12 bg-gold-light/50 md:w-20" />
          <div className="h-2 w-2 rotate-45 border border-gold-light/50" />
          <div className="h-px w-12 bg-gold-light/50 md:w-20" />
        </div>

        {/* Tagline */}
        <p className="font-elegant mb-10 max-w-md text-xl tracking-wide text-cream/90 md:text-2xl">
          Pure Gold. Timeless Beauty.
        </p>

        {/* CTA Button */}
        <WhatsAppButton className="fade-in shadow-2xl" />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2 text-cream/60">
            <span className="font-elegant text-xs tracking-widest">SCROLL</span>
            <div className="h-8 w-px bg-gradient-to-b from-gold/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
