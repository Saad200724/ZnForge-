const companies = [
  { name: "Stripe", logo: "S" },
  { name: "Vercel", logo: "▲" },
  { name: "Linear", logo: "L" },
  { name: "Notion", logo: "N" },
  { name: "Figma", logo: "F" },
  { name: "Slack", logo: "#" },
  { name: "Discord", logo: "D" },
  { name: "Shopify", logo: "S" },
  { name: "MongoDB", logo: "M" },
  { name: "Supabase", logo: "⚡" },
];

export function TrustedBy() {
  return (
    <section className="py-20 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-12 tracking-wide">
          Trusted by innovative companies worldwide
        </p>
        
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex gap-16 animate-marquee">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex items-center gap-3 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/50 border border-border/40 flex items-center justify-center">
                  <span className="font-semibold text-muted-foreground text-sm">{company.logo}</span>
                </div>
                <span className="text-base font-medium text-muted-foreground whitespace-nowrap">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
