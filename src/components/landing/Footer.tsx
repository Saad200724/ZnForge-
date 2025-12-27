import { Twitter, Instagram, Linkedin, Github } from "lucide-react";
import znforgeLogo from "@/assets/znforge-white-logo.png";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

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

              {/* Social Links - Fancy Icons */}
              <div className="flex items-center justify-center gap-8">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="group relative w-12 h-12 flex items-center justify-center rounded-full border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    >
                      <Icon className="w-5 h-5" />
                      <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Divider Line */}
            <div className="mt-16 mb-8 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

            {/* Bottom Bar - Legal Links */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
              <p>© {currentYear} ZnForge. All rights reserved.</p>
              
              <div className="flex items-center gap-6 flex-wrap justify-center md:justify-end">
                <a 
                  href="#" 
                  className="hover:text-primary transition-colors duration-300 hover:underline"
                >
                  Privacy Policy
                </a>
                <div className="hidden md:block w-px h-4 bg-border/40" />
                <a 
                  href="#" 
                  className="hover:text-primary transition-colors duration-300 hover:underline"
                >
                  Terms of Service
                </a>
                <div className="hidden md:block w-px h-4 bg-border/40" />
                <a 
                  href="#" 
                  className="hover:text-primary transition-colors duration-300 hover:underline"
                >
                  Cookies
                </a>
              </div>
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
