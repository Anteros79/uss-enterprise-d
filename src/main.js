// USS Enterprise NCC-1701-D — Main Application Orchestrator
// Initializes Three.js WebGL scene, spatial Saucer & Stardrive assemblies,
// Exterior, Walkable 42-Deck Interior, Crew, Subsystems, Live Viewscreen RenderTargets,
// Picture-in-Picture Exterior Inset, and LCARS UI.

import * as THREE from 'three';
import { shipState } from './state/ShipState.js';
import { ALL_DECKS, HERO_ROOMS, getDeckElevation } from './data/DeckRegistry.js';
import { soundManager } from './audio/SoundManager.js';
import { EnterpriseExterior } from './exterior/EnterpriseExterior.js';
import { EnterpriseInterior } from './interior/EnterpriseInterior.js';
import { CrewSystem } from './systems/CrewSystem.js';
import { PlayerController } from './systems/PlayerController.js';
import { SubsystemManager } from './systems/SubsystemManager.js';
import { LCARSTerminal } from './ui/LCARSTerminal.js';

class EnterpriseSimulationApp {
  constructor() {
    this.canvas = document.getElementById('three-canvas');
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      logarithmicDepthBuffer: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x02040a);

    // Primary Player / Orbit Camera
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.15, 28000);
    this.scene.add(this.camera);

    // Exterior Picture-in-Picture (PiP) Camera for indoor Saucer Separation tracking
    this.pipCamera = new THREE.PerspectiveCamera(50, 300 / 185, 1.0, 25000);

    // Two Distinct Top-Level Spatial Hull Assemblies:
    // 1. saucerAssembly (Decks 1–16, Main Bridge, Ready Room, Observation Lounge, Shuttlebay 1, Ten Forward, Holodeck, Sickbay, Quarters, Transporter 1)
    // 2. stardriveAssembly (Cobra-Head Neck, Deck 8 Battle Bridge, Decks 17–42, Main Engineering, Warp Core, Deflector, Nacelles)
    this.saucerAssembly = new THREE.Group();
    this.saucerAssembly.name = 'SaucerAssembly';
    this.scene.add(this.saucerAssembly);

    this.stardriveAssembly = new THREE.Group();
    this.stardriveAssembly.name = 'StardriveAssembly';
    this.scene.add(this.stardriveAssembly);

    // Construct Exterior, Interior, Crew, Player Controller, Subsystems, and LCARS Terminal
    this.exterior = new EnterpriseExterior(this.scene, this.saucerAssembly, this.stardriveAssembly);
    this.interior = new EnterpriseInterior(this.saucerAssembly, this.stardriveAssembly, shipState);
    this.crewSystem = new CrewSystem(this.interior, shipState);
    this.player = new PlayerController(this.camera, this.canvas, this.exterior, this.interior, shipState);
    this.subsystems = new SubsystemManager(shipState, this.exterior, this.interior, this.crewSystem, this.player);
    this.lcarsTerminal = new LCARSTerminal(shipState, this.subsystems, this.player);

    // Live Offscreen Sensor Cameras & RenderTargets for Main Bridge Viewscreen & Battle Bridge Viewscreen
    this.initLiveViewscreens();

    // Populate UI controls & listeners
    window.addEventListener('pointerdown', () => soundManager.init(), { once: true });
    window.addEventListener('keydown', () => soundManager.init(), { once: true });
    this.initUIControls();

    // Open on First-Frame Cinematic Three-Quarter View of the Enterprise-D
    this.player.focusExteriorInspectionPoint('ext_three_quarter', true);

    // Frame timing & FPS measurement
    this.lastFrameTime = performance.now();
    this.elapsedTime = 0;
    this.frameCount = 0;
    this.fpsAccum = 0;
    this.measuredFps = 60;
    this.vsFrameCounter = 0;

    window.addEventListener('resize', () => this.onResize());
    this.animate();
  }

  initLiveViewscreens() {
    this.mainBridgeRT = new THREE.WebGLRenderTarget(2048, 1024, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      samples: 4
    });
    this.mainBridgeRT.texture.colorSpace = THREE.SRGBColorSpace;
    this.mainBridgeRT.texture.anisotropy = 8;

    this.battleBridgeRT = new THREE.WebGLRenderTarget(2048, 1024, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      samples: 4
    });
    this.battleBridgeRT.texture.colorSpace = THREE.SRGBColorSpace;
    this.battleBridgeRT.texture.anisotropy = 8;

    this.mainSensorCam = new THREE.PerspectiveCamera(50, 2.0, 2.0, 24000);
    this.saucerAssembly.add(this.mainSensorCam);

    this.battleSensorCam = new THREE.PerspectiveCamera(50, 2.0, 2.0, 24000);
    this.stardriveAssembly.add(this.battleSensorCam);

    this.interior.mainViewscreenMat.map = this.mainBridgeRT.texture;
    this.interior.mainViewscreenMat.needsUpdate = true;

    this.interior.battleViewscreenMat.map = this.battleBridgeRT.texture;
    this.interior.battleViewscreenMat.needsUpdate = true;

    if (this.interior.holodeckDynamicState?.tosViewscreenMat) {
      this.interior.holodeckDynamicState.tosViewscreenMat.map = this.mainBridgeRT.texture;
      this.interior.holodeckDynamicState.tosViewscreenMat.needsUpdate = true;
    }
  }

  updateLiveViewscreens() {
    // Update sensor cameras every 2nd frame for smooth performance
    this.vsFrameCounter++;
    if (this.vsFrameCounter % 2 !== 0) return;

    const vsMode = shipState.viewscreen.mainBridgeMode;
    if (vsMode === 'forward' || vsMode === 'tactical') {
      // Positioned at Saucer Bow sensor array looking forward at Veridian IV Moon & starfield ahead of the ship
      this.mainSensorCam.position.set(0, 38, -323);
      this.mainSensorCam.lookAt(
        this.saucerAssembly.localToWorld(new THREE.Vector3(190, 68, -1950))
      );
    } else if (vsMode === 'aft') {
      // Positioned on Aft Dorsal Saucer looking back at the Stardrive Section & Nacelles!
      this.mainSensorCam.position.set(0, 56, -25);
      this.mainSensorCam.lookAt(
        this.stardriveAssembly.localToWorld(new THREE.Vector3(0, 14, 130))
      );
    } else if (vsMode === 'planet') {
      this.mainSensorCam.position.set(0, 76, 55);
      this.mainSensorCam.lookAt(new THREE.Vector3(-2450, -1550, 2200));
    }

    // Battle Bridge Sensor Camera (Mounted on Stardrive Cobra-Head looking forward at the Saucer!)
    const bbMode = shipState.viewscreen.battleBridgeMode;
    if (bbMode === 'aft') {
      this.battleSensorCam.position.set(0, 37.5, 42);
      this.battleSensorCam.lookAt(
        this.stardriveAssembly.localToWorld(new THREE.Vector3(0, 12, 260))
      );
    } else {
      // Looks forward directly at the Saucer section (dramatic view during Saucer Separation!)
      this.battleSensorCam.position.set(0, 36.8, -12);
      this.battleSensorCam.lookAt(
        this.saucerAssembly.localToWorld(new THREE.Vector3(0, 37, -145))
      );
    }

    const currentRT = this.renderer.getRenderTarget();
    this.renderer.setRenderTarget(this.mainBridgeRT);
    this.renderer.render(this.scene, this.mainSensorCam);

    this.renderer.setRenderTarget(this.battleBridgeRT);
    this.renderer.render(this.scene, this.battleSensorCam);

    this.renderer.setRenderTarget(currentRT);
  }

  initUIControls() {
    // Populate 42-Deck dropdown selector
    const deckSelect = document.getElementById('select-any-deck');
    if (deckSelect) {
      deckSelect.innerHTML = ALL_DECKS.map(d =>
        `<option value="${d.deck}">Deck ${String(d.deck).padStart(2, '0')} — ${d.name.slice(0, 34)}</option>`
      ).join('');
    }

    // Top Bar First-Frame Immediate Buttons
    document.getElementById('btn-hero-exterior')?.addEventListener('click', () => {
      this.player.focusExteriorInspectionPoint('ext_three_quarter');
    });

    document.getElementById('btn-hero-bridge')?.addEventListener('click', () => {
      this.player.enterRoomById('deck1_bridge');
    });

    document.getElementById('btn-hero-holodeck')?.addEventListener('click', () => {
      this.player.enterRoomById('deck11_holodeck');
    });

    document.getElementById('btn-hero-tour')?.addEventListener('click', () => {
      this.player.startGuidedTour();
    });

    document.getElementById('btn-hero-separation')?.addEventListener('click', () => {
      soundManager.init();
      if (shipState.separationState === 'Docked') {
        shipState.initiateSeparationSequence();
      } else if (shipState.separationState === 'Independent flight' || shipState.separationState === 'Separating') {
        shipState.initiateReconnectionSequence();
      }
    });

    // Holodeck 4 Contextual HUD Bar Controls
    document.querySelectorAll('[data-holo-hud]').forEach(btn => {
      btn.addEventListener('click', () => {
        const progId = btn.getAttribute('data-holo-hud');
        shipState.holodeck.activeProgram = progId;
        soundManager.playLCARSChirp('confirm');
        shipState.addLog('HOLODECK 4', `Loaded Holographic Program: "${progId.toUpperCase()}".`);
        shipState.emit('change', shipState);
      });
    });

    document.getElementById('btn-holo-hud-arch')?.addEventListener('click', () => {
      shipState.holodeck.archVisible = !shipState.holodeck.archVisible;
      soundManager.playLCARSChirp('select');
      shipState.emit('change', shipState);
    });

    document.getElementById('btn-holo-hud-spawn')?.addEventListener('click', () => {
      this.player.executeInteraction({ type: 'holodeck_action', action: 'cycle_hologram' });
    });

    document.getElementById('btn-open-lcars')?.addEventListener('click', () => {
      soundManager.playLCARSChirp('confirm');
      this.lcarsTerminal.open('map');
    });

    // Camera Mode Buttons
    document.querySelectorAll('[data-cam-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-cam-mode');
        if (mode === 'guided_tour') {
          this.player.startGuidedTour();
        } else if (mode === 'interior_walk') {
          this.player.enterRoomById(shipState.currentRoomId || 'deck1_bridge');
        } else {
          shipState.cameraMode = mode;
          soundManager.playLCARSChirp('select');
          shipState.emit('change', shipState);
        }
      });
    });

    // Exterior Landmark Dropdown
    document.getElementById('select-ext-landmark')?.addEventListener('change', (e) => {
      this.player.focusExteriorInspectionPoint(e.target.value);
    });

    // Cutaway & Exploded Mode Buttons
    document.querySelectorAll('[data-cutaway]').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-cutaway');
        shipState.cutawayMode = mode;
        this.exterior.setCutawayMode(mode);
        this.interior.setExplodedFactor(mode === 'exploded');
        if (mode !== 'off' && shipState.cameraMode === 'interior_walk') {
          shipState.cameraMode = 'exterior_orbit';
          this.player.focusExteriorInspectionPoint('ext_bridge_module');
        }
        soundManager.playLCARSChirp('select');
        shipState.emit('change', shipState);
      });
    });

    // Interior Signature Room Selector
    document.getElementById('btn-go-selected-room')?.addEventListener('click', () => {
      const val = document.getElementById('select-hero-room')?.value;
      if (val) this.player.enterRoomById(val);
    });

    document.getElementById('btn-ride-turbolift-room')?.addEventListener('click', () => {
      const val = document.getElementById('select-hero-room')?.value;
      const room = HERO_ROOMS.find(r => r.id === val);
      if (room) {
        if (shipState.cameraMode !== 'interior_walk') {
          this.player.enterRoomById(shipState.currentRoomId || 'deck1_bridge');
        }
        this.subsystems.startTurboliftJourney(room.deck, room.id);
      }
    });

    // 42-Deck Direct Visit Button
    document.getElementById('btn-go-any-deck')?.addEventListener('click', () => {
      const deckNum = Number(document.getElementById('select-any-deck')?.value || 1);
      const spec = ALL_DECKS[deckNum - 1];
      if (spec) {
        this.player.arriveAtTurboliftDeck(deckNum, spec.section);
      }
    });

    // Saucer Separation Panel Controls
    document.getElementById('btn-panel-separate')?.addEventListener('click', () => {
      soundManager.playLCARSChirp('confirm');
      shipState.initiateSeparationSequence();
    });

    document.getElementById('btn-panel-reconnect')?.addEventListener('click', () => {
      soundManager.playLCARSChirp('confirm');
      shipState.initiateReconnectionSequence();
    });

    // Exterior Section Tracking Buttons
    document.querySelectorAll('[data-track-sec]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sec = btn.getAttribute('data-track-sec');
        this.player.orbitTrackSection = sec;
        this.player.orbitLerpTarget = null;
        document.querySelectorAll('[data-track-sec]').forEach(b => b.classList.toggle('is-active', b === btn));
        soundManager.playLCARSChirp('select');
      });
    });

    // Alert State Buttons
    document.querySelectorAll('[data-alert-btn]').forEach(btn => {
      btn.addEventListener('click', () => {
        soundManager.playLCARSChirp('confirm');
        shipState.setAlertState(btn.getAttribute('data-alert-btn'));
      });
    });

    // Crew Population Toggle
    document.getElementById('btn-toggle-crew')?.addEventListener('click', (e) => {
      shipState.crewMode = shipState.crewMode === 'populated' ? 'empty' : 'populated';
      e.target.textContent = `Crew: ${shipState.crewMode === 'populated' ? 'Populated' : 'Empty'}`;
      soundManager.playLCARSChirp('select');
      shipState.emit('change', shipState);
    });

    // Picture-in-Picture Exterior Inset Toggle
    const pipBtn = document.getElementById('btn-toggle-pip');
    pipBtn?.addEventListener('click', () => {
      shipState.pipEnabled = !shipState.pipEnabled;
      pipBtn.textContent = `Ext Inset: ${shipState.pipEnabled ? 'ON' : 'OFF'}`;
      soundManager.playLCARSChirp('select');
      shipState.emit('change', shipState);
    });

    document.getElementById('btn-hide-pip')?.addEventListener('click', () => {
      shipState.pipEnabled = false;
      if (pipBtn) pipBtn.textContent = 'Ext Inset: OFF';
      shipState.emit('change', shipState);
    });

    // Audio Sliders & Mute
    document.getElementById('audio-ambience')?.addEventListener('input', (e) => {
      soundManager.setAmbienceVolume(e.target.value);
    });

    document.getElementById('audio-sfx')?.addEventListener('input', (e) => {
      soundManager.setSfxVolume(e.target.value);
    });

    document.getElementById('btn-mute-audio')?.addEventListener('click', (e) => {
      soundManager.setMuted(!soundManager.muted);
      e.target.textContent = `Mute: ${soundManager.muted ? 'ON' : 'OFF'}`;
    });

    // Photo Mode Toggle [P]
    const togglePhotoMode = () => {
      shipState.photoMode = !shipState.photoMode;
      document.getElementById('top-hud-bar')?.classList.toggle('is-hidden', shipState.photoMode);
      document.getElementById('ops-drawer')?.classList.toggle('is-hidden', shipState.photoMode);
      document.getElementById('pip-frame-overlay')?.classList.toggle('is-hidden', shipState.photoMode || shipState.cameraMode === 'exterior_orbit');
      this.syncHUD();
    };
    document.getElementById('btn-photo-mode')?.addEventListener('click', togglePhotoMode);

    // Emergency Reset Button
    document.getElementById('btn-reset-ship')?.addEventListener('click', () => {
      soundManager.playLCARSChirp('confirm');
      shipState.resetToDefault(true);
      this.exterior.setCutawayMode('off');
      this.interior.setExplodedFactor(false);
      this.player.focusExteriorInspectionPoint('ext_three_quarter');
    });

    // Global Keyboard Shortcuts (T for Terminal, H for Holodeck 4, P for Photo Mode)
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      if (e.code === 'KeyT') {
        e.preventDefault();
        if (this.lcarsTerminal.dialog?.open) {
          this.lcarsTerminal.close();
        } else {
          this.lcarsTerminal.open('map');
        }
      } else if (e.code === 'KeyH') {
        this.player.enterRoomById('deck11_holodeck');
      } else if (e.code === 'KeyP') {
        togglePhotoMode();
      }
    });

    shipState.on('change', () => this.syncHUD());
    this.syncHUD();
  }

  syncHUD() {
    const s = shipState;

    // Top bar telemetry
    const locEl = document.getElementById('hud-location-readout');
    if (locEl) {
      if (s.cameraMode === 'exterior_orbit') {
        locEl.textContent = `EXTERIOR ORBIT // HULL: ${s.separationState.toUpperCase()}`;
      } else if (s.cameraMode === 'free_flight') {
        locEl.textContent = `FREE-FLIGHT 6DOF INSPECTION // HULL: ${s.separationState.toUpperCase()}`;
      } else if (s.cameraMode === 'guided_tour') {
        const stop = this.player.tourStops[this.player.tourIndex];
        locEl.textContent = stop ? stop.label.toUpperCase() : 'GUIDED SHIP TOUR';
      } else {
        locEl.textContent = `${s.currentRoomName.toUpperCase()} // SECTION: ${s.playerSection.toUpperCase()}`;
      }
    }

    const hullChip = document.getElementById('chip-hull-state');
    if (hullChip) hullChip.textContent = `HULL: ${s.separationState.toUpperCase()}`;

    const warpChip = document.getElementById('chip-warp-state');
    if (warpChip) {
      warpChip.textContent = s.warpCore.online ? `WARP ${s.warpCore.warpFactor.toFixed(1)}` : 'CORE STANDBY';
    }

    // Hero separation button label
    const sepBtn = document.getElementById('btn-hero-separation');
    if (sepBtn) {
      sepBtn.textContent = s.isSeparated() ? 'Reconnect Hulls' : 'Saucer Separation Demo';
    }

    // Side panel active states
    document.querySelectorAll('[data-cam-mode]').forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-cam-mode') === s.cameraMode);
    });
    document.querySelectorAll('[data-cutaway]').forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-cutaway') === s.cutawayMode);
    });
    document.querySelectorAll('[data-alert-btn]').forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-alert-btn') === s.alertState);
    });

    const sepStateEl = document.getElementById('panel-sep-state');
    if (sepStateEl) sepStateEl.textContent = s.separationState;
    const mainAuthEl = document.getElementById('panel-main-auth');
    if (mainAuthEl) mainAuthEl.textContent = s.commandAuthority.mainBridgeControls;
    const battleAuthEl = document.getElementById('panel-battle-auth');
    if (battleAuthEl) battleAuthEl.textContent = s.commandAuthority.battleBridgeControls;

    // Reticle, PiP & Contextual Holodeck 4 HUD visibility
    const isIndoor = s.cameraMode === 'interior_walk' ||
      (s.cameraMode === 'guided_tour' && this.player.tourStops[this.player.tourIndex]?.mode === 'interior_walk');
    document.getElementById('reticle-overlay')?.classList.toggle('is-hidden', !isIndoor || s.photoMode);
    document.getElementById('pip-frame-overlay')?.classList.toggle('is-hidden', !isIndoor || !s.pipEnabled || s.photoMode);

    const isHolodeck = isIndoor && s.currentRoomId === 'deck11_holodeck' && !s.photoMode;
    const holoHudEl = document.getElementById('holodeck-hud');
    if (holoHudEl) {
      holoHudEl.classList.toggle('is-hidden', !isHolodeck);
      if (isHolodeck) {
        const hd = s.holodeck;
        const statusEl = document.getElementById('holodeck-hud-status');
        if (statusEl) {
          const statusMap = {
            tos_bridge: 'SCOTTY\'S 1966 NCC-1701 BRIDGE ("RELICS") — Sit in Kirk\'s Chair or Click Aldebaran Whiskey!',
            klingon_arena: `KLINGON MOK'BARA ARENA — SCORE: ${hd.klingonScore || 0} PTS (LVL ${hd.klingonLevel || 1}) — Click Moving Drones to Strike!`,
            sherlock_noir: `221B BAKER STREET MYSTERY — CLUES DEDUCED: ${(hd.cluesFound || []).length} / 4 — Click Clues Around the Study!`,
            stellar_cartography: `3D STELLAR CARTOGRAPHY — SECTOR: ${(hd.activeStarSystem || 'earth').toUpperCase()} — Click Any 3D Planet to Warp!`,
            grid: `OMNIDIRECTIONAL LASER GRID — SPECIMEN: ${(hd.spawnedHologram || 'enterprise_model').toUpperCase()} — Click Pedestal to Cycle!`
          };
          statusEl.textContent = statusMap[hd.activeProgram] || hd.activeProgram.toUpperCase();
        }
        document.querySelectorAll('[data-holo-hud]').forEach(btn => {
          btn.classList.toggle('is-active', btn.getAttribute('data-holo-hud') === hd.activeProgram);
        });
      }
    }

    // Status Toast (Turbolift transit, Seated station, Crawl mode, or Carried Prop)
    const toast = document.getElementById('status-toast');
    if (toast) {
      const msgs = [];
      if (s.turbolift.state !== 'idle') {
        msgs.push(`TURBOLIFT TRANSIT: Passing Deck ${s.turbolift.displayDeck} → Destination Deck ${s.turbolift.targetDeck}`);
      }
      if (s.transporter.energizing) {
        msgs.push(s.transporter.statusText);
      }
      if (s.seatedStation) {
        msgs.push(`Seated at ${s.seatedStation.stationName} — Press [Space] to stand`);
      }
      if (s.crawlMode) {
        msgs.push('Jefferies Tube Crouch / Inspection Mode Active — Press [C] to stand');
      }
      if (s.carriedProp) {
        msgs.push(`Carrying: ${s.carriedProp.name} — Press [G] to place down`);
      }
      if (msgs.length > 0 && !s.photoMode) {
        toast.textContent = msgs.join('  |  ');
        toast.classList.remove('is-hidden');
      } else {
        toast.classList.add('is-hidden');
      }
    }
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const now = performance.now();
    const dt = Math.min(0.05, Math.max(0.001, (now - this.lastFrameTime) / 1000));
    this.lastFrameTime = now;
    this.elapsedTime += dt;

    // FPS counter
    this.frameCount++;
    this.fpsAccum += dt;
    if (this.fpsAccum >= 0.5) {
      this.measuredFps = Math.round(this.frameCount / this.fpsAccum);
      const fpsChip = document.getElementById('chip-fps');
      if (fpsChip) fpsChip.textContent = `${this.measuredFps} FPS`;
      this.frameCount = 0;
      this.fpsAccum = 0;
    }

    // Update Subsystems, Exterior, Interior, Crew, and Player Camera
    this.subsystems.update(dt, this.elapsedTime);
    this.exterior.update(dt, this.elapsedTime, shipState);
    this.interior.update(dt, this.elapsedTime);
    this.crewSystem.update(dt, this.elapsedTime);
    this.player.update(dt);

    // Update contextual hover prompt in Interior Walk mode
    const promptEl = document.getElementById('interaction-prompt');
    if (promptEl) {
      if (this.player.hoveredInteractive && this.player.hoveredInteractive.prompt) {
        promptEl.textContent = this.player.hoveredInteractive.prompt;
        promptEl.classList.remove('is-hidden');
      } else {
        promptEl.classList.add('is-hidden');
      }
    }

    // Update Spatial Audio distance attenuation to Deck 36 Warp Core (X = 0, Y = -41.5, Z = +19.0)
    const warpCoreWorld = this.stardriveAssembly.localToWorld(
      new THREE.Vector3(0, getDeckElevation(36) + 9.0, 19.0)
    );
    const distToWarpCore = this.camera.position.distanceTo(warpCoreWorld);
    const isoDoorClosed = (shipState.doors['door_deck36_isolation']?.openAmount ?? 0) < 0.2;
    soundManager.updateSpatialAmbience(dt, this.elapsedTime, shipState, distToWarpCore, isoDoorClosed);

    // Update Live Bridge Viewscreens
    this.updateLiveViewscreens();

    // Render Primary Viewport
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setViewport(0, 0, w, h);
    this.renderer.setScissorTest(false);
    this.renderer.render(this.scene, this.camera);

    // Render Picture-in-Picture (PiP) Exterior Inset in bottom-right when walking indoors!
    const isIndoor = shipState.cameraMode === 'interior_walk' ||
      (shipState.cameraMode === 'guided_tour' && this.player.tourStops[this.player.tourIndex]?.mode === 'interior_walk');

    if (isIndoor && shipState.pipEnabled && !shipState.photoMode) {
      const pipW = 300;
      const pipH = 185;
      const pipX = w - pipW - 16;
      const pipY = 16;

      // Position PiP camera to frame both Saucer and Stardrive assemblies from a dramatic angle
      const midPoint = new THREE.Vector3(
        (shipState.saucerPose.x + shipState.stardrivePose.x) * 0.5,
        (shipState.saucerPose.y + shipState.stardrivePose.y) * 0.5 + 22,
        (shipState.saucerPose.z + shipState.stardrivePose.z) * 0.5 - 40
      );
      this.pipCamera.position.set(
        midPoint.x + Math.cos(this.elapsedTime * 0.18) * 440,
        midPoint.y + 135,
        midPoint.z - Math.sin(this.elapsedTime * 0.18) * 440
      );
      this.pipCamera.lookAt(midPoint);

      this.renderer.setViewport(pipX, pipY, pipW, pipH);
      this.renderer.setScissor(pipX, pipY, pipW, pipH);
      this.renderer.setScissorTest(true);
      this.renderer.clearDepth();
      this.renderer.render(this.scene, this.pipCamera);
      this.renderer.setScissorTest(false);
    }
  }
}

window.enterpriseApp = new EnterpriseSimulationApp();
