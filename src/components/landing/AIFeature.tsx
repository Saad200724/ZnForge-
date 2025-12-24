import { BarChart3, TrendingUp, Zap, Target } from "lucide-react";

export function AIFeature() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Design</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Data-Driven Designs That{" "}
              <span className="text-gradient">Convert</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              We leverage AI and analytics to create designs that don't just look beautiful—they drive real results. 
              Every pixel is optimized for maximum conversion and user engagement.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Precision Targeting</h4>
                  <p className="text-sm text-muted-foreground">Designs tailored to your audience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Growth Focused</h4>
                  <p className="text-sm text-muted-foreground">Built to scale your business</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Analytics Preview */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-6 glow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Performance Analytics</h3>
                <span className="text-sm text-primary font-medium">+127% this month</span>
              </div>
              
              {/* Chart Preview */}
              <div className="h-48 flex items-end gap-2">
                {[40, 65, 45, 80, 55, 90, 70, 95, 85, 100, 75, 110].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/20 rounded-t-sm relative overflow-hidden"
                    style={{ height: `${height}%` }}
                  >
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm"
                      style={{ height: `${height * 0.7}%` }}
                    />
                  </div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Visitors</span>
                  </div>
                  <span className="text-xl font-bold text-foreground">24.5K</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Conversion</span>
                  </div>
                  <span className="text-xl font-bold text-foreground">8.2%</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Revenue</span>
                  </div>
                  <span className="text-xl font-bold text-foreground">$48K</span>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 glow-sm animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Conversion Rate</p>
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