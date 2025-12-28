import { Link } from "react-router-dom";
import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProjectPreview from "@/assets/hero-project-preview.png";
import { useRef, useState } from "react";

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateStyle, setRotateStyle] = useState({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    setRotateStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    });
  };

  const handleMouseLeave = () => {
    setRotateStyle({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-40 overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial animate-gradient" />
      
      {/* Multiple floating gradient orbs for depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full sm:w-[800px] h-[300px] sm:h-[400px] bg-primary/10 rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Top Left Avatar */}
          <div className="absolute -top-12 -left-4 sm:top-[10%] sm:left-[-10%] animate-float-avatar z-20 pointer-events-none">
            <img 
              src="/assets/avatar-cursor.webp" 
              alt="Avatar with cursor" 
              className="w-20 h-20 sm:w-40 sm:h-40 object-contain drop-shadow-2xl"
            />
          </div>
          {/* Bottom Right Avatar */}
          <div className="absolute -bottom-12 -right-4 sm:bottom-[10%] sm:right-[-10%] animate-float-avatar z-20 pointer-events-none" style={{ animationDelay: '3s' }}>
            <img 
              src="/assets/avatar-cursor-2.webp" 
              alt="Avatar with cursor" 
              className="w-20 h-20 sm:w-40 sm:h-40 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Main Headline with shimmer effect */}
          <h1 className="font-display text-3xl sm:text-display-md lg:text-display-xl font-bold text-foreground mb-6 animate-in delay-2 leading-[1.1]">
            Build Your Own Software,
            <br />
            <span className="text-gradient animate-shimmer">Even If You Don't Have A Development Team</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in delay-3 px-4">
            We partner with startups and enterprises to create exceptional digital experiences 
            that convert visitors into customers and drive measurable growth.
          </p>

          {/* CTA Buttons with glow effects */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in delay-4 px-4">
            <Link to="/book" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 text-base group hover:scale-105 sm:hover:scale-110 transition-all duration-500 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 glow-pulse animate-glitter"
              >
                Start a project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <a href="#work" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-foreground/20 bg-transparent hover:bg-foreground hover:text-background px-8 h-14 text-base font-semibold hover:scale-105 sm:hover:scale-110 transition-all duration-500 hover:shadow-xl"
              >
                View our work
              </Button>
            </a>
          </div>
        </div>

        {/* Stats Row with hover effects */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
          {[
            { value: "200+", label: "Projects delivered" },
            { value: "50+", label: "Enterprise clients" },
            { value: "98%", label: "Client retention" },
            { value: "4.9", label: "Average rating" },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center group cursor-default animate-in hover-tilt p-4 rounded-xl bg-card/5 border border-border/5 sm:bg-transparent sm:border-none"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="font-display text-2xl sm:text-5xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-all duration-500">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Browser Preview Window */}
        <div className="mt-16 sm:mt-20 relative max-w-5xl mx-auto animate-scale-in delay-6 px-4">
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ ...rotateStyle, transition: 'transform 0.15s ease-out' }}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-primary/20 bg-card shadow-2xl shadow-primary/10 group"
          >
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-border/60 bg-secondary/50">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-3 py-1 rounded-md bg-background/50 border border-border/50 text-[10px] sm:text-xs text-muted-foreground flex items-center gap-2 truncate max-w-[150px] sm:max-w-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  nextproject.znforge.dev
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden aspect-video sm:aspect-auto">
              <img 
                src={heroProjectPreview} 
                alt="Project preview" 
                className="w-full h-full object-cover sm:h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
