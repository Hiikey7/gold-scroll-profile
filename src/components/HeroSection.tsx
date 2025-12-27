import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  companyName: string;
  tagline: string;
}

const HeroSection = ({ companyName, tagline }: HeroSectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Decorative element */}
        <div 
          className={`mb-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-20 h-px bg-primary mx-auto mb-4" />
          <div className="w-2 h-2 rounded-full bg-primary mx-auto" />
          <div className="w-20 h-px bg-primary mx-auto mt-4" />
        </div>

        {/* Company name */}
        <h1 
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] text-foreground mb-6 transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {companyName}
        </h1>

        {/* Tagline */}
        <p 
          className={`font-body text-lg md:text-xl text-muted-foreground font-light tracking-[0.3em] uppercase transition-all duration-1000 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {tagline}
        </p>

        {/* Bottom decorative line */}
        <div 
          className={`mt-12 mx-auto transition-all duration-1000 delay-600 ${
            isLoaded ? "w-48 opacity-100" : "w-0 opacity-0"
          }`}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-500 group ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <span className="font-body text-xs tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
