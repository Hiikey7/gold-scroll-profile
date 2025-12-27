import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import ImageSection from "@/components/ImageSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// Placeholder images - replace these with your actual company profile images
const profileImages = [
  { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80", alt: "Corporate headquarters" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80", alt: "Modern office" },
  { src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80", alt: "Team collaboration" },
  { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80", alt: "Business meeting" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80", alt: "Global operations" },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80", alt: "Team discussion" },
  { src: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=1920&q=80", alt: "Office workspace" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80", alt: "Tech workspace" },
  { src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=80", alt: "Professional team" },
  { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80", alt: "Creative meeting" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80", alt: "Conference room" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80", alt: "Strategy session" },
  { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80", alt: "Business presentation" },
  { src: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1920&q=80", alt: "Innovation hub" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80", alt: "Tech team" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80", alt: "Collaborative work" },
  { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80", alt: "Modern design" },
  { src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&q=80", alt: "Office building" },
  { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80", alt: "Business growth" },
  { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80", alt: "Executive office" },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Company Name | Premium Business Solutions</title>
        <meta name="description" content="Discover our company profile - where excellence meets innovation. Building tomorrow's legacy today with dedicated professionals and global reach." />
      </Helmet>

      <main className="relative">
        {/* Floating buttons */}
        <ScrollToTopButton />
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
        <footer className="relative py-8 bg-background">
          <div className="container mx-auto px-6 text-center">
            <p className="font-body text-xs text-muted-foreground/60 tracking-widest uppercase">
              © 2024 Company Name. All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;
