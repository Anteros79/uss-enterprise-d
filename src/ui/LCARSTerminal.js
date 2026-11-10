// USS Enterprise NCC-1701-D — Functional LCARS Computer Terminal System
// Implements all 12 required LCARS applications + 42-Deck Coverage & Reference Manifest Inspector.
// Every control reads and mutates the central ShipState singleton, producing immediate 3D results.

import { HERO_ROOMS, ALL_DECKS, EXTERIOR_INSPECTION_POINTS } from '../data/DeckRegistry.js';
import { SEPARATION_STATES } from '../state/ShipState.js';
import { soundManager } from '../audio/SoundManager.js';

export class LCARSTerminal {
  constructor(shipState, subsystemManager, playerController) {
    this.shipState = shipState;
    this.subsystems = subsystemManager;
    this.player = playerController;

    this.activeApp = 'map';
    this.dialog = document.getElementById('lcars-dialog');
    this.titleEl = document.getElementById('lcars-dialog-title');
    this.navEl = document.getElementById('lcars-app-nav');
    this.contentEl = document.getElementById('lcars-app-content');

    this.apps = [
      { id: 'map', label: '01 · SHIP MAP & TURBOLIFT', color: 'amber' },
      { id: 'separation', label: '02 · SAUCER SEPARATION', color: 'orange' },
      { id: 'warp', label: '03 · WARP CORE STATUS', color: 'sky' },
      { id: 'power', label: '04 · EPS POWER GRID', color: 'gold' },
      { id: 'doors', label: '05 · DOOR & ACCESS CTRL', color: 'lavender' },
      { id: 'lighting', label: '06 · LIGHTING & ALERTS', color: 'amber' },
      { id: 'environment', label: '07 · ENVIRONMENTAL', color: 'sky' },
      { id: 'viewscreen', label: '08 · VIEWSCREEN CTRL', color: 'gold' },
      { id: 'sensors', label: '09 · SENSOR DEMO', color: 'lavender' },
      { id: 'transporter', label: '10 · TRANSPORTER CTRL', color: 'orange' },
      { id: 'shuttlebay', label: '11 · SHUTTLE & HOLODECK', color: 'sky' },
      { id: 'sickbay', label: '12 · SICKBAY, LOGS & MANIFEST', color: 'amber' }
    ];

    this.initDialog();
    this.shipState.on('openTerminal', ({ appId, title }) => {
      this.open(appId || 'map', title);
    });
    this.shipState.on('change', () => {
      if (this.dialog && this.dialog.open) {
        this.renderActiveApp();
      }
    });
  }

  initDialog() {
    if (!this.dialog) return;

    // Fallback for <dialog closedby="any"> where native closedBy is missing
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const outside = (e, dlg) => {
        const r = dlg.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };
      let pressedOutside = false;
      this.dialog.addEventListener('pointerdown', (e) => {
        pressedOutside = outside(e, this.dialog);
      });
      this.dialog.addEventListener('pointerup', (e) => {
        if (pressedOutside && outside(e, this.dialog)) {
          this.dialog.close();
        }
      });
    }

    this.dialog.addEventListener('close', () => {
      this.dialog.returnValue = '';
      soundManager.playLCARSChirp('select');
    });

    this.renderNav();
  }

  open(appId = 'map', customTitle = null) {
    if (!this.dialog) return;
    this.activeApp = appId;
    if (customTitle && this.titleEl) {
      this.titleEl.textContent = `LCARS 47457 // ${customTitle.toUpperCase()}`;
    } else if (this.titleEl) {
      const appObj = this.apps.find(a => a.id === appId);
      this.titleEl.textContent = `LCARS 47457 // ${appObj ? appObj.label : 'MAIN COMPUTER'}`;
    }
    this.renderNav();
    this.renderActiveApp();
    if (!this.dialog.open) {
      this.dialog.showModal();
    }
  }

  close() {
    if (this.dialog && this.dialog.open) {
      this.dialog.close();
    }
  }

  renderNav() {
    if (!this.navEl) return;
    this.navEl.innerHTML = '';
    for (const app of this.apps) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `lcars-nav-btn lcars-${app.color} ${this.activeApp === app.id ? 'is-active' : ''}`;
      btn.textContent = app.label;
      btn.addEventListener('click', () => {
        soundManager.playLCARSChirp('select');
        this.activeApp = app.id;
        if (this.titleEl) this.titleEl.textContent = `LCARS 47457 // ${app.label}`;
        this.renderNav();
        this.renderActiveApp();
      });
      this.navEl.appendChild(btn);
    }
  }

  renderActiveApp() {
    if (!this.contentEl) return;
    const s = this.shipState;

    switch (this.activeApp) {
      case 'map':
        this.renderMapAndTurboliftApp(s);
        break;
      case 'separation':
        this.renderSeparationApp(s);
        break;
      case 'warp':
        this.renderWarpCoreApp(s);
        break;
      case 'power':
        this.renderPowerApp(s);
        break;
      case 'doors':
        this.renderDoorsApp(s);
        break;
      case 'lighting':
        this.renderLightingApp(s);
        break;
      case 'environment':
        this.renderEnvironmentApp(s);
        break;
      case 'viewscreen':
        this.renderViewscreenApp(s);
        break;
      case 'sensors':
        this.renderSensorsApp(s);
        break;
      case 'transporter':
        this.renderTransporterApp(s);
        break;
      case 'shuttlebay':
        this.renderShuttleAndHolodeckApp(s);
        break;
      case 'sickbay':
        this.renderSickbayLogsManifestApp(s);
        break;
    }
  }

  // ----------------------------------------------------------------------------
  // 01. SHIP MAP, TURBOLIFT & 42-DECK ROUTING
  // ----------------------------------------------------------------------------
  renderMapAndTurboliftApp(s) {
    const isSep = s.isSeparated();
    this.contentEl.innerHTML = `
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>TURBOLIFT & LANDMARK COMPARTMENT ROUTING</h3>
          <p class="lcars-sub">
            Current Location: <strong>${s.currentRoomName}</strong> | Active Hull: <strong>${s.playerSection.toUpperCase()}</strong>
            ${isSep ? '<span class="lcars-badge-alert">SAUCER SEPARATED — CROSS-HULL TUBES LOCKED</span>' : '<span class="lcars-badge-ok">HULLS DOCKED — ALL ROUTES OPEN</span>'}
          </p>
          <div class="lcars-status-banner">${s.turbolift.statusMessage}</div>
          <label class="lcars-checkbox-row">
            <input type="checkbox" id="tl-express-toggle" ${s.turbolift.expressMode ? 'checked' : ''}>
            <span>Enable Express Turbolift Mode <em>[Time Compressed 5x Transit]</em></span>
          </label>
          <div class="lcars-room-list">
            ${HERO_ROOMS.map(r => {
              const blocked = isSep && r.section !== s.playerSection;
              return `
                <div class="lcars-room-item ${blocked ? 'is-disabled' : ''}">
                  <div>
                    <strong>Deck ${r.deck} — ${r.name}</strong>
                    <small>${r.section.toUpperCase()} | ${r.confidence}</small>
                  </div>
                  <div class="lcars-btn-group">
                    <button type="button" class="lcars-action-btn" data-tl-room="${r.id}" data-tl-deck="${r.deck}" ${blocked ? 'disabled' : ''}>
                      Ride Turbolift
                    </button>
                    <button type="button" class="lcars-action-btn secondary" data-jump-room="${r.id}">
                      Direct Camera Transfer
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="lcars-card">
          <h3>ALL 42 DECKS — DIRECT TURBOLIFT & DECK COVERAGE</h3>
          <p class="lcars-sub">Every deck (1–42) fits inside the physical Galaxy-class hull envelope and has a navigable layout.</p>
          <div class="lcars-deck-scroll">
            ${ALL_DECKS.map(d => {
              const blocked = isSep && d.section !== s.playerSection;
              return `
                <div class="lcars-deck-row">
                  <div>
                    <span class="lcars-deck-tag">DECK ${String(d.deck).padStart(2, '0')}</span>
                    <strong>${d.name}</strong>
                    <small>Elev: ${d.y}m | ${d.section.toUpperCase()} | ${d.confidence}</small>
                  </div>
                  <button type="button" class="lcars-action-btn" data-any-deck="${d.deck}" ${blocked ? 'disabled' : ''}>
                    ${blocked ? 'Cross-Hull Locked' : `Go to Deck ${d.deck}`}
                  </button>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    this.contentEl.querySelector('#tl-express-toggle')?.addEventListener('change', (e) => {
      s.turbolift.expressMode = e.target.checked;
      soundManager.playLCARSChirp('select');
    });

    this.contentEl.querySelectorAll('[data-tl-room]').forEach(btn => {
      btn.addEventListener('click', () => {
        const roomId = btn.getAttribute('data-tl-room');
        const deck = Number(btn.getAttribute('data-tl-deck'));
        const res = this.subsystems.startTurboliftJourney(deck, roomId);
        if (res.ok) this.close();
      });
    });

    this.contentEl.querySelectorAll('[data-jump-room]').forEach(btn => {
      btn.addEventListener('click', () => {
        const roomId = btn.getAttribute('data-jump-room');
        this.player.enterRoomById(roomId);
        this.close();
      });
    });

    this.contentEl.querySelectorAll('[data-any-deck]').forEach(btn => {
      btn.addEventListener('click', () => {
        const deck = Number(btn.getAttribute('data-any-deck'));
        const res = this.subsystems.startTurboliftJourney(deck, null);
        if (res.ok) this.close();
      });
    });
  }

  // ----------------------------------------------------------------------------
  // 02. SAUCER SEPARATION & INDEPENDENT FLIGHT HELM
  // ----------------------------------------------------------------------------
  renderSeparationApp(s) {
    this.contentEl.innerHTML = `
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>SAUCER SEPARATION STATE MACHINE</h3>
          <p class="lcars-sub">Reversible 10-Stage Galaxy-Class Hull Separation & Docking Sequence</p>
          <div class="lcars-state-chain">
            ${SEPARATION_STATES.map(st => `
              <div class="lcars-state-pill ${s.separationState === st ? 'is-current' : ''}">
                ${st}
              </div>
            `).join('')}
          </div>

          <div class="lcars-telemetry-box">
            <div><span>CURRENT STATE:</span> <strong>${s.separationState.toUpperCase()}</strong></div>
            <div><span>DECK 8 BOUNDARY DOORS:</span> <strong>${s.crossingRoutesLocked ? 'SEALED & LOCKED' : 'OPEN / AUTO'}</strong></div>
            <div><span>MAGNETIC DOCKING CLAMPS:</span> <strong>${s.dockingClampsLatched ? 'LATCHED (GREEN)' : 'RELEASED (AMBER/RED)'}</strong></div>
            <div><span>MAIN BRIDGE AUTHORITY:</span> <strong>${s.commandAuthority.mainBridgeControls}</strong></div>
            <div><span>BATTLE BRIDGE AUTHORITY:</span> <strong>${s.commandAuthority.battleBridgeControls}</strong></div>
          </div>

          <div class="lcars-btn-group" style="margin-top:14px;">
            <button type="button" class="lcars-action-btn warn" id="btn-init-sep" ${s.separationState !== 'Docked' ? 'disabled' : ''}>
              INITIATE SAUCER SEPARATION
            </button>
            <button type="button" class="lcars-action-btn" id="btn-init-dock" ${s.separationState !== 'Independent flight' && s.separationState !== 'Separating' ? 'disabled' : ''}>
              EXECUTE RENDEZVOUS & RECONNECT
            </button>
          </div>
        </div>

        <div class="lcars-card">
          <h3>INDEPENDENT SPACECRAFT HELM &COMMAND</h3>
          <p class="lcars-sub">
            When separated, Main Bridge steers the Saucer Section (Impulse/RCS Only — no warp nacelles) and Battle Bridge steers the Stardrive Section (Full Warp & Impulse).
          </p>
          <div class="lcars-helm-panel">
            <h4>SAUCER SECTION HELM (Main Bridge Authority)</h4>
            <p>Position: (${s.saucerPose.x.toFixed(1)}m, ${s.saucerPose.y.toFixed(1)}m, ${s.saucerPose.z.toFixed(1)}m) | Propulsion: Sublight Fusion Impulse Only</p>
            <div class="lcars-btn-group">
              <button type="button" class="lcars-action-btn" data-saucer-helm="port" ${!s.isSeparated() ? 'disabled' : ''}>Yaw Port</button>
              <button type="button" class="lcars-action-btn" data-saucer-helm="ahead" ${!s.isSeparated() ? 'disabled' : ''}>Impulse Ahead (50%)</button>
              <button type="button" class="lcars-action-btn" data-saucer-helm="stop" ${!s.isSeparated() ? 'disabled' : ''}>All Stop</button>
              <button type="button" class="lcars-action-btn" data-saucer-helm="stbd" ${!s.isSeparated() ? 'disabled' : ''}>Yaw Starboard</button>
            </div>
          </div>

          <div class="lcars-helm-panel" style="margin-top:12px;">
            <h4>STARDRIVE SECTION HELM (Battle Bridge Authority)</h4>
            <p>Position: (${s.stardrivePose.x.toFixed(1)}m, ${s.stardrivePose.y.toFixed(1)}m, ${s.stardrivePose.z.toFixed(1)}m) | Propulsion: Warp Core + Impulse</p>
            <div class="lcars-btn-group">
              <button type="button" class="lcars-action-btn" data-sd-helm="port" ${!s.isSeparated() ? 'disabled' : ''}>Yaw Port</button>
              <button type="button" class="lcars-action-btn" data-sd-helm="ahead" ${!s.isSeparated() ? 'disabled' : ''}>Impulse Ahead (50%)</button>
              <button type="button" class="lcars-action-btn" data-sd-helm="stop" ${!s.isSeparated() ? 'disabled' : ''}>All Stop</button>
              <button type="button" class="lcars-action-btn" data-sd-helm="stbd" ${!s.isSeparated() ? 'disabled' : ''}>Yaw Starboard</button>
            </div>
          </div>

          <div class="lcars-btn-group" style="margin-top:14px;">
            <button type="button" class="lcars-action-btn secondary" id="btn-jump-main-bridge">Transfer to Main Bridge (Saucer)</button>
            <button type="button" class="lcars-action-btn secondary" id="btn-jump-battle-bridge">Transfer to Battle Bridge (Stardrive)</button>
          </div>
        </div>
      </div>
    `;

    this.contentEl.querySelector('#btn-init-sep')?.addEventListener('click', () => {
      soundManager.playLCARSChirp('confirm');
      s.initiateSeparationSequence();
    });

    this.contentEl.querySelector('#btn-init-dock')?.addEventListener('click', () => {
      soundManager.playLCARSChirp('confirm');
      s.initiateReconnectionSequence();
    });

    this.contentEl.querySelectorAll('[data-saucer-helm]').forEach(btn => {
      btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-saucer-helm');
        if (cmd === 'port') s.saucerPose.yaw += 0.15;
        if (cmd === 'stbd') s.saucerPose.yaw -= 0.15;
        if (cmd === 'ahead') s.saucerPose.impulsePct = 50;
        if (cmd === 'stop') s.saucerPose.impulsePct = 0;
        soundManager.playLCARSChirp('confirm');
        s.addLog('MAIN BRIDGE HELM', `Saucer Section helm command executed: ${cmd.toUpperCase()}.`);
        this.renderActiveApp();
      });
    });

    this.contentEl.querySelectorAll('[data-sd-helm]').forEach(btn => {
      btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-sd-helm');
        if (cmd === 'port') s.stardrivePose.yaw += 0.15;
        if (cmd === 'stbd') s.stardrivePose.yaw -= 0.15;
        if (cmd === 'ahead') s.stardrivePose.impulsePct = 50;
        if (cmd === 'stop') s.stardrivePose.impulsePct = 0;
        soundManager.playLCARSChirp('confirm');
        s.addLog('BATTLE BRIDGE HELM', `Stardrive Section helm command executed: ${cmd.toUpperCase()}.`);
        this.renderActiveApp();
      });
    });

    this.contentEl.querySelector('#btn-jump-main-bridge')?.addEventListener('click', () => {
      this.player.enterRoomById('deck1_bridge');
      this.close();
    });

    this.contentEl.querySelector('#btn-jump-battle-bridge')?.addEventListener('click', () => {
      this.player.enterRoomById('deck8_battle_bridge');
      this.close();
    });
  }

  // ----------------------------------------------------------------------------
  // 03. WARP CORE STATUS & OUTPUT CONTROL
  // ----------------------------------------------------------------------------
  renderWarpCoreApp(s) {
    const wc = s.warpCore;
    this.contentEl.innerHTML = `
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>MATTER / ANTIMATTER REACTION ASSEMBLY (DECK 36)</h3>
          <p class="lcars-sub">Adjustments here directly modulate the 3D Warp Core pulse speed, audio harmonics, Master Systems Display, and exterior Nacelle warp grilles.</p>
          <div class="lcars-slider-block">
            <label for="warp-factor-slider">SIMULATED WARP FIELD OUTPUT: <strong>WARP ${wc.warpFactor.toFixed(1)}</strong></label>
            <input type="range" id="warp-factor-slider" min="0" max="9.6" step="0.1" value="${wc.warpFactor}">
          </div>

          <div class="lcars-btn-group" style="margin-top:12px;">
            <button type="button" class="lcars-action-btn" data-warp-preset="0">Sublight (Warp 0.0)</button>
            <button type="button" class="lcars-action-btn" data-warp-preset="2">Cruise (Warp 2.0)</button>
            <button type="button" class="lcars-action-btn" data-warp-preset="6">High Cruise (Warp 6.0)</button>
            <button type="button" class="lcars-action-btn warn" data-warp-preset="9.6">Max Rated (Warp 9.6)</button>
          </div>

          <div class="lcars-btn-group" style="margin-top:12px;">
            <button type="button" class="lcars-action-btn ${wc.online ? 'warn' : ''}" id="btn-toggle-core">
              ${wc.online ? 'TAKE WARP CORE OFFLINE (COLD STANDBY)' : 'BRING WARP CORE ONLINE'}
            </button>
          </div>
        </div>

        <div class="lcars-card">
          <h3>DILITHIUM ARTICULATION & MAGNETIC CONSTRICTORS</h3>
          <div class="lcars-telemetry-box">
            <div><span>REACTION CHAMBER STATUS:</span> <strong>${wc.online ? 'ONLINE — NOMINAL' : 'OFFLINE — STANDBY'}</strong></div>
            <div><span>M/AM INTERMIX RATIO:</span> <strong>${wc.intermixRatio.toFixed(2)} : 1.00</strong></div>
            <div><span>CONSTRICTOR FREQUENCY:</span> <strong>${(42.0 + wc.warpFactor * 3.4).toFixed(1)} MHz</strong></div>
            <div><span>PLASMA COOLANT PRESSURE:</span> <strong>${(101.0 + wc.warpFactor * 2.1).toFixed(1)} kPa</strong></div>
            <div><span>SAUCER AUX FUSION IMPULSE:</span> <strong>ONLINE (DECK 6 / 14)</strong></div>
          </div>
        </div>
      </div>
    `;

    this.contentEl.querySelector('#warp-factor-slider')?.addEventListener('input', (e) => {
      s.setWarpFactor(e.target.value);
    });

    this.contentEl.querySelectorAll('[data-warp-preset]').forEach(btn => {
      btn.addEventListener('click', () => {
        soundManager.playLCARSChirp('confirm');
        s.setWarpFactor(btn.getAttribute('data-warp-preset'));
      });
    });

    this.contentEl.querySelector('#btn-toggle-core')?.addEventListener('click', () => {
      wc.online = !wc.online;
      soundManager.playLCARSChirp(wc.online ? 'confirm' : 'error');
      s.addLog('ENGINEERING', `Warp Core Reaction Assembly set to ${wc.online ? 'ONLINE' : 'OFFLINE STANDBY'}.`);
      s.emit('change', s);
    });
  }

  // ----------------------------------------------------------------------------
  // 04. ENGINEERING EPS POWER DISTRIBUTION
  // ----------------------------------------------------------------------------
  renderPowerApp(s) {
    const p = s.power;
    this.contentEl.innerHTML = `
      <div class="lcars-card">
        <h3>ELECTRO-PLASMA SYSTEM (EPS) POWER ALLOCATION</h3>
        <p class="lcars-sub">Shared across Main Bridge and Main Engineering. Lowering Life Support dims interior lighting; boosting Engines increases Warp Nacelle field output.</p>
        <div class="lcars-sliders-stack">
          ${[
            { key: 'engines', label: 'PROPULSION & WARP FIELD COILS' },
            { key: 'shields', label: 'DEFLECTOR SHIELDS & PHASER ARRAYS' },
            { key: 'lifeSupport', label: 'LIFE SUPPORT, LIGHTING & GRAVITY' },
            { key: 'sensors', label: 'LONG-RANGE SENSORS & COMPUTERS' }
          ].map(item => `
            <div class="lcars-slider-block">
              <label for="pwr-${item.key}">${item.label}: <strong>${p[item.key]}%</strong></label>
              <input type="range" id="pwr-${item.key}" data-pwr-sys="${item.key}" min="20" max="140" step="5" value="${p[item.key]}">
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this.contentEl.querySelectorAll('[data-pwr-sys]').forEach(inp => {
      inp.addEventListener('change', (e) => {
        soundManager.playLCARSChirp('confirm');
        s.setPowerAllocation(inp.getAttribute('data-pwr-sys'), e.target.value);
      });
    });
  }

  // ----------------------------------------------------------------------------
  // 05. DOOR & ACCESS CONTROL
  // ----------------------------------------------------------------------------
  renderDoorsApp(s) {
    this.contentEl.innerHTML = `
      <div class="lcars-card">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
          <div>
            <h3>SHIPWIDE DOOR, AIRLOCK & INTERLOCK CONTROL</h3>
            <p class="lcars-sub">Control automatic, manual, and security-locked states for all doors. Includes Emergency Override so the player can never be trapped.</p>
          </div>
          <button type="button" class="lcars-action-btn warn" id="btn-emergency-unlock">
            EMERGENCY OVERRIDE: UNLOCK & OPEN ALL DOORS
          </button>
        </div>

        <div class="lcars-deck-scroll" style="margin-top:12px;">
          ${Object.values(s.doors).map(d => `
            <div class="lcars-deck-row">
              <div>
                <span class="lcars-deck-tag">DECK ${d.deck}</span>
                <strong>${d.name}</strong>
                <small>State: <strong>${d.state.toUpperCase()}</strong> | Mode: ${d.mode.toUpperCase()} | Section: ${d.section.toUpperCase()}</small>
              </div>
              <div class="lcars-btn-group">
                <button type="button" class="lcars-action-btn" data-door-id="${d.id}" data-door-cmd="open_manual">Open</button>
                <button type="button" class="lcars-action-btn secondary" data-door-id="${d.id}" data-door-cmd="close_manual">Close</button>
                <button type="button" class="lcars-action-btn secondary" data-door-id="${d.id}" data-door-cmd="auto">Auto</button>
                <button type="button" class="lcars-action-btn warn" data-door-id="${d.id}" data-door-cmd="locked">Lock</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this.contentEl.querySelector('#btn-emergency-unlock')?.addEventListener('click', () => {
      soundManager.playLCARSChirp('confirm');
      s.unlockAllDoorsEmergency();
    });

    this.contentEl.querySelectorAll('[data-door-cmd]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-door-id');
        const cmd = btn.getAttribute('data-door-cmd');
        soundManager.playLCARSChirp('select');
        s.setDoorMode(id, cmd);
      });
    });
  }

  // ----------------------------------------------------------------------------
  // 06. LIGHTING & ALERT CONDITION CONTROL
  // ----------------------------------------------------------------------------
  renderLightingApp(s) {
    this.contentEl.innerHTML = `
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>SHIP ALERT CONDITION & GLOBAL ILLUMINATION</h3>
          <div class="lcars-btn-group">
            <button type="button" class="lcars-action-btn ${s.alertState === 'normal' ? 'is-active' : ''}" data-alert="normal">Condition Green (Normal)</button>
            <button type="button" class="lcars-action-btn ${s.alertState === 'reduced' ? 'is-active' : ''}" data-alert="reduced">Reduced / Night Shift</button>
            <button type="button" class="lcars-action-btn ${s.alertState === 'yellow' ? 'is-active' : ''}" data-alert="yellow">Yellow Alert</button>
            <button type="button" class="lcars-action-btn warn ${s.alertState === 'red' ? 'is-active' : ''}" data-alert="red">RED ALERT</button>
          </div>

          <div class="lcars-slider-block" style="margin-top:16px;">
            <label for="light-master-slider">MASTER INTERIOR ILLUMINATION: <strong>${Math.round(s.lighting.masterBrightness * 100)}%</strong></label>
            <input type="range" id="light-master-slider" min="0.15" max="1.3" step="0.05" value="${s.lighting.masterBrightness}">
          </div>
        </div>

        <div class="lcars-card">
          <h3>COMPARTMENT LIGHTING BREAKERS</h3>
          <div class="lcars-deck-scroll">
            ${HERO_ROOMS.filter(r => r.id !== 'deck8_sep_interface').map(r => {
              const isOn = s.lighting.roomLights[r.id] !== false;
              return `
                <div class="lcars-deck-row">
                  <div>
                    <strong>${r.name} (Deck ${r.deck})</strong>
                    <small>Status: ${isOn ? 'ILLUMINATED' : 'DARKENED'}</small>
                  </div>
                  <button type="button" class="lcars-action-btn ${isOn ? '' : 'warn'}" data-room-light="${r.id}">
                    ${isOn ? 'Turn Lights Off' : 'Turn Lights On'}
                  </button>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    this.contentEl.querySelectorAll('[data-alert]').forEach(btn => {
      btn.addEventListener('click', () => {
        soundManager.playLCARSChirp('confirm');
        s.setAlertState(btn.getAttribute('data-alert'));
      });
    });

    this.contentEl.querySelector('#light-master-slider')?.addEventListener('input', (e) => {
      s.lighting.masterBrightness = Number(e.target.value);
      s.emit('change', s);
    });

    this.contentEl.querySelectorAll('[data-room-light]').forEach(btn => {
      btn.addEventListener('click', () => {
        const rid = btn.getAttribute('data-room-light');
        s.lighting.roomLights[rid] = s.lighting.roomLights[rid] === false ? true : false;
        soundManager.playLCARSChirp('select');
        s.addLog('LIGHTING CONTROL', `Compartment lighting for ${rid} set to ${s.lighting.roomLights[rid] ? 'ON' : 'OFF'}.`);
        s.emit('change', s);
      });
    });
  }

  // ----------------------------------------------------------------------------
  // 07. ENVIRONMENTAL & GRAVITY CONTROL
  // ----------------------------------------------------------------------------
  renderEnvironmentApp(s) {
    const env = s.environment;
    this.contentEl.innerHTML = `
      <div class="lcars-card">
        <h3>ATMOSPHERIC, THERMAL & ARTIFICIAL GRAVITY GRID</h3>
        <p class="lcars-sub">Artificial gravity generators are physically locked to each hull assembly (+Y Up local axis) so rotating either ship in space never tilts occupants indoors.</p>
        <div class="lcars-grid-two">
          <div>
            <div class="lcars-slider-block">
              <label for="env-temp">HABITAT TEMPERATURE: <strong>${env.temperatureC.toFixed(1)} °C</strong></label>
              <input type="range" id="env-temp" min="16" max="28" step="0.5" value="${env.temperatureC}">
            </div>
            <div class="lcars-slider-block">
              <label for="env-hum">RELATIVE HUMIDITY: <strong>${env.humidityPct}%</strong></label>
              <input type="range" id="env-hum" min="25" max="75" step="1" value="${env.humidityPct}">
            </div>
          </div>
          <div class="lcars-telemetry-box">
            <div><span>ARTIFICIAL GRAVITY PLATING:</span> <strong>${env.gravityG.toFixed(2)} G (SECTION-ALIGNED)</strong></div>
            <div><span>ATMOSPHERIC PRESSURE:</span> <strong>${env.pressureKPa} kPa (NITROGEN/OXYGEN)</strong></div>
            <div><span>OXYGEN PARTIAL RATIO:</span> <strong>${env.oxygenPct}% NOMINAL</strong></div>
            <div><span>INERTIAL DAMPERS:</span> <strong>ONLINE — ZERO INTERNAL DRIFT</strong></div>
          </div>
        </div>
      </div>
    `;

    this.contentEl.querySelector('#env-temp')?.addEventListener('change', (e) => {
      env.temperatureC = Number(e.target.value);
      soundManager.playLCARSChirp('confirm');
      s.addLog('ENVIRONMENTAL', `Habitat temperature adjusted to ${env.temperatureC.toFixed(1)} °C.`);
      s.emit('change', s);
    });

    this.contentEl.querySelector('#env-hum')?.addEventListener('change', (e) => {
      env.humidityPct = Number(e.target.value);
      soundManager.playLCARSChirp('confirm');
      s.addLog('ENVIRONMENTAL', `Habitat relative humidity adjusted to ${env.humidityPct}%.`);
      s.emit('change', s);
    });
  }

  // ----------------------------------------------------------------------------
  // 08. MAIN BRIDGE & BATTLE BRIDGE VIEWSCREEN CONTROL
  // ----------------------------------------------------------------------------
  renderViewscreenApp(s) {
    const vs = s.viewscreen;
    this.contentEl.innerHTML = `
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>MAIN BRIDGE VIEWSCREEN SENSOR DIRECTION (DECK 1)</h3>
          <p class="lcars-sub">Renders the actual live 3D exterior scene from ship-mounted optical/subspace sensors onto the Deck 1 Main Viewscreen.</p>
          <div class="lcars-btn-group">
            ${[
              { id: 'forward', label: 'Forward Bow Optical Sensor' },
              { id: 'aft', label: 'Aft Dorsal / Stardrive Tracking Camera' },
              { id: 'planet', label: 'Planet Veridian IV Lock' },
              { id: 'tactical', label: 'Tactical Overlay + Bow Feed' }
            ].map(m => `
              <button type="button" class="lcars-action-btn ${vs.mainBridgeMode === m.id ? 'is-active' : ''}" data-main-vs="${m.id}">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="lcars-card">
          <h3>BATTLE BRIDGE VIEWSCREEN SENSOR DIRECTION (DECK 8 STARDRIVE)</h3>
          <p class="lcars-sub">Controls the live 3D camera feed on the Stardrive Battle Bridge forward viewscreen.</p>
          <div class="lcars-btn-group">
            ${[
              { id: 'forward', label: 'Stardrive Forward / Saucer Tracking' },
              { id: 'aft', label: 'Stardrive Aft Nacelle View' },
              { id: 'tactical', label: 'Battle Tactical Reticle Mode' }
            ].map(m => `
              <button type="button" class="lcars-action-btn ${vs.battleBridgeMode === m.id ? 'is-active' : ''}" data-bb-vs="${m.id}">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    this.contentEl.querySelectorAll('[data-main-vs]').forEach(btn => {
      btn.addEventListener('click', () => {
        vs.mainBridgeMode = btn.getAttribute('data-main-vs');
        vs.tacticalOverlay = (vs.mainBridgeMode === 'tactical');
        soundManager.playLCARSChirp('confirm');
        s.addLog('MAIN VIEWSCREEN', `Deck 1 Viewscreen switched to ${vs.mainBridgeMode.toUpperCase()} feed.`);
        s.emit('change', s);
      });
    });

    this.contentEl.querySelectorAll('[data-bb-vs]').forEach(btn => {
      btn.addEventListener('click', () => {
        vs.battleBridgeMode = btn.getAttribute('data-bb-vs');
        soundManager.playLCARSChirp('confirm');
        s.addLog('BATTLE BRIDGE VIEWSCREEN', `Battle Bridge Viewscreen switched to ${vs.battleBridgeMode.toUpperCase()} feed.`);
        s.emit('change', s);
      });
    });
  }

  // ----------------------------------------------------------------------------
  // 09. SENSOR DEMONSTRATION
  // ----------------------------------------------------------------------------
  renderSensorsApp(s) {
    const activeTarget = s.sensors.targets.find(t => t.id === s.sensors.activeTargetId) || s.sensors.targets[0];
    this.contentEl.innerHTML = `
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>LONG-RANGE & LATERAL SENSOR ARRAY TARGETING</h3>
          <div class="lcars-room-list">
            ${s.sensors.targets.map(t => `
              <div class="lcars-room-item ${t.id === activeTarget.id ? 'is-selected' : ''}">
                <div>
                  <strong>${t.name}</strong>
                  <small>Bearing: ${t.bearing} | Range: ${t.distanceKm.toLocaleString()} km</small>
                </div>
                <button type="button" class="lcars-action-btn" data-sensor-target="${t.id}">
                  Lock & Scan
                </button>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="lcars-card">
          <h3>ACTIVE TARGET TELEMETRY READOUT</h3>
          <div class="lcars-telemetry-box">
            <div><span>LOCKED TARGET:</span> <strong>${activeTarget.name}</strong></div>
            <div><span>CLASSIFICATION:</span> <strong>${activeTarget.classification}</strong></div>
            <div><span>BEARING / VECTOR:</span> <strong>${activeTarget.bearing}</strong></div>
            <div><span>SCAN RESOLUTION:</span> <strong>${s.sensors.scanning ? `SCANNING (${Math.round(s.sensors.scanProgress)}%)` : '100% LOCKED'}</strong></div>
            <div style="margin-top:8px;color:#fde68a;">${activeTarget.telemetry}</div>
          </div>
        </div>
      </div>
    `;

    this.contentEl.querySelectorAll('[data-sensor-target]').forEach(btn => {
      btn.addEventListener('click', () => {
        s.sensors.activeTargetId = btn.getAttribute('data-sensor-target');
        s.sensors.scanning = true;
        s.sensors.scanProgress = 0;
        soundManager.playLCARSChirp('trill');
        s.emit('change', s);
      });
    });
  }

  // ----------------------------------------------------------------------------
  // 10. TRANSPORTER CONTROL
  // ----------------------------------------------------------------------------
  renderTransporterApp(s) {
    const tr = s.transporter;
    this.contentEl.innerHTML = `
      <div class="lcars-card">
        <h3>TRANSPORTER ROOM 1 — MATTER-STREAM SITE-TO-SITE & PAD TRANSPORT</h3>
        <p class="lcars-sub">Select any destination in the modeled starship and click ENERGIZE to play the phase-transition particle beam effect and physically transport yourself (and any carried object) to the target compartment.</p>
        <div class="lcars-status-banner">${tr.statusText}</div>
        <div class="lcars-room-list" style="margin-top:12px;">
          ${HERO_ROOMS.map(r => `
            <div class="lcars-room-item ${tr.destinationRoomId === r.id ? 'is-selected' : ''}">
              <div>
                <strong>${r.name} (Deck ${r.deck})</strong>
                <small>Section: ${r.section.toUpperCase()} | Coordinates: (${r.spawnPos.x}, ${r.spawnPos.y}, ${r.spawnPos.z})</small>
              </div>
              <button type="button" class="lcars-action-btn warn" data-beam-dest="${r.id}">
                LOCK COORDINATES & ENERGIZE
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this.contentEl.querySelectorAll('[data-beam-dest]').forEach(btn => {
      btn.addEventListener('click', () => {
        const destId = btn.getAttribute('data-beam-dest');
        this.subsystems.executeTransporterSequence(destId);
        this.close();
      });
    });
  }

  // ----------------------------------------------------------------------------
  // 11. SHUTTLEBAY 1 & HOLODECK 4 CONTROL
  // ----------------------------------------------------------------------------
  renderShuttleAndHolodeckApp(s) {
    const sb = s.shuttlebay;
    const hd = s.holodeck;
    this.contentEl.innerHTML = `
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>MAIN SHUTTLEBAY 1 OPERATIONS (DECK 4)</h3>
          <p class="lcars-sub">Operate the dorsal saucer Clamshell Space Doors and launch Type-6 Shuttlecraft Goddard into 3D space.</p>
          <div class="lcars-telemetry-box">
            <div><span>SHUTTLECRAFT GODDARD:</span> <strong>${sb.shuttleState.toUpperCase()}</strong></div>
            <div><span>EXTERIOR SPACE DOORS:</span> <strong>${sb.spaceDoorsOpen ? 'OPEN TO SPACE' : 'CLOSED & SEALED'}</strong></div>
            <div><span>ATMOSPHERIC FORCEFIELD:</span> <strong>${sb.forcefieldActive ? 'ACTIVE (CONTAINMENT NOMINAL)' : 'STANDBY'}</strong></div>
          </div>

          <div class="lcars-btn-group" style="margin-top:12px;">
            <button type="button" class="lcars-action-btn warn" id="btn-launch-shuttle" ${sb.shuttleState !== 'Docked in Bay 1' ? 'disabled' : ''}>
              EXECUTE SHUTTLE LAUNCH & RECOVERY DEMO
            </button>
            <button type="button" class="lcars-action-btn" id="btn-toggle-bay-doors">
              ${sb.spaceDoorsOpen ? 'Close Clamshell Space Doors' : 'Open Clamshell Space Doors'}
            </button>
            <button type="button" class="lcars-action-btn secondary" id="btn-view-shuttlebay">
              Visit Main Shuttlebay (Deck 4)
            </button>
          </div>
        </div>

        <div class="lcars-card">
          <h3>HOLODECK 4 INTERACTIVE SIMULATOR (DECK 11 SAUCER)</h3>
          <p class="lcars-sub">${hd.spatialDisclosure}</p>
          <div class="lcars-telemetry-box" style="margin-bottom:10px;">
            <div><span>ACTIVE SIMULATION:</span> <strong>${hd.activeProgram.toUpperCase()}</strong></div>
            <div><span>KLINGON MOK'BARA SCORE:</span> <strong>${hd.klingonScore || 0} PTS (LEVEL ${hd.klingonLevel || 1})</strong></div>
            <div><span>221B BAKER ST CLUES:</span> <strong>${(hd.cluesFound || []).length} / 4 CLUES DEDUCED</strong></div>
            <div><span>STELLAR CARTOGRAPHY WARP LOCK:</span> <strong>${(hd.activeStarSystem || 'earth').toUpperCase()}</strong></div>
          </div>
          <div class="lcars-btn-group">
            ${[
              { id: 'tos_bridge', label: '1. Scotty\'s 1966 USS Enterprise NCC-1701 Bridge ("Relics")' },
              { id: 'klingon_arena', label: '2. Worf\'s Klingon Mok\'bara Combat Arena (Interactive Drones)' },
              { id: 'sherlock_noir', label: '3. 221B Baker Street / Dixon Hill Mystery (4 Clickable Clues)' },
              { id: 'stellar_cartography', label: '4. 3D Stellar Cartography & Live Ship Warp Destination' },
              { id: 'grid', label: '5. Yellow Laser Grid + Holographic Matter Spawner' }
            ].map(p => `
              <button type="button" class="lcars-action-btn ${hd.activeProgram === p.id ? 'is-active' : ''}" data-holo-prog="${p.id}">
                ${p.label}
              </button>
            `).join('')}
          </div>

          <div class="lcars-btn-group" style="margin-top:12px;">
            <button type="button" class="lcars-action-btn secondary" id="btn-toggle-arch">
              ${hd.archVisible ? 'Hide Holodeck Control Arch' : 'Computer: Show Arch'}
            </button>
            <button type="button" class="lcars-action-btn warn" id="btn-visit-holodeck">
              Enter Holodeck 4 Now (Deck 11)
            </button>
          </div>
        </div>
      </div>
    `;

    this.contentEl.querySelector('#btn-launch-shuttle')?.addEventListener('click', () => {
      this.subsystems.triggerShuttleLaunchAndRecovery();
    });

    this.contentEl.querySelector('#btn-toggle-bay-doors')?.addEventListener('click', () => {
      sb.spaceDoorsOpen = !sb.spaceDoorsOpen;
      soundManager.playDoorSound(sb.spaceDoorsOpen ? 'open' : 'close');
      s.addLog('SHUTTLEBAY 1', `Exterior Clamshell Space Doors ${sb.spaceDoorsOpen ? 'opened' : 'closed'}.`);
      s.emit('change', s);
    });

    this.contentEl.querySelector('#btn-view-shuttlebay')?.addEventListener('click', () => {
      this.player.enterRoomById('deck4_shuttlebay');
      this.close();
    });

    this.contentEl.querySelectorAll('[data-holo-prog]').forEach(btn => {
      btn.addEventListener('click', () => {
        hd.activeProgram = btn.getAttribute('data-holo-prog');
        soundManager.playLCARSChirp('confirm');
        s.addLog('HOLODECK 4', `Holographic simulation set to "${hd.activeProgram.toUpperCase()}".`);
        s.emit('change', s);
      });
    });

    this.contentEl.querySelector('#btn-toggle-arch')?.addEventListener('click', () => {
      hd.archVisible = !hd.archVisible;
      soundManager.playLCARSChirp('select');
      s.emit('change', s);
    });

    this.contentEl.querySelector('#btn-visit-holodeck')?.addEventListener('click', () => {
      this.player.enterRoomById('deck11_holodeck');
      this.close();
    });
  }

  // ----------------------------------------------------------------------------
  // 12. SICKBAY BIOBED SCAN, SHIP LOGS & REFERENCE MANIFEST
  // ----------------------------------------------------------------------------
  renderSickbayLogsManifestApp(s) {
    const med = s.sickbay;
    this.contentEl.innerHTML = `
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>PRIMARY SICKBAY BIOBED 1 DIAGNOSTIC (SIMULATION)</h3>
          <p class="lcars-sub">Fictional demonstration scan of a simulated humanoid subject on Deck 12 Biobed 1.</p>
          <div class="lcars-telemetry-box">
            <div><span>SUBJECT:</span> <strong>${med.subjectName}</strong></div>
            <div><span>SCAN STATUS:</span> <strong>${med.scanning ? `ACTIVE LASER SWEEP (${Math.round(med.scanProgress)}%)` : 'COMPLETE / STANDBY'}</strong></div>
            <div><span>CARDIAC RATE:</span> <strong>${med.heartRate} BPM (Sinus Rhythm)</strong></div>
            <div><span>ARTERIAL PRESSURE:</span> <strong>${med.bloodPressure}</strong></div>
            <div><span>ISOCORTICAL NEURAL INDEX:</span> <strong>${med.neuralIndex}</strong></div>
            <div><span>CORE TEMPERATURE:</span> <strong>${med.coreTemp}</strong></div>
            <div style="margin-top:6px;color:#86efac;">${med.diagnosis}</div>
          </div>
          <div class="lcars-btn-group" style="margin-top:10px;">
            <button type="button" class="lcars-action-btn" id="btn-run-biobed-scan">
              RUN BIOBED 1 DIAGNOSTIC SCAN
            </button>
            <button type="button" class="lcars-action-btn secondary" id="btn-visit-sickbay">
              Visit Sickbay (Deck 12)
            </button>
          </div>

          <h3 style="margin-top:18px;">LIVE SHIP COMPUTER OPERATIONAL LOGS</h3>
          <div class="lcars-log-list">
            ${s.logs.slice(0, 10).map(l => `
              <div class="lcars-log-entry">
                <span>[SD ${l.stardate} // ${l.source}]</span> ${l.text}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="lcars-card">
          <h3>REFERENCE MANIFEST & VISUAL-ERA SPECIFICATION</h3>
          <div class="lcars-telemetry-box">
            <div><span>VISUAL ERA:</span> <strong>TNG Late-Series Television Configuration (Seasons 5–7)</strong></div>
            <div><span>OVERALL DIMENSIONS:</span> <strong>642.51m Length × 463.73m Beam × 137.50m Height (42 Decks)</strong></div>
            <div><span>PRIMARY REFERENCES:</span> <strong>Sternbach & Okuda TNG Technical Manual; Probert & Zimmerman Sets</strong></div>
            <div><span>DOCUMENTED SPACES:</span> <strong>Main Bridge, Ready Room, Observation Lounge, Ten Forward, Main Engineering, Sickbay, Transporter 1, Senior Quarters, Battle Bridge, Holodeck 1, Shuttlebay 1</strong></div>
            <div><span>EXTRAPOLATED SPACES:</span> <strong>Deck 8 Saucer-Stardrive Separation Airlock Passage, Modular Decks 2–42 Corridors & Support Compartments (Explicitly Tagged)</strong></div>
            <div><span>ASSET ATTRIBUTION:</span> <strong>100% Original Procedural Three.js Geometry, Canvas 2D Aztec/LCARS Textures & Web Audio API Synthesis</strong></div>
          </div>
        </div>
      </div>
    `;

    this.contentEl.querySelector('#btn-run-biobed-scan')?.addEventListener('click', () => {
      med.scanning = true;
      med.scanProgress = 0;
      soundManager.playLCARSChirp('trill');
      s.emit('change', s);
    });

    this.contentEl.querySelector('#btn-visit-sickbay')?.addEventListener('click', () => {
      this.player.enterRoomById('deck12_sickbay');
      this.close();
    });
  }
}
