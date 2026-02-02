import { Phone, MapPin, Clock } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const ContactSection = () => {
  const { ref: sectionRef, animationClass } = useScrollAnimation<HTMLElement>();
  const [cardsRef, cardsVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  const contactItems = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "0320-0498546",
      secondary: "WhatsApp Available",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "New Shad Bagh, Shop No. 4",
      secondary: "Near Qum Qum Cosmetic, Market Shad Bagh Center",
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Mon - Sat: 10AM - 9PM",
      secondary: "Owner: 1st Saturday 9:30 AM",
    },
  ];

  return (
    <section ref={sectionRef} className={`bg-charcoal py-16 md:py-24 ${animationClass}`}>
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
          <div ref={cardsRef} className="grid gap-8 md:grid-cols-3">
            {contactItems.map((item, index) => (
              <div 
                key={item.title}
                className={`text-center transition-all duration-500 ${
                  cardsVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: getStaggerDelay(index) }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <item.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="heading-display text-lg font-medium text-cream">
                  {item.title}
                </h3>
                <p className="font-elegant mt-2 text-cream/70">
                  {item.primary}
                </p>
                <p className="font-elegant text-sm text-cream/50">
                  {item.secondary}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="font-elegant mb-6 text-lg text-cream/80">
              Have questions? We are happy to help!
            </p>
            <WhatsAppButton message="Hello, I have a question about Al-Kabeer Jewellers." />
          </div>
        </div>
      </div>
    </section>
  );
};
