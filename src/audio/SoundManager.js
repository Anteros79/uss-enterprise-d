// Real-Time Web Audio API Synthesizer for USS Enterprise NCC-1701-D
// Generates authentic TNG-inspired sound effects with distance attenuation & door occlusion:
// - LCARS terminal chirps & trills
// - Pneumatic door slide hiss & obstruction warning chime
// - Turbolift transit harmonic hum & arrival bell
// - Engineering Matter/Antimatter Warp Core low-frequency pulse
// - Bridge ambient ship thrum & periodic computer telemetry blips
// - Transporter phase-transition harmonic shimmer
// - Condition Red Alert rising resonant klaxon

class SoundManager {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.ambienceVolume = 0.35;
    this.sfxVolume = 0.55;

    this.ambienceGain = null;
    this.sfxGain = null;
    this.warpPulseOsc = null;
    this.warpPulseGain = null;
    this.warpFilter = null;
    this.shipHumOsc = null;
    this.turboliftOsc = null;
    this.turboliftGain = null;

    this.alertTimer = 0;
    this.initialized = false;
  }

  init() {
    if (this.initialized) {
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return;
    }
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();

      this.ambienceGain = this.ctx.createGain();
      this.ambienceGain.gain.value = this.muted ? 0 : this.ambienceVolume;
      this.ambienceGain.connect(this.ctx.destination);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.value = this.muted ? 0 : this.sfxVolume;
      this.sfxGain.connect(this.ctx.destination);

      // Continuous low TNG ship ambient rumble (55 Hz + 110 Hz warm filtered drone)
      this.shipHumOsc = this.ctx.createOscillator();
      this.shipHumOsc.type = 'sawtooth';
      this.shipHumOsc.frequency.value = 52;
      const humFilter = this.ctx.createBiquadFilter();
      humFilter.type = 'lowpass';
      humFilter.frequency.value = 115;
      const humSubGain = this.ctx.createGain();
      humSubGain.gain.value = 0.18;
      this.shipHumOsc.connect(humFilter);
      humFilter.connect(humSubGain);
      humSubGain.connect(this.ambienceGain);
      this.shipHumOsc.start();

      // Engineering Warp Core rhythmic pulse
      this.warpPulseOsc = this.ctx.createOscillator();
      this.warpPulseOsc.type = 'triangle';
      this.warpPulseOsc.frequency.value = 68;
      this.warpFilter = this.ctx.createBiquadFilter();
      this.warpFilter.type = 'bandpass';
      this.warpFilter.frequency.value = 95;
      this.warpFilter.Q.value = 2.5;
      this.warpPulseGain = this.ctx.createGain();
      this.warpPulseGain.gain.value = 0.04;
      this.warpPulseOsc.connect(this.warpFilter);
      this.warpFilter.connect(this.warpPulseGain);
      this.warpPulseGain.connect(this.ambienceGain);
      this.warpPulseOsc.start();

      this.initialized = true;
    } catch (e) {
      console.warn('Web Audio API initialization deferred:', e);
    }
  }

  setMuted(muted) {
    this.muted = Boolean(muted);
    this.updateVolumes();
  }

  setAmbienceVolume(val) {
    this.ambienceVolume = Math.max(0, Math.min(1, Number(val)));
    this.updateVolumes();
  }

  setSfxVolume(val) {
    this.sfxVolume = Math.max(0, Math.min(1, Number(val)));
    this.updateVolumes();
  }

  updateVolumes() {
    if (!this.initialized || !this.ctx) return;
    const now = this.ctx.currentTime;
    this.ambienceGain.gain.setTargetAtTime(this.muted ? 0 : this.ambienceVolume, now, 0.05);
    this.sfxGain.gain.setTargetAtTime(this.muted ? 0 : this.sfxVolume, now, 0.05);
  }

  // Room-aware audio modulation called every frame
  updateSpatialAmbience(dt, time, shipState, distToWarpCore = 100, isDoorClosedBetween = false) {
    if (!this.initialized || !this.ctx || this.muted) return;

    // Pulse the Warp Core oscillator based on warpFactor & distance
    const wf = shipState.warpCore.online ? Math.max(0.5, shipState.warpCore.warpFactor) : 0.1;
    const pulseRate = 1.2 + wf * 0.45;
    const lfo = 0.5 + 0.5 * Math.sin(time * pulseRate * Math.PI * 2);

    // Distance attenuation & door occlusion
    const distFactor = shipState.cameraMode === 'interior_walk'
      ? Math.max(0.05, Math.min(1.0, 18.0 / Math.max(6.0, distToWarpCore)))
      : 0.15;
    const occlusion = isDoorClosedBetween ? 0.45 : 1.0;

    const targetGain = (0.04 + 0.22 * lfo) * distFactor * occlusion;
    this.warpPulseGain.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 0.04);
    this.warpFilter.frequency.setTargetAtTime(75 + wf * 14 + lfo * 45, this.ctx.currentTime, 0.04);

    // Periodic Red Alert klaxon
    if (shipState.alertState === 'red') {
      this.alertTimer -= dt;
      if (this.alertTimer <= 0) {
        this.playRedAlertKlaxon();
        this.alertTimer = 2.6;
      }
    } else {
      this.alertTimer = 0;
    }
  }

  playLCARSChirp(type = 'confirm') {
    if (!this.initialized || !this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';

    if (type === 'confirm') {
      osc.frequency.setValueAtTime(1480, now);
      osc.frequency.setValueAtTime(1975, now + 0.045);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.14);
    } else if (type === 'error') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.setValueAtTime(270, now + 0.11);
      gain.gain.setValueAtTime(0.24, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.27);
    } else {
      // 'select' or 'trill'
      osc.frequency.setValueAtTime(1760, now);
      osc.frequency.setValueAtTime(2217, now + 0.03);
      osc.frequency.setValueAtTime(2637, now + 0.06);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.15);
    }
  }

  playDoorSound(action = 'open') {
    this.init();
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;

    if (action === 'obstructed') {
      this.playLCARSChirp('error');
      return;
    }

    // Filtered white-noise pneumatic swish
    const bufferSize = this.ctx.sampleRate * 0.55;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI);
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.value = 3.2;
    if (action === 'open') {
      filter.frequency.setValueAtTime(420, now);
      filter.frequency.exponentialRampToValueAtTime(1150, now + 0.45);
    } else {
      filter.frequency.setValueAtTime(980, now);
      filter.frequency.exponentialRampToValueAtTime(360, now + 0.45);
    }

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.005, now + 0.54);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    noise.start(now);
  }

  playTurboliftHum(active) {
    this.init();
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    if (active) {
      if (this.turboliftOsc) return;
      this.turboliftOsc = this.ctx.createOscillator();
      this.turboliftGain = this.ctx.createGain();
      this.turboliftOsc.type = 'sine';
      this.turboliftOsc.frequency.setValueAtTime(110, now);
      this.turboliftOsc.frequency.linearRampToValueAtTime(195, now + 1.2);
      this.turboliftGain.gain.setValueAtTime(0.01, now);
      this.turboliftGain.gain.linearRampToValueAtTime(0.16, now + 0.3);
      this.turboliftOsc.connect(this.turboliftGain);
      this.turboliftGain.connect(this.sfxGain);
      this.turboliftOsc.start(now);
    } else if (this.turboliftOsc) {
      try {
        this.turboliftGain.gain.linearRampToValueAtTime(0.001, now + 0.25);
        this.turboliftOsc.stop(now + 0.26);
      } catch (_) {}
      this.turboliftOsc = null;
      this.turboliftGain = null;
      this.playLCARSChirp('confirm');
    }
  }

  playTransporterBeam() {
    this.init();
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    const freqs = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    freqs.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f * 0.92, now + idx * 0.08);
      osc.frequency.linearRampToValueAtTime(f * 1.18, now + 1.4);
      osc.frequency.linearRampToValueAtTime(f, now + 2.6);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.4 + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.7);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 2.75);
    });
  }

  playRedAlertKlaxon() {
    this.init();
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';
    osc1.frequency.setValueAtTime(440, now);
    osc1.frequency.exponentialRampToValueAtTime(780, now + 0.65);
    osc2.frequency.setValueAtTime(446, now);
    osc2.frequency.exponentialRampToValueAtTime(788, now + 0.65);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.14, now + 0.08);
    gain.gain.setValueAtTime(0.14, now + 0.55);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.88);
    osc2.stop(now + 0.88);
  }

  playSeparationClampRelease() {
    this.init();
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(145, now);
    osc.frequency.exponentialRampToValueAtTime(48, now + 0.7);
    gain.gain.setValueAtTime(0.32, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.78);
  }
}

export const soundManager = new SoundManager();
