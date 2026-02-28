import { useState, useEffect } from "react";

interface PageLoaderProps {
  onComplete: () => void;
}

const PageLoader = ({ onComplete }: PageLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animate progress from 0 to 100 over ~800ms
    const start = performance.now();
    const duration = 800;

    const animate = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setFadeOut(true), 100);
        setTimeout(() => onComplete(), 500);
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-400 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#0a0a0a" }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          width: 120,
          height: 3,
          background: "rgba(240,239,232,0.1)",
          borderRadius: 2,
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#f0efe8",
            borderRadius: 2,
            transition: "width 0.05s linear",
          }}
        />
      </div>
    </div>
  );
};

export default PageLoader;
