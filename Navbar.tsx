import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "الخدمات", href: "#services" },
    { name: "المدونة", href: "#blog" },
    { name: "الشهادات", href: "#testimonials" },
    { name: "اتصل بنا", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-medium" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ViaTurk
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-semibold px-8 rounded-full shadow-glow transition-all duration-300"
            >
              ابدأ الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-right text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-semibold rounded-full mt-2"
              >
                ابدأ الآن
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
