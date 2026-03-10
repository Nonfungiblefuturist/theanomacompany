import { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  value: number;
  suffix: string;
  label: string;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

const StatsCounter = ({ value, suffix, label }: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setCount(Math.round(easeOutCubic(t) * value));
      if (t < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, value]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-['Anta'] text-4xl md:text-5xl text-primary">
        {count}
        <span className="text-muted-foreground">{suffix}</span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground uppercase tracking-widest">{label}</p>
    </div>
  );
};

export default StatsCounter;
