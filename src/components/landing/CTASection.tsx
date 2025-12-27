import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <style>{`
        @keyframes sparkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .sparkle-text {
          position: relative;
          display: inline-block;
        }
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00d084;
          border-radius: 50%;
          pointer-events: none;
        }
        .sparkle:nth-child(1) { top: -10px; left: 10%; animation: sparkle 2s infinite; }
        .sparkle:nth-child(2) { top: 5px; right: 15%; animation: sparkle 2.3s infinite; }
        .sparkle:nth-child(3) { top: -15px; right: 5%; animation: sparkle 1.8s infinite; }
        .sparkle:nth-child(4) { bottom: 0; left: 5%; animation: sparkle 2.1s infinite; }
        .sparkle:nth-child(5) { top: -8px; left: 50%; animation: sparkle 1.9s infinite; }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              <span className="sparkle-text">
                Craft stunning digital experiences
                <span className="sparkle"></span>
                <span className="sparkle"></span>
                <span className="sparkle"></span>
                <span className="sparkle"></span>
                <span className="sparkle"></span>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals.
            </p>
          </div>

          {/* Book a Call Button - Dark Style */}
          <Button className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 h-12 rounded-xl flex items-center gap-3 mx-auto group transition-all duration-300 shadow-lg hover:shadow-xl">
            <img 
              src="/google-meet-icon.png" 
              alt="Google Meet" 
              className="w-5 h-5"
            />
            <span className="text-base">Book a call</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
