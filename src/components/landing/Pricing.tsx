import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Website Design",
    subtitle: "Ideal for Startup Owners, MVP Builders",
    price: "£1,800",
    features: [
      "Design Style Guide",
      "Fully Responsive Design",
      "3 Page Website",
      "SEO Optimization",
      "1 Month Support",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "E-Commerce Solution",
    subtitle: "Perfect for Online Store Owners",
    price: "£4,500",
    features: [
      "Product Management System",
      "Secure Payment Gateway",
      "Inventory Tracking",
      "Customer Dashboard",
      "3 Months Support",
    ],
    buttonText: "Choose Plan",
    popular: true,
  },
  {
    name: "Enterprise Package",
    subtitle: "For Scaling Businesses",
    price: "£8,900",
    features: [
      "Custom CMS Integration",
      "Advanced Analytics",
      "Multi-language Support",
      "Priority Support",
      "6 Months Maintenance",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 border-t border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-sm sm:text-display-md font-semibold text-foreground mb-4">
            Smart Solutions For Every Stage of{" "}
            <span className="text-gradient animate-shimmer italic">Growth</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group relative rounded-2xl border border-border/60 bg-card/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
              
              {/* Features section */}
              <div className="p-6 sm:p-8 flex-1">
                <p className="text-sm font-medium text-muted-foreground mb-4">What you will get</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                        <Check className="w-3 h-3 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom section - Plan info and button */}
              <div className="p-6 sm:p-8 pt-0">
                <div className="border-t border-border/40 pt-6">
                  <h3 className="font-display text-lg font-semibold text-primary mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                  <div className="mb-6">
                    <span className="font-display text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  <Button
                    className={`w-full rounded-lg py-5 font-medium transition-all duration-300 ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30"
                        : "bg-muted/50 hover:bg-primary text-foreground hover:text-primary-foreground border border-border/60 hover:border-primary"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
