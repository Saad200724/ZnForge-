import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import znforgeLogo from "@/assets/znforge-white-logo.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Floating Container */}
        <div
          className={`flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl transition-all duration-500 ${
            scrolled
              ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-black/5 border border-border/50"
              : "bg-background/90 backdrop-blur-md shadow-md shadow-black/5 border border-border/30"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center group flex-shrink-0">
            <img
              src={znforgeLogo}
              alt="ZnForge"
              className="h-12 sm:h-14 w-auto transition-transform group-hover:scale-105"
            />
          </a>

          {/* Navigation - Always visible */}
          <div className="flex items-center">
            {navLinks.map((link, index) => (
              <div key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  className="px-2 sm:px-3 text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm font-medium uppercase tracking-wide"
                >
                  {link.label}
                </a>
                {index < navLinks.length - 1 && (
                  <div className="w-px h-3 sm:h-4 bg-border/60 hidden sm:block" />
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Always visible */}
          <Button className="bg-foreground hover:bg-foreground/90 text-background font-medium px-3 sm:px-4 h-10 sm:h-10 rounded-lg text-xs sm:text-sm group flex-shrink-0">
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5" />
            <span className="hidden sm:inline">Start now</span>
            <span className="sm:hidden">Start</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
