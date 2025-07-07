import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "AI Visual Design",
      description: "Creating stunning visuals using state-of-the-art generative AI models, customized for your brand's unique aesthetic."
    },
    {
      title: "Motion Graphics", 
      description: "Dynamic AI-powered animations and motion design that bring static concepts to life with fluid, organic movement."
    },
    {
      title: "Brand Identity",
      description: "Developing comprehensive visual systems that leverage AI to create cohesive yet adaptable brand identities."
    },
    {
      title: "Creative Development",
      description: "Custom AI solutions and creative coding that bridge the gap between technological innovation and artistic expression."
    },
    {
      title: "Immersive Experiences",
      description: "AI-enhanced virtual and augmented reality experiences that blur the line between digital and physical worlds."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-foreground">ANOMĀ</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">ABOUT</a>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">SERVICES</a>
                <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">PORTFOLIO</a>
                <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">PROCESS</a>
                <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">TEAM</a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">CONTACT</a>
              </div>
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
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">ABOUT</a>
              <a href="#services" className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">SERVICES</a>
              <a href="#portfolio" className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">PORTFOLIO</a>
              <a href="#process" className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">PROCESS</a>
              <a href="#team" className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">TEAM</a>
              <a href="#contact" className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">CONTACT</a>
            </div>
          </div>
        )}
      </nav>

      {/* Code snippet in top right */}
      <div className="fixed top-20 right-8 text-xs text-muted-foreground font-mono hidden lg:block">
        <div>function createFuture() &#123;</div>
        <div className="ml-4">return ai.transform(reality);</div>
        <div>&#125;</div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Main content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  AI-First<br />
                  <span className="text-primary">Creative</span><br />
                  Intelligence
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  The Anomā Company is a pioneering AI-first creative studio that merges cutting-edge artificial intelligence with human creativity to produce extraordinary visual experiences.
                </p>
              </div>
              
              <Button 
                size="lg"
                className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-6 text-base transition-all duration-300"
              >
                GET IN TOUCH
              </Button>
            </div>

            {/* Right side - Card */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">The</div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Anoma
                    </h2>
                    <div className="text-sm text-muted-foreground">Company</div>
                  </div>
                  
                  <div className="border-t border-primary/20 pt-6">
                    <p className="text-sm text-muted-foreground font-mono">
                      AI visuals, delivered before<br />
                      your coffee gets cold
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">About Us</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded at the intersection of art and technology, The Anomā Company pioneers a new approach to creative production. We harness the power of artificial intelligence to expand the boundaries of what's visually possible.
                </p>
                <p>
                  Our team of AI specialists, designers, and creative technologists work in harmony to create visual experiences that are both technically innovative and emotionally resonant.
                </p>
                <p>
                  Through our Chromatic Nebula approach, we blend human intuition with computational creativity to deliver results that neither could achieve alone.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl opacity-60">🌌</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge AI solutions that revolutionize how you create and produce visual content
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card/30 border-border/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer group backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's create something extraordinary together. Get in touch to discuss your next AI-powered creative project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-10 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-primary/10 font-medium px-10 py-6 text-lg transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-card/50 border-t border-border py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">ANOMĀ</h3>
              <p className="text-muted-foreground">
                AI-first creative intelligence for extraordinary visual experiences.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>hello@anoma.company</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
            <p>© 2024 The Anomā Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;