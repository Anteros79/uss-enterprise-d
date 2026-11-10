// USS Enterprise NCC-1701-D — Studio-Miniature Calibrated Exterior & Space Environment Builder
// Scale: 1 unit = 1.0 meter (Length: 642.50m, Beam: 463.73m, Studio Height: 118.25m [+68.75m..-49.50m])
// Pixel-calibrated against the ILM 6-foot & 4-foot studio miniatures and Andrew Probert orthographic plans:
//   1. Parametric 256×48 Saucer Shell with convex elliptical dorsal arch, integrated S-curve aft tail
//      inboard of the Twin Saucer Auxiliary Impulse notches (X = ±103m), and terraced ventral bowl
//      dropping to Y = +13.2m while pocketing the Stardrive Cobra Head at Y = +34.8m.
//   2. Continuous smooth 3D swept phaser ribbons (zero blocky domino segments).
//   3. Smooth 96-segment Cobra Head separation deck + compact 27m forward-swept concave Connecting Neck
//      flowing forward into the overhanging Secondary Hull brow above the Almond Deflector (Y = -26.8m).
//   4. 96-step swan-neck curved Nacelle Pylons & streamlined horizontal-stadium Warp Nacelles (Y = -1.5m)
//      with sculpted overhanging Bussard hull cowls and recessed cerulean warp field grilles.

import * as THREE from 'three';
import {
  getHullAztecMaps,
  getSaucerDorsalMaps,
  getSaucerVentralMaps,
  getCobraHeadMaps,
  getSecondaryHullMaps,
  getShuttlebayPennantTexture,
  getPlanetSurfaceTexture,
  getWindowBandMaps,
  getDeflectorDishTexture,
  getBussardCollectorTexture
} from '../utils/TextureGenerator.js';
import { getDeckElevation, getWalkableDeckFloorY, SHIP_TOP_Y } from '../data/DeckRegistry.js';

export class EnterpriseExterior {
  constructor(scene, saucerAssembly, stardriveAssembly) {
    this.scene = scene;
    this.saucerAssembly = saucerAssembly;
    this.stardriveAssembly = stardriveAssembly;

    this.saucerExteriorGroup = new THREE.Group();
    this.saucerExteriorGroup.name = 'SaucerExteriorHull';
    this.saucerAssembly.add(this.saucerExteriorGroup);

    this.stardriveExteriorGroup = new THREE.Group();
    this.stardriveExteriorGroup.name = 'StardriveExteriorHull';
    this.stardriveAssembly.add(this.stardriveExteriorGroup);

    this.cutawayTargets = [];
    this.bussardRotors = [];
    this.navStrobes = [];
    this.warpGrilleMaterials = [];
    this.saucerImpulseMaterials = [];
    this.stardriveImpulseMaterials = [];
    this.dockingLightMaterials = [];
    this.shuttlebayPortDoor = null;
    this.shuttlebayStbdDoor = null;
    this.exteriorShuttlecraft = null;

    this.starfield = null;
    this.planetGroup = null;

    this.buildMaterials();
    this.buildSpaceEnvironment();
    this.buildSaucerExterior();
    this.buildStardriveExterior();
  }

  buildMaterials() {
    const hullAztec = getHullAztecMaps();
    const dorsalMaps = getSaucerDorsalMaps();
    const ventralMaps = getSaucerVentralMaps();
    const cobraMaps = getCobraHeadMaps();
    const secHullMaps = getSecondaryHullMaps();
    const rimBandMaps = getWindowBandMaps(2, 520, '#ccd5de');
    const neckBandMaps = getWindowBandMaps(14, 240, '#ccd5de');
    const hullBandMaps = getWindowBandMaps(14, 280, '#cad3dc');

    this.hullMainMat = new THREE.MeshStandardMaterial({
      map: hullAztec.map,
      roughnessMap: hullAztec.roughnessMap,
      color: 0xffffff,
      roughness: 0.42,
      metalness: 0.24,
      side: THREE.FrontSide
    });

    this.hullDarkAccentMat = new THREE.MeshStandardMaterial({
      map: hullAztec.map,
      roughnessMap: hullAztec.roughnessMap,
      color: 0xb6c2ce,
      roughness: 0.46,
      metalness: 0.28,
      side: THREE.DoubleSide
    });

    this.saucerDorsalMat = new THREE.MeshStandardMaterial({
      map: dorsalMaps.map,
      emissiveMap: dorsalMaps.emissiveMap,
      emissive: new THREE.Color(0xfff4d4),
      emissiveIntensity: 1.75,
      roughnessMap: dorsalMaps.roughnessMap,
      roughness: 0.44,
      metalness: 0.24,
      side: THREE.FrontSide
    });

    this.saucerVentralMat = new THREE.MeshStandardMaterial({
      map: ventralMaps.map,
      emissiveMap: ventralMaps.emissiveMap,
      emissive: new THREE.Color(0xfff4d6),
      emissiveIntensity: 1.95,
      roughnessMap: ventralMaps.roughnessMap,
      roughness: 0.42,
      metalness: 0.24,
      side: THREE.FrontSide
    });

    this.cobraHeadMat = new THREE.MeshStandardMaterial({
      map: cobraMaps.map,
      roughnessMap: cobraMaps.roughnessMap,
      roughness: 0.42,
      metalness: 0.24,
      side: THREE.FrontSide
    });

    this.secondaryHullMat = new THREE.MeshStandardMaterial({
      map: secHullMaps.map,
      emissiveMap: secHullMaps.emissiveMap,
      emissive: new THREE.Color(0xfff4d4),
      emissiveIntensity: 1.85,
      roughnessMap: secHullMaps.roughnessMap,
      roughness: 0.42,
      metalness: 0.24,
      side: THREE.FrontSide
    });

    this.shuttlebayPennantMat = new THREE.MeshStandardMaterial({
      map: getShuttlebayPennantTexture(),
      roughnessMap: hullAztec.roughnessMap,
      roughness: 0.42,
      metalness: 0.24
    });

    this.rimWindowMat = new THREE.MeshStandardMaterial({
      map: rimBandMaps.map,
      emissiveMap: rimBandMaps.emissiveMap,
      roughnessMap: rimBandMaps.roughnessMap,
      emissive: new THREE.Color(0xfff3cf),
      emissiveIntensity: 1.85,
      roughness: 0.38,
      metalness: 0.24,
      side: THREE.FrontSide
    });

    this.neckWindowMat = new THREE.MeshStandardMaterial({
      map: neckBandMaps.map,
      emissiveMap: neckBandMaps.emissiveMap,
      roughnessMap: neckBandMaps.roughnessMap,
      emissive: new THREE.Color(0xfff4d4),
      emissiveIntensity: 1.80,
      roughness: 0.40,
      metalness: 0.24,
      side: THREE.FrontSide
    });

    this.windowBandMat = new THREE.MeshStandardMaterial({
      map: hullBandMaps.map,
      emissiveMap: hullBandMaps.emissiveMap,
      roughnessMap: hullBandMaps.roughnessMap,
      emissive: new THREE.Color(0xfff2cc),
      emissiveIntensity: 1.80,
      roughness: 0.40,
      metalness: 0.24,
      side: THREE.FrontSide
    });

    this.phaserStripMat = new THREE.MeshStandardMaterial({
      color: 0x464d56,
      roughness: 0.44,
      metalness: 0.58,
      side: THREE.DoubleSide
    });

    this.phaserEmitterMat = new THREE.MeshStandardMaterial({
      color: 0x6b5f4f,
      roughness: 0.36,
      metalness: 0.64,
      side: THREE.DoubleSide
    });

    this.lifeboatMat = new THREE.MeshStandardMaterial({
      color: 0xe3ded0,
      roughness: 0.40,
      metalness: 0.18
    });

    this.lifeboatTrimMat = new THREE.MeshStandardMaterial({
      color: 0xb83b32,
      roughness: 0.42,
      metalness: 0.20
    });

    this.rcsGoldMat = new THREE.MeshStandardMaterial({
      color: 0xb59b57,
      roughness: 0.40,
      metalness: 0.32
    });

    this.dockingMetalMat = new THREE.MeshStandardMaterial({
      color: 0x8e9ba8,
      roughness: 0.42,
      metalness: 0.48
    });

    this.windowGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xc4e8ff,
      emissive: new THREE.Color(0xffe2a8),
      emissiveIntensity: 0.48,
      transparent: true,
      opacity: 0.34,
      roughness: 0.08,
      metalness: 0.1,
      side: THREE.DoubleSide,
      depthWrite: false
    });
  }

  // Builds a continuous, ultra-smooth beveled 3D phaser array ribbon (zero blocky domino bricks!)
  buildSmoothPhaserRibbon(parent, sampleFn, sampleCount, halfWidth, height, upSign = 1) {
    const group = new THREE.Group();

    const buildStripLayer = (hw, hOffset, hThick, mat) => {
      const positions = [];
      const indices = [];
      // Cross-section has 4 vertices across width: outer-left base, inner-left top, inner-right top, outer-right base
      for (let i = 0; i <= sampleCount; i++) {
        const t = i / sampleCount;
        const pt = sampleFn(t);
        const tNext = Math.min(1, t + 0.002);
        const tPrev = Math.max(0, t - 0.002);
        const pNext = sampleFn(tNext);
        const pPrev = sampleFn(tPrev);

        const tangent = new THREE.Vector3().subVectors(pNext.pos, pPrev.pos).normalize();
        const up = (pt.normal ? pt.normal.clone() : new THREE.Vector3(0, upSign, 0)).normalize();
        const side = new THREE.Vector3().crossVectors(tangent, up).normalize();

        const p0 = new THREE.Vector3().copy(pt.pos).addScaledVector(side, -hw).addScaledVector(up, hOffset);
        const p1 = new THREE.Vector3().copy(pt.pos).addScaledVector(side, -hw * 0.72).addScaledVector(up, hOffset + hThick);
        const p2 = new THREE.Vector3().copy(pt.pos).addScaledVector(side, hw * 0.72).addScaledVector(up, hOffset + hThick);
        const p3 = new THREE.Vector3().copy(pt.pos).addScaledVector(side, hw).addScaledVector(up, hOffset);

        positions.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);

        if (i < sampleCount) {
          const r0 = i * 4;
          const r1 = (i + 1) * 4;
          for (let k = 0; k < 3; k++) {
            if (upSign > 0) {
              indices.push(r0 + k, r0 + k + 1, r1 + k);
              indices.push(r0 + k + 1, r1 + k + 1, r1 + k);
            } else {
              indices.push(r0 + k, r1 + k, r0 + k + 1);
              indices.push(r0 + k + 1, r1 + k, r1 + k + 1);
            }
          }
        }
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geo.setIndex(indices);
      geo.computeVertexNormals();
      return new THREE.Mesh(geo, mat);
    };

    group.add(buildStripLayer(halfWidth, 0.02, height, this.phaserStripMat));
    group.add(buildStripLayer(halfWidth * 0.56, height * 0.75, height * 0.42, this.phaserEmitterMat));
    parent.add(group);
    return group;
  }

  buildSpaceEnvironment() {
    // 1. Balanced Studio Miniature Key, Grazing Ventral Fill & Cool Rim Lighting
    const keyLight = new THREE.DirectionalLight(0xfff9ee, 2.65);
    keyLight.position.set(760, 490, -820);
    this.scene.add(keyLight);

    const ventralKey = new THREE.DirectionalLight(0xdbeafe, 1.38);
    ventralKey.position.set(-420, -520, -680);
    this.scene.add(ventralKey);

    const coolRimLight = new THREE.DirectionalLight(0x60a5fa, 1.25);
    coolRimLight.position.set(-850, 260, 750);
    this.scene.add(coolRimLight);

    const ambient = new THREE.AmbientLight(0x3a495e, 0.88);
    this.scene.add(ambient);

    // 2. Crisp Pinpoint Starfield
    const starCount = 5600;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const r = 5200 + Math.random() * 9800;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const tint = Math.random();
      if (tint < 0.22) {
        colors[i * 3] = 0.76; colors[i * 3 + 1] = 0.88; colors[i * 3 + 2] = 1.0;
      } else if (tint < 0.36) {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 0.91; colors[i * 3 + 2] = 0.74;
      } else {
        colors[i * 3] = 0.96; colors[i * 3 + 1] = 0.97; colors[i * 3 + 2] = 1.0;
      }
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 12.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      sizeAttenuation: true
    });

    this.starfield = new THREE.Points(starGeo, starMat);
    this.scene.add(this.starfield);

    // 3. High-Resolution Class-M Planet (Veridian IV) + Atmospheric Rim Halo (framed so the Enterprise remains dominant!)
    this.basePlanetSurface = getPlanetSurfaceTexture();
    this.planetGroup = new THREE.Group();
    this.planetGroup.position.set(-2950, -1380, 3850);

    this.planetCanvas = document.createElement('canvas');
    this.planetCanvas.width = 2048;
    this.planetCanvas.height = 1024;
    this.planetCtx = this.planetCanvas.getContext('2d');

    this.planetTex = new THREE.CanvasTexture(this.planetCanvas);
    this.planetTex.anisotropy = 8;
    this.planetTex.colorSpace = THREE.SRGBColorSpace;

    const planetMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1180, 96, 64),
      new THREE.MeshStandardMaterial({
        map: this.planetTex,
        roughness: 0.84,
        metalness: 0.02
      })
    );
    planetMesh.rotation.y = -0.52;
    planetMesh.rotation.z = 0.16;
    this.planetGroup.add(planetMesh);

    this.atmoMat = new THREE.MeshBasicMaterial({
      color: 0xbae6fd,
      transparent: true,
      opacity: 0.18,
      side: THREE.BackSide
    });
    const atmoMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1204, 96, 64),
      this.atmoMat
    );
    this.planetGroup.add(atmoMesh);
    this.scene.add(this.planetGroup);

    // 4. Forward Bow Celestial Body (Veridian IV Inner Moon at Z = -1950m for Viewscreen & Ten Forward)
    const forwardMoonGroup = new THREE.Group();
    forwardMoonGroup.position.set(220, 75, -1950);
    const moonMesh = new THREE.Mesh(
      new THREE.SphereGeometry(210, 64, 48),
      new THREE.MeshStandardMaterial({ map: this.planetTex, roughness: 0.72 })
    );
    forwardMoonGroup.add(moonMesh);
    const moonAtmo = new THREE.Mesh(
      new THREE.SphereGeometry(216, 64, 48),
      new THREE.MeshBasicMaterial({ color: 0xbae6fd, transparent: true, opacity: 0.18, side: THREE.BackSide })
    );
    forwardMoonGroup.add(moonAtmo);
    this.scene.add(forwardMoonGroup);

    this.setStarSystemTheme('earth');
  }

  setStarSystemTheme(systemId = 'earth') {
    if (!this.planetCtx || !this.planetTex) return;
    const themes = {
      earth:   { tint: 'rgba(56, 189, 248, 0.08)', atmo: 0xbae6fd },
      vulcan:  { tint: 'rgba(234, 88, 12, 0.42)',  atmo: 0xfdba74 },
      qonos:   { tint: 'rgba(22, 163, 74, 0.36)',  atmo: 0x86efac },
      romulus: { tint: 'rgba(20, 184, 166, 0.36)', atmo: 0x5eead4 },
      bajor:   { tint: 'rgba(168, 85, 247, 0.32)', atmo: 0xd8b4fe }
    };
    const t = themes[systemId] || themes.earth;
    if (this.basePlanetSurface?.image) {
      this.planetCtx.drawImage(this.basePlanetSurface.image, 0, 0, 2048, 1024);
    }
    this.planetCtx.fillStyle = t.tint;
    this.planetCtx.fillRect(0, 0, 2048, 1024);

    // Subtle night-side terminator shading for realistic orbital crescent
    const shadowGrad = this.planetCtx.createLinearGradient(0, 0, 2048, 320);
    shadowGrad.addColorStop(0.0, 'rgba(255, 255, 255, 0.10)');
    shadowGrad.addColorStop(0.55, 'rgba(0, 0, 0, 0.0)');
    shadowGrad.addColorStop(0.82, 'rgba(2, 5, 12, 0.72)');
    shadowGrad.addColorStop(1.0, 'rgba(1, 3, 8, 0.94)');
    this.planetCtx.fillStyle = shadowGrad;
    this.planetCtx.fillRect(0, 0, 2048, 1024);

    this.planetTex.needsUpdate = true;
    if (this.atmoMat) {
      this.atmoMat.color.setHex(t.atmo);
    }
  }

  // Evaluates exact Saucer 3D point (in saucerShell local coords around Z = -139.0m)
  // Includes the integrated concave S-curve aft tail inboard of X = ±103m (Ref 1 & Ref 4!)
  evaluateSaucerPoint(rFrac, angle, isVentral = false) {
    const rx = 231.86;
    const rz = 182.25;
    const rimY = 37.0;

    const ux = Math.cos(angle);
    const uz = Math.sin(angle); // -1 = Bow (-Z), +1 = Aft (+Z)

    const baseX = ux * rx * rFrac;
    let z = uz * rz * rFrac;

    // Integrated Studio-Model Aft Saucer Tail (inboard of X = ±102m Twin Saucer Impulse notches!)
    if (uz > 0.02) {
      const xOuter = Math.abs(ux * rx);
      if (xOuter < 102.0) {
        const sCurve = 0.5 + 0.5 * Math.cos((Math.PI * xOuter) / 102.0);
        const tailExt = 27.5 * Math.pow(sCurve, 1.32) * Math.pow(uz, 1.45) * Math.pow(rFrac, 1.35);
        z += tailExt;
      }
    }

    let y;
    if (!isVentral) {
      // Broad convex elliptical dorsal arch matching Ref 4 Front Ortho!
      const arch = Math.pow(Math.max(0, 1.0 - Math.pow(rFrac, 1.92)), 0.58);
      // Subtle studio-model concentric saucer terrace steps at rFrac = 0.93 & 0.735
      const step1 = rFrac < 0.93 ? 0.55 * Math.min(1, (0.93 - rFrac) / 0.03) : 0;
      const step2 = rFrac < 0.735 ? 0.65 * Math.min(1, (0.735 - rFrac) / 0.03) : 0;
      y = (rimY + 1.05) + arch * 24.5 + step1 + step2;

      // Keep aft tail centerline sleek (+39.6m at trailing Main Impulse edge)
      if (uz > 0.2 && rFrac > 0.55) {
        const xOuter = Math.abs(ux * rx);
        if (xOuter < 72.0) {
          const aftBlend = Math.min(1, (uz - 0.2) / 0.75) * (1 - xOuter / 72.0) * ((rFrac - 0.55) / 0.45);
          y = y * (1 - aftBlend * 0.42) + (rimY + 3.2) * (aftBlend * 0.42);
        }
      }

      // Sculpted dorsal recessed landing channel for Main Shuttlebay 1 approach apron (worldZ = -65m..-40m)
      const worldZ = -139.0 + z;
      if (worldZ > -65.0 && worldZ < -40.0 && Math.abs(baseX) < 13.5) {
        const xApron = 0.5 + 0.5 * Math.cos((Math.PI * Math.abs(baseX)) / 13.5);
        const zApron = Math.sin(((worldZ + 65.0) / 25.0) * Math.PI);
        y -= 1.35 * xApron * zApron;
      }
    } else {
      // Terraced convex ventral saucer bowl dropping 22.6m down to Y = +13.2m (Ref 4 Front Ortho!)
      const bowl = Math.pow(Math.max(0, 1.0 - Math.pow(rFrac, 1.78)), 0.68);
      const vTerrace = rFrac < 0.88 ? -0.85 * Math.min(1, (0.88 - rFrac) / 0.035) : 0;
      y = (rimY - 1.05) - bowl * 21.8 + vTerrace;

      // Smoothly arch the aft-central ventral pocket UPWARD to Y = +34.8m so it cradles the Cobra Head!
      const worldZ = -139.0 + z;
      if (worldZ > -26.0 && Math.abs(baseX) < 66.0) {
        const zBlend = Math.min(1, (worldZ + 26.0) / 34.0);
        const xBlend = Math.cos((Math.PI * 0.5 * Math.abs(baseX)) / 66.0);
        const pocketFactor = Math.pow(zBlend, 1.15) * Math.pow(Math.max(0, xBlend), 1.2);
        y = y * (1 - pocketFactor) + 34.95 * pocketFactor;
      }
    }

    return new THREE.Vector3(baseX, y, z);
  }

  buildParametricSaucerSurface(rings, segs, isVentral) {
    const rx = 231.86;
    const rz = 182.25;
    const positions = [];
    const uvs = [];
    const indices = [];

    for (let r = 0; r <= rings; r++) {
      // Cluster extra rings near outer rim and terrace steps for razor-sharp bevels
      const rFrac = Math.pow(r / rings, 0.88);
      for (let s = 0; s <= segs; s++) {
        const angle = (s / segs) * Math.PI * 2;
        const pt = this.evaluateSaucerPoint(rFrac, angle, isVentral);
        positions.push(pt.x, pt.y, pt.z);

        const u = 0.5 + (isVentral ? -pt.x : pt.x) / (rx * 2.02);
        const v = 0.5 - (Math.sin(angle) * rz * rFrac) / (rz * 2.02);
        uvs.push(u, v);

        if (r < rings && s < segs) {
          const i0 = r * (segs + 1) + s;
          const i1 = i0 + 1;
          const i2 = (r + 1) * (segs + 1) + s;
          const i3 = i2 + 1;
          if (!isVentral) {
            indices.push(i0, i1, i2, i1, i3, i2);
          } else {
            indices.push(i0, i2, i1, i1, i2, i3);
          }
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
  }

  buildParametricSaucerRim(segs) {
    const profileOffsets = [
      { rMul: 0.992, dy: -1.08, v: 0.0 },
      { rMul: 1.000, dy: -0.44, v: 0.28 },
      { rMul: 1.000, dy:  0.44, v: 0.72 },
      { rMul: 0.992, dy:  1.08, v: 1.0 }
    ];
    const positions = [];
    const uvs = [];
    const indices = [];

    for (let p = 0; p < profileOffsets.length; p++) {
      const prof = profileOffsets[p];
      for (let s = 0; s <= segs; s++) {
        const angle = (s / segs) * Math.PI * 2;
        const dPt = this.evaluateSaucerPoint(prof.rMul, angle, false);
        const vPt = this.evaluateSaucerPoint(prof.rMul, angle, true);
        const midY = (dPt.y + vPt.y) * 0.5;
        positions.push(dPt.x, midY + prof.dy, dPt.z);
        uvs.push((s / segs) * 6.0, prof.v);

        if (p < profileOffsets.length - 1 && s < segs) {
          const i0 = p * (segs + 1) + s;
          const i1 = i0 + 1;
          const i2 = (p + 1) * (segs + 1) + s;
          const i3 = i2 + 1;
          indices.push(i0, i2, i1, i1, i2, i3);
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
  }

  buildSaucerExterior() {
    const saucerCenterZ = -139.0;
    const rx = 231.86;
    const rimY = 37.0;

    const saucerShell = new THREE.Group();
    saucerShell.position.set(0, 0, saucerCenterZ);
    this.saucerExteriorGroup.add(saucerShell);

    // 1. CONTINUOUS 256×48 PARAMETRIC DORSAL SAUCER SHELL (With Integrated S-Curve Aft Tail!)
    const dorsalGeo = this.buildParametricSaucerSurface(48, 256, false);
    const dorsalMesh = new THREE.Mesh(dorsalGeo, this.saucerDorsalMat);
    saucerShell.add(dorsalMesh);
    this.cutawayTargets.push(dorsalMesh);

    // 1B. CONTINUOUS SMOOTH 3D SWEPT DORSAL PHASER RIBBONS (Zero Blocky Bricks!)
    const dorsalPhaserGroup = new THREE.Group();
    saucerShell.add(dorsalPhaserGroup);
    this.cutawayTargets.push(dorsalPhaserGroup);

    // Main Dorsal Horseshoe Phaser Array (rFrac = 0.7324, 0.70π around Bow to 2.30π)
    this.buildSmoothPhaserRibbon(
      dorsalPhaserGroup,
      (t) => {
        const a = (0.70 + t * 1.60) * Math.PI;
        const pos = this.evaluateSaucerPoint(0.7324, a, false);
        return { pos, normal: new THREE.Vector3(Math.cos(a) * 0.14, 1.0, Math.sin(a) * 0.14) };
      },
      192,
      1.85,
      0.42,
      1
    );

    // Two Aft Dorsal Auxiliary Phaser Ribbons flanking Shuttlebay 1 & Aft Tail (Ref 1!)
    for (const arcRange of [[0.34, 0.45], [0.55, 0.66]]) {
      this.buildSmoothPhaserRibbon(
        dorsalPhaserGroup,
        (t) => {
          const a = (arcRange[0] + t * (arcRange[1] - arcRange[0])) * Math.PI;
          const pos = this.evaluateSaucerPoint(0.858, a, false);
          return { pos, normal: new THREE.Vector3(0, 1, 0) };
        },
        32,
        1.55,
        0.38,
        1
      );
    }

    // 6 Subtle Flush Dorsal Ochre-Gold RCS / Sensor Pads (Ref 1)
    const dorsalRcsPads = [
      { rFrac: 1434 / 2027.7, a: 1.50 * Math.PI - 0.075, w: 11.8, d: 3.8 },
      { rFrac: 1434 / 2027.7, a: 1.50 * Math.PI + 0.075, w: 11.8, d: 3.8 },
      { rFrac: 950 / 2027.7,  a: 0.50 * Math.PI - 0.29,  w: 6.2,  d: 13.8 },
      { rFrac: 950 / 2027.7,  a: 0.50 * Math.PI + 0.29,  w: 6.2,  d: 13.8 },
      { rFrac: 1955 / 2027.7, a: 0.14,                   w: 8.4,  d: 3.4 },
      { rFrac: 1955 / 2027.7, a: Math.PI - 0.14,         w: 8.4,  d: 3.4 }
    ];
    for (const pad of dorsalRcsPads) {
      const pt = this.evaluateSaucerPoint(pad.rFrac, pad.a, false);
      const tx = -Math.sin(pad.a) * rx;
      const tz = Math.cos(pad.a) * 182.25;
      const padMesh = new THREE.Mesh(new THREE.BoxGeometry(pad.w, 0.24, pad.d), this.rcsGoldMat);
      padMesh.position.set(pt.x, pt.y + 0.08, pt.z);
      padMesh.rotation.y = Math.atan2(-tz, tx);
      dorsalPhaserGroup.add(padMesh);
    }

    // 2. RAZOR-CRISP 256-SEGMENT PARAMETRIC BEVELED SAUCER PERIMETER RIM
    const rimGeo = this.buildParametricSaucerRim(256);
    const rimMesh = new THREE.Mesh(rimGeo, this.rimWindowMat);
    saucerShell.add(rimMesh);

    // 3. TEN FORWARD PANORAMIC BOW WINDOWS (Deck 10 Forward Rim: Z = -321.25m, Y = +37.0m — FrontSide outward so inside-out view is 100% unobstructed!)
    const tenForwardExtGroup = new THREE.Group();
    tenForwardExtGroup.position.set(0, rimY, -182.25);
    saucerShell.add(tenForwardExtGroup);

    const extGlassOutwardMat = this.windowGlassMat.clone();
    extGlassOutwardMat.side = THREE.FrontSide;

    const bayCount = 5;
    const spanAngle = 0.24;
    for (let i = 0; i < bayCount; i++) {
      const t = (i - (bayCount - 1) / 2) / ((bayCount - 1) / 2);
      const angle = t * (spanAngle / 2);
      const bx = Math.sin(angle) * 17.5;
      const bz = (1 - Math.cos(angle)) * 5.8;

      const glassPane = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1.85), extGlassOutwardMat);
      glassPane.position.set(bx, 0.05, bz - 0.25);
      glassPane.rotation.y = Math.PI - angle;
      glassPane.rotation.x = -0.22;
      tenForwardExtGroup.add(glassPane);

      if (i < bayCount - 1) {
        const mullion = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 1.95), this.hullMainMat);
        mullion.position.set(bx + 1.68, 0.05, bz - 0.26);
        mullion.rotation.y = Math.PI - angle;
        mullion.rotation.x = -0.22;
        tenForwardExtGroup.add(mullion);
      }
    }

    // 4. CONTINUOUS 256×48 PARAMETRIC VENTRAL SAUCER BOWL (Drops to Y = +13.2m & Pockets Cobra Head!)
    const ventralGeo = this.buildParametricSaucerSurface(48, 256, true);
    const ventralMesh = new THREE.Mesh(ventralGeo, this.saucerVentralMat);
    saucerShell.add(ventralMesh);

    // Continuous Smooth 3D Ventral Phaser Ribbon
    const ventralDetailGroup = new THREE.Group();
    saucerShell.add(ventralDetailGroup);
    this.buildSmoothPhaserRibbon(
      ventralDetailGroup,
      (t) => {
        const a = (1.08 + t * 0.84) * Math.PI;
        const pos = this.evaluateSaucerPoint(0.582, a, true);
        return { pos, normal: new THREE.Vector3(0, -1, 0) };
      },
      128,
      1.65,
      0.38,
      -1
    );

    // Concentric Captain's Yacht (Calypso) Docking Ring & Central Sensor Dome at Y = +13.2m (Ref 4 Front Ortho!)
    const yachtPt = this.evaluateSaucerPoint(0.0, 0, true);
    const yachtGroup = new THREE.Group();
    yachtGroup.position.set(0, yachtPt.y + 0.3, -4.0);
    saucerShell.add(yachtGroup);

    const yachtRingGeo = new THREE.TorusGeometry(18.5, 1.25, 24, 72);
    yachtRingGeo.rotateX(Math.PI / 2);
    yachtRingGeo.scale(1.12, 1.0, 1.28);
    yachtGroup.add(new THREE.Mesh(yachtRingGeo, this.hullDarkAccentMat));

    const yachtDomeGeo = new THREE.SphereGeometry(13.5, 64, 24, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.5);
    yachtDomeGeo.scale(1.10, 0.18, 1.28);
    const yachtInnerDome = new THREE.Mesh(yachtDomeGeo, this.hullMainMat);
    yachtInnerDome.position.y = 0.2;
    yachtGroup.add(yachtInnerDome);

    // 5. SMOOTH 128-SEGMENT DECK 1 BRIDGE TEARDROP SUPERSTRUCTURE (Encloses +63.65m..+68.75m Bridge Dome!)
    const bridgeBaseY = getWalkableDeckFloorY(1, 'saucer'); // +63.65m
    const bridgeModuleGroup = new THREE.Group();
    bridgeModuleGroup.position.set(0, bridgeBaseY, saucerCenterZ);
    this.saucerExteriorGroup.add(bridgeModuleGroup);

    // Smooth Teardrop Dorsal Fairing Skirt (Seats flush into the convex dorsal saucer arch with zero seams)
    const spineFairingGeo = new THREE.CylinderGeometry(19.5, 34.0, 5.2, 96, 1, true);
    spineFairingGeo.scale(1.04, 1.0, 1.58);
    const spineFairing = new THREE.Mesh(spineFairingGeo, this.hullMainMat);
    spineFairing.position.set(0, -1.8, 9.5);
    bridgeModuleGroup.add(spineFairing);
    this.cutawayTargets.push(spineFairing);

    // Smooth Deck 1 Elliptical Bridge Outer Skin (openEnded so it encloses the 5.10m soaring Bridge interior!)
    const fairingBaseGeo = new THREE.CylinderGeometry(13.8, 19.8, 4.4, 96, 1, true);
    fairingBaseGeo.scale(1.02, 1.0, 1.38);
    const fairingBase = new THREE.Mesh(fairingBaseGeo, this.hullMainMat);
    fairingBase.position.set(0, 2.2, 2.0);
    bridgeModuleGroup.add(fairingBase);
    this.cutawayTargets.push(fairingBase);

    // Smooth Bridge Upper Skylight Cap (Apex at +63.65 + 6.58 = +70.23m, safely above the 5.12m interior dome!)
    const bridgeDomeGeo = new THREE.SphereGeometry(13.8, 96, 32, 0, Math.PI * 2, 0, Math.PI * 0.48);
    bridgeDomeGeo.scale(1.02, 0.14, 1.38);
    const bridgeDome = new THREE.Mesh(bridgeDomeGeo, this.hullMainMat);
    bridgeDome.position.set(0, 4.65, 2.0);
    bridgeModuleGroup.add(bridgeDome);
    this.cutawayTargets.push(bridgeDome);

    // Central Bridge Turbolift / Sensor Crown Blister (Ref 1 dorsal miniature detail!)
    const crownBlisterGeo = new THREE.SphereGeometry(5.6, 64, 20, 0, Math.PI * 2, 0, Math.PI * 0.5);
    crownBlisterGeo.scale(0.95, 0.22, 1.25);
    const crownBlister = new THREE.Mesh(crownBlisterGeo, this.hullDarkAccentMat);
    crownBlister.position.set(0, 5.55, 0.2);
    bridgeModuleGroup.add(crownBlister);
    this.cutawayTargets.push(crownBlister);

    // Twin Red Bridge Module Beacon Pads flanking the Bridge Teardrop (Ref 1)
    [-21.5, 21.5].forEach(bx => {
      const redBeacon = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.45, 3.0), this.lifeboatTrimMat);
      redBeacon.position.set(bx, -0.5, 2.0);
      bridgeModuleGroup.add(redBeacon);
    });

    // Observation Lounge Aft Slanted Windows (looking aft over Shuttlebay 1 & Nacelles)
    const obsWindowBank = new THREE.Group();
    obsWindowBank.position.set(0, 1.9, 21.6);
    for (let i = -2; i <= 2; i++) {
      const wPane = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 2.05), this.windowGlassMat);
      wPane.position.set(i * 2.4, 0, 0);
      wPane.rotation.x = -0.26;
      obsWindowBank.add(wPane);
    }
    bridgeModuleGroup.add(obsWindowBank);

    // 6. CURVED-ARCH DECK 4 MAIN SHUTTLEBAY 1 DECKHOUSE & HIGH-DPI "1701-D" PENNANT (Ref 1!)
    // Emerges cleanly above the dorsal saucer spine right aft of the Observation Lounge!
    const shuttlebayExtGroup = new THREE.Group();
    shuttlebayExtGroup.position.set(0, 60.8, -64.0);
    shuttlebayExtGroup.rotation.x = 0.088;
    this.saucerExteriorGroup.add(shuttlebayExtGroup);

    // Smooth Curved-Arch Dorsal Hangar Deckhouse (Extruded curved roof profile instead of a raw BoxGeometry!)
    const bayArchShape = new THREE.Shape();
    bayArchShape.moveTo(-14.2, 0);
    bayArchShape.quadraticCurveTo(-12.6, 3.8, -8.5, 4.1);
    bayArchShape.quadraticCurveTo(0, 4.45, 8.5, 4.1);
    bayArchShape.quadraticCurveTo(12.6, 3.8, 14.2, 0);
    bayArchShape.closePath();

    const bayArchGeo = new THREE.ExtrudeGeometry(bayArchShape, {
      depth: 29.0,
      bevelEnabled: true,
      bevelThickness: 0.6,
      bevelSize: 0.5,
      bevelSegments: 4,
      curveSegments: 32
    });
    const bayRoof = new THREE.Mesh(bayArchGeo, this.hullMainMat);
    bayRoof.position.set(0, -0.2, -24.2);
    shuttlebayExtGroup.add(bayRoof);
    this.cutawayTargets.push(bayRoof);

    // Crisp High-DPI "1701-D" Starfleet Pennant Plate flush on Shuttlebay 1 Crown (Ref 1!)
    const pennantPlate = new THREE.Mesh(
      new THREE.PlaneGeometry(18.0, 11.5),
      this.shuttlebayPennantMat
    );
    pennantPlate.rotation.x = -Math.PI / 2;
    pennantPlate.position.set(0, 4.38, -6.8);
    shuttlebayExtGroup.add(pennantPlate);
    this.cutawayTargets.push(pennantPlate);

    // Transverse Structural Hangar Louver Ribs forward of Pennant (Ref 1)
    for (let rIdx = 0; rIdx < 5; rIdx++) {
      const rib = new THREE.Mesh(
        new THREE.BoxGeometry(19.5 - rIdx * 0.6, 0.28, 0.95),
        this.hullDarkAccentMat
      );
      rib.position.set(0, 4.32, -22.5 + rIdx * 2.2);
      shuttlebayExtGroup.add(rib);
      this.cutawayTargets.push(rib);
    }

    // Overhanging Aft Hangar Portal Arch & Flight Control Observation Gallery Window
    const portalHeader = new THREE.Mesh(new THREE.BoxGeometry(22.4, 1.05, 3.4), this.hullDarkAccentMat);
    portalHeader.position.set(0, 3.55, 5.2);
    shuttlebayExtGroup.add(portalHeader);

    const flightControlGallery = new THREE.Mesh(
      new THREE.BoxGeometry(14.0, 0.52, 0.55),
      new THREE.MeshBasicMaterial({ color: 0xffeeb0 })
    );
    flightControlGallery.position.set(0, 3.48, 6.95);
    shuttlebayExtGroup.add(flightControlGallery);

    [-10.8, 10.8].forEach(px => {
      const portalJamb = new THREE.Mesh(new THREE.BoxGeometry(1.5, 3.8, 3.8), this.hullDarkAccentMat);
      portalJamb.position.set(px, 1.75, 4.9);
      shuttlebayExtGroup.add(portalJamb);
    });

    // Working Port & Starboard Ribbed Metallic Clamshell Space Doors
    const buildShuttlebayClamshellDoor = (isPort) => {
      const dGroup = new THREE.Group();
      const slab = new THREE.Mesh(new THREE.BoxGeometry(9.6, 3.1, 1.1), this.hullDarkAccentMat);
      dGroup.add(slab);

      for (let l = -2; l <= 2; l++) {
        const louver = new THREE.Mesh(new THREE.BoxGeometry(9.2, 0.16, 1.24), this.phaserStripMat);
        louver.position.set(0, l * 0.52, 0);
        dGroup.add(louver);
      }

      const cautionBar = new THREE.Mesh(new THREE.BoxGeometry(9.4, 0.24, 1.26), this.rcsGoldMat);
      cautionBar.position.set(0, -1.32, 0);
      dGroup.add(cautionBar);

      dGroup.position.set(isPort ? -4.9 : 4.9, 1.75, 5.5);
      return dGroup;
    };

    this.shuttlebayPortDoor = buildShuttlebayClamshellDoor(true);
    shuttlebayExtGroup.add(this.shuttlebayPortDoor);

    this.shuttlebayStbdDoor = buildShuttlebayClamshellDoor(false);
    shuttlebayExtGroup.add(this.shuttlebayStbdDoor);

    // Recessed Aft Landing Approach Apron
    const approachApron = new THREE.Mesh(new THREE.BoxGeometry(21.2, 0.65, 14.5), this.dockingMetalMat);
    approachApron.position.set(0, 0.22, 12.8);
    shuttlebayExtGroup.add(approachApron);

    [-4.8, 0, 4.8].forEach((rxPos, idx) => {
      const runwayStripe = new THREE.Mesh(
        new THREE.BoxGeometry(idx === 1 ? 0.62 : 0.44, 0.70, 13.0),
        idx === 1 ? this.rcsGoldMat : this.lifeboatTrimMat
      );
      runwayStripe.position.set(rxPos, 0.26, 13.0);
      shuttlebayExtGroup.add(runwayStripe);
    });

    // 6B. UPPER MAIN IMPULSE ENGINE AT INTEGRATED AFT SAUCER TAIL TIP (X = 0, Y = +38.8m, Z = +70.2m — Ref 1 & Ref 4!)
    const upperNeckImpulseMat = new THREE.MeshStandardMaterial({
      color: 0xff3b00,
      emissive: new THREE.Color(0xff2a00),
      emissiveIntensity: 3.4,
      roughness: 0.16
    });
    this.saucerImpulseMaterials.push(upperNeckImpulseMat);

    const upperImpulseGroup = new THREE.Group();
    upperImpulseGroup.position.set(0, 38.6, 69.5);
    this.saucerExteriorGroup.add(upperImpulseGroup);
    this.cutawayTargets.push(upperImpulseGroup);

    const upperImpShroud = new THREE.Mesh(new THREE.BoxGeometry(22.0, 2.8, 5.4), this.phaserStripMat);
    upperImpulseGroup.add(upperImpShroud);

    for (let c = 0; c < 6; c++) {
      const cx = -9.0 + (c + 0.5) * 3.0;
      const cell = new THREE.Mesh(new THREE.BoxGeometry(2.55, 1.95, 0.8), upperNeckImpulseMat);
      cell.position.set(cx, 0, 2.55);
      upperImpulseGroup.add(cell);
    }

    // 6C. TWIN SAUCER AUXILIARY IMPULSE ENGINES TUCKED INTO THE AFT WING NOTCHES (X = ±103.5m, Y = +37.0m, Z = +17.5m — Ref 1 & Ref 4!)
    const saucerImpulseMat = new THREE.MeshStandardMaterial({
      color: 0xff3b00,
      emissive: new THREE.Color(0xff2a00),
      emissiveIntensity: 3.2,
      roughness: 0.18
    });
    this.saucerImpulseMaterials.push(saucerImpulseMat);

    [-103.5, 103.5].forEach(xPos => {
      const sideSign = xPos < 0 ? -1 : 1;
      const saucerImpGroup = new THREE.Group();
      saucerImpGroup.position.set(xPos, 36.8, 17.5);
      saucerImpGroup.rotation.y = -sideSign * 0.08;
      this.saucerExteriorGroup.add(saucerImpGroup);

      const cowling = new THREE.Mesh(new THREE.BoxGeometry(23.5, 2.4, 8.6), this.hullMainMat);
      saucerImpGroup.add(cowling);

      const manifoldBezel = new THREE.Mesh(new THREE.BoxGeometry(21.6, 1.85, 1.1), this.phaserStripMat);
      manifoldBezel.position.set(0, 0, 4.0);
      saucerImpGroup.add(manifoldBezel);

      const totalSpan = 19.8;
      for (let c = 0; c < 6; c++) {
        const cx = -totalSpan / 2 + (c + 0.5) * (totalSpan / 6);
        const cellMesh = new THREE.Mesh(new THREE.BoxGeometry(2.75, 1.32, 0.55), saucerImpulseMat);
        cellMesh.position.set(cx, 0, 4.38);
        saucerImpGroup.add(cellMesh);

        if (c < 5) {
          const vaneX = -totalSpan / 2 + (c + 1) * (totalSpan / 6);
          const splitterVane = new THREE.Mesh(new THREE.BoxGeometry(0.38, 1.58, 0.82), this.phaserStripMat);
          splitterVane.position.set(vaneX, 0, 4.36);
          saucerImpGroup.add(splitterVane);
        }
      }

      const impLight = new THREE.PointLight(0xff3b00, 2.2, 48);
      impLight.position.set(0, 0, 7.5);
      saucerImpGroup.add(impLight);
    });

    // 7. SAUCER UNDERSIDE SEPARATION DOCKING POCKET (Mates cleanly at Y = +34.8m with Cobra Head!)
    const saucerDockGroup = new THREE.Group();
    saucerDockGroup.position.set(0, 34.85, 22.0);
    this.saucerExteriorGroup.add(saucerDockGroup);

    const dockPlate = new THREE.Mesh(new THREE.CylinderGeometry(26, 30, 0.8, 64), this.dockingMetalMat);
    dockPlate.scale.set(1.42, 1.0, 0.85);
    saucerDockGroup.add(dockPlate);

    const dockIndMat = new THREE.MeshBasicMaterial({ color: 0x22c55e });
    this.dockingLightMaterials.push(dockIndMat);
    for (let i = -2; i <= 2; i++) {
      if (i === 0) continue;
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.45, 0.45), dockIndMat);
      lamp.position.set(i * 9.0, 0.45, 8.0);
      saucerDockGroup.add(lamp);
    }

    // 8. SAUCER RUNNING & NAVIGATION LIGHTS
    this.addNavLight(this.saucerExteriorGroup, -rx, rimY, saucerCenterZ, 0xff2222, false);
    this.addNavLight(this.saucerExteriorGroup, rx, rimY, saucerCenterZ, 0x22ff55, false);
    this.addNavLight(this.saucerExteriorGroup, 0, rimY + 1.8, -321.25, 0xffffff, true);
    this.addNavLight(this.saucerExteriorGroup, 0, SHIP_TOP_Y + 0.4, saucerCenterZ, 0xffffff, true);
  }

  buildStardriveExterior() {
    // 1. SMOOTH 96-SEGMENT ANDREW PROBERT "COBRA HEAD" SEPARATION DECK (Y = +34.2m, Ref 3 & Ref 5!)
    const cobraBaseY = 34.2;
    const cobraGroup = new THREE.Group();
    cobraGroup.position.set(0, cobraBaseY, 26.0);
    this.stardriveExteriorGroup.add(cobraGroup);

    const cobraShape = new THREE.Shape();
    cobraShape.moveTo(0, -44);
    cobraShape.bezierCurveTo(24, -43.5, 52, -26, 58, -6);
    cobraShape.bezierCurveTo(60, 14, 48, 34, 33, 47);
    cobraShape.lineTo(-33, 47);
    cobraShape.bezierCurveTo(-48, 34, -60, 14, -58, -6);
    cobraShape.bezierCurveTo(-52, -26, -24, -43.5, 0, -44);

    const cobraGeo = new THREE.ExtrudeGeometry(cobraShape, {
      depth: 1.1,
      bevelEnabled: true,
      bevelThickness: 0.65,
      bevelSize: 2.2,
      bevelSegments: 8,
      curveSegments: 96
    });
    cobraGeo.rotateX(Math.PI / 2);

    const cPos = cobraGeo.attributes.position;
    const cUvs = new Float32Array(cPos.count * 2);
    for (let i = 0; i < cPos.count; i++) {
      const cx = cPos.getX(i);
      const cz = cPos.getZ(i);
      cUvs[i * 2] = 0.5 + cx / 122.0;
      cUvs[i * 2 + 1] = 1.0 - (cz + 46.0) / 96.0;
    }
    cobraGeo.setAttribute('uv', new THREE.BufferAttribute(cUvs, 2));
    cobraGeo.computeVertexNormals();

    const cobraHull = new THREE.Mesh(cobraGeo, this.cobraHeadMat);
    cobraHull.position.set(0, 0.15, 0);
    cobraGroup.add(cobraHull);

    // Smooth Continuous 3D Swept Cobra-Head Forward Phaser Ribbon (Zero Blocky Dominoes! Ref 3 & Ref 5!)
    this.buildSmoothPhaserRibbon(
      cobraGroup,
      (t) => {
        const a = (-0.81 + t * 0.62) * Math.PI;
        const rPhaser = 31.6;
        const px = Math.cos(a) * rPhaser * 1.25;
        const pz = 8.4 + Math.sin(a) * rPhaser * 0.87;
        return { pos: new THREE.Vector3(px, 0.82, pz), normal: new THREE.Vector3(0, 1, 0) };
      },
      96,
      1.38,
      0.40,
      1
    );

    // Flush Bronze-Tan Umbilical Pad, Octagonal Hatches & 4 Angled Docking Clamps (Ref 3 & Ref 5)
    const noseUmbilicalPad = new THREE.Mesh(new THREE.BoxGeometry(8.4, 0.24, 8.6), this.rcsGoldMat);
    noseUmbilicalPad.position.set(0, 0.82, -26.8);
    cobraGroup.add(noseUmbilicalPad);

    [-29.0, -24.6].forEach(hz => {
      const octHatch = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.55, 0.34, 8), this.dockingMetalMat);
      octHatch.position.set(0, 0.88, hz);
      cobraGroup.add(octHatch);
    });

    [-1, 1].forEach(side => {
      [0, 1].forEach(idx => {
        const clamp = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.36, 5.4), this.dockingMetalMat);
        clamp.position.set(side * (10.5 + idx * 7.6), 0.82, -25.6 + idx * 2.6);
        clamp.rotation.y = -side * (0.20 + idx * 0.15);
        cobraGroup.add(clamp);
      });
    });

    // Smooth Detachable Battle Bridge Dome (Encloses Deck 8 Stardrive Battle Bridge +30.40m..+34.45m!)
    const vCollar = new THREE.Mesh(new THREE.CylinderGeometry(11.4, 13.0, 0.38, 64), this.rcsGoldMat);
    vCollar.scale.set(1.12, 1.0, 1.36);
    vCollar.position.set(0, 0.84, -4.0);
    cobraGroup.add(vCollar);

    const bbDomeGeo = new THREE.CylinderGeometry(7.2, 10.6, 2.1, 72);
    bbDomeGeo.scale(1.0, 1.0, 1.28);
    const bbDome = new THREE.Mesh(bbDomeGeo, this.hullMainMat);
    bbDome.position.set(0, 1.45, 2.0);
    cobraGroup.add(bbDome);
    this.cutawayTargets.push(bbDome);

    const bbCapGeo = new THREE.SphereGeometry(3.4, 48, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
    bbCapGeo.scale(0.85, 0.25, 1.45);
    const bbCap = new THREE.Mesh(bbCapGeo, this.rcsGoldMat);
    bbCap.position.set(0, 2.48, 1.2);
    cobraGroup.add(bbCap);
    this.cutawayTargets.push(bbCap);

    // 2. COMPACT 27m FORWARD-SWEPT CONCAVE CONNECTING NECK (Y = -16.0m up to +34.2m — Ref 4, Ref 5 & Orbital Hero!)
    // Parametric 96×40 airfoil neck whose leading edge drops from Cobra Head nose and CURVES FORWARD
    // into the Secondary Hull's overhanging Deflector brow (Z = +6.5m)!
    const neckRings = 40;
    const neckSegs = 96;
    const neckPositions = [];
    const neckUvs = [];
    const neckIndices = [];

    for (let r = 0; r <= neckRings; r++) {
      const v = r / neckRings; // 0 = bottom (-16.0m inside Secondary Hull), 1 = top (+34.2m under Cobra Head)
      const y = -16.0 + v * 50.2;

      // Forward-swept concave throat leading edge (Ref 5 & media_1794008794748_aaf1eea4.jpg!):
      // Top under Cobra nose: Z = -8m; mid-throat waist (v = 0.56): Z = +16.5m; bottom brow (v = 0.08): Z = +6.2m!
      const waistPinch = Math.sin(Math.pow(v, 0.85) * Math.PI);
      const zLead = (1 - v) * 5.2 + v * (-9.5) + waistPinch * 20.5;
      // Aft trailing edge curves smoothly from Z = +71.5m (top) to Z = +86.5m (bottom impulse root)
      const zTrail = 86.5 - Math.pow(v, 1.15) * 15.0;

      const zMid = (zLead + zTrail) * 0.5;
      const halfLen = (zTrail - zLead) * 0.5;

      // Hourglass / Inverted-Arch Transverse Half-Width (Ref 4 Front & Rear Ortho!)
      const topFlare = Math.pow(Math.max(0, (v - 0.38) / 0.62), 1.85) * 35.5;
      const botFlare = Math.pow(Math.max(0, (0.34 - v) / 0.34), 1.55) * 14.5;
      const halfWidth = 14.8 + topFlare + botFlare;

      for (let s = 0; s <= neckSegs; s++) {
        const theta = (s / neckSegs) * Math.PI * 2;
        const cosT = Math.cos(theta); // -1 = Forward (-Z), +1 = Aft (+Z)
        const sinT = Math.sin(theta);

        // Streamlined Starfleet airfoil cross-section (crisp leading chine, fuller mid-chord, clean trailing spine)
        const zLocal = cosT * halfLen;
        const chordFrac = (cosT + 1) * 0.5; // 0 at leading edge, 1 at trailing edge
        const airfoilShape = Math.pow(Math.sin(Math.acos(Math.max(-1, Math.min(1, cosT)))), 0.78) *
                             (0.82 + 0.28 * Math.sin(chordFrac * Math.PI));
        const px = Math.sign(sinT) * Math.abs(sinT) * halfWidth * (0.12 + 0.88 * airfoilShape);
        const pz = zMid + zLocal;

        neckPositions.push(px, y, pz);
        neckUvs.push((s / neckSegs) * 2.0, v);

        if (r < neckRings && s < neckSegs) {
          const i0 = r * (neckSegs + 1) + s;
          const i1 = i0 + 1;
          const i2 = (r + 1) * (neckSegs + 1) + s;
          const i3 = i2 + 1;
          neckIndices.push(i0, i1, i2, i1, i3, i2);
        }
      }
    }

    const neckGeo = new THREE.BufferGeometry();
    neckGeo.setAttribute('position', new THREE.Float32BufferAttribute(neckPositions, 3));
    neckGeo.setAttribute('uv', new THREE.Float32BufferAttribute(neckUvs, 2));
    neckGeo.setIndex(neckIndices);
    neckGeo.computeVertexNormals();

    const neckMesh = new THREE.Mesh(neckGeo, this.neckWindowMat);
    this.stardriveExteriorGroup.add(neckMesh);

    // Streamlined Beveled Forward Photon Torpedo Launcher Fairing blended into Lower Neck Brow (Y = -9.2m, Z = +12.5m — Ref 5!)
    const torpFairingShape = new THREE.Shape();
    torpFairingShape.moveTo(-3.4, -1.0);
    torpFairingShape.quadraticCurveTo(0, -1.35, 3.4, -1.0);
    torpFairingShape.quadraticCurveTo(4.1, 0, 3.2, 1.05);
    torpFairingShape.quadraticCurveTo(0, 1.35, -3.2, 1.05);
    torpFairingShape.quadraticCurveTo(-4.1, 0, -3.4, -1.0);

    const torpFairingGeo = new THREE.ExtrudeGeometry(torpFairingShape, {
      depth: 6.2,
      bevelEnabled: true,
      bevelThickness: 0.45,
      bevelSize: 0.45,
      bevelSegments: 4,
      curveSegments: 24
    });
    const torpedoFairing = new THREE.Mesh(torpFairingGeo, this.hullMainMat);
    torpedoFairing.position.set(0, -9.2, 10.2);
    this.stardriveExteriorGroup.add(torpedoFairing);

    const torpedoAperture = new THREE.Mesh(new THREE.BoxGeometry(4.4, 1.35, 0.8), this.phaserStripMat);
    torpedoAperture.position.set(0, -9.2, 10.05);
    this.stardriveExteriorGroup.add(torpedoAperture);

    const torpedoTubeGlow = new THREE.Mesh(
      new THREE.CircleGeometry(0.68, 32),
      new THREE.MeshBasicMaterial({ color: 0xff5522 })
    );
    torpedoTubeGlow.position.set(0, -9.2, 9.62);
    torpedoTubeGlow.rotation.y = Math.PI;
    this.stardriveExteriorGroup.add(torpedoTubeGlow);

    // 2B. STARDRIVE MAIN IMPULSE ENGINE AT AFT NECK / SPINE JUNCTION (X = 0, Y = -9.8m, Z = +86.5m — Ref 1 & Ref 4!)
    const sdImpulseMat = new THREE.MeshStandardMaterial({
      color: 0xff3b00,
      emissive: new THREE.Color(0xff2a00),
      emissiveIntensity: 3.5,
      roughness: 0.16
    });
    this.stardriveImpulseMaterials.push(sdImpulseMat);

    const sdImpulseGroup = new THREE.Group();
    sdImpulseGroup.position.set(0, -9.8, 86.5);
    this.stardriveExteriorGroup.add(sdImpulseGroup);

    const sdImpShroud = new THREE.Mesh(new THREE.BoxGeometry(20.6, 3.8, 10.5), this.hullMainMat);
    sdImpShroud.position.set(0, 0, -2.2);
    sdImpulseGroup.add(sdImpShroud);

    const sdImpBezel = new THREE.Mesh(new THREE.BoxGeometry(19.0, 2.8, 1.3), this.phaserStripMat);
    sdImpBezel.position.set(0, 0, 2.7);
    sdImpulseGroup.add(sdImpBezel);

    const sdSpan = 17.4;
    for (let c = 0; c < 6; c++) {
      const cx = -sdSpan / 2 + (c + 0.5) * (sdSpan / 6);
      const cell = new THREE.Mesh(new THREE.BoxGeometry(2.45, 2.05, 0.58), sdImpulseMat);
      cell.position.set(cx, 0, 3.18);
      sdImpulseGroup.add(cell);

      if (c < 5) {
        const vx = -sdSpan / 2 + (c + 1) * (sdSpan / 6);
        const vane = new THREE.Mesh(new THREE.BoxGeometry(0.36, 2.4, 0.92), this.phaserStripMat);
        vane.position.set(vx, 0, 3.15);
        sdImpulseGroup.add(vane);
      }
    }

    const sdImpLight = new THREE.PointLight(0xff3800, 3.8, 80);
    sdImpLight.position.set(0, 0, 8.5);
    sdImpulseGroup.add(sdImpLight);

    // 3. STUDIO-CALIBRATED SECONDARY (ENGINEERING) HULL (Z = +8.0m to +276.5m, Beam = 135.2m, Keel = -49.5m — Ref 1, Ref 4 & Ref 5!)
    // Forward prow pocket is recessed to Z = +19.5m behind the Almond Deflector Collar so the Deflector Dish is 100% unobstructed!
    const engProfile = [
      new THREE.Vector2(0.0,  9.5),  // Recessed Parabolic Deflector Pocket Backplane (Z = +19.5m)
      new THREE.Vector2(21.6, 1.8),  // Almond Deflector Bezel Collar (Z = +11.8m)
      new THREE.Vector2(31.2, 22),   // Forward Shoulder Flare (Z = +32.0m)
      new THREE.Vector2(37.4, 54),   // Upper Shoulder Expansion (Z = +64.0m)
      new THREE.Vector2(38.85, 82),  // Maximum Shoulder Beam X = ±67.6m (Z = +92.0m)
      new THREE.Vector2(36.6, 124),  // Mid Engineering Section (Z = +134.0m)
      new THREE.Vector2(31.4, 168),  // Aft Engineering Approach (Z = +178.0m)
      new THREE.Vector2(25.4, 212),  // Forward Pylon Root Transition (Z = +222.0m)
      new THREE.Vector2(23.0, 248),  // Fantail Approach (Z = +258.0m)
      new THREE.Vector2(21.8, 264.5),// Broad Squared-Off Aft Fantail Transom Lip (Z = +274.5m, X = ±38.0m)
      new THREE.Vector2(0.0,  266.5) // Flat Stern Transom Closure (Z = +276.5m)
    ];
    const engLatheGeo = new THREE.LatheGeometry(engProfile, 128);
    engLatheGeo.rotateX(Math.PI / 2);

    const ePos = engLatheGeo.attributes.position;
    const eUvs = new Float32Array(ePos.count * 2);
    for (let i = 0; i < ePos.count; i++) {
      let ex = ePos.getX(i);
      let ey = ePos.getY(i);
      let ez = ePos.getZ(i); // 0 to 266.5
      const zFrac = ez / 266.5;

      // Exact 135.2m (X = ±67.6m) max shoulder beam & -49.5m..-12.0m vertical studio profile!
      ex *= 1.74;
      ey *= 0.56;

      if (ey < 0) {
        // Sculpted narrower lower keel boat-hull belly (Ref 4 Front Ortho!)
        const lowerPinch = 0.68 + 0.28 * zFrac;
        ex *= lowerPinch;
        ey *= 1.04;
      } else {
        // Wide arched upper shoulders sweeping FORWARD over the Almond Deflector Dish (Ref 5 & Orbital Hero!)
        ey *= 0.78;
        if (zFrac < 0.34 && zFrac > 0.001) {
          const browFactor = (1.0 - zFrac / 0.34) * Math.min(1.0, ey / 11.0);
          ez -= browFactor * 6.8; // Overhanging upper hood!
          ey += browFactor * 2.8;
        }
      }

      // Graceful upswept ventral belly rising from Y = -49.5m keel up to Y = -22.5m Aft Fantail Transom!
      if (zFrac > 0.40) {
        const aftT = (zFrac - 0.40) / 0.60;
        ey = ey * (1.0 - 0.46 * Math.pow(aftT, 1.25)) + Math.pow(aftT, 1.42) * 8.2;
      }

      ePos.setXYZ(i, ex, ey, ez);
      eUvs[i * 2] = 0.5 + ex / 142.0;
      eUvs[i * 2 + 1] = 1.0 - zFrac;
    }
    engLatheGeo.setAttribute('uv', new THREE.BufferAttribute(eUvs, 2));
    engLatheGeo.computeVertexNormals();
    engLatheGeo.translate(0, -26.8, 10.0);

    const engHullMesh = new THREE.Mesh(engLatheGeo, this.secondaryHullMat);
    this.stardriveExteriorGroup.add(engHullMesh);
    this.cutawayTargets.push(engHullMesh);

    // Yellow RCS Thruster Quads on Outer Lateral Chines of Flared Shoulders (Ref 5 close-up!)
    [-1, 1].forEach(side => {
      const chineRcs = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.3, 4.8), this.rcsGoldMat);
      chineRcs.position.set(side * 65.8, -25.8, 82.0);
      chineRcs.rotation.y = side * 0.14;
      this.stardriveExteriorGroup.add(chineRcs);
    });

    // 3B. TAPERED DORSAL SPINE, SMOOTH SWEPT PHASER RIBBONS & SHUTTLEBAYS 2 & 3 AT AFT FANTAIL (Ref 1 & Ref 4!)
    const fantailGroup = new THREE.Group();
    this.stardriveExteriorGroup.add(fantailGroup);
    this.cutawayTargets.push(fantailGroup);

    const spineLen = 186.0;
    const dorsalSpineGeo = new THREE.BoxGeometry(9.6, 4.4, spineLen, 1, 1, 32);
    const spPos = dorsalSpineGeo.attributes.position;
    for (let i = 0; i < spPos.count; i++) {
      const sz = spPos.getZ(i);
      const t = (sz + spineLen / 2) / spineLen;
      spPos.setX(i, spPos.getX(i) * (1.0 - 0.66 * t));
    }
    dorsalSpineGeo.computeVertexNormals();

    const dorsalSpineRidge = new THREE.Mesh(dorsalSpineGeo, this.hullMainMat);
    dorsalSpineRidge.position.set(0, -10.4, 183.0);
    dorsalSpineRidge.rotation.x = -0.020;
    fantailGroup.add(dorsalSpineRidge);

    const dorsalSpinePin = new THREE.Mesh(new THREE.BoxGeometry(1.3, 4.6, spineLen - 2.0), this.rcsGoldMat);
    dorsalSpinePin.position.set(0, -10.25, 183.0);
    dorsalSpinePin.rotation.x = -0.020;
    fantailGroup.add(dorsalSpinePin);

    // Smooth Continuous Swept Secondary Hull Dorsal Phaser Ribbons (Zero Stepped Bricks! Ref 1!)
    [-1, 1].forEach(side => {
      this.buildSmoothPhaserRibbon(
        fantailGroup,
        (t) => {
          const px = side * (14.0 + t * 22.0);
          const py = -10.35 - Math.pow(t, 1.28) * 6.45;
          const pz = 106.0 + t * 90.0;
          return {
            pos: new THREE.Vector3(px, py, pz),
            normal: new THREE.Vector3(side * 0.25, 1.0, 0)
          };
        },
        64,
        1.48,
        0.44,
        1
      );
    });

    // SHUTTLEBAY 2 (PORT) & SHUTTLEBAY 3 (STARBOARD) AT SQUARED-OFF AFT FANTAIL TRANSOM (Z = +252m..+276.5m — Ref 1 & Ref 4!)
    [-1, 1].forEach(side => {
      const bayX = side * 14.2;
      const bayGroup = new THREE.Group();
      bayGroup.position.set(bayX, -14.4, 263.5);
      fantailGroup.add(bayGroup);

      // Curved-Arch Hangar Cowl
      const sbShape = new THREE.Shape();
      sbShape.moveTo(-8.2, 0);
      sbShape.quadraticCurveTo(-7.6, 3.2, 0, 3.5);
      sbShape.quadraticCurveTo(7.6, 3.2, 8.2, 0);
      sbShape.closePath();

      const sbGeo = new THREE.ExtrudeGeometry(sbShape, {
        depth: 22.0,
        bevelEnabled: true,
        bevelThickness: 0.4,
        bevelSize: 0.35,
        bevelSegments: 3,
        curveSegments: 24
      });
      const upperCowl = new THREE.Mesh(sbGeo, this.hullMainMat);
      upperCowl.position.set(0, 0, -12.5);
      bayGroup.add(upperCowl);

      const obsStrip = new THREE.Mesh(
        new THREE.BoxGeometry(10.2, 0.44, 0.5),
        new THREE.MeshBasicMaterial({ color: 0xffeeb0 })
      );
      obsStrip.position.set(0, 2.75, 9.8);
      bayGroup.add(obsStrip);

      const doorSlab = new THREE.Mesh(new THREE.BoxGeometry(13.2, 2.4, 1.0), this.hullDarkAccentMat);
      doorSlab.position.set(0, 1.25, 9.0);
      bayGroup.add(doorSlab);

      for (let l = -2; l <= 2; l++) {
        const louver = new THREE.Mesh(new THREE.BoxGeometry(12.6, 0.15, 1.15), this.phaserStripMat);
        louver.position.set(0, 1.25 + l * 0.42, 9.0);
        bayGroup.add(louver);
      }

      const apronDeck = new THREE.Mesh(new THREE.BoxGeometry(15.2, 0.65, 6.8), this.dockingMetalMat);
      apronDeck.position.set(0, 0.12, 12.0);
      bayGroup.add(apronDeck);

      // Ochre-Gold Dorsal Sensor Pads on Inner Pylon Roots flanking Shuttlebays 2 & 3 (Ref 1!)
      const pylonRootGoldPad = new THREE.Mesh(new THREE.BoxGeometry(5.8, 0.55, 17.5), this.rcsGoldMat);
      pylonRootGoldPad.position.set(side * 17.6, 0.65, -1.5);
      bayGroup.add(pylonRootGoldPad);
    });

    // Aft Photon Torpedo Launcher under Stern Spine (Ref 4 Rear Ortho!)
    const aftTorpPod = new THREE.Mesh(new THREE.BoxGeometry(5.8, 2.2, 3.8), this.phaserStripMat);
    aftTorpPod.position.set(0, -16.8, 274.8);
    fantailGroup.add(aftTorpPod);

    const aftTorpGlow = new THREE.Mesh(
      new THREE.CircleGeometry(1.0, 24),
      new THREE.MeshBasicMaterial({ color: 0xff5522 })
    );
    aftTorpGlow.position.set(0, -16.8, 276.8);
    fantailGroup.add(aftTorpGlow);

    // 4. RECESSED ALMOND MAIN NAVIGATIONAL DEFLECTOR HOUSING & DISH (X = 0, Y = -26.8m, Z = +11.2m — Ref 4 & Ref 5!)
    // Deeply hooded beneath the overhanging Secondary Hull shoulders and forward-swept Neck brow!
    const deflectorGroup = new THREE.Group();
    deflectorGroup.position.set(0, -26.8, 11.2);
    this.stardriveExteriorGroup.add(deflectorGroup);

    // Smooth 96-segment Almond Outer Hull Bezel (Geometry scaled cleanly!)
    const almondShroudGeo = new THREE.TorusGeometry(21.0, 2.35, 32, 96);
    almondShroudGeo.scale(1.92, 0.48, 0.95);
    const almondShroud = new THREE.Mesh(almondShroudGeo, this.hullMainMat);
    deflectorGroup.add(almondShroud);

    const defInnerGeo = new THREE.TorusGeometry(19.2, 1.55, 24, 96);
    defInnerGeo.scale(1.90, 0.46, 1.0);
    const defInnerCollar = new THREE.Mesh(defInnerGeo, this.phaserStripMat);
    defInnerCollar.position.z = 0.6;
    deflectorGroup.add(defInnerCollar);

    // Recessed Concave Parabolic Dish Surface with High-DPI 2048x1024 Copper-Amber & Sapphire Stadium Emitter Texture
    const defTex = getDeflectorDishTexture();
    const defDishMat = new THREE.MeshStandardMaterial({
      map: defTex,
      emissiveMap: defTex,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 1.95,
      roughness: 0.16,
      metalness: 0.28,
      side: THREE.DoubleSide
    });

    const defDishGeo = new THREE.SphereGeometry(19.6, 96, 36, 0, Math.PI * 2, 0, Math.PI * 0.40);
    defDishGeo.rotateX(Math.PI / 2); // Concave bowl curving back into the +Z prow pocket!
    defDishGeo.scale(2.04, 0.50, 0.30);

    // Map planar (X, Y) UVs directly onto the parabolic dish so the 2048x1024 stadium emitter aligns concentrically!
    const dPos = defDishGeo.attributes.position;
    const dUvs = new Float32Array(dPos.count * 2);
    for (let i = 0; i < dPos.count; i++) {
      dUvs[i * 2] = 0.5 + dPos.getX(i) / 72.0;
      dUvs[i * 2 + 1] = 0.5 + dPos.getY(i) / 18.0;
    }
    defDishGeo.setAttribute('uv', new THREE.BufferAttribute(dUvs, 2));
    defDishGeo.computeVertexNormals();

    const defDish = new THREE.Mesh(defDishGeo, defDishMat);
    defDish.position.z = -1.5;
    deflectorGroup.add(defDish);

    const defLight = new THREE.PointLight(0x38bdf8, 4.6, 105);
    defLight.position.set(0, 0, -12);
    deflectorGroup.add(defLight);

    // 5. 96-STEP SWAN-NECK CURVED NACELLE PYLONS & STREAMLINED HOODED WARP NACELLES (Ref 1, Ref 4 & Spacedock Hero!)
    const warpGrilleMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: new THREE.Color(0x1e88ff),
      emissiveIntensity: 2.45,
      roughness: 0.16
    });
    this.warpGrilleMaterials.push(warpGrilleMat);

    const bussardTex = getBussardCollectorTexture();
    const bussardShellMat = new THREE.MeshStandardMaterial({
      map: bussardTex,
      emissiveMap: bussardTex,
      emissive: new THREE.Color(0xff2b22),
      emissiveIntensity: 2.65,
      roughness: 0.18,
      metalness: 0.08
    });

    const ochreBandMat = new THREE.MeshStandardMaterial({
      color: 0xd49a2a,
      roughness: 0.38,
      metalness: 0.24
    });

    const redPennantMat = new THREE.MeshStandardMaterial({
      color: 0xb42b27,
      roughness: 0.38,
      metalness: 0.22
    });

    [-1, 1].forEach(side => {
      // 5A. SWAN-NECK CURVED AIRFOIL PYLON (96 smooth curve stations × 32 airfoil chord points — Ref 4 Front & Rear Ortho!)
      // Emerges horizontally from the lower keel (-45.8m), sweeps around a large-radius fillet elbow (X = ±125m),
      // and tucks gracefully inward into the flat nacelle underside at X = ±123.5m, Y = -2.5m!
      const pylonSpine = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 22.0,  -44.8, 240.0),
        new THREE.Vector3(side * 62.0,  -46.8, 240.0),
        new THREE.Vector3(side * 98.0,  -46.2, 240.0),
        new THREE.Vector3(side * 116.5, -41.5, 240.0),
        new THREE.Vector3(side * 124.8, -28.0, 240.0),
        new THREE.Vector3(side * 124.4, -14.0, 240.0),
        new THREE.Vector3(side * 123.5, -2.5,  240.0)
      ]);

      const pylonSteps = 96;
      const chordSegs = 36;
      const pyPositions = [];
      const pyUvs = [];
      const pyIndices = [];
      const frames = pylonSpine.computeFrenetFrames(pylonSteps, false);

      for (let i = 0; i <= pylonSteps; i++) {
        const u = i / pylonSteps;
        const center = pylonSpine.getPointAt(u);
        // Compute clean in-plane normal perpendicular to spine tangent in XY plane
        const tang = frames.tangents[i];
        const normalXY = new THREE.Vector3(-tang.y * side, tang.x * side, 0).normalize();
        // Slight root-to-tip airfoil thickness taper (2.85m half-thickness at root -> 2.15m under nacelle)
        const halfThick = 2.85 - 0.70 * u;
        // Fore-aft chord sweeps from [202m..276m] at root to [207m..274.5m] under nacelle (Ref 1!)
        const zLead = 202.0 + u * 5.0;
        const zTrail = 276.0 - u * 1.5;
        const zMid = (zLead + zTrail) * 0.5;
        const halfChord = (zTrail - zLead) * 0.5;

        for (let j = 0; j <= chordSegs; j++) {
          const ang = (j / chordSegs) * Math.PI * 2;
          const cosA = Math.cos(ang); // -1 = Leading Edge, +1 = Trailing Edge
          const sinA = Math.sin(ang);
          // Smooth NACA-style streamlined Starfleet wing thickness
          const c01 = (cosA + 1) * 0.5;
          const foilY = sinA * halfThick * (0.22 + 0.78 * Math.pow(Math.sin(Math.acos(Math.max(-1, Math.min(1, cosA)))), 0.75)) * (1.08 - 0.24 * c01);

          const vx = center.x + normalXY.x * foilY;
          const vy = center.y + normalXY.y * foilY;
          const vz = zMid + cosA * halfChord;

          pyPositions.push(vx, vy, vz);
          pyUvs.push(j / chordSegs, u * 2.0);

          if (i < pylonSteps && j < chordSegs) {
            const i0 = i * (chordSegs + 1) + j;
            const i1 = i0 + 1;
            const i2 = (i + 1) * (chordSegs + 1) + j;
            const i3 = i2 + 1;
            if (side > 0) {
              pyIndices.push(i0, i2, i1, i1, i2, i3);
            } else {
              pyIndices.push(i0, i1, i2, i1, i3, i2);
            }
          }
        }
      }

      const pylonGeo = new THREE.BufferGeometry();
      pylonGeo.setAttribute('position', new THREE.Float32BufferAttribute(pyPositions, 3));
      pylonGeo.setAttribute('uv', new THREE.Float32BufferAttribute(pyUvs, 2));
      pylonGeo.setIndex(pyIndices);
      pylonGeo.computeVertexNormals();
      this.stardriveExteriorGroup.add(new THREE.Mesh(pylonGeo, this.hullMainMat));

      // Transverse Dorsal Pylon Sensor/Phaser Strip (Ref 1!)
      const pylonStrip = new THREE.Mesh(new THREE.BoxGeometry(28.0, 0.55, 2.2), this.phaserStripMat);
      pylonStrip.position.set(side * 74.0, -43.9, 236.0);
      this.stardriveExteriorGroup.add(pylonStrip);

      // 5B. STREAMLINED HORIZONTAL-STADIUM WARP NACELLE & HOODED BUSSARD COWL (X = ±123.5m, Y = -1.5m, Z = +55.0m..+321.25m!)
      const nacelleGroup = new THREE.Group();
      nacelleGroup.position.set(side * 123.5, -1.5, 188.1);
      this.stardriveExteriorGroup.add(nacelleGroup);

      // Parametric 96×64 Streamlined Nacelle Hull (from Z_local = -114m behind Bussard collar to +133.15m rounded aft cap = Z_world +321.25m!)
      // Cross-section: horizontally wide rounded-stadium (39.6m wide × 19.2m high, subtly flatter ventral belly — Ref 4 Front/Rear Ortho!)
      const nacRings = 64;
      const nacSegs = 96;
      const nacPos = [];
      const nacUvs = [];
      const nacIdx = [];

      const evalStadiumCrossSection = (theta, halfW, halfH) => {
        const c = Math.cos(theta);
        const s = Math.sin(theta);
        // Superellipse n = 2.35 gives the exact studio-miniature flat-bellied horizontal stadium oval!
        const exp = 0.82;
        const sx = Math.sign(c) * Math.pow(Math.abs(c), exp) * halfW;
        let sy = Math.sign(s) * Math.pow(Math.abs(s), exp) * halfH;
        if (sy < 0) sy *= 0.84; // Slightly flatter ventral underside matching Ref 4!
        return { sx, sy };
      };

      for (let r = 0; r <= nacRings; r++) {
        const u = r / nacRings; // 0 = front collar (-113m), 1 = aft tip (+133.15m)
        let zl, taper;
        if (u < 0.88) {
          const bodyU = u / 0.88;
          zl = -113.0 + bodyU * 226.0; // -113m to +113m
          // Gentle studio-model mid-aft taper
          taper = 1.0 - 0.08 * Math.pow(bodyU, 1.8);
        } else {
          // Seamless rounded aft endcap (+113m to +133.15m -> Z_world = +321.25m!)
          const capU = (u - 0.88) / 0.12;
          zl = 113.0 + Math.sin(capU * Math.PI * 0.5) * 20.15;
          taper = 0.92 * Math.cos(capU * Math.PI * 0.5);
        }

        const hw = 19.8 * taper;
        const hh = 10.2 * taper;

        for (let s = 0; s <= nacSegs; s++) {
          const theta = (s / nacSegs) * Math.PI * 2;
          let { sx, sy } = evalStadiumCrossSection(theta, hw, hh);

          // Carve subtle recessed lateral channels along body (Z_local -98m..+106m) where the blue Warp Grilles sit flush!
          const absCos = Math.abs(Math.cos(theta));
          if (zl > -98.0 && zl < 106.0 && absCos > 0.88 && Math.abs(sy) < 3.6) {
            sx *= 0.935;
          }

          nacPos.push(sx, sy, zl);
          nacUvs.push(s / nacSegs, u * 4.0);

          if (r < nacRings && s < nacSegs) {
            const i0 = r * (nacSegs + 1) + s;
            const i1 = i0 + 1;
            const i2 = (r + 1) * (nacSegs + 1) + s;
            const i3 = i2 + 1;
            nacIdx.push(i0, i1, i2, i1, i3, i2);
          }
        }
      }

      const nacGeo = new THREE.BufferGeometry();
      nacGeo.setAttribute('position', new THREE.Float32BufferAttribute(nacPos, 3));
      nacGeo.setAttribute('uv', new THREE.Float32BufferAttribute(nacUvs, 2));
      nacGeo.setIndex(nacIdx);
      nacGeo.computeVertexNormals();
      nacelleGroup.add(new THREE.Mesh(nacGeo, this.hullMainMat));

      // Flush Contoured Cerulean/Cobalt Warp Field Grilles nestled inside the Lateral Nacelle Channels (Zero Protruding Boxes!)
      [-1, 1].forEach(flank => {
        const gShape = new THREE.Shape();
        gShape.moveTo(0, -2.55);
        gShape.quadraticCurveTo(1.35 * flank, 0, 0, 2.55);
        gShape.lineTo(-0.5 * flank, 2.2);
        gShape.lineTo(-0.5 * flank, -2.2);
        gShape.closePath();

        const gGeo = new THREE.ExtrudeGeometry(gShape, { depth: 202.0, bevelEnabled: false, curveSegments: 16 });
        const gMesh = new THREE.Mesh(gGeo, warpGrilleMat);
        gMesh.position.set(flank * 18.2, -0.15, -97.0);
        nacelleGroup.add(gMesh);
      });

      const nacBlueLight = new THREE.PointLight(0x1e88ff, 3.8, 135);
      nacBlueLight.position.set(-side * 24.0, -3.0, -20.0);
      nacelleGroup.add(nacBlueLight);

      // Flush Ochre-Gold Collar Band right behind the Bussard Cowl (Z_local = -113m..-102m — Ref 1 & Ref 4!)
      const collarPos = [];
      const collarIdx = [];
      for (let r = 0; r <= 1; r++) {
        const zl = -113.2 + r * 11.0;
        for (let s = 0; s <= nacSegs; s++) {
          const theta = (s / nacSegs) * Math.PI * 2;
          const { sx, sy } = evalStadiumCrossSection(theta, 19.95, 10.32);
          collarPos.push(sx, sy, zl);
          if (r === 0 && s < nacSegs) {
            const i0 = s;
            const i1 = s + 1;
            const i2 = (nacSegs + 1) + s;
            const i3 = i2 + 1;
            collarIdx.push(i0, i1, i2, i1, i3, i2);
          }
        }
      }
      const collarGeo = new THREE.BufferGeometry();
      collarGeo.setAttribute('position', new THREE.Float32BufferAttribute(collarPos, 3));
      collarGeo.setIndex(collarIdx);
      collarGeo.computeVertexNormals();
      nacelleGroup.add(new THREE.Mesh(collarGeo, ochreBandMat));

      // Aft Endcap Horizontal Gold/Bronze Accent Trim Band (Visible in Ref 4 Rear Ortho!)
      const aftTrimGeo = new THREE.TorusGeometry(13.2, 0.36, 16, 64);
      aftTrimGeo.rotateY(Math.PI / 2);
      aftTrimGeo.scale(1.38, 0.12, 1.0);
      const aftTrim = new THREE.Mesh(aftTrimGeo, this.rcsGoldMat);
      aftTrim.position.set(0, -0.4, 125.5);
      nacelleGroup.add(aftTrim);

      // Dorsal Starfleet Red Pennant Pinstripes & Delta Emblem (Ref 1!)
      [-2.1, 2.1].forEach(px => {
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.35, 148.0), redPennantMat);
        stripe.position.set(px, 10.15, -12.0);
        stripe.rotation.x = 0.004;
        nacelleGroup.add(stripe);
      });

      const deltaGeo = new THREE.ConeGeometry(4.0, 11.0, 3);
      deltaGeo.rotateX(-Math.PI / 2);
      deltaGeo.scale(1.1, 0.16, 1.0);
      const deltaEmblem = new THREE.Mesh(deltaGeo, redPennantMat);
      deltaEmblem.position.set(0, 10.35, -86.0);
      nacelleGroup.add(deltaEmblem);

      // Twin Recessed Aft Dorsal Vents ("||" in Ref 1!)
      [-2.8, 2.8].forEach(vx => {
        const aftVent = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.45, 16.5), this.phaserStripMat);
        aftVent.position.set(vx, 9.55, 92.0);
        nacelleGroup.add(aftVent);
      });

      // 5C. SCULPTED OVERHANGING BUSSARD HULL COWL + CRIMSON HORIZONTAL-STADIUM RAMSCOOP (Z_local = -133.1m..-113.0m -> Tip at Z_world = +55.0m!)
      // Wraps top, cheeks, and chin of the Bussard collector so from Front Ortho (Ref 4) and 3/4 Ventral (Spacedock Hero)
      // it forms the exact sleek horizontal stadium-hooded red visor — NOT an exposed round sphere!
      const bussardGroup = new THREE.Group();
      bussardGroup.position.set(0, 0, -113.0);
      nacelleGroup.add(bussardGroup);

      // Sleek Horizontal-Stadium Crimson Louvered Bussard Optical Core (Tip at z = -20.1m -> Z_world = +55.0m!)
      const bCoreGeo = new THREE.SphereGeometry(1.0, 72, 36);
      const bPos = bCoreGeo.attributes.position;
      for (let i = 0; i < bPos.count; i++) {
        const bx = bPos.getX(i);
        const by = bPos.getY(i);
        const bz = bPos.getZ(i);
        const rxy = Math.hypot(bx, by);
        const ang = Math.atan2(by, bx);
        const { sx, sy } = evalStadiumCrossSection(ang, 17.8 * rxy, 8.6 * rxy);
        bPos.setXYZ(i, sx, sy - 0.35, bz * 20.1);
      }
      bCoreGeo.computeVertexNormals();
      const bussardCore = new THREE.Mesh(bCoreGeo, bussardShellMat);
      bussardCore.position.set(0, 0, -0.5);
      bussardGroup.add(bussardCore);

      // Parametric Overhanging Dove-Grey / Charcoal Bussard Hull Cowl Hooding Crown, Cheeks & Chin!
      const cowlRings = 24;
      const cowlSegs = 96;
      const cwPos = [];
      const cwUvs = [];
      const cwIdx = [];

      for (let r = 0; r <= cowlRings; r++) {
        const u = r / cowlRings; // 0 = collar at z = 0, 1 = forward cowl lip at z = -18.5m
        const taper = Math.cos(u * Math.PI * 0.44);
        const hw = 19.95 * (0.62 + 0.38 * taper);
        const hh = 10.32 * (0.58 + 0.42 * taper);

        for (let s = 0; s <= cowlSegs; s++) {
          const theta = (s / cowlSegs) * Math.PI * 2;
          const sinT = Math.sin(theta); // +1 = Dorsal Crown, -1 = Ventral Chin
          // Dorsal hood sweeps all the way forward (-17.8m), lateral cheeks frame the visor (-14.5m), chin lip tucks to (-12.5m)
          // while leaving the front horizontal stadium visor window open at u > 0.62 on the front face!
          let maxZExtent;
          if (sinT >= 0) {
            // Smooth overhanging dorsal visor brow (Ref 1 & Ref 4!)
            maxZExtent = -17.8 + (1 - sinT) * 3.2;
          } else {
            // Sleek lower chin cowl lip (Ref 4 Front Ortho!)
            maxZExtent = -11.5 - (-sinT) * 2.2;
          }
          const zl = u * maxZExtent;
          const { sx, sy } = evalStadiumCrossSection(theta, hw + 0.35, hh + 0.35);

          cwPos.push(sx, sy, zl);
          cwUvs.push(s / cowlSegs, u);

          if (r < cowlRings && s < cowlSegs) {
            const i0 = r * (cowlSegs + 1) + s;
            const i1 = i0 + 1;
            const i2 = (r + 1) * (cowlSegs + 1) + s;
            const i3 = i2 + 1;
            cwIdx.push(i0, i1, i2, i1, i3, i2);
          }
        }
      }

      const cowlGeo = new THREE.BufferGeometry();
      cowlGeo.setAttribute('position', new THREE.Float32BufferAttribute(cwPos, 3));
      cowlGeo.setAttribute('uv', new THREE.Float32BufferAttribute(cwUvs, 2));
      cowlGeo.setIndex(cwIdx);
      cowlGeo.computeVertexNormals();
      bussardGroup.add(new THREE.Mesh(cowlGeo, this.hullDarkAccentMat));

      // Internal Rotating Golden Collector Vanes inside Bussard Core
      const rotor = new THREE.Mesh(
        new THREE.OctahedronGeometry(5.6, 1),
        new THREE.MeshBasicMaterial({ color: 0xffbe0b, wireframe: true, transparent: true, opacity: 0.45 })
      );
      rotor.scale.set(1.8, 0.75, 1.0);
      rotor.position.set(0, -0.3, -10.5);
      bussardGroup.add(rotor);
      this.bussardRotors.push(rotor);

      const bussardLight = new THREE.PointLight(0xff2a1a, 4.4, 88);
      bussardLight.position.set(0, -0.5, -24);
      bussardGroup.add(bussardLight);

      // Nacelle Navigation Strobe
      this.addNavLight(nacelleGroup, 0, 10.4, 126.0, 0xffffff, true);
    });

    // 6. EXTERIOR SCULPTED TYPE-6 SHUTTLECRAFT GODDARD (For Live Launch & Recovery Sequence)
    this.buildExteriorShuttlecraft();
  }

  buildExteriorShuttlecraft() {
    this.exteriorShuttlecraft = new THREE.Group();
    this.exteriorShuttlecraft.name = 'ShuttlecraftGoddard_Ext';

    // Sculpted Tapered Type-6 Shuttlecraft Fuselage
    const sShape = new THREE.Shape();
    sShape.moveTo(-1.85, 0);
    sShape.lineTo(-1.45, 2.05);
    sShape.lineTo(1.45, 2.05);
    sShape.lineTo(1.85, 0);
    sShape.closePath();

    const hullGeo = new THREE.ExtrudeGeometry(sShape, {
      depth: 6.2,
      bevelEnabled: true,
      bevelThickness: 0.35,
      bevelSize: 0.25,
      bevelSegments: 3
    });
    const hull = new THREE.Mesh(hullGeo, this.hullMainMat);
    hull.position.set(0, 0.3, -3.1);
    this.exteriorShuttlecraft.add(hull);

    const canopy = new THREE.Mesh(
      new THREE.BoxGeometry(2.65, 0.78, 1.9),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.08, metalness: 0.85 })
    );
    canopy.position.set(0, 1.72, 2.15);
    canopy.rotation.x = 0.32;
    this.exteriorShuttlecraft.add(canopy);

    [-1.78, 1.78].forEach(x => {
      const miniNacGeo = new THREE.CylinderGeometry(0.36, 0.36, 4.6, 24);
      miniNacGeo.rotateX(Math.PI / 2);
      const miniNac = new THREE.Mesh(miniNacGeo, this.phaserStripMat);
      miniNac.position.set(x, 0.42, -0.4);
      this.exteriorShuttlecraft.add(miniNac);

      const miniBussard = new THREE.Mesh(
        new THREE.SphereGeometry(0.35, 16, 12),
        new THREE.MeshBasicMaterial({ color: 0xef4444 })
      );
      miniBussard.position.set(x, 0.42, 1.9);
      this.exteriorShuttlecraft.add(miniBussard);
    });

    this.exteriorShuttlecraft.position.set(0, getWalkableDeckFloorY(4, 'saucer') + 0.1, -55.0);
    this.saucerExteriorGroup.add(this.exteriorShuttlecraft);
  }

  addNavLight(parent, x, y, z, colorHex, isStrobe) {
    const mat = new THREE.MeshBasicMaterial({ color: colorHex });
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.95, 16, 16), mat);
    bulb.position.set(x, y, z);
    parent.add(bulb);
    if (isStrobe) {
      this.navStrobes.push(mat);
    }
  }

  setCutawayMode(mode) {
    const applyModeToMesh = (obj) => {
      if (mode === 'off') {
        obj.visible = true;
        if (obj.isMesh && obj.material && obj.userData.origWireframe === undefined) {
          obj.userData.origWireframe = obj.material.wireframe || false;
        }
        if (obj.isMesh && obj.material) {
          obj.material.wireframe = false;
          if (!obj.userData.wasTransparent) {
            obj.material.transparent = false;
            obj.material.opacity = 1.0;
          }
        }
      } else if (mode === 'cutaway') {
        obj.visible = false;
      } else if (mode === 'exploded') {
        obj.visible = true;
        if (obj.isMesh && obj.material) {
          if (obj.userData.wasTransparent === undefined) {
            obj.userData.wasTransparent = obj.material.transparent;
          }
          obj.material.transparent = true;
          obj.material.opacity = 0.12;
          obj.material.wireframe = true;
        }
      }
    };

    for (const target of this.cutawayTargets) {
      if (target.isGroup) {
        target.visible = mode !== 'cutaway';
        target.traverse(child => {
          if (child.isMesh) applyModeToMesh(child);
        });
      } else {
        applyModeToMesh(target);
      }
    }
  }

  update(dt, time, shipState) {
    const wf = shipState.warpCore.online ? shipState.warpCore.warpFactor : 0;
    for (const rotor of this.bussardRotors) {
      rotor.rotation.z += dt * (1.2 + wf * 0.8);
    }

    const enginePwr = (shipState.power.engines || 100) / 100;
    const warpGlow = shipState.warpCore.online ? (1.4 + wf * 0.32) * enginePwr : 0.2;
    for (const mat of this.warpGrilleMaterials) {
      mat.emissiveIntensity = warpGlow + Math.sin(time * (2.5 + wf)) * 0.20;
    }

    const strobeOn = (time % 1.8) < 0.18;
    for (const mat of this.navStrobes) {
      mat.color.setHex(strobeOn ? 0xffffff : 0x223344);
    }

    const isDocked = shipState.separationState === 'Docked';
    const isPrep = shipState.separationState === 'Preparing' || shipState.separationState === 'Aligning';
    for (const mat of this.dockingLightMaterials) {
      if (isDocked) mat.color.setHex(0x22c55e);
      else if (isPrep) mat.color.setHex((time % 0.6) < 0.3 ? 0xf59e0b : 0x451a03);
      else mat.color.setHex(0xef4444);
    }

    const doorOpen = shipState.doors['door_deck4_space_doors']?.openAmount ?? 0;
    if (this.shuttlebayPortDoor && this.shuttlebayStbdDoor) {
      this.shuttlebayPortDoor.position.x = -4.9 - doorOpen * 10.5;
      this.shuttlebayStbdDoor.position.x = 4.9 + doorOpen * 10.5;
    }

    if (this.exteriorShuttlecraft) {
      const sb = shipState.shuttlebay;
      this.exteriorShuttlecraft.position.set(
        sb.shuttlePos.x,
        getWalkableDeckFloorY(4, 'saucer') + 0.1 + sb.shuttlePos.y,
        -55.0 + sb.shuttlePos.z
      );
      this.exteriorShuttlecraft.rotation.y = sb.shuttleYaw;
    }
  }
}
