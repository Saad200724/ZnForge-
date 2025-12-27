import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function WorkingProcedure() {
  const procedures = [
    {
      step: "01",
      title: "Idea Analysis",
      description: "We dive deep into understanding your content vision, target audience, and creative goals. This foundation shapes every decision in the production process.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      position: "left"
    },
    {
      step: "02",
      title: "Writing Content",
      description: "Our creative team scripts and structures your content for maximum engagement. We ensure every frame tells your story effectively.",
      image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&h=300&fit=crop",
      position: "right"
    },
    {
      step: "03",
      title: "Editing the Video",
      description: "Professional editing brings your vision to life. We use cutting-edge techniques and software to create seamless, engaging visuals.",
      image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=300&fit=crop",
      position: "left"
    },
    {
      step: "04",
      title: "Creating Thumbnail",
      description: "Eye-catching thumbnails are crucial for click-through rates. We design custom thumbnails that capture attention and represent your content.",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop",
      position: "right"
    },
    {
      step: "05",
      title: "Post the Video",
      description: "Strategic posting and optimization across platforms ensures maximum reach and engagement. We handle all the technical details.",
      image: "https://images.unsplash.com/photo-1460925895917-adf4ee868993?w=400&h=300&fit=crop",
      position: "left"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">OUR STRATEGY TO GET</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              You Loads With Content
            </h1>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary to-transparent hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-20 md:space-y-32">
              {procedures.map((item, index) => (
                <div 
                  key={index}
                  className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center relative`}
                >
                  {/* Content Side */}
                  <div className={`order-2 md:order-${item.position === 'left' ? '2' : '1'}`}>
                    <div className="space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        {item.step}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className={`order-1 md:order-${item.position === 'left' ? '1' : '2'}`}>
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-primary/20 group hover:border-primary/50 transition-all duration-300">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      
                      {/* Step Indicator */}
                      <div className="absolute -right-6 md:-right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg md:text-2xl border-4 border-background shadow-lg shadow-primary/30 hidden md:flex">
                        {item.step}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              Ready to Create Amazing Content?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's bring your vision to life with our proven video editing process.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
              Get Started Today
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
