import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Meow Meow Pet Shop",
    description: "A complete e-commerce platform redesign for a premium pet supplies retailer. We built a seamless shopping experience with AI-powered product recommendations and subscription management for recurring orders.",
    category: "E-Commerce Platform",
    metrics: [
      { label: "Conversion Rate", value: "+340%" },
      { label: "Revenue Growth", value: "+85%" },
    ],
    cardBg: "bg-[hsl(40,20%,20%)]",
    accentBorder: "border-l-amber-500",
    image: "/images/portfolio/meow.png",
  },
  {
    title: "SciVenture",
    description: "Educational technology platform connecting students with hands-on science experiments. Interactive learning modules, progress tracking, and gamification elements to boost engagement.",
    category: "EdTech Application",
    metrics: [
      { label: "Retention", value: "78%" },
      { label: "Completion", value: "94%" },
    ],
    cardBg: "bg-[hsl(160,20%,16%)]",
    accentBorder: "border-l-emerald-500",
    image: "/images/portfolio/sciventure.png",
  },
  {
    title: "Oxygen Robotics",
    description: "International non-profit platform empowering students to explore AI, robotics, and software development. Features event management, learning resources, mentorship matching, and a global community hub.",
    category: "Non-Profit Platform",
    metrics: [
      { label: "Countries", value: "3+" },
      { label: "Volunteers", value: "30+" },
      { label: "Visibility", value: "+70%" },
    ],
    cardBg: "bg-[hsl(180,15%,18%)]",
    accentBorder: "border-l-teal-500",
    image: "/images/portfolio/oxygen.png",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Featured Work
            </span>
            <h2 className="font-display text-display-sm sm:text-display-md font-semibold text-foreground">
              Real Results From
              <br />
              <span className="text-gradient">Real Projects</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-medium transition-colors group"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6 sm:space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden ${project.cardBg} border border-border/30 transition-all duration-700 hover:border-primary/40 cursor-pointer card-hover animate-in`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}`}>
                  <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-medium text-primary uppercase tracking-wider mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {project.category}
                  </span>
                  
                  <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-3 sm:mb-4 leading-tight group-hover:text-primary transition-colors duration-500">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-md group-hover:text-foreground/70 transition-colors duration-500">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-4 sm:gap-8">
                    {project.metrics.map((metric, metricIndex) => (
                      <div 
                        key={metric.label}
                        className="group/metric"
                      >
                        <div className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-0.5 sm:mb-1 group-hover/metric:text-primary transition-colors duration-300">
                          {metric.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`relative ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}`}>
                  <div className="aspect-video lg:aspect-auto lg:h-full bg-gradient-to-br from-background/20 to-background/5 flex items-center justify-center relative overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={`${project.title} mockup`}
                        className="w-full h-full object-cover group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center z-10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                        <span className="text-xl sm:text-2xl font-display font-bold text-primary">Z</span>
                      </div>
                    )}
                    
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    {/* Hover Arrow */}
                    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-foreground/10 border border-foreground/20 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:scale-110">
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
