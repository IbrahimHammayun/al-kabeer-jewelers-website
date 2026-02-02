import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "923200498546"; // Pakistan: +92 320 0498546
const DEFAULT_MESSAGE = "Hello, I'm interested in ordering jewellery from Jadeed Al Kabeer Jewellers.";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "floating" | "primary" | "card";
  className?: string;
  children?: React.ReactNode;
}

export const WhatsAppButton = ({
  message = DEFAULT_MESSAGE,
  variant = "primary",
  className = "",
  children,
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-pulse-gold md:h-16 md:w-16 ${className}`}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 fill-current text-white md:h-8 md:w-8" />
      </a>
    );
  }

  if (variant === "card") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-xl border border-primary bg-transparent px-4 py-2 font-elegant text-sm font-medium tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground ${className}`}
      >
        <MessageCircle className="h-4 w-4" />
        {children || "Order on WhatsApp"}
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 font-elegant text-base font-medium tracking-widest text-primary-foreground transition-all duration-300 gold-gradient hover:opacity-90 hover:shadow-lg md:text-lg ${className}`}
    >
      <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
      {children || "Order on WhatsApp"}
    </a>
  );
};
