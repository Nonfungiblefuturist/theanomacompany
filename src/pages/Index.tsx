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
      icon: "📸",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "100% AI Commercials", 
      description: "Scroll-stoppers, no set build required.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      title: "AI-Generated Film Scenes",
      description: "IMAX-ready visuals at indie budgets.",
      icon: "🎭",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    }
  ];

  const portfolio = [
    {
      title: "Epic Film Production",
      category: "Cinematic AI",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
    },
    {
      title: "Tech Commercial Campaign",
      category: "Product Photography",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Creative Visual Effects",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Nature Documentary",
      category: "Environmental Film",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
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
                <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
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
              <a href="#portfolio" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
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

      {/* Hero Section with Background Image */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500673922987-e212871fec22')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
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

      {/* Services Section with Images */}
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
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${service.image}?w=400&h=300&fit=crop')`
                  }}
                ></div>
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Our Recent Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how we've transformed creative visions into stunning reality with AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-all hover:scale-105 overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${item.image}?w=400&h=400&fit=crop')`
                  }}
                ></div>
                <CardContent className="p-6">
                  <p className="text-sm text-primary mb-2">{item.category}</p>
                  <h3 className="font-medium">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Side Image */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-light mb-6">
                The Future of Visual Production
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Founded at the intersection of art and technology, The Anoma Company pioneers 
                a new approach to creative production. We harness the power of artificial intelligence 
                to expand the boundaries of what's visually possible.
              </p>
              
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-light mb-2">90%</div>
                  <p className="text-muted-foreground text-sm">Faster Production</p>
                </div>
                <div>
                  <div className="text-2xl font-light mb-2">Cinema-grade</div>
                  <p className="text-muted-foreground text-sm">Quality Results</p>
                </div>
                <div>
                  <div className="text-2xl font-light mb-2">Unlimited</div>
                  <p className="text-muted-foreground text-sm">Creative Freedom</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                alt="Creative workspace"
                className="rounded-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Process Section */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process combines human creativity with AI innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=300&h=200&fit=crop"
                  alt="Analysis phase"
                  className="rounded-lg w-full h-48 object-cover mx-auto"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">1</div>
              </div>
              <h3 className="text-xl font-medium mb-4">Analyze & Plan</h3>
              <p className="text-muted-foreground">We dive deep into your vision and requirements</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop"
                  alt="Creation phase"
                  className="rounded-lg w-full h-48 object-cover mx-auto"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">2</div>
              </div>
              <h3 className="text-xl font-medium mb-4">Create & Generate</h3>
              <p className="text-muted-foreground">Our AI systems bring your concepts to life</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop"
                  alt="Delivery phase"
                  className="rounded-lg w-full h-48 object-cover mx-auto"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">3</div>
              </div>
              <h3 className="text-xl font-medium mb-4">Refine & Deliver</h3>
              <p className="text-muted-foreground">Perfect results delivered at lightning speed</p>
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