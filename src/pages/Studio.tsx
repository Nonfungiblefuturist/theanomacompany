import NebulaEffects from "@/components/shared/NebulaEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABand from "@/components/layout/CTABand";
import ScrollReveal from "@/components/shared/ScrollReveal";
import StatsCounter from "@/components/shared/StatsCounter";
import LogoMarquee from "@/components/shared/LogoMarquee";
import FlipButton from "@/components/shared/FlipButton";
import { stats } from "@/data/stats";
import { team } from "@/data/team";
import { Plus } from "lucide-react";

const Studio = () => (
  <div className="min-h-screen text-foreground" style={{ background: "#0F0F0F" }}>
    <NebulaEffects />
    <Navbar />

    {/* Hero Image */}
    <section className="section-card mx-[6px] mt-[6px] rounded-[20px] overflow-hidden">
      <div className="aspect-[21/9] md:aspect-[3/1] w-full">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&h=600&fit=crop"
          alt="The Anoma Company studio"
          className="w-full h-full object-cover"
        />
      </div>
    </section>

    {/* About section */}
    <section className="section-card mx-[6px] mt-[6px] rounded-[20px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-24 md:py-32">
        <ScrollReveal type="blur-fade">
          <h1
            className="text-foreground font-bold"
            style={{ fontSize: "clamp(2.75rem, 5vw, 5.5rem)", letterSpacing: "-0.03em" }}
          >
            About Us.
          </h1>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.1}>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-3xl" style={{ lineHeight: 1.7 }}>
            We believe creative production should be bold, powerful, and unapologetically original. Through AI solutions, cinematic campaigns, and precision-engineered content, we help brands cut through the noise and make a lasting impression.
          </p>
        </ScrollReveal>

        {/* Mission */}
        <ScrollReveal type="fade-up" delay={0.2}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-[30%_1fr] gap-8 md:gap-12">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--cosmic))" }} />
              Our Mission
            </p>
            <p className="text-foreground text-lg md:text-xl" style={{ lineHeight: 1.7 }}>
              Our mission is to redefine creative production through AI-native craft and cinematic vision. We build AI solutions that automate and elevate, produce creative campaigns that demand attention, and deliver content that moves people. Every project is an opportunity to prove that bold ideas, powered by intelligent tools, create unforgettable results.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal type="fade-up" delay={0.3}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s) => (
              <div key={s.label}>
                <StatsCounter value={s.value} suffix={s.suffix} label={s.label} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Large cinematic image */}
    <section className="section-card mx-[6px] mt-[6px] rounded-[20px] overflow-hidden">
      <div className="aspect-[16/7] w-full">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&h=700&fit=crop"
          alt="Cinematic production"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </section>

    {/* What We Do */}
    <section className="section-card mx-[6px] mt-[6px] rounded-[20px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-24 md:py-32">
        <ScrollReveal type="fade-up">
          <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--cosmic))" }} />
            What We Do
          </p>
        </ScrollReveal>
        <ScrollReveal type="blur-fade">
          <h2
            className="text-foreground font-semibold"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            From AI video production to creative campaigns, branding, and AI solutions, we craft stunning digital experiences tailored to your vision.
          </h2>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.15}>
          <div className="mt-8">
            <FlipButton text="View projects" href="/work" />
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Logo Marquee */}
    <section className="section-card mx-[6px] mt-[6px] rounded-[20px] overflow-hidden py-12">
      <div className="max-w-[1600px] mx-auto px-6">
        <LogoMarquee />
      </div>
    </section>

    {/* Team */}
    <section className="section-card mx-[6px] mt-[6px] rounded-[20px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-24 md:py-32">
        <ScrollReveal type="fade-up">
          <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--cosmic))" }} />
            Our Team
          </p>
        </ScrollReveal>
        <ScrollReveal type="blur-fade">
          <h2
            className="text-foreground font-semibold"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Meet the Anoma team.
          </h2>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.1}>
          <div className="mt-2">
            <FlipButton text="Contact us" href="/contact" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          {team.map((member, i) => (
            <ScrollReveal key={i} type="fade-up" delay={i * 0.08}>
              <div className="group">
                <div
                  className="aspect-[3/4] rounded-2xl overflow-hidden"
                  style={{ background: "hsl(var(--card))", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {member.isHiring ? (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                        <Plus size={20} className="text-muted-foreground/50" />
                      </div>
                      <p className="text-sm text-muted-foreground">We're Hiring</p>
                    </div>
                  ) : (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  )}
                </div>
                {!member.isHiring && (
                  <div className="mt-3">
                    <p className="font-medium text-foreground text-sm">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="mt-[6px]"><CTABand /></div>
    <div className="mt-[6px]"><Footer /></div>
  </div>
);

export default Studio;
