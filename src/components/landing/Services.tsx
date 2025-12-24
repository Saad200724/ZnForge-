import { Palette, Layout, Code, Smartphone, Search, Megaphone } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Design",
    description: "Complete brand identity including logos, color palettes, and design systems.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "User-centered interfaces that are both beautiful and highly functional.",
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Fast, responsive, and scalable websites built with modern technologies.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile apps that users love.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
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
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital solutions to transform your business
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:glow cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}