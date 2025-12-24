const logos = [
  { name: "Stripe", initial: "S" },
  { name: "Vercel", initial: "V" },
  { name: "Linear", initial: "L" },
  { name: "Notion", initial: "N" },
  { name: "Figma", initial: "F" },
  { name: "Slack", initial: "S" },
  { name: "Discord", initial: "D" },
  { name: "Spotify", initial: "S" },
];

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by innovative companies worldwide
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-3 flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="font-bold text-muted-foreground">{logo.initial}</span>
                </div>
                <span className="text-lg font-semibold text-muted-foreground/70">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}