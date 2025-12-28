import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground">Cookie Policy</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-invert space-y-8">
            <div>
              <p className="text-muted-foreground mb-6">Last updated: January 2026</p>
              <p className="text-muted-foreground leading-relaxed">
                ZnForge uses cookies and similar tracking technologies to enhance your browsing experience and understand how you use our website.
              </p>
            </div>

            {[
              { title: "1. What are Cookies?", content: "Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, improve functionality, and understand user behavior." },
              { title: "2. Types of Cookies We Use", content: "Essential Cookies: Required for website functionality. Analytical Cookies: Help us understand how visitors use our site. Marketing Cookies: Track your interests for personalized content and advertising." },
              { title: "3. Essential Cookies", content: "These cookies are necessary for the website to function properly and cannot be disabled. They enable core functionality such as security and network management." },
              { title: "4. Analytical Cookies", content: "We use analytical cookies to understand how visitors interact with our website. This information helps us improve our services and user experience." },
              { title: "5. Marketing & Advertising Cookies", content: "These cookies track your interests and browsing behavior to deliver personalized content and advertisements. You can opt-out of these cookies through your browser settings." },
              { title: "6. Third-Party Cookies", content: "Some third-party services on our website may use cookies. We do not control these cookies and recommend reviewing their cookie policies directly." },
              { title: "7. Cookie Control & Management", content: "You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. Note that disabling cookies may affect website functionality." },
              { title: "8. Updates to This Policy", content: "We may update this Cookie Policy from time to time to reflect changes in technology and legal requirements. Please review this page periodically for updates." }
            ].map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}

            <div className="mt-12 p-6 rounded-xl border border-border/40 bg-card">
              <p className="text-muted-foreground">
                For more information about our cookie practices, contact us at cookies@znforge.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
