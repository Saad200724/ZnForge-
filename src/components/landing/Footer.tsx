import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import znforgeLogo from "@/assets/znforge-logo.png";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Studio", href: "#" },
    { label: "Features", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Docs", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Tutorials", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Support", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Partners", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 relative overflow-hidden">
      {/* CTA Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-display-sm sm:text-display-md font-semibold text-foreground mb-6">
              Ready to start your project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-foreground hover:bg-foreground/90 text-background font-medium px-8 h-12 group"
              >
                Get in touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border/60 bg-transparent hover:bg-secondary/50 px-8 h-12 font-medium"
              >
                View pricing
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <a href="#" className="flex items-center mb-6">
                <img 
                  src={znforgeLogo} 
                  alt="ZnForge" 
                  className="h-8 w-auto"
                />
              </a>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-xs">
                ZnForge empowers brands to transform their vision into stunning, studio-quality digital experiences — making product showcasing easier than ever.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-foreground mb-6 text-sm tracking-wide uppercase">Product</h4>
              <ul className="space-y-4">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-semibold text-foreground mb-6 text-sm tracking-wide uppercase">Resources</h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-semibold text-foreground mb-6 text-sm tracking-wide uppercase">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ZnForge. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Large Background Brand Name */}
      <div className="relative w-full flex justify-center pointer-events-none py-12 overflow-hidden">
        <span 
          className="font-display text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold leading-none select-none whitespace-nowrap text-muted-foreground/20"
        >
          ZnForge
        </span>
        {/* Fade overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    </footer>
  );
}
