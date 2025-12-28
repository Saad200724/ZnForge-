import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  previousPrice?: string | null;
  features: string[];
  buttonText: string;
  popular: boolean;
}

const membershipPlans: PricingPlan[] = [
  {
    name: "Silver",
    subtitle: "Essential tools for starting businesses",
    price: "2,000",
    previousPrice: "2,500",
    features: [
      "Core AI Integrations",
      "Standard Support",
      "Cloud Hosting",
      "Weekly Analytics",
      "Basic Automation",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Gold",
    subtitle: "Advanced features for growing teams",
    price: "3,000",
    previousPrice: "5,000",
    features: [
      "Custom AI Models",
      "Priority Support",
      "Unlimited Hosting",
      "Daily Analytics",
      "Advanced Automation",
    ],
    buttonText: "Choose Gold",
    popular: true,
  },
  {
    name: "Platinum",
    subtitle: "Full-scale solutions for large enterprises",
    price: "5,500",
    previousPrice: "10,000",
    features: [
      "Private Infrastructure",
      "24/7 Dedicated Support",
      "Multi-Region Hosting",
      "Real-time Analytics",
      "Full System Integration",
    ],
    buttonText: "Go Platinum",
    popular: false,
  },
  {
    name: "Custom Build",
    subtitle: "Tailored to your specific needs",
    price: "Custom",
    previousPrice: null,
    features: [
      "Bespoke Development",
      "White-label Solution",
      "Internal Team Training",
      "Security Auditing",
      "Long-term Strategy",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

const projectPlans: PricingPlan[] = [
  {
    name: "Silver",
    subtitle: "Project-based MVP development",
    price: "15,000",
    previousPrice: null,
    features: [
      "MVP Design & Build",
      "Standard Features",
      "3-Month Warranty",
      "Launch Assistance",
      "Technical Documentation",
    ],
    buttonText: "Start Project",
    popular: false,
  },
  {
    name: "Gold",
    subtitle: "Comprehensive project delivery",
    price: "30,000",
    previousPrice: null,
    features: [
      "Full Product Lifecycle",
      "Advanced Functionality",
      "6-Month Support",
      "Market Strategy",
      "Scalability Planning",
    ],
    buttonText: "Start Project",
    popular: true,
  },
  {
    name: "Platinum",
    subtitle: "Large-scale complex development",
    price: "60,000",
    previousPrice: null,
    features: [
      "Enterprise Grade Build",
      "Complex Integrations",
      "12-Month Support",
      "Performance Tuning",
      "Security Hardening",
    ],
    buttonText: "Start Project",
    popular: false,
  },
  {
    name: "Custom Build",
    subtitle: "Specialized project requirements",
    price: "Quote",
    previousPrice: null,
    features: [
      "Custom Architecture",
      "Dedicated Project Team",
      "On-site Consultation",
      "Compliance Ready",
      "Exclusive IP Rights",
    ],
    buttonText: "Contact Us",
    popular: false,
  },
];

export function Pricing() {
  const [pricingType, setPricingType] = useState<"membership" | "project">("membership");

  const activePlans = pricingType === "membership" ? membershipPlans : projectPlans;

  return (
    <section id="pricing" className="py-24 lg:py-32 border-t border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-sm sm:text-display-md font-semibold text-foreground mb-8">
            Smart Solutions For Every Stage of{" "}
            <span className="text-gradient animate-shimmer italic">Growth</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 px-4">
            <Button
              variant={pricingType === "membership" ? "default" : "outline"}
              onClick={() => setPricingType("membership")}
              className={`w-full sm:w-auto rounded-full px-8 py-6 text-base sm:text-lg transition-all duration-300 ${
                pricingType === "membership" ? "shadow-lg shadow-primary/20" : ""
              }`}
            >
              Membership Based
            </Button>
            <Button
              variant={pricingType === "project" ? "default" : "outline"}
              onClick={() => setPricingType("project")}
              className={`w-full sm:w-auto rounded-full px-8 py-6 text-base sm:text-lg transition-all duration-300 ${
                pricingType === "project" ? "shadow-lg shadow-primary/20" : ""
              }`}
            >
              Project Based
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch px-4">
          {activePlans.map((plan) => (
            <div
              key={plan.name}
              className="group relative rounded-2xl border border-border/60 bg-card/20 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full"
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Features section */}
              <div className="p-6 flex-1">
                <p className="text-sm font-medium text-muted-foreground mb-4">What you will get</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary transition-all duration-300">
                        <Check className="w-3 h-3 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom section - Plan info and button */}
              <div className="p-6 pt-0">
                <div className="border-t border-border/40 pt-6">
                  <h3 className="font-display text-lg font-semibold text-primary mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 h-10">{plan.subtitle}</p>
                    <div className="mb-6 h-12 flex flex-col justify-end">
                      {plan.previousPrice && (
                        <span className="text-sm font-medium line-through decoration-[#299666]/50 block text-[#299666]">
                          {plan.previousPrice} TK
                        </span>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-3xl font-bold text-foreground">
                          {plan.price} TK
                        </span>
                      </div>
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
