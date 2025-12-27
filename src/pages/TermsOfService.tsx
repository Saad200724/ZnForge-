import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground">Terms of Service</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-invert space-y-8">
            <div>
              <p className="text-muted-foreground mb-6">Last updated: December 2025</p>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to ZnForge. These Terms of Service govern your use of our website and services. By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            {[
              { title: "1. Acceptance of Terms", content: "By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service." },
              { title: "2. Use License", content: "Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title." },
              { title: "3. Disclaimer", content: "The materials on ZnForge's website are provided on an 'as is' basis. ZnForge makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights." },
              { title: "4. Limitations", content: "In no event shall ZnForge or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ZnForge's website." },
              { title: "5. Accuracy of Materials", content: "The materials appearing on ZnForge's website could include technical, typographical, or photographic errors. ZnForge does not warrant that any of the materials on its website are accurate, complete, or current." },
              { title: "6. Links", content: "ZnForge has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ZnForge of the site." },
              { title: "7. Modifications", content: "ZnForge may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service." },
              { title: "8. Governing Law", content: "These terms and conditions are governed by and construed in accordance with the laws of California, and you irrevocably submit to the exclusive jurisdiction of the courts in that location." }
            ].map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}

            <div className="mt-12 p-6 rounded-xl border border-border/40 bg-card">
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at legal@znforge.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
