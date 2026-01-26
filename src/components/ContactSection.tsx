import { Phone, MapPin, Clock } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export const ContactSection = () => {
  return (
    <section className="bg-charcoal py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-elegant text-sm tracking-[0.2em] text-gold-light">
            GET IN TOUCH
          </span>
          <h2 className="heading-display mt-2 text-3xl font-semibold text-cream md:text-4xl">
            Contact Us
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gold/50" />
            <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <div className="h-px w-8 bg-gold/50" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Phone */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                <Phone className="h-6 w-6 text-gold" />
              </div>
              <h3 className="heading-display text-lg font-medium text-cream">
                Call Us
              </h3>
              <p className="font-elegant mt-2 text-cream/70">
                +XX XXX XXXXXXX
              </p>
              <p className="font-elegant text-sm text-cream/50">
                (Your number here)
              </p>
            </div>

            {/* Address */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                <MapPin className="h-6 w-6 text-gold" />
              </div>
              <h3 className="heading-display text-lg font-medium text-cream">
                Visit Us
              </h3>
              <p className="font-elegant mt-2 text-cream/70">
                Your Shop Address
              </p>
              <p className="font-elegant text-sm text-cream/50">
                City, Country
              </p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                <Clock className="h-6 w-6 text-gold" />
              </div>
              <h3 className="heading-display text-lg font-medium text-cream">
                Business Hours
              </h3>
              <p className="font-elegant mt-2 text-cream/70">
                Mon - Sat: 10AM - 9PM
              </p>
              <p className="font-elegant text-sm text-cream/50">
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="font-elegant mb-6 text-lg text-cream/80">
              Have questions? We are happy to help!
            </p>
            <WhatsAppButton message="Hello, I have a question about Al-Kabeer Jewelers." />
          </div>
        </div>
      </div>
    </section>
  );
};
