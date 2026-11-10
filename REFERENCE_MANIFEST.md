# USS Enterprise NCC-1701-D — Reference Manifest & Spatial Architecture

## 1. Visual Era & Configuration Standard
- **Era Selected**: Late-Series *Star Trek: The Next Generation* Television Configuration (Seasons 5–7, c. 2368–2370 / Stardates 45000–47999).
- **Interior Aesthetic**: Production designer Herman Zimmerman, Richard James, and Andrew Probert television sets; Michael Okuda LCARS ("Okudagram") graphic design; warm neutral sand/beige wall panels (`#d8cab8`), curved structural ribs, mauve/burgundy and slate-blue carpeting, polished cherry/teak wood accents (Bridge tactical horseshoe, Ready Room, Observation Lounge), and diffused warm overhead lighting covenants (`3400K–4200K`).
- **Explicit Exclusions**:
  - Does **not** combine *Star Trek: Generations* film bridge additions (raised side sensor steps, dimmed theatrical spot lighting, or extra side alcoves).
  - Does **not** mix *Constitution*-class (NCC-1701 / 1701-A), *Sovereign*-class (NCC-1701-E), or *Intrepid*-class visual components.

---

## 2. Exterior Dimensions, Proportions & Coordinate Frame
Based on Rick Sternbach & Michael Okuda's *Star Trek: The Next Generation Technical Manual* (1991) and Andrew Probert's original Galaxy-class orthographic plans:

| Metric | Specification | In-Engine Scale (`1 unit = 1.0 m`) |
| :--- | :--- | :--- |
| **Overall Length (Z-Axis)** | `642.51 m` | `Z = -321.25 m` (Bow Rim) to `Z = +321.26 m` (Nacelle Aft Tip) |
| **Overall Beam / Width (X-Axis)** | `463.73 m` | `X = -231.86 m` (Port Rim) to `X = +231.86 m` (Starboard Rim) |
| **Overall Height (Y-Axis)** | `137.50 m` | `Y = +68.75 m` (Deck 1 Bridge Apex) to `Y = -68.75 m` (Deck 42 Keel) |
| **Saucer Planform** | Elliptical (`463.73 m × 364.0 m`) | Centered at `(X = 0, Z = -139.25 m)`, Decks 1–16 |
| **Stardrive Engineering Hull** | `395.0 m` length (`Z = -32 m` to `+321.26 m`) | Neck Decks 8–23, Secondary Hull Decks 23–42 |
| **Warp Nacelles (Paired)** | `304.8 m` length each | Centered at `X = ±168.0 m, Y = +31.5 m, Z = +168.0 m` |
| **Total Decks** | `42 Decks` | `3.25 m` nominal deck-to-deck height (`2.65 m` clear ceiling + `0.60 m` deck truss/conduit plenum) |

### Exterior Recognition Landmarks
- **Primary Hull (Saucer)**: Broad 1.27:1 elliptical planform with terraced dorsal decks (Decks 1–9), thickest rim band at Deck 10 (forward panoramic windows of Ten Forward), upper/lower collimated phaser arrays, 400+ dorsal and ventral lifeboat (escape pod) hatches, upper `USS ENTERPRISE / NCC-1701-D` registry with red pinstripe pennant, and aft dorsal impulse engine housing + Main Shuttlebay 1 clamshell doors (Deck 4).
- **Separation Plane & Cobra-Head Neck**: Sloped dorsal-to-ventral separation interface following the researched Andrew Probert / ILM 6-foot model contour. When separated, the Stardrive section reveals the aerodynamic "cobra-head" upper fairing, the **Battle Bridge module** (Deck 8 Stardrive), dual heavy umbilical latches, and alignment guide channels.
- **Secondary Hull (Stardrive)**: Swept curved neck with forward torpedo launcher (Deck 25), deep copper/gold-Dish **Main Navigational Deflector** with blue/amber inner sensor glow (Decks 32–37), aft Shuttlebays 2 & 3 on the dorsal fantail (Deck 13), and gracefully upswept anhedral-to-dihedral **Warp Pylons** terminating in paired **Warp Nacelles** with glowing crimson **Bussard Ramscoop Collectors** and cerulean **Warp Field Grilles**.

---

## 3. Complete 42-Deck Structural & Room Manifest

Every deck is assigned an explicit physical `Y` elevation inside the 3D hull envelope (`Y = 68.75 - deck * 3.25`), bounded by the true local hull cross-section (`saucer` vs `stardrive`), and accessible via the Turbolift network and Cutaway/Exploded inspection modes.

### Confidence Tier Legend
- **Tier A — Canonical Set & Episode Layout**: Directly modeled from TNG studio set blueprints (Stage 8, Stage 9, Stage 16) and episode cinematography.
- **Tier B — Published Technical Manual / Orthographic Plan**: Modeled from Sternbach/Okuda *TNG Technical Manual* and Ed Whitefire deck plans.
- **Tier C — Architecturally Consistent Extrapolation**: Connecting lobbies, support rooms, sanitation bays, separation airlock interface, and modular secondary decks designed in strict adherence to TNG architectural rules.

| Deck | Section | Elevation (`Y`) | Primary Compartments & Modeled Spaces | Confidence |
| :--- | :--- | :--- | :--- | :--- |
| **Deck 1** | Saucer | `+65.50 m` | **Main Bridge**, **Captain's Ready Room** (starboard viewport), **Observation Lounge** (aft viewports), Turbolifts 1 & 2 | **Tier A** (Canonical Set) |
| **Deck 2** | Saucer | `+62.25 m` | Junior Officers' Quarters, VIP Diplomatic Stateroom, Upper Sensor Pod Access, Saucer Turbolift Lobby | **Tier B / C** |
| **Deck 3** | Saucer | `+59.00 m` | Officers' Mess, Quartermaster Store, Forward RCS Thruster Service Access | **Tier B / C** |
| **Deck 4** | Saucer | `+55.75 m` | **Main Shuttlebay (Bay 1)** with Space Doors & Type-6 Shuttle *Goddard*, Flight Control Booth, Cargo Hold 1, Maintenance Workshop | **Tier A / B** |
| **Deck 5** | Saucer | `+52.50 m` | Main Computer Core (Upper Saucer Level), Phased Array Sensor Control, Science Offices | **Tier B / C** |
| **Deck 6** | Saucer | `+49.25 m` | Saucer Impulse Reaction Control, Main Computer Core (Mid Level), Primary Phaser Bank Servicing | **Tier B / C** |
| **Deck 7** | Saucer | `+46.00 m` | Sickbay Secondary Ward, Counseling Offices, Xenobiology Laboratories | **Tier B / C** |
| **Deck 8 (Saucer)** | Saucer | `+42.75 m` | **Senior Crew Quarters** (with exterior rim windows), **Transporter Room 1**, Curved Saucer Corridor, **Saucer Separation Interface Airlock** | **Tier A / C** |
| **Deck 8 (Stardrive)** | Stardrive | `+42.75 m` | **Battle Bridge** (Tactical Command Module), Stardrive Separation Airlock, Weapons Systems Closet, Dedicated Stardrive Turbolift | **Tier A / B** |
| **Deck 9** | Saucer & Neck | `+39.50 m` | Diplomatic Suites, Crew Gymnasium, Saucer-to-Neck Docking Latch Machinery | **Tier B / C** |
| **Deck 10** | Saucer Rim | `+36.25 m` | **Ten Forward Lounge** (Forward Rim Panoramic Windows, Bar, Replicator Service), Forward Rim Corridor, Lounge Support & Sanitation | **Tier A** (Canonical Set) |
| **Deck 11** | Saucer | `+33.00 m` | **Holodeck 1** (Selectable 3D Environments & Control Arch), **Science Lab / Astrometrics**, Jefferies Tube Junction | **Tier A / B** |
| **Deck 12** | Saucer | `+29.75 m` | **Primary Sickbay** (Diagnostic Biobeds, Surgical Clamshell, CMO Office, Medical Lab), Life Support Monitoring | **Tier A** (Canonical Set) |
| **Deck 13** | Saucer & Stardrive | `+26.50 m` | Shuttlebays 2 & 3 (Stardrive Dorsal Neck), Botanical Arboretum, Civilian Family Quarters | **Tier B / C** |
| **Deck 14** | Saucer & Neck | `+23.25 m` | Saucer Auxiliary Fusion Generators, Emergency Batteries, Geological Assay Labs | **Tier B / C** |
| **Deck 15** | Saucer & Neck | `+20.00 m` | Ventral Phaser Array Control, Maintenance Shops, Lower Saucer Corridor Ring | **Tier B / C** |
| **Deck 16** | Saucer & Neck | `+16.75 m` | **Captain's Yacht (*Calypso*) Docking Bay**, Ventral Planetary Sensor Array | **Tier B / C** |
| **Decks 17–22** | Stardrive Neck | `+13.50 m` to `-2.75 m` | Neck Structural Spine, Cross-Connect Turbolift Trunks, Brig / Detention Cells, Emergency Transporters | **Tier B / C** |
| **Decks 23–29** | Stardrive | `-6.00 m` to `-25.50 m` | Aft Impulse Engine Engineering, **Forward Photon Torpedo Launcher** (Deck 25), Deuterium Slush Storage Tanks (Decks 26–29) | **Tier B / C** |
| **Decks 30–35** | Stardrive | `-28.75 m` to `-45.00 m` | Matter Injectors, Upper Warp Core Shaft, Secondary Computer Core, Main Deflector Control (Deck 34) | **Tier B / C** |
| **Deck 36** | Stardrive | `-48.25 m` | **Main Engineering** (Multilevel Matter/Antimatter Warp Core, Pool Table Console, Master Systems Display, Mezzanine Catwalk, Isolation Door, Jefferies Tube Crawlway) | **Tier A** (Canonical Set) |
| **Decks 37–42** | Stardrive Keel | `-51.50 m` to `-67.75 m` | Antimatter Injection Reactors, Antimatter Storage Pods (Deck 41), Tractor Beam Emitter & Keel Sensor Array (Deck 42) | **Tier B / C** |

---

## 4. Documented vs. Extrapolated Spaces Disclosure
- **Documented Spaces**: The Main Bridge, Ready Room, Observation Lounge, Ten Forward, Main Engineering, Primary Sickbay, Transporter Room 1, Senior Crew Quarters, Battle Bridge, Holodeck 1, and Curved Corridor geometry follow on-screen TNG Season 5–7 layouts and proportions.
- **Extrapolated Connecting Spaces**: Because television sets were freestanding soundstage constructs, the exact vestibule transitions between the Main Bridge, Ready Room, Observation Lounge, and the Deck 8 Saucer-to-Stardrive separation docking corridor are architecturally extrapolated so that every room fits inside the true 3D hull surface without overlapping or protruding into space, and so that windows look directly out through matching exterior hull openings.

---

## 5. Asset Sources & Attribution
- **3D Models & Architecture**: 100% original procedural Three.js geometry constructed in `src/exterior/` and `src/interior/` using parametric curves, lathe profiles, extruded hull contours, and instanced details.
- **Textures & LCARS Graphics**: 100% original procedural HTML5 Canvas 2D textures (`src/utils/TextureGenerator.js`) and custom DOM/Canvas LCARS vector panels (`src/ui/LCARSTerminal.js`).
- **Audio Synthesis**: 100% original real-time Web Audio API procedural synthesis (`src/audio/SoundManager.js`) generating TNG bridge ambiance, warp core thrum, pneumatic door hiss, LCARS key-chirps, transporter harmonic sparkle, and red alert klaxons without external audio file dependencies.
