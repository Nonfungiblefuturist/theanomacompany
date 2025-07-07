import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Menu, X, Play } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "AI Visual Design",
      description: "Creating stunning visuals using state-of-the-art generative AI models, customized for your brand's unique aesthetic.",
      icon: "🎨"
    },
    {
      title: "Motion Graphics", 
      description: "Dynamic AI-powered animations and motion design that bring static concepts to life with fluid, organic movement.",
      icon: "🎬"
    },
    {
      title: "Brand Identity",
      description: "Developing comprehensive visual systems that leverage AI to create cohesive yet adaptable brand identities.",
      icon: "⚡"
    },
    {
      title: "Creative Development",
      description: "Custom AI solutions and creative coding that bridge the gap between technological innovation and artistic expression.",
      icon: "💻"
    },
    {
      title: "Immersive Experiences",
      description: "AI-enhanced virtual and augmented reality experiences that blur the line between digital and physical worlds.",
      icon: "🌌"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Nebula Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] animate-nebula">
          <div className="w-full h-full rounded-full" style={{
            background: 'var(--gradient-aurora)',
            filter: 'blur(100px)',
          }}></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] animate-nebula" style={{animationDelay: '7s'}}>
          <div className="w-full h-full rounded-full" style={{
            background: 'var(--gradient-nebula)',
            filter: 'blur(80px)',
          }}></div>
        </div>
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] animate-nebula" style={{animationDelay: '14s'}}>
          <div className="w-full h-full rounded-full" style={{
            background: 'conic-gradient(from 45deg, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.3), hsl(var(--cosmic) / 0.3))',
            filter: 'blur(60px)',
          }}></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="relative">
                <span className="text-xl font-bold text-foreground">ANOM</span>
                <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-cosmic bg-clip-text text-transparent animate-spectral">Ā</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide">ABOUT</a>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide">SERVICES</a>
                <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide">PORTFOLIO</a>
                <a href="#process" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide">PROCESS</a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide">CONTACT</a>
              </div>
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
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-primary/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide">ABOUT</a>
              <a href="#services" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide">SERVICES</a>
              <a href="#portfolio" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide">PORTFOLIO</a>
              <a href="#process" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide">PROCESS</a>
              <a href="#contact" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide">CONTACT</a>
            </div>
          </div>
        )}
      </nav>

      {/* Code snippet overlay */}
      <div className="fixed top-24 right-8 text-xs font-mono text-muted-foreground/60 hidden lg:block select-none pointer-events-none">
        <div className="bg-card/20 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
          <div className="text-primary">function</div>
          <div><span className="text-accent">createFuture</span>() &#123;</div>
          <div className="ml-4">return <span className="text-cosmic">ai</span>.<span className="text-amber">transform</span>(reality);</div>
          <div>&#125;</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
        {/* Centered Brand Icon */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm flex items-center justify-center animate-glow">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10 mt-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wide">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
            AI-FIRST CREATIVE INTELLIGENCE
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="block">Automate Smarter.</span>
              <span className="block">Create Faster.</span>
              <span className="block italic bg-gradient-to-r from-primary via-accent to-cosmic bg-clip-text text-transparent animate-spectral">
                With AI.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              AI visuals, delivered before your coffee gets cold
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Button 
              size="lg"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-6 text-base transition-all duration-500 group animate-glow"
            >
              GET IN TOUCH
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-8 mt-12 opacity-60">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <div className="w-6 h-6 border border-current rounded-full flex items-center justify-center">
                <span className="text-xs">𝕏</span>
              </div>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <div className="w-6 h-6 border border-current rounded-md flex items-center justify-center">
                <span className="text-xs">📷</span>
              </div>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <div className="w-6 h-6 border border-current rounded-sm flex items-center justify-center">
                <span className="text-xs">f</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium tracking-wide mb-8">
              WE ANALYZE YOUR DATA
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              We find what to automate, who your users are<br />
              & how AI can optimize your workflow.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded at the intersection of art and technology, The Anomā Company pioneers a new approach to creative production through our Chromatic Nebula methodology.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="spectral-trail relative">
                <Card className="bg-gradient-to-br from-card/50 to-card/20 border-primary/20 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">AC</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Co-founder & AI Strategy Lead</h4>
                        <p className="text-muted-foreground text-sm">The Anomā Company</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      "We blend human intuition with computational creativity to deliver results that neither could achieve alone."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="spectral-trail">
                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <h4 className="font-bold text-sm">Real-Time Intelligence</h4>
                    </CardContent>
                  </Card>
                </div>
                <div className="spectral-trail">
                  <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl mb-2">📊</div>
                      <h4 className="font-bold text-sm">Measurable Impact</h4>
                    </CardContent>
                  </Card>
                </div>
                <div className="spectral-trail">
                  <Card className="bg-gradient-to-br from-cosmic/10 to-cosmic/5 border-cosmic/20 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl mb-2">🔗</div>
                      <h4 className="font-bold text-sm">Seamless Integration</h4>
                    </CardContent>
                  </Card>
                </div>
                <div className="spectral-trail">
                  <Card className="bg-gradient-to-br from-amber/10 to-amber/5 border-amber/20 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <h4 className="font-bold text-sm">Precision Targeting</h4>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wide mb-8">
              SERVICES
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Smarter Services,<br />
              Built with AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to automate operations, boost productivity, and create extraordinary visual experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="spectral-trail group">
                <Card className="bg-gradient-to-br from-card/50 to-card/20 border-border/30 hover:border-primary/40 transition-all duration-700 hover:-translate-y-4 cursor-pointer backdrop-blur-sm h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <div className="mt-6 pt-6 border-t border-border/30">
                      <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-2 transition-transform duration-500">
                        <Play className="w-3 h-3 mr-2" />
                        Learn more
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="spectral-trail mb-12">
            <Card className="bg-gradient-to-br from-card/80 to-card/40 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="font-mono text-left text-sm space-y-2">
                  <div className="text-muted-foreground">// Chromatic Nebula Architecture</div>
                  <div><span className="text-cosmic">class</span> <span className="text-primary">AutomationAgent</span> &#123;</div>
                  <div className="ml-4"><span className="text-accent">constructor</span>(<span className="text-amber">activation_limit</span>) &#123;</div>
                  <div className="ml-8"><span className="text-foreground">this</span>.<span className="text-primary">activation_limit</span> = <span className="text-amber">activation_limit</span>;</div>
                  <div className="ml-8"><span className="text-foreground">this</span>.<span className="text-primary">current_mode</span> = <span className="text-accent">"idle"</span>;</div>
                  <div className="ml-4">&#125;</div>
                  <div className="ml-4"></div>
                  <div className="ml-4"><span className="text-cosmic">evaluate_task</span>(<span className="text-amber">workload_value</span>) &#123;</div>
                  <div className="ml-8"><span className="text-cosmic">if</span> (<span className="text-amber">workload_value</span> &gt; <span className="text-foreground">this</span>.<span className="text-primary">activation_limit</span>) &#123;</div>
                  <div className="ml-12"><span className="text-foreground">this</span>.<span className="text-primary">current_mode</span> = <span className="text-accent">"engaged"</span>;</div>
                  <div className="ml-12"><span className="text-cosmic">return</span> <span className="text-accent">"AI transformation complete!"</span>;</div>
                  <div className="ml-8">&#125;</div>
                  <div className="ml-4">&#125;</div>
                  <div>&#125;</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Transform<br />
            Your Creative Vision?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's create something extraordinary together. Get in touch to discuss your next AI-powered creative project.
          </p>
          <Button 
            size="lg" 
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-12 py-6 text-lg transition-all duration-500 hover:scale-105 animate-glow"
          >
            Book A Free Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent"></div>
        <div className="relative border-t border-primary/10 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="md:col-span-2 space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-foreground">ANOM</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-cosmic bg-clip-text text-transparent">Ā</span>
                </div>
                <p className="text-muted-foreground max-w-md leading-relaxed">
                  AI-first creative intelligence for extraordinary visual experiences. Pioneering the Chromatic Nebula approach to visual production.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-foreground">Contact</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p className="hover:text-primary cursor-pointer transition-colors">hello@anoma.company</p>
                  <p className="hover:text-primary cursor-pointer transition-colors">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-foreground">Follow</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-primary/10 mt-12 pt-8 text-center">
              <p className="text-muted-foreground text-sm">
                © 2024 The Anomā Company. All rights reserved. | Powered by Chromatic Nebula Technology
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;