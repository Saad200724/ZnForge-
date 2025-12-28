import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Navbar } from "@/components/landing/Navbar";

export default function Booking() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#299666" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Schedule a <span className="text-gradient">Consultation</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Book a one-on-one consultation with our experts to discuss your software needs. 
            Select a time that works for you and let's create something extraordinary.
          </p>
        </div>
        
        <div className="rounded-2xl border border-border/40 bg-card/20 backdrop-blur-sm overflow-hidden min-h-[800px] flex items-center justify-center">
          <Cal
            calLink="znforge"
            style={{ width: "100%", height: "800px" }}
            config={ { layout: "month_view", theme: "dark" } }
          />
        </div>
      </main>
      
      {/* Minimal Footer for Booking Page */}
      <footer className="relative w-full flex justify-center pointer-events-none overflow-hidden py-12">
        <span className="font-display text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold leading-none select-none whitespace-nowrap text-foreground/[0.04] animate-pulse">
          ZnForge
        </span>
        {/* Fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background to-transparent" />
      </footer>
    </div>
  );
}
