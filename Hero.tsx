import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-istanbul.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-in"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            اكتشف فرصك في تركيا
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            بوابتك للسفر، المنح الدراسية، فرص العمل، وخدمات الإقامة في تركيا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-bold px-10 py-6 text-lg rounded-full shadow-glow transition-all duration-300 hover:scale-105"
            >
              ابدأ الآن
            </Button>
            <Button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              اكتشف خدماتنا
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
