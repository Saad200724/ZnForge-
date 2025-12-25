import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Meow Meow Pet Shop",
    description: "A complete e-commerce platform redesign for a premium pet supplies retailer. We built a seamless shopping experience with AI-powered product recommendations and subscription management for recurring orders.",
    category: "E-Commerce Platform",
    metrics: [
      { label: "Conversion Rate", value: "340%" },
      { label: "Revenue Growth", value: "85%" },
    ],
    bgColor: "bg-[hsl(35,90%,94%)]",
    darkBgColor: "dark:bg-[hsl(35,40%,18%)]",
    accentColor: "text-[hsl(35,90%,45%)]",
  },
  {
    title: "Oxygen Robotics",
    description: "Enterprise-grade web application for industrial robotics company. Features real-time monitoring dashboard, predictive maintenance analytics, and comprehensive fleet management system.",
    category: "SaaS Platform",
    metrics: [
      { label: "User Engagement", value: "92%" },
      { label: "Operational Efficiency", value: "67%" },
    ],
    bgColor: "bg-[hsl(200,80%,95%)]",
    darkBgColor: "dark:bg-[hsl(200,40%,18%)]",
    accentColor: "text-[hsl(200,80%,45%)]",
  },
  {
    title: "SciVenture",
    description: "Educational technology platform connecting students with hands-on science experiments. Interactive learning modules, progress tracking, and gamification elements to boost engagement.",
    category: "EdTech Application",
    subInfo: "Featured on Product Hunt",
    metrics: [
      { label: "Student Retention", value: "78%" },
      { label: "Course Completion", value: "94%" },
    ],
    bgColor: "bg-[hsl(150,70%,92%)]",
    darkBgColor: "dark:bg-[hsl(150,40%,18%)]",
    accentColor: "text-[hsl(150,70%,35%)]",
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
              Powering Growth Across Every
              <br />
              <span className="text-gradient">Frontier</span>
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
              className={`group relative rounded-2xl lg:rounded-3xl overflow-hidden ${project.bgColor} ${project.darkBgColor} p-6 lg:p-10 transition-all duration-300 hover:scale-[1.01] cursor-pointer`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider mb-4 ${project.accentColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {project.category}
                  </span>
                  
                  <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-lg">
                    {project.description}
                  </p>

                  {project.subInfo && (
                    <p className="text-xs text-muted-foreground mb-4">{project.subInfo}</p>
                  )}

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[4/3] rounded-xl lg:rounded-2xl overflow-hidden bg-background/80 border border-border/20 shadow-2xl group-hover:shadow-3xl transition-shadow">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <span className="text-2xl font-display font-bold text-primary">Z</span>
                      </div>
                    </div>
                    {/* Hover Arrow */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4 text-background" />
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
