import { ArrowUpRight } from "lucide-react";
import meowMeowImage from "@/assets/portfolio-meowmeow.png";

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
    image: meowMeowImage,
  },
  {
    title: "Oxygen Robotics",
    description: "International non-profit platform empowering students to explore AI, robotics, and software development. Features event management, learning resources, mentorship matching, and a global community hub.",
    category: "Non-Profit Platform",
    metrics: [
      { label: "Students Reached", value: "50K+" },
      { label: "Countries", value: "32" },
    ],
    cardBg: "bg-[hsl(180,15%,18%)]",
    accentBorder: "border-l-teal-500",
    image: null,
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
    image: null,
  },
];

export function Portfolio() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-background">
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
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden ${project.cardBg} border border-border/30 transition-all duration-300 hover:border-border/60 cursor-pointer`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-wider mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {project.category}
                  </span>
                  
                  <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-8">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`relative ${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-gradient-to-br from-background/20 to-background/5 flex items-center justify-center relative overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={`${project.title} mockup`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center z-10">
                        <span className="text-2xl font-display font-bold text-primary">Z</span>
                      </div>
                    )}
                    
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                    
                    {/* Hover Arrow */}
                    <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-foreground/10 border border-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-foreground group-hover:border-foreground">
                      <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-background transition-colors" />
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
