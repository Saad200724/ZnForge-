import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A simple landing page typically takes 1-2 weeks, while a full website can take 4-8 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What's included in your pricing?",
    answer:
      "Our pricing includes design, development, basic SEO setup, responsive design for all devices, and a set number of revision rounds. We provide transparent quotes with no hidden fees.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes! We offer monthly maintenance packages that include updates, security patches, performance monitoring, and content updates. This ensures your site stays fast, secure, and up-to-date.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, battle-tested technologies including React, Next.js, TypeScript, and Tailwind CSS for frontend development. For backends, we work with Node.js, PostgreSQL, and various headless CMS options.",
  },
  {
    question: "Can you help with an existing website?",
    answer:
      "Absolutely! We can help with redesigns, performance optimisation, adding new features, or migrating to a better technology stack. We'll assess your current site and recommend the best path forward.",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "We use a combination of Slack, email, and weekly video calls to keep you updated. You'll have access to a project dashboard where you can track progress, provide feedback, and review deliverables.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-sm sm:text-display-md font-semibold text-foreground mb-4">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border/60 bg-card/30 px-6 data-[state=open]:border-primary/40 data-[state=open]:bg-card/50 transition-all duration-500 hover:border-border animate-in card-hover"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5 text-sm sm:text-base hover:text-primary transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
