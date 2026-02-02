import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 py-3 shadow-md backdrop-blur-sm"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center">
          {/* Centered Logo */}
          <a href="#" className="flex flex-col items-center">
            <h1
              className={`font-display text-lg font-semibold tracking-[0.1em] transition-colors duration-300 md:text-xl ${
                isScrolled ? "text-foreground" : "text-cream"
              }`}
            >
              <span className="gold-text-gradient">JADEED AL KABEER</span>
            </h1>
            <span
              className={`font-elegant text-[10px] tracking-[0.3em] transition-colors duration-300 md:text-xs ${
                isScrolled ? "text-muted-foreground" : "text-cream/70"
              }`}
            >
              JEWELLERS
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
