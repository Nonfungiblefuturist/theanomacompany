import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function BackToSPictures() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fromSPictures = document.referrer.includes("s.pictures");
    if (fromSPictures) {
      setShow(true);
      // Optional: store in localStorage for persistence across page navigations
      localStorage.setItem("fromSPictures", "true");
    } else if (localStorage.getItem("fromSPictures") === "true") {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const handleClick = () => {
    localStorage.removeItem("fromSPictures");
    window.location.href = "https://www.s.pictures/";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-4 left-4 z-50"
    >
      <Button
        size="lg"
        variant="default"
        className="flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all font-semibold"
        onClick={handleClick}
      >
        <ArrowLeft size={20} />
        <span className="hidden sm:inline">Back to s.pictures</span>
        <span className="sm:hidden">Back</span>
      </Button>
    </motion.div>
  );
}
