import ownerPortrait from "@/assets/owner-portrait.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const OwnerSection = () => {
  const { ref, animationClass } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className={`bg-cream-dark py-16 md:py-24 ${animationClass}`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-elegant text-sm tracking-[0.2em] text-gold">
            MEET THE OWNER
          </span>
          <h2 className="heading-display mt-2 text-3xl font-semibold text-charcoal md:text-4xl">
            A Trusted Name
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gold/50" />
            <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <div className="h-px w-8 bg-gold/50" />
          </div>
        </div>

        {/* Owner Card */}
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:gap-8 md:text-left">
            {/* Owner Image */}
            <div className="mb-6 flex-shrink-0 md:mb-0">
              <div className="relative">
                <div className="absolute -inset-2 rounded-xl border border-gold/30" />
                <img
                  src={ownerPortrait}
                  alt="Nabeel Maqbool - Owner of Al-Kabeer Jewellers"
                  className="h-48 w-48 rounded-xl object-cover shadow-lg md:h-56 md:w-56"
                />
              </div>
            </div>

            {/* Owner Info */}
            <div className="flex-1">
              <h3 className="heading-display text-2xl font-semibold text-charcoal">
                Nabeel Maqbool
              </h3>
              <p className="font-elegant mt-1 text-gold">
                Owner – Jadeed Al Kabeer Jewellers
              </p>
              <p className="font-elegant mt-2 text-sm text-charcoal-light">
                🕐 Available: 1st Saturday 9:30 AM
              </p>
              
              <div className="my-4 h-px w-16 bg-gold/30 md:mx-0 mx-auto" />
              
              <p className="font-elegant text-lg leading-relaxed text-charcoal-light">
                With a passion for fine jewellery and a commitment to customer satisfaction, 
                Mr. Nabeel Maqbool has built Jadeed Al Kabeer Jewellers into a trusted destination 
                for premium gold jewellery. His vision is simple: provide the best quality 
                gold jewellery with honest service.
              </p>
              
              <p className="font-elegant mt-4 italic text-muted-foreground">
                "Every customer is like family to us. We treat your trust with great respect."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
