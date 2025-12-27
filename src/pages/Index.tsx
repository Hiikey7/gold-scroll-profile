import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import ImageSection from "@/components/ImageSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// Placeholder images - replace these with your actual company profile images
const profileImages = [
  { src: "gold-scroll-profile/public/1.jpg", alt: "Corporate headquarters" },
  { src: "gold-scroll-profile/public/2.jpg", alt: "Team collaboration" },
  { src: "gold-scroll-profile/public/3.jpg", alt: "Innovative solutions" },
  { src: "gold-scroll-profile/public/4.jpg", alt: "Global reach" },
  { src: "gold-scroll-profile/public/5.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/6.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/7.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/8.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/9.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/10.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/11.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/12.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/13.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/14.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/15.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/16.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/17.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/18.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/19.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/20.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/21.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/22.jpg", alt: "Customer success" },
  { src: "gold-scroll-profile/public/23.jpg", alt: "Customer success" },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mazika | Design & Build . Estate Managers</title>
        <meta
          name="description"
          content="Discover Mazika - Design & Build . Estate Managers. Building tomorrow's legacy today with dedicated professionals and global reach."
        />
      </Helmet>

      <main className="relative">
        {/* Floating buttons */}
        <ScrollToTopButton />
        <a
          href="/maziki.pdf"
          download
          className="fixed right-6 bottom-20 z-50 flex items-center gap-3 px-5 py-3 bg-primary text-primary-foreground font-body font-medium text-sm rounded-full shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.6)] group"
          aria-label="Download PDF"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
          <span className="hidden sm:inline">Download PDF</span>
        </a>
        <WhatsAppButton
          phoneNumber="254719757416"
          message="Hello, I would like"
        />

        {/* Hero Section */}
        <HeroSection
          companyName="Mazika"
          tagline="Design & Build . Estate Managers"
        />

        {/* Scrolling image sections */}
        <div className="grid grid-cols-1">
          {profileImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          ))}
        </div>

        {/* Footer section */}
        <footer className="relative py-8 bg-background">
          <div className="container mx-auto px-6 text-center">
            <p className="font-body text-xs text-muted-foreground/60 tracking-widest uppercase">
              © 2026 Mazika. All Rights Reserved.
            </p>
            <p className="font-body text-xs text-muted-foreground/40 tracking-wider mt-2">
              Powered by{" "}
              <a
                href="https://stanpixels.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                stanpixels
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;
