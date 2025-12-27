import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = "Hello! I'm interested in learning more about your company." }: WhatsAppButtonProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed left-6 bottom-6 z-50 flex items-center gap-3 px-5 py-3 bg-primary text-primary-foreground font-body font-medium text-sm rounded-full gold-glow animate-pulse-glow transition-all duration-300 hover:scale-105 hover:bg-gold-light group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
      <span className="hidden sm:inline">WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
