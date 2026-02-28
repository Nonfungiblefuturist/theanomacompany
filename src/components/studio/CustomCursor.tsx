import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const ringSize = useRef(32);

  useEffect(() => {
    // Check for touch device
    if ("ontouchstart" in window) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    document.documentElement.style.cursor = "none";

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;

      // Check hover target
      const target = e.target as HTMLElement;
      const isNav = target.closest("[data-cursor='nav']") || target.closest("a:not([data-cursor='project'])") || target.closest("button");
      const isProject = target.closest("[data-cursor='project']");

      if (isProject) {
        ringSize.current = 70;
        ringEl.style.borderColor = "rgba(240,239,232,0.7)";
      } else if (isNav) {
        ringSize.current = 50;
        ringEl.style.borderColor = "rgba(240,239,232,0.5)";
      } else {
        ringSize.current = 32;
        ringEl.style.borderColor = "rgba(240,239,232,0.35)";
      }
    };

    let raf: number;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      const s = ringSize.current;
      ringEl.style.transform = `translate(${ring.current.x - s / 2}px, ${ring.current.y - s / 2}px)`;
      ringEl.style.width = `${s}px`;
      ringEl.style.height = `${s}px`;
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      document.documentElement.style.cursor = "";
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden sm:block"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#fff",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden sm:block"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1px solid rgba(240,239,232,0.35)",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
