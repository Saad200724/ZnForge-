import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              Craft stunning digital experiences
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals.
            </p>
          </div>

          {/* Book a Call Button - Dark Style */}
          <Button className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 h-12 rounded-xl flex items-center gap-3 mx-auto group transition-all duration-300 shadow-lg hover:shadow-xl">
            <svg 
              viewBox="0 0 24 24" 
              className="w-5 h-5" 
              fill="currentColor"
            >
              {/* Google Meet icon representation */}
              <rect x="2" y="2" width="8" height="8" fill="#34A853" />
              <rect x="14" y="2" width="8" height="8" fill="#FBBC04" />
              <rect x="2" y="14" width="8" height="8" fill="#EA4335" />
              <rect x="14" y="14" width="8" height="8" fill="#4285F4" />
            </svg>
            <span className="text-base">Book a call</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
