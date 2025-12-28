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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group relative rounded-xl border border-border/60 bg-card/50 p-4 sm:p-8 transition-all duration-500 card-hover animate-in h-full flex flex-col ${
                index === 2 ? "col-span-2 sm:col-span-1" : ""
              }`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-secondary/50 border border-border/40 flex items-center justify-center mb-3 sm:mb-6 group-hover:border-primary/40 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                <value.icon className="w-4 h-4 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              
              <h3 className={`font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300 ${
                index === 2 ? "text-base sm:text-lg mb-2 sm:mb-3" : "text-[10px] xs:text-xs sm:text-lg mb-1.5 sm:mb-3 line-clamp-2"
              }`}>
                {value.title}
              </h3>
              
              <p className={`text-muted-foreground leading-relaxed ${
                index === 2 ? "text-xs sm:text-sm" : "text-[9px] xs:text-[10px] sm:text-sm line-clamp-3 sm:line-clamp-none"
              }`}>
                {value.description}
              </p>

              {/* Subtle corner decoration */}
              <div className="absolute top-2 right-2 sm:top-6 sm:right-6 text-xl sm:text-5xl font-bold text-border/30 group-hover:text-primary/20 transition-colors duration-500 font-display">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
