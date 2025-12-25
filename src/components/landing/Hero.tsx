import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProjectPreview from "@/assets/hero-project-preview.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial" />
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small badge - GitHub style */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-secondary/50 mb-8 animate-in delay-1">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-subtle" />
            <span className="text-sm text-muted-foreground">
              Trusted by 200+ companies worldwide
            </span>
          </div>

          {/* Main Headline - Clean, powerful */}
          <h1 className="font-display text-display-md sm:text-display-lg lg:text-display-xl font-semibold text-foreground mb-6 animate-in delay-2">
            Build Your Own Software,
            <br />
            <span className="text-gradient">Even If You Don't Have A Development Team</span>
          </h1>

          {/* Subheadline - Clear value prop */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in delay-3">
            We partner with startups and enterprises to create exceptional digital experiences 
            that convert visitors into customers and drive measurable growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in delay-4">
            <Button 
              size="lg" 
              className="bg-foreground hover:bg-foreground/90 text-background font-medium px-8 h-12 text-base group"
            >
              Start a project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border/60 bg-transparent hover:bg-secondary/50 px-8 h-12 text-base font-medium"
            >
              View our work
            </Button>
          </div>

          {/* Social Proof Row */}
          <div className="flex items-center justify-center gap-6 mt-12 text-muted-foreground animate-in delay-5">
            <span className="text-sm">Follow us</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Row - Supabase style */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-in delay-5">
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Projects delivered</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Enterprise clients</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client retention</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average rating</div>
          </div>
        </div>

        {/* Browser Preview Window - GitHub inspired */}
        <div className="mt-20 relative max-w-5xl mx-auto animate-in delay-5">
          <div className="relative rounded-xl overflow-hidden border border-border/60 bg-card glow-subtle">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-secondary/30">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-secondary/50 text-xs text-muted-foreground">
                  yourwebsite.com
                </div>
              </div>
            </div>
            
            {/* Preview Content - Current Project Image */}
            <img 
              src={heroProjectPreview} 
              alt="PixBella - Current project preview" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Floating gradient */}
          <div className="absolute -inset-4 bg-gradient-radial from-primary/5 via-transparent to-transparent -z-10 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
