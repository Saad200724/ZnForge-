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
    <section id="pricing" className="py-32 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-sm sm:text-display-md font-semibold text-foreground mb-4">
            Simple, transparent <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? "border-primary/40 bg-card glow-sm"
                  : "border-border/60 bg-card/30 hover:border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    Most popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-semibold text-foreground">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-sm text-muted-foreground">/project</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full group ${
                  plan.popular
                    ? "bg-foreground hover:bg-foreground/90 text-background"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
              >
                Get started
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
