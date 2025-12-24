import { Gem, Rocket, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Quality First",
    description: "Every project is crafted with meticulous attention to detail. We don't cut corners—we polish them.",
  },
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Time is money. We deliver exceptional results in record time without compromising on quality.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "We stay ahead of trends and leverage cutting-edge technology to give you a competitive edge.",
  },
];

export function Values() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Core <span className="text-gradient">Values</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:glow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              
              <p className="text-muted-foreground">
                {value.description}
              </p>

              {/* Decorative Number */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-border/50 group-hover:text-primary/10 transition-colors">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}