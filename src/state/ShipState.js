// Central Simulation State Singleton for USS Enterprise NCC-1701-D
// Synchronizes all LCARS terminals, 3D room lights, doors, turbolifts, viewscreens,
// warp core, shuttlebay, transporter, holodeck, and saucer separation state machine.

import { HERO_ROOMS } from '../data/DeckRegistry.js';

export const SEPARATION_STATES = [
  'Docked',
  'Preparing',
  'Interface secured',
  'Releasing',
  'Separating',
  'Independent flight',
  'Rendezvous',
  'Aligning',
  'Docking',
  'Reconnected'
];

class ShipStateManager {
  constructor() {
    this.listeners = new Map();
    this.stardate = 47457.1;
    this.resetToDefault(false);
  }

  resetToDefault(notify = true) {
    this.alertState = 'normal'; // 'normal' | 'reduced' | 'yellow' | 'red'
    this.cameraMode = 'exterior_orbit'; // 'exterior_orbit' | 'interior_walk' | 'free_flight' | 'guided_tour'
    this.cutawayMode = 'off'; // 'off' | 'cutaway' | 'exploded'
    this.pipEnabled = true; // Exterior Picture-in-Picture inset while walking indoors
    this.photoMode = false;
    this.qualityLevel = 'high'; // 'high' | 'balanced'
    this.crewMode = 'populated'; // 'populated' | 'empty'

    // Active player section & room tracking
    this.playerSection = 'saucer'; // 'saucer' | 'stardrive'
    this.currentDeck = 1;
    this.currentRoomId = 'deck1_bridge';
    this.currentRoomName = 'Main Bridge (Deck 1)';
    this.seatedStation = null; // null | { id, name, section, pos, lookAt }
    this.crawlMode = false; // Jefferies tube crouch/inspection mode
    this.carriedProp = null; // e.g., { id: 'earl_grey', name: 'Tea, Earl Grey, Hot', color: 0xd97706 }

    // Saucer Separation State Machine
    this.separationState = 'Docked';
    this.separationTimer = 0;
    this.separationTargetMode = 'Docked'; // 'Docked' or 'Independent flight'
    this.boundaryClearanceVerified = true;
    this.crossingRoutesLocked = false;
    this.dockingClampsLatched = true;

    // Independent Hull Transforms (in world space meters & radians)
    this.saucerPose = {
      x: 0, y: 0, z: 0,
      pitch: 0, yaw: 0, roll: 0,
      impulsePct: 0,
      rcsActive: false
    };
    this.stardrivePose = {
      x: 0, y: 0, z: 0,
      pitch: 0, yaw: 0, roll: 0,
      impulsePct: 0,
      warpFactor: 0.0
    };

    // Command Assignment Authority
    // When Docked: Main Bridge controls the integrated starship ('integrated').
    // When Separated: Main Bridge controls Saucer ('saucer_only'); Battle Bridge controls Stardrive ('stardrive_only').
    this.commandAuthority = {
      mainBridgeControls: 'Integrated Starship (Saucer + Stardrive)',
      battleBridgeControls: 'Standby (Auxiliary Tactical Reserve)',
      isSplit: false
    };

    // Engineering Power Allocation (Shared across Bridge & Engineering consoles)
    this.power = {
      engines: 100,
      shields: 85,
      lifeSupport: 100,
      sensors: 90,
      auxiliary: 75
    };

    // Warp Core & Propulsion Simulation
    this.warpCore = {
      online: true,
      warpFactor: 2.0, // 0.0 to 9.6
      intermixRatio: 1.00,
      coilFrequency: 47.4, // MHz
      coolantPressure: 104.2, // kPa
      matterTempK: 4200,
      saucerImpulseOnline: true
    };

    // Environmental Settings
    this.environment = {
      temperatureC: 21.5,
      humidityPct: 45,
      gravityG: 1.00,
      pressureKPa: 101.3,
      oxygenPct: 20.9,
      forcefieldsActive: true
    };

    // Lighting Control
    this.lighting = {
      masterBrightness: 1.0,
      colorPreset: 'warm_tng', // 'warm_tng' | 'day_shift' | 'night_shift' | 'red_alert'
      roomLights: {
        deck1_bridge: true,
        deck1_ready_room: true,
        deck1_observation: true,
        deck4_shuttlebay: true,
        deck8_quarters: true,
        deck8_transporter: true,
        deck8_battle_bridge: true,
        deck10_ten_forward: true,
        deck11_holodeck: true,
        deck12_sickbay: true,
        deck36_engineering: true
      }
    };

    // Main Viewscreen & Battle Bridge Viewscreen state
    this.viewscreen = {
      mainBridgeMode: 'forward', // 'forward' | 'aft' | 'planet' | 'stardrive_track' | 'tactical'
      battleBridgeMode: 'forward', // 'forward' | 'aft' | 'saucer_track' | 'tactical'
      magnification: 1.0,
      tacticalOverlay: false
    };

    // Sensor Demonstration System
    this.sensors = {
      activeTargetId: 'veridian_iv',
      scanning: false,
      scanProgress: 100,
      waypointTargetRoom: null,
      targets: [
        {
          id: 'veridian_iv',
          name: 'Planet Veridian IV (Class-M)',
          bearing: '042 Mark 011',
          distanceKm: 18400,
          classification: 'Class-M Terrestrial Biosphere',
          telemetry: 'Atmosphere: Nitrogen-Oxygen (78%/21%). Surface temp: 291 K. No artificial subspace emissions.'
        },
        {
          id: 'starbase_74',
          name: 'Starbase 74 (Orbital Relay)',
          bearing: '188 Mark 004',
          distanceKm: 420500,
          classification: 'Federation O’Neill-Type Spacedock',
          telemetry: 'Subspace beacon active on Channel 47. Bynar maintenance teams logged on Stardate 41242.'
        },
        {
          id: 'romulan_scout',
          name: 'D’deridex Sensor Echo (Long Range)',
          bearing: '310 Mark 349',
          distanceKm: 1290000,
          classification: 'Tetryon Gravimetric Anomaly',
          telemetry: 'Faint artificial quantum singularity signature detected near Neutral Zone perimeter.'
        },
        {
          id: 'other_hull',
          name: 'Secondary / Primary Hull Section',
          bearing: '000 Mark 000',
          distanceKm: 0.0,
          classification: 'Galaxy-Class Hull Assembly',
          telemetry: 'Hull transponder locked. Docking telemetry and life-support beacon nominal.'
        }
      ]
    };

    // Working Doors Registry
    this.doors = {};
    const doorConfigs = [
      { id: 'door_bridge_tl1', name: 'Bridge Turbolift 1 (Starboard)', deck: 1, section: 'saucer', type: 'sliding' },
      { id: 'door_bridge_tl2', name: 'Bridge Turbolift 2 (Port)', deck: 1, section: 'saucer', type: 'sliding' },
      { id: 'door_bridge_ready', name: "Captain's Ready Room Door", deck: 1, section: 'saucer', type: 'sliding' },
      { id: 'door_bridge_obs_port', name: 'Observation Lounge Port Door', deck: 1, section: 'saucer', type: 'sliding' },
      { id: 'door_bridge_obs_stbd', name: 'Observation Lounge Starboard Door', deck: 1, section: 'saucer', type: 'sliding' },
      { id: 'door_deck4_corridor', name: 'Shuttlebay 1 Personnel Airlock', deck: 4, section: 'saucer', type: 'airlock' },
      { id: 'door_deck4_space_doors', name: 'Main Shuttlebay Exterior Clamshell Doors', deck: 4, section: 'saucer', type: 'clamshell', mode: 'manual' },
      { id: 'door_deck8_quarters', name: 'Senior Officer Quarters Door', deck: 8, section: 'saucer', type: 'sliding' },
      { id: 'door_deck8_transporter', name: 'Transporter Room 1 Door', deck: 8, section: 'saucer', type: 'sliding' },
      { id: 'door_sep_saucer', name: 'Deck 8 Saucer Separation Interlock Door', deck: 8, section: 'saucer', type: 'interlock' },
      { id: 'door_sep_stardrive', name: 'Deck 8 Stardrive Separation Interlock Door', deck: 8, section: 'stardrive', type: 'interlock' },
      { id: 'door_battle_bridge_tl', name: 'Battle Bridge Turbolift Door', deck: 8, section: 'stardrive', type: 'sliding' },
      { id: 'door_deck10_tenforward', name: 'Ten Forward Main Entrance Doors', deck: 10, section: 'saucer', type: 'sliding' },
      { id: 'door_deck11_holodeck', name: 'Holodeck 1 Entrance Arch Doors', deck: 11, section: 'saucer', type: 'sliding' },
      { id: 'door_deck11_sciencelab', name: 'Deck 11 Astrometrics & Science Lab Door', deck: 11, section: 'saucer', type: 'sliding' },
      { id: 'door_deck12_sickbay', name: 'Primary Sickbay Main Entrance', deck: 12, section: 'saucer', type: 'sliding' },
      { id: 'door_deck12_cmo', name: 'Chief Medical Officer Office Door', deck: 12, section: 'saucer', type: 'sliding' },
      { id: 'door_deck36_isolation', name: 'Main Engineering Emergency Isolation Door', deck: 36, section: 'stardrive', type: 'rolldown' },
      { id: 'door_deck36_jefferies', name: 'Engineering Jefferies Tube Access Hatch', deck: 36, section: 'stardrive', type: 'hatch' },
      { id: 'door_modular_room_a', name: 'Modular Deck Compartment A Door', deck: 2, section: 'saucer', type: 'sliding' },
      { id: 'door_modular_room_b', name: 'Modular Deck Compartment B Door', deck: 2, section: 'saucer', type: 'sliding' }
    ];

    for (const cfg of doorConfigs) {
      this.doors[cfg.id] = {
        ...cfg,
        state: 'closed', // 'closed' | 'opening' | 'open' | 'closing' | 'locked' | 'obstructed'
        mode: cfg.mode || 'auto', // 'auto' | 'manual' | 'locked'
        openAmount: 0.0, // 0.0 (closed) to 1.0 (open)
        holdTimer: 0
      };
    }

    // Turbolift State
    this.turbolift = {
      activeCabinSection: 'saucer',
      currentDeck: 1,
      targetDeck: 1,
      state: 'idle', // 'idle' | 'doors_closing' | 'traveling' | 'doors_opening'
      expressMode: false,
      progress: 0,
      displayDeck: 1,
      statusMessage: 'TURBOLIFT READY — SELECT DESTINATION'
    };

    // Transporter State
    this.transporter = {
      destinationRoomId: 'deck36_engineering',
      energizing: false,
      phase: 'idle', // 'idle' | 'locking' | 'dematerializing' | 'rematerializing' | 'complete'
      progress: 0,
      statusText: 'TRANSPORTER PAD 1 STANDBY — TARGET COORDINATES READY'
    };

    // Shuttlebay & Shuttlecraft Launch Sequence
    this.shuttlebay = {
      spaceDoorsOpen: false,
      spaceDoorProgress: 0, // 0..1
      forcefieldActive: true,
      shuttleState: 'Docked in Bay 1', // 'Docked in Bay 1' | 'Pre-Flight Pressurization' | 'Launching' | 'External Flight' | 'Final Approach' | 'Landing'
      shuttlePhaseTimer: 0,
      shuttlePos: { x: 0, y: 0, z: 0 },
      shuttleYaw: 0
    };

    // Holodeck State (Deck 11 — Holodeck 4 Interactive Simulation Playground)
    this.holodeck = {
      activeProgram: 'tos_bridge', // 'grid' | 'tos_bridge' | 'klingon_arena' | 'sherlock_noir' | 'stellar_cartography'
      archVisible: true,
      safetyProtocols: true,
      spawnedHologram: 'enterprise_model', // 'enterprise_model' | 'borg_cube' | 'crystalline_entity'
      klingonScore: 0,
      klingonLevel: 1,
      cluesFound: [],
      activeStarSystem: 'earth',
      spatialDisclosure: 'Spatial Expansion Technique: Local 16m × 14m chamber uses omnidirectional forcefield treadmills and parallax horizon projection.'
    };

    // Sickbay Biobed Diagnostic State
    this.sickbay = {
      scanning: false,
      scanProgress: 0,
      subjectName: 'Simulated Crewman (Standard Humanoid Reference)',
      heartRate: 68,
      bloodPressure: '118 / 74 mmHg',
      neuralIndex: '99.4% Nominal',
      coreTemp: '37.0 °C',
      respiration: '14 breaths/min',
      diagnosis: 'All cardiopulmonary, neural, and metabolic readings within normal Starfleet parameters. (Simulation Only)'
    };

    // Ship Computer Operational Log
    this.logs = [
      {
        stardate: '47457.1',
        source: 'MAIN COMPUTER',
        text: 'USS Enterprise NCC-1701-D simulation initialized. Primary and Secondary hulls docked. All 42 decks nominal.'
      },
      {
        stardate: '47457.1',
        source: 'ENGINEERING',
        text: 'Matter/Antimatter reaction assembly online at Warp 2.0 equivalent output. Dilithium articulation frame aligned.'
      }
    ];

    if (notify) {
      this.addLog('SYSTEM RESET', 'All ship systems, hull couplings, doors, and interior coordinates restored to nominal docked state.');
      this.emit('reset', this);
      this.emit('change', this);
    }
  }

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);
    return () => this.listeners.get(event)?.delete(callback);
  }

  emit(event, payload = this) {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      for (const cb of callbacks) {
        try {
          cb(payload);
        } catch (err) {
          console.error(`ShipState listener error on ${event}:`, err);
        }
      }
    }
  }

  addLog(source, text) {
    this.stardate = Number((this.stardate + 0.01).toFixed(2));
    this.logs.unshift({
      stardate: this.stardate.toFixed(2),
      source,
      text
    });
    if (this.logs.length > 40) this.logs.pop();
    this.emit('log', this.logs[0]);
  }

  setAlertState(newAlert) {
    if (this.alertState === newAlert) return;
    this.alertState = newAlert;
    if (newAlert === 'red') {
      this.lighting.colorPreset = 'red_alert';
      this.addLog('TACTICAL', 'Condition Red Alert initiated. Deflector shields raised; boundary containment doors on alert.');
    } else if (newAlert === 'reduced') {
      this.lighting.colorPreset = 'night_shift';
      this.lighting.masterBrightness = 0.45;
      this.addLog('ENVIRONMENTAL', 'Shipwide lighting set to Night Watch / Reduced Illumination (45%).');
    } else if (newAlert === 'yellow') {
      this.lighting.colorPreset = 'warm_tng';
      this.lighting.masterBrightness = 0.85;
      this.addLog('TACTICAL', 'Condition Yellow Alert initiated. Defensive systems on standby.');
    } else {
      this.lighting.colorPreset = 'warm_tng';
      this.lighting.masterBrightness = 1.0;
      this.addLog('COMMAND', 'Condition Green — Normal shipboard operations resumed.');
    }
    this.emit('alertChanged', this.alertState);
    this.emit('change', this);
  }

  isSeparated() {
    return this.separationState !== 'Docked' && this.separationState !== 'Reconnected';
  }

  canTraverseCrossSection() {
    return this.separationState === 'Docked';
  }

  initiateSeparationSequence() {
    if (this.separationState !== 'Docked') return false;
    this.separationTargetMode = 'Independent flight';
    this.separationState = 'Preparing';
    this.separationTimer = 0;
    this.addLog('COMMAND', 'Saucer Separation sequence initiated. Announcing evacuation of Deck 8 separation boundary.');
    this.emit('separationChanged', this.separationState);
    this.emit('change', this);
    return true;
  }

  initiateReconnectionSequence() {
    if (
      this.separationState !== 'Independent flight' &&
      this.separationState !== 'Separating'
    ) {
      return false;
    }
    this.separationTargetMode = 'Docked';
    this.separationState = 'Rendezvous';
    this.separationTimer = 0;
    this.addLog('COMMAND', 'Hull Reconnection sequence initiated. Stardrive and Saucer sections beginning rendezvous maneuver.');
    this.emit('separationChanged', this.separationState);
    this.emit('change', this);
    return true;
  }

  setWarpFactor(val) {
    const clamped = Math.max(0, Math.min(9.6, Number(val)));
    this.warpCore.warpFactor = clamped;
    this.stardrivePose.warpFactor = clamped;
    this.addLog('ENGINEERING', `Warp field output adjusted to Warp ${clamped.toFixed(1)}.`);
    this.emit('warpChanged', this.warpCore);
    this.emit('change', this);
  }

  setPowerAllocation(system, val) {
    if (!(system in this.power)) return;
    this.power[system] = Math.max(10, Math.min(150, Number(val)));
    // Affect lighting or warp if lifeSupport or engines drop
    if (system === 'lifeSupport') {
      this.lighting.masterBrightness = Math.max(0.25, Math.min(1.2, this.power.lifeSupport / 100));
    }
    this.addLog('ENGINEERING', `EPS Power allocation for ${system.toUpperCase()} set to ${this.power[system]}%.`);
    this.emit('powerChanged', this.power);
    this.emit('change', this);
  }

  setDoorMode(doorId, mode) {
    const door = this.doors[doorId];
    if (!door) return;
    // Prevent unlocking separation airlock doors while separated!
    if ((doorId === 'door_sep_saucer' || doorId === 'door_sep_stardrive') && this.isSeparated() && mode !== 'locked') {
      this.addLog('SECURITY INTERLOCK', `Cannot unlock ${door.name} while hulls are separated (Vacuum hazard).`);
      return;
    }
    door.mode = mode;
    if (mode === 'locked') {
      door.state = 'locked';
      this.addLog('ACCESS CONTROL', `${door.name} set to LOCKED.`);
    } else if (mode === 'open_manual') {
      door.mode = 'manual';
      door.state = 'opening';
      this.addLog('ACCESS CONTROL', `${door.name} opened via manual command.`);
    } else if (mode === 'close_manual') {
      door.mode = 'manual';
      door.state = 'closing';
      this.addLog('ACCESS CONTROL', `${door.name} closed via manual command.`);
    } else {
      door.mode = 'auto';
      if (door.state === 'locked') door.state = 'closed';
      this.addLog('ACCESS CONTROL', `${door.name} restored to AUTOMATIC approach mode.`);
    }
    this.emit('doorChanged', door);
    this.emit('change', this);
  }

  unlockAllDoorsEmergency() {
    for (const [id, door] of Object.entries(this.doors)) {
      if ((id === 'door_sep_saucer' || id === 'door_sep_stardrive') && this.isSeparated()) {
        continue;
      }
      door.mode = 'auto';
      door.state = 'opening';
    }
    this.crawlMode = false;
    this.seatedStation = null;
    this.addLog('EMERGENCY OVERRIDE', 'All internal security locks released; doors opening for emergency egress.');
    this.emit('change', this);
  }
}

export const shipState = new ShipStateManager();
export { HERO_ROOMS };
