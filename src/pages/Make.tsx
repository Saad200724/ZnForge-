import { ArrowRight, Sparkles, Zap, Palette, Code, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function Make() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">How We Create</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground">
              Our Creative Process
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We believe in a collaborative approach that transforms your ideas into exceptional digital experiences through strategic planning and innovative design.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Palette,
                title: "Discovery & Strategy",
                description: "We deeply understand your vision, goals, and target audience to craft a strategic foundation."
              },
              {
                icon: Code,
                title: "Design & Development",
                description: "Our expert team designs stunning interfaces and builds robust, scalable solutions."
              },
              {
                icon: Zap,
                title: "Testing & Optimization",
                description: "Rigorous testing ensures performance, security, and seamless user experience across all devices."
              },
              {
                icon: Rocket,
                title: "Launch & Support",
                description: "We deploy your solution and provide ongoing support to ensure continued success."
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <div className="relative p-8 rounded-2xl border border-border/40 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 h-full">
                    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's collaborate and bring your ideas to life with our proven creative process.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 group">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
