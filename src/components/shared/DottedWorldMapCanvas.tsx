import { useEffect, useRef, useCallback } from "react";

interface CityPin {
  name: string;
  country: string;
  lon: number;
  lat: number;
}

const cities: CityPin[] = [
  { name: "Toronto", country: "Canada", lon: -79.4, lat: 43.7 },
  { name: "Mumbai", country: "India", lon: 72.9, lat: 19.1 },
  { name: "Dubai", country: "UAE", lon: 55.3, lat: 25.3 },
  { name: "San Francisco", country: "USA", lon: -122.4, lat: 37.8 },
];

// Simplified continent outlines as [lon, lat] polygons
const continents = [
  // North America
  [[-130,55],[-125,60],[-120,62],[-115,65],[-110,68],[-100,72],[-90,72],[-85,75],[-80,73],[-70,72],[-65,68],[-60,62],[-55,52],[-60,47],[-65,44],[-67,44],[-70,42],[-75,35],[-82,30],[-82,25],[-90,28],[-97,26],[-105,22],[-105,20],[-100,18],[-97,16],[-90,16],[-88,14],[-84,10],[-80,8],[-78,8],[-76,8],[-82,10],[-87,14],[-90,20],[-96,22],[-105,28],[-108,32],[-115,32],[-120,35],[-122,37],[-124,40],[-124,42],[-125,45],[-126,48],[-128,52],[-130,55]],
  // South America
  [[-80,8],[-78,5],[-76,2],[-75,-2],[-76,-5],[-70,-2],[-65,2],[-60,5],[-55,5],[-52,3],[-50,0],[-50,-2],[-48,-5],[-45,-10],[-42,-15],[-40,-20],[-42,-22],[-45,-24],[-48,-28],[-50,-30],[-52,-33],[-55,-35],[-58,-38],[-65,-40],[-67,-42],[-68,-46],[-70,-48],[-73,-50],[-75,-52],[-74,-48],[-72,-44],[-72,-40],[-70,-35],[-70,-30],[-70,-25],[-70,-18],[-75,-15],[-76,-10],[-78,-5],[-80,0],[-80,5],[-80,8]],
  // Europe
  [[-10,36],[-8,38],[-9,42],[-8,44],[-2,44],[2,44],[3,47],[5,48],[8,48],[10,48],[12,46],[14,46],[16,48],[18,48],[20,46],[22,44],[24,42],[26,40],[28,38],[26,38],[24,36],[22,35],[20,36],[18,38],[16,40],[14,42],[12,44],[10,46],[8,48],[5,48],[3,50],[0,50],[-2,52],[-5,50],[-6,54],[-5,56],[-3,58],[5,58],[8,56],[10,56],[12,56],[14,55],[16,56],[18,58],[20,60],[22,62],[24,62],[26,64],[28,66],[30,68],[28,70],[25,70],[20,68],[15,66],[10,64],[5,62],[0,60],[-5,60],[-8,58],[-10,56],[-10,52],[-10,48],[-10,42],[-10,36]],
  // Africa
  [[-18,16],[-16,18],[-14,20],[-12,22],[-8,24],[-5,28],[-2,32],[0,34],[2,36],[5,37],[8,37],[10,36],[12,34],[14,32],[18,32],[22,32],[25,30],[30,30],[32,30],[34,28],[36,24],[38,20],[40,16],[42,12],[44,10],[46,8],[48,6],[50,4],[50,2],[48,0],[46,-2],[42,-4],[40,-8],[38,-12],[36,-16],[35,-20],[34,-24],[33,-28],[30,-30],[28,-32],[26,-34],[22,-34],[20,-32],[18,-30],[16,-28],[14,-24],[12,-18],[10,-12],[8,-6],[6,-2],[4,2],[2,4],[0,6],[-2,6],[-4,4],[-6,4],[-8,6],[-10,6],[-12,8],[-14,10],[-16,12],[-18,14],[-18,16]],
  // Asia
  [[28,38],[30,40],[32,42],[34,44],[36,46],[38,48],[40,50],[42,52],[44,54],[46,56],[48,58],[50,60],[55,62],[60,64],[65,66],[70,68],[75,70],[80,72],[90,72],[100,70],[110,68],[120,66],[130,64],[135,62],[140,58],[142,54],[140,50],[138,48],[135,46],[130,42],[128,38],[126,36],[124,34],[122,32],[120,30],[118,28],[115,24],[112,22],[110,20],[108,18],[106,16],[105,14],[104,12],[102,10],[100,8],[98,8],[96,10],[94,12],[92,14],[90,18],[88,20],[86,22],[84,24],[82,26],[80,28],[76,28],[72,26],[68,24],[64,22],[60,24],[56,26],[52,28],[48,30],[44,34],[40,36],[36,38],[32,38],[28,38]],
  // Australia
  [[115,-14],[118,-16],[120,-18],[124,-16],[128,-15],[130,-14],[134,-13],[136,-14],[138,-16],[140,-18],[142,-20],[144,-22],[146,-24],[148,-26],[150,-28],[152,-30],[154,-32],[152,-34],[150,-36],[148,-38],[146,-38],[142,-36],[140,-34],[138,-34],[136,-32],[134,-32],[132,-30],[130,-28],[128,-26],[126,-24],[124,-22],[122,-20],[120,-18],[118,-20],[116,-22],[114,-24],[114,-28],[116,-32],[118,-34],[120,-34],[118,-36],[116,-34],[114,-32],[113,-28],[112,-24],[114,-20],[115,-18],[115,-14]],
  // Greenland
  [[-55,60],[-50,62],[-45,64],[-40,66],[-38,68],[-35,70],[-30,72],[-25,74],[-20,76],[-22,78],[-28,80],[-35,82],[-42,82],[-48,80],[-52,78],[-55,76],[-58,74],[-60,72],[-58,68],[-55,64],[-55,60]],
  // UK/Ireland
  [[-10,50],[-8,52],[-6,54],[-4,56],[-2,58],[0,58],[2,56],[2,54],[0,52],[-2,50],[-4,50],[-6,50],[-8,50],[-10,50]],
  // Japan
  [[130,30],[132,32],[134,34],[136,36],[138,38],[140,40],[142,42],[144,44],[142,44],[140,42],[138,40],[136,38],[134,36],[132,34],[130,32],[130,30]],
  // Indonesia/Philippines
  [[96,6],[98,4],[100,2],[102,0],[104,-2],[106,-4],[108,-6],[110,-8],[112,-8],[114,-6],[116,-8],[118,-8],[120,-6],[122,-4],[124,-2],[126,0],[128,2],[130,0],[132,-2],[134,-4],[136,-6],[138,-8],[140,-6],[138,-4],[136,-2],[134,0],[132,2],[130,2],[128,4],[126,4],[124,6],[122,6],[120,4],[118,4],[116,4],[114,4],[112,4],[110,4],[108,4],[106,4],[104,4],[102,4],[100,6],[98,6],[96,6]],
  // New Zealand
  [[166,-34],[168,-36],[170,-38],[172,-40],[174,-42],[176,-44],[174,-46],[172,-46],[170,-44],[168,-42],[166,-40],[164,-38],[164,-36],[166,-34]],
  // Madagascar
  [[44,-12],[46,-14],[48,-16],[50,-20],[48,-24],[46,-26],[44,-24],[42,-20],[44,-16],[44,-12]],
];

function pointInPoly(x: number, y: number, poly: number[][]) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0], yi = poly[i][1];
    const xj = poly[j][0], yj = poly[j][1];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

function lonLatToXY(lon: number, lat: number, w: number, h: number): [number, number] {
  const x = ((lon + 180) / 360) * w;
  const latRad = lat * Math.PI / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = (h / 2) - (w * mercN / (2 * Math.PI)) * 0.72;
  return [x, y];
}

function isLand(lon: number, lat: number) {
  for (const poly of continents) {
    if (pointInPoly(lon, lat, poly)) return true;
  }
  return false;
}

const DottedWorldMapCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    // Dot parameters
    const dotSpacingLon = w < 600 ? 3.5 : 2.2;
    const dotSpacingLat = w < 600 ? 3.5 : 2.2;
    const dotRadius = w < 600 ? 1.0 : 1.35;

    ctx.shadowColor = "rgba(255,255,255,0.15)";
    ctx.shadowBlur = 2;

    for (let lon = -180; lon <= 180; lon += dotSpacingLon) {
      for (let lat = -60; lat <= 82; lat += dotSpacingLat) {
        if (isLand(lon, lat)) {
          const [x, y] = lonLatToXY(lon, lat, w, h);
          if (x >= 0 && x <= w && y >= 0 && y <= h) {
            const noise = 0.7 + 0.3 * Math.abs(Math.sin(lon * 0.8 + lat * 0.6));
            const alpha = 0.75 * noise;
            ctx.fillStyle = `rgba(255,255,255,${alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }

    ctx.shadowBlur = 0;

    // Draw city pins
    for (const city of cities) {
      const [cx, cy] = lonLatToXY(city.lon, city.lat, w, h);

      // Pulsing ring (static in canvas — CSS animation handles pulse)
      ctx.strokeStyle = "rgba(128, 0, 255, 0.5)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.stroke();

      // Dot
      ctx.fillStyle = "hsl(270, 100%, 50%)";
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fill();

      // Label with background for legibility
      const label = `${city.name}, ${city.country}`;
      const fontSize = w < 600 ? 10 : 12;
      ctx.font = `600 ${fontSize}px system-ui, -apple-system, sans-serif`;
      ctx.textAlign = "center";
      const textWidth = ctx.measureText(label).width;
      const padX = 6;
      const padY = 3;
      const labelY = cy - 16;

      // Draw dark pill background
      const rx = cx - textWidth / 2 - padX;
      const ry = labelY - fontSize + 1 - padY;
      const rw = textWidth + padX * 2;
      const rh = fontSize + padY * 2;
      const radius = rh / 2;
      ctx.fillStyle = "rgba(0,0,0,0.7)";
      ctx.beginPath();
      ctx.moveTo(rx + radius, ry);
      ctx.lineTo(rx + rw - radius, ry);
      ctx.arcTo(rx + rw, ry, rx + rw, ry + radius, radius);
      ctx.arcTo(rx + rw, ry + rh, rx + rw - radius, ry + rh, radius);
      ctx.lineTo(rx + radius, ry + rh);
      ctx.arcTo(rx, ry + rh, rx, ry + rh - radius, radius);
      ctx.arcTo(rx, ry, rx + radius, ry, radius);
      ctx.closePath();
      ctx.fill();

      // Draw text
      ctx.fillStyle = "rgba(255,255,255,0.95)";
      ctx.fillText(label, cx, labelY);
    }
  }, []);

  useEffect(() => {
    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, [draw]);

  return (
    <div
      ref={wrapRef}
      className="relative w-full"
      style={{ aspectRatio: "2.4 / 1", maxWidth: "1200px", margin: "0 auto" }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default DottedWorldMapCanvas;
