import { useState } from "react";
import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { WhatsAppButton } from "./WhatsAppButton";

// Import all product images
import goldRing from "@/assets/gold-ring.jpg";
import goldNecklace from "@/assets/gold-necklace.jpg";
import goldBangles from "@/assets/gold-bangles.jpg";
import bridalJewelry from "@/assets/bridal-jewelry.jpg";
import necklace1 from "@/assets/necklace-1.jpg";
import necklace2 from "@/assets/necklace-2.jpg";
import bangles1 from "@/assets/bangles-1.jpg";
import bangles2 from "@/assets/bangles-2.jpg";
import bridal1 from "@/assets/bridal-1.jpg";
import bridal2 from "@/assets/bridal-2.jpg";
import ringLadies1 from "@/assets/ring-ladies-1.jpg";
import ringGents1 from "@/assets/ring-gents-1.jpg";
import ringChildren1 from "@/assets/ring-children-1.jpg";

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
  { id: 1, name: "Classic Pendant", description: "Elegant gold pendant necklace", image: necklace1, category: "necklaces" },
  { id: 2, name: "Royal Choker", description: "Traditional bridal choker", image: necklace2, category: "necklaces" },
  { id: 3, name: "Layered Chain", description: "Modern layered gold chain", image: goldNecklace, category: "necklaces" },
  
  // Bangles
  { id: 4, name: "Traditional Set", description: "Classic gold bangle set", image: bangles1, category: "bangles" },
  { id: 5, name: "Diamond Accent", description: "Modern bangles with stones", image: bangles2, category: "bangles" },
  { id: 6, name: "Daily Wear", description: "Simple elegant bangles", image: goldBangles, category: "bangles" },
  
  // Bridal Sets
  { id: 7, name: "Royal Bridal Set", description: "Complete wedding jewellery", image: bridal1, category: "bridal" },
  { id: 8, name: "Ruby Collection", description: "Gold with red gemstones", image: bridal2, category: "bridal" },
  { id: 9, name: "Traditional Set", description: "Classic bridal collection", image: bridalJewelry, category: "bridal" },
  
  // Rings - Ladies
  { id: 10, name: "Diamond Solitaire", description: "Elegant engagement ring", image: ringLadies1, category: "rings", ringType: "ladies" },
  { id: 11, name: "Floral Design", description: "Delicate flower pattern", image: goldRing, category: "rings", ringType: "ladies" },
  
  // Rings - Gents
  { id: 12, name: "Bold Classic", description: "Strong masculine design", image: ringGents1, category: "rings", ringType: "gents" },
  
  // Rings - Children
  { id: 13, name: "Tiny Star", description: "Small cute ring for kids", image: ringChildren1, category: "rings", ringType: "children" },
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
