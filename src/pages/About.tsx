import { Users, Target, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground">
              About ZnForge
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a team of passionate designers and developers dedicated to creating exceptional digital experiences that transform businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At ZnForge, we believe that great design and development should be accessible to everyone. We partner with startups and enterprises to create digital solutions that inspire, engage, and drive measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                { icon: Target, title: "Our Vision", text: "To be the leading digital experience partner for ambitious brands worldwide." },
                { icon: Heart, title: "Our Values", text: "Innovation, excellence, integrity, and client-centric approach in everything we do." },
                { icon: Users, title: "Our Team", text: "A diverse group of creative professionals united by a passion for exceptional work." },
                { icon: Zap, title: "Our Impact", text: "We've transformed over 100+ projects and continue to set new standards in digital excellence." }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="p-8 rounded-2xl border border-border/40 bg-card hover:border-primary/50 transition-all duration-300 group">
                    <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
