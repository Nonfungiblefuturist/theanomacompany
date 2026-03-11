const WorldMapSVG = () => (
  <svg
    viewBox="0 0 1000 500"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    style={{ opacity: 0.55 }}
    aria-hidden="true"
  >
    {/* Simplified dotted world map - major landmasses as dot clusters */}
    <defs>
      <pattern id="dotPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.7)" />
      </pattern>
    </defs>
    {/* North America */}
    <path d="M120,80 L130,60 L160,50 L200,45 L240,50 L270,55 L280,70 L290,90 L285,110 L270,130 L260,150 L250,170 L240,185 L230,195 L220,200 L200,205 L180,195 L160,185 L145,170 L135,155 L125,140 L118,120 L115,100 Z" fill="url(#dotPattern)" />
    {/* Central America */}
    <path d="M180,195 L195,210 L200,225 L205,240 L210,250 L200,255 L190,245 L185,230 L178,215 Z" fill="url(#dotPattern)" />
    {/* South America */}
    <path d="M210,250 L230,260 L250,270 L270,290 L280,310 L285,340 L280,370 L270,395 L255,410 L240,420 L225,415 L215,400 L210,380 L205,350 L200,320 L195,290 L200,270 Z" fill="url(#dotPattern)" />
    {/* Europe */}
    <path d="M430,55 L450,50 L480,48 L510,50 L530,55 L540,65 L535,80 L525,95 L510,100 L490,105 L470,100 L455,90 L440,80 L435,70 Z" fill="url(#dotPattern)" />
    {/* UK/Ireland */}
    <path d="M420,60 L430,55 L435,65 L428,72 L420,68 Z" fill="url(#dotPattern)" />
    {/* Scandinavia */}
    <path d="M480,25 L490,20 L500,25 L505,40 L500,50 L490,48 L485,35 Z" fill="url(#dotPattern)" />
    {/* Africa */}
    <path d="M440,140 L460,130 L490,125 L520,130 L540,140 L555,160 L560,190 L558,220 L550,250 L540,280 L525,310 L510,330 L495,340 L480,335 L465,320 L455,300 L445,270 L440,240 L435,210 L432,180 L435,155 Z" fill="url(#dotPattern)" />
    {/* Middle East */}
    <path d="M540,100 L560,95 L580,100 L595,110 L600,125 L595,140 L580,145 L560,140 L545,130 L540,115 Z" fill="url(#dotPattern)" />
    {/* Russia / Northern Asia */}
    <path d="M530,55 L560,45 L600,35 L650,30 L700,28 L750,30 L800,35 L830,40 L850,50 L840,65 L820,75 L790,80 L750,78 L700,75 L650,70 L600,65 L560,60 Z" fill="url(#dotPattern)" />
    {/* India */}
    <path d="M620,140 L640,135 L660,140 L670,160 L665,185 L655,210 L640,225 L625,220 L615,200 L610,175 L612,155 Z" fill="url(#dotPattern)" />
    {/* Southeast Asia */}
    <path d="M680,150 L710,145 L730,155 L740,170 L735,185 L720,190 L700,185 L685,175 L680,160 Z" fill="url(#dotPattern)" />
    {/* China / East Asia */}
    <path d="M680,70 L720,65 L760,68 L790,80 L800,95 L795,115 L780,130 L760,140 L735,145 L710,140 L690,130 L675,115 L670,95 L672,80 Z" fill="url(#dotPattern)" />
    {/* Japan */}
    <path d="M810,80 L818,75 L825,80 L828,95 L822,110 L815,105 L810,92 Z" fill="url(#dotPattern)" />
    {/* Indonesia */}
    <path d="M700,210 L730,205 L760,210 L790,215 L800,225 L790,230 L760,228 L730,225 L710,220 Z" fill="url(#dotPattern)" />
    {/* Australia */}
    <path d="M770,280 L810,270 L850,275 L880,290 L890,310 L885,335 L870,350 L845,355 L815,350 L790,335 L775,315 L770,295 Z" fill="url(#dotPattern)" />
    {/* New Zealand */}
    <path d="M905,340 L912,335 L918,340 L920,355 L915,365 L908,360 L905,350 Z" fill="url(#dotPattern)" />
  </svg>
);

export default WorldMapSVG;
