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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group flex flex-col items-center text-center cursor-pointer animate-in p-6 rounded-2xl bg-card/5 border border-border/10 sm:bg-transparent sm:border-none hover:bg-card/10 transition-colors duration-300"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              {/* Image Stack */}
              <div className="relative w-full max-w-[200px] sm:max-w-none aspect-square mb-6 flex items-center justify-center">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-contain group-hover:scale-105 sm:group-hover:scale-110 group-hover:-rotate-2 transition-all duration-700 ease-out"
                />
              </div>
              
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-500">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              
              {/* Title */}
              <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs group-hover:text-foreground/80 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
