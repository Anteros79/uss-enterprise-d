// Photo-Accurate High-Resolution Procedural Texture Generator for USS Enterprise NCC-1701-D
// Grounded in ILM 6-foot / 4-foot studio miniature references & TNG Season 5–7 Stage 9 set plans:
// 1. 4096x4096 Dorsal & Ventral Saucer Color, Emissive, and Specular Roughness maps with ultra-subtle
//    (~2.2%) interlocking Starfleet pearlescent Aztec plating, concentric window rings, flush lifeboats,
//    tan RCS/sensor pads, and crisp U.S.S. ENTERPRISE / NCC-1701-D registry.
// 2. 4096x4096 Secondary Hull & 2048x2048 Cobra-Head / Seamless Hull Aztec maps (zero blocky checkerboards).
// 3. 2048x1024 Almond Main Navigational Deflector Dish (copper-amber outer louvers + sapphire/cyan stadium ring).
// 4. 1024x512 Shuttlebay 1701-D Pennant, 2048x1024 Class-M Planet Veridian IV texture, and 1024x512 Bussard louvers.
// 5. High-DPI 1024x512 LCARS Okudagram Console displays & 2048x1024 42-Deck Master Systems Display (MSD).

import * as THREE from 'three';

const textureCache = new Map();

// Subtle pearlescent Starfleet dove-grey / celadon-grey Aztec palette (~2.2% contrast — never a harsh chessboard)
const AZTEC_ALBEDO = [
  '#cad3dc', '#cdd6df', '#d0d8e1', '#c8d1da',
  '#ced7e0', '#cbd4dd', '#cfd8e0', '#c9d2db'
];
const AZTEC_ROUGH = [
  '#5a5a5a', '#646464', '#555555', '#6b6b6b',
  '#5e5e5e', '#686868', '#585858', '#626262'
];

// Draws interlocking L- and T-stepped Starfleet Aztec sub-panels into rectangular UV regions
function paintInterlockingAztecGrid(ctx, rctx, width, height, cols, rows, seamAlpha = 0.11) {
  const cw = width / cols;
  const ch = height / rows;

  ctx.fillStyle = '#ccd5de';
  ctx.fillRect(0, 0, width, height);
  if (rctx) {
    rctx.fillStyle = '#606060';
    rctx.fillRect(0, 0, width, height);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const h1 = (r * 31 + c * 53 + ((r >> 1) * 17) + ((c >> 1) * 29)) & 7;
      const h2 = (r * 19 + c * 41 + 3) & 7;
      const x = c * cw;
      const y = r * ch;

      ctx.fillStyle = AZTEC_ALBEDO[h1];
      ctx.fillRect(x, y, cw, ch);
      if (rctx) {
        rctx.fillStyle = AZTEC_ROUGH[h1];
        rctx.fillRect(x, y, cw, ch);
      }

      // Interlocking L-shaped or stepped Starfleet Aztec sub-panel inside each cell
      const motif = (r * 7 + c * 13) % 4;
      ctx.fillStyle = AZTEC_ALBEDO[h2];
      if (rctx) rctx.fillStyle = AZTEC_ROUGH[h2];

      if (motif === 0) {
        ctx.fillRect(x + cw * 0.35, y, cw * 0.65, ch * 0.52);
        ctx.fillRect(x + cw * 0.62, y + ch * 0.52, cw * 0.38, ch * 0.48);
        if (rctx) {
          rctx.fillRect(x + cw * 0.35, y, cw * 0.65, ch * 0.52);
          rctx.fillRect(x + cw * 0.62, y + ch * 0.52, cw * 0.38, ch * 0.48);
        }
      } else if (motif === 1) {
        ctx.fillRect(x, y + ch * 0.45, cw * 0.72, ch * 0.55);
        ctx.fillRect(x, y, cw * 0.32, ch * 0.45);
        if (rctx) {
          rctx.fillRect(x, y + ch * 0.45, cw * 0.72, ch * 0.55);
          rctx.fillRect(x, y, cw * 0.32, ch * 0.45);
        }
      } else if (motif === 2) {
        ctx.fillRect(x + cw * 0.18, y + ch * 0.22, cw * 0.64, ch * 0.56);
        if (rctx) rctx.fillRect(x + cw * 0.18, y + ch * 0.22, cw * 0.64, ch * 0.56);
      } else {
        ctx.fillRect(x, y + ch * 0.28, cw, ch * 0.38);
        ctx.fillRect(x + cw * 0.42, y, cw * 0.28, ch);
        if (rctx) {
          rctx.fillRect(x, y + ch * 0.28, cw, ch * 0.38);
          rctx.fillRect(x + cw * 0.42, y, cw * 0.28, ch);
        }
      }
    }
  }

  if (seamAlpha > 0) {
    ctx.fillStyle = `rgba(74, 88, 104, ${seamAlpha})`;
    for (let r = 0; r < rows; r += 2) {
      ctx.fillRect(0, r * ch, width, 1);
    }
    for (let c = 0; c < cols; c += 2) {
      ctx.fillRect(c * cw, 0, 1, height);
    }
  }
}

// Radial interlocking Starfleet Aztec generator for Saucer & Cobra Head
function paintRadialInterlockingAztec(ctx, rctx, cx, cy, rStart, numRings, ringStep, baseSectors) {
  for (let ring = 0; ring < numRings; ring++) {
    const rInner = rStart + ring * ringStep;
    const rOuter = rInner + ringStep + 0.4;
    const rMid = (rInner + rOuter) * 0.5;
    const sectors = baseSectors + Math.floor(ring * 2.5);

    for (let s = 0; s < sectors; s++) {
      const a0 = (s / sectors) * Math.PI * 2;
      const a1 = ((s + 1.002) / sectors) * Math.PI * 2;
      const aMid = (a0 + a1) * 0.5;
      const h1 = (ring * 23 + s * 41 + ((ring >> 1) * 13)) & 7;
      const h2 = (ring * 17 + s * 29 + 5) & 7;

      ctx.fillStyle = AZTEC_ALBEDO[h1];
      ctx.beginPath();
      ctx.arc(cx, cy, rOuter, a0, a1);
      ctx.arc(cx, cy, rInner, a1, a0, true);
      ctx.closePath();
      ctx.fill();

      if (rctx) {
        rctx.fillStyle = AZTEC_ROUGH[h1];
        rctx.beginPath();
        rctx.arc(cx, cy, rOuter, a0, a1);
        rctx.arc(cx, cy, rInner, a1, a0, true);
        rctx.closePath();
        rctx.fill();
      }

      // Stepped interlocking L-subpanel inside half the radial cells to eliminate pie-wedge blockiness
      if ((ring + s) % 2 === 0) {
        ctx.fillStyle = AZTEC_ALBEDO[h2];
        ctx.beginPath();
        ctx.arc(cx, cy, rOuter, a0, aMid);
        ctx.arc(cx, cy, rMid, aMid, a0, true);
        ctx.closePath();
        ctx.fill();

        if (rctx) {
          rctx.fillStyle = AZTEC_ROUGH[h2];
          rctx.beginPath();
          rctx.arc(cx, cy, rOuter, a0, aMid);
          rctx.arc(cx, cy, rMid, aMid, a0, true);
          rctx.closePath();
          rctx.fill();
        }
      }
    }
  }
}

// Seamless 2048x2048 Starfleet Aztec Hull Material Maps for Nacelles, Pylons, Bridge Dome & Shuttlebay
export function getHullAztecMaps() {
  if (textureCache.has('hull_aztec_maps')) return textureCache.get('hull_aztec_maps');

  const size = 2048;
  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = size;
  colorCanvas.height = size;
  const ctx = colorCanvas.getContext('2d');

  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = size;
  roughCanvas.height = size;
  const rctx = roughCanvas.getContext('2d');

  paintInterlockingAztecGrid(ctx, rctx, size, size, 72, 72, 0.09);

  const map = new THREE.CanvasTexture(colorCanvas);
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(3, 3);
  map.anisotropy = 8;
  map.colorSpace = THREE.SRGBColorSpace;

  const roughnessMap = new THREE.CanvasTexture(roughCanvas);
  roughnessMap.wrapS = THREE.RepeatWrapping;
  roughnessMap.wrapT = THREE.RepeatWrapping;
  roughnessMap.repeat.set(3, 3);
  roughnessMap.anisotropy = 8;

  const result = { map, roughnessMap };
  textureCache.set('hull_aztec_maps', result);
  return result;
}

export function getSaucerDorsalMaps() {
  if (textureCache.has('saucer_dorsal_maps')) return textureCache.get('saucer_dorsal_maps');

  const size = 4096;
  const cx = size / 2;
  const cy = size / 2;

  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = size;
  colorCanvas.height = size;
  const ctx = colorCanvas.getContext('2d');

  const emCanvas = document.createElement('canvas');
  emCanvas.width = size;
  emCanvas.height = size;
  const ectx = emCanvas.getContext('2d');
  ectx.fillStyle = '#000000';
  ectx.fillRect(0, 0, size, size);

  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = size;
  roughCanvas.height = size;
  const rctx = roughCanvas.getContext('2d');
  rctx.fillStyle = '#606060';
  rctx.fillRect(0, 0, size, size);

  ctx.fillStyle = '#ccd5de';
  ctx.fillRect(0, 0, size, size);

  // Ultra-fine 96-ring interlocking radial Starfleet Aztec plating (zero coarse blocks!)
  paintRadialInterlockingAztec(ctx, rctx, cx, cy, 80, 96, 20.2, 132);

  // Subtle concentric terrace accent bands matching ILM 6-foot miniature (Ref 1)
  const terraceBands = [
    { rIn: 1435, rOut: 1505, color: 'rgba(176, 189, 202, 0.38)' },
    { rIn: 1860, rOut: 1985, color: 'rgba(172, 185, 198, 0.35)' }
  ];
  for (const b of terraceBands) {
    ctx.beginPath();
    ctx.arc(cx, cy, b.rOut, 0, Math.PI * 2);
    ctx.arc(cx, cy, b.rIn, 0, Math.PI * 2, true);
    ctx.fillStyle = b.color;
    ctx.fill();
  }

  // Delicate hairline radial & concentric hull panel seams
  ctx.strokeStyle = 'rgba(72, 86, 102, 0.14)';
  ctx.lineWidth = 1.1;
  for (let i = 0; i < 144; i++) {
    const angle = (i / 144) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * 185, cy + Math.sin(angle) * 185);
    ctx.lineTo(cx + Math.cos(angle) * 2010, cy + Math.sin(angle) * 2010);
    ctx.stroke();
  }

  const stepRadii = [290, 430, 575, 720, 865, 1010, 1155, 1300, 1505, 1650, 1790, 1905, 1990];
  for (const r of stepRadii) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(64, 78, 95, 0.22)';
    ctx.lineWidth = 1.6;
    ctx.stroke();
  }

  // 16 Concentric Rings of Fine Scale-Accurate Twin & Triple Radial Windows (Matching Ref 1)
  const dorsalWindowRings = [
    { r: 355, count: 100 },
    { r: 435, count: 120 },
    { r: 525, count: 144 },
    { r: 625, count: 168 },
    { r: 725, count: 192 },
    { r: 825, count: 216 },
    { r: 935, count: 240 },
    { r: 1050, count: 268 },
    { r: 1165, count: 296 },
    { r: 1545, count: 348 },
    { r: 1620, count: 372 },
    { r: 1700, count: 396 },
    { r: 1775, count: 420 },
    { r: 1845, count: 444 },
    { r: 1912, count: 468 },
    { r: 1962, count: 492 }
  ];

  for (const wr of dorsalWindowRings) {
    for (let i = 0; i < wr.count; i++) {
      const a = (i / wr.count) * Math.PI * 2;
      const deg = ((a * 180) / Math.PI + 360) % 360;
      if (deg > 68 && deg < 112 && wr.r < 1740) continue;
      if (wr.r > 1135 && wr.r < 1475 && deg > 235 && deg < 305) continue;

      const pattern = (i * 19 + wr.r * 3) % 13;
      const threshold = wr.r > 1520 ? 8 : 6;
      if (pattern > threshold) continue;

      const isTriple = pattern === 0 || pattern === 5 || pattern === 7;
      const isLit = pattern !== 1 && pattern !== 4;
      const winColor = isLit ? (pattern % 2 === 0 ? '#fff6dc' : '#daf1ff') : '#16202c';

      ctx.save();
      ctx.translate(cx + Math.cos(a) * wr.r, cy + Math.sin(a) * wr.r);
      ctx.rotate(a + Math.PI / 2);
      ctx.fillStyle = '#141d28';
      ctx.fillRect(-4.8, -5.4, 3.2, 10.8);
      ctx.fillRect(1.2, -5.4, 3.2, 10.8);
      if (isTriple) ctx.fillRect(7.2, -5.4, 3.2, 10.8);

      if (isLit) {
        ctx.fillStyle = winColor;
        ctx.fillRect(-4.2, -4.5, 2.0, 9.0);
        ctx.fillRect(1.8, -4.5, 2.0, 9.0);
        if (isTriple) ctx.fillRect(7.8, -4.5, 2.0, 9.0);
      }
      ctx.restore();

      if (isLit) {
        ectx.save();
        ectx.translate(cx + Math.cos(a) * wr.r, cy + Math.sin(a) * wr.r);
        ectx.rotate(a + Math.PI / 2);
        ectx.fillStyle = winColor;
        ectx.fillRect(-4.2, -4.6, 2.2, 9.2);
        ectx.fillRect(1.8, -4.6, 2.2, 9.2);
        if (isTriple) ectx.fillRect(7.8, -4.6, 2.2, 9.2);
        ectx.restore();
      }
    }
  }

  // Aft Saucer Dorsal Skylight / Arboretum Grid (2 banks of 6x3 recessed dark skylights aft of Shuttlebay 1, Ref 1)
  for (const bankSide of [-1, 1]) {
    const bankX = cx + bankSide * 98;
    const bankY = cy + 1265;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 6; col++) {
        const sx = bankX - 58 + col * 20;
        const sy = bankY + row * 18;
        ctx.fillStyle = '#151e29';
        ctx.fillRect(sx, sy, 14, 12);
        if ((row + col) % 3 === 0) {
          ectx.fillStyle = 'rgba(215, 238, 255, 0.45)';
          ectx.fillRect(sx + 2, sy + 2, 10, 8);
        }
      }
    }
  }

  // Flush Studio-Miniature Escape Pod (Lifeboat) Hatches in 6 Concentric Bands (Ref 1)
  const podRings = [
    { r: 448, count: 24 },
    { r: 588, count: 32 },
    { r: 852, count: 42 },
    { r: 1018, count: 48 },
    { r: 1628, count: 68 },
    { r: 1852, count: 78 }
  ];
  for (const pr of podRings) {
    for (let i = 0; i < pr.count; i++) {
      const a = ((i + 0.5) / pr.count) * Math.PI * 2;
      const deg = ((a * 180) / Math.PI + 360) % 360;
      if (deg > 66 && deg < 114) continue;
      if (pr.r > 1145 && pr.r < 1470 && deg > 236 && deg < 304) continue;
      if ((i * 7 + pr.r) % 3 === 0) continue;

      const isWarmHatch = (i + pr.r) % 2 === 0;
      ctx.save();
      ctx.translate(cx + Math.cos(a) * pr.r, cy + Math.sin(a) * pr.r);
      ctx.rotate(a + Math.PI / 2);
      ctx.fillStyle = 'rgba(92, 106, 120, 0.55)';
      ctx.fillRect(-11, -13, 22, 26);
      ctx.fillStyle = isWarmHatch ? '#ddd8ca' : '#d4dde5';
      ctx.fillRect(-9.5, -11.5, 19, 23);
      ctx.fillStyle = '#ad483c';
      ctx.fillRect(-6.5, -8.5, 13, 2.4);
      ctx.restore();
    }
  }

  // Dorsal Collimated Phaser Array Recess Channel (r = 1485, backing the smooth 3D swept phaser strip)
  ctx.beginPath();
  ctx.arc(cx, cy, 1485, Math.PI * 0.70, Math.PI * 2.30);
  ctx.strokeStyle = '#333b45';
  ctx.lineWidth = 34;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(cx, cy, 1485, Math.PI * 0.70, Math.PI * 2.30);
  ctx.strokeStyle = '#58606b';
  ctx.lineWidth = 18;
  ctx.stroke();

  // Gold/Ochre RCS & Sensor Pads (Matching Ref 1 dorsal orthoview)
  const tanPads = [
    { a: -Math.PI / 2 - 0.075, r: 1434, w: 108, h: 34 },
    { a: -Math.PI / 2 + 0.075, r: 1434, w: 108, h: 34 },
    { a: Math.PI / 2 - 0.29, r: 950, w: 56, h: 142 },
    { a: Math.PI / 2 + 0.29, r: 950, w: 56, h: 142 },
    { a: Math.PI - 0.14, r: 1955, w: 68, h: 30 },
    { a: 0.14, r: 1955, w: 68, h: 30 }
  ];
  for (const pad of tanPads) {
    ctx.save();
    ctx.translate(cx + Math.cos(pad.a) * pad.r, cy + Math.sin(pad.a) * pad.r);
    ctx.rotate(pad.a + Math.PI / 2);
    ctx.fillStyle = '#b49b58';
    ctx.fillRect(-pad.w / 2, -pad.h / 2, pad.w, pad.h);
    ctx.strokeStyle = '#473e23';
    ctx.lineWidth = 3;
    ctx.strokeRect(-pad.w / 2, -pad.h / 2, pad.w, pad.h);
    ctx.restore();
  }

  // Exact Starfleet Registry Lettering (Wide-tracked Eurostile/Microgramma proportions inside r = 1485 phaser arc)
  drawCurvedTextInward(
    ctx,
    'NCC-1701-D',
    cx,
    cy,
    1366,
    -Math.PI / 2,
    0.37,
    '900 108px "Eurostile", "Arial Black", "Helvetica Neue", sans-serif',
    '#1c222b',
    '#9e2a2b',
    3.5
  );
  drawCurvedTextInward(
    ctx,
    'U.S.S. ENTERPRISE',
    cx,
    cy,
    1258,
    -Math.PI / 2,
    0.32,
    '800 50px "Eurostile", "Arial Black", "Helvetica Neue", sans-serif',
    '#202731',
    null,
    0
  );

  const map = new THREE.CanvasTexture(colorCanvas);
  map.anisotropy = 8;
  map.colorSpace = THREE.SRGBColorSpace;

  const emissiveMap = new THREE.CanvasTexture(emCanvas);
  emissiveMap.anisotropy = 8;
  emissiveMap.colorSpace = THREE.SRGBColorSpace;

  const roughnessMap = new THREE.CanvasTexture(roughCanvas);
  roughnessMap.anisotropy = 8;

  const result = { map, emissiveMap, roughnessMap };
  textureCache.set('saucer_dorsal_maps', result);
  return result;
}

export function getSaucerDorsalTexture() {
  return getSaucerDorsalMaps().map;
}

export function getSaucerVentralMaps() {
  if (textureCache.has('saucer_ventral_maps')) return textureCache.get('saucer_ventral_maps');

  const size = 4096;
  const cx = size / 2;
  const cy = size / 2;

  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = size;
  colorCanvas.height = size;
  const ctx = colorCanvas.getContext('2d');

  const emCanvas = document.createElement('canvas');
  emCanvas.width = size;
  emCanvas.height = size;
  const ectx = emCanvas.getContext('2d');
  ectx.fillStyle = '#000000';
  ectx.fillRect(0, 0, size, size);

  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = size;
  roughCanvas.height = size;
  const rctx = roughCanvas.getContext('2d');
  rctx.fillStyle = '#606060';
  rctx.fillRect(0, 0, size, size);

  ctx.fillStyle = '#cad3dc';
  ctx.fillRect(0, 0, size, size);

  // Ultra-fine 96-ring interlocking radial Starfleet Aztec plating on ventral bowl
  paintRadialInterlockingAztec(ctx, rctx, cx, cy, 80, 96, 20.2, 132);

  // Subtle recessed ventral terrace ring between rim and window decks
  ctx.beginPath();
  ctx.arc(cx, cy, 1790, 0, Math.PI * 2);
  ctx.arc(cx, cy, 1720, 0, Math.PI * 2, true);
  ctx.fillStyle = 'rgba(84, 96, 110, 0.55)';
  ctx.fill();

  // Ventral Collimated Phaser Array Recess Ring (r = 1180)
  ctx.beginPath();
  ctx.arc(cx, cy, 1180, Math.PI * 0.82, Math.PI * 2.18);
  ctx.strokeStyle = '#323a44';
  ctx.lineWidth = 34;
  ctx.stroke();

  // Flush Ventral Escape Pod Hatches
  const ventralPodRings = [
    { r: 620, count: 28 },
    { r: 1255, count: 52 },
    { r: 1845, count: 80 }
  ];
  for (const pr of ventralPodRings) {
    for (let i = 0; i < pr.count; i++) {
      const a = ((i + 0.5) / pr.count) * Math.PI * 2;
      const deg = ((a * 180) / Math.PI + 360) % 360;
      if (deg > 52 && deg < 128) continue;
      if ((i * 5 + pr.r) % 3 === 0) continue;

      ctx.save();
      ctx.translate(cx + Math.cos(a) * pr.r, cy + Math.sin(a) * pr.r);
      ctx.rotate(a + Math.PI / 2);
      ctx.fillStyle = 'rgba(86, 100, 115, 0.55)';
      ctx.fillRect(-12, -15, 24, 30);
      ctx.fillStyle = (i + pr.r) % 2 === 0 ? '#dfd9ca' : '#d5dee6';
      ctx.fillRect(-10, -13, 20, 26);
      ctx.fillStyle = '#b44238';
      ctx.fillRect(-7, -10, 14, 3);
      ctx.restore();
    }
  }

  // Soft Radial Hull Floodlight Pools on Ventral Dome (Matching Spacedock & Opening Credits hero shots!)
  const floodSpots = [
    { a: -Math.PI / 2 - 0.56, r: 930 },
    { a: -Math.PI / 2 - 0.19, r: 930 },
    { a: -Math.PI / 2 + 0.19, r: 930 },
    { a: -Math.PI / 2 + 0.56, r: 930 },
    { a: -Math.PI / 2 - 0.36, r: 580 },
    { a: -Math.PI / 2 + 0.36, r: 580 }
  ];
  for (const sp of floodSpots) {
    const sx = cx + Math.cos(sp.a) * sp.r;
    const sy = cy + Math.sin(sp.a) * sp.r;
    const g = ectx.createRadialGradient(sx, sy, 10, sx, sy, 210);
    g.addColorStop(0, 'rgba(225, 242, 255, 0.48)');
    g.addColorStop(0.4, 'rgba(186, 220, 255, 0.16)');
    g.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ectx.fillStyle = g;
    ectx.beginPath();
    ectx.arc(sx, sy, 210, 0, Math.PI * 2);
    ectx.fill();
  }

  // 12 Concentric Ventral Illuminated Window Terraces (Matching Ref 1, Ref 4 & Spacedock hero shots)
  const ventralWindowRings = [
    { r: 1665, count: 368, w: 3.1, h: 11.2 },
    { r: 1610, count: 352, w: 3.1, h: 11.2 },
    { r: 1555, count: 336, w: 3.0, h: 10.8 },
    { r: 1500, count: 320, w: 3.0, h: 10.8 },
    { r: 1445, count: 304, w: 2.9, h: 10.4 },
    { r: 1390, count: 288, w: 2.8, h: 10.2 },
    { r: 1335, count: 272, w: 2.8, h: 9.8 },
    { r: 1105, count: 228, w: 2.7, h: 9.5 },
    { r: 990,  count: 200, w: 2.6, h: 9.0 },
    { r: 810,  count: 168, w: 2.6, h: 9.0 },
    { r: 680,  count: 140, w: 2.5, h: 8.5 },
    { r: 515,  count: 112, w: 2.4, h: 8.0 }
  ];

  for (const wr of ventralWindowRings) {
    for (let i = 0; i < wr.count; i++) {
      const a = (i / wr.count) * Math.PI * 2;
      const deg = ((a * 180) / Math.PI + 360) % 360;
      if (deg > 52 && deg < 128) continue;

      const hash = (i * 23 + wr.r * 7) % 15;
      if (hash > 8) continue;

      const isBright = hash !== 3 && hash !== 7;
      const winColor = isBright
        ? (hash % 3 === 0 ? '#ffffff' : (hash % 2 === 0 ? '#fff4d2' : '#d8f1ff'))
        : '#1d2a3a';

      const wx = cx + Math.cos(a) * wr.r;
      const wy = cy + Math.sin(a) * wr.r;

      ctx.save();
      ctx.translate(wx, wy);
      ctx.rotate(a + Math.PI / 2);
      ctx.fillStyle = '#141e2b';
      ctx.fillRect(-wr.w / 2 - 0.7, -wr.h / 2 - 0.7, wr.w + 1.4, wr.h + 1.4);
      ctx.fillStyle = isBright ? '#fff4d4' : '#1d2a3a';
      ctx.fillRect(-wr.w / 2, -wr.h / 2, wr.w, wr.h);
      ctx.restore();

      if (isBright) {
        ectx.save();
        ectx.translate(wx, wy);
        ectx.rotate(a + Math.PI / 2);
        ectx.fillStyle = winColor;
        ectx.fillRect(-wr.w / 2, -wr.h / 2, wr.w, wr.h);
        ectx.restore();
      }
    }
  }

  // Ventral NCC-1701-D Registry
  drawCurvedText(
    ctx,
    'NCC-1701-D',
    cx,
    cy,
    880,
    -Math.PI / 2,
    0.42,
    '900 102px "Eurostile", "Arial Black", "Helvetica Neue", sans-serif',
    '#1d242e'
  );

  const map = new THREE.CanvasTexture(colorCanvas);
  map.anisotropy = 8;
  map.colorSpace = THREE.SRGBColorSpace;

  const emissiveMap = new THREE.CanvasTexture(emCanvas);
  emissiveMap.anisotropy = 8;
  emissiveMap.colorSpace = THREE.SRGBColorSpace;

  const roughnessMap = new THREE.CanvasTexture(roughCanvas);
  roughnessMap.anisotropy = 8;

  const result = { map, emissiveMap, roughnessMap };
  textureCache.set('saucer_ventral_maps', result);
  return result;
}

// Photo-accurate Andrew Probert "Cobra Head" Stardrive Separation Deck Texture (Ref 3 & Ref 5)
export function getCobraHeadMaps() {
  if (textureCache.has('cobra_head_maps')) return textureCache.get('cobra_head_maps');

  const size = 2048;
  const cx = size / 2;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = size;
  roughCanvas.height = size;
  const rctx = roughCanvas.getContext('2d');
  rctx.fillStyle = '#606060';
  rctx.fillRect(0, 0, size, size);

  ctx.fillStyle = '#ccd5de';
  ctx.fillRect(0, 0, size, size);

  // Fine subtle radial interlocking Aztec plating (zero coarse pie wedges!)
  paintRadialInterlockingAztec(ctx, rctx, cx, 1080, 70, 56, 18.0, 96);

  // Forward Nose Beak Curved Registry "NCC-1701-D" (Ref 3 & Ref 5)
  drawCurvedTextInward(
    ctx,
    'NCC-1701-D',
    cx,
    1080,
    922,
    -Math.PI / 2,
    0.40,
    '900 72px "Eurostile", "Arial Black", "Helvetica Neue", sans-serif',
    '#1c222b',
    '#9e2a2b',
    2.5
  );

  // Central Bronze-Tan Forward Umbilical Pad with Two Octagonal Hatches (Ref 3 & Ref 5)
  ctx.fillStyle = '#9e8867';
  ctx.fillRect(cx - 88, 298, 176, 188);
  ctx.strokeStyle = '#3f3628';
  ctx.lineWidth = 3.5;
  ctx.strokeRect(cx - 88, 298, 176, 188);

  for (const hy of [346, 434]) {
    ctx.fillStyle = '#8b96a2';
    ctx.beginPath();
    for (let k = 0; k < 8; k++) {
      const ang = (k / 8) * Math.PI * 2 + Math.PI / 8;
      const px = cx + Math.cos(ang) * 26;
      const py = hy + Math.sin(ang) * 34;
      if (k === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#2d333b';
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  for (let y = 308; y <= 476; y += 16) {
    ctx.fillStyle = '#4a4030';
    ctx.fillRect(cx - 112, y, 20, 5);
    ctx.fillRect(cx + 92, y, 20, 5);
  }

  // 4 Angled Grey Forward Docking Clamp Recesses on Nose Beak (Ref 3 & Ref 5)
  for (const side of [-1, 1]) {
    for (const idx of [0, 1]) {
      ctx.save();
      ctx.translate(cx + side * (215 + idx * 152), 348 + idx * 54);
      ctx.rotate(side * (0.20 + idx * 0.14));
      ctx.fillStyle = '#9aa6b2';
      ctx.fillRect(-30, -58, 60, 116);
      ctx.strokeStyle = '#2e3742';
      ctx.lineWidth = 3.5;
      ctx.strokeRect(-30, -58, 60, 116);
      ctx.restore();
    }
  }

  // Curved Forward Cobra-Head Phaser Channel (Ref 3 & Ref 5)
  ctx.beginPath();
  ctx.arc(cx, 1180, 710, -Math.PI * 0.82, -Math.PI * 0.18);
  ctx.strokeStyle = '#383028';
  ctx.lineWidth = 36;
  ctx.stroke();

  // Central Bronze-Tan V-Chevron Collar around the Detachable Battle Bridge (Ref 3 & Ref 5)
  ctx.fillStyle = '#9a8465';
  ctx.beginPath();
  ctx.moveTo(cx - 84, 498);
  ctx.lineTo(cx + 84, 498);
  ctx.lineTo(cx + 228, 975);
  ctx.lineTo(cx - 228, 975);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#3d3426';
  ctx.lineWidth = 3.5;
  ctx.stroke();

  ctx.save();
  ctx.font = '800 30px "Eurostile", "Arial Black", sans-serif';
  ctx.fillStyle = '#1f252e';
  ctx.textAlign = 'center';
  ctx.fillText('ENTERPRISE', cx, 855);
  ctx.restore();

  // Port & Starboard Wing Maintenance Pads
  for (const side of [-1, 1]) {
    ctx.save();
    ctx.translate(cx + side * 440, 1080);
    ctx.rotate(side * 0.18);
    ctx.fillStyle = '#a6936c';
    ctx.fillRect(-145, -60, 290, 120);
    ctx.strokeStyle = '#3d3426';
    ctx.lineWidth = 3;
    ctx.strokeRect(-145, -60, 290, 120);
    ctx.restore();
  }

  const map = new THREE.CanvasTexture(canvas);
  map.anisotropy = 8;
  map.colorSpace = THREE.SRGBColorSpace;

  const roughnessMap = new THREE.CanvasTexture(roughCanvas);
  roughnessMap.anisotropy = 8;

  const result = { map, roughnessMap };
  textureCache.set('cobra_head_maps', result);
  return result;
}

// Photo-accurate 4096x4096 Secondary (Engineering) Hull Dorsal, Shoulder & Belly Texture (Ref 1 & Ref 5)
// Uses 160x128 fine interlocking L/T-stepped Starfleet Aztec sub-panels (~2.2% contrast — zero blocky squares!)
export function getSecondaryHullMaps() {
  if (textureCache.has('secondary_hull_maps')) return textureCache.get('secondary_hull_maps');

  const width = 4096;
  const height = 4096;

  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = width;
  colorCanvas.height = height;
  const ctx = colorCanvas.getContext('2d');

  const emCanvas = document.createElement('canvas');
  emCanvas.width = width;
  emCanvas.height = height;
  const ectx = emCanvas.getContext('2d');
  ectx.fillStyle = '#000000';
  ectx.fillRect(0, 0, width, height);

  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = width;
  roughCanvas.height = height;
  const rctx = roughCanvas.getContext('2d');

  paintInterlockingAztecGrid(ctx, rctx, width, height, 160, 128, 0.10);

  const drawWindowPair = (ux, uy, angleRad, isTriple = false, isLit = true) => {
    const px = ux * width;
    const py = (1.0 - uy) * height;
    const winCol = isLit ? '#fff6dd' : '#141d2a';

    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(angleRad);
    ctx.fillStyle = '#0f1722';
    ctx.fillRect(-11, -10, 7.5, 20);
    ctx.fillRect(1.5, -10, 7.5, 20);
    if (isTriple) ctx.fillRect(14, -10, 7.5, 20);

    if (isLit) {
      ctx.fillStyle = winCol;
      ctx.fillRect(-9.4, -8.0, 4.4, 16);
      ctx.fillRect(3.1, -8.0, 4.4, 16);
      if (isTriple) ctx.fillRect(15.6, -8.0, 4.4, 16);
    }
    ctx.restore();

    if (isLit) {
      ectx.save();
      ectx.translate(px, py);
      ectx.rotate(angleRad);
      ectx.fillStyle = winCol;
      ectx.fillRect(-9.4, -8.0, 4.6, 16.2);
      ectx.fillRect(3.1, -8.0, 4.6, 16.2);
      if (isTriple) ectx.fillRect(15.6, -8.0, 4.6, 16.2);
      ectx.restore();
    }
  };

  // Forward Flared Shoulder & Dorsal Flank Radial Window Rows (Matching Ref 1 & Ref 5!)
  for (const side of [-1, 1]) {
    // Dense forward collar window banks flanking the connecting neck
    for (let r = 0; r < 7; r++) {
      const uy = 0.88 - r * 0.022;
      for (let k = 0; k < 6; k++) {
        const ux = 0.5 + side * (0.042 + k * 0.024);
        const lit = (r + k) % 4 !== 1;
        drawWindowPair(ux, uy, side * 0.14, k % 2 === 0, lit);
      }
    }

    // Sweeping outer shoulder & mid-hull window arcs (Ref 1 & Ref 5)
    for (let row = 0; row < 24; row++) {
      const uy = 0.90 - row * 0.031;
      for (let col = 0; col < 8; col++) {
        if ((row * 7 + col * 11) % 5 > 2) continue;
        const ux = 0.5 + side * (0.095 + col * 0.044);
        const lit = (row * 3 + col) % 4 !== 2;
        const triple = (row + col) % 3 === 0;
        drawWindowPair(ux, uy, side * 0.24, triple, lit);
      }
    }

    // Flush Secondary Hull Dorsal Lifeboat Hatches along the mid-flanks (Ref 1)
    for (let lb = 0; lb < 7; lb++) {
      const uy = 0.74 - lb * 0.068;
      const ux = 0.5 + side * (0.082 + (lb % 2) * 0.058);
      const px = ux * width;
      const py = (1.0 - uy) * height;
      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(side * 0.22);
      ctx.fillStyle = 'rgba(84, 98, 112, 0.55)';
      ctx.fillRect(-20, -24, 40, 48);
      ctx.fillStyle = '#ded9ca';
      ctx.fillRect(-17, -21, 34, 42);
      ctx.fillStyle = '#b44238';
      ctx.fillRect(-12, -16, 24, 5);
      ctx.restore();
    }
  }

  const map = new THREE.CanvasTexture(colorCanvas);
  map.anisotropy = 8;
  map.colorSpace = THREE.SRGBColorSpace;

  const emissiveMap = new THREE.CanvasTexture(emCanvas);
  emissiveMap.anisotropy = 8;
  emissiveMap.colorSpace = THREE.SRGBColorSpace;

  const roughnessMap = new THREE.CanvasTexture(roughCanvas);
  roughnessMap.anisotropy = 8;

  const result = { map, emissiveMap, roughnessMap };
  textureCache.set('secondary_hull_maps', result);
  return result;
}

export function getSaucerVentralTexture() {
  return getSaucerVentralMaps().map;
}

// Crisp Shuttlebay 1 Dorsal Deckhouse Marking Texture ("1701-D" & Starfleet Pennant, Ref 1)
export function getShuttlebayPennantTexture() {
  if (textureCache.has('shuttlebay_pennant')) return textureCache.get('shuttlebay_pennant');

  const width = 1024;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = width;
  roughCanvas.height = height;
  const rctx = roughCanvas.getContext('2d');

  paintInterlockingAztecGrid(ctx, rctx, width, height, 32, 16, 0.12);

  // Subtle recessed panel borders on deckhouse roof
  ctx.strokeStyle = 'rgba(72, 86, 102, 0.35)';
  ctx.lineWidth = 3;
  ctx.strokeRect(48, 36, width - 96, height - 72);

  // Central Ochre-Gold Shuttlebay Approach Pennant Box (Ref 1)
  ctx.fillStyle = '#c8ae62';
  ctx.fillRect(362, 140, 300, 232);
  ctx.strokeStyle = '#524523';
  ctx.lineWidth = 4;
  ctx.strokeRect(362, 140, 300, 232);

  // Inner Crimson & Gold Starfleet Approach Alignment Bars
  ctx.fillStyle = '#9e2a2b';
  ctx.fillRect(380, 158, 12, 196);
  ctx.fillRect(632, 158, 12, 196);

  ctx.save();
  ctx.font = '900 54px "Eurostile", "Arial Black", "Helvetica Neue", sans-serif';
  ctx.fillStyle = '#1f252e';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('1701-D', 512, 256);
  ctx.restore();

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  textureCache.set('shuttlebay_pennant', tex);
  return tex;
}

// High-resolution 2048x1024 Class-M Planet Surface & Cloud-Band Texture (Veridian IV)
export function getPlanetSurfaceTexture() {
  if (textureCache.has('planet_veridian')) return textureCache.get('planet_veridian');

  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // Deep oceanic sapphire-teal base with subtle polar ice caps
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, height);
  oceanGrad.addColorStop(0.0, '#dcebfa');
  oceanGrad.addColorStop(0.06, '#18375c');
  oceanGrad.addColorStop(0.28, '#0c2542');
  oceanGrad.addColorStop(0.50, '#091f38');
  oceanGrad.addColorStop(0.72, '#0d2847');
  oceanGrad.addColorStop(0.94, '#1b3b63');
  oceanGrad.addColorStop(1.0, '#e2effc');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, width, height);

  // Organic multi-layered continental landmasses (clustered archipelagos & coastal shelves)
  for (let c = 0; c < 14; c++) {
    const clusterX = ((c * 317 + 140) % (width - 240)) + 120;
    const clusterY = 160 + ((c * 193 + 85) % (height - 320));
    for (let sub = 0; sub < 11; sub++) {
      const idx = c * 11 + sub;
      const lx = (clusterX + Math.sin(idx * 1.7) * 115 + Math.cos(sub * 2.3) * 55 + width) % width;
      const ly = Math.max(110, Math.min(height - 110, clusterY + Math.cos(idx * 1.3) * 68));
      const rx = 32 + (idx * 23) % 95;
      const ry = 22 + (idx * 17) % 62;

      const shelf = ctx.createRadialGradient(lx, ly, rx * 0.15, lx, ly, rx * 1.28);
      shelf.addColorStop(0.0, 'rgba(26, 98, 124, 0.34)');
      shelf.addColorStop(1.0, 'rgba(9, 31, 56, 0)');
      ctx.save();
      ctx.translate(lx, ly);
      ctx.scale(1.0, ry / rx);
      ctx.fillStyle = shelf;
      ctx.beginPath();
      ctx.arc(0, 0, rx * 1.28, 0, Math.PI * 2);
      ctx.fill();

      const land = ctx.createRadialGradient(0, 0, rx * 0.08, 0, 0, rx);
      land.addColorStop(0.0, idx % 4 === 0 ? 'rgba(116, 126, 86, 0.62)' : 'rgba(62, 104, 78, 0.56)');
      land.addColorStop(0.55, 'rgba(46, 86, 72, 0.34)');
      land.addColorStop(1.0, 'rgba(16, 54, 78, 0)');
      ctx.fillStyle = land;
      ctx.beginPath();
      ctx.arc(0, 0, rx, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Soft diffused atmospheric cloud systems & gentle weather vortices (zero harsh horizontal stripes!)
  for (let w = 0; w < 130; w++) {
    const cx = ((w * 251 + 63) % width);
    const cy = 75 + ((w * 149 + 41) % (height - 150));
    const rx = 55 + (w * 37) % 165;
    const ry = 16 + (w * 13) % 38;
    const rot = Math.sin(w * 0.85) * 0.28;
    const alpha = 0.05 + (w % 6) * 0.022;

    const cg = ctx.createRadialGradient(0, 0, rx * 0.05, 0, 0, rx);
    cg.addColorStop(0.0, `rgba(244, 250, 255, ${alpha * 1.6})`);
    cg.addColorStop(0.5, `rgba(232, 244, 255, ${alpha})`);
    cg.addColorStop(1.0, 'rgba(220, 238, 255, 0)');

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot);
    ctx.scale(1.0, ry / rx);
    ctx.fillStyle = cg;
    ctx.beginPath();
    ctx.arc(0, 0, rx, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  textureCache.set('planet_veridian', tex);
  return tex;
}

function drawCurvedText(ctx, str, cx, cy, radius, centerAngle, totalAngleSpan, font, color) {
  ctx.save();
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const len = str.length;
  const startAngle = centerAngle - totalAngleSpan / 2;
  const step = totalAngleSpan / Math.max(1, len - 1);

  for (let i = 0; i < len; i++) {
    const angle = startAngle + i * step;
    ctx.save();
    ctx.translate(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
    ctx.rotate(angle + Math.PI / 2);
    ctx.scale(1.12, 0.94);
    ctx.fillText(str[i], 0, 0);
    ctx.restore();
  }
  ctx.restore();
}

function drawCurvedTextInward(ctx, str, cx, cy, radius, centerAngle, totalAngleSpan, font, color, strokeColor = null, strokeWidth = 0) {
  ctx.save();
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const len = str.length;
  const startAngle = centerAngle + totalAngleSpan / 2;
  const step = totalAngleSpan / Math.max(1, len - 1);

  for (let i = 0; i < len; i++) {
    const angle = startAngle - i * step;
    ctx.save();
    ctx.translate(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
    ctx.rotate(angle - Math.PI / 2);
    ctx.scale(1.12, 0.94);
    if (strokeColor && strokeWidth > 0) {
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = strokeWidth;
      ctx.strokeText(str[i], 0, 0);
    }
    ctx.fillText(str[i], 0, 0);
    ctx.restore();
  }
  ctx.restore();
}

// High-density miniature porthole window & subtle Aztec hull texture for Rim & Connecting Neck
export function getWindowBandMaps(rows = 12, cols = 220, baseHex = '#ccd5de') {
  const key = `win_band_maps_${rows}_${cols}_${baseHex}`;
  if (textureCache.has(key)) return textureCache.get(key);

  const width = 2048;
  const height = 512;

  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = width;
  colorCanvas.height = height;
  const ctx = colorCanvas.getContext('2d');

  const emCanvas = document.createElement('canvas');
  emCanvas.width = width;
  emCanvas.height = height;
  const ectx = emCanvas.getContext('2d');
  ectx.fillStyle = '#000000';
  ectx.fillRect(0, 0, width, height);

  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = width;
  roughCanvas.height = height;
  const rctx = roughCanvas.getContext('2d');

  paintInterlockingAztecGrid(ctx, rctx, width, height, 64, Math.max(8, rows * 2), 0.10);

  const cellW = width / cols;
  const cellH = height / rows;

  for (let r = 0; r < rows; r++) {
    ctx.fillStyle = 'rgba(80, 96, 114, 0.14)';
    ctx.fillRect(0, r * cellH, width, 1);

    for (let c = 0; c < cols; c++) {
      const clusterGroup = Math.floor(c / 6);
      const groupHash = (r * 31 + clusterGroup * 17) % 11;
      if (groupHash > 5) continue;

      const inClusterIdx = c % 6;
      if (inClusterIdx === 0 || inClusterIdx === 5) continue;

      const hash = (r * 43 + c * 29) % 13;
      if (hash > 7) continue;

      const isLit = hash !== 2 && hash !== 6;
      const ww = Math.max(2.0, cellW * 0.34);
      const wh = Math.max(2.4, Math.min(7.5, cellH * 0.23));
      const wx = c * cellW + (cellW - ww) * 0.5;
      const wy = r * cellH + (cellH - wh) * 0.5;

      ctx.fillStyle = isLit ? '#fff6de' : '#243140';
      ctx.fillRect(wx, wy, ww, wh);

      if (isLit) {
        ectx.fillStyle = hash % 2 === 0 ? '#fff6de' : '#d8f0ff';
        ectx.fillRect(wx, wy, ww, wh);
      }
    }
  }

  const map = new THREE.CanvasTexture(colorCanvas);
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.ClampToEdgeWrapping;
  map.anisotropy = 8;
  map.colorSpace = THREE.SRGBColorSpace;

  const emissiveMap = new THREE.CanvasTexture(emCanvas);
  emissiveMap.wrapS = THREE.RepeatWrapping;
  emissiveMap.wrapT = THREE.ClampToEdgeWrapping;
  emissiveMap.anisotropy = 8;
  emissiveMap.colorSpace = THREE.SRGBColorSpace;

  const roughnessMap = new THREE.CanvasTexture(roughCanvas);
  roughnessMap.wrapS = THREE.RepeatWrapping;
  roughnessMap.wrapT = THREE.ClampToEdgeWrapping;
  roughnessMap.anisotropy = 8;

  const result = { map, emissiveMap, roughnessMap };
  textureCache.set(key, result);
  return result;
}

export function getWindowBandTexture(rows = 4, cols = 64) {
  return getWindowBandMaps(rows, cols).map;
}

// Photo-accurate 2048x1024 Main Navigational Deflector Dish Texture (Matching Ref 4, Ref 5 & Hero Shots!)
// Deep sapphire-indigo dish, copper-bronze peripheral emitter vanes, and crisp glowing ice-blue stadium ring [===]
export function getDeflectorDishTexture() {
  if (textureCache.has('deflector')) return textureCache.get('deflector');

  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#070b15';
  ctx.fillRect(0, 0, width, height);

  const cx = width / 2;
  const cy = height / 2;

  // Outer Copper/Amber & Deep Sapphire Elliptical Dish Gradient (Ref 4 & Ref 5)
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(1.92, 1.0);
  const grad = ctx.createRadialGradient(0, 0, 24, 0, 0, 495);
  grad.addColorStop(0.0, '#1e3a8a');
  grad.addColorStop(0.28, '#1d4ed8');
  grad.addColorStop(0.48, '#172554');
  grad.addColorStop(0.68, '#1e293b');
  grad.addColorStop(0.82, '#c25927');
  grad.addColorStop(0.93, '#7c2d12');
  grad.addColorStop(1.0, '#090d16');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, 495, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // 96 Fine Radial Emitter Vanes around the Recessed Periphery
  ctx.save();
  ctx.translate(cx, cy);
  for (let i = 0; i < 96; i++) {
    const a = (i / 96) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * 260, Math.sin(a) * 125);
    ctx.lineTo(Math.cos(a) * 930, Math.sin(a) * 475);
    ctx.strokeStyle = 'rgba(10, 16, 30, 0.58)';
    ctx.lineWidth = 5;
    ctx.stroke();
  }
  ctx.restore();

  // Dark Sapphire Inner Basin inside the Stadium Emitter Ring (Matching Ref 5 close-up!)
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(cx - 350, cy - 140, 700, 280, 130);
  ctx.fillStyle = '#111c3d';
  ctx.fill();
  ctx.restore();

  // Iconic Bright Ice-Blue / Sapphire Central Stadium Ring (Ref 1, Ref 5, Spacedock Hero!)
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(cx - 345, cy - 135, 690, 270, 125);
  ctx.strokeStyle = '#60c5ff';
  ctx.lineWidth = 34;
  ctx.shadowColor = '#38bdf8';
  ctx.shadowBlur = 48;
  ctx.stroke();

  ctx.beginPath();
  ctx.roundRect(cx - 345, cy - 135, 690, 270, 125);
  ctx.strokeStyle = '#ecfeff';
  ctx.lineWidth = 14;
  ctx.stroke();
  ctx.restore();

  // Outer Sapphire Rim Ring
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(cx - 780, cy - 365, 1560, 730, 355);
  ctx.strokeStyle = 'rgba(125, 211, 252, 0.82)';
  ctx.lineWidth = 16;
  ctx.shadowColor = '#38bdf8';
  ctx.shadowBlur = 28;
  ctx.stroke();
  ctx.restore();

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  textureCache.set('deflector', tex);
  return tex;
}

// High-DPI 1024x512 Bussard Collector Louvered Crimson Optical Texture
export function getBussardCollectorTexture() {
  if (textureCache.has('bussard_louver')) return textureCache.get('bussard_louver');

  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createRadialGradient(512, 256, 20, 512, 256, 480);
  grad.addColorStop(0.0, '#ffe8d6');
  grad.addColorStop(0.24, '#ff4d38');
  grad.addColorStop(0.58, '#e11d48');
  grad.addColorStop(0.85, '#881337');
  grad.addColorStop(1.0, '#2c0512');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 512);

  // Fine horizontal & vertical optical collector louvers
  for (let y = 0; y < 512; y += 8) {
    ctx.fillStyle = 'rgba(32, 4, 10, 0.34)';
    ctx.fillRect(0, y, 1024, 2.5);
  }
  for (let x = 0; x < 1024; x += 32) {
    ctx.fillStyle = 'rgba(32, 4, 10, 0.22)';
    ctx.fillRect(x, 0, 2, 512);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  textureCache.set('bussard_louver', tex);
  return tex;
}

export function getHolodeckGridTexture() {
  if (textureCache.has('holodeck_grid')) return textureCache.get('holodeck_grid');

  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#080a0f';
  ctx.fillRect(0, 0, 1024, 1024);

  ctx.strokeStyle = '#ffbe0b';
  ctx.lineWidth = 5;
  ctx.strokeRect(2.5, 2.5, 1019, 1019);

  ctx.strokeStyle = 'rgba(255, 190, 11, 0.48)';
  ctx.lineWidth = 2.5;
  for (let i = 128; i < 1024; i += 128) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 1024);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(1024, i);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  textureCache.set('holodeck_grid', tex);
  return tex;
}

// High-DPI 1024x512 Michael Okuda LCARS Console Okudagram Display (4x resolution, zero blockiness!)
export function createLCARSConsoleTexture(title = 'LCARS 47457', primaryColor = '#f59e0b', secondaryColor = '#60a5fa') {
  const width = 1024;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;

  function render(stateText = 'ONLINE', metricValue = '100%', alertState = 'normal') {
    const pColor = alertState === 'red' ? '#ef4444' : primaryColor;
    const sColor = alertState === 'red' ? '#f87171' : secondaryColor;
    const accentLilac = alertState === 'red' ? '#fca5a5' : '#c084fc';
    const accentPeach = alertState === 'red' ? '#fb7185' : '#fdba74';

    ctx.fillStyle = '#030508';
    ctx.fillRect(0, 0, width, height);

    // Top-Left Swept LCARS Elbow
    ctx.fillStyle = pColor;
    ctx.beginPath();
    ctx.roundRect(18, 16, 170, 68, [42, 0, 0, 0]);
    ctx.fill();
    ctx.fillRect(18, 76, 56, 188);
    ctx.fillStyle = '#030508';
    ctx.beginPath();
    ctx.roundRect(74, 46, 120, 44, [22, 0, 0, 0]);
    ctx.fill();

    // Top Segmented LCARS Pill Header Bar
    ctx.fillStyle = pColor;
    ctx.fillRect(194, 16, 220, 26);
    ctx.fillStyle = accentPeach;
    ctx.fillRect(422, 16, 145, 26);
    ctx.fillStyle = sColor;
    ctx.beginPath();
    ctx.roundRect(575, 16, 428, 26, [0, 13, 13, 0]);
    ctx.fill();

    // Bottom-Left Swept LCARS Elbow
    ctx.fillStyle = accentLilac;
    ctx.fillRect(18, 274, 56, 162);
    ctx.beginPath();
    ctx.roundRect(18, 428, 170, 66, [0, 0, 0, 42]);
    ctx.fill();
    ctx.fillStyle = '#030508';
    ctx.beginPath();
    ctx.roundRect(74, 420, 120, 46, [0, 0, 0, 22]);
    ctx.fill();

    // Bottom Segmented Pill Bar
    ctx.fillStyle = accentLilac;
    ctx.fillRect(194, 468, 180, 26);
    ctx.fillStyle = pColor;
    ctx.beginPath();
    ctx.roundRect(382, 468, 621, 26, [0, 13, 13, 0]);
    ctx.fill();

    // Left Sidebar Numeric Codes
    ctx.fillStyle = '#05070b';
    ctx.font = 'bold 15px "Eurostile", "Arial Narrow", sans-serif';
    ctx.fillText('47-01', 24, 108);
    ctx.fillText('88-14', 24, 245);
    ctx.fillText('09-62', 24, 304);

    // Header Title
    ctx.fillStyle = '#fde68a';
    ctx.font = 'bold 30px "Eurostile", "Helvetica Neue", "Arial Narrow", sans-serif';
    ctx.fillText(title.toUpperCase(), 96, 86);

    // Left Column Rounded Lozenge Touch Pads
    const lozenges = [
      { code: '47-920', col: sColor },
      { code: '12-408', col: accentPeach },
      { code: '63-115', col: pColor },
      { code: '04-882', col: accentLilac },
      { code: '91-307', col: sColor }
    ];
    lozenges.forEach((lz, i) => {
      const ly = 112 + i * 62;
      ctx.fillStyle = lz.col;
      ctx.beginPath();
      ctx.roundRect(96, ly, 128, 46, 23);
      ctx.fill();
      ctx.fillStyle = '#05070b';
      ctx.font = 'bold 18px "Arial Narrow", sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(lz.code, 210, ly + 30);
    });
    ctx.textAlign = 'left';

    // Center Multi-Channel Telemetry Bars & Subspace Harmonic Readout
    const bars = [0.86, 0.94, 0.71, 0.89, 0.62, 0.79, 0.91, 0.67];
    bars.forEach((b, idx) => {
      const y = 114 + idx * 38;
      ctx.fillStyle = 'rgba(96, 165, 250, 0.16)';
      ctx.beginPath();
      ctx.roundRect(246, y, 320, 22, 11);
      ctx.fill();

      ctx.fillStyle = idx % 3 === 0 ? sColor : idx % 2 === 0 ? accentPeach : '#93c5fd';
      ctx.beginPath();
      ctx.roundRect(246, y, 320 * b, 22, 11);
      ctx.fill();

      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 18px monospace';
      ctx.fillText(`${4102 + idx * 137}.${(idx * 3) % 9}`, 580, y + 18);
    });

    // Right Diagnostic Reticle & Live Waveform Panel
    ctx.strokeStyle = sColor;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(684, 68, 312, 376, 18);
    ctx.stroke();

    // Subtle targeting reticle & Galaxy-class elliptical sensor rings
    ctx.strokeStyle = 'rgba(96, 165, 250, 0.35)';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.ellipse(840, 168, 112, 48, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(840, 168, 64, 28, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Crisp Harmonic Waveform
    ctx.strokeStyle = pColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let x = 704; x <= 976; x += 6) {
      const t = (x - 704) / 272;
      const wy = 168 + Math.sin(t * Math.PI * 6) * 26 * Math.sin(t * Math.PI);
      if (x === 704) ctx.moveTo(x, wy);
      else ctx.lineTo(x, wy);
    }
    ctx.stroke();

    // Status Readouts
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 24px "Eurostile", "Helvetica Neue", sans-serif';
    ctx.fillText(stateText, 706, 282);

    ctx.fillStyle = pColor;
    ctx.font = 'bold 46px monospace';
    ctx.fillText(metricValue, 706, 344);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 17px "Helvetica Neue", sans-serif';
    ctx.fillText('LCARS INTERACTIVE [CLICK / E]', 706, 412);

    tex.needsUpdate = true;
  }

  render();
  return { texture: tex, render };
}

// High-DPI 2048x1024 Master Systems Display (MSD) 42-Deck Cutaway Schematic
export function createMSDTexture() {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;

  function render(shipState) {
    const isRed = shipState?.alertState === 'red';
    const isSep = shipState?.isSeparated?.() || false;
    const frameColor = isRed ? '#dc2626' : '#f59e0b';
    const accentBlue = isRed ? '#f87171' : '#38bdf8';

    ctx.fillStyle = '#04070e';
    ctx.fillRect(0, 0, width, height);

    // Swept LCARS Outer Frame
    ctx.fillStyle = frameColor;
    ctx.beginPath();
    ctx.roundRect(28, 28, width - 56, 44, 22);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(28, height - 72, width - 56, 44, 22);
    ctx.fill();
    ctx.fillRect(28, 50, 72, height - 100);
    ctx.fillRect(width - 100, 50, 72, height - 100);

    ctx.fillStyle = '#04070e';
    ctx.fillRect(480, 20, 1088, 60);
    ctx.fillStyle = '#fde68a';
    ctx.font = 'bold 38px "Eurostile", "Arial Narrow", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('MASTER SYSTEMS DISPLAY — USS ENTERPRISE NCC-1701-D (42 DECKS)', width / 2, 62);

    // Side-profile Galaxy-class cutaway schematic (matching true studio-model proportions!)
    ctx.save();
    const saucerOffsetX = isSep ? -115 : 0;

    // 1. Saucer Section (Decks 1–16)
    ctx.save();
    ctx.translate(saucerOffsetX, 0);
    ctx.strokeStyle = accentBlue;
    ctx.lineWidth = 4.5;
    ctx.fillStyle = 'rgba(56, 189, 248, 0.14)';
    ctx.beginPath();
    ctx.moveTo(260, 415); // Sharp bow rim
    ctx.bezierCurveTo(440, 320, 680, 315, 880, 355); // Convex dorsal arch + Bridge dome
    ctx.lineTo(1015, 405); // Integrated aft saucer tail
    ctx.lineTo(955, 445);
    ctx.bezierCurveTo(740, 495, 440, 485, 260, 415); // Ventral saucer bowl
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Bridge Dome (Deck 1)
    ctx.beginPath();
    ctx.ellipse(635, 322, 58, 16, 0, Math.PI, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // 16 Horizontal Deck Lines inside Saucer
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.36)';
    ctx.lineWidth = 1.6;
    for (let d = 1; d <= 16; d++) {
      const y = 334 + d * 8.6;
      const halfSpan = Math.sin((d / 17) * Math.PI) * 340;
      ctx.beginPath();
      ctx.moveTo(625 - halfSpan, y);
      ctx.lineTo(625 + halfSpan, y);
      ctx.stroke();
    }
    ctx.restore();

    // 2. Stardrive Neck & Secondary Hull (Decks 17–42, with forward-swept concave throat!)
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 4.5;
    ctx.fillStyle = 'rgba(96, 165, 250, 0.14)';
    ctx.beginPath();
    ctx.moveTo(915, 442); // Cobra Head prow
    ctx.lineTo(1035, 418); // Aft neck top
    ctx.quadraticCurveTo(1065, 495, 1115, 555); // Aft neck curve
    ctx.lineTo(1560, 585); // Secondary hull dorsal spine to fantail transom
    ctx.lineTo(1595, 625); // Shuttlebays 2 & 3 transom
    ctx.quadraticCurveTo(1320, 695, 985, 695); // Upswept secondary hull keel
    ctx.quadraticCurveTo(905, 680, 888, 615); // Almond navigational deflector dish prow
    ctx.quadraticCurveTo(960, 540, 915, 442); // Forward-swept concave neck leading edge!
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Secondary Hull Deck Lines (Decks 17–42)
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.32)';
    ctx.lineWidth = 1.5;
    for (let y = 455; y <= 680; y += 11) {
      ctx.beginPath();
      ctx.moveTo(y < 560 ? 955 : 920, y);
      ctx.lineTo(y < 560 ? 1075 : 1540, y);
      ctx.stroke();
    }

    // Glowing Vertical Matter/Antimatter Warp Core & Plasma Conduit
    const wf = shipState?.warpCore?.warpFactor ?? 2.0;
    ctx.fillStyle = wf > 0 ? '#67e8f9' : '#64748b';
    ctx.fillRect(1135, 552, 28, 138);
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(1125, 612, 48, 22); // Dilithium chamber
    ctx.fillStyle = wf > 0 ? '#38bdf8' : '#475569';
    ctx.fillRect(1163, 620, 315, 12); // Aft plasma conduit to pylons

    // Deflector Dish Glow at Bow of Secondary Hull
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.ellipse(902, 622, 16, 34, 0.22, 0, Math.PI * 2);
    ctx.fill();

    // 3. Streamlined Mid-Elevation Warp Nacelle + Hooded Crimson Bussard Collector
    ctx.strokeStyle = '#818cf8';
    ctx.lineWidth = 4;
    ctx.fillStyle = 'rgba(129, 140, 248, 0.22)';
    ctx.beginPath();
    ctx.roundRect(1155, 456, 635, 68, 30);
    ctx.fill();
    ctx.stroke();

    // Blue Warp Field Grille Strip
    ctx.fillStyle = wf > 0 ? '#60a5fa' : '#334155';
    ctx.beginPath();
    ctx.roundRect(1255, 476, 485, 24, 10);
    ctx.fill();

    // Hooded Crimson Bussard Collector
    ctx.fillStyle = '#e11d48';
    ctx.beginPath();
    ctx.ellipse(1192, 490, 36, 26, 0, Math.PI * 0.5, Math.PI * 1.5);
    ctx.fill();
    ctx.fillStyle = '#d97706';
    ctx.fillRect(1218, 458, 16, 64);

    ctx.restore();

    // Bottom Live Ship Telemetry Readouts
    ctx.textAlign = 'left';
    ctx.font = 'bold 28px "Eurostile", monospace';
    ctx.fillStyle = '#fde68a';
    ctx.fillText(`WARP OUTPUT: WARP ${wf.toFixed(1)}`, 155, 865);
    ctx.fillStyle = '#7dd3fc';
    ctx.fillText(`HULL CONFIG: ${shipState?.separationState?.toUpperCase() || 'DOCKED'}`, 695, 865);
    ctx.fillStyle = '#fdba74';
    ctx.fillText(`EPS POWER: ENGINES ${shipState?.power?.engines ?? 100}%  |  SHIELDS ${shipState?.power?.shields ?? 85}%`, 1255, 865);

    tex.needsUpdate = true;
  }

  render(null);
  return { texture: tex, render };
}
