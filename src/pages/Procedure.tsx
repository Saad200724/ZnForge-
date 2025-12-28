import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CheckCircle2, Clock, Calendar, ArrowRight } from "lucide-react";

export default function Procedure() {
  const eightWeekTimeline = [
    { week: "Week 1-2", phase: "Discovery & Design", details: "Market research, user flows, wireframes, and high-fidelity UI/UX design." },
    { week: "Week 3-4", phase: "Core Development", details: "Frontend setup, backend architecture, and implementation of primary features." },
    { week: "Week 5-6", phase: "Integration & Testing", details: "API integrations, performance optimization, and rigorous QA testing." },
    { week: "Week 7-8", phase: "Refinement & Launch", details: "Final polishing, user feedback implementation, and deployment." }
  ];

  const twelveWeekTimeline = [
    { week: "Week 1-3", phase: "Strategy & Architecture", details: "Deep dive into requirements, database schema design, and technical roadmap." },
    { week: "Week 4-6", phase: "Design & Prototype", details: "Full-scale product design, interactive prototypes, and stakeholder review." },
    { week: "Week 7-10", phase: "Advanced Development", details: "Feature-rich development, complex integrations, and security hardening." },
    { week: "Week 11-12", phase: "QA & Handover", details: "End-to-end testing, documentation, team training, and production launch." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground">
              Our Project <span className="text-primary">Procedure</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A transparent, structured approach to bringing your vision to life. From initial concept to market-ready product.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            
            {/* 8-Week Timeline */}
            <div className="space-y-8">
              <div className="p-8 rounded-3xl border border-primary/20 bg-primary/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">8-Week Sprint</h2>
                    <p className="text-muted-foreground">Ideal for MVPs & Rapid Launch</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {eightWeekTimeline.map((item, i) => (
                    <div key={i} className="relative pl-8 border-l border-primary/20 pb-6 last:pb-0">
                      <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-primary" />
                      <span className="text-sm font-semibold text-primary block mb-1">{item.week}</span>
                      <h3 className="text-lg font-bold mb-2">{item.phase}</h3>
                      <p className="text-muted-foreground text-sm">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 12-Week Timeline */}
            <div className="space-y-8">
              <div className="p-8 rounded-3xl border border-border/40 bg-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">12-Week Build</h2>
                    <p className="text-muted-foreground">Comprehensive Product Development</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {twelveWeekTimeline.map((item, i) => (
                    <div key={i} className="relative pl-8 border-l border-border/40 pb-6 last:pb-0">
                      <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-muted-foreground/30" />
                      <span className="text-sm font-semibold text-primary block mb-1">{item.week}</span>
                      <h3 className="text-lg font-bold mb-2">{item.phase}</h3>
                      <p className="text-muted-foreground text-sm">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you need a rapid MVP or a complex enterprise solution, our team is ready to deliver excellence within your timeline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Book a Strategy Call <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
