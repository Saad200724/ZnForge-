import { BarChart3, TrendingUp, Zap, Target, ArrowUpRight } from "lucide-react";

export function AIFeature() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-radial-bottom" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-secondary/30 mb-6">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Data-Driven Design</span>
            </div>
            
            <h2 className="font-display text-display-sm sm:text-display-md font-semibold text-foreground mb-6">
              Designs optimised for{" "}
              <span className="text-gradient">conversion</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We leverage analytics and user research to create designs that don't just look beautiful—they 
              drive measurable results. Every decision is backed by data.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-secondary/50 border border-border/40 flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 transition-colors">
                  <Target className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Precision targeting</h4>
                  <p className="text-sm text-muted-foreground">Designs crafted for your specific audience and goals</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-secondary/50 border border-border/40 flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 transition-colors">
                  <TrendingUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Continuous optimisation</h4>
                  <p className="text-sm text-muted-foreground">We iterate based on real user behaviour and analytics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Analytics Preview */}
          <div className="relative">
            <div className="rounded-xl border border-border/60 bg-card p-6 glow-subtle">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-medium text-foreground">Performance Overview</h3>
                  <p className="text-sm text-muted-foreground">Last 30 days</p>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-primary font-medium">
                  <ArrowUpRight className="w-4 h-4" />
                  +127%
                </div>
              </div>
              
              {/* Chart Preview */}
              <div className="h-40 flex items-end gap-1.5 mb-6">
                {[35, 55, 40, 70, 50, 85, 60, 90, 75, 100, 70, 95].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm relative overflow-hidden"
                    style={{ height: `${height}%` }}
                  >
                    <div className="absolute inset-0 bg-primary/10" />
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm transition-all duration-300"
                      style={{ height: `${height * 0.7}%` }}
                    />
                  </div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/40">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <BarChart3 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Visitors</span>
                  </div>
                  <span className="text-lg font-semibold text-foreground">24.5K</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Conversion</span>
                  </div>
                  <span className="text-lg font-semibold text-foreground">8.2%</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Revenue</span>
                  </div>
                  <span className="text-lg font-semibold text-foreground">£48K</span>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-lg border border-border/60 bg-card p-4 animate-float glow-subtle">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Conversion Rate</p>
                  <p className="text-xs text-primary">↑ 42% vs last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
