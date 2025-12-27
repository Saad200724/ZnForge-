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
    <section className="relative min-h-screen flex items-center justify-center pt-40 overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial animate-gradient" />
      
      {/* Multiple floating gradient orbs for depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline with shimmer effect */}
          <h1 className="font-display text-display-md sm:text-display-lg lg:text-display-xl font-bold text-foreground mb-6 animate-in delay-2">
            Build Your Own Software,
            <br />
            <span className="text-gradient animate-shimmer">Even If You Don't Have A Development Team</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in delay-3">
            We partner with startups and enterprises to create exceptional digital experiences 
            that convert visitors into customers and drive measurable growth.
          </p>

          {/* CTA Buttons with glow effects */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in delay-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 text-base group hover:scale-110 transition-all duration-500 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 glow-pulse"
            >
              Start a project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-foreground/20 bg-transparent hover:bg-foreground hover:text-background px-8 h-14 text-base font-semibold hover:scale-110 transition-all duration-500 hover:shadow-xl"
            >
              View our work
            </Button>
          </div>

        </div>

        {/* Stats Row with hover effects */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "200+", label: "Projects delivered" },
            { value: "50+", label: "Enterprise clients" },
            { value: "98%", label: "Client retention" },
            { value: "4.9", label: "Average rating" },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center group cursor-default animate-in hover-tilt"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-2 group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Browser Preview Window with 3D mouse-follow effect */}
        <div className="mt-20 relative max-w-5xl mx-auto animate-scale-in delay-6">
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ ...rotateStyle, transition: 'transform 0.15s ease-out' }}
            className="relative rounded-2xl overflow-hidden border-2 border-primary/20 bg-card shadow-2xl shadow-primary/10 hover:shadow-primary/20 hover:border-primary/40 group"
          >
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-secondary/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 group-hover:animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 group-hover:animate-pulse" style={{ animationDelay: '0.1s' }} />
                <div className="w-3 h-3 rounded-full bg-green-500 group-hover:animate-pulse" style={{ animationDelay: '0.2s' }} />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1.5 rounded-lg bg-background/50 border border-border/50 text-xs text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  nextproject.znforge.dev
                </div>
              </div>
            </div>
            
            {/* Preview Content */}
            <div className="relative overflow-hidden">
              <img 
                src={heroProjectPreview} 
                alt="PixBella - Current project preview" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </div>
          </div>
          
          {/* Subtle glow behind */}
          <div className="absolute -inset-8 bg-gradient-radial from-primary/10 via-primary/5 to-transparent -z-10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
