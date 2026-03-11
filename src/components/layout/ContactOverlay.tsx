import { useContactOverlay } from "@/contexts/ContactOverlayContext";
import { siteConfig } from "@/data/siteConfig";
import { AnimatePresence, motion } from "framer-motion";

const ContactOverlay = () => {
  const { contactOpen, setContactOpen } = useContactOverlay();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = `New inquiry from ${fd.get("name")}`;
    const body = `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nService: ${fd.get("service")}\nBudget: ${fd.get("budget")}\nMessage: ${fd.get("message")}`;
    window.location.href = `mailto:hello@theanoma.company?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setContactOpen(false);
  };

  return (
    <AnimatePresence>
      {contactOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
          onClick={() => setContactOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto rounded-[20px] p-8 md:p-12"
            style={{
              background: "rgba(15,15,15,0.85)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setContactOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full text-foreground text-base cursor-pointer transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* LEFT — Info */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[13px] uppercase tracking-[0.05em]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--cosmic))" }} />
                  Contact us
                </div>

                <h2 className="text-foreground font-semibold" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", letterSpacing: "-0.03em" }}>
                  Get in Touch.
                </h2>

                <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Tell us what you're building. We'll figure out how to help.
                </p>

                <div className="flex flex-col gap-3 mt-4">
                  <a href={`mailto:${siteConfig.email}`} className="text-foreground text-[15px] no-underline transition-opacity duration-300 hover:opacity-60">
                    {siteConfig.email}
                  </a>
                  <div className="h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Toronto, Ontario, Canada</p>
                  <div className="h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                  <div className="flex gap-4">
                    {siteConfig.socials.twitter && (
                      <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-[13px] no-underline transition-colors duration-300 hover:text-foreground" style={{ color: "rgba(255,255,255,0.5)" }}>Twitter/X</a>
                    )}
                    <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[13px] no-underline transition-colors duration-300 hover:text-foreground" style={{ color: "rgba(255,255,255,0.5)" }}>Instagram</a>
                    <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-[13px] no-underline transition-colors duration-300 hover:text-foreground" style={{ color: "rgba(255,255,255,0.5)" }}>YouTube</a>
                    <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[13px] no-underline transition-colors duration-300 hover:text-foreground" style={{ color: "rgba(255,255,255,0.5)" }}>LinkedIn</a>
                  </div>
                </div>
              </div>

              {/* RIGHT — Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[12px] font-medium uppercase tracking-[0.03em] mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>Name *</label>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3.5 rounded-[10px] text-foreground text-sm outline-none transition-[border-color] duration-300 placeholder:opacity-20"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "inherit" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(128,0,255,0.4)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-medium uppercase tracking-[0.03em] mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full px-4 py-3.5 rounded-[10px] text-foreground text-sm outline-none transition-[border-color] duration-300 placeholder:opacity-20"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "inherit" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(128,0,255,0.4)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-medium uppercase tracking-[0.03em] mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>Service interested in</label>
                  <select
                    name="service"
                    className="w-full px-4 py-3.5 rounded-[10px] text-foreground text-sm outline-none cursor-pointer appearance-none transition-[border-color] duration-300"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontFamily: "inherit",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 14px center",
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(128,0,255,0.4)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  >
                    <option value="" style={{ background: "#111" }}>Select...</option>
                    <option value="ai-video" style={{ background: "#111" }}>AI Video Production</option>
                    <option value="campaigns" style={{ background: "#111" }}>Creative Campaigns</option>
                    <option value="ai-solutions" style={{ background: "#111" }}>AI Solutions</option>
                    <option value="branding" style={{ background: "#111" }}>Branding</option>
                    <option value="other" style={{ background: "#111" }}>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-medium uppercase tracking-[0.03em] mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>Budget range</label>
                  <select
                    name="budget"
                    className="w-full px-4 py-3.5 rounded-[10px] text-foreground text-sm outline-none cursor-pointer appearance-none transition-[border-color] duration-300"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontFamily: "inherit",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 14px center",
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(128,0,255,0.4)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  >
                    <option value="" style={{ background: "#111" }}>Select...</option>
                    <option value="under-5k" style={{ background: "#111" }}>Under $5K</option>
                    <option value="5k-15k" style={{ background: "#111" }}>$5K – $15K</option>
                    <option value="15k-50k" style={{ background: "#111" }}>$15K – $50K</option>
                    <option value="50k+" style={{ background: "#111" }}>$50K+</option>
                    <option value="unsure" style={{ background: "#111" }}>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-medium uppercase tracking-[0.03em] mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>Message *</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-[10px] text-foreground text-sm outline-none transition-[border-color] duration-300 resize-y placeholder:opacity-20"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "inherit", minHeight: 100 }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(128,0,255,0.4)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-[10px] text-sm font-medium cursor-pointer transition-all duration-300 mt-1"
                  style={{ background: "white", color: "#0a0a0a", border: "none", fontFamily: "inherit" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "hsl(270, 100%, 50%)"; e.currentTarget.style.color = "white"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#0a0a0a"; }}
                >
                  Send Message ↗
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactOverlay;
