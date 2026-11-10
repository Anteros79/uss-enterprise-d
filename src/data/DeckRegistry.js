// Complete 42-Deck Structural Registry & Landmark Coordinates for USS Enterprise NCC-1701-D
// Scale: 1 unit = 1.0 meter (Exact 642.5m × 463.73m × 118.25m ILM 6-Foot Studio Miniature Envelope).
// Coordinate Convention:
//   -Z = Forward (Bow) | +Z = Aft (Stern)
//   +X = Starboard     | -X = Port
//   +Y = Dorsal (Up)   | -Y = Ventral (Down)
//
// Studio-Miniature Calibrated Hull Vertical Envelope:
//   Bridge Dome Apex:      Y = +68.75m
//   Saucer Rim Centerline: Y = +37.00m  (Bow Tip Z = -321.25m, Beam X = ±231.86m)
//   Ventral Saucer Dome:   Y = +13.20m
//   Cobra Head Crest:      Y = +35.60m  (Separation Plane Y = +34.80m)
//   Navigational Deflector:Y = -26.80m, Z = +12.00m (Recessed under X = ±67.6m Flared Shoulders)
//   Secondary Hull Keel:   Y = -49.50m

export const DECK_HEIGHT = 2.90;
export const SHIP_TOP_Y = 68.75; // Apex of Deck 1 Bridge Dome

// Maps all 42 decks cleanly within the exact +68.75m..-49.50m studio-model hull envelope (zero exterior protrusion!)
export function getDeckElevation(deckNum) {
  if (deckNum <= 16) {
    // Saucer Section Decks 1–16 (+63.65m down to +20.15m, cleanly inside +68.75m..+13.20m saucer shell)
    return Number((66.55 - deckNum * 2.90).toFixed(2));
  }
  // Stardrive Neck & Secondary Hull Decks 17–42 (+17.60m down to -45.65m, cleanly above -49.50m keel)
  return Number((17.60 - (deckNum - 17) * 2.53).toFixed(2));
}

// Authoritative walkable floor elevation shared by BOTH EnterpriseInterior and PlayerController
export function getWalkableDeckFloorY(deckNum, section = 'saucer') {
  const base = getDeckElevation(deckNum);
  if (deckNum === 4 && section === 'saucer') return Number((base - 3.80).toFixed(2));   // +51.15m (6.2m Shuttlebay inside +59.8m bay arch)
  if (deckNum === 8 && section === 'saucer') return Number((base - 2.00).toFixed(2));   // +41.35m (Deck 8 Saucer Quarters / Transporter / Airlock)
  if (deckNum === 8 && section === 'stardrive') return 30.40;                           // +30.40m (4.1m Battle Bridge inside +35.6m Cobra Head)
  if (deckNum === 10 && section === 'saucer') return 35.00;                             // +35.00m (Ten Forward windows straddle +37.0m Saucer Bow Rim)
  if (deckNum === 36 && section === 'stardrive') return -38.80;                         // -38.80m (8.8m two-level Main Engineering inside -49.5m..-12.0m hull)
  return base;
}

export const HERO_ROOMS = [
  {
    id: 'deck1_bridge',
    name: 'Main Bridge',
    deck: 1,
    section: 'saucer',
    confidence: 'Tier A — Canonical Set',
    extrapolated: false,
    spawnPos: { x: 3.35, y: getWalkableDeckFloorY(1, 'saucer') + 0.12, z: -138.48 },
    lookAt: { x: -1.25, y: getWalkableDeckFloorY(1, 'saucer') + 1.45, z: -133.90 },
    description: 'Stage 9 TNG Season 5–7 Main Bridge featuring the soaring 5.1m ribbed skylight dome, stepped amphitheater deck, double-swept cherry-wood Tactical horseshoe, sculpted camel-leather command chairs, glowing side pedestals, quilted Turbolift alcove, Conn/Ops, and 2048×1024 MSAA Main Viewscreen.'
  },
  {
    id: 'deck1_ready_room',
    name: "Captain's Ready Room",
    deck: 1,
    section: 'saucer',
    confidence: 'Tier A — Canonical Set',
    extrapolated: false,
    spawnPos: { x: 11.8, y: getWalkableDeckFloorY(1, 'saucer'), z: -141.5 },
    lookAt: { x: 15.0, y: getWalkableDeckFloorY(1, 'saucer') + 1.55, z: -142.5 },
    description: "Captain Jean-Luc Picard's private office on Deck 1 starboard, with recessed architectural ceiling vault, desktop LCARS terminal, replicator alcove, aquarium (Livingston), Stargazer model, and exterior starboard viewport."
  },
  {
    id: 'deck1_observation',
    name: 'Observation Lounge',
    deck: 1,
    section: 'saucer',
    confidence: 'Tier A — Canonical Set',
    extrapolated: false,
    spawnPos: { x: 0, y: getWalkableDeckFloorY(1, 'saucer'), z: -125.0 },
    lookAt: { x: 0, y: getWalkableDeckFloorY(1, 'saucer') + 1.55, z: -119.0 },
    description: 'Senior officers briefing room aft of the Main Bridge featuring the sculpted cherry-wood conference table, gold Enterprise lineage wall relief, coffered ceiling cove, and tall slanted aft windows overlooking the saucer dorsal surface and warp nacelles.'
  },
  {
    id: 'deck4_shuttlebay',
    name: 'Main Shuttlebay (Bay 1)',
    deck: 4,
    section: 'saucer',
    confidence: 'Tier A / B — Set & Tech Manual',
    extrapolated: false,
    spawnPos: { x: 2.5, y: getWalkableDeckFloorY(4, 'saucer'), z: -88.2 },
    lookAt: { x: 2.5, y: getWalkableDeckFloorY(4, 'saucer') + 1.85, z: -72.0 },
    description: 'Two-deck 6.2m-high primary saucer hangar complex housing sculpted Type-6 shuttlecraft Goddard and El-Baz, overhead structural hangar trusses, atmospheric containment field, flight control balcony, and working exterior clamshell bay doors.'
  },
  {
    id: 'deck8_quarters',
    name: 'Senior Officer Crew Quarters',
    deck: 8,
    section: 'saucer',
    confidence: 'Tier A — Canonical Set',
    extrapolated: false,
    spawnPos: { x: -16.0, y: getWalkableDeckFloorY(8, 'saucer'), z: -42.0 },
    lookAt: { x: -24.0, y: getWalkableDeckFloorY(8, 'saucer') + 1.55, z: -44.0 },
    description: 'Spacious TNG senior officer stateroom with coffered skylight ceiling, curved window mullions overlooking space, living area, sleeping alcove, replicator, personal LCARS workstation, and adjoining sanitation facility.'
  },
  {
    id: 'deck8_transporter',
    name: 'Transporter Room 1',
    deck: 8,
    section: 'saucer',
    confidence: 'Tier A — Canonical Set',
    extrapolated: false,
    spawnPos: { x: 11.0, y: getWalkableDeckFloorY(8, 'saucer'), z: -40.0 },
    lookAt: { x: 17.5, y: getWalkableDeckFloorY(8, 'saucer') + 1.55, z: -40.0 },
    description: 'Primary personnel transporter chamber with 6-pad raised molecular imaging platform, overhead emitter canopy, sculpted operator console, and glowing wall phase transition coils.'
  },
  {
    id: 'deck8_sep_interface',
    name: 'Separation Interface Airlock (Deck 8)',
    deck: 8,
    section: 'saucer',
    confidence: 'Tier C — Architectural Extrapolation',
    extrapolated: true,
    spawnPos: { x: 0, y: getWalkableDeckFloorY(8, 'saucer'), z: -26.5 },
    lookAt: { x: 0, y: getWalkableDeckFloorY(8, 'saucer') + 1.6, z: -18.0 },
    description: 'Extrapolated heavy pressure-interlock passage spanning the physical hull boundary between Deck 8 Saucer and Deck 8 Stardrive Battle Bridge corridor. Automatically seals prior to Saucer Separation.'
  },
  {
    id: 'deck8_battle_bridge',
    name: 'Battle Bridge (Stardrive Command)',
    deck: 8,
    section: 'stardrive',
    confidence: 'Tier A — Canonical Set',
    extrapolated: false,
    spawnPos: { x: 0, y: getWalkableDeckFloorY(8, 'stardrive'), z: -4.0 },
    lookAt: { x: 0, y: getWalkableDeckFloorY(8, 'stardrive') + 1.55, z: -10.5 },
    description: 'Tactical command bridge embedded in the dorsal Cobra-Head crest of the Stardrive neck. Assumes full independent helm, warp propulsion, and tactical authority of the Stardrive section upon Saucer Separation.'
  },
  {
    id: 'deck10_ten_forward',
    name: 'Ten Forward Lounge',
    deck: 10,
    section: 'saucer',
    confidence: 'Tier A — Canonical Set',
    extrapolated: false,
    spawnPos: { x: 4.2, y: getWalkableDeckFloorY(10, 'saucer'), z: -304.2 },
    lookAt: { x: -1.2, y: getWalkableDeckFloorY(10, 'saucer') + 1.65, z: -314.2 },
    description: 'Iconic 4.65m vaulted social lounge at the forward-most edge of Deck 10, featuring tall forward-slanted observation windows looking directly ahead of the saucer bow, radial structural ribs, illuminated glass-block bar, replicator drink service, and seating tables.'
  },
  {
    id: 'deck11_holodeck',
    name: 'Holodeck 4 & Astrometrics Lab',
    deck: 11,
    section: 'saucer',
    confidence: 'Tier A — Canonical Set',
    extrapolated: false,
    spawnPos: { x: -11.2, y: getWalkableDeckFloorY(11, 'saucer'), z: -138.0 },
    lookAt: { x: -21.0, y: getWalkableDeckFloorY(11, 'saucer') + 1.65, z: -138.0 },
    description: 'High-bay 5.4m omnidirectional holographic simulation chamber with 5 playable programs (Laser Grid & Matter Spawner, Scotty’s 2266 USS Enterprise NCC-1701 TOS Bridge, Worf’s Klingon Mok’bara Combat Arena, Sherlock/Dixon Hill Mystery Office, and 3D Stellar Cartography Warp Navigator).'
  },
  {
    id: 'deck12_sickbay',
    name: 'Primary Sickbay & CMO Office',
    deck: 12,
    section: 'saucer',
    confidence: 'Tier A — Canonical Set',
    extrapolated: false,
    spawnPos: { x: 10.0, y: getWalkableDeckFloorY(12, 'saucer'), z: -138.0 },
    lookAt: { x: 17.5, y: getWalkableDeckFloorY(12, 'saucer') + 1.55, z: -138.0 },
    description: 'Main medical facility featuring surgical clamshell biobed with working diagnostic body scanner, recovery biobeds, Dr. Crusher’s glass-walled Chief Medical Officer office, and medical laboratory.'
  },
  {
    id: 'deck36_engineering',
    name: 'Main Engineering & Warp Core',
    deck: 36,
    section: 'stardrive',
    confidence: 'Tier A — Canonical Set',
    extrapolated: false,
    spawnPos: { x: 2.2, y: getWalkableDeckFloorY(36, 'stardrive'), z: 44.2 },
    lookAt: { x: 0, y: getWalkableDeckFloorY(36, 'stardrive') + 2.4, z: 55.0 },
    description: 'Soaring 8.8m two-level Stardrive propulsion cathedral housing the pulsing Matter/Antimatter Reaction Assembly (Warp Core), Chief Engineer’s pool-table console, 2048×1024 Master Systems Display (MSD), +4.2m upper inspection mezzanine catwalk, emergency isolation door, and walkable Jefferies tube.'
  }
];

export const EXTERIOR_INSPECTION_POINTS = [
  {
    id: 'ext_three_quarter',
    name: 'Three-Quarter Ventral Hero View (Ref 1, 4, 5, 8)',
    section: 'saucer',
    cameraPos: { x: 158, y: -14, z: -485 },
    targetPos: { x: -6, y: 8, z: -32 },
    description: 'Iconic low-angle TNG three-quarter hero perspective showcasing the subtle pearlescent Aztec saucer terraces, compact forward-swept connecting neck, recessed almond navigational deflector dish, swan-neck curved pylons, and hooded Bussard collectors.'
  },
  {
    id: 'ext_dorsal_studio',
    name: 'Dorsal Studio Model Orthoview (Ref 1 / Studio Miniature)',
    section: 'saucer',
    cameraPos: { x: 0, y: 695, z: 2.0 },
    targetPos: { x: 0, y: 12, z: 0.0 },
    description: 'Exact 642.5m × 463.73m top-down ILM 6-foot studio miniature perspective revealing the integrated concave S-curve aft saucer tail, twin auxiliary impulse notches, Main Impulse Engine, wide 135.2m secondary hull shoulders, and full-length nacelles.'
  },
  {
    id: 'ext_cobra_prow',
    name: 'Cobra Head, Flared Shoulders & Deflector Prow (Ref 3, 5)',
    section: 'stardrive',
    cameraPos: { x: -56, y: 46, z: -64 },
    targetPos: { x: 0, y: 2, z: 24 },
    description: 'Close-up three-quarter inspection of the smooth 96-segment Andrew Probert Cobra-Head separation deck, continuous swept phaser ribbon, compact forward-swept neck throat, and wide window-studded Secondary Hull shoulders hooding the Almond Deflector.'
  },
  {
    id: 'ext_front_ortho',
    name: 'Bow-On Studio Proportions (Ref 4 Front/Rear Ortho)',
    section: 'saucer',
    cameraPos: { x: 0, y: 8, z: -560 },
    targetPos: { x: 0, y: 8, z: 0 },
    description: 'Front orthographic studio perspective matching the ILM 6-foot model: convex elliptical dorsal saucer arch, 27m exposed neck throat, recessed almond deflector at Y = -26.8m, swan-neck curved pylons, and hooded horizontal stadium Bussards.'
  },
  {
    id: 'ext_separation_interface',
    name: 'Aft Stardrive & Cobra-Head Vista (Ref 3, 6, 7)',
    section: 'stardrive',
    cameraPos: { x: 92, y: 38, z: 245 },
    targetPos: { x: -10, y: 30, z: -25 },
    description: 'Over-the-nacelle aft Stardrive perspective framing the manta-winged Cobra-Head separation interface, Detachable Battle Bridge, and the Saucer Section auxiliary impulse engines at X = ±106m.'
  },
  {
    id: 'ext_deflector',
    name: 'Main Navigational Deflector Dish & Shoulders (Ref 5)',
    section: 'stardrive',
    cameraPos: { x: 42, y: -18, z: -56 },
    targetPos: { x: 0, y: -26.8, z: 22 },
    description: 'Close inspection of the recessed almond-contoured Main Navigational Deflector dish (Y = -26.8m, Z = +12.0m) tucked beneath the overhanging 135.2m flared Secondary Hull shoulders.'
  },
  {
    id: 'ext_bridge_module',
    name: 'Deck 1 Bridge & Observation Windows',
    section: 'saucer',
    cameraPos: { x: 36, y: 76, z: -112 },
    targetPos: { x: 0, y: 65.8, z: -136 },
    description: 'Close-up inspection of the smooth 128-segment dorsal Bridge teardrop superstructure, Captain’s Ready Room starboard window, and aft Observation Lounge viewports.'
  },
  {
    id: 'ext_ten_forward',
    name: 'Deck 10 Rim — Ten Forward Windows',
    section: 'saucer',
    cameraPos: { x: 0, y: 38.5, z: -342 },
    targetPos: { x: 0, y: 36.8, z: -314 },
    description: 'Close exterior inspection right in front of the Saucer bow rim, looking directly through the 5 panoramic windows into the vaulted Ten Forward lounge.'
  },
  {
    id: 'ext_shuttlebay',
    name: 'Deck 4 Main Shuttlebay 1, Skylight Grid & Saucer Impulse',
    section: 'saucer',
    cameraPos: { x: 0, y: 68, z: 98 },
    targetPos: { x: 0, y: 42, z: -28 },
    description: 'Dorsal aft saucer overlooking the sculpted curved-arch Main Shuttlebay 1 deckhouse, crisp 1701-D pennant, 2×(6×3) dorsal skylight grid, integrated S-curve aft saucer tail, and outboard twin saucer impulse engines.'
  },
  {
    id: 'ext_aft_fantail',
    name: 'Stardrive Shuttlebays 2 & 3 + Main Impulse (Ref 1, Ref 4)',
    section: 'stardrive',
    cameraPos: { x: 0, y: 26, z: 358 },
    targetPos: { x: 0, y: -16, z: 165 },
    description: 'Aft dorsal view of the squared-off Secondary Hull fantail transom (Z = +276.5m), Shuttlebay 2 (Port) & Shuttlebay 3 (Starboard) clamshell doors, golden pylon-root sensor pads, tapered dorsal spine, and 6-cell Main Impulse Engine.'
  },
  {
    id: 'ext_nacelles',
    name: 'Starboard Warp Nacelle & Hooded Bussard Collector (Ref 1, 4)',
    section: 'stardrive',
    cameraPos: { x: 192, y: 18, z: 18 },
    targetPos: { x: 123.5, y: -1.5, z: 165 },
    description: 'Close inspection of the 266.2m starboard warp nacelle (X = +123.5m, Y = -1.5m), streamlined hull cowl hooding the crimson Bussard ramscoop collector, ochre collar band, Starfleet red pennant, and aft dorsal vents.'
  }
];

export const ALL_DECKS = Array.from({ length: 42 }, (_, idx) => {
  const deck = idx + 1;
  const y = getDeckElevation(deck);
  const spec = getDeckSpecification(deck);
  return {
    deck,
    y,
    ...spec
  };
});

function getDeckSpecification(deck) {
  const specs = {
    1: {
      name: 'Main Bridge, Ready Room & Observation Lounge',
      section: 'saucer',
      centerZ: -137.5,
      radiusX: 26,
      radiusZ: 24,
      isHero: true,
      confidence: 'Tier A — Canonical Set',
      purpose: 'Primary Command & Senior Officer Briefing',
      facilities: ['Main Bridge', "Captain's Ready Room", 'Observation Lounge', 'Turbolifts 1 & 2', 'Emergency Bridge Turbolift']
    },
    2: {
      name: 'VIP Staterooms & Junior Officers Quarters',
      section: 'saucer',
      centerZ: -138.0,
      radiusX: 46,
      radiusZ: 40,
      isHero: false,
      confidence: 'Tier B — Technical Manual Plan',
      purpose: 'Officer Habitation & Upper Sensor Pod Access',
      facilities: ['Junior Officers Quarters', 'VIP Diplomatic Stateroom', 'Upper Sensor Maintenance', 'Deck 2 Turbolift Lobby']
    },
    3: {
      name: "Officers' Mess, Quartermaster & Forward RCS",
      section: 'saucer',
      centerZ: -138.0,
      radiusX: 74,
      radiusZ: 60,
      isHero: false,
      confidence: 'Tier B / C — Tech Manual & Extrapolation',
      purpose: 'Logistics, Dining & Attitude Control',
      facilities: ["Officers' Wardroom Mess", 'Quartermaster Supply Depot', 'Forward RCS Thruster Inspection Bay']
    },
    4: {
      name: 'Main Shuttlebay 1, Cargo Hold & Flight Control',
      section: 'saucer',
      centerZ: -64.0,
      radiusX: 105,
      radiusZ: 86,
      isHero: true,
      confidence: 'Tier A / B — Set & Tech Manual',
      purpose: 'Primary Flight Operations & Bulk Cargo Handling',
      facilities: ['Main Shuttlebay 1', 'Flight Control Balcony', 'Type-6 Shuttlecraft Goddard', 'Cargo Bay 1', 'Shuttle Maintenance Shop']
    },
    5: {
      name: 'Main Computer Core (Upper) & Phased Sensor Control',
      section: 'saucer',
      centerZ: -138.0,
      radiusX: 132,
      radiusZ: 105,
      isHero: false,
      confidence: 'Tier B — Technical Manual Plan',
      purpose: 'Isolinear Optical Processing & Primary Sensors',
      facilities: ['Saucer Computer Core Level 1', 'Subspace Transceiver Array Control', 'Science Administrative Offices']
    },
    6: {
      name: 'Saucer Impulse Engineering & Phaser Bank Control',
      section: 'saucer',
      centerZ: -138.0,
      radiusX: 158,
      radiusZ: 124,
      isHero: false,
      confidence: 'Tier B — Technical Manual Plan',
      purpose: 'Saucer Auxiliary Impulse & Upper Collimated Phaser Servicing',
      facilities: ['Saucer Impulse Reaction Chamber', 'Main Computer Core Level 2', 'Upper Dorsal Phaser Conduit']
    },
    7: {
      name: 'Xenobiology Labs, Counseling & Secondary Medical',
      section: 'saucer',
      centerZ: -138.0,
      radiusX: 182,
      radiusZ: 144,
      isHero: false,
      confidence: 'Tier B / C — Tech Manual & Extrapolation',
      purpose: 'Life Sciences Research & Ship Counselor Suite',
      facilities: ['Ship Counselor Office', 'Xenobiology Containment Lab', 'Secondary Medical Triage Ward']
    },
    8: {
      name: 'Senior Quarters, Transporter 1, Separation Airlock & Battle Bridge',
      section: 'saucer',
      hasStardriveSplit: true,
      centerZ: -18.0,
      radiusX: 204,
      radiusZ: 162,
      isHero: true,
      confidence: 'Tier A — Canonical Set (+ Tier C Interface)',
      purpose: 'Habitation, Personnel Transport & Hull Separation Interface / Battle Bridge',
      facilities: ['Senior Officer Quarters', 'Transporter Room 1', 'Saucer-Stardrive Separation Airlock', 'Battle Bridge (Stardrive Section)']
    },
    9: {
      name: 'Diplomatic Suites, Gymnasium & Docking Latch Bay',
      section: 'saucer',
      centerZ: -138.0,
      radiusX: 220,
      radiusZ: 175,
      isHero: false,
      confidence: 'Tier B / C — Tech Manual & Extrapolation',
      purpose: 'Ambassadorial Accommodations & Mechanical Separation Latches',
      facilities: ['Ambassadorial Guest Suite', 'Parises Squares / Crew Gymnasium', 'Primary Umbilical Latch Servicing']
    },
    10: {
      name: 'Ten Forward Lounge & Outer Saucer Rim Promenade',
      section: 'saucer',
      centerZ: -309.5,
      radiusX: 231,
      radiusZ: 180,
      isHero: true,
      confidence: 'Tier A — Canonical Set',
      purpose: 'Crew Recreation, Forward Observation & Rim Habitat',
      facilities: ['Ten Forward Lounge', 'Panoramic Bow Windows', 'Beverage Replicator Bar', 'Forward Escape Pod Access']
    },
    11: {
      name: 'Holodeck 4, Astrometrics Lab & Jefferies Junction',
      section: 'saucer',
      centerZ: -138.0,
      radiusX: 214,
      radiusZ: 168,
      isHero: true,
      confidence: 'Tier A / B — Canonical Set & Tech Manual',
      purpose: 'Holographic Simulation, Stellar Cartography & Service Conduits',
      facilities: ['Holodeck 4 (Interactive Programs)', 'Astrometrics & Stellar Lab', 'Saucer Jefferies Tube Hub']
    },
    12: {
      name: 'Primary Sickbay, CMO Office & Medical Laboratories',
      section: 'saucer',
      centerZ: -138.0,
      radiusX: 188,
      radiusZ: 148,
      isHero: true,
      confidence: 'Tier A — Canonical Set',
      purpose: 'Chief Medical Facility, Surgical Intensive Care & Bio-Research',
      facilities: ['Main Sickbay Surgical Clamshell', 'Recovery Biobed Ward', 'CMO Dr. Crusher Office', 'Medical Pathology Lab']
    },
    13: {
      name: 'Shuttlebays 2 & 3 (Stardrive), Arboretum & Family Quarters',
      section: 'saucer',
      centerZ: -138.0,
      radiusX: 156,
      radiusZ: 124,
      isHero: false,
      confidence: 'Tier B — Technical Manual Plan',
      purpose: 'Botanical Life Support, Civilian Schools & Neck Hangars',
      facilities: ['Botanical Arboretum', 'Primary School Classroom', 'Stardrive Dorsal Shuttlebays 2 & 3']
    },
    14: {
      name: 'Saucer Fusion Generators, Emergency Batteries & Geology Lab',
      section: 'saucer',
      centerZ: -138.0,
      radiusX: 122,
      radiusZ: 96,
      isHero: false,
      confidence: 'Tier B / C — Tech Manual & Extrapolation',
      purpose: 'Independent Saucer Power Generation & Planetary Science',
      facilities: ['Auxiliary Fusion Reactor 1', 'Sarium Krellide Battery Bank', 'Planetary Geology Assay Lab']
    },
    15: {
      name: 'Ventral Phaser Array Control & Lower Maintenance Ring',
      section: 'saucer',
      centerZ: -138.0,
      radiusX: 84,
      radiusZ: 68,
      isHero: false,
      confidence: 'Tier B / C — Tech Manual & Extrapolation',
      purpose: 'Lower Saucer Weapons Array & Environmental Scrubbers',
      facilities: ['Lower Collimated Phaser Control', 'Atmospheric Scrubber Matrix', 'Ventral Escape Pod Bays']
    },
    16: {
      name: "Captain's Yacht (Calypso) Docking Cradle & Lower Sensor Dome",
      section: 'saucer',
      centerZ: -138.0,
      radiusX: 44,
      radiusZ: 36,
      isHero: false,
      confidence: 'Tier B — Technical Manual Plan',
      purpose: 'Diplomatic Auxiliary Craft Dock & Planetary Sensor Array',
      facilities: ["Captain's Yacht Boarding Airlock", 'Ventral Planetary Sensor Array', 'Lower Tractor Beam Emitter']
    }
  };

  if (specs[deck]) return specs[deck];

  const stardriveSpecs = {
    17: { name: 'Neck Spine Level 17 — Security Armory & Brig', purpose: 'Detention Complex & Security Operations', facilities: ['Security Brig Holding Cells', 'Phaser Range & Armory', 'Neck Turbolift Trunk'] },
    18: { name: 'Neck Spine Level 18 — Emergency Transporters 5 & 6', purpose: 'Evacuation Transport & Neck Structural Truss', facilities: ['Emergency Evacuation Transporter 5', 'Structural Integrity Field Coil Room'] },
    19: { name: 'Neck Spine Level 19 — Auxiliary Fire Control', purpose: 'Redundant Tactical & Deflector Conduit Routing', facilities: ['Auxiliary Fire Control Center', 'EPS Vertical Power Trunk'] },
    20: { name: 'Neck Spine Level 20 — Computer Optical Router & Labs', purpose: 'Saucer-to-Stardrive Optical Data Bus', facilities: ['Optical Subprocessor Junction', 'High-Energy Physics Lab'] },
    21: { name: 'Neck Spine Level 21 — Waste Recycling & Water Reclamation', purpose: 'Closed-Loop Matter Replication Feedstock', facilities: ['Hydro-Reclamation Processors', 'Matter Synthesizer Storage'] },
    22: { name: 'Neck Spine Level 22 — Lower Neck Structural Junction', purpose: 'Neck-to-Secondary Hull Stress Frame', facilities: ['Trilithium Frame Stress Monitors', 'Inertial Damper Field Generator'] },
    23: { name: 'Stardrive Impulse Engineering & Pylon Root Junction', purpose: 'Stardrive Primary Impulse Propulsion', facilities: ['Stardrive Impulse Fusion Reactors', 'Warp Pylon Structural Root Access'] },
    24: { name: 'Secondary Computer Core (Upper) & Cargo Transporters', purpose: 'Stardrive Independent Computation', facilities: ['Stardrive Computer Core Level 1', 'Heavy Cargo Transporter Bay'] },
    25: { name: 'Forward Photon Torpedo Launcher & Magazine', purpose: 'Primary Ordnance Loading & Dispersal', facilities: ['Forward Torpedo Launch Tube', 'Reactant Ordnance Magazine', 'Torpedo Guidance Control'] },
    26: { name: 'Upper Deuterium Slush Storage Tanks (Forward)', purpose: 'Matter Fuel Reactant Reserve', facilities: ['Cryogenic Deuterium Tank Farm A', 'Magnetic Fuel Pumps'] },
    27: { name: 'Primary Deuterium Storage & Fuel Transfer Manifold', purpose: 'Main Matter Reactant Conditioning', facilities: ['Deuterium Slush Conditioning Matrix', 'Fuel Fill Ports (Port/Starboard)'] },
    28: { name: 'Lower Deuterium Storage & Cryogenic Pumps', purpose: 'Reactant Feed to Upper Matter Injectors', facilities: ['Cryo-Pump Station 4', 'Reactant Pre-Heater Conduit'] },
    29: { name: 'Secondary Computer Core (Lower) & Metallurgy Workshop', purpose: 'Engineering Computation & Fabrication', facilities: ['Stardrive Computer Core Level 2', 'Industrial Replicator & Metallurgy Lab'] },
    30: { name: 'Upper Matter Injector Assembly & Warp Core Head', purpose: 'Deuterium Reactant Stream Injection', facilities: ['Upper Matter Reactant Injector', 'Magnetic Constriction Segment 1'] },
    31: { name: 'Warp Core Upper Shaft & Subspace Field Distortion Lab', purpose: 'Upper Reaction Column & Warp Field Tuning', facilities: ['Warp Core Shaft Level 31', 'Subspace Field Harmonics Lab'] },
    32: { name: 'Main Navigational Deflector Upper Emitter Stage', purpose: 'Long-Range Particle Sweeping & Subspace Sensors', facilities: ['Deflector Upper Polaron Generator', 'Long-Range Sensor Array Processor'] },
    33: { name: 'Main Deflector High-Power Graviton Polarity Generators', purpose: 'Subspace Field Beam Projection', facilities: ['Graviton Polarity Source 1', 'Deflector Cooling Loop'] },
    34: { name: 'Main Deflector Control Room & Dish Alignment Hydraulics', purpose: 'Direct Deflector Dish Steering & Calibration', facilities: ['Deflector Control Station', 'Gimbal Torque Actuator Room'] },
    35: { name: 'Main Engineering Upper Mezzanine & Catwalk Level', purpose: 'Upper Warp Core Constriction Monitoring', facilities: ['Engineering Upper Catwalk', 'EPS Main Power Distribution Tap'] },
    36: {
      name: 'Main Engineering, Dilithium Chamber & Master Systems Display',
      section: 'stardrive',
      centerZ: 55.0,
      radiusX: 28,
      radiusZ: 38,
      isHero: true,
      confidence: 'Tier A — Canonical Set',
      purpose: 'Primary Warp Propulsion Control & Dilithium Articulation',
      facilities: ['Matter/Antimatter Reaction Chamber', 'Pool Table Operations Console', 'Master Systems Display (MSD)', 'Engineering Isolation Door', 'Jefferies Tube Access']
    },
    37: { name: 'Main Engineering Lower Pit & Plasma Transfer Conduits', purpose: 'Port/Starboard Warp Plasma Split to Nacelles', facilities: ['Port/Starboard Plasma Conduit Split', 'Lower Magnetic Constrictor Array'] },
    38: { name: 'Lower Antimatter Constrictor Column & Coolant Reserves', purpose: 'Antimatter Stream Containment & Cooling', facilities: ['Antimatter Magnetic Segment', 'Primary Coolant Heat Exchanger'] },
    39: { name: 'Antimatter Reactant Injector Assembly', purpose: 'Antihydrogen Stream Conditioning', facilities: ['Lower Antimatter Injector Nozzle', 'Magnetic Quench Override Room'] },
    40: { name: 'Antimatter Generator & Reactant Transfer Conduits', purpose: 'Emergency Antimatter Synthesis & Transfer', facilities: ['Quantum Charge Reversal Generator', 'Magnetic Transfer Tunnel'] },
    41: { name: 'Antimatter Storage Pods & Ejection Systems', purpose: 'Cryogenic Magnetic Antimatter Containment', facilities: ['Antimatter Pod Array (30 Pods)', 'Emergency Pod Ejection Locks'] },
    42: { name: 'Keel Antimatter Loading Port, Tractor Emitter & Warp Core Ejection Hatch', purpose: 'Ventral Keel Operations & Emergency Core Jettison', facilities: ['Ventral Warp Core Ejection Hatch', 'Aft Keel Tractor Beam Emitter', 'Antimatter Resupply Coupling'] }
  };

  const sd = stardriveSpecs[deck];
  if (sd.isHero) return sd;

  const isNeck = deck <= 28;
  const neckZ = 42.0 + (deck - 17) * 1.4;
  return {
    name: sd.name,
    section: 'stardrive',
    centerZ: isNeck ? neckZ : 86.0,
    radiusX: isNeck ? 14 : 42,
    radiusZ: isNeck ? 22 : 68,
    isHero: false,
    confidence: deck <= 34 || deck >= 40 ? 'Tier B — Technical Manual Plan' : 'Tier B / C — Tech Manual & Extrapolation',
    purpose: sd.purpose,
    facilities: sd.facilities
  };
}
