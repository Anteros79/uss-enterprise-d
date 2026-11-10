// USS Enterprise NCC-1701-D — Starfleet Crew & Ship Life Manager
// Populates both hull sections with TNG Season 5–7 uniformed personnel and Ten Forward civilians.
// Crew members are parented to their local hull section (saucerInteriorRoot or stardriveInteriorRoot)
// so they remain physically attached during Saucer Separation and respect door states & hull splits.

import * as THREE from 'three';
import { getDeckElevation } from '../data/DeckRegistry.js';

const UNIFORM_COLORS = {
  command: 0x991b1b,    // Command Red (Picard, Riker)
  ops: 0xd97706,        // Operations / Engineering Gold (Data, La Forge, Worf)
  science: 0x0284c7,    // Science / Medical Teal-Blue (Crusher, Troi)
  civilian: 0x6d28d9    // Ten Forward Civilian / Guinan attire
};

export class CrewSystem {
  constructor(interior, shipState) {
    this.interior = interior;
    this.shipState = shipState;
    this.crewAgents = [];
    this.buildCrewPopulation();
  }

  createHumanoidMesh(division = 'ops', roleLabel = 'Starfleet Crew') {
    const group = new THREE.Group();
    const uniformColor = UNIFORM_COLORS[division] || UNIFORM_COLORS.ops;

    const trouserMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.7 });
    const tunicMat = new THREE.MeshStandardMaterial({ color: uniformColor, roughness: 0.55 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xe5b899, roughness: 0.6 });
    const badgeMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.8, roughness: 0.2 });

    // Legs
    const leftLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.07, 0.78, 10), trouserMat);
    leftLeg.position.set(-0.11, 0.39, 0);
    group.add(leftLeg);

    const rightLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.07, 0.78, 10), trouserMat);
    rightLeg.position.set(0.11, 0.39, 0);
    group.add(rightLeg);

    // Torso Tunic (TNG Black Yoke + Division Color Chest)
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.17, 0.62, 12), tunicMat);
    torso.position.y = 1.08;
    group.add(torso);

    const yoke = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.21, 0.16, 12), trouserMat);
    yoke.position.y = 1.32;
    group.add(yoke);

    // Starfleet Combadge on Left Chest
    const badge = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.06, 0.02), badgeMat);
    badge.position.set(0.09, 1.24, -0.2);
    group.add(badge);

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.135, 14, 12), skinMat);
    head.position.y = 1.54;
    group.add(head);

    // Arms
    const leftArm = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.048, 0.56, 10), tunicMat);
    leftArm.position.set(-0.26, 1.06, 0);
    group.add(leftArm);

    const rightArm = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.048, 0.56, 10), tunicMat);
    rightArm.position.set(0.26, 1.06, 0);
    group.add(rightArm);

    group.userData = { leftLeg, rightLeg, leftArm, rightArm, roleLabel };
    return group;
  }

  buildCrewPopulation() {
    const definitions = [
      // Deck 1 Main Bridge Crew (positioned at forward Conn/Ops & starboard aft alcove so the central Command Chairs & Tactical Horseshoe remain unobstructed)
      { role: 'Flight Controller — Conn', div: 'ops', deck: 1, section: 'saucer', mode: 'station', x: -1.55, yOffset: 0.02, z: -141.5, rotY: 0 },
      { role: 'Operations Officer — Ops', div: 'ops', deck: 1, section: 'saucer', mode: 'station', x: 1.55, yOffset: 0.02, z: -141.5, rotY: 0 },
      { role: 'Aft Science Specialist', div: 'science', deck: 1, section: 'saucer', mode: 'station', x: 5.2, yOffset: 0.28, z: -130.5, rotY: 2.6 },
      // Deck 1 Observation Lounge
      { role: 'Mission Briefing Officer', div: 'command', deck: 1, section: 'saucer', mode: 'station', x: -2.4, z: -123.0, rotY: Math.PI / 2 },
      // Deck 4 Shuttlebay Techs
      { role: 'Flight Deck Chief (Bay 1)', div: 'ops', deck: 4, section: 'saucer', mode: 'patrol', waypoints: [{ x: -4.5, z: -81.0 }, { x: 4.5, z: -81.0 }] },
      { role: 'Shuttle Maintenance Engineer', div: 'ops', deck: 4, section: 'saucer', mode: 'station', x: 5.6, z: -83.5, rotY: -0.6 },
      // Deck 8 Corridor, Transporter & Separation Boundary Patrol
      {
        role: 'Deck 8 Corridor Officer',
        div: 'command',
        deck: 8,
        section: 'saucer',
        mode: 'patrol',
        crossesBoundary: true,
        waypoints: [{ x: 0, z: -44.0 }, { x: 0, z: -26.5 }]
      },
      { role: 'Transporter Chief (Room 1)', div: 'ops', deck: 8, section: 'saucer', mode: 'station', x: 11.5, z: -40.0, rotY: Math.PI / 2 },
      { role: 'Off-Duty Officer (Quarters)', div: 'science', deck: 8, section: 'saucer', mode: 'station', x: -18.5, z: -41.5, rotY: Math.PI / 2 },
      // Deck 8 Stardrive Battle Bridge Crew
      { role: 'Battle Bridge Tactical Officer', div: 'command', deck: 8, section: 'stardrive', mode: 'station', x: 2.1, z: -5.5, rotY: 0 },
      { role: 'Battle Bridge Systems Specialist', div: 'ops', deck: 8, section: 'stardrive', mode: 'patrol', waypoints: [{ x: -3.5, z: -2.0 }, { x: 3.5, z: -2.0 }] },
      // Deck 10 Ten Forward Personnel & Civilians
      { role: 'Ten Forward Host (Bar)', div: 'civilian', deck: 10, section: 'saucer', mode: 'station', x: 0, z: -304.8, rotY: 0 },
      { role: 'Off-Duty Science Officer', div: 'science', deck: 10, section: 'saucer', mode: 'station', x: -3.8, z: -312.6, rotY: 0 },
      { role: 'Ten Forward Patron', div: 'civilian', deck: 10, section: 'saucer', mode: 'patrol', waypoints: [{ x: -7.5, z: -309.2 }, { x: 7.5, z: -309.2 }] },
      // Deck 11 Astrometrics & Holodeck
      { role: 'Stellar Cartography Researcher', div: 'science', deck: 11, section: 'saucer', mode: 'patrol', waypoints: [{ x: 11.5, z: -140.5 }, { x: 17.5, z: -135.5 }] },
      // Deck 12 Primary Sickbay Medical Staff
      { role: 'Chief Medical Officer', div: 'science', deck: 12, section: 'saucer', mode: 'station', x: 15.2, z: -140.8, rotY: 0 },
      { role: 'Medical Nurse Specialist', div: 'science', deck: 12, section: 'saucer', mode: 'patrol', waypoints: [{ x: 12.5, z: -135.0 }, { x: 18.5, z: -135.0 }] },
      // Deck 36 Main Engineering Team (centered around Warp Core at Z = 55.0m)
      { role: 'Chief Engineering Officer', div: 'ops', deck: 36, section: 'stardrive', mode: 'station', x: -2.4, z: 47.5, rotY: Math.PI / 2 },
      { role: 'Warp Core Specialist', div: 'ops', deck: 36, section: 'stardrive', mode: 'patrol', waypoints: [{ x: -5.4, z: 49.8 }, { x: 5.4, z: 49.8 }, { x: 5.4, z: 60.2 }, { x: -5.4, z: 60.2 }] },
      { role: 'MSD Diagnostic Engineer', div: 'ops', deck: 36, section: 'stardrive', mode: 'station', x: -3.2, z: 65.5, rotY: Math.PI }
    ];

    for (const def of definitions) {
      const mesh = this.createHumanoidMesh(def.div, def.role);
      const deckGroup = this.interior.getDeckGroup(def.deck, def.section);
      const startX = def.mode === 'patrol' ? def.waypoints[0].x : def.x;
      const startZ = def.mode === 'patrol' ? def.waypoints[0].z : def.z;
      mesh.position.set(startX, def.yOffset ?? 0.02, startZ);
      mesh.rotation.y = def.rotY || 0;
      deckGroup.add(mesh);

      this.crewAgents.push({
        ...def,
        mesh,
        wpIndex: 0,
        speed: 1.45 + Math.random() * 0.35,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  update(dt, time) {
    const visible = this.shipState.crewMode === 'populated';
    for (const agent of this.crewAgents) {
      agent.mesh.visible = visible;
      if (!visible) continue;

      if (agent.mode === 'patrol' && agent.waypoints?.length > 1) {
        const target = agent.waypoints[agent.wpIndex];
        const dx = target.x - agent.mesh.position.x;
        const dz = target.z - agent.mesh.position.z;
        const dist = Math.hypot(dx, dz);

        if (dist < 0.25) {
          agent.wpIndex = (agent.wpIndex + 1) % agent.waypoints.length;
        } else {
          const step = Math.min(dist, agent.speed * dt);
          agent.mesh.position.x += (dx / dist) * step;
          agent.mesh.position.z += (dz / dist) * step;
          agent.mesh.rotation.y = Math.atan2(-dx, -dz);

          // Animate walking stride
          const swing = Math.sin(time * 6.5 + agent.phase) * 0.42;
          agent.mesh.userData.leftLeg.rotation.x = swing;
          agent.mesh.userData.rightLeg.rotation.x = -swing;
          agent.mesh.userData.leftArm.rotation.x = -swing * 0.65;
          agent.mesh.userData.rightArm.rotation.x = swing * 0.65;
        }
      } else {
        // Subtle station console operation gesture
        agent.mesh.userData.leftArm.rotation.x = -0.35 + Math.sin(time * 2.2 + agent.phase) * 0.08;
        agent.mesh.userData.rightArm.rotation.x = -0.35 + Math.cos(time * 2.5 + agent.phase) * 0.08;
      }
    }
  }
}
