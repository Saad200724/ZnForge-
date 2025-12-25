import { ArrowUpRight, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "UI/UX Design",
    metric: "+340%",
    metricLabel: "User engagement",
  },
  {
    title: "E-Commerce Platform",
    category: "Full-Stack Development",
    metric: "2.5x",
    metricLabel: "Revenue growth",
  },
  {
    title: "SaaS Marketing Site",
    category: "Website Design",
    metric: "+85%",
    metricLabel: "Lead generation",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-display-sm sm:text-display-md font-semibold text-foreground mb-4">
              Featured <span className="text-gradient">work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Real results from real projects. See how we've helped businesses transform their digital presence.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-medium transition-colors group"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-xl border border-border/60 overflow-hidden hover:border-border transition-all duration-300 hover-lift cursor-pointer bg-card/50"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary via-secondary/50 to-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-lg font-display font-bold text-primary">Z</span>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-background" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="inline-block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  {project.title}
                </h3>

                {/* Metric */}
                <div className="flex items-center gap-2 pt-4 border-t border-border/40">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-2xl font-semibold text-foreground">{project.metric}</span>
                  <span className="text-sm text-muted-foreground">{project.metricLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
