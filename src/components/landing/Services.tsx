import { Palette, Layout, Code, Smartphone, Search, Megaphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Design",
    description: "Complete brand identity including logos, colour palettes, and comprehensive design systems.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "User-centred interfaces that are both beautiful and highly functional.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Fast, responsive, and scalable websites built with modern technologies.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that users love.",
  },
  {
    icon: Search,
    title: "SEO Optimisation",
    description: "Data-driven SEO strategies to boost your search rankings.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Comprehensive marketing solutions to grow your audience.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-sm sm:text-display-md font-semibold text-foreground mb-4">
            Everything you need to <span className="text-gradient">grow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital solutions from strategy to execution
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border/60 bg-card/30 p-6 hover:border-border hover:bg-card/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/50 border border-border/40 flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 transition-colors">
                  <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display text-base font-semibold text-foreground mb-2 flex items-center gap-2">
                    {service.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
