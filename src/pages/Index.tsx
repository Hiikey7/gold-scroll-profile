import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import ImageSection from "@/components/ImageSection";
import WhatsAppButton from "@/components/WhatsAppButton";

// Placeholder images - replace these with your actual company profile images
const profileImages = [
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    alt: "Corporate headquarters exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    alt: "Modern office interior",
  },
  {
    src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80",
    alt: "Team collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80",
    alt: "Business meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80",
    alt: "Global operations",
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Company Name | Premium Business Solutions</title>
        <meta name="description" content="Discover our company profile - where excellence meets innovation. Building tomorrow's legacy today with dedicated professionals and global reach." />
      </Helmet>

      <main className="relative">
        {/* WhatsApp floating button */}
        <WhatsAppButton phoneNumber="1234567890" />

        {/* Hero Section */}
        <HeroSection 
          companyName="COMPANY NAME" 
          tagline="Excellence • Innovation • Legacy" 
        />

        {/* Scrolling image sections */}
        {profileImages.map((image, index) => (
          <ImageSection
            key={index}
            imageSrc={image.src}
            alt={image.alt}
            index={index}
          />
        ))}

        {/* Footer section */}
        <footer className="relative py-24 bg-background">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-8">
              <div className="w-16 h-px bg-primary mx-auto mb-4" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary mx-auto" />
              <div className="w-16 h-px bg-primary mx-auto mt-4" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4 tracking-wide">
              Get In Touch
            </h2>
            <p className="font-body text-muted-foreground font-light tracking-wider mb-8">
              Let's create something extraordinary together
            </p>
            
            <div className="flex flex-col items-center gap-2 text-muted-foreground font-body text-sm tracking-wider">
              <p>info@company.com</p>
              <p>+1 (234) 567-890</p>
            </div>

            <div className="mt-16 pt-8 border-t border-border/30">
              <p className="font-body text-xs text-muted-foreground/60 tracking-widest uppercase">
                © 2024 Company Name. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;
