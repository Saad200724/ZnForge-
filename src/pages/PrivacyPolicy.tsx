import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-invert space-y-8">
            <div>
              <p className="text-muted-foreground mb-6">Last updated: January 2026</p>
              <p className="text-muted-foreground leading-relaxed">
                At ZnForge, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </div>

            {[
              { title: "1. Information We Collect", content: "We collect information you provide directly, such as when you contact us, submit forms, or use our services. This may include your name, email address, phone number, and project details." },
              { title: "2. How We Use Your Information", content: "We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, and communicate with you about our offerings." },
              { title: "3. Information Sharing", content: "We do not sell, trade, or rent your personal information to third parties. We may share information only when necessary to provide our services or comply with legal obligations." },
              { title: "4. Data Security", content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction." },
              { title: "5. Cookies & Tracking", content: "Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser." },
              { title: "6. Your Rights", content: "You have the right to access, correct, or delete your personal information. Contact us to exercise these rights." },
              { title: "7. Changes to This Policy", content: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website." }
            ].map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}

            <div className="mt-12 p-6 rounded-xl border border-border/40 bg-card">
              <p className="text-muted-foreground">
                If you have questions about our Privacy Policy, please contact us at privacy@znforge.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
