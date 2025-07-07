import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Menu, X } from "lucide-react";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-medium">The Anoma Company</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </div>
            </div>

            <div className="hidden md:block">
              <Button variant="outline" size="sm">
                Book a Demo
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
              <a href="#about" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#contact" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <div className="pt-4">
                <Button variant="outline" size="sm" className="w-full">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">
            AI visuals, delivered before<br />
            your coffee gets cold.
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Studio-grade campaigns, commercials, and film scenes powered by AI. 
            Cinema-quality results at unprecedented speed.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="px-8">
              Book a free demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Transform Visuals with AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge AI solutions that revolutionize how you create and produce visual content
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6">
            The Future of Visual Production
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Founded at the intersection of art and technology, The Anoma Company pioneers 
            a new approach to creative production. We harness the power of artificial intelligence 
            to expand the boundaries of what's visually possible.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-light mb-2">90%</div>
              <p className="text-muted-foreground">Faster Production</p>
            </div>
            <div>
              <div className="text-2xl font-light mb-2">Cinema-grade</div>
              <p className="text-muted-foreground">Quality Results</p>
            </div>
            <div>
              <div className="text-2xl font-light mb-2">Unlimited</div>
              <p className="text-muted-foreground">Creative Freedom</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6">
            Ready to Transform Your Visuals?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join the future of visual production. Book a free demo and see how AI can revolutionize your creative workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-10">
              Book a Free Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-10">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border/50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">The Anoma Company</h3>
              <p className="text-muted-foreground">
                AI-first creative studio for extraordinary visual experiences.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>hello@anoma.company</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
            <p>© 2024 The Anoma Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;