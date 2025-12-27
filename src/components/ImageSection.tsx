import { useEffect, useRef, useState } from "react";

interface ImageSectionProps {
  imageSrc: string;
  alt: string;
  title?: string;
  subtitle?: string;
  index: number;
}

const ImageSection = ({ imageSrc, alt, title, subtitle, index }: ImageSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10" />
      
      {/* Image container with zoom effect */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ease-out ${
          isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover image-zoom"
        />
      </div>

      {/* Content overlay */}
      {(title || subtitle) && (
        <div 
          className={`relative z-20 text-center px-6 max-w-4xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${index * 100 + 300}ms` }}
        >
          {title && (
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-4 tracking-wide">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="font-body text-lg md:text-xl text-muted-foreground font-light tracking-wider">
              {subtitle}
            </p>
          )}
          
          {/* Decorative gold line */}
          <div 
            className={`mt-8 mx-auto h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-1000 ${
              isVisible ? "w-32 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 100 + 500}ms` }}
          />
        </div>
      )}

      {/* Gold accent border */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </section>
  );
};

export default ImageSection;
