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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-4 right-4 z-50"
    >
      <Button
        variant="outline"
        className="flex items-center gap-2 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow"
        onClick={handleClick}
      >
        <ArrowLeft size={16} />
        <span className="hidden sm:inline">Back to s.pictures</span>
        <span className="sm:hidden">Back</span>
      </Button>
    </motion.div>
  );
}
