export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-gold/10 py-8">
      <div className="container mx-auto px-6 text-center">
        {/* Brand */}
        <h3 className="heading-display text-xl font-semibold text-cream">
          Al-Kabeer Jewelers
        </h3>
        <p className="font-elegant mt-2 text-sm text-cream/50">
          Pure Gold. Timeless Beauty.
        </p>

        {/* Divider */}
        <div className="mx-auto my-6 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-gold/20" />
          <div className="h-1 w-1 rotate-45 bg-gold/40" />
          <div className="h-px w-8 bg-gold/20" />
        </div>

        {/* Copyright */}
        <p className="font-elegant text-xs text-cream/40">
          © {currentYear} Al-Kabeer Jewelers. All rights reserved.
        </p>
        <p className="font-elegant mt-2 text-xs text-cream/30">
          Images shown are for illustration. Actual products may vary.
        </p>
      </div>
    </footer>
  );
};
