import { Check, X, Minus } from "lucide-react";

const comparisonData = [
  { feature: "Fixed project pricing", znforge: true, agency: false, freelancer: "varies" },
  { feature: "Dedicated project manager", znforge: true, agency: true, freelancer: false },
  { feature: "Fast turnaround (1-2 weeks)", znforge: true, agency: false, freelancer: "varies" },
  { feature: "Scalable team", znforge: true, agency: true, freelancer: false },
  { feature: "Quality guarantee", znforge: true, agency: true, freelancer: false },
  { feature: "Revisions included", znforge: true, agency: "varies", freelancer: "varies" },
  { feature: "Competitive rates", znforge: true, agency: false, freelancer: true },
  { feature: "Reliable communication", znforge: true, agency: true, freelancer: "varies" },
];

function StatusIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
        <Check className="w-3.5 h-3.5 text-primary" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
        <X className="w-3.5 h-3.5 text-destructive" />
      </div>
    );
  }
  return (
    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
      <Minus className="w-3.5 h-3.5 text-muted-foreground" />
    </div>
  );
}

export function Comparison() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-sm sm:text-display-md font-semibold text-foreground mb-4">
            How we <span className="text-gradient">compare</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why leading companies choose ZnForge
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border border-border/60 overflow-hidden bg-card/30">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 p-6 border-b border-border/40 bg-secondary/30">
              <div className="text-sm font-medium text-muted-foreground">Feature</div>
              <div className="text-center">
                <span className="text-sm font-semibold text-primary">ZnForge</span>
              </div>
              <div className="text-center">
                <span className="text-sm font-medium text-muted-foreground">Agency</span>
              </div>
              <div className="text-center">
                <span className="text-sm font-medium text-muted-foreground">Freelancer</span>
              </div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-4 gap-4 p-6 ${
                  index !== comparisonData.length - 1 ? "border-b border-border/40" : ""
                }`}
              >
                <div className="text-sm text-foreground">{row.feature}</div>
                <div className="flex justify-center">
                  <StatusIcon value={row.znforge} />
                </div>
                <div className="flex justify-center">
                  <StatusIcon value={row.agency} />
                </div>
                <div className="flex justify-center">
                  <StatusIcon value={row.freelancer} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
