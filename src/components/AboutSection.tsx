export const AboutSection = () => {
  return (
    <section className="bg-cream-dark py-16 md:py-24">
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
            Al-Kabeer Jewelers is a trusted name in gold jewelry. For many years, 
            we have been making beautiful gold pieces for our customers. 
            Every piece is made with care and love.
          </p>
          
          <p className="font-elegant mt-6 text-lg leading-relaxed text-charcoal-light md:text-xl">
            We believe in quality and honesty. Our gold is pure and our designs 
            are elegant. From wedding jewelry to everyday pieces, we have 
            something special for everyone.
          </p>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="heading-display text-3xl font-bold text-gold md:text-4xl">
                10+
              </div>
              <div className="font-elegant mt-1 text-sm tracking-wide text-muted-foreground">
                Years of Trust
              </div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="heading-display text-3xl font-bold text-gold md:text-4xl">
                1000+
              </div>
              <div className="font-elegant mt-1 text-sm tracking-wide text-muted-foreground">
                Happy Customers
              </div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="heading-display text-3xl font-bold text-gold md:text-4xl">
                100%
              </div>
              <div className="font-elegant mt-1 text-sm tracking-wide text-muted-foreground">
                Pure Gold
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
