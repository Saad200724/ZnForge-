import { Briefcase, Users, TrendingUp, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function Career() {
  const positions = [
    { title: "Senior Product Designer", department: "Design", level: "Senior", location: "San Francisco" },
    { title: "Full Stack Developer", department: "Engineering", level: "Mid", location: "Remote" },
    { title: "Product Manager", department: "Product", level: "Lead", location: "San Francisco" },
    { title: "UI/UX Designer", department: "Design", level: "Junior", location: "Remote" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground">
              Build the Future With Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore rewarding career opportunities at our forward-thinking digital agency. We're looking for passionate innovators to join our growing team.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Work with Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Collaborative Culture", desc: "Work with talented professionals in a supportive environment." },
                { icon: TrendingUp, title: "Growth Opportunities", desc: "Continuous learning and career development programs." },
                { icon: Heart, title: "Work-Life Balance", desc: "Flexible working arrangements and wellness benefits." }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="p-8 rounded-2xl border border-border/40 bg-card hover:border-primary/50 transition-all duration-300 text-center group">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">Available Opportunities</h2>
            <div className="space-y-4">
              {positions.length > 0 ? (
                positions.map((job, i) => (
                  <div key={i} className="p-6 rounded-xl border border-border/40 bg-card hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 mt-2">
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{job.level}</span>
                          <span className="text-sm text-muted-foreground">{job.location}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="group-hover:border-primary group-hover:text-primary">
                        Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-12 rounded-2xl border border-dashed border-border/60 bg-card/50 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-4">No Current Openings</h3>
                  <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                    While we don't have any specific roles open at the moment, we're always looking for exceptional talent. Feel free to send your resume for future consideration.
                  </p>
                  <Button className="rounded-full px-8">
                    Send General Application
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
