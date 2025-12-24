import { ArrowUpRight, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "UI/UX Design",
    metric: "+340%",
    metricLabel: "User Engagement",
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    metric: "2.5x",
    metricLabel: "Revenue Growth",
    color: "from-violet-500/20 to-pink-500/20",
  },
  {
    title: "SaaS Marketing Site",
    category: "Website Design",
    metric: "85%",
    metricLabel: "Lead Increase",
    color: "from-orange-500/20 to-red-500/20",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Real results from real projects. See how we've helped businesses transform their digital presence.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />
              
              {/* Content */}
              <div className="relative p-8 h-80 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-background/50 backdrop-blur-sm text-xs font-medium text-foreground mb-4">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                </div>

                {/* Metric */}
                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{project.metricLabel}</span>
                    </div>
                    <span className="text-4xl font-bold text-foreground">{project.metric}</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
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