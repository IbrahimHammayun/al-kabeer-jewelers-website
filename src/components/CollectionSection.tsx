import { useState } from "react";
import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { WhatsAppButton } from "./WhatsAppButton";

// Import all product images
import necklaceOpalSet from "@/assets/necklace-opal-set.jpg";
import necklaceHeartSet from "@/assets/necklace-heart-set.jpg";
import necklaceEmeraldSet from "@/assets/necklace-emerald-set.jpg";
import braceletsGoldBox from "@/assets/bracelets-gold-box.jpg";
import bangleWideGold from "@/assets/bangle-wide-gold.jpg";
import bridalHandChain from "@/assets/bridal-hand-chain.jpg";
import ringRuby from "@/assets/ring-ruby.jpg";
import ringMarquise from "@/assets/ring-marquise.jpg";

type Category = "necklaces" | "bangles" | "bridal" | "rings";
type RingFilter = "all" | "ladies" | "gents" | "children";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: Category;
  ringType?: RingFilter;
}

const products: Product[] = [
  // Necklaces
  { id: 1, name: "Opal Pendant Set", description: "Gold necklace with opal stones", image: necklaceOpalSet, category: "necklaces" },
  { id: 2, name: "Heart Design Set", description: "Romantic heart necklace with earrings", image: necklaceHeartSet, category: "necklaces" },
  { id: 3, name: "Emerald Drop Set", description: "Elegant emerald pendant set", image: necklaceEmeraldSet, category: "necklaces" },
  
  // Bangles
  { id: 4, name: "Designer Bracelets", description: "Premium gold bracelet collection", image: braceletsGoldBox, category: "bangles" },
  { id: 5, name: "Wide Gold Bangle", description: "Traditional carved bangle", image: bangleWideGold, category: "bangles" },
  
  // Bridal Sets
  { id: 6, name: "Bridal Hand Chain", description: "Complete hand jewellery set", image: bridalHandChain, category: "bridal" },
  { id: 7, name: "Emerald Bridal Set", description: "Necklace set with emeralds", image: necklaceEmeraldSet, category: "bridal" },
  
  // Rings - Ladies
  { id: 8, name: "Ruby Statement Ring", description: "Luxurious ruby gold ring", image: ringRuby, category: "rings", ringType: "ladies" },
  { id: 9, name: "Marquise Diamond Ring", description: "Elegant vintage style ring", image: ringMarquise, category: "rings", ringType: "ladies" },
];

const categories: { id: Category; label: string }[] = [
  { id: "necklaces", label: "Necklaces" },
  { id: "bangles", label: "Bangles" },
  { id: "bridal", label: "Bridal Sets" },
  { id: "rings", label: "Rings" },
];

const ringFilters: { id: RingFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ladies", label: "Ladies" },
  { id: "gents", label: "Gents" },
  { id: "children", label: "Children" },
];

export const CollectionSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("necklaces");
  const [ringFilter, setRingFilter] = useState<RingFilter>("all");
  const { ref: sectionRef, animationClass } = useScrollAnimation<HTMLElement>();
  const [cardsRef, cardsVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  const filteredProducts = products.filter((product) => {
    if (product.category !== activeCategory) return false;
    if (activeCategory === "rings" && ringFilter !== "all") {
      return product.ringType === ringFilter;
    }
    return true;
  });

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setRingFilter("all");
  };

  return (
    <section ref={sectionRef} className={`bg-background py-16 md:py-24 ${animationClass}`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10 text-center md:mb-14">
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

        {/* Category Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex justify-center gap-2 min-w-max px-4 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`relative px-5 py-2.5 font-elegant text-sm tracking-wider transition-all duration-300 md:px-6 md:text-base ${
                  activeCategory === category.id
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.label}
                {activeCategory === category.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Ring Sub-Filters */}
        {activeCategory === "rings" && (
          <div className="mb-8 flex justify-center gap-3">
            {ringFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setRingFilter(filter.id)}
                className={`rounded-full px-4 py-1.5 font-elegant text-sm transition-all duration-300 ${
                  ringFilter === filter.id
                    ? "bg-gold text-primary-foreground"
                    : "border border-border bg-transparent text-muted-foreground hover:border-gold hover:text-gold"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid */}
        <div ref={cardsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((item, index) => (
            <div
              key={item.id}
              className={`group overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-500 hover:shadow-xl ${
                cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: getStaggerDelay(index) }}
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
                  <WhatsAppButton 
                    variant="card" 
                    message={`Hello, I am interested in ${item.name} from Al-Kabeer Jewellers.`} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-12 text-center">
            <p className="font-elegant text-lg text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
