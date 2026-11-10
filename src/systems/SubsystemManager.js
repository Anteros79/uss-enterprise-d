// USS Enterprise NCC-1701-D — Dynamic Subsystems & Saucer Separation State Machine
// Coordinates:
// 1. Reversible 10-Stage Saucer Separation & Reconnection State Machine:
//    Docked -> Preparing -> Interface secured -> Releasing -> Separating ->
//    Independent flight -> Rendezvous -> Aligning -> Docking -> Reconnected (-> Docked)
// 2. Working Doors with approach detection, manual lock overrides, interlocks, and obstruction reversal.
// 3. Physical Turbolift travel with section-aware routing and time-compressed Express option.
// 4. Transporter Pad lock, particle beam-out, physical room teleportation, and beam-in.
// 5. Shuttlebay 1 Clamshell Space Doors and Type-6 Shuttlecraft Goddard Launch & Recovery.
// 6. Sickbay Biobed Diagnostic Scan and Sensor Target Sweep.

import * as THREE from 'three';
import { HERO_ROOMS, ALL_DECKS, getDeckElevation } from '../data/DeckRegistry.js';
import { soundManager } from '../audio/SoundManager.js';

export class SubsystemManager {
  constructor(shipState, exterior, interior, crewSystem, playerController) {
    this.shipState = shipState;
    this.exterior = exterior;
    this.interior = interior;
    this.crewSystem = crewSystem;
    this.playerController = playerController;

    this.consoleRefreshTimer = 0;
  }

  update(dt, time) {
    this.updateSeparationStateMachine(dt, time);
    this.updateIndependentHullFlight(dt);
    this.updateDoorsAndObstructions(dt);
    this.updateTurboliftTravel(dt);
    this.updateTransporterSequence(dt);
    this.updateShuttlebaySequence(dt, time);
    this.updateSickbayAndSensors(dt);
    this.update3DConsoleDisplays(dt);
  }

  // ============================================================================
  // 1. REVERSIBLE 10-STAGE SAUCER SEPARATION & DOCKING STATE MACHINE
  // ============================================================================
  updateSeparationStateMachine(dt) {
    const s = this.shipState;
    s.separationTimer += dt;

    switch (s.separationState) {
      case 'Docked': {
        s.dockingClampsLatched = true;
        s.crossingRoutesLocked = false;
        s.commandAuthority.isSplit = false;
        s.commandAuthority.mainBridgeControls = 'Integrated Starship (Saucer + Stardrive)';
        s.commandAuthority.battleBridgeControls = 'Standby (Auxiliary Tactical Reserve)';
        break;
      }

      case 'Preparing': {
        // Stage 1: Announce sequence, check Deck 8 boundary clearance, evacuate any player/crew inside airlock threshold
        if (s.separationTimer < 0.1) {
          soundManager.playLCARSChirp('select');
        }
        // If player is standing inside the narrow Deck 8 Separation Airlock (-28.5 < Z < -23.5 on Deck 8),
        // gently step them into their active section so they aren't caught between the pressure doors
        if (
          s.currentDeck === 8 &&
          Math.abs(this.playerController.localPos.z + 25.0) < 3.0 &&
          Math.abs(this.playerController.localPos.x) < 3.0
        ) {
          this.playerController.localPos.z = s.playerSection === 'saucer' ? -29.0 : -20.0;
        }
        s.boundaryClearanceVerified = true;

        if (s.separationTimer >= 2.0) {
          s.separationState = 'Interface secured';
          s.separationTimer = 0;
          // Close and lock both Deck 8 separation boundary doors & crossing turbolift routes
          s.doors['door_sep_saucer'].mode = 'locked';
          s.doors['door_sep_saucer'].state = 'locked';
          s.doors['door_sep_saucer'].openAmount = 0;
          s.doors['door_sep_stardrive'].mode = 'locked';
          s.doors['door_sep_stardrive'].state = 'locked';
          s.doors['door_sep_stardrive'].openAmount = 0;
          s.crossingRoutesLocked = true;
          soundManager.playDoorSound('close');
          s.addLog('SEPARATION INTERLOCK', 'Deck 8 boundary pressure doors sealed and locked. Cross-hull turbolifts halted.');
          s.emit('separationChanged', s.separationState);
          s.emit('change', s);
        }
        break;
      }

      case 'Interface secured': {
        // Stage 2: Transfer power systems to dual independent operation
        if (s.separationTimer >= 1.8) {
          s.separationState = 'Releasing';
          s.separationTimer = 0;
          s.dockingClampsLatched = false;
          s.warpCore.saucerImpulseOnline = true;
          soundManager.playSeparationClampRelease();
          s.addLog('ENGINEERING', 'Main umbilical latches retracted. Saucer Section on independent Fusion Impulse power.');
          s.emit('separationChanged', s.separationState);
          s.emit('change', s);
        }
        break;
      }

      case 'Releasing': {
        // Stage 3: Mechanical clamp retraction pause before thruster separation push
        if (s.separationTimer >= 1.4) {
          s.separationState = 'Separating';
          s.separationTimer = 0;
          s.commandAuthority.isSplit = true;
          s.commandAuthority.mainBridgeControls = 'Saucer Section (Impulse & RCS Only)';
          s.commandAuthority.battleBridgeControls = 'Stardrive Section (Warp Core & Battle Tactical)';
          s.addLog('CONN', 'Forward dorsal RCS thrusters firing. Saucer clearing Stardrive cobra-head neck.');
          s.emit('separationChanged', s.separationState);
          s.emit('change', s);
        }
        break;
      }

      case 'Separating': {
        // Stage 4: Canon-accurate longitudinal & lateral separation path over 6.0 seconds!
        // Note: -Z is FORWARD (Bow), +Z is AFT (Stern).
        // Saucer Section fires its twin aft impulse engines and glides FORWARD (-Z), UP (+Y), and gently Port (-X).
        // Stardrive Section drops DOWN (-Y), AFT (+Z), and banks gently Starboard (+X) so both ships drift apart cleanly!
        const duration = 6.0;
        const t = Math.min(1.0, s.separationTimer / duration);
        const smooth = t * t * (3 - 2 * t);

        s.saucerPose.impulsePct = 95;
        s.saucerPose.rcsActive = true;
        s.saucerPose.x = -smooth * 18.0;
        s.saucerPose.y = smooth * 26.0;
        s.saucerPose.z = -smooth * 105.0; // Glides FORWARD (-Z) away from Stardrive!
        s.saucerPose.pitch = Math.sin(t * Math.PI) * 0.035;
        s.saucerPose.yaw = smooth * 0.06;
        s.saucerPose.roll = -smooth * 0.025;

        const phaseB = Math.max(0, (t - 0.15) / 0.85);
        const smoothB = phaseB * phaseB * (3 - 2 * phaseB);

        s.stardrivePose.impulsePct = 80;
        s.stardrivePose.x = smoothB * 22.0;
        s.stardrivePose.y = -smooth * 18.0;
        s.stardrivePose.z = smoothB * 55.0; // Drifts AFT (+Z) and below the Saucer wake!
        s.stardrivePose.yaw = -smoothB * 0.10;
        s.stardrivePose.pitch = -Math.sin(t * Math.PI) * 0.02;
        s.stardrivePose.roll = smoothB * 0.03;

        if (t >= 1.0) {
          s.separationState = 'Independent flight';
          s.separationTimer = 0;
          soundManager.playLCARSChirp('confirm');
          s.addLog('COMMAND', 'Saucer Separation complete. Saucer and Stardrive operating as independent spacecraft (160m clearance).');
          s.emit('separationChanged', s.separationState);
          s.emit('change', s);
        }
        break;
      }

      case 'Independent flight': {
        // Maintain independent separated formation with subtle station-keeping drift
        s.saucerPose.y = 26.0 + Math.sin(s.separationTimer * 0.32) * 2.0;
        s.stardrivePose.y = -18.0 + Math.cos(s.separationTimer * 0.28) * 2.0;
        break;
      }

      case 'Rendezvous': {
        // Stage 6: Approach from independent flight coordinates back toward dorsal/ventral docking alignment corridor
        const duration = 2.8;
        const t = Math.min(1.0, s.separationTimer / duration);
        const lerpFactor = dt * 2.2;

        s.saucerPose.x = THREE.MathUtils.lerp(s.saucerPose.x, 0, lerpFactor);
        s.saucerPose.y = THREE.MathUtils.lerp(s.saucerPose.y, 18.0, lerpFactor);
        s.saucerPose.z = THREE.MathUtils.lerp(s.saucerPose.z, -65.0, lerpFactor);
        s.saucerPose.yaw = THREE.MathUtils.lerp(s.saucerPose.yaw, 0, lerpFactor * 1.5);
        s.saucerPose.roll = THREE.MathUtils.lerp(s.saucerPose.roll, 0, lerpFactor * 1.5);

        s.stardrivePose.x = THREE.MathUtils.lerp(s.stardrivePose.x, 0, lerpFactor);
        s.stardrivePose.y = THREE.MathUtils.lerp(s.stardrivePose.y, -10.0, lerpFactor);
        s.stardrivePose.z = THREE.MathUtils.lerp(s.stardrivePose.z, 25.0, lerpFactor);
        s.stardrivePose.yaw = THREE.MathUtils.lerp(s.stardrivePose.yaw, 0, lerpFactor * 1.5);
        s.stardrivePose.roll = THREE.MathUtils.lerp(s.stardrivePose.roll, 0, lerpFactor * 1.5);

        if (t >= 1.0) {
          s.separationState = 'Aligning';
          s.separationTimer = 0;
          soundManager.playLCARSChirp('select');
          s.addLog('CONN', 'Rendezvous achieved. Aligning Saucer ventral docking recess with Stardrive cobra-head spline.');
          s.emit('separationChanged', s.separationState);
          s.emit('change', s);
        }
        break;
      }

      case 'Aligning': {
        // Stage 7: Precision attitude & lateral alignment prior to final glide
        const duration = 2.0;
        const t = Math.min(1.0, s.separationTimer / duration);
        const k = t * t * (3 - 2 * t);

        s.saucerPose.x = THREE.MathUtils.lerp(s.saucerPose.x, 0, k);
        s.saucerPose.y = THREE.MathUtils.lerp(s.saucerPose.y, 14.0, k);
        s.saucerPose.z = THREE.MathUtils.lerp(s.saucerPose.z, -50.0, k);
        s.saucerPose.pitch = THREE.MathUtils.lerp(s.saucerPose.pitch, 0, k);
        s.saucerPose.yaw = 0;
        s.saucerPose.roll = 0;

        s.stardrivePose.x = THREE.MathUtils.lerp(s.stardrivePose.x, 0, k);
        s.stardrivePose.y = THREE.MathUtils.lerp(s.stardrivePose.y, -8.0, k);
        s.stardrivePose.z = THREE.MathUtils.lerp(s.stardrivePose.z, 20.0, k);
        s.stardrivePose.pitch = THREE.MathUtils.lerp(s.stardrivePose.pitch, 0, k);
        s.stardrivePose.yaw = 0;
        s.stardrivePose.roll = 0;

        if (t >= 1.0) {
          s.separationState = 'Docking';
          s.separationTimer = 0;
          s.addLog('CONN', 'Alignment locked within 0.02 meters. Executing final docking translation.');
          s.emit('separationChanged', s.separationState);
          s.emit('change', s);
        }
        break;
      }

      case 'Docking': {
        // Stage 8: Collision-free final translation along docking spline to (0, 0, 0)
        const duration = 4.2;
        const t = Math.min(1.0, s.separationTimer / duration);
        const smooth = 1.0 - (t * t * (3 - 2 * t));

        s.saucerPose.x = 0;
        s.saucerPose.y = 24.0 * smooth;
        s.saucerPose.z = -95.0 * smooth;
        s.saucerPose.pitch = 0;

        s.stardrivePose.x = 0;
        s.stardrivePose.y = -12.0 * smooth;
        s.stardrivePose.z = 35.0 * smooth;
        s.stardrivePose.pitch = 0;

        if (t >= 1.0) {
          s.separationState = 'Reconnected';
          s.separationTimer = 0;
          // Exact zero-drift snap to origin!
          s.saucerPose.x = 0; s.saucerPose.y = 0; s.saucerPose.z = 0;
          s.saucerPose.pitch = 0; s.saucerPose.yaw = 0; s.saucerPose.roll = 0;
          s.stardrivePose.x = 0; s.stardrivePose.y = 0; s.stardrivePose.z = 0;
          s.stardrivePose.pitch = 0; s.stardrivePose.yaw = 0; s.stardrivePose.roll = 0;
          s.dockingClampsLatched = true;
          soundManager.playSeparationClampRelease();
          s.addLog('ENGINEERING', 'Magnetic docking clamps engaged. Umbilical EPS power grid and optical bus reconnected.');
          s.emit('separationChanged', s.separationState);
          s.emit('change', s);
        }
        break;
      }

      case 'Reconnected': {
        // Stage 9: Restore crossing routes & transition cleanly back to 'Docked'
        if (s.separationTimer >= 1.4) {
          s.separationState = 'Docked';
          s.separationTimer = 0;
          s.crossingRoutesLocked = false;
          s.doors['door_sep_saucer'].mode = 'auto';
          s.doors['door_sep_saucer'].state = 'closed';
          s.doors['door_sep_stardrive'].mode = 'auto';
          s.doors['door_sep_stardrive'].state = 'closed';
          soundManager.playLCARSChirp('confirm');
          s.addLog('COMMAND', 'Docked configuration verified. Deck 8 crossing corridor and cross-hull turbolifts reopened.');
          s.emit('separationChanged', s.separationState);
          s.emit('change', s);
        }
        break;
      }
    }

    // Apply saucerPose and stardrivePose to the two top-level Three.js spatial assemblies!
    this.exterior.saucerAssembly.position.set(s.saucerPose.x, s.saucerPose.y, s.saucerPose.z);
    this.exterior.saucerAssembly.rotation.set(s.saucerPose.pitch, s.saucerPose.yaw, s.saucerPose.roll);
    this.exterior.saucerAssembly.updateMatrixWorld(true);

    this.exterior.stardriveAssembly.position.set(s.stardrivePose.x, s.stardrivePose.y, s.stardrivePose.z);
    this.exterior.stardriveAssembly.rotation.set(s.stardrivePose.pitch, s.stardrivePose.yaw, s.stardrivePose.roll);
    this.exterior.stardriveAssembly.updateMatrixWorld(true);
  }

  updateIndependentHullFlight(dt) {
    const s = this.shipState;
    if (s.separationState !== 'Independent flight') return;

    // Gentle orbital station-keeping drift + any user helm inputs from Main Bridge (Saucer) or Battle Bridge (Stardrive)
    if (s.saucerPose.impulsePct !== 0) {
      const speed = (s.saucerPose.impulsePct / 100) * 14.0;
      s.saucerPose.x -= Math.sin(s.saucerPose.yaw) * speed * dt;
      s.saucerPose.z -= Math.cos(s.saucerPose.yaw) * speed * dt;
    }
    if (s.stardrivePose.impulsePct !== 0) {
      const speed = (s.stardrivePose.impulsePct / 100) * 16.0;
      s.stardrivePose.x -= Math.sin(s.stardrivePose.yaw) * speed * dt;
      s.stardrivePose.z -= Math.cos(s.stardrivePose.yaw) * speed * dt;
    }
  }

  // ============================================================================
  // 2. WORKING DOORS & OBSTRUCTION REVERSAL
  // ============================================================================
  updateDoorsAndObstructions(dt) {
    const s = this.shipState;
    const playerSection = s.playerSection;
    const playerPos = this.playerController.localPos;

    for (const [doorId, dState] of Object.entries(s.doors)) {
      const dMesh = this.interior.doorMeshes.get(doorId);

      // Handle Exterior Shuttlebay Clamshell Doors separately
      if (doorId === 'door_deck4_space_doors') {
        const target = s.shuttlebay.spaceDoorsOpen ? 1.0 : 0.0;
        dState.openAmount = THREE.MathUtils.lerp(dState.openAmount, target, dt * 1.6);
        dState.state = dState.openAmount > 0.9 ? 'open' : dState.openAmount < 0.1 ? 'closed' : 'opening';
        continue;
      }

      if (!dMesh) continue;

      // Locked doors stay closed
      if (dState.mode === 'locked' || dState.state === 'locked') {
        dState.state = 'locked';
        dState.openAmount = Math.max(0, dState.openAmount - dt * 2.5);
        continue;
      }

      // Check proximity of player and NPC crew on the same deck & section
      let minEntityDist = 999;
      if (dMesh.section === playerSection && dMesh.deck === s.currentDeck) {
        minEntityDist = Math.hypot(
          playerPos.x - dMesh.localPos.x,
          playerPos.z - dMesh.localPos.z
        );
      }

      if (s.crewMode === 'populated') {
        for (const agent of this.crewSystem.crewAgents) {
          if (agent.section === dMesh.section && agent.deck === dMesh.deck) {
            const cDist = Math.hypot(
              agent.mesh.position.x - dMesh.localPos.x,
              agent.mesh.position.z - dMesh.localPos.z
            );
            if (cDist < minEntityDist) minEntityDist = cDist;
          }
        }
      }

      // Automatic approach sensor
      if (dState.mode === 'auto') {
        if (minEntityDist < 3.4) {
          if (dState.state === 'closed' || dState.state === 'closing') {
            // If closing and obstructed inside doorway threshold (< 1.35m), mark obstructed first!
            if (dState.state === 'closing' && minEntityDist < 1.35 && dState.openAmount < 0.85) {
              dState.state = 'obstructed';
              dState.holdTimer = 1.2;
              soundManager.playDoorSound('obstructed');
              s.addLog('DOOR SENSOR', `${dState.name} closing halted due to threshold obstruction; reopening.`);
            } else {
              dState.state = 'opening';
              soundManager.playDoorSound('open');
            }
          }
          dState.holdTimer = 1.5;
        }
      }

      // State transitions
      if (dState.state === 'obstructed') {
        dState.openAmount = Math.min(1.0, dState.openAmount + dt * 2.6);
        dState.holdTimer -= dt;
        if (dState.openAmount >= 1.0 && dState.holdTimer <= 0) {
          dState.state = 'open';
          dState.holdTimer = 2.0;
        }
      } else if (dState.state === 'opening') {
        dState.openAmount = Math.min(1.0, dState.openAmount + dt * 2.4);
        if (dState.openAmount >= 1.0) {
          dState.state = 'open';
          dState.holdTimer = 2.2;
        }
      } else if (dState.state === 'open') {
        if (dState.mode === 'auto' && minEntityDist >= 3.6) {
          dState.holdTimer -= dt;
          if (dState.holdTimer <= 0) {
            dState.state = 'closing';
            soundManager.playDoorSound('close');
          }
        }
      } else if (dState.state === 'closing') {
        // Check manual close obstruction too!
        if (minEntityDist < 1.25 && dState.openAmount > 0.15) {
          dState.state = 'obstructed';
          dState.holdTimer = 1.5;
          soundManager.playDoorSound('obstructed');
        } else {
          dState.openAmount = Math.max(0.0, dState.openAmount - dt * 2.2);
          if (dState.openAmount <= 0.0) {
            dState.state = 'closed';
          }
        }
      }
    }
  }

  // ============================================================================
  // 3. TURBOLIFT TRAVEL & SECTION-AWARE ROUTING
  // ============================================================================
  startTurboliftJourney(targetDeck, targetRoomId = null) {
    const s = this.shipState;
    const deckSpec = ALL_DECKS[targetDeck - 1];
    if (!deckSpec) return { ok: false, reason: 'Invalid deck number.' };

    // Determine target section
    let destSection = deckSpec.section;
    if (targetRoomId === 'deck8_battle_bridge') {
      destSection = 'stardrive';
    } else if (targetDeck === 8 && !targetRoomId) {
      destSection = s.playerSection;
    }

    // Enforce Saucer Separation boundary!
    if (s.isSeparated() && destSection !== s.playerSection) {
      soundManager.playLCARSChirp('error');
      const msg = `ROUTE UNAVAILABLE: Cannot travel from ${s.playerSection.toUpperCase()} to ${destSection.toUpperCase()} while Saucer is separated.`;
      s.turbolift.statusMessage = msg;
      s.addLog('TURBOLIFT COMPUTER', msg);
      s.emit('change', s);
      return { ok: false, reason: msg };
    }

    // Ensure modular deck geometry is built if traveling to any of the 42 decks
    this.interior.ensureModularDeckPopulated(targetDeck);

    s.turbolift.targetDeck = targetDeck;
    s.turbolift.targetRoomId = targetRoomId;
    s.turbolift.targetSection = destSection;
    s.turbolift.state = 'doors_closing';
    s.turbolift.progress = 0;
    s.turbolift.statusMessage = s.turbolift.expressMode
      ? `IN TRANSIT TO DECK ${targetDeck} [EXPRESS TIME COMPRESSED 5x]`
      : `IN TRANSIT TO DECK ${targetDeck} (${deckSpec.name})`;

    soundManager.playDoorSound('close');
    soundManager.playTurboliftHum(true);
    s.addLog('TURBOLIFT', `Departing Deck ${s.currentDeck} for Deck ${targetDeck} (${destSection.toUpperCase()}).`);
    s.emit('change', s);
    return { ok: true };
  }

  updateTurboliftTravel(dt) {
    const tl = this.shipState.turbolift;
    if (tl.state === 'idle') return;

    const speedMult = tl.expressMode ? 3.5 : 1.0;
    tl.progress += dt * 0.45 * speedMult;

    if (tl.state === 'doors_closing' && tl.progress >= 0.2) {
      tl.state = 'traveling';
    } else if (tl.state === 'traveling') {
      const frac = Math.min(1.0, (tl.progress - 0.2) / 0.65);
      tl.displayDeck = Math.round(
        THREE.MathUtils.lerp(this.shipState.currentDeck, tl.targetDeck, frac)
      );
      if (frac >= 1.0) {
        tl.state = 'doors_opening';
        // Move player to the arrival Turbolift alcove on the target deck!
        this.playerController.arriveAtTurboliftDeck(tl.targetDeck, tl.targetSection, tl.targetRoomId);
        soundManager.playTurboliftHum(false);
        soundManager.playDoorSound('open');
      }
    } else if (tl.state === 'doors_opening' && tl.progress >= 1.0) {
      tl.state = 'idle';
      tl.statusMessage = `ARRIVED: DECK ${tl.targetDeck} — DOORS OPEN`;
      this.shipState.emit('change', this.shipState);
    }
  }

  // ============================================================================
  // 4. TRANSPORTER BEAM-OUT / TELEPORT / BEAM-IN SEQUENCE
  // ============================================================================
  executeTransporterSequence(destinationRoomId) {
    const s = this.shipState;
    const room = HERO_ROOMS.find(r => r.id === destinationRoomId);
    if (!room) return false;

    if (s.transporter.energizing) return false;
    s.transporter.destinationRoomId = destinationRoomId;
    s.transporter.energizing = true;
    s.transporter.phase = 'dematerializing';
    s.transporter.progress = 0;
    s.transporter.statusText = `ENERGIZING — LOCKING ONTO ${room.name.toUpperCase()}...`;

    soundManager.playTransporterBeam();
    s.addLog('TRANSPORTER ROOM 1', `Initiating matter-stream transport to ${room.name} (Deck ${room.deck}).`);
    s.emit('change', s);
    return true;
  }

  updateTransporterSequence(dt) {
    const tr = this.shipState.transporter;
    if (!tr.energizing) return;

    tr.progress += dt * 0.42;
    if (tr.phase === 'dematerializing' && tr.progress >= 0.5) {
      tr.phase = 'rematerializing';
      // Physically move the player (and any carried demonstration object!) to the destination room!
      const destRoom = HERO_ROOMS.find(r => r.id === tr.destinationRoomId);
      if (destRoom) {
        this.playerController.teleportToRoom(destRoom);
      }
      tr.statusText = `ANNULAR CONFINEMENT BEAM LOCKED — MATERIALIZING AT ${destRoom?.name.toUpperCase() || 'TARGET'}...`;
    } else if (tr.progress >= 1.0) {
      tr.energizing = false;
      tr.phase = 'idle';
      tr.progress = 0;
      const destRoom = HERO_ROOMS.find(r => r.id === tr.destinationRoomId);
      tr.statusText = `TRANSPORT COMPLETE — SUBJECT AT ${destRoom?.name.toUpperCase() || 'DESTINATION'}`;
      this.shipState.addLog('TRANSPORTER', `Transport complete. Subject and carried equipment rematerialized at ${destRoom?.name}.`);
      this.shipState.emit('change', this.shipState);
    }
  }

  // ============================================================================
  // 5. SHUTTLEBAY 1 LAUNCH & RECOVERY SEQUENCE
  // ============================================================================
  triggerShuttleLaunchAndRecovery() {
    const sb = this.shipState.shuttlebay;
    if (sb.shuttleState !== 'Docked in Bay 1') return;

    sb.forcefieldActive = true;
    sb.spaceDoorsOpen = true;
    sb.shuttleState = 'Launching';
    sb.shuttlePhaseTimer = 0;
    soundManager.playLCARSChirp('confirm');
    this.shipState.addLog('SHUTTLEBAY 1', 'Atmospheric containment field verified. Opening Clamshell Space Doors; launching Shuttlecraft Goddard.');
    this.shipState.emit('change', this.shipState);
  }

  updateShuttlebaySequence(dt) {
    const sb = this.shipState.shuttlebay;
    if (sb.shuttleState === 'Docked in Bay 1') return;

    sb.shuttlePhaseTimer += dt;
    const t = sb.shuttlePhaseTimer;

    if (t < 3.0) {
      sb.shuttleState = 'Pre-Flight & Clamshell Doors Opening';
      sb.shuttlePos.y = Math.min(1.2, t * 0.4);
    } else if (t < 8.5) {
      sb.shuttleState = 'Launching Aft Clear of Dorsal Saucer';
      const p = (t - 3.0) / 5.5;
      sb.shuttlePos.y = 1.2 + p * 16.0;
      sb.shuttlePos.z = p * 95.0;
      sb.shuttlePos.x = Math.sin(p * Math.PI) * 28.0;
      sb.shuttleYaw = Math.sin(p * Math.PI) * 0.4;
    } else if (t < 13.5) {
      sb.shuttleState = 'Final Approach to Main Shuttlebay 1';
      const p = 1.0 - (t - 8.5) / 5.0;
      sb.shuttlePos.y = 1.2 + p * 16.0;
      sb.shuttlePos.z = p * 95.0;
      sb.shuttlePos.x = -Math.sin(p * Math.PI) * 24.0;
      sb.shuttleYaw = -Math.sin(p * Math.PI) * 0.35;
    } else {
      sb.shuttleState = 'Docked in Bay 1';
      sb.shuttlePos.x = 0;
      sb.shuttlePos.y = 0;
      sb.shuttlePos.z = 0;
      sb.shuttleYaw = 0;
      sb.spaceDoorsOpen = false;
      soundManager.playLCARSChirp('confirm');
      this.shipState.addLog('SHUTTLEBAY 1', 'Shuttlecraft Goddard recovered on Pad 1. Clamshell Space Doors secured.');
      this.shipState.emit('change', this.shipState);
    }
  }

  // ============================================================================
  // 6. SICKBAY DIAGNOSTIC SCAN & SENSOR SWEEP
  // ============================================================================
  updateSickbayAndSensors(dt) {
    const s = this.shipState;
    if (s.sickbay.scanning) {
      s.sickbay.scanProgress += dt * 35;
      if (s.sickbay.scanProgress >= 100) {
        s.sickbay.scanProgress = 100;
        s.sickbay.scanning = false;
        soundManager.playLCARSChirp('confirm');
        s.addLog('SICKBAY BIOBED 1', 'Diagnostic scan complete: HR 68 bpm, BP 118/74, Neural 99.4% nominal.');
        s.emit('change', s);
      }
    }

    if (s.sensors.scanning) {
      s.sensors.scanProgress += dt * 45;
      if (s.sensors.scanProgress >= 100) {
        s.sensors.scanProgress = 100;
        s.sensors.scanning = false;
        soundManager.playLCARSChirp('confirm');
        const tgt = s.sensors.targets.find(t => t.id === s.sensors.activeTargetId);
        s.addLog('SENSORS', `Active high-resolution scan of ${tgt?.name || 'target'} completed.`);
        s.emit('change', s);
      }
    }
  }

  update3DConsoleDisplays(dt) {
    this.consoleRefreshTimer += dt;
    if (this.consoleRefreshTimer < 0.5) return;
    this.consoleRefreshTimer = 0;

    const s = this.shipState;
    for (const disp of this.interior.consoleDisplays) {
      let metric = `WARP ${s.warpCore.warpFactor.toFixed(1)}`;
      if (disp.appId === 'separation') metric = s.separationState.toUpperCase();
      else if (disp.appId === 'power') metric = `ENG ${s.power.engines}%`;
      else if (disp.appId === 'sensors') metric = s.sensors.activeTargetId.toUpperCase();
      else if (disp.appId === 'shuttlebay') metric = s.shuttlebay.shuttleState.slice(0, 12);
      else if (disp.appId === 'sickbay') metric = `${s.sickbay.heartRate} BPM`;
      disp.render(s.alertState.toUpperCase(), metric, s.alertState);
    }

    if (this.interior.msdDisplay) {
      this.interior.msdDisplay.render(s);
    }
  }
}
