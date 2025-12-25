import { Gem, Rocket, Shield } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Quality without compromise",
    description: "Every project is crafted with meticulous attention to detail. We don't cut corners—we polish them until they shine.",
  },
  {
    icon: Rocket,
    title: "Speed that scales",
    description: "Fast delivery without sacrificing quality. We leverage modern tools and proven processes to ship quickly.",
  },
  {
    icon: Shield,
    title: "Enterprise reliability",
    description: "Built to handle millions of users. Our solutions are secure, performant, and built on battle-tested infrastructure.",
  },
];

export function Values() {
  return (
    <section className="py-32 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-sm sm:text-display-md font-semibold text-foreground mb-4">
            Why teams choose <span className="text-gradient">ZnForge</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every project we deliver
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative rounded-xl border border-border/60 bg-card/50 p-8 hover:border-border transition-all duration-300 hover-lift"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/50 border border-border/40 flex items-center justify-center mb-6 group-hover:border-primary/40 transition-colors">
                <value.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>

              {/* Subtle corner decoration */}
              <div className="absolute top-6 right-6 text-5xl font-bold text-border/30 group-hover:text-border/50 transition-colors font-display">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
