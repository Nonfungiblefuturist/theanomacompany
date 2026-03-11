import ScrollReveal from "@/components/shared/ScrollReveal";
import { stats } from "@/data/stats";

const cities = [
  { name: "Toronto", x: "23%", y: "32%" },
  { name: "Dubai", x: "60%", y: "44%" },
  { name: "Mumbai", x: "66%", y: "50%" },
];

const WorldMap = () => (
  <section className="section-card mx-[6px] rounded-[20px] overflow-hidden">
    <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-20 md:py-28">
      {/* Top row */}
      <ScrollReveal type="fade-up">
        <div className="flex items-baseline justify-between mb-10 md:mb-14">
          <h2 className="font-semibold text-foreground" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.03em" }}>
            3 <span className="text-muted-foreground text-lg md:text-xl font-normal ml-1">Cities</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">One Studio.</p>
        </div>
      </ScrollReveal>

      {/* Map */}
      <ScrollReveal type="blur-fade" delay={0.1}>
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{
            aspectRatio: "2.2/1",
            background: "#0a0a0a",
          }}
        >
          {/* SVG World Map - simplified continents */}
          <svg
            viewBox="0 0 1000 455"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Simplified continent outlines */}
            <g fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5">
              {/* North America */}
              <path d="M120,80 L180,60 L220,70 L260,65 L280,80 L270,100 L250,120 L240,140 L250,160 L230,180 L200,190 L180,180 L160,200 L140,190 L120,170 L100,140 L90,120 L100,100 Z" />
              {/* Central America */}
              <path d="M160,200 L175,210 L180,230 L170,245 L160,240 L155,220 Z" />
              {/* South America */}
              <path d="M180,250 L210,240 L240,250 L260,280 L270,320 L260,360 L240,390 L220,400 L200,380 L190,340 L180,300 L175,270 Z" />
              {/* Europe */}
              <path d="M440,70 L460,60 L490,65 L510,75 L520,90 L510,110 L500,130 L480,140 L460,135 L440,120 L430,100 L435,85 Z" />
              {/* UK/Ireland */}
              <path d="M420,80 L430,75 L435,90 L425,95 Z" />
              {/* Africa */}
              <path d="M460,160 L500,150 L530,160 L560,180 L570,220 L560,270 L540,310 L520,340 L500,350 L480,340 L460,300 L450,260 L445,220 L450,180 Z" />
              {/* Middle East */}
              <path d="M540,140 L580,130 L610,145 L620,170 L600,190 L570,185 L550,170 Z" />
              {/* India */}
              <path d="M620,170 L660,155 L680,180 L670,220 L650,250 L630,240 L620,210 L615,190 Z" />
              {/* Russia/Central Asia */}
              <path d="M520,40 L600,30 L700,35 L780,45 L820,55 L800,80 L740,90 L680,85 L620,80 L560,70 L530,60 Z" />
              {/* China/East Asia */}
              <path d="M700,90 L760,85 L800,100 L810,130 L790,160 L760,170 L730,165 L710,140 L700,120 Z" />
              {/* Southeast Asia */}
              <path d="M720,180 L750,175 L770,190 L760,210 L740,220 L720,210 Z" />
              {/* Japan */}
              <path d="M830,100 L840,95 L845,115 L835,125 L825,115 Z" />
              {/* Australia */}
              <path d="M760,310 L820,290 L860,310 L870,340 L850,370 L810,380 L770,360 L755,340 Z" />
              {/* Indonesia */}
              <path d="M730,240 L760,235 L790,240 L800,250 L780,255 L750,250 Z" />
              {/* Greenland */}
              <path d="M300,30 L340,25 L360,35 L350,55 L320,60 L300,50 Z" />
            </g>
          </svg>

          {/* City dots */}
          {cities.map((city) => (
            <div
              key={city.name}
              className="absolute"
              style={{ left: city.x, top: city.y, transform: "translate(-50%, -50%)" }}
            >
              {/* Label */}
              <span
                className="absolute whitespace-nowrap font-medium"
                style={{
                  top: "-24px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {city.name}
              </span>
              {/* Pulsing ring */}
              <span
                className="absolute rounded-full"
                style={{
                  inset: "-4px",
                  border: "1px solid hsla(var(--cosmic), 0.4)",
                  animation: "mapPulse 2s ease-out infinite",
                }}
              />
              {/* Dot */}
              <span
                className="block w-2 h-2 rounded-full"
                style={{ background: "hsl(var(--cosmic))" }}
              />
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Stats line */}
      <ScrollReveal type="fade-up" delay={0.2}>
        <p
          className="text-center mt-10 md:mt-14"
          style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}
        >
          {stats.map((s, i) => (
            <span key={s.label}>
              {i > 0 && "  ·  "}
              {s.value}{s.suffix} {s.label}
            </span>
          ))}
          {"  ·  100% Client Retention"}
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default WorldMap;
