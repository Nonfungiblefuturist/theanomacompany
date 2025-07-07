import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [currentCase, setCurrentCase] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/71af5afa-9fe1-4527-acee-8f0ea355d8d4.png" 
              alt="The Anoma Company" 
              className="h-24 mx-auto mb-8 opacity-90"
            />
          </div>
          <h1 className="font-anoma text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            AI visuals, delivered before<br />
            <span className="text-primary">your coffee gets cold.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Studio-grade campaigns, commercials, and film scenes powered by AI. 
            Cinema-quality results at unprecedented speed.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
          >
            Book a free demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-anoma text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-anoma text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Anoma */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-anoma text-4xl font-bold text-center mb-16">Why Anoma</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex-1 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-anoma text-2xl font-bold mb-4 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Slider */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-anoma text-4xl font-bold text-center mb-16">Case Studies</h2>
          <div className="relative">
            <div className="flex overflow-hidden rounded-lg">
              {caseStudies.map((study, index) => (
                <div 
                  key={index}
                  className={`w-full flex-shrink-0 transition-transform duration-500 ease-in-out ${
                    index === currentCase ? 'translate-x-0' : 'translate-x-full'
                  }`}
                  style={{ transform: `translateX(-${currentCase * 100}%)` }}
                >
                  <Card className="bg-card border-border">
                    <CardContent className="p-12 text-center">
                      <div className="text-8xl mb-6">{study.thumbnail}</div>
                      <h3 className="font-anoma text-2xl font-bold">{study.title}</h3>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentCase ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-anoma text-4xl font-bold text-center mb-16">What Clients Say</h2>
          <div className="relative">
            <Card className="bg-card border-border">
              <CardContent className="p-12 text-center">
                <div className="text-6xl mb-6">💬</div>
                <blockquote className="text-xl italic mb-6 text-muted-foreground">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonials[currentTestimonial].author}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-anoma text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="font-anoma text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Sticky Footer */}
      <footer className="sticky bottom-0 bg-card/95 backdrop-blur border-t border-border py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-6 text-sm">
            <a href="tel:+1234567890" className="hover:text-primary transition-colors">📞 Call Us</a>
            <a href="mailto:hello@anoma.company" className="hover:text-primary transition-colors">✉️ Email</a>
            <a href="#" className="hover:text-primary transition-colors">📅 Book a Call</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-primary transition-colors">🐦</a>
            <a href="#" className="hover:text-primary transition-colors">💼</a>
            <a href="#" className="hover:text-primary transition-colors">📸</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;