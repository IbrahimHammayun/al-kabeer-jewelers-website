import goldRing from "@/assets/gold-ring.jpg";
import goldNecklace from "@/assets/gold-necklace.jpg";
import goldBangles from "@/assets/gold-bangles.jpg";
import bridalJewelry from "@/assets/bridal-jewelry.jpg";
import { WhatsAppButton } from "./WhatsAppButton";

const collections = [
  {
    id: 1,
    name: "Gold Rings",
    description: "Beautiful rings for every occasion",
    image: goldRing,
    message: "Hello, I am interested in Gold Rings from Al-Kabeer Jewelers.",
  },
  {
    id: 2,
    name: "Necklaces",
    description: "Elegant necklaces and chains",
    image: goldNecklace,
    message: "Hello, I am interested in Necklaces from Al-Kabeer Jewelers.",
  },
  {
    id: 3,
    name: "Bangles",
    description: "Traditional and modern bangles",
    image: goldBangles,
    message: "Hello, I am interested in Bangles from Al-Kabeer Jewelers.",
  },
  {
    id: 4,
    name: "Bridal Jewelry",
    description: "Complete bridal sets for your special day",
    image: bridalJewelry,
    message: "Hello, I am interested in Bridal Jewelry from Al-Kabeer Jewelers.",
  },
];

export const CollectionSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="font-elegant text-sm tracking-[0.2em] text-gold">
            EXPLORE
          </span>
          <h2 className="heading-display mt-2 text-3xl font-semibold text-foreground md:text-4xl">
            Our Collection
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gold/50" />
            <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <p className="font-elegant mx-auto mt-6 max-w-lg text-muted-foreground">
            Each piece is made with pure gold and careful craftsmanship. 
            Click to order on WhatsApp.
          </p>
        </div>

        {/* Collection Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-sm bg-card shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="heading-display text-lg font-semibold text-foreground">
                  {item.name}
                </h3>
                <p className="font-elegant mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-4">
                  <WhatsAppButton variant="card" message={item.message} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
