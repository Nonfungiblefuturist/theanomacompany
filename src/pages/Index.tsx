import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "AI Advertising & Marketing",
      description: "Revolutionary AI-powered advertising solutions that transform your brand presence with stunning visual campaigns.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
      features: [
        "AI-generated product photography and lifestyle shots",
        "Dynamic social media content at scale",
        "Brand-consistent visual campaigns across platforms"
      ],
      gradient: "from-primary/20 to-accent/20"
    },
    {
      title: "AI Film Production", 
      description: "Cinema-quality film production using cutting-edge AI technology that rivals traditional VFX and cinematography.",
      image: "https://images.unsplash.com/photo-1518675219903-c682c4b16b7e?w=800&h=400&fit=crop",
      features: [
        "Ultra-photorealistic film scenes for theaters",
        "Character consistency across sequences",
        "Cost-effective alternative to traditional VFX"
      ],
      gradient: "from-accent/20 to-cosmic/20"
    },
    {
      title: "AI Software Solutions",
      description: "Custom AI-powered software tools and applications designed to revolutionize your creative workflows.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      features: [
        "Custom AI content generation platforms",
        "Automated creative workflow systems",
        "Integration with existing production pipelines"
      ],
      gradient: "from-cosmic/20 to-amber/20"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your vision, brand identity, and project requirements to develop a tailored AI-powered creative strategy.",
      icon: "🎯"
    },
    {
      step: "02", 
      title: "AI Model Selection",
      description: "Our team selects and fine-tunes the most suitable AI models based on your specific creative needs and desired outcomes.",
      icon: "🤖"
    },
    {
      step: "03",
      title: "Creative Development",
      description: "We blend human creativity with AI precision to develop your visual content, ensuring brand consistency and artistic excellence.",
      icon: "🎨"
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Every output undergoes rigorous quality checks and refinements to meet cinema-grade standards before delivery.",
      icon: "✨"
    }
  ];

  const benefits = [
    {
      title: "Efficiency",
      description: "Save up to 90% on both time and production costs.",
      icon: "⚡"
    },
    {
      title: "Quality", 
      description: "Achieve top-tier visuals matching traditional filmmaking.",
      icon: "🎯"
    },
    {
      title: "Flexibility",
      description: "Custom solutions for ads, shoots, and film scenes.",
      icon: "🎨"
    },
    {
      title: "Innovation",
      description: "Stay ahead with cutting-edge AI technology.",
      icon: "🚀"
    }
  ];

  const caseStudies = [
    {
      title: "Epic Cinematic Experience: A Modern Masterpiece",
      description: "Experience an epic cinematic journey like never before in this AI-generated masterpiece. Witness stunning visuals and innovative storytelling brought to life with cutting-edge technology.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop"
    },
    {
      title: "Architectural Wonder: A Monument of Innovation",
      description: "Step into the world of architectural grandeur with this AI-crafted documentary. Explore design excellence and cultural significance through the blend of technology and artistry.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
    },
    {
      title: "The Visionary: An AI-Generated Creative Journey",
      description: "Explore the enigmatic world of creativity through this AI-crafted film that delves into innovation, storytelling, and the future of visual content.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop"
    }
  ];

  const faqs = [
    {
      question: "Can AI-made videos match traditional film quality?",
      answer: "Yes, they can. Our work has been tested on commercial theatre screens. However, the quality depends on the complexity of the video."
    },
    {
      question: "Are there copyright issues with AI content?",
      answer: "No, all AI-generated content we create is fully licensed for commercial use."
    },
    {
      question: "Can characters stay consistent in AI films?",
      answer: "Yes, character faces can stay consistent. However, small details like specific jewelry or clothing designs might vary."
    },
    {
      question: "Can AI be used for product photography?",
      answer: "Yes, AI product photography is the future for eCommerce. It saves costs and improves content quality."
    },
    {
      question: "Do you offer training for AI filmmaking?",
      answer: "We're working on The Anoma Creator's Program to teach and support creative minds."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Nebula Effects */}
      <div className="nebula-effect nebula-left"></div>
      <div className="nebula-effect nebula-right"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/38e4e5bc-e33c-414c-ab90-cfc5468f67a1.png" 
                alt="Anoma Company" 
                className="h-40 w-auto pt-8 pb-6"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
                <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-colors">Why choose us</a>
                <a href="#case-study" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
                <a href="#testimonial" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
                <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ's</a>
              </div>
            </div>

            <div className="hidden md:block">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 button-smooth">
                Get in touch
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-muted-foreground hover:text-foreground"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border/10">
            <div className="px-6 py-4 space-y-2">
              <a href="#services" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#why-us" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Why choose us</a>
              <a href="#case-study" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
              <a href="#testimonial" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
              <a href="#faq" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">FAQ's</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/c40680e6-8093-4681-8fcf-e6b6356d9ef2.png')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight text-white animate-fade-up">
            AI-Powered Advertising &<br />
            Cinematic Visuals
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-up-delay-1">
            Lightning-fast creative solutions that deliver stunning results ahead of schedule.
          </p>
          
          <div className="pt-8 animate-fade-up-delay-2">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-6 text-lg button-smooth">
              Book a Free Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-primary flex-1 max-w-16"></div>
              <span className="text-sm font-medium text-primary">Our Services</span>
              <div className="h-px bg-primary flex-1 max-w-16"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
              Advertising | Films | Software<br />
              <span className="text-primary">All developed through AI</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`border-border/50 hover:border-accent/30 transition-all duration-300 overflow-hidden group hover-lift-smooth animate-fade-up-delay-1 bg-gradient-to-br ${service.gradient}`}>
                <CardContent className="p-8 relative">
                  <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <ArrowRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          index === 0 ? 'text-amber' : 
                          index === 1 ? 'text-accent' : 
                          'text-cosmic'
                        }`} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-primary flex-1 max-w-16"></div>
              <span className="text-sm font-medium text-primary">Why Choose Us?</span>
              <div className="h-px bg-primary flex-1 max-w-16"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
              What's So Special About The Anoma Company
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors text-center p-8 animate-scale-in hover-lift-smooth">
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-medium mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="our-process" className="py-24 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-primary flex-1 max-w-16"></div>
              <span className="text-sm font-medium text-primary">Our Process</span>
              <div className="h-px bg-primary flex-1 max-w-16"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
              How We Transform Ideas into<br />
              <span className="text-primary">AI-Powered Reality</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors text-center p-8 animate-fade-up-delay-1 hover-lift-smooth">
                <div className="text-6xl mb-6 text-primary font-light">{step.step}</div>
                <div className="text-4xl mb-6">{step.icon}</div>
                <h3 className="text-xl font-medium mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-study" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-primary flex-1 max-w-16"></div>
              <span className="text-sm font-medium text-primary">Case Studies</span>
              <div className="h-px bg-primary flex-1 max-w-16"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
              Our Work Speaks for Us
            </h2>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors overflow-hidden animate-fade-up-delay-1 hover-lift-smooth">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div 
                    className="h-80 lg:h-auto bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${study.image}')`
                    }}
                  ></div>
                  <CardContent className="p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-medium mb-6">{study.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {study.description}
                    </p>
                    <Button className="w-fit bg-cosmic text-cosmic-foreground hover:bg-cosmic/90 button-smooth">
                      Learn more
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonial" className="py-24 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-primary flex-1 max-w-16"></div>
              <span className="text-sm font-medium text-primary">Testimonials</span>
              <div className="h-px bg-primary flex-1 max-w-16"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
              From those who love us
            </h2>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=600&fit=crop"
              alt="Client testimonials"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent rounded-lg flex items-center">
              <div className="p-12 max-w-2xl">
                <blockquote className="text-2xl font-light leading-relaxed mb-6">
                  "The Anoma Company delivered visuals that would have cost us 10x more with traditional production. The quality is indistinguishable from real footage."
                </blockquote>
                <div className="text-primary font-medium">— Creative Director, Major Studio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-primary flex-1 max-w-16"></div>
              <span className="text-sm font-medium text-primary">FAQ's</span>
              <div className="h-px bg-primary flex-1 max-w-16"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-border/50 rounded-lg px-6 bg-card/30 hover:bg-card/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-primary text-lg py-6 hover:no-underline">
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

      {/* Contact Section */}
      <section id="contact-us" className="py-24 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-medium text-primary">Contact us</span>
                <div className="h-px bg-primary flex-1 max-w-16"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
                Get in touch
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                Dive into the future of VFX and ad creation with AI! Reach out via pixels, calls, or carrier pigeons. Book a brainstorming session today!
              </p>
              
              <div className="space-y-6">
                <Card className="border-border/50 hover:border-primary/50 transition-colors p-6">
                  <div className="flex items-center gap-4">
                    <Phone className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-medium mb-1">Give us a call:</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="border-border/50 hover:border-primary/50 transition-colors p-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-medium mb-1">Send us an email:</p>
                      <p className="text-muted-foreground">hello@anoma.company</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="bg-card/50 rounded-lg p-8">
              <div className="text-center py-20">
                <h3 className="text-2xl font-medium mb-4">Schedule a Meeting</h3>
                <p className="text-muted-foreground mb-8">Book a free consultation to discuss your project</p>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 button-smooth">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-16 animate-fade-up">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-medium mb-6">The Anoma Company</h3>
              <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
                AI-first creative studio crafting the future of ads and film visuals with cutting-edge artificial intelligence.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-6 text-lg">Quick links</h4>
              <div className="space-y-3">
                <a href="#services" className="block text-muted-foreground hover:text-foreground transition-colors">Our Services</a>
                <a href="#why-us" className="block text-muted-foreground hover:text-foreground transition-colors">Why Choose Us</a>
                <a href="#case-study" className="block text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
                <a href="#testimonial" className="block text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
                <a href="#faq" className="block text-muted-foreground hover:text-foreground transition-colors">FAQ's</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-6 text-lg">Follow Us</h4>
              <div className="space-y-3">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">YouTube</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-12 flex items-center justify-between">
            <p className="text-muted-foreground">© 2024 The Anoma Company. All rights reserved.</p>
            <p className="text-muted-foreground text-sm">Crafted with AI precision</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;