import { CheckCircle, Clock, Users, Zap, Target, BarChart3 } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function WorkingProcedure() {
  const procedures = [
    { icon: Target, title: "1. Planning & Strategy", desc: "We align on goals, timelines, and deliverables to ensure clarity from day one." },
    { icon: Users, title: "2. Discovery & Collaboration", desc: "In-depth meetings to understand your vision, audience, and unique requirements." },
    { icon: Zap, title: "3. Design & Development", desc: "Our team creates stunning designs and builds scalable, robust solutions." },
    { icon: CheckCircle, title: "4. Testing & QA", desc: "Comprehensive testing across all devices to ensure quality and performance." },
    { icon: BarChart3, title: "5. Analytics & Reporting", desc: "We provide detailed metrics and insights to measure success." },
    { icon: Clock, title: "6. Ongoing Support", desc: "Continuous support and improvements to keep your solution performing optimally." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground">
              Our Working Procedure
            </h1>
            <p className="text-xl text-muted-foreground">
              A transparent, collaborative approach to delivering exceptional results. Here's how we work with our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {procedures.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="p-8 rounded-2xl border border-border/40 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                      
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Timeline Indicator */}
            <div className="mt-16 p-8 rounded-2xl border border-border/40 bg-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Timeline Estimates</h3>
              <div className="space-y-4">
                {[
                  { phase: "Discovery & Planning", duration: "1-2 weeks" },
                  { phase: "Design Phase", duration: "3-4 weeks" },
                  { phase: "Development", duration: "4-8 weeks" },
                  { phase: "Testing & Refinement", duration: "2-3 weeks" },
                  { phase: "Launch & Support", duration: "Ongoing" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between pb-4 border-b border-border/40 last:border-b-0">
                    <span className="font-medium text-foreground">{item.phase}</span>
                    <span className="text-primary font-semibold">{item.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
