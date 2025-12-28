import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import znforgeLogo from "@/assets/znforge-white-logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/40 overflow-hidden">
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24">
            {/* Brand & Social Section */}
            <div className="flex flex-col items-center text-center space-y-12">
              {/* Logo */}
              <a href="#" className="inline-flex items-center hover:opacity-80 transition-opacity duration-300">
                <img 
                  src={znforgeLogo} 
                  alt="ZnForge" 
                  className="h-16 w-auto"
                />
              </a>

              {/* Brand Description */}
              <div className="max-w-2xl mx-auto space-y-6">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                  Craft stunning digital experiences
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ZnForge empowers brands to transform their vision into extraordinary, studio-quality digital experiences that captivate and inspire.
                </p>
              </div>

              {/* Book a call button */}
              <div className="flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-white/90 text-black font-semibold px-8 h-14 text-base group hover:scale-110 transition-all duration-500 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 gap-3 tracking-[0.05em]"
                >
                  <img src="/icons/google-meet.png" alt="" className="w-6 h-6" />
                  Book a call
                </Button>
              </div>
            </div>

            {/* Divider Line */}
            <div className="mt-16 mb-12 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

            {/* Navigation Links Section - New Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-12 pb-8 md:items-start">
              {/* Left: Contact Info - Larger */}
              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">Let's work<br />together</h3>
                <div>
                  <a 
                    href="mailto:info@znforge.dev"
                    className="block text-lg md:text-xl text-primary font-semibold hover:text-primary/80 transition-colors duration-300"
                  >
                    info@znforge.dev
                  </a>
                </div>
              </div>

              {/* Right: Company Info & Policies */}
              <div className="grid grid-cols-2 gap-8">
                {/* Company Info */}
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground mb-6 uppercase tracking-widest">Company Info</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        to="/contact"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/about"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/career"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Policies */}
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground mb-6 uppercase tracking-widest">Policies</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        to="/privacy-policy"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/terms-of-service"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
                      >
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/cookies"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
                      >
                        Cookie Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Bar - Copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>© {currentYear} ZnForge. All rights reserved.</p>
              <p>Crafted with passion for exceptional digital experiences</p>
            </div>
          </div>
        </div>

        {/* Watermark Background Text */}
        <div className="relative w-full flex justify-center pointer-events-none overflow-hidden pb-8">
          <span className="font-display text-[10rem] sm:text-[12rem] md:text-[16rem] font-bold leading-none select-none whitespace-nowrap text-foreground/[0.04] animate-pulse">
            ZnForge
          </span>
          {/* Fade overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </footer>
  );
}
