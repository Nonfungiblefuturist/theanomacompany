import { Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-[hsl(0_0%_13%)] px-6 py-6 font-inter">
    <div className="mx-auto flex max-w-7xl items-center justify-between">
      <p className="text-sm text-[hsl(0_0%_40%)]">© 2026 The Anoma Company. Toronto.</p>
      <div className="flex gap-4">
        <a href="https://instagram.com/controlplusai" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[hsl(0_0%_40%)] transition-colors hover:text-foreground">
          <Instagram size={18} />
        </a>
        <a href="https://youtube.com/@CTRLplusAI" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[hsl(0_0%_40%)] transition-colors hover:text-foreground">
          <Youtube size={18} />
        </a>
        <a href="https://linkedin.com/company/theanomacompany" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[hsl(0_0%_40%)] transition-colors hover:text-foreground">
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
