import { Link } from "react-router-dom";
import znforgeLogo from "@/assets/znforge-white-logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {/* Left Section - Company Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Let's work<br />together
              </h2>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-primary font-semibold text-lg hover:opacity-80 transition-opacity cursor-pointer">
                  info@znforge.dev
                </p>
              </div>
              <div>
                <p className="text-primary font-semibold text-lg hover:opacity-80 transition-opacity cursor-pointer">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Links in Columns */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-12">
            {/* Follow Us */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Follow us</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Company info</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Policies</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {currentYear} ZnForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
