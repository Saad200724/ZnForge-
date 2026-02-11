import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  previousPrice?: string | null;
  features: string[];
  buttonText: string;
  popular: boolean;
}

const projectPlans: PricingPlan[] = [
  {
    name: "Starter Store",
    subtitle: "Custom Landing Page & Stripe Integration",
    price: "£750",
    previousPrice: null,
    features: [
      "Custom Landing Page",
      "Stripe Checkout Integration",
      "Mobile Responsive (PWA Ready)",
      "1 Month Free Support",
    ],
    buttonText: "Start Project",
    popular: false,
  },
  {
    name: "Growth Scale",
    subtitle: "Multi-Location Inventory Sync & SEO",
    price: "£1,500",
    previousPrice: null,
    features: [
      "Multi-Location Inventory Sync",
      "Advanced SEO for London",
      "Customer Loyalty System",
      "3 Months Maintenance",
    ],
    buttonText: "Start Project",
    popular: true,
  },
  {
    name: "Business Suite",
    subtitle: "Full Custom Automation & Management",
    price: "£3,000+",
    previousPrice: null,
    features: [
      "Full Custom Automation",
      "Dedicated Account Manager",
      "Unlimited Revisions",
      "1 Year Server Management",
    ],
    buttonText: "Start Project",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 border-t border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-sm sm:text-display-md font-semibold text-foreground mb-8">
            Smart Solutions For Every Stage of{" "}
            <span className="inline-block">
              <span className="text-gradient animate-shimmer italic pb-1">Growth</span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch px-4">
          {projectPlans.map((plan) => (
            <div
              key={plan.name}
              className="group relative rounded-2xl border border-border/60 bg-card/20 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full"
            >
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <div className="p-6 flex-1">
                <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-normal">Included</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary transition-all duration-300">
                        <Check className="w-3 sm:w-3 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 pt-0">
                <div className="border-t border-border/40 pt-6">
                  <h3 className="font-display text-lg font-semibold text-primary mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 h-10">{plan.subtitle}</p>
                    <div className="mb-6 h-12 flex flex-col justify-end">
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-3xl font-bold text-foreground">
                          {plan.price}
                        </span>
                      </div>
                    </div>
                    <Link to="/book" className="w-full">
                      <Button
                        className={`w-full rounded-lg h-12 py-5 text-sm font-medium transition-all duration-300 ${
                          plan.popular
                            ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30"
                            : "bg-muted/50 hover:bg-primary text-foreground hover:text-primary-foreground border border-border/60 hover:border-primary"
                        }`}
                      >
                        {plan.name === "Business Suite" ? "Contact Us" : "Start Project"}
                      </Button>
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
