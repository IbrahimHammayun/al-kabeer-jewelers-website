import { Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "03200498546";

  return (
    <footer className="bg-charcoal border-t border-gold/10 py-8">
      <div className="container mx-auto px-6 text-center">
        {/* Brand */}
        <h3 className="heading-display text-xl font-semibold text-cream">
          Jadeed Al Kabeer Jewellers
        </h3>
        <p className="font-elegant mt-2 text-sm text-cream/50">
          Pure Gold. Timeless Beauty.
        </p>

        {/* Address */}
        <p className="font-elegant mt-4 text-sm text-cream/70">
          New Shad Bagh, near Qum Qum Cosmetic, Market Shad Bagh Center, Shop No. 4
        </p>

        {/* Call Now Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-elegant text-sm font-medium tracking-wider text-primary-foreground transition-all duration-300 gold-gradient hover:opacity-90 hover:shadow-lg"
        >
          <Phone className="h-4 w-4" />
          Call Now: {phoneNumber}
        </a>

        {/* Divider */}
        <div className="mx-auto my-6 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-gold/20" />
          <div className="h-1 w-1 rotate-45 bg-gold/40" />
          <div className="h-px w-8 bg-gold/20" />
        </div>

        {/* Copyright */}
        <p className="font-elegant text-xs text-cream/40">
          © {currentYear} Jadeed Al Kabeer Jewellers. All rights reserved.
        </p>
        <p className="font-elegant mt-2 text-xs text-cream/30">
          Images shown are for illustration. Actual products may vary.
        </p>
      </div>
    </footer>
  );
};
