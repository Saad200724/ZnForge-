import { Palette, Globe, Rocket, Smartphone } from "lucide-react";
import brandDesignImg from "@/assets/service-brand-design.png";
import webDevImg from "@/assets/service-web-dev.png";
import saasImg from "@/assets/service-saas.png";
import webappImg from "@/assets/service-webapp.png";

const services = [
  {
    icon: Palette,
    title: "Brand Design",
    description: "Complete brand identity including logos, colour palettes, and comprehensive design systems.",
    image: brandDesignImg,
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Fast, responsive, and scalable websites built with modern technologies.",
    image: webDevImg,
  },
  {
    icon: Rocket,
    title: "SaaS & Startup Development",
    description: "End-to-end product development for startups and SaaS platforms that scale.",
    image: saasImg,
  },
  {
    icon: Smartphone,
    title: "Web App Development",
    description: "Powerful web applications with intuitive interfaces and seamless user experiences.",
    image: webappImg,
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Image Stack */}
              <div className="relative w-full aspect-square mb-6 flex items-center justify-center">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Title */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
