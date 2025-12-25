import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "£1,800",
    description: "Perfect for small projects and MVPs",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "2 revision rounds",
      "1 week delivery",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "£4,500",
    description: "Ideal for growing businesses",
    features: [
      "Up to 15 pages",
      "Custom animations",
      "Advanced SEO",
      "CMS integration",
      "5 revision rounds",
      "2 weeks delivery",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale projects",
    features: [
      "Unlimited pages",
      "Full branding package",
      "E-commerce ready",
      "Custom integrations",
      "Unlimited revisions",
      "Dedicated manager",
      "24/7 support",
      "Performance SLA",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 border-t border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-sm sm:text-display-md font-semibold text-foreground mb-4">
            Simple, transparent <span className="text-gradient animate-shimmer">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`group relative rounded-2xl p-6 sm:p-8 border transition-all duration-700 ${
                plan.popular
                  ? "border-primary bg-card scale-105 z-10 shadow-2xl shadow-primary/20"
                  : "border-border/60 bg-card/30 hover:border-primary/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
              }`}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                plan.popular ? "opacity-100" : ""
              }`}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/10 animate-gradient" />
              </div>

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg shadow-primary/30 animate-bounce-subtle">
                    ⭐ Most popular
                  </div>
                </div>
              )}

              <div className="relative z-10 mb-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-sm text-muted-foreground">/project</span>
                  )}
                </div>
              </div>

              <ul className="relative z-10 space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={feature} 
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary group-hover:scale-125 transition-all duration-300">
                      <Check className="w-3 h-3 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`relative z-10 w-full overflow-hidden group/btn transition-all duration-500 ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
                    : "bg-foreground hover:bg-primary text-background hover:scale-105"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
