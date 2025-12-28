import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function Booking() {
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
        
        <div className="rounded-2xl border border-border/40 bg-card/20 backdrop-blur-sm overflow-hidden min-h-[700px] flex items-center justify-center">
          <Cal
            calLink="znforge/consultation"
            style={{ width: "100%", height: "100%", minHeight: "700px" }}
            config={ { layout: "month_view", theme: "dark" } }
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
