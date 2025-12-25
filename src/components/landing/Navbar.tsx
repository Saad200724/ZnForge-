import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import znforgeLogo from "@/assets/znforge-logo.png";
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Floating Container */}
        <div className={`flex items-center justify-between px-4 lg:px-6 py-3 rounded-full transition-all duration-500 ${
          scrolled 
            ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-black/5 border border-border/50" 
            : "bg-background/80 backdrop-blur-md shadow-md shadow-black/5 border border-border/30"
        }`}>
          {/* Logo */}
          <a href="#" className="flex items-center group flex-shrink-0">
            <img 
              src={znforgeLogo} 
              alt="ZnForge" 
              className="h-7 w-auto transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link, index) => (
              <div key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  className="px-4 py-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
                {index < navLinks.length - 1 && (
                  <div className="w-px h-4 bg-border/60" />
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button className="bg-foreground text-background hover:bg-foreground/90 font-medium px-5 h-9 rounded-full text-sm group">
              Get Started
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-secondary/50 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-2xl bg-background/95 backdrop-blur-xl shadow-lg shadow-black/5 border border-border/50 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors text-sm font-medium py-3 px-4 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-border/50">
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium rounded-full">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
