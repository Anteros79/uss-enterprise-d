// USS Enterprise NCC-1701-D — Multi-Mode Camera & Section-Local First-Person Controller
// Supports:
// 1. Exterior Orbit Mode (orbit complete ship, Saucer only, Stardrive only, or close-up inspection landmarks)
// 2. Interior Walk Mode (section-local coordinates so artificial gravity stays aligned to each hull section
//    during Saucer Separation, with door collision, Engineering mezzanine stairs, Jefferies tube crawl,
//    sitting at stations, and cross-hull Deck 8 airlock transition when Docked)
// 3. Free-Flight Inspection Mode (unconstrained 3D inspection from orbital scale down to window close-ups)
// 4. Guided Ship Tour Mode (automated multi-stop cinematic tour of exterior & interior landmarks)

import * as THREE from 'three';
import { HERO_ROOMS, ALL_DECKS, EXTERIOR_INSPECTION_POINTS, getDeckElevation, getWalkableDeckFloorY } from '../data/DeckRegistry.js';
import { soundManager } from '../audio/SoundManager.js';

export class PlayerController {
  constructor(camera, domElement, exterior, interior, shipState) {
    this.camera = camera;
    this.domElement = domElement;
    this.exterior = exterior;
    this.interior = interior;
    this.shipState = shipState;

    // Section-local player coordinates (in meters relative to saucerAssembly or stardriveAssembly)
    this.localPos = new THREE.Vector3(0, getWalkableDeckFloorY(1, 'saucer') + 0.14, -137.5);
    this.yaw = 0; // 0 looks toward -Z (Forward)
    this.pitch = 0;
    this.eyeHeight = 1.72;

    // Exterior Orbit spherical coordinates
    this.orbitTarget = new THREE.Vector3(0, 12, -40);
    this.orbitRadius = 560;
    this.orbitTheta = 0.68; // Horizontal azimuth
    this.orbitPhi = 1.28;   // Vertical polar angle
    this.orbitTrackSection = 'both'; // 'both' | 'saucer' | 'stardrive'
    this.orbitLerpTarget = null;

    // Free-flight camera state
    this.freePos = new THREE.Vector3(260, 95, -340);
    this.freeYaw = 0.65;
    this.freePitch = -0.18;

    // Guided Tour state
    this.tourIndex = 0;
    this.tourTimer = 0;
    this.tourStops = [
      { mode: 'exterior_orbit', presetId: 'ext_three_quarter', duration: 7.0, label: 'Stop 1/8: USS Enterprise NCC-1701-D — Three-Quarter Hero View' },
      { mode: 'exterior_orbit', presetId: 'ext_ten_forward', duration: 6.5, label: 'Stop 2/8: Forward Saucer Rim — Ten Forward Panoramic Windows' },
      { mode: 'interior_walk', roomId: 'deck1_bridge', duration: 8.0, label: 'Stop 3/8: Deck 1 — Main Bridge, Conn, Ops & Tactical Horseshoe' },
      { mode: 'interior_walk', roomId: 'deck1_ready_room', duration: 6.5, label: "Stop 4/8: Deck 1 — Captain Picard's Ready Room & Livingston" },
      { mode: 'interior_walk', roomId: 'deck10_ten_forward', duration: 7.0, label: 'Stop 5/8: Deck 10 — Ten Forward Lounge Looking Out into Space' },
      { mode: 'interior_walk', roomId: 'deck11_holodeck', duration: 8.0, label: 'Stop 6/8: Deck 11 — Holodeck 4 Interactive Simulation Matrix' },
      { mode: 'interior_walk', roomId: 'deck36_engineering', duration: 8.0, label: 'Stop 7/8: Deck 36 — Main Engineering & Matter/Antimatter Warp Core' },
      { mode: 'interior_walk', roomId: 'deck8_battle_bridge', duration: 8.0, label: 'Stop 8/8: Deck 8 — Stardrive Battle Bridge & Separation Interface' }
    ];

    // Input state
    this.keys = new Set();
    this.isDragging = false;
    this.lastPointer = { x: 0, y: 0 };
    this.hoveredInteractive = null;
    this.raycaster = new THREE.Raycaster();
    this.pointerNDC = new THREE.Vector2(0, 0);

    // 3D Held Prop Visual attached to Camera
    this.heldPropGroup = new THREE.Group();
    this.camera.add(this.heldPropGroup);

    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;
      const code = e.code;
      this.keys.add(code);

      if (code === 'KeyE') {
        this.triggerPrimaryInteraction();
      } else if (code === 'KeyC' && this.shipState.cameraMode === 'interior_walk') {
        this.shipState.crawlMode = !this.shipState.crawlMode;
        this.shipState.seatedStation = null;
        soundManager.playLCARSChirp('select');
        this.shipState.emit('change', this.shipState);
      } else if (code === 'KeyG' && this.shipState.carriedProp) {
        this.dropCarriedProp();
      } else if (code === 'Space' && this.shipState.seatedStation) {
        this.standUp();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });

    this.domElement.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 && e.button !== 2) return;
      soundManager.init();
      this.isDragging = true;
      this.dragMoved = false;
      this.lastPointer.x = e.clientX;
      this.lastPointer.y = e.clientY;
    });

    window.addEventListener('pointermove', (e) => {
      const rect = this.domElement.getBoundingClientRect();
      this.pointerNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.pointerNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (!this.isDragging) return;
      const dx = e.clientX - this.lastPointer.x;
      const dy = e.clientY - this.lastPointer.y;
      if (Math.hypot(dx, dy) > 3) this.dragMoved = true;
      this.lastPointer.x = e.clientX;
      this.lastPointer.y = e.clientY;

      const mode = this.shipState.cameraMode;
      if (mode === 'exterior_orbit') {
        this.orbitLerpTarget = null;
        this.orbitTheta -= dx * 0.0055;
        this.orbitPhi = Math.max(0.12, Math.min(Math.PI - 0.12, this.orbitPhi - dy * 0.0055));
      } else if (mode === 'interior_walk' || mode === 'guided_tour') {
        this.yaw -= dx * 0.0042;
        this.pitch = Math.max(-1.35, Math.min(1.35, this.pitch - dy * 0.0042));
      } else if (mode === 'free_flight') {
        this.freeYaw -= dx * 0.0042;
        this.freePitch = Math.max(-1.45, Math.min(1.45, this.freePitch - dy * 0.0042));
      }
    });

    window.addEventListener('pointerup', (e) => {
      if (this.isDragging && !this.dragMoved && e.button === 0) {
        if (this.hoveredInteractive) {
          this.executeInteraction(this.hoveredInteractive);
        }
      }
      this.isDragging = false;
    });

    this.domElement.addEventListener('wheel', (e) => {
      if (this.shipState.cameraMode === 'exterior_orbit') {
        this.orbitLerpTarget = null;
        this.orbitRadius = Math.max(18, Math.min(1800, this.orbitRadius + e.deltaY * 0.35));
      }
    }, { passive: true });
  }

  // ============================================================================
  // TELEPORTATION, ROOM ENTRY & CAMERA PRESETS
  // ============================================================================
  enterRoomById(roomId) {
    const room = HERO_ROOMS.find(r => r.id === roomId);
    if (!room) return;
    this.teleportToRoom(room);
  }

  teleportToRoom(room) {
    this.shipState.cameraMode = 'interior_walk';
    this.shipState.cutawayMode = 'off';
    this.exterior.setCutawayMode('off');
    this.interior.setExplodedFactor(false);

    this.shipState.playerSection = room.section;
    this.shipState.currentDeck = room.deck;
    this.shipState.currentRoomId = room.id;
    this.shipState.currentRoomName = `${room.name} (Deck ${room.deck})`;
    this.shipState.seatedStation = null;

    this.localPos.set(room.spawnPos.x, room.spawnPos.y, room.spawnPos.z);

    // Orient toward room lookAt target
    const dx = room.lookAt.x - room.spawnPos.x;
    const dz = room.lookAt.z - room.spawnPos.z;
    this.yaw = Math.atan2(-dx, -dz);
    this.pitch = 0;

    soundManager.playLCARSChirp('confirm');
    this.shipState.emit('locationChanged', room);
    this.shipState.emit('change', this.shipState);
  }

  arriveAtTurboliftDeck(deckNum, section, optionalRoomId = null) {
    if (optionalRoomId) {
      const hero = HERO_ROOMS.find(r => r.id === optionalRoomId);
      if (hero) {
        this.teleportToRoom(hero);
        return;
      }
    }

    const heroOnDeck = HERO_ROOMS.find(r => r.deck === deckNum && r.section === section);
    if (heroOnDeck) {
      this.teleportToRoom(heroOnDeck);
      return;
    }

    // Arrive at Modular Deck (any of the 42 decks!)
    this.interior.ensureModularDeckPopulated(deckNum);
    const dSpec = ALL_DECKS[deckNum - 1];
    const y = getWalkableDeckFloorY(deckNum, section);

    this.shipState.cameraMode = 'interior_walk';
    this.shipState.playerSection = section;
    this.shipState.currentDeck = deckNum;
    this.shipState.currentRoomId = `deck_${deckNum}_modular`;
    this.shipState.currentRoomName = `Deck ${deckNum} — ${dSpec.name}`;
    this.shipState.seatedStation = null;

    this.localPos.set(0, y, dSpec.centerZ);
    this.yaw = Math.PI;
    this.pitch = 0;

    this.shipState.emit('locationChanged', dSpec);
    this.shipState.emit('change', this.shipState);
  }

  focusExteriorInspectionPoint(presetId, immediate = false) {
    const preset = EXTERIOR_INSPECTION_POINTS.find(p => p.id === presetId);
    if (!preset) return;

    this.shipState.cameraMode = 'exterior_orbit';
    this.shipState.seatedStation = null;
    this.activeInspectionPreset = preset;

    // When inspecting the Cobra Head separation deck (Ref 3 & Ref 5), ensure the Saucer is separated forward/upward so the Cobra Head is fully exposed!
    if (presetId === 'ext_cobra_prow' && !this.shipState.isSeparated()) {
      this._autoSeparatedForCobra = true;
      this.shipState.separationState = 'Independent flight';
      this.shipState.saucerPose.x = 0;
      this.shipState.saucerPose.y = 65;
      this.shipState.saucerPose.z = -340;
      this.shipState.stardrivePose.x = 0;
      this.shipState.stardrivePose.y = 0;
      this.shipState.stardrivePose.z = 0;
      this.exterior.saucerAssembly.position.set(0, 65, -340);
      this.exterior.stardriveAssembly.position.set(0, 0, 0);
    } else if (presetId !== 'ext_cobra_prow' && this._autoSeparatedForCobra) {
      this._autoSeparatedForCobra = false;
      this.shipState.separationState = 'Docked';
      this.shipState.saucerPose.x = 0;
      this.shipState.saucerPose.y = 0;
      this.shipState.saucerPose.z = 0;
      this.shipState.stardrivePose.x = 0;
      this.shipState.stardrivePose.y = 0;
      this.shipState.stardrivePose.z = 0;
      this.exterior.saucerAssembly.position.set(0, 0, 0);
      this.exterior.stardriveAssembly.position.set(0, 0, 0);
    }

    this.exterior.saucerAssembly.updateMatrixWorld(true);
    this.exterior.stardriveAssembly.updateMatrixWorld(true);

    const sectionGroup = preset.section === 'stardrive'
      ? this.exterior.stardriveAssembly
      : this.exterior.saucerAssembly;

    const worldTarget = new THREE.Vector3(preset.targetPos.x, preset.targetPos.y, preset.targetPos.z);
    worldTarget.applyMatrix4(sectionGroup.matrixWorld);

    const worldCam = new THREE.Vector3(preset.cameraPos.x, preset.cameraPos.y, preset.cameraPos.z);
    worldCam.applyMatrix4(sectionGroup.matrixWorld);

    const offset = worldCam.clone().sub(worldTarget);
    const r = offset.length();
    const phi = Math.acos(Math.max(-1, Math.min(1, offset.y / r)));
    const theta = Math.atan2(offset.x, offset.z);

    if (immediate) {
      this.orbitTarget.copy(worldTarget);
      this.orbitRadius = r;
      this.orbitTheta = theta;
      this.orbitPhi = phi;
      this.orbitLerpTarget = null;
      this.updateExteriorOrbit(0);
    } else {
      this.orbitLerpTarget = {
        target: worldTarget,
        radius: r,
        theta,
        phi
      };
    }

    soundManager.playLCARSChirp('select');
    this.shipState.emit('change', this.shipState);
  }

  startGuidedTour() {
    this.shipState.cameraMode = 'guided_tour';
    this.tourIndex = 0;
    this.tourTimer = 0;
    this.applyTourStop(0);
    this.shipState.addLog('GUIDED TOUR', 'Automated USS Enterprise NCC-1701-D Guided Tour started.');
    this.shipState.emit('change', this.shipState);
  }

  applyTourStop(idx) {
    const stop = this.tourStops[idx];
    if (!stop) return;
    if (stop.mode === 'exterior_orbit') {
      this.focusExteriorInspectionPoint(stop.presetId);
      this.shipState.cameraMode = 'guided_tour';
    } else if (stop.mode === 'interior_walk') {
      this.enterRoomById(stop.roomId);
      this.shipState.cameraMode = 'guided_tour';
    }
  }

  // ============================================================================
  // INTERACTION RAYCASTING (TERMINALS, CHAIRS, DOORS, TURBOLIFTS, REPLICATORS, PROPS)
  // ============================================================================
  isObjectVisibleInHierarchy(obj) {
    let cur = obj;
    while (cur) {
      if (!cur.visible) return false;
      cur = cur.parent;
    }
    return true;
  }

  updateHoverRaycast() {
    if (this.shipState.cameraMode !== 'interior_walk') {
      this.hoveredInteractive = null;
      return;
    }

    this.raycaster.setFromCamera(this.pointerNDC, this.camera);
    this.raycaster.far = 7.5;
    const hits = this.raycaster
      .intersectObjects(this.interior.interactiveTargets, false)
      .filter(h => this.isObjectVisibleInHierarchy(h.object));

    if (hits.length > 0) {
      this.hoveredInteractive = hits[0].object.userData.interactive;
    } else {
      this.hoveredInteractive = null;
    }
  }

  triggerPrimaryInteraction() {
    if (this.hoveredInteractive) {
      this.executeInteraction(this.hoveredInteractive);
      return;
    }
    // If no specific hovered target under cursor, check center of screen
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    this.raycaster.far = 6.5;
    const hits = this.raycaster
      .intersectObjects(this.interior.interactiveTargets, false)
      .filter(h => this.isObjectVisibleInHierarchy(h.object));
    if (hits.length > 0 && hits[0].object.userData.interactive) {
      this.executeInteraction(hits[0].object.userData.interactive);
    }
  }

  executeInteraction(meta) {
    if (!meta) return;
    const s = this.shipState;

    if (meta.type === 'terminal') {
      soundManager.playLCARSChirp('confirm');
      s.emit('openTerminal', { appId: meta.appId, title: meta.title });
    } else if (meta.type === 'turbolift_panel') {
      soundManager.playLCARSChirp('confirm');
      s.emit('openTerminal', { appId: 'map', title: `${meta.label} — Destination Computer` });
    } else if (meta.type === 'sit') {
      soundManager.playLCARSChirp('select');
      s.seatedStation = meta;
      s.playerSection = meta.section;
      s.currentDeck = meta.deck;
      this.localPos.set(meta.localSeatPos.x, meta.localSeatPos.y - 1.25, meta.localSeatPos.z);
      this.yaw = Math.atan2(-meta.lookOffset.x, -meta.lookOffset.z);
      this.pitch = -0.05;
      s.addLog('CREW STATION', `Seated at ${meta.stationName}. Press [Space] to stand.`);
      s.emit('change', s);
    } else if (meta.type === 'door_leaf' || meta.type === 'door_control') {
      const door = s.doors[meta.doorId];
      if (!door) return;
      if (door.state === 'locked') {
        soundManager.playLCARSChirp('error');
        s.emit('openTerminal', { appId: 'doors', title: `Security Access — ${door.name}` });
      } else if (door.state === 'open' || door.state === 'opening') {
        s.setDoorMode(meta.doorId, 'close_manual');
        soundManager.playDoorSound('close');
      } else {
        s.setDoorMode(meta.doorId, 'open_manual');
        soundManager.playDoorSound('open');
      }
    } else if (meta.type === 'replicator') {
      this.equipCarriedProp(meta.item);
      soundManager.playTransporterBeam();
      s.addLog('REPLICATOR', `Materialized "${meta.item.name}". Carried by user (Press [G] to place/clear).`);
      s.emit('change', s);
    } else if (meta.type === 'pickup_prop') {
      if (meta.mesh) meta.mesh.visible = false;
      this.equipCarriedProp(meta.prop);
      soundManager.playLCARSChirp('confirm');
      s.addLog('EQUIPMENT', `Picked up ${meta.prop.name}.`);
      s.emit('change', s);
    } else if (meta.type === 'board_shuttle') {
      soundManager.playLCARSChirp('confirm');
      s.seatedStation = {
        stationName: 'Type-6 Shuttlecraft "Goddard" Pilot Seat',
        section: 'saucer',
        deck: 4
      };
      s.playerSection = 'saucer';
      s.currentDeck = 4;
      this.localPos.set(meta.shuttlePos.x, meta.shuttlePos.y - 0.65, meta.shuttlePos.z - 1.2);
      this.yaw = Math.PI;
      this.pitch = -0.04;
      s.addLog('SHUTTLEBAY', 'Boarded Type-6 Shuttlecraft "Goddard" (NCC-1701-D/05) cockpit. Press [Space] to exit.');
      s.emit('change', s);
    } else if (meta.type === 'holodeck_action') {
      if (meta.action === 'cycle_hologram') {
        const order = ['enterprise_model', 'borg_cube', 'crystalline_entity'];
        const names = {
          enterprise_model: 'USS Enterprise NCC-1701-D Tactical Scale Model',
          borg_cube: 'Borg Collective Tactical Cube (Sector 001)',
          crystalline_entity: 'Crystalline Entity Lattice'
        };
        const nextIdx = (order.indexOf(s.holodeck.spawnedHologram) + 1) % order.length;
        s.holodeck.spawnedHologram = order[nextIdx];
        soundManager.playTransporterBeam();
        s.addLog('HOLODECK 4', `Materialized Holographic Specimen: ${names[s.holodeck.spawnedHologram]}.`);
        s.emit('change', s);
      } else if (meta.action === 'scotty_toast') {
        this.equipCarriedProp({
          id: 'aldebaran_whiskey',
          name: '2266 Aldebaran Whiskey ("No bloody A, B, C, or D!")',
          color: 0x10b981
        });
        soundManager.playLCARSChirp('confirm');
        s.addLog('HOLODECK 4', 'Montgomery Scott: "Here\'s to ya, lads — the Enterprise NCC-1701. No bloody A, B, C, or D!"');
        s.emit('change', s);
      } else if (meta.action === 'strike_klingon_target') {
        const idx = meta.targetIndex ?? 0;
        const tgt = this.interior.holodeckDynamicState?.klingonTargets?.[idx];
        if (tgt) {
          tgt.hitFlash = 1.0;
          tgt.baseX = (Math.random() - 0.5) * 6.5;
          tgt.baseZ = -139.0 - Math.random() * 5.0;
        }
        s.holodeck.klingonScore = (s.holodeck.klingonScore || 0) + 100;
        s.holodeck.klingonLevel = 1 + Math.floor(s.holodeck.klingonScore / 300);
        soundManager.playPhaserSound();
        s.addLog('HOLODECK 4', `Qapla'! Struck Klingon Training Drone #${idx + 1} (+100 pts — Total: ${s.holodeck.klingonScore} pts, Level ${s.holodeck.klingonLevel}).`);
        s.emit('change', s);
      } else if (meta.action === 'inspect_mystery_clue') {
        if (!s.holodeck.cluesFound.includes(meta.clueId)) {
          s.holodeck.cluesFound.push(meta.clueId);
        }
        soundManager.playLCARSChirp('confirm');
        s.addLog('HOLODECK 4 (221B BAKER ST)', `${meta.clueTitle}: ${meta.clueText} (${s.holodeck.cluesFound.length}/4 Clues Deduced)`);
        if (s.holodeck.cluesFound.length === 4) {
          s.addLog('HOLODECK 4 (CASE SOLVED)', 'Elementary! All 4 Baker Street clues deduced — Professor Moriarty\'s Arch Override cipher has been neutralized.');
        }
        s.emit('change', s);
      } else if (meta.action === 'warp_to_star_system') {
        s.holodeck.activeStarSystem = meta.systemId;
        s.helm.warpFactor = 6.0;
        if (this.exterior && typeof this.exterior.setStarSystemTheme === 'function') {
          this.exterior.setStarSystemTheme(meta.systemId);
        }
        soundManager.playLCARSChirp('confirm');
        s.addLog('STELLAR CARTOGRAPHY', `Course laid in for ${meta.systemName} at Warp 6.0. Exterior planetary environment updated across all ship windows and viewscreens!`);
        s.emit('change', s);
      }
    }
  }

  equipCarriedProp(propSpec) {
    this.shipState.carriedProp = propSpec;
    while (this.heldPropGroup.children.length > 0) {
      this.heldPropGroup.remove(this.heldPropGroup.children[0]);
    }
    const cup = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.05, 0.14, 16),
      new THREE.MeshStandardMaterial({
        color: propSpec.color || 0x38bdf8,
        emissive: propSpec.color || 0x38bdf8,
        emissiveIntensity: 0.35
      })
    );
    cup.position.set(0.32, -0.26, -0.55);
    this.heldPropGroup.add(cup);
  }

  dropCarriedProp() {
    if (!this.shipState.carriedProp) return;
    const name = this.shipState.carriedProp.name;
    this.shipState.carriedProp = null;
    while (this.heldPropGroup.children.length > 0) {
      this.heldPropGroup.remove(this.heldPropGroup.children[0]);
    }
    soundManager.playLCARSChirp('select');
    this.shipState.addLog('EQUIPMENT', `Placed ${name} down.`);
    this.shipState.emit('change', this.shipState);
  }

  standUp() {
    this.shipState.seatedStation = null;
    soundManager.playLCARSChirp('select');
    this.shipState.emit('change', this.shipState);
  }

  // ============================================================================
  // FRAME UPDATE: MOVEMENT, DOOR COLLISION, STAIRS, SECTION-LOCAL CAMERA MATRIX
  // ============================================================================
  update(dt) {
    this.updateHoverRaycast();

    const mode = this.shipState.cameraMode;
    if (mode === 'exterior_orbit') {
      this.updateExteriorOrbit(dt);
    } else if (mode === 'free_flight') {
      this.updateFreeFlight(dt);
    } else if (mode === 'guided_tour') {
      this.updateGuidedTour(dt);
    } else {
      this.updateInteriorWalk(dt);
    }
  }

  updateExteriorOrbit(dt) {
    if (this.orbitLerpTarget) {
      const k = Math.min(1.0, dt * 4.2);
      this.orbitTarget.lerp(this.orbitLerpTarget.target, k);
      this.orbitRadius = THREE.MathUtils.lerp(this.orbitRadius, this.orbitLerpTarget.radius, k);
      this.orbitTheta = THREE.MathUtils.lerp(this.orbitTheta, this.orbitLerpTarget.theta, k);
      this.orbitPhi = THREE.MathUtils.lerp(this.orbitPhi, this.orbitLerpTarget.phi, k);
      if (this.orbitTarget.distanceTo(this.orbitLerpTarget.target) < 0.25) {
        this.orbitLerpTarget = null;
      }
    } else if (this.orbitTrackSection === 'saucer') {
      this.orbitTarget.set(
        this.shipState.saucerPose.x,
        this.shipState.saucerPose.y + 42,
        this.shipState.saucerPose.z - 135
      );
    } else if (this.orbitTrackSection === 'stardrive') {
      this.orbitTarget.set(
        this.shipState.stardrivePose.x,
        this.shipState.stardrivePose.y - 10,
        this.shipState.stardrivePose.z + 65
      );
    } else if (this.shipState.isSeparated() && !this.activeInspectionPreset) {
      this.orbitTarget.set(
        (this.shipState.saucerPose.x + this.shipState.stardrivePose.x) * 0.5,
        15 + (this.shipState.saucerPose.y + this.shipState.stardrivePose.y) * 0.5,
        -55 + (this.shipState.saucerPose.z + this.shipState.stardrivePose.z) * 0.5
      );
    }

    // Keyboard orbit rotation & zoom support
    const rotSpd = 1.1 * dt;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) this.orbitTheta -= rotSpd;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) this.orbitTheta += rotSpd;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) this.orbitRadius = Math.max(20, this.orbitRadius - 140 * dt);
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) this.orbitRadius = Math.min(1800, this.orbitRadius + 140 * dt);

    const x = this.orbitTarget.x + this.orbitRadius * Math.sin(this.orbitPhi) * Math.sin(this.orbitTheta);
    const y = this.orbitTarget.y + this.orbitRadius * Math.cos(this.orbitPhi);
    const z = this.orbitTarget.z + this.orbitRadius * Math.sin(this.orbitPhi) * Math.cos(this.orbitTheta);

    this.camera.position.set(x, y, z);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(this.orbitTarget);
  }

  updateFreeFlight(dt) {
    const speed = (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')) ? 95.0 : 32.0;
    const forward = new THREE.Vector3(
      -Math.sin(this.freeYaw) * Math.cos(this.freePitch),
      Math.sin(this.freePitch),
      -Math.cos(this.freeYaw) * Math.cos(this.freePitch)
    ).normalize();
    const right = new THREE.Vector3(Math.cos(this.freeYaw), 0, -Math.sin(this.freeYaw)).normalize();

    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) this.freePos.addScaledVector(forward, speed * dt);
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) this.freePos.addScaledVector(forward, -speed * dt);
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) this.freePos.addScaledVector(right, speed * dt);
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) this.freePos.addScaledVector(right, -speed * dt);
    if (this.keys.has('KeyQ')) this.freePos.y -= speed * 0.7 * dt;
    if (this.keys.has('KeyR')) this.freePos.y += speed * 0.7 * dt;

    this.camera.position.copy(this.freePos);
    this.camera.up.set(0, 1, 0);
    const lookTarget = this.freePos.clone().add(forward);
    this.camera.lookAt(lookTarget);
  }

  updateGuidedTour(dt) {
    this.tourTimer += dt;
    const currentStop = this.tourStops[this.tourIndex];
    if (!currentStop) return;

    if (currentStop.mode === 'exterior_orbit') {
      this.orbitTheta += dt * 0.14;
      this.updateExteriorOrbit(dt);
    } else {
      this.yaw += Math.sin(this.tourTimer * 0.45) * dt * 0.18;
      this.applySectionLocalCameraTransform();
    }

    if (this.tourTimer >= currentStop.duration) {
      this.tourTimer = 0;
      this.tourIndex = (this.tourIndex + 1) % this.tourStops.length;
      this.applyTourStop(this.tourIndex);
    }
  }

  updateInteriorWalk(dt) {
    const s = this.shipState;

    if (!s.seatedStation) {
      const baseSpeed = s.crawlMode ? 2.6 : ((this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')) ? 7.2 : 4.4);
      let moveForward = 0;
      let moveRight = 0;

      if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) moveForward += 1;
      if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) moveForward -= 1;
      if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) moveRight += 1;
      if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) moveRight -= 1;

      if (moveForward !== 0 || moveRight !== 0) {
        const len = Math.hypot(moveForward, moveRight);
        moveForward /= len;
        moveRight /= len;

        const sinY = Math.sin(this.yaw);
        const cosY = Math.cos(this.yaw);
        const dx = (-sinY * moveForward + cosY * moveRight) * baseSpeed * dt;
        const dz = (-cosY * moveForward - sinY * moveRight) * baseSpeed * dt;

        const nextX = this.localPos.x + dx;
        const nextZ = this.localPos.z + dz;

        if (!this.isBlockedByClosedDoor(nextX, nextZ)) {
          this.localPos.x = nextX;
          this.localPos.z = nextZ;
        }
      }

      // Deck 8 Physical Separation Boundary Crossing Check (When Docked!)
      // Walking across Z = -16.0 on Deck 8 seamlessly transitions playerSection between 'saucer' and 'stardrive'!
      if (s.currentDeck === 8 && s.canTraverseCrossSection()) {
        if (s.playerSection === 'saucer' && this.localPos.z > -15.8) {
          s.playerSection = 'stardrive';
          s.currentRoomId = 'deck8_battle_bridge';
          s.currentRoomName = 'Battle Bridge Corridor (Stardrive Deck 8)';
          s.emit('change', s);
        } else if (s.playerSection === 'stardrive' && this.localPos.z < -16.2) {
          s.playerSection = 'saucer';
          s.currentRoomId = 'deck8_sep_interface';
          s.currentRoomName = 'Saucer Separation Interface (Saucer Deck 8)';
          s.emit('change', s);
        }
      }

      // Compute accurate room floor elevation via shared DeckRegistry authority
      const deckBaseY = getWalkableDeckFloorY(s.currentDeck, s.playerSection);

      if (s.currentDeck === 1 && s.playerSection === 'saucer') {
        // Stage-9 Main Bridge 3-tier amphitheater floor elevation
        if (this.localPos.z < -126.8 && Math.abs(this.localPos.x) < 9.6) {
          const distBridge = Math.hypot(this.localPos.x, this.localPos.z + 137.5);
          if (distBridge > 5.68) {
            this.localPos.y = deckBaseY + 0.26;
          } else if (distBridge < 3.95 && this.localPos.z > -139.2) {
            this.localPos.y = deckBaseY + 0.14;
          } else {
            this.localPos.y = deckBaseY + 0.02;
          }
        } else {
          this.localPos.y = deckBaseY;
        }
      } else if (s.currentDeck === 36 && s.playerSection === 'stardrive') {
        // Starboard 18-step Engineering Staircase at X in [5.8, 9.0], Z in [47.5, 57.0] rising +4.20m
        if (this.localPos.x > 5.8 && this.localPos.x < 9.0 && this.localPos.z >= 47.5 && this.localPos.z <= 57.0) {
          const stairFrac = Math.max(0, Math.min(1, (this.localPos.z - 47.8) / 8.8));
          this.localPos.y = deckBaseY + stairFrac * 4.20;
        } else if (this.localPos.y > deckBaseY + 2.8) {
          // Stay on the Upper Inspection Mezzanine Catwalk ring around the Warp Core (Z = 55.0) unless walking back to stairs
          const distFromCore = Math.hypot(this.localPos.x, this.localPos.z - 55.0);
          if (distFromCore >= 4.1 && distFromCore <= 10.8) {
            this.localPos.y = deckBaseY + 4.20;
          } else {
            this.localPos.y = deckBaseY;
          }
        } else {
          this.localPos.y = deckBaseY;
        }
      } else {
        this.localPos.y = deckBaseY;
      }

      // Clamp within safe hull deck envelope so the player can never walk through outer space walls
      this.clampToDeckHullEnvelope();
    }

    this.applySectionLocalCameraTransform();
  }

  isBlockedByClosedDoor(nextX, nextZ) {
    const s = this.shipState;
    for (const [doorId, dMesh] of this.interior.doorMeshes.entries()) {
      if (dMesh.deck !== s.currentDeck || dMesh.section !== s.playerSection) continue;
      const dState = s.doors[doorId];
      if (!dState || dState.openAmount > 0.65) continue; // Door is open and traversable!

      const dist = Math.hypot(nextX - dMesh.localPos.x, nextZ - dMesh.localPos.z);
      if (dist < 0.85) {
        return true; // Blocked by closed/locked door leaf
      }
    }
    return false;
  }

  clampToDeckHullEnvelope() {
    const s = this.shipState;
    const dSpec = ALL_DECKS[s.currentDeck - 1];
    if (!dSpec) return;

    // Special bounds for Deck 10 Ten Forward bow rim
    if (s.currentDeck === 10) {
      this.localPos.x = Math.max(-13.4, Math.min(13.4, this.localPos.x));
      this.localPos.z = Math.max(-313.8, Math.min(-295.5, this.localPos.z));
      return;
    }

    // Special bounds for Deck 8 Saucer + Stardrive Battle Bridge
    if (s.currentDeck === 8) {
      this.localPos.x = Math.max(-23.2, Math.min(20.5, this.localPos.x));
      if (s.isSeparated()) {
        if (s.playerSection === 'saucer') {
          this.localPos.z = Math.max(-53.5, Math.min(-22.0, this.localPos.z));
        } else {
          this.localPos.z = Math.max(-14.0, Math.min(8.5, this.localPos.z));
        }
      } else {
        this.localPos.z = Math.max(-53.5, Math.min(8.5, this.localPos.z));
      }
      return;
    }

    // General hull envelope clamp
    this.localPos.x = Math.max(-dSpec.radiusX * 0.85, Math.min(dSpec.radiusX * 0.85, this.localPos.x));
  }

  // Computes the world-space camera position & orientation from section-local coordinates
  // Guarantees that interior artificial gravity remains aligned with the player's hull section!
  applySectionLocalCameraTransform() {
    const s = this.shipState;
    const sectionAssembly = s.playerSection === 'stardrive'
      ? this.exterior.stardriveAssembly
      : this.exterior.saucerAssembly;

    const currentEyeH = s.seatedStation ? 1.25 : (s.crawlMode ? 0.95 : this.eyeHeight);
    const localEye = new THREE.Vector3(
      this.localPos.x,
      this.localPos.y + currentEyeH,
      this.localPos.z
    );

    const localLook = new THREE.Vector3(
      localEye.x - Math.sin(this.yaw) * Math.cos(this.pitch),
      localEye.y + Math.sin(this.pitch),
      localEye.z - Math.cos(this.yaw) * Math.cos(this.pitch)
    );

    const localUp = new THREE.Vector3(0, 1, 0);

    // Transform eye, lookAt, and Up vector by the hull assembly's world matrix
    const worldEye = localEye.applyMatrix4(sectionAssembly.matrixWorld);
    const worldLook = localLook.applyMatrix4(sectionAssembly.matrixWorld);
    const worldUp = localUp.transformDirection(sectionAssembly.matrixWorld).normalize();

    this.camera.position.copy(worldEye);
    this.camera.up.copy(worldUp);
    this.camera.lookAt(worldLook);
  }
}
