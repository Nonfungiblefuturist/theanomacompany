import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Menu, X } from "lucide-react";

const Index = () => {
  const [currentCase, setCurrentCase] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "AI Product Photography & Ads",
      description: "Studio-grade campaigns from two flat shots.",
      icon: "📸"
    },
    {
      title: "100% AI Commercials", 
      description: "Scroll-stoppers, no set build required.",
      icon: "🎬"
    },
    {
      title: "AI-Generated Film Scenes",
      description: "IMAX-ready visuals at indie budgets.",
      icon: "🎭"
    }
  ];

  const features = [
    {
      title: "Efficiency",
      description: "Up to 90% faster and cheaper production",
      icon: "⚡"
    },
    {
      title: "Cinema-grade Quality", 
      description: "Rivals traditional filmmaking",
      icon: "🎯"
    },
    {
      title: "Creative Freedom",
      description: "Tailored styles for ads, shoots, film scenes", 
      icon: "🎨"
    }
  ];

  const caseStudies = [
    {
      title: "Mythic epic reimagined in AI",
      thumbnail: "🏛️"
    },
    {
      title: "Architectural legend docu in hyper-detail",
      thumbnail: "🏗️"
    },
    {
      title: "Psychological thriller proof-of-concept",
      thumbnail: "🧠"
    }
  ];

  const testimonials = [
    {
      quote: "Anoma delivered visuals that would have cost us 10x more with traditional production.",
      author: "M.K.",
      role: "Creative Director"
    },
    {
      quote: "The quality is indistinguishable from real footage. Game-changing for indie filmmakers.",
      author: "S.R.",
      role: "Film Producer"
    },
    {
      quote: "From concept to final cut in days, not months. Incredible speed without compromising quality.",
      author: "J.L.",
      role: "Brand Manager"
    }
  ];

  const faqs = [
    {
      question: "How does AI quality compare to traditional filming?",
      answer: "Our AI generates cinema-grade visuals that rival traditional filmmaking, with full control over lighting, composition, and style."
    },
    {
      question: "What about licensing and rights?",
      answer: "You own full commercial rights to all AI-generated content. No royalties, no usage restrictions."
    },
    {
      question: "Can you maintain character consistency across scenes?",
      answer: "Yes, we use advanced AI training to maintain perfect character consistency throughout your project."
    },
    {
      question: "How do product shots work with just two images?",
      answer: "Our AI analyzes your product from multiple angles and lighting conditions to generate studio-quality campaigns."
    },
    {
      question: "Do you provide training on the process?",
      answer: "Absolutely. We guide you through the entire workflow and provide best practices for optimal results."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/71af5afa-9fe1-4527-acee-8f0ea355d8d4.png" 
                alt="The Anoma Company" 
                className="h-8 w-auto opacity-90"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
                <a href="#why-anoma" className="text-muted-foreground hover:text-primary transition-colors">Why Anoma</a>
                <a href="#case-studies" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</a>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              </div>
            </div>

            <div className="hidden md:block">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Book a Demo
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-muted-foreground hover:text-primary"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#why-anoma" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Why Anoma</a>
              <a href="#case-studies" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">Case Studies</a>
              <a href="#faq" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              <div className="px-3 py-2">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20"></div>
        
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-16">
          <div className="mb-8">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm text-primary font-medium">AI-FIRST CREATIVE STUDIO</span>
            </div>
          </div>
          
          <h1 className="font-anoma text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            AI visuals, delivered before<br />
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              your coffee gets cold.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Studio-grade campaigns, commercials, and film scenes powered by AI. 
            <br className="hidden md:block" />
            Cinema-quality results at unprecedented speed.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Book a free demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-accent/50 font-semibold px-8 py-4 text-lg transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-sm text-accent font-medium">OUR SERVICES</span>
            </div>
            <h2 className="font-anoma text-3xl md:text-5xl font-bold mb-4">
              Transform Visuals with AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge AI solutions that revolutionize how you create and produce visual content
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border/50 hover:bg-card hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer group backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-anoma text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Anoma */}
      <section id="why-anoma" className="py-24 px-4 bg-gradient-to-r from-background to-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm text-primary font-medium">WHY CHOOSE ANOMA</span>
            </div>
            <h2 className="font-anoma text-3xl md:text-5xl font-bold mb-4">
              The Future of Visual Production
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience unmatched quality, speed, and creative freedom with our AI-powered solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 border border-primary/10">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-anoma text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Slider */}
      <section id="case-studies" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-sm text-accent font-medium">CASE STUDIES</span>
            </div>
            <h2 className="font-anoma text-3xl md:text-5xl font-bold mb-4">
              Real Results, Real Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've transformed creative visions into stunning reality with AI
            </p>
          </div>
          
          <div className="relative">
            <div className="flex overflow-hidden rounded-2xl">
              {caseStudies.map((study, index) => (
                <div 
                  key={index}
                  className={`w-full flex-shrink-0 transition-transform duration-700 ease-in-out`}
                  style={{ transform: `translateX(-${currentCase * 100}%)` }}
                >
                  <Card className="bg-gradient-to-br from-card/50 to-card/80 border-border/50 backdrop-blur-sm">
                    <CardContent className="p-16 text-center">
                      <div className="text-9xl mb-8 opacity-80">{study.thumbnail}</div>
                      <h3 className="font-anoma text-3xl font-bold mb-4 text-primary">
                        {study.title}
                      </h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-3">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentCase 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gradient-to-l from-background to-card/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm text-primary font-medium">TESTIMONIALS</span>
            </div>
            <h2 className="font-anoma text-3xl md:text-5xl font-bold mb-4">
              Trusted by Visionaries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the creators who've transformed their workflows with our AI solutions
            </p>
          </div>
          
          <div className="relative">
            <Card className="bg-gradient-to-br from-card/50 to-card/80 border-border/50 backdrop-blur-sm">
              <CardContent className="p-12 md:p-16 text-center">
                <div className="text-7xl mb-8 opacity-60">💬</div>
                <blockquote className="text-xl md:text-2xl font-medium mb-8 text-foreground leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="flex items-center justify-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-lg">{testimonials[currentTestimonial].author}</p>
                    <p className="text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-sm text-accent font-medium">FAQ</span>
            </div>
            <h2 className="font-anoma text-3xl md:text-5xl font-bold mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to the most common questions about our AI visual production services
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-border/50 rounded-2xl px-6 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors"
              >
                <AccordionTrigger className="font-anoma text-left hover:text-primary text-lg py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-anoma text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Visuals?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join the future of visual production. Book a free demo and see how AI can revolutionize your creative workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Book a Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-accent/50 font-semibold px-10 py-4 text-lg transition-all duration-300"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/71af5afa-9fe1-4527-acee-8f0ea355d8d4.png" 
                alt="The Anoma Company" 
                className="h-8 w-auto opacity-90"
              />
              <span className="text-muted-foreground">© 2024 The Anoma Company</span>
            </div>
            
            <div className="flex items-center space-x-8 text-sm">
              <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <span>📞</span>
                <span>Call Us</span>
              </a>
              <a href="mailto:hello@anoma.company" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <span>✉️</span>
                <span>Email</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <span>📅</span>
                <span>Book a Call</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-2xl hover:text-primary transition-colors hover:scale-110 duration-300">🐦</a>
              <a href="#" className="text-2xl hover:text-primary transition-colors hover:scale-110 duration-300">💼</a>
              <a href="#" className="text-2xl hover:text-primary transition-colors hover:scale-110 duration-300">📸</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;