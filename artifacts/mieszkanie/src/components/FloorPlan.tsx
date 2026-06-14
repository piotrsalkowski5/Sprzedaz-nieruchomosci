import { useState } from "react";
import { motion } from "framer-motion";

// Gallery tab indices matching Gallery.tsx categories order
const ROOM_TAB: Record<string, number> = {
  salon: 0,
  sypialnia: 1,
  lazienka: 2,
  kuchnia: 3,
  przedpokój: 4,
  balkon: 7,
};

interface Room {
  id: string;
  label: string;
  area: string;
  tab: number;
  // SVG rect coordinates (in drawio coordinate space)
  x: number;
  y: number;
  w: number;
  h: number;
  // Approximate center for label positioning
  cx: number;
  cy: number;
}

// Floor 1 rooms — coordinates from drawio file (page space 900×1100)
const FLOOR1_ROOMS: Room[] = [
  {
    id: "salon",
    label: "Salon",
    area: "25,5 m²",
    tab: ROOM_TAB.salon,
    x: 146, y: 116, w: 264, h: 358,
    cx: 278, cy: 295,
  },
  {
    id: "kuchnia",
    label: "Kuchnia",
    area: "11 m²",
    tab: ROOM_TAB.kuchnia,
    x: 426, y: 116, w: 308, h: 154,
    cx: 580, cy: 193,
  },
  {
    id: "przedpokój",
    label: "Przedpokój",
    area: "8 m²",
    tab: ROOM_TAB["przedpokój"],
    x: 426, y: 286, w: 134, h: 188,
    cx: 493, cy: 380,
  },
  {
    id: "lazienka",
    label: "Łazienka",
    area: "4,5 m²",
    tab: ROOM_TAB.lazienka,
    x: 576, y: 361, w: 158, h: 113,
    cx: 655, cy: 418,
  },
  {
    id: "balkon",
    label: "Balkon",
    area: "8,5 m²",
    tab: ROOM_TAB.balkon,
    x: 20, y: 215, w: 110, h: 230,
    cx: 75, cy: 320,
  },
];

// Floor 2 rooms
const FLOOR2_ROOMS: Room[] = [
  {
    id: "sypialnia",
    label: "Sypialnia",
    area: "23 m²",
    tab: ROOM_TAB.sypialnia,
    x: 146, y: 656, w: 588, h: 328,
    cx: 440, cy: 820,
  },
];

interface FloorPlanProps {
  onRoomClick: (tabIndex: number) => void;
  activeTab: number | null;
}

function RoomOverlay({
  room,
  active,
  onClick,
}: {
  room: Room;
  active: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <g
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer" }}
      data-testid={`floorplan-room-${room.id}`}
    >
      <rect
        x={room.x}
        y={room.y}
        width={room.w}
        height={room.h}
        fill={active ? "rgba(170,130,60,0.25)" : hovered ? "rgba(170,130,60,0.15)" : "rgba(248,246,240,0.0)"}
        stroke={active ? "#aa823c" : hovered ? "#aa823c" : "transparent"}
        strokeWidth={active || hovered ? 2 : 0}
        style={{ transition: "fill 0.2s, stroke 0.2s" }}
      />
      {(hovered || active) && (
        <text
          x={room.cx}
          y={room.cy + 18}
          textAnchor="middle"
          fontSize="11"
          fontFamily="Arial, sans-serif"
          fill={active ? "#7a5c1e" : "#5a4010"}
          fontWeight="600"
          pointerEvents="none"
        >
          kliknij →
        </text>
      )}
    </g>
  );
}

export function FloorPlan({ onRoomClick, activeTab }: FloorPlanProps) {
  return (
    <section id="rzut" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary mb-4">
              Rzut mieszkania
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Kliknij pomieszczenie, aby przejść do jego zdjęć w galerii.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <svg
              viewBox="0 0 870 1040"
              width="100%"
              style={{ maxWidth: 870 }}
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Interaktywny rzut mieszkania"
            >
              {/* ── FLOOR 1 ─────────────────────────────────────── */}
              <text x="300" y="58" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#1e293b">PIĘTRO I</text>

              {/* Outer walls */}
              <rect x="130" y="100" width="620" height="16" fill="#0079A8" />
              <rect x="130" y="474" width="620" height="16" fill="#0079A8" />
              <rect x="130" y="100" width="16" height="390" fill="#0079A8" />
              <rect x="734" y="100" width="16" height="390" fill="#0079A8" />

              {/* Interior walls */}
              <rect x="410" y="100" width="16" height="170" fill="#0079A8" />
              <rect x="410" y="350" width="16" height="124" fill="#0079A8" />
              <rect x="410" y="270" width="55" height="16" fill="#0079A8" />
              <rect x="525" y="270" width="225" height="16" fill="#0079A8" />
              <rect x="560" y="410" width="16" height="64" fill="#0079A8" />
              <rect x="560" y="345" width="190" height="16" fill="#0079A8" />

              {/* Windows – light blue-gray */}
              <rect x="617" y="100" width="80" height="16" fill="#c6dde0" stroke="#6b9fa3" strokeWidth="1" />
              <rect x="130" y="348" width="16" height="66" fill="#c6dde0" stroke="#6b9fa3" strokeWidth="1" />
              <rect x="130" y="279" width="16" height="66" fill="#c6dde0" stroke="#6b9fa3" strokeWidth="1" />
              <rect x="458" y="100" width="80" height="16" fill="#c6dde0" stroke="#6b9fa3" strokeWidth="1" />
              <rect x="130" y="240" width="16" height="37" fill="#c6dde0" stroke="#6b9fa3" strokeWidth="1" />

              {/* Entry gap (door opening in bottom wall) */}
              <rect x="427" y="474" width="50" height="16" fill="#f8f8f8" />

              {/* Entry door arc indicator */}
              <line x1="427" y1="474" x2="477" y2="474" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,2" />
              <path d="M 427 474 A 50 50 0 0 0 477 474" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2,2" />

              {/* Entry arrow */}
              <polygon points="454,510 440,530 468,530" fill="#0079A8" stroke="#1e293b" strokeWidth="1" />

              {/* Staircase (Floor 1 – right side) */}
              {[575, 590, 605, 620, 635, 650, 665, 680, 695, 710].map((x, i) => (
                <line key={i} x1={x} y1="286" x2={x} y2="345" stroke="#333" strokeWidth="1.5" />
              ))}
              {/* Staircase bounding box */}
              <rect x="575" y="286" width="140" height="59" fill="none" stroke="#555" strokeWidth="1" />

              {/* Balcony */}
              <rect x="20" y="215" width="110" height="230" fill="none" stroke="#333" strokeWidth="2" />
              <rect x="32" y="228" width="98" height="204" fill="none" stroke="#333" strokeWidth="1" />

              {/* Compass – floor 1 */}
              <text x="805" y="56" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#1e293b">N</text>
              <circle cx="805" cy="90" r="28" fill="none" stroke="#1e293b" strokeWidth="2" />
              <polygon points="805,66 797,105 805,98 813,105" fill="#bbb" stroke="#1e293b" strokeWidth="1" />

              {/* Room base fills (cream) */}
              {FLOOR1_ROOMS.map((room) => (
                <rect key={room.id} x={room.x} y={room.y} width={room.w} height={room.h} fill="#f8f6f0" />
              ))}

              {/* Room labels */}
              {FLOOR1_ROOMS.map((room) => (
                <g key={`label-${room.id}`} pointerEvents="none">
                  <text x={room.cx} y={room.cy} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#1e293b">{room.label}</text>
                  <text x={room.cx} y={room.cy + 16} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#64748b">{room.area}</text>
                </g>
              ))}

              {/* Clickable overlays — floor 1 */}
              {FLOOR1_ROOMS.map((room) => (
                <RoomOverlay
                  key={`overlay-${room.id}`}
                  room={room}
                  active={activeTab === room.tab}
                  onClick={() => onRoomClick(room.tab)}
                />
              ))}

              {/* ── FLOOR 2 ─────────────────────────────────────── */}
              <text x="300" y="600" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#1e293b">PIĘTRO II</text>

              {/* Outer walls – floor 2 */}
              <rect x="130" y="640" width="620" height="16" fill="#0079A8" />
              <rect x="130" y="984" width="620" height="16" fill="#0079A8" />
              <rect x="130" y="640" width="16" height="360" fill="#0079A8" />
              <rect x="734" y="640" width="16" height="360" fill="#0079A8" />

              {/* Windows – floor 2 */}
              <rect x="220" y="984" width="80" height="16" fill="#c6dde0" stroke="#6b9fa3" strokeWidth="1" />
              <rect x="580" y="984" width="80" height="16" fill="#c6dde0" stroke="#6b9fa3" strokeWidth="1" />

              {/* Staircase shaft – floor 2 */}
              <rect x="395" y="640" width="54" height="120" fill="#fff" stroke="#333" strokeWidth="2" />
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <line key={i} x1="395" y1={655 + i * 13} x2="449" y2={655 + i * 13} stroke="#333" strokeWidth="1" />
              ))}

              {/* Compass – floor 2 */}
              <text x="805" y="592" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#1e293b">N</text>
              <circle cx="805" cy="626" r="28" fill="none" stroke="#1e293b" strokeWidth="2" />
              <polygon points="805,602 797,641 805,634 813,641" fill="#bbb" stroke="#1e293b" strokeWidth="1" />

              {/* Sypialnia base fill */}
              {FLOOR2_ROOMS.map((room) => (
                <rect key={room.id} x={room.x} y={room.y} width={room.w} height={room.h} fill="#f8f6f0" />
              ))}

              {/* Sypialnia label */}
              {FLOOR2_ROOMS.map((room) => (
                <g key={`label-${room.id}`} pointerEvents="none">
                  <text x={room.cx} y={room.cy} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#1e293b">{room.label}</text>
                  <text x={room.cx} y={room.cy + 16} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#64748b">{room.area}</text>
                </g>
              ))}

              {/* Clickable overlay – floor 2 */}
              {FLOOR2_ROOMS.map((room) => (
                <RoomOverlay
                  key={`overlay-${room.id}`}
                  room={room}
                  active={activeTab === room.tab}
                  onClick={() => onRoomClick(room.tab)}
                />
              ))}
            </svg>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 inline-block" style={{ background: "#0079A8" }} />
              Ściany
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 inline-block border border-[#6b9fa3]" style={{ background: "#c6dde0" }} />
              Okna
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 inline-block border border-[#aa823c]" style={{ background: "rgba(170,130,60,0.2)" }} />
              Pomieszczenie (kliknij)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
