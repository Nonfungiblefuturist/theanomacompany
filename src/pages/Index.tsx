import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Menu, X, Phone, Mail, ChevronDown, ExternalLink, Star, ArrowUp } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import chcaWineLabel from "@/assets/chca-wine-label.jpg";
import eventFlyer from "@/assets/event-flyer.jpg";
import skillsHero from "@/assets/skills-hero.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScrollTop(currentScrollY > 300);
      setIsScrolled(currentScrollY > 50);
      setScrollY(currentScrollY);
      
      // Parallax effect for nebula
      document.documentElement.style.setProperty('--scroll-y', `${currentScrollY * 0.5}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view', 'visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      document.querySelectorAll('.scroll-reveal, .stagger-item, .text-reveal').forEach((el) => {
        observer.observe(el);
      });
    };

    observeElements();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Typewriter effect state
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    // Start second line after first typewriter completes
    const timer1 = setTimeout(() => {
      setTypewriterComplete(true);
    }, 3000);

    const timer2 = setTimeout(() => {
      setShowSecondLine(true);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const services = [
    {
      title: "AI Advertising & Marketing",
      description: "Generate high-quality advertising content using AI models. Reduce production costs while maintaining professional standards for your campaigns.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
      features: [
        "AI-generated product photography and lifestyle shots",
        "Scalable social media content creation",
        "Consistent brand visuals across all platforms"
      ],
      gradient: "from-primary/20 to-accent/20"
    },
    {
      title: "AI Film Production", 
      description: "Create film content with AI assistance. Achieve professional-grade visuals at a fraction of traditional production costs and timelines.",
      image: "https://images.unsplash.com/photo-1518675219903-c682c4b16b7e?w=800&h=400&fit=crop",
      features: [
        "High-quality film scenes with AI assistance",
        "Maintained character consistency across shots",
        "Significant cost reduction vs traditional VFX"
      ],
      gradient: "from-accent/20 to-cosmic/20"
    },
    {
      title: "AI Software Solutions", 
      description: "Custom AI tools built for your specific creative needs. Streamline workflows and automate repetitive tasks in your production pipeline.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      features: [
        "Tailored AI content generation tools",
        "Workflow automation systems",
        "Seamless integration with existing tools"
      ],
      gradient: "from-cosmic/20 to-amber/20"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your vision, brand identity, and project requirements to develop a tailored AI-powered creative strategy."
    },
    {
      step: "02", 
      title: "AI Model Selection",
      description: "Our team selects and fine-tunes the most suitable AI models based on your specific creative needs and desired outcomes."
    },
    {
      step: "03",
      title: "Creative Development",
      description: "We blend human creativity with AI precision to develop your visual content, ensuring brand consistency and artistic excellence."
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Every output undergoes rigorous quality checks and refinements to meet cinema-grade standards before delivery."
    }
  ];

  const benefits = [
    {
      title: "Cinema-Grade Quality",
      description: "Theatre-tested visuals that match traditional filmmaking standards, not just social media content."
    },
    {
      title: "Character Consistency", 
      description: "Maintain the same actor's face across multiple scenes - a breakthrough others struggle with."
    },
    {
      title: "Commercial Licensing",
      description: "All AI content is fully licensed for commercial use with zero copyright concerns."
    },
    {
      title: "Rapid Delivery",
      description: "Complete projects in weeks, not months, while maintaining professional quality standards."
    }
  ];

  const skills = [
    {
      category: "AI Video Production",
      items: ["Runway Gen-4", "Midjourney", "Pika Labs", "Stable Video Diffusion", "Character Consistency", "Cinematic Visuals"]
    },
    {
      category: "AI Photography & Design", 
      items: ["Midjourney", "DALL-E 3", "Stable Diffusion", "Adobe Firefly", "Product Photography", "Brand Visuals"]
    },
    {
      category: "Custom Software Solutions",
      items: ["ChatGPT API", "Claude AI", "Python", "JavaScript", "API Integration", "Workflow Automation"]
    },
    {
      category: "Creative Software",
      items: ["Adobe Creative Suite", "DaVinci Resolve", "Blender", "Figma", "After Effects", "Premiere Pro"]
    },
    {
      category: "Specializations",
      items: ["Character Consistency", "Commercial Licensing", "Photo Vogue Featured", "Cinema-Grade Quality", "Rapid Delivery"]
    }
  ];

  const aiTools = [
    { name: "Runway", category: "Video Generation" },
    { name: "Midjourney", category: "Image Generation" },
    { name: "Pika Labs", category: "Video Generation" },
    { name: "Claude", category: "AI Assistant" },
    { name: "Stable Diffusion", category: "Image Generation" },
    { name: "Eleven Labs", category: "Voice AI" },
    { name: "Kling AI", category: "Video Generation" },
    { name: "Luma AI", category: "3D & Video" },
    { name: "Suno", category: "Audio Generation" },
    { name: "KREA", category: "Real-time AI" },
    { name: "Cursor", category: "AI Coding" },
    { name: "Letz.AI", category: "AI Platform" },
    { name: "Freepik", category: "AI Design" },
    { name: "Convergence", category: "AI Tools" },
    { name: "Minimax", category: "AI Models" },
    { name: "Reve", category: "AI Innovation" }
  ];

  const caseStudies = [
    {
      title: "How I Made This Using AI | Runway Gen-4 + Midjourney + More",
      description: "This entire video was crafted using AI from start to finish — from the visuals to the story, even down to the editing workflow. A complete demonstration of AI-powered video production capabilities.",
      youtubeId: "XlaBgDLMuGQ",
      type: "Ad Spec",
      link: "https://youtu.be/XlaBgDLMuGQ"
    },
    {
      title: "AI Mockumentary: Behind the Scenes",
      description: "An innovative AI-powered mockumentary showcasing the creative potential of artificial intelligence in storytelling and documentary-style content creation.",
      youtubeId: "QenWLMUnC18",
      type: "AI Mockumentary",
      link: "https://youtu.be/QenWLMUnC18"
    },
    {
      title: "AI Photography Featured in PhotoVogue",
      description: "Breakthrough AI-generated photography that caught the attention of Vogue's prestigious PhotoVogue platform, showcasing the artistic potential of artificial intelligence in visual storytelling.",
      type: "AI Photography",
      link: "https://www.vogue.com/photovogue/photographers/167071/gallery#4039408",
      image: "/lovable-uploads/8185e138-3528-4a94-b901-5e66b4f98b8a.png"
    },
    {
      title: "AI Spec Ad for Vaseline - Interactive Experience",
      description: "An innovative AI-crafted advertising campaign for Vaseline that combines cutting-edge visual AI with interactive web design, pushing the boundaries of digital marketing.",
      type: "Brand Campaign",
      link: "https://readymag.website/surzayon/5140874/",
      image: "/lovable-uploads/a2bc0601-961e-40cb-80c4-ee53a8664039.png"
    },
    {
      title: "AI Wine Label Design - CHCA Cabernet Franc",
      description: "A sophisticated wine label design created using AI, blending tradition with modernity. Featured abstract illustrations inspired by Niagara Falls with bold typography and vibrant colors to capture the wine's essence and elevate brand identity.",
      type: "AI Design",
      link: "https://www.s.pictures/design/chcawinelabel",
      image: chcaWineLabel,
      imageLink: "https://www.thechefshouse.com/trillium-cellars"
    },
    {
      title: "Event Flyer",
      description: "Professional event flyer design created for Instagram promotion, showcasing AI's capability in creating sophisticated social media marketing materials for the hospitality industry with elegant typography and restaurant branding.",
      type: "Instagram Design", 
      link: "https://www.instagram.com/p/DI1gNCHOD-g/?igsh=bW5xdG1rNjRmMGFi",
      image: "/lovable-uploads/e0cb3268-c7ec-4136-9335-3de792e7898f.png"
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
    },
    {
      question: "What's your typical project timeline and delivery schedule?",
      answer: "Most projects are completed within 2-4 weeks, depending on scope. We provide regular updates and can accommodate urgent deadlines when needed."
    },
    {
      question: "How do you price your AI creative services?",
      answer: "Pricing varies based on project complexity, timeline, and deliverables. We offer competitive rates that typically save clients 40-70% compared to traditional production methods. Contact us for a custom quote."
    },
    {
      question: "Do you provide revisions and creative direction?",
      answer: "Yes, we include multiple revision rounds in our packages and work closely with your creative team to ensure the final output aligns perfectly with your brand vision and campaign goals."
    },
    {
      question: "What file formats and technical specifications do you deliver?",
      answer: "We deliver in all standard formats including 4K video, high-resolution images, and can accommodate specific technical requirements for different platforms and media outlets."
    },
    {
      question: "Can you work with our existing creative assets and brand guidelines?",
      answer: "Definitely. We excel at integrating with existing brand materials, style guides, and creative assets to ensure consistency across all AI-generated content."
    },
    {
      question: "Do you offer ongoing creative partnerships or retainer agreements?",
      answer: "Yes, we work with several clients on retainer basis for ongoing content creation, which provides better rates and priority scheduling for regular creative needs."
    },
    {
      question: "How do you ensure brand consistency across multiple AI-generated assets?",
      answer: "We use advanced AI training techniques and maintain detailed brand profiles to ensure consistent visual identity, tone, and messaging across all generated content."
    },
    {
      question: "What's your approach to confidentiality and NDAs?",
      answer: "We maintain strict confidentiality protocols and are happy to sign NDAs before any project discussion. Your creative concepts and business information are completely secure."
    }
  ];

  const testimonials = [
    {
      quote: "Honestly didn't think AI could match our traditional shoots until I saw the results. Cut our production time from 3 weeks to 10 days and saved us $45K on our Q4 campaign. The ROI speaks for itself.",
      author: "Mark L.",
      role: "Creative Director",
      company: "",
      rating: 5,
      project: "Product Launch Campaign",
      savings: "Saved $45K, 60% faster delivery"
    },
    {
      quote: "The character consistency blew my mind. We needed the same actor across 12 different scenes and Anoma delivered flawlessly. Our focus groups rated it 25% higher than our previous work.",
      author: "Diana G.",
      role: "Art Director", 
      company: "",
      rating: 5,
      project: "Brand Commercial Series",
      savings: "25% better audience response"
    },
    {
      quote: "Their custom AI workflow integration transformed our entire content pipeline. We're now pushing out 3x more social content with the same team. Game changer for our agency.",
      author: "Chad K.",
      role: "Head of Creative",
      company: "", 
      rating: 5,
      project: "Workflow Automation",
      savings: "3x content output increase"
    },
    {
      quote: "Skeptical at first, but the photorealism is incredible. Our product photography now looks better than our $15K studio shoots and takes a fraction of the time. Clients can't tell the difference.",
      author: "Jennifer W.",
      role: "Commercial Photographer",
      company: "",
      rating: 5,
      project: "Product Photography Suite",
      savings: "70% cost reduction vs studio"
    },
    {
      quote: "The speed is unreal. What used to take our traditional advertising team 2 months, Anoma delivered in 3 weeks. Same quality, faster turnaround, and our clients are blown away every time.",
      author: "Ryan B.",
      role: "Advertising Producer",
      company: "",
      rating: 5,
      project: "Campaign Production", 
      savings: "60% faster than traditional methods"
    },
    {
      quote: "Working with Anoma completely changed how we approach creative briefs. The AI-generated concepts gave us directions we never would have thought of. Our client approval rate went up 40%.",
      author: "Sarah M.",
      role: "Senior Copywriter",
      company: "",
      rating: 5,
      project: "Creative Concept Development",
      savings: "40% higher approval rate"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Nebula Effects */}
      <div className="nebula-effect nebula-left"></div>
      <div className="nebula-effect nebula-right"></div>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-background/98 backdrop-blur-md border-b border-border/20 shadow-lg shadow-black/10' 
          : 'bg-background/95 backdrop-blur-sm border-b border-border/10'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ease-out ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/38e4e5bc-e33c-414c-ab90-cfc5468f67a1.png" 
                alt="Anoma Company" 
                className={`w-auto transition-all duration-500 ease-out ${
                  isScrolled ? 'h-24 pt-4 pb-2' : 'h-40 pt-8 pb-6'
                }`}
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className={`flex items-center transition-all duration-500 ease-out ${
                isScrolled ? 'space-x-6' : 'space-x-8'
              }`}>
                <a href="#services" className={`text-muted-foreground hover:text-foreground transition-colors ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}>Services</a>
                <a href="#why-us" className={`text-muted-foreground hover:text-foreground transition-colors ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}>Why choose us</a>
                <a href="#case-study" className={`text-muted-foreground hover:text-foreground transition-colors ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}>Case Studies</a>
                <a href="#why-us" className={`text-muted-foreground hover:text-foreground transition-colors ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}>Our Expertise</a>
                <a href="#testimonial" className={`text-muted-foreground hover:text-foreground transition-colors ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}>Testimonials</a>
                <a href="#faq" className={`text-muted-foreground hover:text-foreground transition-colors ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}>FAQ's</a>
              </div>
            </div>

            <div className="hidden md:block">
              <Button 
                asChild
                className={`bg-accent text-accent-foreground hover:bg-accent/90 button-smooth glass-button transition-all duration-500 ease-out ${
                  isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'
                }`}
              >
                <a href="mailto:sg@s.pictures">Get in touch</a>
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
          <div className={`md:hidden bg-background/98 backdrop-blur-md border-t border-border/20 transition-all duration-300 ease-out ${
            isScrolled ? 'shadow-lg' : ''
          }`}>
            <div className="px-6 py-4 space-y-2">
              <a href="#services" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#why-us" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Why choose us</a>
              <a href="#case-study" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
              <a href="#why-us" className="block py-2 text-muted-foreground hover:text-foreground transition-colors">Our Expertise</a>
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
        
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="space-y-4">
            <div className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight text-white">
              <div className="typewriter">
                AI-Powered Advertising &<br />
                Cinematic Visuals
              </div>
              {typewriterComplete && <span className="cursor"></span>}
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-up-delay-1">
            Lightning-fast creative solutions that deliver stunning results ahead of schedule.
          </p>
          
          <div className="pt-8 animate-fade-up-delay-2">
            <Button 
              asChild
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-6 text-lg button-smooth glass-button"
            >
              <a href="https://calendly.com/surzayon/the-anoma-company-consultation" target="_blank" rel="noopener noreferrer">
                Book a Free Demo
              </a>
            </Button>
          </div>
          
          {/* Bouncing scroll indicator */}
          <div className="pt-16 animate-fade-up-delay-3">
            <div className="flex flex-col items-center">
              <ChevronDown className="w-8 h-8 text-white/70 animate-bounce" />
              <span className="text-white/50 text-sm mt-2">Scroll to explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-primary flex-1 max-w-16"></div>
              <span className="text-sm font-medium text-white">Our Services</span>
              <div className="h-px bg-primary flex-1 max-w-16"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
              <span className="text-foreground">Creative Intelligence, Visual Storytelling & Smart Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
              From AI-generated advertising campaigns and product photography to cinematic film production and custom software solutions, we deliver creative excellence that traditionally takes months in just weeks.
            </p>
          </div>
          
           <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`border-border/50 hover:border-accent/30 transition-all duration-500 overflow-hidden group card-parallax scroll-reveal bg-gradient-to-br ${service.gradient} hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 liquid-hover`} style={{ transitionDelay: `${index * 100}ms` }}>
                <CardContent className="p-8 relative">
                  <h3 className="text-2xl font-medium mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 group-hover:text-foreground/90 transition-colors duration-300">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                        <ArrowRight className={`w-4 h-4 mt-0.5 flex-shrink-0 transition-all duration-300 ${
                          index === 0 ? 'text-amber group-hover:text-amber/80' : 
                          index === 1 ? 'text-accent group-hover:text-accent/80' : 
                          'text-cosmic group-hover:text-cosmic/80'
                        }`} />
                        <span className="text-sm group-hover:text-foreground transition-colors duration-300">{feature}</span>
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
              <span className="text-sm font-medium text-white">Why Choose Us?</span>
              <div className="h-px bg-primary flex-1 max-w-16"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
              What Makes Us Different
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors text-center p-8 stagger-item card-parallax" style={{ transitionDelay: `${index * 150}ms` }}>
                <h3 className="text-xl font-medium mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
          
          {/* Skills Section */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px bg-primary flex-1 max-w-16"></div>
                <span className="text-sm font-medium text-white">Our Expertise & Skills</span>
                <div className="h-px bg-primary flex-1 max-w-16"></div>
              </div>
              <h3 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
                Advanced AI Technology Stack
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                Comprehensive AI-powered creative capabilities across video, photography, design, and custom software solutions.
              </p>
            </div>
            
            {/* Skills Hero Image */}
            <div className="mb-16 relative overflow-hidden rounded-lg">
              <img 
                src={skillsHero} 
                alt="AI Technology and Skills" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {skills.map((skillCategory, index) => (
                <Card key={index} className="border-border/50 hover:border-accent/30 transition-all duration-300 p-6 stagger-item card-parallax hover:scale-105" style={{ transitionDelay: `${index * 100}ms` }}>
                  <h4 className="text-lg font-medium mb-4 text-accent">{skillCategory.category}</h4>
                  <div className="space-y-2">
                    {skillCategory.items.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
            
            {/* AI Tools & Partners Section */}
            <div className="mt-12">
              <div className="text-center mb-12">
                <h4 className="text-2xl md:text-3xl font-light mb-4 leading-tight">
                  Powered by Industry-Leading AI Tools
                </h4>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  We work with the most advanced AI platforms and tools to deliver cutting-edge creative solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {aiTools.map((tool, index) => (
                  <div key={index} className="flex flex-col items-center group stagger-item" style={{ transitionDelay: `${index * 50}ms` }}>
                    <div className="w-16 h-16 bg-card/50 border border-border/30 rounded-lg flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300 hover:scale-110">
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                        {tool.name}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="our-process" className="py-24 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-primary flex-1 max-w-16"></div>
              <span className="text-sm font-medium text-white">Our Process</span>
              <div className="h-px bg-primary flex-1 max-w-16"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
              How We Transform Ideas into Reality
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors text-center p-8 stagger-item card-parallax" style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="text-6xl mb-6 text-primary font-light">{step.step}</div>
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
              <span className="text-sm font-medium text-white">Case Studies</span>
              <div className="h-px bg-primary flex-1 max-w-16"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
              Results That Inspire
            </h2>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-border/50 hover:border-accent/30 transition-colors overflow-hidden scroll-reveal card-parallax" style={{ transitionDelay: `${index * 250}ms` }}>
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="h-80 lg:h-auto">
                    {study.youtubeId ? (
                      <YouTubeEmbed 
                        videoId={study.youtubeId} 
                        title={study.title}
                        className="h-full"
                      />
                    ) : (
                      <div 
                        className="h-full bg-cover bg-center cursor-pointer"
                        style={{
                          backgroundImage: `url('${study.image}')`
                        }}
                        onClick={() => study.imageLink && window.open(study.imageLink, '_blank')}
                      ></div>
                    )}
                  </div>
                  <CardContent className="p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-medium text-accent px-3 py-1 bg-accent/10 rounded-full">
                        {study.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-medium mb-6">{study.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {study.description}
                    </p>
                    <Button 
                      asChild 
                      className="w-fit bg-cosmic text-cosmic-foreground hover:bg-cosmic/90 button-smooth"
                    >
                      <a href={study.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
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
              <span className="text-sm font-medium text-white">Testimonials</span>
              <div className="h-px bg-primary flex-1 max-w-16"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
              From those who love us
            </h2>
          </div>
          
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] md:flex-[0_0_85%] lg:flex-[0_0_60%] pl-4">
                  <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 p-8 h-full hover-lift-smooth">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                          <span className="text-primary font-medium">
                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-border/50 pt-4">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Project:</span>
                          <span className="font-medium">{testimonial.project}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm mt-2">
                          <span className="text-muted-foreground">Result:</span>
                          <span className="font-medium text-accent">{testimonial.savings}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/30 animate-pulse"
                style={{
                  animationDelay: `${index * 1000}ms`,
                  animationDuration: '5000ms'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-primary flex-1 max-w-16"></div>
              <span className="text-sm font-medium text-white">FAQ's</span>
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
                <span className="text-sm font-medium text-white">Contact us</span>
                <div className="h-px bg-primary flex-1 max-w-16"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
                Get in touch
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                Ready to revolutionize your creative process? Let's explore how AI can transform your advertising campaigns, photography projects, video content, and storyboarding. Reach out to discuss your vision and see the possibilities!
              </p>
              
              <div className="space-y-6">
                <Card className="border-border/50 hover:border-primary/50 transition-colors p-6">
                  <div className="flex items-center gap-4">
                    <Phone className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-medium mb-1">Give us a call:</p>
                      <p className="text-muted-foreground">+1 (647) 564 8106</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="border-border/50 hover:border-primary/50 transition-colors p-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-medium mb-1">Send us an email:</p>
                      <p className="text-muted-foreground">sg@s.pictures</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="bg-card/50 rounded-lg p-8 flex flex-col justify-center">
              <div className="text-center space-y-6">
                <h3 className="text-xl font-medium leading-relaxed">Schedule a Free Consultation</h3>
                <p className="text-muted-foreground">Book a meeting to discuss your project and explore how AI can transform your creative process.</p>
                <Button 
                  asChild
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 button-smooth glass-button"
                >
                  <a href="https://calendly.com/surzayon/the-anoma-company-consultation" target="_blank" rel="noopener noreferrer">
                    Book Free Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-16 animate-fade-up">
            <div className="md:col-span-2 flex flex-col items-center text-center">
              <img 
                src="/lovable-uploads/38e4e5bc-e33c-414c-ab90-cfc5468f67a1.png" 
                alt="Anoma Company" 
                className="h-64 w-auto mb-1"
              />
              <p className="text-muted-foreground text-[10px] leading-tight">
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
                <a href="https://instagram.com/nonfungible.ai" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
                <a href="https://www.youtube.com/@CTRLplusAI/videos" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground transition-colors">YouTube</a>
                <a href="https://www.linkedin.com/in/surzayon/" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-12 flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  © 2025 The Anoma Company. All rights reserved.
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Copyright & Legal Notice</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 text-sm leading-relaxed">
                  <div className="text-center font-medium">
                    © 2025 The Anoma Company. All rights reserved.
                  </div>
                  
                  <div className="space-y-4">
                    <p>
                      All content on this website, including text, graphics, logos, images, videos, audio, software, and other materials (collectively, the "Content") are the exclusive property of The Anoma Company or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may access and use the Content solely for your personal, non-commercial use.
                    </p>
                    
                    <p>
                      Any distribution, modification, public display, or commercial use of the Content without the prior written consent of The Anoma Company is strictly prohibited and may result in legal action.
                    </p>
                    
                    <div className="border-t border-border pt-4">
                      <h4 className="font-medium mb-2">Additional Information:</h4>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        <li>• This notice applies to all pages and content on this website</li>
                        <li>• For licensing inquiries, please contact us directly</li>
                        <li>• All AI-generated content is fully licensed for our commercial use</li>
                        <li>• This copyright notice is updated annually and governs all interactions with our website</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300 animate-fade-in hover:shadow-xl"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;