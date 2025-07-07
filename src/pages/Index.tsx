import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Menu, X, Play, Star } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const benefits = [
    {
      title: "Real-Time Intelligence",
      description: "Access accurate, real-time data to drive smarter decisions",
      icon: "⚡"
    },
    {
      title: "Measurable Impact", 
      description: "Track performance, uncover insights, and achieve data-backed growth",
      icon: "📊"
    },
    {
      title: "Seamless Integration",
      description: "Connect tools, teams, and workflows with intelligent automation",
      icon: "🔗"
    }
  ];

  const services = [
    {
      title: "Cost Management",
      description: "Automate financial workflows and payment systems",
      visual: "💰"
    },
    {
      title: "Employee Tracking", 
      description: "Smart workforce analytics and productivity insights",
      visual: "👥"
    },
    {
      title: "Social Media Automation",
      description: "AI-powered content creation and posting schedules",
      visual: "📱"
    },
    {
      title: "Research Intelligence",
      description: "Comprehensive market and industry analysis",
      visual: "🔍"
    },
    {
      title: "Automated Workflows",
      description: "Streamline operations with intelligent process automation",
      visual: "⚙️"
    },
    {
      title: "Real-Time Analytics",
      description: "Live data insights and intelligent reporting systems",
      visual: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-secondary/20 pointer-events-none"></div>

      {/* Professional Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm flex items-center justify-center mr-3">
                <div className="w-4 h-4 rounded-md bg-gradient-to-br from-primary to-accent"></div>
              </div>
              <span className="text-xl font-light tracking-tight">Landio</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-12">
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light tracking-wide">Services</a>
                <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light tracking-wide">Process</a>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light tracking-wide">Pricing</a>
                <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light tracking-wide">Blog</a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light tracking-wide">Contact</a>
              </div>
            </div>

            <div className="hidden md:block">
              <Button 
                variant="outline" 
                className="border-primary/30 bg-primary/5 text-foreground hover:bg-primary/10 font-light px-6 py-2 text-sm backdrop-blur-sm"
              >
                Get Template
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
          <div className="md:hidden glass-nav border-t border-primary/10">
            <div className="px-6 py-4 space-y-4">
              <a href="#services" className="block text-muted-foreground hover:text-foreground transition-colors text-sm font-light">Services</a>
              <a href="#process" className="block text-muted-foreground hover:text-foreground transition-colors text-sm font-light">Process</a>
              <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-colors text-sm font-light">Pricing</a>
              <a href="#blog" className="block text-muted-foreground hover:text-foreground transition-colors text-sm font-light">Blog</a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors text-sm font-light">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-6xl mx-auto text-center space-y-12 reveal-up relative z-10">
          {/* Brand Icon */}
          <div className="w-20 h-20 mx-auto rounded-3xl glass-card flex items-center justify-center mb-8 reveal-scale">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent animate-pulse"></div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-card text-primary text-sm font-light tracking-wider border border-primary/20">
            <Star className="w-3 h-3 mr-2 fill-current" />
            NEW GEN AI AUTOMATION PARTNER
          </div>
          
          <div className="space-y-8">
            <h1 className="text-hero font-extralight leading-none tracking-tighter">
              <span className="block">Automate Smarter.</span>
              <span className="block">Grow Faster.</span>
              <span className="block italic bg-gradient-to-r from-primary via-accent to-cosmic bg-clip-text text-transparent">
                With AI.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              AI Automation for Modern Businesses Made Simple
            </p>
          </div>
          
          <div className="pt-8">
            <Button 
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-light px-10 py-6 text-base transition-all duration-500 hover:scale-105 rounded-xl"
            >
              Book A Free Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center space-x-6 pt-12 opacity-60">
            <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer">
              <span className="text-xs">𝕏</span>
            </div>
            <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer">
              <span className="text-xs">in</span>
            </div>
            <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer">
              <span className="text-xs">f</span>
            </div>
          </div>
        </div>
      </section>

      {/* Data Analysis Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 reveal-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-card text-accent text-sm font-light tracking-wider border border-accent/20 mb-8">
              WE ANALYZE YOUR DATA
            </div>
            <h2 className="text-section font-extralight mb-8 leading-tight tracking-tighter max-w-4xl mx-auto">
              We find what to automate, who your users are & how AI can optimize your workflow.
            </h2>
            <p className="text-lg text-muted-foreground font-light italic">
              Best part is we also build and launch real solutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up">
              <Card className="glass-card hover-lift">
                <CardContent className="p-12">
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-light mb-2">Co-founder & AI Strategy Lead</h4>
                      <p className="text-muted-foreground text-sm font-light">The Anomā Company</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light text-lg">
                    "We blend human intuition with computational creativity to deliver results that neither could achieve alone."
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8 reveal-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-light mb-8 tracking-tight">BENEFITS</h3>
              <h4 className="text-4xl font-extralight mb-12 leading-tight">Why Choose Us?</h4>
              <p className="text-muted-foreground font-light text-lg mb-12">
                Everything you need to automate, optimize, and scale
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl glass-card hover-lift">
                    <div className="text-2xl mt-1">{benefit.icon}</div>
                    <div>
                      <h5 className="font-medium mb-2">{benefit.title}</h5>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-card text-primary text-sm font-light tracking-wider border border-primary/20 mb-8">
              SERVICES
            </div>
            <h2 className="text-section font-extralight mb-8 leading-tight tracking-tighter">
              Smarter Services,<br />
              Built with AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Everything you need to automate operations, boost productivity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="reveal-up hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                <Card className="glass-card h-full group cursor-pointer">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                      {service.visual}
                    </div>
                    <h3 className="text-xl font-light mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow font-light">
                      {service.description}
                    </p>
                    <div className="mt-8 pt-6 border-t border-border/30">
                      <div className="flex items-center text-primary text-sm font-light group-hover:translate-x-2 transition-transform duration-500">
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
      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="reveal-up">
            <Card className="glass-card hover-lift">
              <CardContent className="p-16">
                <div className="font-mono text-left text-sm space-y-3 font-light">
                  <div className="text-muted-foreground mb-6">// AI Automation Architecture</div>
                  <div><span className="text-cosmic">class</span> <span className="text-primary">AutomationAgent</span>:</div>
                  <div className="ml-4"><span className="text-accent">def</span> <span className="text-amber">__init__</span>(<span className="text-foreground">self</span>, <span className="text-primary">activation_limit</span>):</div>
                  <div className="ml-8"><span className="text-foreground">self</span>.<span className="text-primary">activation_limit</span> = <span className="text-amber">activation_limit</span></div>
                  <div className="ml-8"><span className="text-foreground">self</span>.<span className="text-primary">current_mode</span> = <span className="text-accent">"idle"</span></div>
                  <div className="ml-4"></div>
                  <div className="ml-4"><span className="text-accent">def</span> <span className="text-cosmic">evaluate_task</span>(<span className="text-foreground">self</span>, <span className="text-amber">workload_value</span>):</div>
                  <div className="ml-8"><span className="text-cosmic">if</span> <span className="text-amber">workload_value</span> &gt; <span className="text-foreground">self</span>.<span className="text-primary">activation_limit</span>:</div>
                  <div className="ml-12"><span className="text-foreground">self</span>.<span className="text-primary">current_mode</span> = <span className="text-accent">"engaged"</span></div>
                  <div className="ml-12"><span className="text-cosmic">return</span> <span className="text-accent">"Automation agent has been successfully activated!"</span></div>
                  <div className="ml-8"><span className="text-cosmic">else</span>:</div>
                  <div className="ml-12"><span className="text-cosmic">return</span> <span className="text-accent">"No activation needed. Agent stays idle."</span></div>
                  <div className="ml-4"></div>
                  <div className="ml-4"><span className="text-accent">def</span> <span className="text-cosmic">get_current_mode</span>(<span className="text-foreground">self</span>):</div>
                  <div className="ml-8"><span className="text-cosmic">return</span> <span className="text-foreground">self</span>.<span className="text-primary">current_mode</span></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center reveal-up">
          <h2 className="text-section font-extralight mb-8 leading-tight tracking-tighter">
            Ready to Transform<br />
            Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Join the future of automation. Book a free consultation and see how AI can revolutionize your workflow.
          </p>
          <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-foreground/90 font-light px-12 py-6 text-lg transition-all duration-500 hover:scale-105 rounded-xl"
          >
            Book A Free Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent"></div>
        <div className="relative border-t border-primary/5 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="md:col-span-2 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-4 h-4 rounded-md bg-gradient-to-br from-primary to-accent"></div>
                  </div>
                  <span className="text-2xl font-light tracking-tight">Landio</span>
                </div>
                <p className="text-muted-foreground max-w-md leading-relaxed font-light">
                  AI-first automation partner for modern businesses. Making intelligent workflows accessible to everyone.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-light text-foreground">Contact</h4>
                <div className="space-y-3 text-muted-foreground font-light text-sm">
                  <p className="hover:text-primary cursor-pointer transition-colors">hello@landio.ai</p>
                  <p className="hover:text-primary cursor-pointer transition-colors">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-light text-foreground">Follow</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light text-sm">Twitter</a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light text-sm">LinkedIn</a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light text-sm">GitHub</a>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-12 mt-12 border-t border-primary/5">
              <p className="text-muted-foreground text-sm font-light">
                © 2024 Landio. All rights reserved.
              </p>
              <div className="flex items-center text-muted-foreground text-xs font-light">
                <span className="mr-2">Made in Framer</span>
                <div className="w-4 h-4 rounded bg-primary/20"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;