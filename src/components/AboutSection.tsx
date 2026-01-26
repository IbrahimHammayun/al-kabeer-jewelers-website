import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}

const StatItem = ({ value, suffix, label, isVisible }: StatItemProps) => {
  const count = useCountUp({ end: value, isVisible, duration: 2000 });

  return (
    <div className="text-center">
      <div className="heading-display text-3xl font-bold text-gold md:text-4xl">
        {count}{suffix}
      </div>
      <div className="font-elegant mt-1 text-sm tracking-wide text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

export const AboutSection = () => {
  const [statsRef, statsVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  const { ref: sectionRef, animationClass } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} className={`bg-cream-dark py-16 md:py-24 ${animationClass}`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-elegant text-sm tracking-[0.2em] text-gold">
            OUR STORY
          </span>
          <h2 className="heading-display mt-2 text-3xl font-semibold text-charcoal md:text-4xl">
            About Al-Kabeer
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gold/50" />
            <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <div className="h-px w-8 bg-gold/50" />
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-elegant text-lg leading-relaxed text-charcoal-light md:text-xl">
            Al-Kabeer Jewellers is a trusted name in gold jewellery. For many years, 
            we have been making beautiful gold pieces for our customers. 
            Every piece is made with care and love.
          </p>
          
          <p className="font-elegant mt-6 text-lg leading-relaxed text-charcoal-light md:text-xl">
            We believe in quality and honesty. Our gold is pure and our designs 
            are elegant. From wedding jewellery to everyday pieces, we have 
            something special for everyone.
          </p>

          {/* Trust Badges with Counting Animation */}
          <div 
            ref={statsRef}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            <StatItem 
              value={10} 
              suffix="+" 
              label="Years of Trust" 
              isVisible={statsVisible} 
            />
            <div className="h-12 w-px bg-border" />
            <StatItem 
              value={1000} 
              suffix="+" 
              label="Happy Customers" 
              isVisible={statsVisible} 
            />
            <div className="h-12 w-px bg-border" />
            <StatItem 
              value={100} 
              suffix="%" 
              label="Pure Gold" 
              isVisible={statsVisible} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
