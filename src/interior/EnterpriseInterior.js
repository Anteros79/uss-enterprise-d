// USS Enterprise NCC-1701-D — Complete Walkable Interior Architecture
// Builds spatially coherent, physically situated rooms inside saucerAssembly and stardriveAssembly.
// Every room sits at its true walkable deck elevation getWalkableDeckFloorY(deck, section) and true (X, Z) hull coordinates,
// featuring Stage-9 TNG soundstage ceiling heights (3.70m–8.80m), multi-tiered skylight domes, coffered architectural soffits,
// and sculpted Starfleet furniture with zero exterior hull protrusion.

import * as THREE from 'three';
import { ALL_DECKS, getWalkableDeckFloorY, DECK_HEIGHT } from '../data/DeckRegistry.js';
import {
  createLCARSConsoleTexture,
  createMSDTexture,
  getHolodeckGridTexture
} from '../utils/TextureGenerator.js';

export class EnterpriseInterior {
  constructor(saucerAssembly, stardriveAssembly, shipState) {
    this.saucerAssembly = saucerAssembly;
    this.stardriveAssembly = stardriveAssembly;
    this.shipState = shipState;

    this.saucerInteriorRoot = new THREE.Group();
    this.saucerInteriorRoot.name = 'SaucerInteriorRoot';
    this.saucerAssembly.add(this.saucerInteriorRoot);

    this.stardriveInteriorRoot = new THREE.Group();
    this.stardriveInteriorRoot.name = 'StardriveInteriorRoot';
    this.stardriveAssembly.add(this.stardriveInteriorRoot);

    this.deckGroups = new Map(); // deckKey -> THREE.Group
    this.doorMeshes = new Map(); // doorId -> { group, leftLeaf, rightLeaf, type, colliderBox, deck, section, pos }
    this.interactiveTargets = []; // Raycastable 3D meshes for terminals, chairs, replicators, doors, turbolifts, props
    this.roomLights = new Map(); // roomId -> THREE.Light[]
    this.consoleDisplays = []; // { render, title, room }
    this.msdDisplay = null;

    // Animated interior elements
    this.warpCoreRings = [];
    this.warpCoreLight = null;
    this.sickbayScannerBeam = null;
    this.transporterParticles = null;
    this.livingstonFish = null;
    this.holodeckEnvironmentGroups = new Map();
    this.holodeckArchMesh = null;
    this.holodeckCombatTargets = [];
    this.holodeckSpawnerMeshes = new Map();
    this.stellarPlanetMeshes = [];
    this.structuralPlates = [];
    this.shuttlebayForcefieldMesh = null;
    this.waypointMarkersGroup = new THREE.Group();
    this.saucerInteriorRoot.add(this.waypointMarkersGroup);

    // Main Bridge & Battle Bridge Viewscreen Materials (populated with live 2048×1024 MSAA sensor camera textures)
    this.mainViewscreenMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.battleViewscreenMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    this.initSharedMaterials();
    this.buildAllHeroDecks();
    this.buildStructuralDeckStack();
  }

  initSharedMaterials() {
    // Classic TNG Warm Beige/Sand Bulkhead (Matching Stage-9 Reference Image 3)
    this.wallBeigeMat = new THREE.MeshStandardMaterial({
      color: 0xdacdb9,
      roughness: 0.54,
      metalness: 0.06,
      side: THREE.DoubleSide
    });

    // TNG Mauve / Taupe Quilted Fabric & Architectural Rib Panel
    this.wallTaupeMat = new THREE.MeshStandardMaterial({
      color: 0xb1a398,
      roughness: 0.60,
      metalness: 0.08,
      side: THREE.DoubleSide
    });

    // TNG Warm Terracotta / Dusty Rose-Mauve Command Pit Carpet
    this.carpetBurgundyMat = new THREE.MeshStandardMaterial({
      color: 0xa85f54,
      roughness: 0.95,
      metalness: 0.0
    });

    // TNG Cool Slate Blue-Grey Outer Bridge/Corridor Carpet
    this.carpetSlateMat = new THREE.MeshStandardMaterial({
      color: 0x627286,
      roughness: 0.93,
      metalness: 0.0
    });

    // Camel-Tan Leather for Sculpted Bridge Command Chairs
    this.leatherCamelMat = new THREE.MeshStandardMaterial({
      color: 0xc99e78,
      roughness: 0.40,
      metalness: 0.08
    });

    // Polished Dark Cherry / Mahogany Wood Accent
    this.woodCherryMat = new THREE.MeshStandardMaterial({
      color: 0x4c2211,
      roughness: 0.22,
      metalness: 0.14
    });

    // Dark Slate Console Housing & Architectural Baseboard
    this.consoleBodyMat = new THREE.MeshStandardMaterial({
      color: 0x20252e,
      roughness: 0.36,
      metalness: 0.48
    });

    // Starfleet Crimson/Burgundy Door Leaf
    this.doorCrimsonMat = new THREE.MeshStandardMaterial({
      color: 0x883333,
      roughness: 0.40,
      metalness: 0.26
    });

    // Matte Silver-Grey Turbolift Door & Engineering Bulkhead
    this.metalGreyMat = new THREE.MeshStandardMaterial({
      color: 0x9aa3ad,
      roughness: 0.35,
      metalness: 0.52,
      side: THREE.DoubleSide
    });

    // Glowing Ice-White / Pale Cyan Cove Light Diffuser
    this.coveGlowMat = new THREE.MeshBasicMaterial({
      color: 0xe6f6ff
    });

    // Transparent Window Glass
    this.glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xbbe6ff,
      transparent: true,
      opacity: 0.18,
      roughness: 0.05,
      metalness: 0.1,
      side: THREE.DoubleSide,
      depthWrite: false
    });

    // Diffused Warm Overhead Ceiling Skylight Panel (FrontSide so Cutaway mode sees straight down into rooms!)
    this.ceilingLightMat = new THREE.MeshBasicMaterial({
      color: 0xfff6e6,
      side: THREE.FrontSide
    });

    // Architectural Ceiling Soffit Matte Cream (FrontSide oriented downward)
    this.ceilingSoffitMat = new THREE.MeshStandardMaterial({
      color: 0xe5dccf,
      roughness: 0.65,
      metalness: 0.05,
      side: THREE.FrontSide
    });

    // Reusable Sculpted Cantilevered Console Side Stanchion Geometry
    const stanchionShape = new THREE.Shape();
    stanchionShape.moveTo(-0.26, 0.0);
    stanchionShape.lineTo(0.24, 0.0);
    stanchionShape.quadraticCurveTo(0.32, 0.42, 0.18, 0.84);
    stanchionShape.lineTo(-0.22, 1.02);
    stanchionShape.quadraticCurveTo(-0.34, 0.56, -0.26, 0.0);
    this.consoleStanchionGeo = new THREE.ExtrudeGeometry(stanchionShape, {
      depth: 0.09,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 4,
      curveSegments: 24
    });
    this.consoleStanchionGeo.rotateY(-Math.PI / 2);

    // Reusable Splayed TNG Corridor Structural Arch Rib Profile
    const corrRibShape = new THREE.Shape();
    corrRibShape.moveTo(0.0, 0.0);
    corrRibShape.lineTo(0.38, 0.0);
    corrRibShape.lineTo(0.18, 2.55);
    corrRibShape.lineTo(0.56, 3.72);
    corrRibShape.lineTo(0.0, 3.72);
    corrRibShape.closePath();
    this.corridorRibGeo = new THREE.ExtrudeGeometry(corrRibShape, {
      depth: 0.24,
      bevelEnabled: true,
      bevelThickness: 0.025,
      bevelSize: 0.025,
      bevelSegments: 3
    });
    this.corridorRibGeo.center();
  }

  getDeckGroup(deckNum, section = 'saucer') {
    const key = `${section}_deck_${deckNum}`;
    if (this.deckGroups.has(key)) return this.deckGroups.get(key);

    const group = new THREE.Group();
    group.name = `Deck_${deckNum}_${section}`;
    const y = getWalkableDeckFloorY(deckNum, section);

    group.position.set(0, y, 0);
    group.userData = { deck: deckNum, section, baseY: y };

    if (section === 'saucer') {
      this.saucerInteriorRoot.add(group);
    } else {
      this.stardriveInteriorRoot.add(group);
    }
    this.deckGroups.set(key, group);
    return group;
  }

  registerLight(roomId, light) {
    if (!this.roomLights.has(roomId)) {
      this.roomLights.set(roomId, []);
    }
    this.roomLights.get(roomId).push(light);
  }

  registerInteractive(mesh, metadata) {
    mesh.userData.interactive = metadata;
    this.interactiveTargets.push(mesh);
  }

  // Builds a spacious TNG compartment with architectural perimeter soffits, recessed coffered skylight vault,
  // indirect cove lighting, dark baseboard reveals, and LCARS wall conduit trim.
  buildRoomBox(parent, x, z, width, depth, height, floorMat, wallMat, openFaces = {}, options = {}) {
    const roomGroup = new THREE.Group();
    roomGroup.position.set(x, 0, z);
    parent.add(roomGroup);

    // 1. Floor
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(width, depth), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0.02;
    roomGroup.add(floor);

    // 2. Architectural Coffered Ceiling Vault (FrontSide facing downward so Cutaway mode sees straight inside!)
    if (!options.customCeiling) {
      const soffitInsetX = Math.min(width * 0.16, 1.35);
      const soffitInsetZ = Math.min(depth * 0.16, 1.35);
      const innerW = Math.max(1.2, width - soffitInsetX * 2);
      const innerD = Math.max(1.2, depth - soffitInsetZ * 2);
      const soffitDrop = Math.min(0.38, height * 0.10);
      const soffitY = height - soffitDrop;

      // Perimeter Soffit Ledges (4 strips framing the recessed central skylight vault)
      const nSoffit = new THREE.Mesh(new THREE.PlaneGeometry(width, soffitInsetZ), this.ceilingSoffitMat);
      nSoffit.rotation.x = Math.PI / 2;
      nSoffit.position.set(0, soffitY, -depth / 2 + soffitInsetZ / 2);
      roomGroup.add(nSoffit);

      const sSoffit = new THREE.Mesh(new THREE.PlaneGeometry(width, soffitInsetZ), this.ceilingSoffitMat);
      sSoffit.rotation.x = Math.PI / 2;
      sSoffit.position.set(0, soffitY, depth / 2 - soffitInsetZ / 2);
      roomGroup.add(sSoffit);

      const wSoffit = new THREE.Mesh(new THREE.PlaneGeometry(soffitInsetX, innerD), this.ceilingSoffitMat);
      wSoffit.rotation.x = Math.PI / 2;
      wSoffit.position.set(-width / 2 + soffitInsetX / 2, soffitY, 0);
      roomGroup.add(wSoffit);

      const eSoffit = new THREE.Mesh(new THREE.PlaneGeometry(soffitInsetX, innerD), this.ceilingSoffitMat);
      eSoffit.rotation.x = Math.PI / 2;
      eSoffit.position.set(width / 2 - soffitInsetX / 2, soffitY, 0);
      roomGroup.add(eSoffit);

      // Glowing Indirect Cove Risers around the recessed vault opening
      const riserH = soffitDrop * 0.86;
      const riserY = soffitY + soffitDrop * 0.5;
      [-1, 1].forEach(side => {
        const zRiser = new THREE.Mesh(new THREE.PlaneGeometry(innerW, riserH), this.coveGlowMat);
        zRiser.position.set(0, riserY, side * (innerD / 2));
        zRiser.rotation.y = side > 0 ? Math.PI : 0;
        roomGroup.add(zRiser);

        const xRiser = new THREE.Mesh(new THREE.PlaneGeometry(innerD, riserH), this.coveGlowMat);
        xRiser.position.set(side * (innerW / 2), riserY, 0);
        xRiser.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
        roomGroup.add(xRiser);
      });

      // Upper Recessed Skylight Vault Cap & Diffused TNG Light Panels
      const upperCap = new THREE.Mesh(new THREE.PlaneGeometry(innerW + 0.08, innerD + 0.08), this.ceilingSoffitMat);
      upperCap.rotation.x = Math.PI / 2;
      upperCap.position.y = height;
      roomGroup.add(upperCap);

      const lightStrip = new THREE.Mesh(
        new THREE.PlaneGeometry(innerW * 0.86, innerD * 0.82),
        this.ceilingLightMat
      );
      lightStrip.rotation.x = Math.PI / 2;
      lightStrip.position.y = height - 0.015;
      roomGroup.add(lightStrip);

      // Architectural Ceiling Louver Cross-Beams across the Skylight Vault
      const beamCount = Math.max(1, Math.min(5, Math.floor(innerD / 3.4)));
      for (let b = 1; b <= beamCount; b++) {
        const bz = -innerD / 2 + (b / (beamCount + 1)) * innerD;
        const beam = new THREE.Mesh(
          new THREE.BoxGeometry(innerW * 0.96, 0.10, 0.22),
          this.wallBeigeMat
        );
        beam.position.set(0, height - 0.06, bz);
        roomGroup.add(beam);
      }
    }

    const wallThickness = 0.22;
    const stripMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });

    const buildWall = (isXSpan, spanLen, posX, posZ, inwardSign) => {
      const wGeo = isXSpan
        ? new THREE.BoxGeometry(spanLen, height, wallThickness)
        : new THREE.BoxGeometry(wallThickness, height, spanLen);
      const w = new THREE.Mesh(wGeo, wallMat);
      w.position.set(posX, height / 2, posZ);
      roomGroup.add(w);

      // Dark Recessed Baseboard Reveal
      const baseGeo = isXSpan
        ? new THREE.BoxGeometry(spanLen * 0.99, 0.14, 0.04)
        : new THREE.BoxGeometry(0.04, 0.14, spanLen * 0.99);
      const base = new THREE.Mesh(baseGeo, this.consoleBodyMat);
      const offset = inwardSign * (wallThickness / 2 + 0.015);
      base.position.set(isXSpan ? posX : posX + offset, 0.09, isXSpan ? posZ + offset : posZ);
      roomGroup.add(base);

      // Glowing LCARS Optical Conduit Accent Strip
      const trimGeo = isXSpan
        ? new THREE.BoxGeometry(spanLen * 0.86, 0.05, 0.04)
        : new THREE.BoxGeometry(0.04, 0.05, spanLen * 0.86);
      const trim = new THREE.Mesh(trimGeo, stripMat);
      trim.position.set(isXSpan ? posX : posX + offset, 1.42, isXSpan ? posZ + offset : posZ);
      roomGroup.add(trim);
    };

    if (!openFaces.north) buildWall(true, width, 0, -depth / 2, +1);
    if (!openFaces.south) buildWall(true, width, 0, depth / 2, -1);
    if (!openFaces.west) buildWall(false, depth, -width / 2, 0, +1);
    if (!openFaces.east) buildWall(false, depth, width / 2, 0, -1);

    return roomGroup;
  }

  // Sculpted Cantilevered TNG LCARS Console Station (replaces boxy rectangle with curved stanchions & glowing lower cove!)
  createConsoleStation(parent, x, y, z, rotY, width, title, appId, roomName) {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    group.rotation.y = rotY;
    parent.add(group);

    // Sculpted Left & Right Curved Stanchion Wings
    const stanchionOffset = Math.max(0.28, width * 0.44);
    [-stanchionOffset, stanchionOffset].forEach(sx => {
      const wing = new THREE.Mesh(this.consoleStanchionGeo, this.wallBeigeMat);
      wing.position.set(sx + 0.045, 0, 0);
      group.add(wing);
    });

    // Recessed Dark Slate Central Pedestal Core
    const corePedestal = new THREE.Mesh(
      new THREE.BoxGeometry(Math.max(0.32, width - 0.16), 0.78, 0.46),
      this.consoleBodyMat
    );
    corePedestal.position.set(0, 0.42, 0.02);
    group.add(corePedestal);

    // Glowing Ice-White Lower Floor Kickplate Diffuser (Stage-9 TNG signature!)
    const lowerCove = new THREE.Mesh(
      new THREE.BoxGeometry(Math.max(0.30, width - 0.22), 0.18, 0.48),
      this.coveGlowMat
    );
    lowerCove.position.set(0, 0.11, 0.03);
    group.add(lowerCove);

    // Sloped Ergonomic Upper LCARS Bezel Hood
    const bezelHood = new THREE.Mesh(
      new THREE.BoxGeometry(width, 0.09, 0.62),
      this.consoleBodyMat
    );
    bezelHood.position.set(0, 0.94, 0.0);
    bezelHood.rotation.x = -0.56;
    group.add(bezelHood);

    const lcarsScreen = createLCARSConsoleTexture(title, '#f59e0b', '#38bdf8');
    this.consoleDisplays.push({ ...lcarsScreen, title, appId });

    const screenMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(width * 0.93, 0.54),
      new THREE.MeshBasicMaterial({ map: lcarsScreen.texture })
    );
    screenMesh.position.set(0, 0.99, 0.02);
    screenMesh.rotation.x = -0.56;
    group.add(screenMesh);

    this.registerInteractive(screenMesh, {
      type: 'terminal',
      appId,
      title: `${title} (${roomName})`,
      prompt: `Operate ${title} [Click / E]`
    });

    return group;
  }

  // Sculpted Contoured Starfleet Lounge / Stateroom Chair (eliminates raw boxy seat & backrest!)
  createChair(parent, x, y, z, rotY, stationName, section, roomDeck, lookTargetOffset = { x: 0, z: -5 }) {
    const chairGroup = new THREE.Group();
    chairGroup.position.set(x, y, z);
    chairGroup.rotation.y = rotY;
    parent.add(chairGroup);

    // Flared Conical Pedestal & Floor Ring
    const baseDisc = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.30, 0.04, 24), this.metalGreyMat);
    baseDisc.position.y = 0.02;
    chairGroup.add(baseDisc);

    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.16, 0.38, 20), this.consoleBodyMat);
    post.position.y = 0.21;
    chairGroup.add(post);

    // Contoured Rounded Seat Cushion
    const seat = new THREE.Mesh(new THREE.CylinderGeometry(0.33, 0.30, 0.12, 28), this.carpetBurgundyMat);
    seat.scale.set(1.04, 1.0, 0.98);
    seat.position.y = 0.44;
    chairGroup.add(seat);

    // Wrap-Around Curved Upholstered Backrest Shell
    const backArc = new THREE.Mesh(
      new THREE.CylinderGeometry(0.32, 0.31, 0.56, 28, 1, false, -Math.PI * 0.42, Math.PI * 0.84),
      this.carpetBurgundyMat
    );
    backArc.position.set(0, 0.74, 0.02);
    chairGroup.add(backArc);

    // Rounded Top Bolster Rim
    const topBolster = new THREE.Mesh(
      new THREE.TorusGeometry(0.315, 0.045, 12, 24, Math.PI * 0.84),
      this.leatherCamelMat
    );
    topBolster.rotation.x = Math.PI / 2;
    topBolster.rotation.z = Math.PI * 0.08;
    topBolster.position.set(0, 1.02, 0.02);
    chairGroup.add(topBolster);

    const floorY = getWalkableDeckFloorY(roomDeck, section);
    this.registerInteractive(seat, {
      type: 'sit',
      stationName,
      section,
      deck: roomDeck,
      localSeatPos: {
        x: chairGroup.position.x + parent.position.x,
        y: floorY + chairGroup.position.y + 1.25,
        z: chairGroup.position.z + parent.position.z
      },
      lookOffset: lookTargetOffset,
      prompt: `Sit at ${stationName} [Click / E]`
    });

    return chairGroup;
  }

  // Functioning Starfleet Sliding Door with Beveled Trapezoidal Arch, Dual Leaves, Reveal Seams & Obstruction Collider
  createSlidingDoor(parent, doorId, x, z, rotY, deck, section, width = 2.05, height = 2.68) {
    const doorGroup = new THREE.Group();
    doorGroup.position.set(x, 0, z);
    doorGroup.rotation.y = rotY;
    parent.add(doorGroup);

    const frameMat = this.consoleBodyMat;
    const topBar = new THREE.Mesh(new THREE.BoxGeometry(width + 0.56, 0.34, 0.38), frameMat);
    topBar.position.y = height + 0.16;
    doorGroup.add(topBar);

    [-1, 1].forEach(side => {
      const jamb = new THREE.Mesh(new THREE.BoxGeometry(0.26, height + 0.32, 0.38), frameMat);
      jamb.position.set(side * (width / 2 + 0.13), (height + 0.16) / 2, 0);
      doorGroup.add(jamb);
    });

    const isInterlock = doorId.includes('sep') || doorId.includes('bridge_tl');
    const leafMat = isInterlock ? this.metalGreyMat : this.doorCrimsonMat;

    const buildLeaf = (sign) => {
      const leaf = new THREE.Mesh(new THREE.BoxGeometry(width / 2 + 0.015, height, 0.14), leafMat);
      leaf.position.set(sign * (width / 4), height / 2, 0);
      // Recessed vertical Starfleet trim strip near mating edge
      const trim = new THREE.Mesh(new THREE.BoxGeometry(0.05, height * 0.88, 0.155), frameMat);
      trim.position.set(-sign * (width / 4 - 0.06), 0, 0);
      leaf.add(trim);
      return leaf;
    };

    const leftLeaf = buildLeaf(-1);
    const rightLeaf = buildLeaf(1);
    doorGroup.add(leftLeaf, rightLeaf);

    // Door Status LED Strip above arch
    const statusLedMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const statusLed = new THREE.Mesh(new THREE.BoxGeometry(width * 0.64, 0.075, 0.41), statusLedMat);
    statusLed.position.set(0, height + 0.16, 0);
    doorGroup.add(statusLed);

    // Wall LCARS Door Access Control Pads (both sides)
    [-0.22, 0.22].forEach(zSide => {
      const padFrame = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.42, 0.05), frameMat);
      padFrame.position.set(width / 2 + 0.34, 1.36, zSide);
      doorGroup.add(padFrame);

      const pad = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.34, 0.065),
        new THREE.MeshBasicMaterial({ color: 0xf59e0b })
      );
      pad.position.set(width / 2 + 0.34, 1.36, zSide);
      doorGroup.add(pad);
      this.registerInteractive(pad, {
        type: 'door_control',
        doorId,
        prompt: `Operate Door Controls (${this.shipState.doors[doorId]?.name || doorId}) [Click / E]`
      });
    });

    this.registerInteractive(leftLeaf, {
      type: 'door_leaf',
      doorId,
      prompt: `Toggle Door (${this.shipState.doors[doorId]?.name || doorId}) [Click / E]`
    });
    this.registerInteractive(rightLeaf, {
      type: 'door_leaf',
      doorId,
      prompt: `Toggle Door (${this.shipState.doors[doorId]?.name || doorId}) [Click / E]`
    });

    this.doorMeshes.set(doorId, {
      id: doorId,
      group: doorGroup,
      leftLeaf,
      rightLeaf,
      statusLedMat,
      width,
      height,
      deck,
      section,
      localPos: new THREE.Vector3(x + parent.position.x, getWalkableDeckFloorY(deck, section), z + parent.position.z)
    });

    return doorGroup;
  }

  // Tall Cylindrical TNG Turbolift Cabin (3.30m ceiling!) & Interactive Destination Selector
  createTurboliftStation(parent, doorId, x, z, rotY, deck, section, label = 'Turbolift 1', yOffset = 0) {
    const tlGroup = new THREE.Group();
    tlGroup.position.set(x, yOffset, z);
    tlGroup.rotation.y = rotY;
    parent.add(tlGroup);

    const cabinH = 3.30;
    const cabinWall = new THREE.Mesh(
      new THREE.CylinderGeometry(1.48, 1.48, cabinH, 32, 1, true, 0, Math.PI * 1.42),
      this.wallBeigeMat
    );
    cabinWall.rotation.y = Math.PI * 0.29;
    cabinWall.position.set(0, cabinH / 2, -1.22);
    tlGroup.add(cabinWall);

    const cabinFloor = new THREE.Mesh(new THREE.CircleGeometry(1.48, 32), this.carpetBurgundyMat);
    cabinFloor.rotation.x = -Math.PI / 2;
    cabinFloor.position.set(0, 0.03, -1.22);
    tlGroup.add(cabinFloor);

    const cabinCeiling = new THREE.Mesh(new THREE.CircleGeometry(1.42, 32), this.ceilingLightMat);
    cabinCeiling.rotation.x = Math.PI / 2;
    cabinCeiling.position.set(0, cabinH - 0.04, -1.22);
    tlGroup.add(cabinCeiling);

    // Vertical Linear Travel Indicator Light Strip inside cabin
    const travelLight = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 2.75, 0.08),
      new THREE.MeshBasicMaterial({ color: 0xfbbf24 })
    );
    travelLight.position.set(-1.12, 1.55, -1.42);
    tlGroup.add(travelLight);

    // Interior LCARS Turbolift Voice/Touch Pedestal
    const selectorLcars = createLCARSConsoleTexture('TURBOLIFT NETWORK', '#f59e0b', '#38bdf8');
    const selectorPanel = new THREE.Mesh(
      new THREE.BoxGeometry(0.46, 0.68, 0.10),
      new THREE.MeshBasicMaterial({ map: selectorLcars.texture })
    );
    selectorPanel.position.set(0.86, 1.42, -0.96);
    selectorPanel.rotation.y = -0.5;
    tlGroup.add(selectorPanel);

    this.registerInteractive(selectorPanel, {
      type: 'turbolift_panel',
      deck,
      section,
      label,
      prompt: `Select Turbolift Destination (${label}, Deck ${deck}) [Click / E]`
    });

    const door = this.createSlidingDoor(parent, doorId, x, z, rotY, deck, section, 1.86, 2.62);
    door.position.y = yOffset;

    return tlGroup;
  }

  buildAllHeroDecks() {
    this.buildDeck1CommandComplex();
    this.buildDeck4ShuttlebayComplex();
    this.buildDeck8SaucerAndBattleBridge();
    this.buildDeck10TenForward();
    this.buildDeck11HolodeckAndScienceLab();
    this.buildDeck12Sickbay();
    this.buildDeck36MainEngineering();
  }

  // Photo-Accurate Sculpted TNG Command Bucket Chair (Stage-9 Image 3)
  createCommandBucketChair(parent, x, y, z, rotY, stationName, section, roomDeck, isCaptain = false) {
    const chairGroup = new THREE.Group();
    chairGroup.position.set(x, y, z);
    chairGroup.rotation.y = rotY;
    parent.add(chairGroup);

    const wHalf = isCaptain ? 0.31 : 0.28;

    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.26, 0.34, 24), this.consoleBodyMat);
    base.position.y = 0.17;
    chairGroup.add(base);

    const seat = new THREE.Mesh(
      new THREE.BoxGeometry(wHalf * 2, 0.11, 0.54),
      this.leatherCamelMat
    );
    seat.position.set(0, 0.38, -0.02);
    seat.rotation.x = -0.08;
    chairGroup.add(seat);

    const wingShape = new THREE.Shape();
    wingShape.moveTo(-0.28, 0.36);
    wingShape.lineTo(0.22, 0.32);
    wingShape.quadraticCurveTo(0.36, 0.62, 0.44, 1.04);
    wingShape.lineTo(0.35, 1.06);
    wingShape.bezierCurveTo(0.22, 0.72, 0.04, 0.56, -0.28, 0.46);
    wingShape.closePath();

    const wingGeo = new THREE.ExtrudeGeometry(wingShape, {
      depth: 0.06,
      bevelEnabled: true,
      bevelThickness: 0.025,
      bevelSize: 0.025,
      bevelSegments: 4
    });
    wingGeo.rotateY(-Math.PI / 2);

    [-1, 1].forEach(side => {
      const wingMesh = new THREE.Mesh(wingGeo, this.leatherCamelMat);
      wingMesh.position.set(side * wHalf + 0.03, 0, 0);
      chairGroup.add(wingMesh);
    });

    const backTilt = 0.24;
    const backShell = new THREE.Mesh(
      new THREE.BoxGeometry(wHalf * 1.92, 0.74, 0.09),
      this.leatherCamelMat
    );
    backShell.position.set(0, 0.72, 0.30);
    backShell.rotation.x = backTilt;
    chairGroup.add(backShell);

    [-0.12, 0.12].forEach(stripX => {
      for (let seg = 0; seg < 7; seg++) {
        const ribPad = new THREE.Mesh(
          new THREE.BoxGeometry(0.15, 0.072, 0.045),
          this.leatherCamelMat
        );
        const offsetAlongBack = (seg - 3) * 0.088;
        const sy = 0.72 + Math.cos(backTilt) * offsetAlongBack;
        const sz = 0.25 + Math.sin(backTilt) * offsetAlongBack;
        ribPad.position.set(stripX, sy, sz);
        ribPad.rotation.x = backTilt;
        chairGroup.add(ribPad);
      }
    });

    const headrest = new THREE.Mesh(
      new THREE.CylinderGeometry(0.085, 0.085, 0.34, 24),
      this.leatherCamelMat
    );
    headrest.rotation.z = Math.PI / 2;
    headrest.scale.set(0.78, 1.0, 1.25);
    headrest.position.set(0, 1.13, 0.40);
    chairGroup.add(headrest);

    if (isCaptain) {
      [-0.35, 0.35].forEach(armX => {
        const armRest = new THREE.Mesh(
          new THREE.BoxGeometry(0.13, 0.075, 0.48),
          this.consoleBodyMat
        );
        armRest.position.set(armX, 0.58, 0.02);
        armRest.rotation.x = -0.05;
        chairGroup.add(armRest);

        const microPad = new THREE.Mesh(
          new THREE.PlaneGeometry(0.07, 0.22),
          new THREE.MeshBasicMaterial({ color: 0xf59e0b })
        );
        microPad.rotation.x = -Math.PI / 2 - 0.05;
        microPad.position.set(armX, 0.62, -0.06);
        chairGroup.add(microPad);
      });
    }

    const floorY = getWalkableDeckFloorY(roomDeck, section);
    this.registerInteractive(seat, {
      type: 'sit',
      stationName,
      section,
      deck: roomDeck,
      localSeatPos: {
        x: chairGroup.position.x + parent.position.x,
        y: floorY + chairGroup.position.y + 1.25,
        z: chairGroup.position.z + parent.position.z
      },
      lookOffset: { x: 0, z: -8 },
      prompt: `Sit at ${stationName} [Click / E]`
    });

    return chairGroup;
  }

  // Smooth continuous swept parabolic arch mesh for the Tactical Horseshoe (96 segments, zero stair steps!)
  buildSmoothTacticalHorseshoe(bridgeGroup, baseFloorY = 0.14) {
    const samples = 96;
    const rx = 2.88;
    const rz = 2.10;
    const centerZ = 0.25;

    const railPositions = [];
    const railIndices = [];
    const wallPositions = [];
    const wallIndices = [];

    for (let i = 0; i <= samples; i++) {
      const t = i / samples;
      const angle = (t - 0.5) * Math.PI * 1.40;

      const archFactor = Math.pow(Math.cos((t - 0.5) * Math.PI), 0.68);
      const yTop = baseFloorY + 0.04 + 1.58 * archFactor;
      const halfWidth = 0.055 + 0.145 * archFactor;
      const thickness = 0.085 + 0.04 * archFactor;

      const sinA = Math.sin(angle);
      const cosA = Math.cos(angle);
      const cx = sinA * rx;
      const cz = centerZ + cosA * rz;

      const nx = sinA * rz;
      const nz = cosA * rx;
      const nLen = Math.hypot(nx, nz) || 1;
      const ux = nx / nLen;
      const uz = nz / nLen;

      const xIn = cx - ux * halfWidth;
      const zIn = cz - uz * halfWidth;
      const xOut = cx + ux * halfWidth;
      const zOut = cz + uz * halfWidth;

      railPositions.push(
        xIn,  yTop,             zIn,
        xOut, yTop - 0.02,      zOut,
        xOut, yTop - thickness, zOut,
        xIn,  yTop - thickness, zIn
      );

      const wallTop = baseFloorY + 0.04 + 0.24 * archFactor;
      const yBottom = baseFloorY - 0.02;
      const wInX = cx - ux * (halfWidth * 0.82);
      const wInZ = cz - uz * (halfWidth * 0.82);
      const wOutX = cx + ux * (halfWidth * 0.82);
      const wOutZ = cz + uz * (halfWidth * 0.82);

      wallPositions.push(
        wInX,  wallTop, wInZ,
        wOutX, wallTop, wOutZ,
        wOutX, yBottom, wOutZ,
        wInX,  yBottom, wInZ
      );

      if (i < samples) {
        const base = i * 4;
        const next = (i + 1) * 4;
        for (let f = 0; f < 4; f++) {
          const fNext = (f + 1) % 4;
          railIndices.push(base + f, next + f, next + fNext);
          railIndices.push(base + f, next + fNext, base + fNext);

          wallIndices.push(base + f, next + f, next + fNext);
          wallIndices.push(base + f, next + fNext, base + fNext);
        }
      }
    }

    const railGeo = new THREE.BufferGeometry();
    railGeo.setAttribute('position', new THREE.Float32BufferAttribute(railPositions, 3));
    railGeo.setIndex(railIndices);
    railGeo.computeVertexNormals();
    bridgeGroup.add(new THREE.Mesh(railGeo, this.woodCherryMat));

    const wallGeo = new THREE.BufferGeometry();
    wallGeo.setAttribute('position', new THREE.Float32BufferAttribute(wallPositions, 3));
    wallGeo.setIndex(wallIndices);
    wallGeo.computeVertexNormals();
    bridgeGroup.add(new THREE.Mesh(wallGeo, this.wallBeigeMat));
  }

  // ============================================================================
  // DECK 1: STAGE-9 TNG MAIN BRIDGE (5.12m RIBBED SKYLIGHT DOME!), READY ROOM & OBSERVATION LOUNGE
  // Floor Y = +63.65m; Bridge Dome Skylight Apex = +68.77m (100% inside +71.08m Exterior Bridge Dome!)
  // ============================================================================
  buildDeck1CommandComplex() {
    const deck1 = this.getDeckGroup(1, 'saucer');
    const wallH = 3.65; // Perimeter bulkhead height (+63.65m..+67.30m)
    const domeApexH = 5.12; // Central skylight dome height (+68.77m — over 2m higher than before!)

    // 1. MAIN BRIDGE CIRCULAR AMPHITHEATER CHAMBER (Centered at X = 0, Z = -137.5m)
    const bridgeGroup = new THREE.Group();
    bridgeGroup.position.set(0, 0, -137.5);
    deck1.add(bridgeGroup);

    // Tier 3 (Outer Walk-Around Gallery & Aft Tactical Ring at y = +0.26m in Cool Slate Carpet)
    const outerGalleryGeo = new THREE.RingGeometry(5.65, 10.35, 72);
    outerGalleryGeo.rotateX(-Math.PI / 2);
    const outerSlateFloor = new THREE.Mesh(outerGalleryGeo, this.carpetSlateMat);
    outerSlateFloor.position.y = 0.26;
    bridgeGroup.add(outerSlateFloor);

    // Tier 1 (Forward Conn / Ops Lower Helm Well at y = +0.02m)
    const helmWellFloor = new THREE.Mesh(new THREE.CircleGeometry(5.85, 64), this.carpetBurgundyMat);
    helmWellFloor.rotation.x = -Math.PI / 2;
    helmWellFloor.position.set(0, 0.02, -0.75);
    bridgeGroup.add(helmWellFloor);

    // Tier 2 (Central Command Arena Platform at y = +0.14m in Warm Terracotta Rose-Mauve Carpet)
    const commandPlatformGeo = new THREE.CylinderGeometry(3.65, 3.75, 0.12, 64);
    commandPlatformGeo.scale(1.12, 1.0, 0.96);
    const commandPlatform = new THREE.Mesh(commandPlatformGeo, this.carpetBurgundyMat);
    commandPlatform.position.set(0, 0.08, 0.42);
    bridgeGroup.add(commandPlatform);

    // Cream-Beige Amphitheater Step Riser & Glowing Step Cove between Gallery (+0.26m) and Pit (+0.02m/+0.14m)
    const stepRiser = new THREE.Mesh(
      new THREE.CylinderGeometry(5.68, 5.68, 0.24, 64, 1, true),
      this.wallBeigeMat
    );
    stepRiser.position.set(0, 0.14, 0);
    bridgeGroup.add(stepRiser);

    const stepCove = new THREE.Mesh(
      new THREE.TorusGeometry(5.66, 0.035, 10, 64),
      this.coveGlowMat
    );
    stepCove.rotation.x = Math.PI / 2;
    stepCove.position.set(0, 0.24, 0);
    bridgeGroup.add(stepCove);

    // Enclosed Beige Perimeter Bulkhead (3.65m tall, DoubleSide so inward-facing curved cylinder walls are solid from inside!)
    const bridgeBulkheadMat = this.wallBeigeMat.clone();
    bridgeBulkheadMat.side = THREE.DoubleSide;
    const wallRadius = 10.22;
    const segments = [
      { start: -1.70, end: 1.48 },
      { start: 1.70, end: 4.62 }
    ];
    for (const seg of segments) {
      const arcGeo = new THREE.CylinderGeometry(
        wallRadius, wallRadius, wallH, 64, 1, true, seg.start, seg.end - seg.start
      );
      const arcMesh = new THREE.Mesh(arcGeo, bridgeBulkheadMat);
      arcMesh.position.y = wallH / 2;
      bridgeGroup.add(arcMesh);
    }

    // SOARING MULTI-TIERED STAGE-9 TNG RIBBED SKYLIGHT DOME (y = 3.65m -> 4.48m -> 5.12m!)
    // All ceiling surfaces use FrontSide facing downward so Cutaway mode retains crystal-clear overhead visibility!
    // Outer Perimeter Soffit Ring (r = 7.45m..10.30m at y = 3.65m)
    const outerSoffit = new THREE.Mesh(new THREE.RingGeometry(7.45, 10.30, 72), this.ceilingSoffitMat);
    outerSoffit.rotation.x = Math.PI / 2;
    outerSoffit.position.y = wallH;
    bridgeGroup.add(outerSoffit);

    // Glowing Indirect Cove Drum (r = 7.45m, rising from y = 3.65m to y = 4.48m)
    const coveDrum = new THREE.Mesh(
      new THREE.CylinderGeometry(7.45, 7.45, 0.83, 64, 1, true),
      new THREE.MeshStandardMaterial({
        color: 0xfef9ee,
        emissive: 0xffe4b5,
        emissiveIntensity: 0.72,
        side: THREE.BackSide // Inward-facing cylinder wall
      })
    );
    coveDrum.position.y = wallH + 0.415;
    bridgeGroup.add(coveDrum);

    // Conical Diffused Skylight Ring (r = 3.60m at y = 5.05m down to r = 7.48m at y = 4.48m)
    const skylightConeGeo = new THREE.CylinderGeometry(3.60, 7.48, 0.57, 64, 1, true);
    const skylightCone = new THREE.Mesh(
      skylightConeGeo,
      new THREE.MeshStandardMaterial({
        color: 0xfdf5e6,
        emissive: 0xffedd5,
        emissiveIntensity: 0.82,
        roughness: 0.5,
        side: THREE.BackSide
      })
    );
    skylightCone.position.y = 4.765;
    bridgeGroup.add(skylightCone);

    // 16 Sculpted Radial TNG Cream-Beige Ceiling Beams Spanning the Skylight Cone
    for (let r = 0; r < 16; r++) {
      const ang = (r / 16) * Math.PI * 2;
      const ribGroup = new THREE.Group();
      ribGroup.rotation.y = ang;
      const ribBeam = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.18, 4.05), this.wallBeigeMat);
      ribBeam.position.set(0, 4.74, 5.50);
      ribBeam.rotation.x = 0.145;
      ribGroup.add(ribBeam);
      bridgeGroup.add(ribGroup);
    }

    // Central Oval Illuminated Skylight Cap at y = 5.12m!
    const centralSkylightRing = new THREE.Mesh(new THREE.RingGeometry(3.35, 3.68, 64), this.wallBeigeMat);
    centralSkylightRing.rotation.x = Math.PI / 2;
    centralSkylightRing.position.y = 5.05;
    bridgeGroup.add(centralSkylightRing);

    const innerSkylight = new THREE.Mesh(new THREE.CircleGeometry(3.55, 64), this.ceilingLightMat);
    innerSkylight.rotation.x = Math.PI / 2;
    innerSkylight.position.y = domeApexH;
    bridgeGroup.add(innerSkylight);

    const bridgeLight = new THREE.PointLight(0xfff4e2, 2.8, 34);
    bridgeLight.position.set(0, domeApexH - 0.35, 0);
    bridgeGroup.add(bridgeLight);
    this.registerLight('deck1_bridge', bridgeLight);

    // SCULPTED PROSCENIUM MAIN VIEWSCREEN (8.2m × 3.55m crisp 2048×1024 MSAA display at forward bulkhead!)
    const vsOuterProscenium = new THREE.Mesh(new THREE.BoxGeometry(8.85, 4.05, 0.42), this.wallTaupeMat);
    vsOuterProscenium.position.set(0, 2.08, -8.38);
    bridgeGroup.add(vsOuterProscenium);

    const vsFrame = new THREE.Mesh(new THREE.BoxGeometry(8.45, 3.72, 0.36), this.consoleBodyMat);
    vsFrame.position.set(0, 2.08, -8.28);
    bridgeGroup.add(vsFrame);

    const vsScreen = new THREE.Mesh(new THREE.PlaneGeometry(8.05, 3.42), this.mainViewscreenMat);
    vsScreen.position.set(0, 2.08, -8.08);
    bridgeGroup.add(vsScreen);
    this.registerInteractive(vsScreen, {
      type: 'terminal',
      appId: 'viewscreen',
      title: 'Main Bridge Viewscreen Control',
      prompt: 'Configure Main Viewscreen Sensor Feed [Click / E]'
    });

    // COMMAND SEATING TRIO ON CENTRAL COMMAND PLATFORM (y = +0.14m): Picard, Riker, Troi
    this.createCommandBucketChair(bridgeGroup, 0, 0.16, 0.35, 0, "Captain Picard's Command Chair", 'saucer', 1, true);
    this.createCommandBucketChair(bridgeGroup, 1.44, 0.14, 0.52, 0.18, "First Officer Commander Riker's Chair", 'saucer', 1, false);
    this.createCommandBucketChair(bridgeGroup, -1.44, 0.14, 0.52, -0.18, "Counselor Deanna Troi's Chair", 'saucer', 1, false);

    // FREESTANDING GLOWING SIDE PEDESTALS Flanking Troi & Riker
    [-2.38, 2.38].forEach(sideX => {
      const sidePedGroup = new THREE.Group();
      sidePedGroup.position.set(sideX, 0.14, 0.58);
      sidePedGroup.rotation.y = sideX < 0 ? -0.22 : 0.22;
      bridgeGroup.add(sidePedGroup);

      const pedBody = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.48, 0.68), this.wallBeigeMat);
      pedBody.position.set(0, 0.48, 0);
      sidePedGroup.add(pedBody);

      const pedGlow = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.26, 0.62), this.coveGlowMat);
      pedGlow.position.set(0, 0.14, 0);
      sidePedGroup.add(pedGlow);

      const topPad = new THREE.Mesh(
        new THREE.PlaneGeometry(0.38, 0.48),
        new THREE.MeshBasicMaterial({ color: 0x111827 })
      );
      topPad.rotation.x = -Math.PI / 2;
      topPad.position.set(0, 0.725, 0);
      sidePedGroup.add(topPad);
    });

    // ICONIC SCULPTED DOUBLE-SWEPT CHERRY-WOOD TACTICAL HORSESHOE & CENTRAL SUPPORT PILLAR
    this.buildSmoothTacticalHorseshoe(bridgeGroup, 0.14);

    const centerPillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.58, 0.26, 1.46, 28),
      this.wallBeigeMat
    );
    centerPillar.scale.set(1.42, 1.0, 0.45);
    centerPillar.position.set(0, 0.86, 2.28);
    bridgeGroup.add(centerPillar);

    // Foreground Wing Consoles Integrated into Forward Flanks of Horseshoe
    [-1, 1].forEach(side => {
      const wingConsole = new THREE.Group();
      wingConsole.position.set(side * 2.20, 0.14, -0.18);
      wingConsole.rotation.y = side * 0.42;
      bridgeGroup.add(wingConsole);

      const deskBody = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.54, 1.32), this.wallBeigeMat);
      deskBody.position.set(0, 0.32, 0);
      wingConsole.add(deskBody);

      const deskReturn = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.42, 0.48), this.wallBeigeMat);
      deskReturn.position.set(-side * 0.22, 0.26, -0.52);
      wingConsole.add(deskReturn);

      const coveLight = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.25, 1.24), this.coveGlowMat);
      coveLight.position.set(-side * 0.28, 0.13, 0);
      wingConsole.add(coveLight);

      const coveLightFront = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.22, 0.18), this.coveGlowMat);
      coveLightFront.position.set(-side * 0.20, 0.12, -0.68);
      wingConsole.add(coveLightFront);

      const wingLcars = createLCARSConsoleTexture(side < 0 ? 'SYS TELEMETRY' : 'DEFENSE SUBSYS', '#f59e0b', '#38bdf8');
      this.consoleDisplays.push({ ...wingLcars, title: 'Wing Console', appId: 'lighting' });
      const wingScreen = new THREE.Mesh(
        new THREE.PlaneGeometry(0.32, 0.92),
        new THREE.MeshBasicMaterial({ map: wingLcars.texture, side: THREE.DoubleSide })
      );
      wingScreen.rotation.y = -side * Math.PI / 2;
      wingScreen.rotation.z = -side * 0.45;
      wingScreen.position.set(-side * 0.27, 0.55, 0.08);
      wingConsole.add(wingScreen);
    });

    // Inlaid Tactical LCARS Display Strip Along Aft Upper Bezel of Cherry-Wood Horseshoe
    const tacLcars = createLCARSConsoleTexture('TACTICAL / WEAPONS & SECURITY', '#f59e0b', '#38bdf8');
    this.consoleDisplays.push({ ...tacLcars, title: 'TACTICAL / WEAPONS & SECURITY', appId: 'doors' });
    const tacScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(1.78, 0.36),
      new THREE.MeshBasicMaterial({ map: tacLcars.texture, side: THREE.FrontSide })
    );
    tacScreen.position.set(0, 1.56, 2.50);
    tacScreen.rotation.x = -0.65;
    bridgeGroup.add(tacScreen);
    this.registerInteractive(tacScreen, {
      type: 'terminal',
      appId: 'doors',
      title: 'TACTICAL / WEAPONS & SECURITY (Main Bridge)',
      prompt: 'Operate TACTICAL / WEAPONS & SECURITY [Click / E]'
    });

    // FORWARD CONN & OPS STATIONS IN LOWER HELM WELL (y = 0.02m)
    this.createConsoleStation(bridgeGroup, -1.55, 0.02, -3.45, 0, 1.68, 'CONN / FLIGHT CONTROL', 'separation', 'Main Bridge');
    this.createCommandBucketChair(bridgeGroup, -1.55, 0.02, -2.48, 0, 'Conn / Helm Station', 'saucer', 1, false);

    this.createConsoleStation(bridgeGroup, 1.55, 0.02, -3.45, 0, 1.68, 'OPS / OPERATIONS MANAGEMENT', 'sensors', 'Main Bridge');
    this.createCommandBucketChair(bridgeGroup, 1.55, 0.02, -2.48, 0, 'Operations (Ops) Station', 'saucer', 1, false);

    // AFT ENGINEERING, ENVIRONMENT & SCIENCE ALCOVE WALL STATIONS ON RAISED GALLERY (y = +0.26m!)
    const aftStations = [
      { angle: -0.10, title: 'ENGINEERING / EPS', appId: 'power' },
      { angle:  0.08, title: 'MASTER SITUATION', appId: 'map' },
      { angle:  0.26, title: 'SCIENCE I / SENSORS', appId: 'sensors' },
      { angle:  0.44, title: 'ENVIRONMENT / LIFE', appId: 'environment' }
    ];
    for (const st of aftStations) {
      const stGroup = new THREE.Group();
      const rWall = 9.55;
      stGroup.position.set(Math.sin(st.angle) * rWall, 0.26, Math.cos(st.angle) * rWall);
      stGroup.rotation.y = st.angle + Math.PI;
      bridgeGroup.add(stGroup);

      const darkBack = new THREE.Mesh(new THREE.BoxGeometry(1.66, 2.75, 0.14), this.consoleBodyMat);
      darkBack.position.set(0, 1.38, 0.02);
      stGroup.add(darkBack);

      [-0.52, 0, 0.52].forEach(pedX => {
        const counterBase = new THREE.Mesh(new THREE.BoxGeometry(0.49, 0.82, 0.62), this.wallBeigeMat);
        counterBase.position.set(pedX, 0.44, 0.28);
        stGroup.add(counterBase);
      });

      const deskLcars = createLCARSConsoleTexture(st.title, '#38bdf8', '#fbbf24');
      const deskScreen = new THREE.Mesh(
        new THREE.PlaneGeometry(1.52, 0.36),
        new THREE.MeshBasicMaterial({ map: deskLcars.texture })
      );
      deskScreen.position.set(0, 0.90, 0.36);
      deskScreen.rotation.x = -1.12;
      stGroup.add(deskScreen);

      const wallLcars = createLCARSConsoleTexture(st.title, '#fbbf24', '#60a5fa');
      this.consoleDisplays.push({ ...wallLcars, title: st.title, appId: st.appId });

      const wallScreen = new THREE.Mesh(
        new THREE.PlaneGeometry(1.52, 1.06),
        new THREE.MeshBasicMaterial({ map: wallLcars.texture })
      );
      wallScreen.position.set(0, 1.66, 0.14);
      stGroup.add(wallScreen);

      this.registerInteractive(wallScreen, {
        type: 'terminal',
        appId: st.appId,
        title: `${st.title} (Main Bridge Aft)`,
        prompt: `Operate ${st.title} [Click / E]`
      });

      const hoodMesh = new THREE.Mesh(new THREE.BoxGeometry(1.64, 0.54, 0.58), this.wallBeigeMat);
      hoodMesh.position.set(0, 2.66, 0.24);
      hoodMesh.rotation.x = 0.30;
      stGroup.add(hoodMesh);

      const ventSlot = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.07, 0.60), this.consoleBodyMat);
      ventSlot.position.set(0, 2.44, 0.30);
      stGroup.add(ventSlot);
    }

    // RECESSED CHERRY-WOOD PANEL WALLS WITH ICE-BLUE OVERHEAD COVE LIGHT (y = +0.26m)
    [-1, 1].forEach(side => {
      const woodWallGroup = new THREE.Group();
      const wallAng = side * 1.05;
      woodWallGroup.position.set(Math.sin(wallAng) * 9.55, 0.26, Math.cos(wallAng) * 9.55);
      woodWallGroup.rotation.y = wallAng - side * Math.PI;
      bridgeGroup.add(woodWallGroup);

      const frameBack = new THREE.Mesh(new THREE.BoxGeometry(4.20, 2.65, 0.14), this.wallBeigeMat);
      frameBack.position.set(0, 1.48, 0);
      woodWallGroup.add(frameBack);

      for (let col = -1; col <= 1; col++) {
        for (let row = 0; row < 2; row++) {
          const woodPanel = new THREE.Mesh(new THREE.BoxGeometry(1.24, 0.98, 0.18), this.woodCherryMat);
          woodPanel.position.set(col * 1.30, 0.94 + row * 1.04, 0.04);
          woodWallGroup.add(woodPanel);
        }
      }

      const coveStrip = new THREE.Mesh(new THREE.BoxGeometry(4.02, 0.18, 0.26), this.coveGlowMat);
      coveStrip.position.set(0, 2.72, 0.08);
      woodWallGroup.add(coveStrip);

      const covePointLight = new THREE.PointLight(0xd8f0ff, 1.3, 8.0);
      covePointLight.position.set(0, 2.55, 0.45);
      woodWallGroup.add(covePointLight);
    });

    // AFT-PORT TURBOLIFT ALCOVE WITH QUILTED PADDED WALL PANELS & MATTE-SILVER DOORS (y = +0.26m)
    const tlAng = -0.50;
    const tlRadius = 9.45;
    const tlX = Math.sin(tlAng) * tlRadius;
    const tlZ = Math.cos(tlAng) * tlRadius;
    const tlRotY = tlAng + Math.PI;

    const tlAlcoveGroup = new THREE.Group();
    tlAlcoveGroup.position.set(tlX, 0.26, tlZ);
    tlAlcoveGroup.rotation.y = tlRotY;
    bridgeGroup.add(tlAlcoveGroup);

    const alcoveBack = new THREE.Mesh(new THREE.BoxGeometry(3.70, 2.84, 0.08), this.consoleBodyMat);
    alcoveBack.position.set(0, 1.42, 0.02);
    tlAlcoveGroup.add(alcoveBack);

    for (const side of [-1, 1]) {
      for (let col = 0; col < 2; col++) {
        for (let row = 0; row < 4; row++) {
          const cushion = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.64, 0.10), this.wallTaupeMat);
          cushion.position.set(side * (1.08 + col * 0.50), 0.34 + row * 0.67, 0.06);
          tlAlcoveGroup.add(cushion);
        }
      }
    }

    const doorSlotFrame = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.96, 0.12), this.consoleBodyMat);
    doorSlotFrame.position.set(-2.08, 1.62, 0.08);
    tlAlcoveGroup.add(doorSlotFrame);

    const doorSlotGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(0.14, 0.40),
      new THREE.MeshBasicMaterial({ color: 0xf97316 })
    );
    doorSlotGlow.position.set(-2.08, 1.44, 0.15);
    tlAlcoveGroup.add(doorSlotGlow);

    this.createTurboliftStation(deck1, 'door_bridge_tl1', tlX, -137.5 + tlZ, tlRotY, 1, 'saucer', 'Bridge Turbolift 1', 0.26);
    this.createTurboliftStation(deck1, 'door_bridge_tl2', -8.8, -142.0, -2.18, 1, 'saucer', 'Bridge Emergency Turbolift 2', 0.26);

    // 2. CAPTAIN'S READY ROOM (Starboard of Bridge: h = 3.70m vaulted ceiling, 100% inside +67.4m exterior superstructure!)
    const readyH = 3.70;
    const readyDoor = this.createSlidingDoor(deck1, 'door_bridge_ready', 8.9, -141.5, Math.PI / 2, 1, 'saucer', 1.85, 2.65);
    readyDoor.position.y = 0.12;

    const readyRoom = this.buildRoomBox(
      deck1, 12.2, -141.5, 5.8, 6.8, readyH,
      this.carpetSlateMat, this.wallBeigeMat,
      { west: true, east: true }
    );

    // Tall Starboard Exterior Viewport (2.10m high!)
    const rrWindowPane = new THREE.Mesh(new THREE.PlaneGeometry(4.1, 2.10), this.glassMat);
    rrWindowPane.position.set(2.85, 1.92, -0.4);
    rrWindowPane.rotation.y = Math.PI / 2;
    rrWindowPane.rotation.z = 0.16;
    readyRoom.add(rrWindowPane);

    const rrLowerWall = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.85, 6.8), this.wallBeigeMat);
    rrLowerWall.position.set(2.85, 0.42, 0);
    readyRoom.add(rrLowerWall);

    // Sculpted Curved-Front Cherry-Wood Picard Desk
    const deskShape = new THREE.Shape();
    deskShape.moveTo(-1.25, -0.58);
    deskShape.quadraticCurveTo(0, -0.82, 1.25, -0.58);
    deskShape.lineTo(1.18, 0.58);
    deskShape.quadraticCurveTo(0, 0.42, -1.18, 0.58);
    deskShape.closePath();
    const deskGeo = new THREE.ExtrudeGeometry(deskShape, {
      depth: 0.76,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.03,
      bevelSegments: 4,
      curveSegments: 32
    });
    deskGeo.rotateX(Math.PI / 2);
    deskGeo.rotateY(-Math.PI / 2);
    const picardDesk = new THREE.Mesh(deskGeo, this.woodCherryMat);
    picardDesk.position.set(0.82, 0.78, -1.1);
    readyRoom.add(picardDesk);

    this.createConsoleStation(readyRoom, 0.82, 0.0, -1.1, -Math.PI / 2, 0.88, "PICARD'S DESK TERMINAL", 'logs', "Captain's Ready Room");
    this.createChair(readyRoom, 1.78, 0, -1.1, -Math.PI / 2, "Captain Picard's Desk Chair", 'saucer', 1, { x: -5, z: 0 });

    // Golden USS Stargazer NCC-2893 Display Model on Bookshelf Alcove
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.24, metalness: 0.86 });
    const stargazerSaucer = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.05, 24), goldMat);
    stargazerSaucer.position.set(-1.65, 1.48, 0.25);
    readyRoom.add(stargazerSaucer);

    // Livingston the Lionfish Circular Wall Aquarium
    const tankCylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(0.50, 0.50, 1.15, 28),
      new THREE.MeshPhysicalMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.42, roughness: 0.08 })
    );
    tankCylinder.position.set(-1.8, 1.65, -2.7);
    readyRoom.add(tankCylinder);

    this.livingstonFish = new THREE.Mesh(
      new THREE.ConeGeometry(0.12, 0.28, 12),
      new THREE.MeshBasicMaterial({ color: 0xf97316 })
    );
    this.livingstonFish.rotation.z = Math.PI / 2;
    this.livingstonFish.position.set(-1.8, 1.65, -2.7);
    readyRoom.add(this.livingstonFish);

    const rrReplicator = new THREE.Mesh(
      new THREE.BoxGeometry(0.95, 0.88, 0.42),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.45 })
    );
    rrReplicator.position.set(-1.6, 1.42, 2.95);
    readyRoom.add(rrReplicator);
    this.registerInteractive(rrReplicator, {
      type: 'replicator',
      item: { id: 'earl_grey', name: 'Tea, Earl Grey, Hot', color: 0xd97706 },
      prompt: 'Replicate "Tea, Earl Grey, Hot" [Click / E]'
    });

    const rrLight = new THREE.PointLight(0xffedd5, 1.7, 14);
    rrLight.position.set(12.2, readyH - 0.35, -141.5);
    deck1.add(rrLight);
    this.registerLight('deck1_ready_room', rrLight);

    // 3. OBSERVATION LOUNGE (Aft of Main Bridge: h = 3.72m vaulted ceiling, tall 2.35m slanted aft windows!)
    const obsH = 3.72;
    const obsDoorP = this.createSlidingDoor(deck1, 'door_bridge_obs_port', -4.2, -126.4, 0, 1, 'saucer', 1.80, 2.65);
    obsDoorP.position.y = 0.12;
    const obsDoorS = this.createSlidingDoor(deck1, 'door_bridge_obs_stbd', 6.8, -129.6, -0.65, 1, 'saucer', 1.80, 2.65);
    obsDoorS.position.y = 0.12;

    const obsLounge = this.buildRoomBox(
      deck1, 0, -121.2, 11.6, 10.4, obsH,
      this.carpetBurgundyMat, this.wallBeigeMat,
      { north: true, south: true }
    );

    // Tall Aft Slanted Observation Windows with Sculpted TNG Mullion Fins
    for (let i = -2; i <= 2; i++) {
      const pane = new THREE.Mesh(new THREE.PlaneGeometry(2.12, 2.42), this.glassMat);
      pane.position.set(i * 2.2, 1.82, 5.08);
      pane.rotation.x = -0.22;
      obsLounge.add(pane);

      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.24, obsH, 0.58), this.wallBeigeMat);
      fin.position.set(i * 2.2 + 1.1, obsH / 2, 4.94);
      obsLounge.add(fin);
    }

    // Sculpted Stadium-Oval Polished Cherry-Wood Briefing Table (replaces raw rectangular block!)
    const tableShape = new THREE.Shape();
    tableShape.moveTo(-1.08, -2.25);
    tableShape.lineTo(-1.08, 2.25);
    tableShape.absarc(0, 2.25, 1.08, Math.PI, 0, true);
    tableShape.lineTo(1.08, -2.25);
    tableShape.absarc(0, -2.25, 1.08, 0, Math.PI, true);
    const tableTopGeo = new THREE.ExtrudeGeometry(tableShape, {
      depth: 0.09,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.03,
      bevelSegments: 4,
      curveSegments: 36
    });
    tableTopGeo.rotateX(Math.PI / 2);
    const confTableTop = new THREE.Mesh(tableTopGeo, this.woodCherryMat);
    confTableTop.position.set(0, 0.78, 0.2);
    obsLounge.add(confTableTop);

    [-1.45, 1.85].forEach(pedZ => {
      const tablePed = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.56, 0.72, 24), this.consoleBodyMat);
      tablePed.position.set(0, 0.36, pedZ);
      obsLounge.add(tablePed);
    });

    for (let row = -1; row <= 1; row++) {
      this.createChair(obsLounge, -1.78, 0, row * 1.85, Math.PI / 2, `Observation Lounge Port Seat ${row + 2}`, 'saucer', 1, { x: 2, z: 0 });
      this.createChair(obsLounge, 1.78, 0, row * 1.85, -Math.PI / 2, `Observation Lounge Starboard Seat ${row + 2}`, 'saucer', 1, { x: -2, z: 0 });
    }
    this.createChair(obsLounge, 0, 0, -3.55, 0, 'Observation Lounge Head Chair', 'saucer', 1, { x: 0, z: 5 });

    // Gold Relief Sculptures of Historical Vessels Named Enterprise
    const displayCase = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.32, 6.1), this.woodCherryMat);
    displayCase.position.set(-5.65, 1.78, 0);
    obsLounge.add(displayCase);

    for (let s = 0; s < 6; s++) {
      const shipRelief = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.08, 24), goldMat);
      shipRelief.rotation.z = Math.PI / 2;
      shipRelief.position.set(-5.52, 1.78, -2.3 + s * 0.92);
      obsLounge.add(shipRelief);
    }

    this.createConsoleStation(obsLounge, 5.1, 0, -2.5, -Math.PI / 2, 1.5, 'OBSERVATION BRIEFING DISPLAY', 'map', 'Observation Lounge');

    const obsLight = new THREE.PointLight(0xfff1dc, 1.8, 18);
    obsLight.position.set(0, obsH - 0.35, -122.0);
    deck1.add(obsLight);
    this.registerLight('deck1_observation', obsLight);
  }

  // ============================================================================
  // DECK 4: TWO-DECK 6.20m MAIN SHUTTLEBAY (BAY 1), FLIGHT CONTROL BALCONY & SCULPTED SHUTTLECRAFT
  // Floor Y = +51.15m; Hangar Roof = +57.35m (100% inside +59.8m Exterior Shuttlebay Arch!)
  // ============================================================================
  buildDeck4ShuttlebayComplex() {
    const deck4 = this.getDeckGroup(4, 'saucer');
    const hCorr = 3.70;
    const hHangar = 6.20; // Soaring two-deck hangar bay!

    // 1. Deck 4 Turbolift & Cargo Staging Corridor (h = 3.70m)
    this.buildRoomBox(
      deck4, -12.0, -84.0, 9.0, 12.0, hCorr,
      this.carpetSlateMat, this.wallBeigeMat,
      { east: true }
    );
    this.createTurboliftStation(deck4, 'door_deck4_tl', -15.5, -84.0, Math.PI / 2, 4, 'saucer', 'Deck 4 Shuttlebay Turbolift');

    // Beveled Starfleet Cargo Containers + Movable Demonstration Prop
    const crateColors = [0x0284c7, 0xd97706, 0x475569];
    for (let i = 0; i < 5; i++) {
      const crate = new THREE.Mesh(
        new THREE.CylinderGeometry(0.76, 0.76, 1.22, 8),
        new THREE.MeshStandardMaterial({ color: crateColors[i % 3], roughness: 0.42, metalness: 0.25 })
      );
      crate.position.set(-13.5 + (i % 2) * 1.65, 0.61 + Math.floor(i / 2) * 1.24, -88.0);
      deck4.add(crate);
    }

    const demoPod = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 0.76, 24),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.45 })
    );
    demoPod.position.set(-10.5, 0.42, -87.0);
    deck4.add(demoPod);
    this.registerInteractive(demoPod, {
      type: 'pickup_prop',
      prop: { id: 'deuterium_sample', name: 'Deuterium Calibration Cylinder', color: 0x38bdf8 },
      mesh: demoPod,
      prompt: 'Pick Up Deuterium Calibration Cylinder [Click / E]'
    });

    this.createSlidingDoor(deck4, 'door_deck4_corridor', -7.5, -84.0, Math.PI / 2, 4, 'saucer', 2.25, 2.75);

    // 2. MAIN SHUTTLEBAY 1 TWO-DECK HANGAR (h = 6.20m!)
    const hangarRoom = this.buildRoomBox(
      deck4, 2.5, -80.0, 21.0, 20.0, hHangar,
      new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.52, metalness: 0.26 }),
      this.metalGreyMat,
      { west: true, south: true }
    );

    // Arched Overhead Structural Hangar Trusses at y = 5.65m
    for (let z = -7.5; z <= 7.5; z += 3.75) {
      const truss = new THREE.Mesh(new THREE.BoxGeometry(20.6, 0.42, 0.48), this.consoleBodyMat);
      truss.position.set(0, hHangar - 0.52, z);
      hangarRoom.add(truss);
    }

    // Upper Flight Control Observation Balcony on Forward Bulkhead (y = 3.45m overlooking the Hangar!)
    const balconyBooth = new THREE.Mesh(new THREE.BoxGeometry(11.5, 2.15, 2.4), this.wallBeigeMat);
    balconyBooth.position.set(0, 4.45, -8.75);
    hangarRoom.add(balconyBooth);

    const balconyGlass = new THREE.Mesh(new THREE.PlaneGeometry(10.2, 1.35), this.glassMat);
    balconyGlass.position.set(0, 4.55, -7.52);
    balconyGlass.rotation.x = 0.16;
    hangarRoom.add(balconyGlass);

    const balconyGlow = new THREE.Mesh(new THREE.BoxGeometry(10.0, 0.16, 0.25), this.coveGlowMat);
    balconyGlow.position.set(0, 5.38, -7.58);
    hangarRoom.add(balconyGlow);

    // Yellow Flight Deck Landing Pad Markings
    const padRing = new THREE.Mesh(
      new THREE.RingGeometry(3.8, 4.15, 48),
      new THREE.MeshBasicMaterial({ color: 0xfacc15, side: THREE.DoubleSide })
    );
    padRing.rotation.x = -Math.PI / 2;
    padRing.position.set(0, 0.05, -77.0);
    deck4.add(padRing);

    // Shimmering Atmospheric Containment Forcefield at Aft Space Doors (Z = -70.3m)
    this.shuttlebayForcefieldMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(20.5, hHangar),
      new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.18,
        side: THREE.DoubleSide
      })
    );
    this.shuttlebayForcefieldMesh.position.set(2.5, hHangar / 2, -70.3);
    deck4.add(this.shuttlebayForcefieldMesh);

    // Helper for Sculpted Beveled Type-6 Shuttlecraft (eliminates blocky box shuttle!)
    const buildType6Shuttle = (sx, sz, rotY) => {
      const shuttleGroup = new THREE.Group();
      shuttleGroup.position.set(sx, 0, sz);
      shuttleGroup.rotation.y = rotY;
      deck4.add(shuttleGroup);

      // Trapezoidal beveled fuselage cross-section extruded along length
      const fuseShape = new THREE.Shape();
      fuseShape.moveTo(-1.32, 0.34);
      fuseShape.lineTo(1.32, 0.34);
      fuseShape.lineTo(0.98, 1.76);
      fuseShape.quadraticCurveTo(0, 1.92, -0.98, 1.76);
      fuseShape.closePath();

      const fuseGeo = new THREE.ExtrudeGeometry(fuseShape, {
        depth: 4.5,
        bevelEnabled: true,
        bevelThickness: 0.32,
        bevelSize: 0.22,
        bevelSegments: 6,
        curveSegments: 24
      });
      fuseGeo.translate(0, 0, -2.25);
      const sBody = new THREE.Mesh(
        fuseGeo,
        new THREE.MeshStandardMaterial({ color: 0xe4ebf3, roughness: 0.30, metalness: 0.16 })
      );
      shuttleGroup.add(sBody);

      // Sleek Flush Tinted Forward Windshield Visor
      const sCanopy = new THREE.Mesh(
        new THREE.CylinderGeometry(0.92, 1.18, 0.68, 24, 1, false, -Math.PI * 0.35, Math.PI * 0.70),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.12, metalness: 0.78 })
      );
      sCanopy.position.set(0, 1.32, 1.62);
      sCanopy.rotation.x = 0.28;
      shuttleGroup.add(sCanopy);

      // Crimson Pennant Stripe & Twin Nacelles
      [-1.38, 1.38].forEach(nx => {
        const sNacelle = new THREE.Mesh(
          new THREE.CylinderGeometry(0.24, 0.26, 3.45, 24),
          new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.32, metalness: 0.52 })
        );
        sNacelle.rotation.x = Math.PI / 2;
        sNacelle.position.set(nx, 0.42, -0.32);
        shuttleGroup.add(sNacelle);

        const nacGlow = new THREE.Mesh(
          new THREE.BoxGeometry(0.08, 0.14, 2.65),
          new THREE.MeshBasicMaterial({ color: 0x60a5fa })
        );
        nacGlow.position.set(nx + Math.sign(nx) * 0.23, 0.44, -0.35);
        shuttleGroup.add(nacGlow);

        const sBussard = new THREE.Mesh(
          new THREE.SphereGeometry(0.25, 20, 16),
          new THREE.MeshBasicMaterial({ color: 0xef4444 })
        );
        sBussard.position.set(nx, 0.42, 1.42);
        shuttleGroup.add(sBussard);
      });
    };

    buildType6Shuttle(7.8, -83.5, -0.24); // Shuttlecraft El-Baz
    buildType6Shuttle(-1.8, -85.2, 0.12); // Shuttlecraft Goddard

    this.createConsoleStation(
      deck4, -5.2, 0, -78.5, 0.4, 2.1,
      'SHUTTLEBAY 1 FLIGHT OPERATIONS', 'shuttlebay', 'Main Shuttlebay'
    );

    const sbLight = new THREE.PointLight(0xf8fafc, 2.8, 38);
    sbLight.position.set(2.5, hHangar - 0.6, -80.0);
    deck4.add(sbLight);
    this.registerLight('deck4_shuttlebay', sbLight);
  }

  // ============================================================================
  // DECK 8: SENIOR QUARTERS, TRANSPORTER 1, SEPARATION AIRLOCK & BATTLE BRIDGE (3.80m–4.05m CEILINGS!)
  // ============================================================================
  buildDeck8SaucerAndBattleBridge() {
    const deck8Saucer = this.getDeckGroup(8, 'saucer');
    const deck8Stardrive = this.getDeckGroup(8, 'stardrive');
    const h = 3.80; // Spacious 3.80m ceiling height!
    const hBattle = 4.05; // Domed 4.05m Battle Bridge inside Cobra Head!

    // 1. SAUCER SIDE: ICONIC SPLAYED-RIB TNG CORRIDOR (h = 3.80m)
    this.buildRoomBox(
      deck8Saucer, 0, -36.0, 5.4, 23.0, h,
      this.carpetBurgundyMat, this.wallBeigeMat,
      { south: true, west: true, east: true }
    );

    // Sculpted Trapezoidal TNG Structural Corridor Arch Ribs
    for (let z = -45; z <= -26; z += 3.15) {
      [-2.35, 2.35].forEach(xSide => {
        const rib = new THREE.Mesh(this.corridorRibGeo, this.wallTaupeMat);
        rib.position.set(xSide, h / 2, z);
        if (xSide > 0) rib.rotation.y = Math.PI;
        deck8Saucer.add(rib);
      });
    }

    this.createTurboliftStation(deck8Saucer, 'door_deck8_saucer_tl', 0, -47.5, 0, 8, 'saucer', 'Deck 8 Saucer Turbolift');

    // 2. SENIOR OFFICER CREW QUARTERS (h = 3.80m with tall 2.35m slanted stateroom windows!)
    this.createSlidingDoor(deck8Saucer, 'door_deck8_quarters', -8.0, -41.5, Math.PI / 2, 8, 'saucer', 1.85, 2.68);

    const quarters = this.buildRoomBox(
      deck8Saucer, -16.5, -41.5, 14.5, 9.6, h,
      this.carpetSlateMat, this.wallBeigeMat,
      { east: true, west: true }
    );

    for (let i = -1; i <= 1; i++) {
      const qGlass = new THREE.Mesh(new THREE.PlaneGeometry(2.65, 2.40), this.glassMat);
      qGlass.position.set(-7.1, 1.88, i * 2.85);
      qGlass.rotation.y = Math.PI / 2;
      qGlass.rotation.z = -0.22;
      quarters.add(qGlass);

      const mullion = new THREE.Mesh(new THREE.BoxGeometry(0.32, h, 0.26), this.wallBeigeMat);
      mullion.position.set(-7.0, h / 2, i * 2.85 + 1.40);
      quarters.add(mullion);
    }

    const bed = new THREE.Mesh(new THREE.BoxGeometry(2.35, 0.50, 2.05), this.carpetBurgundyMat);
    bed.position.set(-3.2, 0.25, -3.2);
    quarters.add(bed);

    const headboard = new THREE.Mesh(new THREE.BoxGeometry(2.45, 1.25, 0.18), this.woodCherryMat);
    headboard.position.set(-3.2, 0.62, -4.18);
    quarters.add(headboard);

    const coffeeTable = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.46, 0.46, 28), this.glassMat);
    coffeeTable.position.set(-3.8, 0.23, 1.8);
    quarters.add(coffeeTable);

    this.createChair(quarters, -2.5, 0, 1.8, -Math.PI / 2, 'Stateroom Lounge Sofa', 'saucer', 8, { x: -6, z: 0 });
    this.createConsoleStation(quarters, 1.8, 0, -3.2, 0, 1.4, 'QUARTERS PERSONAL TERMINAL', 'environment', 'Senior Quarters');

    const qLight = new THREE.PointLight(0xffedd5, 1.8, 20);
    qLight.position.set(-16.5, h - 0.35, -41.5);
    deck8Saucer.add(qLight);
    this.registerLight('deck8_quarters', qLight);

    // 3. TRANSPORTER ROOM 1 (h = 3.80m!)
    this.createSlidingDoor(deck8Saucer, 'door_deck8_transporter', 8.0, -40.0, Math.PI / 2, 8, 'saucer', 1.85, 2.68);

    const transporterRoom = this.buildRoomBox(
      deck8Saucer, 14.8, -40.0, 12.8, 9.6, h,
      this.carpetBurgundyMat, this.wallBeigeMat,
      { west: true }
    );

    const padDais = new THREE.Mesh(new THREE.CylinderGeometry(2.90, 3.20, 0.32, 40), this.consoleBodyMat);
    padDais.position.set(2.8, 0.16, 0);
    transporterRoom.add(padDais);

    const padCap = new THREE.Mesh(new THREE.CylinderGeometry(2.95, 2.85, 0.34, 40), this.consoleBodyMat);
    padCap.position.set(2.8, h - 0.22, 0);
    transporterRoom.add(padCap);

    const emitterGlow = new THREE.Mesh(
      new THREE.CircleGeometry(2.65, 40),
      new THREE.MeshBasicMaterial({ color: 0xbae6fd, side: THREE.FrontSide })
    );
    emitterGlow.rotation.x = Math.PI / 2;
    emitterGlow.position.set(2.8, h - 0.40, 0);
    transporterRoom.add(emitterGlow);

    const bufferWall = new THREE.Mesh(
      new THREE.CylinderGeometry(3.30, 3.30, 2.85, 32, 1, true, 0, Math.PI),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.58, side: THREE.DoubleSide })
    );
    bufferWall.position.set(2.8, 1.75, 0);
    transporterRoom.add(bufferWall);

    const padGlowMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    for (let p = 0; p < 6; p++) {
      const a = (p / 6) * Math.PI * 2;
      const px = p === 0 ? 2.0 : 2.8 + Math.cos(a) * 1.48;
      const pz = p === 0 ? 0 : Math.sin(a) * 1.48;
      const padDisk = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.06, 28), padGlowMat);
      padDisk.position.set(px, 0.34, pz);
      transporterRoom.add(padDisk);
    }

    const partCount = 360;
    const pPos = new Float32Array(partCount * 3);
    for (let i = 0; i < partCount; i++) {
      const r = Math.random() * 2.25;
      const th = Math.random() * Math.PI * 2;
      pPos[i * 3] = 2.8 + Math.cos(th) * r;
      pPos[i * 3 + 1] = 0.35 + Math.random() * 2.85;
      pPos[i * 3 + 2] = Math.sin(th) * r;
    }
    const partGeo = new THREE.BufferGeometry();
    partGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    this.transporterParticles = new THREE.Points(
      partGeo,
      new THREE.PointsMaterial({ color: 0xfef08a, size: 0.16, transparent: true, opacity: 0.0 })
    );
    transporterRoom.add(this.transporterParticles);

    this.createConsoleStation(
      transporterRoom, -2.5, 0, 0, Math.PI / 2, 2.1,
      'TRANSPORTER CHIEF CONSOLE', 'transporter', 'Transporter Room 1'
    );

    const trLight = new THREE.PointLight(0xe0f2fe, 1.9, 18);
    trLight.position.set(14.8, h - 0.35, -40.0);
    deck8Saucer.add(trLight);
    this.registerLight('deck8_transporter', trLight);

    // 4. DECK 8 SEPARATION INTERFACE AIRLOCK
    this.createSlidingDoor(deck8Saucer, 'door_sep_saucer', 0, -24.8, 0, 8, 'saucer', 2.2, 2.68);
    this.createSlidingDoor(deck8Stardrive, 'door_sep_stardrive', 0, -18.5, 0, 8, 'stardrive', 2.2, 2.68);

    this.buildRoomBox(
      deck8Stardrive, 0, -14.5, 4.8, 8.0, 3.65,
      this.carpetSlateMat, this.metalGreyMat,
      { north: true, south: true }
    );

    // 5. BATTLE BRIDGE (h = 4.05m Tactical Dome inside Stardrive Cobra Head!)
    const battleBridge = this.buildRoomBox(
      deck8Stardrive, 0, -4.0, 12.8, 12.8, hBattle,
      this.carpetSlateMat, this.metalGreyMat,
      { north: true }
    );

    const bbVsFrame = new THREE.Mesh(new THREE.BoxGeometry(6.2, 2.85, 0.32), this.consoleBodyMat);
    bbVsFrame.position.set(0, 1.85, -5.65);
    battleBridge.add(bbVsFrame);

    const bbVsScreen = new THREE.Mesh(new THREE.PlaneGeometry(5.8, 2.48), this.battleViewscreenMat);
    bbVsScreen.position.set(0, 1.85, -5.46);
    battleBridge.add(bbVsScreen);
    this.registerInteractive(bbVsScreen, {
      type: 'terminal',
      appId: 'viewscreen',
      title: 'Battle Bridge Tactical Viewscreen',
      prompt: 'Configure Battle Bridge Viewscreen [Click / E]'
    });

    this.createCommandBucketChair(battleBridge, 0, 0.08, 0.5, 0, 'Battle Bridge Command Chair', 'stardrive', 8, true);
    this.createConsoleStation(battleBridge, -2.15, 0, -2.2, 0.2, 1.65, 'STARDRIVE HELM & WARP CONTROL', 'warp', 'Battle Bridge');
    this.createCommandBucketChair(battleBridge, -2.15, 0, -1.25, 0.2, 'Battle Bridge Helm Seat', 'stardrive', 8, false);

    this.createConsoleStation(battleBridge, 2.15, 0, -2.2, -0.2, 1.65, 'STARDRIVE TACTICAL & DOCKING', 'separation', 'Battle Bridge');
    this.createCommandBucketChair(battleBridge, 2.15, 0, -1.25, -0.2, 'Battle Bridge Tactical Seat', 'stardrive', 8, false);

    this.createConsoleStation(battleBridge, 0, 0, 4.4, Math.PI, 2.2, 'STARDRIVE ENGINEERING RELAY', 'power', 'Battle Bridge');
    this.createTurboliftStation(deck8Stardrive, 'door_battle_bridge_tl', 5.8, -0.5, -Math.PI / 2, 8, 'stardrive', 'Stardrive Battle Bridge Turbolift');

    const bbLight = new THREE.PointLight(0xe0f2fe, 2.0, 20);
    bbLight.position.set(0, hBattle - 0.35, -4.0);
    deck8Stardrive.add(bbLight);
    this.registerLight('deck8_battle_bridge', bbLight);
  }

  // ============================================================================
  // DECK 10: VAULTED 4.65m TEN FORWARD LOUNGE AT BOW SAUCER RIM (Floor Y = +35.00m)
  // Vaulted ceiling sweeps from 4.65m over the Bar down to 3.35m at the curved Bow Rim,
  // 100% inside the Saucer hull skin with tall slanted panoramic windows!
  // ============================================================================
  buildDeck10TenForward() {
    const deck10 = this.getDeckGroup(10, 'saucer');
    const hLobby = 3.80;
    const hVault = 4.65; // Soaring 4.65m Ten Forward vaulted ceiling!
    const hBowRim = 3.35; // Slopes gracefully to 3.35m at Z = -318.2m (staying 2.8m below outer saucer skin!)

    // Entrance Corridor & Turbolift Lobby (Z = -295.0 to -301.8)
    this.buildRoomBox(
      deck10, 0, -298.4, 8.2, 6.8, hLobby,
      this.carpetBurgundyMat, this.wallBeigeMat,
      { north: true }
    );
    this.createTurboliftStation(deck10, 'door_deck10_tl', -3.6, -297.2, Math.PI / 2, 10, 'saucer', 'Deck 10 Ten Forward Turbolift');
    this.createSlidingDoor(deck10, 'door_deck10_tenforward', 0, -301.8, 0, 10, 'saucer', 2.4, 2.75);

    // TEN FORWARD MAIN LOUNGE (Centered at Z = -308.1m, depth = 12.6m: Z = -301.8m to -314.4m, X = -14.0m to +14.0m — >3.5m inside hull skin on all sides!)
    const tfGroup = this.buildRoomBox(
      deck10, 0, -308.1, 28.0, 12.6, hVault,
      this.carpetSlateMat, this.wallTaupeMat,
      { north: true },
      { customCeiling: true }
    );

    // Aft Flat Vaulted Ceiling Section over the Bar & Upper Seating Tier (z = -1.3..+6.3 at y = 4.65m, FrontSide downward)
    const aftVaultCeil = new THREE.Mesh(new THREE.PlaneGeometry(28.0, 7.6), this.ceilingSoffitMat);
    aftVaultCeil.rotation.x = Math.PI / 2;
    aftVaultCeil.position.set(0, hVault, 2.5);
    tfGroup.add(aftVaultCeil);

    const aftVaultGlow = new THREE.Mesh(new THREE.PlaneGeometry(21.0, 4.2), this.ceilingLightMat);
    aftVaultGlow.rotation.x = Math.PI / 2;
    aftVaultGlow.position.set(0, hVault - 0.02, 2.5);
    tfGroup.add(aftVaultGlow);

    // Sloped Forward Panoramic Ceiling Vault (slopes from y = 4.65m at z = -1.3 down to y = 3.35m at z = -6.3!)
    const slopeLen = Math.hypot(5.0, hVault - hBowRim);
    const slopeAngle = Math.atan2(hVault - hBowRim, 5.0);
    const fwdSlopeCeil = new THREE.Mesh(new THREE.PlaneGeometry(28.0, slopeLen), this.ceilingSoffitMat);
    fwdSlopeCeil.rotation.x = Math.PI / 2 - slopeAngle;
    fwdSlopeCeil.position.set(0, (hVault + hBowRim) * 0.5, -3.8);
    tfGroup.add(fwdSlopeCeil);

    // Sweeping Curved Panoramic Bow Windows, Tall Slanted Mullions & Converging Ceiling Ribs!
    for (let i = -3; i <= 3; i++) {
      const mx = i * 3.85;
      const bowCurveZ = -6.2 + (i * i) * 0.08;

      const mullion = new THREE.Mesh(new THREE.BoxGeometry(0.36, hBowRim + 0.15, 0.78), this.wallBeigeMat);
      mullion.position.set(mx, hBowRim * 0.5, bowCurveZ);
      mullion.rotation.x = 0.26;
      tfGroup.add(mullion);

      if (i < 3) {
        const paneX = (i + 0.5) * 3.85;
        const paneZ = -6.25 + Math.pow(i + 0.5, 2) * 0.08;
        const pane = new THREE.Mesh(new THREE.PlaneGeometry(3.52, 3.05), this.glassMat);
        pane.position.set(paneX, 1.72, paneZ);
        pane.rotation.x = 0.26;
        pane.rotation.y = (i + 0.5) * 0.035;
        tfGroup.add(pane);
      }

      // Converging Overhead Ceiling Rib running from Bow Window Mullion back across the Vault!
      const ceilBeam = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.20, 12.2), this.wallBeigeMat);
      ceilBeam.position.set(mx * 0.94, hVault - 0.35, 0.0);
      ceilBeam.rotation.y = i * 0.025;
      ceilBeam.rotation.x = -0.085;
      tfGroup.add(ceilBeam);
    }

    // Iconic Sculpted Curved-End Illuminated Glass-Block Ten Forward Bar
    const barShape = new THREE.Shape();
    barShape.moveTo(-4.4, -0.80);
    barShape.lineTo(4.4, -0.80);
    barShape.absarc(4.4, 0, 0.80, -Math.PI / 2, Math.PI / 2, false);
    barShape.lineTo(-4.4, 0.80);
    barShape.absarc(-4.4, 0, 0.80, Math.PI / 2, -Math.PI / 2, false);

    const barCounterGeo = new THREE.ExtrudeGeometry(barShape, {
      depth: 1.08,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.03,
      bevelSegments: 4,
      curveSegments: 32
    });
    barCounterGeo.rotateX(-Math.PI / 2);
    const barCounter = new THREE.Mesh(
      barCounterGeo,
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: new THREE.Color(0x0284c7),
        emissiveIntensity: 0.68,
        roughness: 0.18
      })
    );
    barCounter.position.set(0, 0.02, 2.2);
    tfGroup.add(barCounter);

    const barTopGeo = new THREE.ExtrudeGeometry(barShape, {
      depth: 0.10,
      bevelEnabled: true,
      bevelThickness: 0.035,
      bevelSize: 0.06,
      bevelSegments: 4,
      curveSegments: 32
    });
    barTopGeo.rotateX(-Math.PI / 2);
    const barTop = new THREE.Mesh(barTopGeo, this.woodCherryMat);
    barTop.position.set(0, 1.13, 2.2);
    tfGroup.add(barTop);

    // Suspended Sculpted Canopy Floating beneath the 4.65m Vaulted Ceiling
    const barCanopy = new THREE.Mesh(barTopGeo, this.wallBeigeMat);
    barCanopy.scale.set(1.04, 2.2, 1.08);
    barCanopy.position.set(0, 3.65, 2.2);
    tfGroup.add(barCanopy);

    // Colorful Synthehol Bottles behind the Bar
    const bottleColors = [0x38bdf8, 0x22c55e, 0xf59e0b, 0xa855f7, 0xef4444];
    for (let b = -4; b <= 4; b++) {
      const bottle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.09, 0.38, 16),
        new THREE.MeshBasicMaterial({ color: bottleColors[Math.abs(b) % bottleColors.length] })
      );
      bottle.position.set(b * 0.82, 1.40, 2.62);
      tfGroup.add(bottle);
    }

    this.registerInteractive(barCounter, {
      type: 'replicator',
      item: { id: 'synthehol', name: 'Ten Forward Synthehol Ambrosia', color: 0x38bdf8 },
      prompt: 'Order Demonstration Beverage from Ten Forward Bar [Click / E]'
    });

    // Lounge Tables with Glowing Tabletop Lamps & Sculpted Chairs overlooking the Panoramic Windows
    const tablePositions = [
      { x: -8.4, z: -2.8 },
      { x: -3.8, z: -3.8 },
      { x: 3.8, z: -3.8 },
      { x: 8.4, z: -2.8 }
    ];
    tablePositions.forEach((tp, idx) => {
      const tbl = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.62, 0.74, 32), this.consoleBodyMat);
      tbl.position.set(tp.x, 0.37, tp.z);
      tfGroup.add(tbl);

      const lamp = new THREE.Mesh(
        new THREE.CylinderGeometry(0.14, 0.22, 0.26, 20),
        new THREE.MeshBasicMaterial({ color: 0xfef08a })
      );
      lamp.position.set(tp.x, 0.87, tp.z);
      tfGroup.add(lamp);

      this.createChair(
        tfGroup, tp.x, 0, tp.z + 1.25, 0,
        `Ten Forward Window Table ${idx + 1}`, 'saucer', 10, { x: tp.x, z: -12 }
      );
    });

    this.createConsoleStation(tfGroup, 11.4, 0, 2.0, -Math.PI / 2, 1.6, 'TEN FORWARD LOUNGE TERMINAL', 'logs', 'Ten Forward');

    const tfLight = new THREE.PointLight(0xffdca8, 2.4, 34);
    tfLight.position.set(0, hVault - 0.45, -308.0);
    deck10.add(tfLight);
    this.registerLight('deck10_ten_forward', tfLight);
  }

  // ============================================================================
  // DECK 11: 5.40m INTERACTIVE HOLODECK 4 PLAYGROUND (5 PLAYABLE WORLDS!) & 3.95m ASTROMETRICS
  // ============================================================================
  buildDeck11HolodeckAndScienceLab() {
    const deck11 = this.getDeckGroup(11, 'saucer');
    const h = 3.95; // Spacious 3.95m corridor & lab ceiling!
    const hHolo = 5.40; // Soaring 5.40m Holodeck soundstage!

    // 1. TNG HOLODECK ENTRANCE CORRIDOR & EXTERNAL LCARS WALL PEDESTAL
    const corr = this.buildRoomBox(
      deck11, 0, -138.0, 14.0, 9.0, h,
      this.carpetBurgundyMat, this.wallBeigeMat,
      { west: true, east: true }
    );
    for (let x = -5.5; x <= 5.5; x += 2.75) {
      [-4.15, 4.15].forEach(zSide => {
        const rib = new THREE.Mesh(this.corridorRibGeo, this.wallTaupeMat);
        rib.position.set(x, h / 2, zSide);
        rib.rotation.y = zSide < 0 ? -Math.PI / 2 : Math.PI / 2;
        corr.add(rib);
      });
    }
    this.createTurboliftStation(deck11, 'door_deck11_tl', 0, -142.2, 0, 11, 'saucer', 'Deck 11 Holodeck Turbolift');

    this.createConsoleStation(
      deck11, -6.2, 0, -135.4, Math.PI / 2, 1.15,
      'HOLODECK 4 OUTER WALL CONTROL', 'holodeck', 'Deck 11 Corridor'
    );

    // 2. HOLODECK 4 MAIN CHAMBER (hHolo = 5.40m!)
    this.createSlidingDoor(deck11, 'door_deck11_holodeck', -7.2, -138.0, Math.PI / 2, 11, 'saucer', 2.15, 2.75);

    const gridTex = getHolodeckGridTexture();
    gridTex.repeat.set(8, 6);
    const gridMat = new THREE.MeshBasicMaterial({ map: gridTex, side: THREE.DoubleSide });

    const holodeckRoom = this.buildRoomBox(
      deck11, -15.5, -138.0, 16.5, 15.0, hHolo,
      gridMat, gridMat,
      { east: true },
      { customCeiling: true }
    );
    const holoCeil = new THREE.Mesh(
      new THREE.PlaneGeometry(16.5, 15.0),
      new THREE.MeshBasicMaterial({ map: gridTex, side: THREE.FrontSide })
    );
    holoCeil.rotation.x = Math.PI / 2;
    holoCeil.position.y = hHolo - 0.04;
    holodeckRoom.add(holoCeil);

    // Iconic Metallic Holodeck Control Arch ("Computer, Arch")
    this.holodeckArchMesh = new THREE.Group();
    this.holodeckArchMesh.position.set(7.6, 0, 0);
    holodeckRoom.add(this.holodeckArchMesh);

    const archH = 3.65;
    [-1.90, 1.90].forEach(zSide => {
      const archPillar = new THREE.Mesh(new THREE.BoxGeometry(0.52, archH, 0.72), this.metalGreyMat);
      archPillar.position.set(0, archH / 2, zSide);
      this.holodeckArchMesh.add(archPillar);
    });
    const archHeader = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.44, 4.52), this.metalGreyMat);
    archHeader.position.set(0, archH - 0.22, 0);
    this.holodeckArchMesh.add(archHeader);

    this.createConsoleStation(
      this.holodeckArchMesh, -0.42, 0, 1.85, Math.PI / 2, 0.95,
      'HOLODECK 4 CONTROL ARCH', 'holodeck', 'Holodeck 4'
    );

    // PROGRAM 0 ('grid'): LASER GRID & HOLOGRAPHIC MATTER SPAWNER
    const gridEnv = new THREE.Group();
    holodeckRoom.add(gridEnv);
    this.holodeckEnvironmentGroups.set('grid', gridEnv);

    const emitterPed = new THREE.Mesh(
      new THREE.CylinderGeometry(1.35, 1.65, 0.42, 36),
      this.consoleBodyMat
    );
    emitterPed.position.set(0, 0.21, 0);
    gridEnv.add(emitterPed);

    const emitterRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.42, 0.06, 14, 40),
      new THREE.MeshBasicMaterial({ color: 0xfacc15 })
    );
    emitterRing.rotation.x = Math.PI / 2;
    emitterRing.position.set(0, 0.43, 0);
    gridEnv.add(emitterRing);

    const entHolo = new THREE.Group();
    entHolo.position.set(0, 1.65, 0);
    const hSaucer = new THREE.Mesh(
      new THREE.CylinderGeometry(1.65, 1.65, 0.20, 48),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.75, transparent: true, opacity: 0.85 })
    );
    hSaucer.scale.set(1.25, 1.0, 0.96);
    hSaucer.position.set(0, 0.35, -0.65);
    entHolo.add(hSaucer);
    const hHull = new THREE.Mesh(
      new THREE.CylinderGeometry(0.42, 0.32, 1.85, 32),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.75, transparent: true, opacity: 0.85 })
    );
    hHull.rotation.x = Math.PI / 2;
    hHull.position.set(0, -0.25, 0.55);
    entHolo.add(hHull);
    [-1.1, 1.1].forEach(nx => {
      const hNac = new THREE.Mesh(
        new THREE.CylinderGeometry(0.14, 0.14, 1.75, 24),
        new THREE.MeshBasicMaterial({ color: 0x60a5fa })
      );
      hNac.rotation.x = Math.PI / 2;
      hNac.position.set(nx, 0.05, 0.75);
      entHolo.add(hNac);
    });
    gridEnv.add(entHolo);
    this.holodeckSpawnerMeshes.set('enterprise_model', entHolo);

    const borgHolo = new THREE.Group();
    borgHolo.position.set(0, 1.75, 0);
    const borgCore = new THREE.Mesh(
      new THREE.BoxGeometry(1.75, 1.75, 1.75),
      new THREE.MeshStandardMaterial({ color: 0x14532d, emissive: 0x22c55e, emissiveIntensity: 0.65 })
    );
    const borgWire = new THREE.Mesh(
      new THREE.BoxGeometry(1.88, 1.88, 1.88),
      new THREE.MeshBasicMaterial({ color: 0x4ade80, wireframe: true })
    );
    borgHolo.add(borgCore, borgWire);
    gridEnv.add(borgHolo);
    this.holodeckSpawnerMeshes.set('borg_cube', borgHolo);

    const crystalHolo = new THREE.Group();
    crystalHolo.position.set(0, 1.75, 0);
    const cMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.35, 2),
      new THREE.MeshStandardMaterial({ color: 0xe0f2fe, emissive: 0x38bdf8, emissiveIntensity: 0.9, wireframe: true })
    );
    const cInner = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.85, 1),
      new THREE.MeshBasicMaterial({ color: 0xf472b6, transparent: true, opacity: 0.75 })
    );
    crystalHolo.add(cMesh, cInner);
    gridEnv.add(crystalHolo);
    this.holodeckSpawnerMeshes.set('crystalline_entity', crystalHolo);

    this.registerInteractive(emitterPed, {
      type: 'holodeck_action',
      action: 'cycle_hologram',
      prompt: 'Cycle Holographic Matter Projection (Enterprise-D / Borg Cube / Crystalline Entity) [Click / E]'
    });

    // PROGRAM 1 ('tos_bridge'): "RELICS" — SCOTTY'S 2266 USS ENTERPRISE NCC-1701 BRIDGE
    const tosEnv = new THREE.Group();
    holodeckRoom.add(tosEnv);
    this.holodeckEnvironmentGroups.set('tos_bridge', tosEnv);

    const tosOuterFloor = new THREE.Mesh(
      new THREE.CircleGeometry(6.8, 64),
      new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.85 })
    );
    tosOuterFloor.rotation.x = -Math.PI / 2;
    tosOuterFloor.position.y = 0.04;
    tosEnv.add(tosOuterFloor);

    const tosInnerPit = new THREE.Mesh(
      new THREE.CircleGeometry(4.2, 64),
      new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.9 })
    );
    tosInnerPit.rotation.x = -Math.PI / 2;
    tosInnerPit.position.y = 0.06;
    tosEnv.add(tosInnerPit);

    for (let s = 0; s < 10; s++) {
      if (s === 2) continue;
      const ang = (s / 10) * Math.PI * 2;
      const stGrp = new THREE.Group();
      stGrp.position.set(Math.sin(ang) * 6.1, 0, Math.cos(ang) * 6.1);
      stGrp.rotation.y = ang + Math.PI;
      tosEnv.add(stGrp);

      const wallPanel = new THREE.Mesh(
        new THREE.BoxGeometry(3.4, 3.25, 0.25),
        new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.5 })
      );
      wallPanel.position.y = 1.62;
      stGrp.add(wallPanel);

      const upperHood = new THREE.Mesh(
        new THREE.BoxGeometry(3.35, 0.62, 0.35),
        new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.4 })
      );
      upperHood.position.set(0, 2.75, 0.08);
      stGrp.add(upperHood);

      const screenColor = s % 2 === 0 ? 0xf59e0b : 0x38bdf8;
      const tosScreen = new THREE.Mesh(
        new THREE.PlaneGeometry(2.8, 0.76),
        new THREE.MeshBasicMaterial({ color: screenColor })
      );
      tosScreen.position.set(0, 1.92, 0.15);
      stGrp.add(tosScreen);

      const deskSlope = new THREE.Mesh(
        new THREE.BoxGeometry(3.2, 0.88, 0.65),
        new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4 })
      );
      deskSlope.position.set(0, 0.46, 0.28);
      stGrp.add(deskSlope);
    }

    const tosTlDoors = new THREE.Mesh(
      new THREE.BoxGeometry(1.80, 2.55, 0.32),
      new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.35 })
    );
    tosTlDoors.position.set(-4.2, 1.28, 4.2);
    tosTlDoors.rotation.y = 2.35;
    tosEnv.add(tosTlDoors);

    this.createChair(
      tosEnv, 0, 0.08, 0.4, Math.PI / 2,
      "Captain James T. Kirk's NCC-1701 Command Chair (2266)", 'saucer', 11, { x: -5, z: 0 }
    );

    const tosHelm = new THREE.Mesh(
      new THREE.BoxGeometry(1.35, 0.88, 2.65),
      new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.35 })
    );
    tosHelm.position.set(-2.35, 0.44, 0);
    tosEnv.add(tosHelm);

    const astroScope = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.24, 0.55, 20),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
    );
    astroScope.position.set(-2.35, 1.10, -0.35);
    astroScope.rotation.z = -0.35;
    tosEnv.add(astroScope);

    const whiskeyBottle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.11, 0.42, 20),
      new THREE.MeshPhysicalMaterial({ color: 0x22c55e, emissive: 0x15803d, emissiveIntensity: 0.65, transparent: true, opacity: 0.88 })
    );
    whiskeyBottle.position.set(-2.15, 1.08, 0.55);
    tosEnv.add(whiskeyBottle);
    this.registerInteractive(whiskeyBottle, {
      type: 'holodeck_action',
      action: 'scotty_toast',
      prompt: 'Raise a Toast with Scotty’s 2266 Aldebaran Whiskey ("To the Enterprise — No bloody A, B, C, or D!") [Click / E]'
    });

    const tosViewscreen = new THREE.Mesh(
      new THREE.PlaneGeometry(5.2, 2.65),
      this.mainViewscreenMat
    );
    tosViewscreen.position.set(-5.85, 1.92, 0);
    tosViewscreen.rotation.y = Math.PI / 2;
    tosEnv.add(tosViewscreen);

    // PROGRAM 2 ('klingon_arena'): WORF'S KLINGON MOK'BARA COMBAT ARENA
    const arenaEnv = new THREE.Group();
    holodeckRoom.add(arenaEnv);
    this.holodeckEnvironmentGroups.set('klingon_arena', arenaEnv);

    const arenaFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(16.0, 14.5),
      new THREE.MeshStandardMaterial({ color: 0x27171c, roughness: 0.92 })
    );
    arenaFloor.rotation.x = -Math.PI / 2;
    arenaFloor.position.y = 0.04;
    arenaEnv.add(arenaFloor);

    const klingonRing = new THREE.Mesh(
      new THREE.RingGeometry(2.4, 2.85, 48),
      new THREE.MeshBasicMaterial({ color: 0xef4444, side: THREE.DoubleSide })
    );
    klingonRing.rotation.x = -Math.PI / 2;
    klingonRing.position.y = 0.06;
    arenaEnv.add(klingonRing);

    const pillarCoords = [
      { x: -5.8, z: -5.2 }, { x: 0, z: -5.6 }, { x: 4.8, z: -5.2 },
      { x: -5.8, z: 5.2 },  { x: 0, z: 5.6 },  { x: 4.8, z: 5.2 }
    ];
    for (const pc of pillarCoords) {
      const pMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.55, 0.78, hHolo - 0.15, 8),
        new THREE.MeshStandardMaterial({ color: 0x1c1917, roughness: 0.85 })
      );
      pMesh.position.set(pc.x, (hHolo - 0.15) / 2, pc.z);
      arenaEnv.add(pMesh);

      const lavaStrip = new THREE.Mesh(
        new THREE.BoxGeometry(0.16, 3.2, 0.82),
        new THREE.MeshBasicMaterial({ color: 0xf97316 })
      );
      lavaStrip.position.set(pc.x, 1.85, pc.z);
      arenaEnv.add(lavaStrip);
    }

    const weaponRack = new THREE.Mesh(new THREE.BoxGeometry(0.45, 1.65, 2.4), this.woodCherryMat);
    weaponRack.position.set(-6.8, 0.82, 0);
    arenaEnv.add(weaponRack);

    const batlethBlade = new THREE.Mesh(
      new THREE.TorusGeometry(0.68, 0.055, 12, 32, Math.PI),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.88, roughness: 0.18 })
    );
    batlethBlade.rotation.y = Math.PI / 2;
    batlethBlade.position.set(-6.5, 1.30, 0);
    arenaEnv.add(batlethBlade);

    this.holodeckCombatTargets = [];
    const targetColors = [0xef4444, 0xf59e0b, 0x38bdf8];
    for (let k = 0; k < 3; k++) {
      const tgtGroup = new THREE.Group();
      const outerCage = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.68, 1),
        new THREE.MeshStandardMaterial({
          color: targetColors[k],
          emissive: targetColors[k],
          emissiveIntensity: 0.85,
          wireframe: true
        })
      );
      const innerCore = new THREE.Mesh(
        new THREE.SphereGeometry(0.38, 20, 20),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      tgtGroup.add(outerCage, innerCore);
      tgtGroup.position.set(-3.5 + k * 2.8, 1.55, (k % 2 === 0 ? -2.2 : 2.2));
      arenaEnv.add(tgtGroup);

      this.holodeckCombatTargets.push({
        group: tgtGroup,
        outerCage,
        baseX: -3.5 + k * 2.8,
        baseZ: (k % 2 === 0 ? -2.2 : 2.2),
        phase: k * 2.1,
        hitFlash: 0
      });

      this.registerInteractive(innerCore, {
        type: 'holodeck_action',
        action: 'strike_klingon_target',
        targetIndex: k,
        prompt: `Strike Klingon Combat Drone #${k + 1} (+100 Tactical Score) [Click / E]`
      });
      this.registerInteractive(outerCage, {
        type: 'holodeck_action',
        action: 'strike_klingon_target',
        targetIndex: k,
        prompt: `Strike Klingon Combat Drone #${k + 1} (+100 Tactical Score) [Click / E]`
      });
    }

    // PROGRAM 3 ('sherlock_noir'): 221B BAKER STREET / DIXON HILL MYSTERY STUDY
    const noirEnv = new THREE.Group();
    holodeckRoom.add(noirEnv);
    this.holodeckEnvironmentGroups.set('sherlock_noir', noirEnv);

    const noirFloor = new THREE.Mesh(new THREE.PlaneGeometry(15.8, 14.2), this.woodCherryMat);
    noirFloor.rotation.x = -Math.PI / 2;
    noirFloor.position.y = 0.04;
    noirEnv.add(noirFloor);

    const persianRug = new THREE.Mesh(new THREE.PlaneGeometry(10.5, 8.5), this.carpetBurgundyMat);
    persianRug.rotation.x = -Math.PI / 2;
    persianRug.position.y = 0.06;
    noirEnv.add(persianRug);

    const hearth = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.8, 0.85), this.woodCherryMat);
    hearth.position.set(0, 1.4, -6.4);
    noirEnv.add(hearth);

    const fireGlow = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 1.1, 0.35),
      new THREE.MeshBasicMaterial({ color: 0xf97316 })
    );
    fireGlow.position.set(0, 0.65, -6.1);
    noirEnv.add(fireGlow);

    const deskNoir = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.82, 1.45), this.woodCherryMat);
    deskNoir.position.set(-2.6, 0.41, -0.5);
    noirEnv.add(deskNoir);

    const bankerLamp = new THREE.Mesh(
      new THREE.ConeGeometry(0.24, 0.22, 20),
      new THREE.MeshBasicMaterial({ color: 0x22c55e })
    );
    bankerLamp.position.set(-2.6, 1.05, -0.8);
    noirEnv.add(bankerLamp);

    this.createChair(noirEnv, -2.6, 0, -1.65, 0, "Detective's Leather Study Chair", 'saucer', 11, { x: -2.6, z: 3 });

    const clues = [
      { id: 'moriarty_schematic', name: "Professor Moriarty's Holodeck Override Schematic", color: 0xfacc15, x: -2.1, y: 0.88, z: -0.35 },
      { id: 'maltese_statuette', name: 'The Obsidian Falcon Statuette (1941 San Francisco)', color: 0x38bdf8, x: 0.0, y: 1.55, z: -6.1 },
      { id: 'datas_violin', name: "Lt. Cmdr. Data's Stradivarius Violin & Calabash Pipe", color: 0xf97316, x: 2.8, y: 0.65, z: 2.4 },
      { id: 'encrypted_padd', name: 'Encrypted Starfleet Arch Access PADD', color: 0xa855f7, x: -4.8, y: 0.95, z: 3.8 }
    ];
    for (const c of clues) {
      const cluePed = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, c.y - 0.15, 20), this.consoleBodyMat);
      cluePed.position.set(c.x, (c.y - 0.15) / 2, c.z);
      noirEnv.add(cluePed);

      const clueMesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.26, 1),
        new THREE.MeshStandardMaterial({ color: c.color, emissive: c.color, emissiveIntensity: 0.85 })
      );
      clueMesh.position.set(c.x, c.y, c.z);
      noirEnv.add(clueMesh);

      this.registerInteractive(clueMesh, {
        type: 'holodeck_action',
        action: 'inspect_mystery_clue',
        clueId: c.id,
        clueName: c.name,
        prompt: `Inspect Mystery Clue: ${c.name} [Click / E]`
      });
    }

    // PROGRAM 4 ('stellar_cartography'): 3D INTERACTIVE GALAXY & WARP DESTINATION PLANETARIUM
    const stellarEnv = new THREE.Group();
    holodeckRoom.add(stellarEnv);
    this.holodeckEnvironmentGroups.set('stellar_cartography', stellarEnv);

    for (let r = 2.0; r <= 6.0; r += 2.0) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(r - 0.04, r + 0.04, 64),
        new THREE.MeshBasicMaterial({ color: 0x0284c7, side: THREE.DoubleSide })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.08;
      stellarEnv.add(ring);
    }

    const starSystems = [
      { id: 'earth',   name: 'Sector 001 — Earth & Spacedock',     color: 0x38bdf8, x:  0.0, y: 1.70, z:  0.0, radius: 0.74 },
      { id: 'vulcan',  name: '40 Eridani A — Vulcan',              color: 0xf97316, x: -4.2, y: 1.80, z: -3.2, radius: 0.60 },
      { id: 'qonos',   name: "Qo'noS — Klingon Homeworld",         color: 0x22c55e, x:  3.8, y: 1.80, z: -3.2, radius: 0.64 },
      { id: 'romulus', name: 'Romulus & Remus (Neutral Zone)',     color: 0x14b8a6, x: -4.2, y: 1.80, z:  3.2, radius: 0.60 },
      { id: 'bajor',   name: 'Bajor & Deep Space 9 Wormhole',      color: 0xc084fc, x:  3.8, y: 1.80, z:  3.2, radius: 0.64 }
    ];
    this.stellarPlanetMeshes = [];
    for (const sys of starSystems) {
      const sysGroup = new THREE.Group();
      sysGroup.position.set(sys.x, sys.y, sys.z);
      stellarEnv.add(sysGroup);

      const globe = new THREE.Mesh(
        new THREE.SphereGeometry(sys.radius, 32, 32),
        new THREE.MeshStandardMaterial({
          color: sys.color,
          emissive: sys.color,
          emissiveIntensity: 0.65,
          roughness: 0.28
        })
      );
      const orbitRing = new THREE.Mesh(
        new THREE.TorusGeometry(sys.radius * 1.45, 0.03, 14, 48),
        new THREE.MeshBasicMaterial({ color: 0xe0f2fe })
      );
      orbitRing.rotation.x = Math.PI / 2.4;
      sysGroup.add(globe, orbitRing);

      this.stellarPlanetMeshes.push({ group: sysGroup, globe, orbitRing });

      this.registerInteractive(globe, {
        type: 'holodeck_action',
        action: 'warp_to_star_system',
        systemId: sys.id,
        systemName: sys.name,
        prompt: `Engage Warp Drive to ${sys.name} (Updates Real Exterior Space View!) [Click / E]`
      });
    }

    // 3. ASTROMETRICS & SCIENCE LABORATORY (h = 3.95m!)
    this.createSlidingDoor(deck11, 'door_deck11_sciencelab', 7.2, -138.0, Math.PI / 2, 11, 'saucer', 1.85, 2.68);

    const sciLab = this.buildRoomBox(
      deck11, 14.5, -138.0, 14.0, 12.0, h,
      this.carpetSlateMat, this.wallBeigeMat,
      { west: true }
    );

    const starGlobe = new THREE.Mesh(
      new THREE.SphereGeometry(1.55, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true })
    );
    starGlobe.position.set(0, 1.85, 0);
    sciLab.add(starGlobe);

    this.createConsoleStation(sciLab, 0, 0, -3.5, 0, 2.2, 'ASTROMETRICS SENSOR ARRAY', 'sensors', 'Science Lab');

    const d11Light = new THREE.PointLight(0xe0f2fe, 2.4, 30);
    d11Light.position.set(-15.5, hHolo - 0.45, -138.0);
    deck11.add(d11Light);
    this.registerLight('deck11_holodeck', d11Light);
  }

  // ============================================================================
  // DECK 12: 3.90m PRIMARY SICKBAY, SURGICAL CLAMSHELL & CMO OFFICE
  // ============================================================================
  buildDeck12Sickbay() {
    const deck12 = this.getDeckGroup(12, 'saucer');
    const h = 3.90;

    this.buildRoomBox(deck12, 0, -138.0, 12.0, 8.0, h, this.carpetBurgundyMat, this.wallBeigeMat, { east: true });
    this.createTurboliftStation(deck12, 'door_deck12_tl', -4.2, -138.0, Math.PI / 2, 12, 'saucer', 'Deck 12 Medical Turbolift');
    this.createSlidingDoor(deck12, 'door_deck12_sickbay', 6.2, -138.0, Math.PI / 2, 12, 'saucer', 2.05, 2.68);

    const sickbay = this.buildRoomBox(
      deck12, 14.8, -138.0, 16.5, 13.5, h,
      this.carpetSlateMat, this.wallBeigeMat,
      { west: true }
    );

    // Sculpted Rounded Diagnostic Biobed 1 & Overhead Surgical Sensor Canopy
    const biobedBase = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.48, 0.72, 32), this.consoleBodyMat);
    biobedBase.scale.set(1.0, 1.0, 1.95);
    biobedBase.position.set(1.5, 0.36, 0);
    sickbay.add(biobedBase);

    const mattress = new THREE.Mesh(new THREE.CapsuleGeometry(0.48, 1.25, 12, 24), this.carpetBurgundyMat);
    mattress.rotation.x = Math.PI / 2;
    mattress.scale.set(1.05, 1.0, 0.28);
    mattress.position.set(1.5, 0.78, 0);
    sickbay.add(mattress);

    const bioLcars = createLCARSConsoleTexture('BIOBED 1 TELEMETRY // 68 BPM', '#38bdf8', '#22c55e');
    const bioMonitor = new THREE.Mesh(
      new THREE.PlaneGeometry(2.35, 0.95),
      new THREE.MeshBasicMaterial({ map: bioLcars.texture })
    );
    bioMonitor.position.set(1.5, 2.05, 1.40);
    bioMonitor.rotation.y = Math.PI;
    sickbay.add(bioMonitor);

    const patientTorso = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.24, 1.1, 10, 20),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.6 })
    );
    patientTorso.rotation.x = Math.PI / 2;
    patientTorso.position.set(1.5, 1.05, 0.1);
    sickbay.add(patientTorso);

    const archHoop = new THREE.Mesh(
      new THREE.TorusGeometry(0.88, 0.085, 14, 32, Math.PI),
      this.metalGreyMat
    );
    archHoop.position.set(1.5, 0.85, -0.35);
    sickbay.add(archHoop);

    this.sickbayScannerBeam = new THREE.Mesh(
      new THREE.PlaneGeometry(1.25, 0.85),
      new THREE.MeshBasicMaterial({ color: 0x22c55e, transparent: true, opacity: 0.0, side: THREE.DoubleSide })
    );
    this.sickbayScannerBeam.position.set(1.5, 1.22, 0);
    sickbay.add(this.sickbayScannerBeam);

    [-4.2, 4.2].forEach(zPos => {
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.50, 0.45, 0.74, 28), this.consoleBodyMat);
      b.scale.set(1.9, 1.0, 1.0);
      b.position.set(5.2, 0.37, zPos);
      sickbay.add(b);
    });

    this.createConsoleStation(
      sickbay, 1.5, 0, -2.1, 0, 1.65,
      'BIOBED 1 DIAGNOSTIC SCANNER', 'sickbay', 'Primary Sickbay'
    );

    const cmoGlassWall = new THREE.Mesh(new THREE.BoxGeometry(5.6, h - 0.4, 0.12), this.glassMat);
    cmoGlassWall.position.set(-3.5, (h - 0.4) / 2, -3.2);
    sickbay.add(cmoGlassWall);

    this.createConsoleStation(sickbay, -3.5, 0, -5.0, 0, 1.5, "DR. CRUSHER'S CMO DESK", 'sickbay', 'CMO Office');

    const sbLight = new THREE.PointLight(0xf0f9ff, 2.1, 24);
    sbLight.position.set(14.8, h - 0.35, -138.0);
    deck12.add(sbLight);
    this.registerLight('deck12_sickbay', sbLight);
  }

  // ============================================================================
  // DECK 36: SOARING 8.80m TWO-LEVEL MAIN ENGINEERING CATHEDRAL, WARP CORE & JEFFERIES TUBE
  // Positioned at Floor Y = -38.80m (Ceiling Y = -30.00m), Z = +55.0m right in the widest heart
  // of the Secondary Hull — 32m behind the Deflector Dish with 100% hull clearance!
  // ============================================================================
  buildDeck36MainEngineering() {
    const deck36 = this.getDeckGroup(36, 'stardrive');
    const hCorr = 3.85;
    const h = 8.80; // Soaring two-story TNG Main Engineering chamber!
    const mezzY = 4.20; // Walkable Upper Inspection Mezzanine Catwalk!

    // Entry Corridor & Stardrive Turbolift (Z = +32.0m to +41.0m)
    this.buildRoomBox(deck36, 0, 36.5, 7.8, 9.0, hCorr, this.carpetSlateMat, this.metalGreyMat, { south: true });
    this.createTurboliftStation(deck36, 'door_deck36_tl', -3.4, 35.0, Math.PI / 2, 36, 'stardrive', 'Main Engineering Turbolift');

    // Heavy Engineering Emergency Isolation Door at Z = +41.0m
    this.createSlidingDoor(deck36, 'door_deck36_isolation', 0, 41.0, 0, 36, 'stardrive', 2.85, 2.85);

    // MAIN ENGINEERING CATHEDRAL CHAMBER (X = -13 to +13, Z = +41.0 to +69.0, Height = 8.80m!)
    const engChamber = this.buildRoomBox(
      deck36, 0, 55.0, 26.0, 28.0, h,
      this.carpetSlateMat, this.metalGreyMat,
      { north: true }
    );

    // Structural Ribbed Engineering Wall Buttresses
    for (let z = -10.5; z <= 10.5; z += 7.0) {
      [-12.6, 12.6].forEach(xSide => {
        const buttress = new THREE.Mesh(new THREE.BoxGeometry(0.55, h - 0.4, 0.72), this.consoleBodyMat);
        buttress.position.set(xSide, (h - 0.4) / 2, z);
        engChamber.add(buttress);
      });
    }

    // 1. CENTRAL 8.80m MATTER / ANTIMATTER REACTION ASSEMBLY (WARP CORE) at World (X = 0, Z = +55.0m)
    const coreGroup = new THREE.Group();
    coreGroup.position.set(0, 0, 0.0); // Relative to engChamber (World Z = 55.0m!)
    engChamber.add(coreGroup);

    const coreColumn = new THREE.Mesh(
      new THREE.CylinderGeometry(1.58, 1.58, h, 48),
      new THREE.MeshPhysicalMaterial({
        color: 0x0284c7,
        emissive: new THREE.Color(0x0369a1),
        emissiveIntensity: 0.85,
        transparent: true,
        opacity: 0.68,
        roughness: 0.12
      })
    );
    coreColumn.position.y = h / 2;
    coreGroup.add(coreColumn);

    // Central Dilithium Crystal Articulation Chamber Hub (y = 3.25m)
    const dilithiumHub = new THREE.Mesh(
      new THREE.CylinderGeometry(2.18, 2.18, 1.48, 48),
      this.consoleBodyMat
    );
    dilithiumHub.position.y = 3.25;
    coreGroup.add(dilithiumHub);

    const dilithiumWindow = new THREE.Mesh(
      new THREE.CylinderGeometry(2.02, 2.02, 0.72, 48),
      new THREE.MeshBasicMaterial({ color: 0xe0f2fe })
    );
    dilithiumWindow.position.y = 3.25;
    coreGroup.add(dilithiumWindow);

    // Flanking 8.80m Golden EPS Power Transfer Trunks
    [-3.9, 3.9].forEach(sideX => {
      const epsTrunk = new THREE.Mesh(new THREE.BoxGeometry(0.68, h, 1.18), this.consoleBodyMat);
      epsTrunk.position.set(sideX, h / 2, 0);
      coreGroup.add(epsTrunk);

      const epsGlow = new THREE.Mesh(
        new THREE.PlaneGeometry(0.40, h * 0.88),
        new THREE.MeshBasicMaterial({ color: 0xf59e0b, side: THREE.DoubleSide })
      );
      epsGlow.position.set(sideX < 0 ? sideX + 0.35 : sideX - 0.35, h / 2, 0);
      epsGlow.rotation.y = Math.PI / 2;
      coreGroup.add(epsGlow);
    });

    // 18 Animated Cherenkov-Blue Magnetic Constriction Pulse Rings Spanning All 8.80m!
    for (let r = 0; r < 18; r++) {
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x7dd3fc });
      const ringMesh = new THREE.Mesh(new THREE.TorusGeometry(1.66, 0.10, 14, 48), ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.position.y = 0.45 + r * 0.46;
      coreGroup.add(ringMesh);
      this.warpCoreRings.push({ mesh: ringMesh, mat: ringMat, index: r });
    }

    // Protective Lower & Upper Safety Railings around the Warp Core
    [1.08, mezzY + 1.08].forEach(railY => {
      const railRing = new THREE.Mesh(new THREE.TorusGeometry(3.35, 0.07, 12, 48), this.metalGreyMat);
      railRing.rotation.x = Math.PI / 2;
      railRing.position.y = railY;
      coreGroup.add(railRing);
    });

    this.warpCoreLight = new THREE.PointLight(0x38bdf8, 4.2, 38);
    this.warpCoreLight.position.set(0, 3.4, 0);
    coreGroup.add(this.warpCoreLight);

    // 2. SCULPTED OCTAGONAL CHIEF ENGINEER'S "POOL TABLE" SITUATION CONSOLE (z = -6.5 -> World Z = +48.5m)
    const poolTable = new THREE.Mesh(new THREE.CylinderGeometry(2.15, 1.85, 0.94, 8), this.consoleBodyMat);
    poolTable.scale.set(1.05, 1.0, 0.68);
    poolTable.rotation.y = Math.PI / 8;
    poolTable.position.set(0, 0.47, -6.5);
    engChamber.add(poolTable);

    const poolCove = new THREE.Mesh(new THREE.CylinderGeometry(1.75, 1.82, 0.18, 8), this.coveGlowMat);
    poolCove.scale.set(1.05, 1.0, 0.68);
    poolCove.rotation.y = Math.PI / 8;
    poolCove.position.set(0, 0.10, -6.5);
    engChamber.add(poolCove);

    const poolScreen = createLCARSConsoleTexture('WARP CORE & INTERMIX CONTROL', '#38bdf8', '#f59e0b');
    this.consoleDisplays.push({ ...poolScreen, title: 'Pool Table Console', appId: 'warp' });

    const poolTop = new THREE.Mesh(
      new THREE.PlaneGeometry(3.35, 1.82),
      new THREE.MeshBasicMaterial({ map: poolScreen.texture })
    );
    poolTop.rotation.x = -Math.PI / 2;
    poolTop.rotation.z = Math.PI;
    poolTop.position.set(0, 0.955, -6.5);
    engChamber.add(poolTop);

    this.registerInteractive(poolTop, {
      type: 'terminal',
      appId: 'warp',
      title: 'Main Engineering Pool Table (Warp Core & Power)',
      prompt: 'Operate Engineering Pool Table Console [Click / E]'
    });

    // 3. CRISP 2048×1024 MASTER SYSTEMS DISPLAY (MSD) ON AFT ENGINEERING BULKHEAD (World Z = +68.6m)
    this.msdDisplay = createMSDTexture();
    const msdBezel = new THREE.Mesh(new THREE.BoxGeometry(12.9, 5.35, 0.22), this.consoleBodyMat);
    msdBezel.position.set(0, 2.75, 13.72);
    engChamber.add(msdBezel);

    const msdMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(12.4, 4.95),
      new THREE.MeshBasicMaterial({ map: this.msdDisplay.texture })
    );
    msdMesh.position.set(0, 2.75, 13.58);
    msdMesh.rotation.y = Math.PI;
    engChamber.add(msdMesh);

    this.registerInteractive(msdMesh, {
      type: 'terminal',
      appId: 'power',
      title: 'Master Systems Display (MSD)',
      prompt: 'Inspect Master Systems Display & EPS Power [Click / E]'
    });

    // 4. UPPER INSPECTION MEZZANINE CATWALK & WALKABLE STAIRS (y = +4.20m -> 4.60m headroom above catwalk!)
    const mezzanineFloor = new THREE.Mesh(
      new THREE.RingGeometry(4.35, 10.6, 56),
      new THREE.MeshStandardMaterial({ color: 0x7b8694, roughness: 0.42, metalness: 0.55, side: THREE.DoubleSide })
    );
    mezzanineFloor.rotation.x = -Math.PI / 2;
    mezzanineFloor.position.set(0, mezzY, 0.0);
    engChamber.add(mezzanineFloor);

    const mezzOuterRail = new THREE.Mesh(new THREE.TorusGeometry(10.55, 0.06, 12, 56), this.wallBeigeMat);
    mezzOuterRail.rotation.x = Math.PI / 2;
    mezzOuterRail.position.set(0, mezzY + 1.05, 0.0);
    engChamber.add(mezzOuterRail);

    // 18-Step Walkable Starboard Engineering Staircase (x = 7.4, z = -7.0..+1.5 -> World Z = 48.0..56.5)
    for (let step = 0; step < 18; step++) {
      const tread = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.16, 0.52), this.metalGreyMat);
      tread.position.set(7.4, (step + 1) * (mezzY / 18), -7.0 + step * 0.48);
      engChamber.add(tread);
    }

    // Upper Catwalk Warp Constriction Diagnostic Console
    this.createConsoleStation(
      engChamber, -6.2, mezzY, 0.0, Math.PI / 2, 1.75,
      'UPPER MEZZANINE MAGNETIC COIL MONITOR', 'warp', 'Engineering Upper Catwalk'
    );

    // 5. WALKABLE JEFFERIES TUBE SERVICE CONDUIT (Port Wall of Engineering: X = -12.8 to -19.5, World Z = +55.0m)
    this.createSlidingDoor(deck36, 'door_deck36_jefferies', -12.8, 55.0, Math.PI / 2, 36, 'stardrive', 1.55, 2.05);

    const jefferiesTunnel = new THREE.Group();
    jefferiesTunnel.position.set(-16.5, 0, 55.0);
    deck36.add(jefferiesTunnel);

    const jFloor = new THREE.Mesh(new THREE.PlaneGeometry(7.2, 2.4), this.metalGreyMat);
    jFloor.rotation.x = -Math.PI / 2;
    jFloor.position.y = 0.05;
    jefferiesTunnel.add(jFloor);

    for (let r = -3.0; r <= 3.0; r += 1.5) {
      const hoop = new THREE.Mesh(new THREE.TorusGeometry(1.38, 0.12, 12, 24), this.consoleBodyMat);
      hoop.rotation.y = Math.PI / 2;
      hoop.position.set(r, 1.32, 0);
      jefferiesTunnel.add(hoop);
    }

    this.createConsoleStation(
      jefferiesTunnel, -2.5, 0, 0, Math.PI / 2, 1.1,
      'JEFFERIES TUBE EPS JUNCTION 36-A', 'power', 'Jefferies Tube Conduit'
    );

    const engLight = new THREE.PointLight(0xe0f2fe, 2.6, 40);
    engLight.position.set(0, h - 0.6, 52.0);
    deck36.add(engLight);
    this.registerLight('deck36_engineering', engLight);
  }

  // ============================================================================
  // MODULAR 42-DECK HONEYCOMB CUTAWAY ARCHITECTURE (100% HULL-SAFE STUDIO ENVELOPE!)
  // ============================================================================
  buildStructuralDeckStack() {
    const lcarsAmberStripMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const lcarsCyanStripMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const labFloorMat = new THREE.MeshStandardMaterial({ color: 0x4b637a, roughness: 0.75 });
    const cargoFloorMat = new THREE.MeshStandardMaterial({ color: 0x6e7885, roughness: 0.65, metalness: 0.25 });
    const jefferiesTubeMat = new THREE.MeshStandardMaterial({ color: 0x8a96a3, roughness: 0.4, metalness: 0.5 });

    for (const dSpec of ALL_DECKS) {
      const dg = this.getDeckGroup(dSpec.deck, dSpec.section);
      const honeycombGroup = new THREE.Group();
      honeycombGroup.name = `Honeycomb_Cutaway_Deck_${dSpec.deck}`;
      honeycombGroup.visible = false;

      const isSaucer = dSpec.section === 'saucer';
      const keelTaper = (!isSaucer && dSpec.deck >= 38)
        ? Math.max(0.42, 1.0 - (dSpec.deck - 37) * 0.12)
        : 1.0;

      const rx = isSaucer
        ? Math.min(218, dSpec.radiusX * 0.86)
        : Math.min(54, dSpec.radiusX * 0.84 * keelTaper);
      const rz = isSaucer
        ? Math.min(168, dSpec.radiusZ * 0.86)
        : Math.min(82, dSpec.radiusZ * 0.84 * keelTaper);
      const cz = isSaucer ? -139.0 : dSpec.centerZ;

      honeycombGroup.position.set(0, 0.04, cz);

      const innerR = dSpec.isHero ? Math.min(rx * 0.45, 34.0) : rx * 0.14;
      if (rx > innerR + 4.0) {
        const ringGeo = new THREE.RingGeometry(innerR, rx, 56, 2);
        ringGeo.rotateX(-Math.PI / 2);
        ringGeo.scale(1.0, 1.0, rz / rx);
        const floorMat = (dSpec.deck % 3 === 0)
          ? labFloorMat
          : (dSpec.deck % 2 === 0 ? this.carpetBurgundyMat : this.carpetSlateMat);
        honeycombGroup.add(new THREE.Mesh(ringGeo, floorMat));

        const midR = innerR + (rx - innerR) * 0.54;
        const corrWallGeo = new THREE.CylinderGeometry(midR, midR, 2.35, 48, 1, true);
        corrWallGeo.scale(1.0, 1.0, rz / rx);
        const corrWall = new THREE.Mesh(corrWallGeo, this.wallBeigeMat);
        corrWall.position.y = 1.18;
        honeycombGroup.add(corrWall);

        const lcarsRingGeo = new THREE.CylinderGeometry(midR + 0.15, midR + 0.15, 0.22, 48, 1, true);
        lcarsRingGeo.scale(1.0, 1.0, rz / rx);
        const lcarsRing = new THREE.Mesh(
          lcarsRingGeo,
          dSpec.deck % 2 === 0 ? lcarsAmberStripMat : lcarsCyanStripMat
        );
        lcarsRing.position.y = 1.54;
        honeycombGroup.add(lcarsRing);

        const numPartitions = isSaucer ? Math.min(24, Math.max(8, Math.floor(rx / 9))) : 10;
        const spanLen = (rx - innerR) * 0.88;
        const midSpan = innerR + (rx - innerR) * 0.50;
        const partGeo = new THREE.BoxGeometry(spanLen, 2.35, 0.34);

        for (let p = 0; p < numPartitions; p++) {
          const angle = (p / numPartitions) * Math.PI * 2 + (dSpec.deck * 0.13);
          const px = Math.cos(angle) * midSpan;
          const pz = Math.sin(angle) * midSpan * (rz / rx);
          const wall = new THREE.Mesh(
            partGeo,
            p % 3 === 0 ? this.wallTaupeMat : this.wallBeigeMat
          );
          wall.position.set(px, 1.18, pz);
          wall.rotation.y = -angle * (rz / rx);
          honeycombGroup.add(wall);
        }
      }

      if (dSpec.deck % 2 === 0) {
        [-1, 1].forEach(side => {
          const tlShaft = new THREE.Mesh(
            new THREE.CylinderGeometry(1.45, 1.45, DECK_HEIGHT, 20),
            jefferiesTubeMat
          );
          tlShaft.position.set(side * Math.min(rx * 0.38, 42.0), DECK_HEIGHT * 0.5, 0);
          honeycombGroup.add(tlShaft);
        });
      }
      if (isSaucer && dSpec.deck >= 5 && dSpec.deck <= 12 && dSpec.deck % 2 === 1) {
        [-1, 1].forEach(side => {
          const jTube = new THREE.Mesh(
            new THREE.CylinderGeometry(0.95, 0.95, rx * 0.72, 16),
            cargoFloorMat
          );
          jTube.rotation.z = Math.PI / 2;
          jTube.position.set(side * (rx * 0.48), 1.65, -rz * 0.18);
          jTube.rotation.y = side * 0.32;
          honeycombGroup.add(jTube);
        });
      }

      dg.add(honeycombGroup);
      this.structuralPlates.push(honeycombGroup);
    }
  }

  // Populates ANY of the 42 decks with a spacious 3.75m TNG corridor, splayed ribs, turbolift, and dual compartments!
  ensureModularDeckPopulated(deckNum) {
    const dSpec = ALL_DECKS[deckNum - 1];
    if (!dSpec || dSpec.isHero) return;

    const dg = this.getDeckGroup(deckNum, dSpec.section);
    if (dg.userData.populated) return;
    dg.userData.populated = true;

    const cz = dSpec.centerZ;
    const h = 3.75; // Spacious 3.75m ceiling height on all 42 decks!

    const corrRoom = this.buildRoomBox(
      dg, 0, cz, 10.2, 7.6, h,
      dSpec.section === 'saucer' ? this.carpetBurgundyMat : this.carpetSlateMat,
      dSpec.section === 'saucer' ? this.wallBeigeMat : this.metalGreyMat,
      { west: true, east: true }
    );

    [-3.2, 3.2].forEach(rx => {
      const rib = new THREE.Mesh(this.corridorRibGeo, this.wallTaupeMat);
      rib.position.set(rx, h / 2, 3.45);
      rib.rotation.y = Math.PI / 2;
      corrRoom.add(rib);
    });

    this.createTurboliftStation(
      dg, `door_deck${deckNum}_tl`, 0, cz - 3.4, 0, deckNum, dSpec.section,
      `Deck ${deckNum} Turbolift`
    );

    const portRoom = this.buildRoomBox(
      dg, -8.8, cz, 7.8, 7.8, h,
      this.carpetSlateMat, this.wallBeigeMat,
      { east: true }
    );
    this.createConsoleStation(
      portRoom, -1.9, 0, 0, Math.PI / 2, 1.6,
      `${dSpec.facilities[0] || dSpec.name}`, 'logs', `Deck ${deckNum}`
    );

    const stbdRoom = this.buildRoomBox(
      dg, 8.8, cz, 7.8, 7.8, h,
      this.carpetBurgundyMat, this.wallBeigeMat,
      { west: true }
    );
    this.createConsoleStation(
      stbdRoom, 1.9, 0, 0, -Math.PI / 2, 1.6,
      `${dSpec.facilities[1] || dSpec.purpose}`, 'environment', `Deck ${deckNum}`
    );

    const light = new THREE.PointLight(0xfff1dc, 1.9, 26);
    light.position.set(0, h - 0.35, cz);
    dg.add(light);
  }

  setExplodedFactor(exploded) {
    for (const [, group] of this.deckGroups) {
      const baseY = group.userData.baseY;
      const offsetFromMid = baseY - 10.0;
      group.position.y = exploded ? baseY + offsetFromMid * 0.65 : baseY;
    }
  }

  update(dt, time) {
    const s = this.shipState;

    // 0. Guarantee Zero Exterior Hull Bleed in Solid Hull Mode
    const isCutawayOrExploded = s.cutawayMode !== 'off';
    for (const p of this.structuralPlates) {
      p.visible = isCutawayOrExploded;
    }
    const isExternalSolidView = (s.cameraMode === 'exterior_orbit' || s.cameraMode === 'free_flight') && !isCutawayOrExploded;
    for (const [key, dg] of this.deckGroups.entries()) {
      if (isExternalSolidView) {
        dg.visible = (key === 'saucer_deck_1' || key === 'saucer_deck_10');
      } else {
        dg.visible = true;
      }
    }

    // 1. Update Room Lighting based on Alert State, Master Brightness & Room Toggles
    const isRed = s.alertState === 'red';
    const isYellow = s.alertState === 'yellow';
    const masterB = s.lighting.masterBrightness;

    for (const [roomId, lights] of this.roomLights.entries()) {
      const roomOn = s.lighting.roomLights[roomId] !== false;
      for (const l of lights) {
        if (!roomOn) {
          l.intensity = 0.08;
        } else if (isRed) {
          l.color.setHex(0xff3b30);
          l.intensity = (1.2 + 0.7 * Math.sin(time * 5.0)) * masterB;
        } else if (isYellow) {
          l.color.setHex(0xfbbf24);
          l.intensity = 1.75 * masterB;
        } else {
          l.color.setHex(0xfff1dc);
          l.intensity = 2.1 * masterB;
        }
      }
    }

    // 2. Animate 18 Engineering Warp Core Magnetic Constriction Rings converging on the Dilithium Chamber
    const wf = s.warpCore.online ? s.warpCore.warpFactor : 0;
    const pulseSpeed = 1.5 + wf * 0.85;
    for (const rObj of this.warpCoreRings) {
      const wave = Math.sin(time * pulseSpeed * 4.0 - Math.abs(rObj.index - 6.5) * 0.72);
      if (wave > 0.35 && s.warpCore.online) {
        rObj.mat.color.setHex(0xffffff);
        rObj.mesh.scale.setScalar(1.06);
      } else {
        rObj.mat.color.setHex(s.warpCore.online ? 0x0284c7 : 0x334155);
        rObj.mesh.scale.setScalar(1.0);
      }
    }
    if (this.warpCoreLight) {
      this.warpCoreLight.intensity = s.warpCore.online
        ? 3.2 + Math.sin(time * pulseSpeed * 4.0) * 1.5
        : 0.2;
    }

    // 3. Swim Livingston the Lionfish in Captain Picard's Ready Room Aquarium
    if (this.livingstonFish) {
      this.livingstonFish.position.x = -1.8 + Math.cos(time * 1.4) * 0.22;
      this.livingstonFish.position.z = -2.7 + Math.sin(time * 1.4) * 0.22;
      this.livingstonFish.rotation.y = -time * 1.4;
    }

    // 4. Sickbay Biobed Diagnostic Laser Scan Animation
    if (this.sickbayScannerBeam) {
      if (s.sickbay.scanning) {
        this.sickbayScannerBeam.material.opacity = 0.55;
        this.sickbayScannerBeam.position.z = Math.sin(time * 3.2) * 0.85;
      } else {
        this.sickbayScannerBeam.material.opacity = 0.0;
      }
    }

    // 5. Transporter Particle Shimmer Effect
    if (this.transporterParticles) {
      if (s.transporter.energizing) {
        this.transporterParticles.material.opacity = Math.sin(s.transporter.progress * Math.PI);
        this.transporterParticles.rotation.y += dt * 3.5;
      } else {
        this.transporterParticles.material.opacity = 0.0;
      }
    }

    // 6. Holodeck Active Program Visibility & Interactive Program Animations
    for (const [progKey, group] of this.holodeckEnvironmentGroups.entries()) {
      group.visible = (s.holodeck.activeProgram === progKey);
    }
    if (this.holodeckArchMesh) {
      this.holodeckArchMesh.visible = s.holodeck.archVisible;
    }
    for (const [hKey, hMesh] of this.holodeckSpawnerMeshes.entries()) {
      hMesh.visible = (s.holodeck.spawnedHologram === hKey);
      if (hMesh.visible) {
        hMesh.rotation.y = time * 0.65;
        hMesh.position.y = 1.68 + Math.sin(time * 2.2) * 0.08;
      }
    }
    if (s.holodeck.activeProgram === 'klingon_arena') {
      const speedMult = 1.0 + (s.holodeck.klingonLevel - 1) * 0.35;
      for (const tgt of this.holodeckCombatTargets) {
        tgt.group.position.x = tgt.baseX + Math.sin(time * 1.8 * speedMult + tgt.phase) * 1.35;
        tgt.group.position.y = 1.45 + Math.cos(time * 2.4 * speedMult + tgt.phase) * 0.42;
        tgt.group.position.z = tgt.baseZ + Math.cos(time * 1.5 * speedMult + tgt.phase) * 1.45;
        tgt.outerCage.rotation.x += dt * 2.2;
        tgt.outerCage.rotation.y += dt * 3.1;
        if (tgt.hitFlash > 0) {
          tgt.hitFlash = Math.max(0, tgt.hitFlash - dt * 3.0);
          tgt.group.scale.setScalar(1.0 + tgt.hitFlash * 0.6);
        } else {
          tgt.group.scale.setScalar(1.0);
        }
      }
    }
    if (s.holodeck.activeProgram === 'stellar_cartography') {
      for (const sp of this.stellarPlanetMeshes) {
        sp.globe.rotation.y = time * 0.55;
        sp.orbitRing.rotation.z = time * 0.35;
      }
    }

    // 7. Shuttlebay Forcefield Shimmer
    if (this.shuttlebayForcefieldMesh) {
      this.shuttlebayForcefieldMesh.visible = s.shuttlebay.forcefieldActive;
      this.shuttlebayForcefieldMesh.material.opacity = 0.14 + 0.06 * Math.sin(time * 4.0);
    }

    // 8. Update 3D Door Leaf Positions & Status LEDs from Central ShipState
    for (const [doorId, dMesh] of this.doorMeshes.entries()) {
      const dState = s.doors[doorId];
      const openAmt = dState ? dState.openAmount : 0;
      const offset = (dMesh.width / 2) * 0.92 * openAmt;
      dMesh.leftLeaf.position.x = -dMesh.width / 4 - offset;
      dMesh.rightLeaf.position.x = dMesh.width / 4 + offset;

      if (dState) {
        if (dState.state === 'locked') dMesh.statusLedMat.color.setHex(0xef4444);
        else if (dState.state === 'obstructed') dMesh.statusLedMat.color.setHex(0xf59e0b);
        else if (dState.state === 'open') dMesh.statusLedMat.color.setHex(0x22c55e);
        else dMesh.statusLedMat.color.setHex(0x38bdf8);
      }
    }
  }
}
