import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  links: { label: string; to: string }[];
  onClose: () => void;
}

const MobileMenu = ({ links, onClose }: MobileMenuProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8"
  >
    {links.map((l, i) => (
      <motion.div
        key={l.to}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1, duration: 0.4 }}
      >
        <Link
          to={l.to}
          onClick={onClose}
          className="font-['Anta'] text-3xl text-foreground hover:text-primary transition-colors"
        >
          {l.label}
        </Link>
      </motion.div>
    ))}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: links.length * 0.1, duration: 0.4 }}
    >
      <Link
        to="/contact"
        onClick={onClose}
        className="button-smooth font-['Anta'] text-lg px-8 py-3 rounded-full text-primary-foreground mt-4 inline-block"
        style={{ background: "var(--gradient-spectral)" }}
      >
        Get In Touch
      </Link>
    </motion.div>
  </motion.div>
);

export default MobileMenu;
