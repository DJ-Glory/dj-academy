'use client'

import Link from 'next/link'
import { useState, useRef, useCallback } from 'react'

const readout = 'readout'

interface DeckState {
  playing: boolean
  bpm: number
  gainNode: GainNode | null
  oscNode: OscillatorNode | null
}

function buildLoop(ctx: AudioContext, freqBase: number, bpm: number): { osc: OscillatorNode; master: GainNode } {
  const master = ctx.createGain()
  master.gain.value = 0.0001
  master.connect(ctx.destination)

  const osc = ctx.createOscillator()
  osc.type = 'sine'
  osc.frequency.value = freqBase
  const oscGain = ctx.createGain()
  oscGain.gain.value = 0.5
  osc.connect(oscGain)
  oscGain.connect(master)
  osc.start()

  const beatLen = 60 / bpm
  const now = ctx.currentTime
  for (let i = 0; i < 400; i++) {
    const t = now + i * beatLen
    oscGain.gain.setValueAtTime(0.55, t)
    oscGain.gain.exponentialRampToValueAtTime(0.02, t + beatLen * 0.4)
  }
  return { osc, master }
}

export default function SimulatorClient() {
  const ctxRef = useRef<AudioContext | null>(null)
  const [deckA, setDeckA] = useState<DeckState>({ playing: false, bpm: 128, gainNode: null, oscNode: null })
  const [deckB, setDeckB] = useState<DeckState>({ playing: false, bpm: 124, gainNode: null, oscNode: null })
  const [crossfader, setCrossfader] = useState(0)
  const [faderLabel, setFaderLabel] = useState('Deck A')
  const [waveAnimA, setWaveAnimA] = useState(false)
  const [waveAnimB, setWaveAnimB] = useState(false)

  function getCtx() {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    }
    return ctxRef.current
  }

  function updateCrossfaderRouting(val: number, dA: DeckState, dB: DeckState) {
    const gA = Math.max(0, 1 - val / 100)
    const gB = Math.max(0, val / 100)
    if (dA.gainNode && dA.playing) dA.gainNode.gain.value = 0.25 * gA
    if (dB.gainNode && dB.playing) dB.gainNode.gain.value = 0.25 * gB
    setFaderLabel(val < 45 ? 'Deck A' : val > 55 ? 'Deck B' : 'Center blend')
  }

  function handleCrossfader(val: number) {
    setCrossfader(val)
    updateCrossfaderRouting(val, deckA, deckB)
  }

  function toggleDeck(letter: 'A' | 'B') {
    const ctx = getCtx()
    if (letter === 'A') {
      if (!deckA.playing) {
        const { osc, master } = buildLoop(ctx, 110, deckA.bpm)
        master.gain.linearRampToValueAtTime(0.25 * Math.max(0, 1 - crossfader / 100), ctx.currentTime + 0.3)
        setDeckA({ ...deckA, playing: true, gainNode: master, oscNode: osc })
        setWaveAnimA(true)
      } else {
        deckA.gainNode?.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.2)
        setTimeout(() => { deckA.oscNode?.stop() }, 250)
        setDeckA({ ...deckA, playing: false, gainNode: null, oscNode: null })
        setWaveAnimA(false)
      }
    } else {
      if (!deckB.playing) {
        const { osc, master } = buildLoop(ctx, 98, deckB.bpm)
        master.gain.linearRampToValueAtTime(0.25 * Math.max(0, crossfader / 100), ctx.currentTime + 0.3)
        setDeckB({ ...deckB, playing: true, gainNode: master, oscNode: osc })
        setWaveAnimB(true)
      } else {
        deckB.gainNode?.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.2)
        setTimeout(() => { deckB.oscNode?.stop() }, 250)
        setDeckB({ ...deckB, playing: false, gainNode: null, oscNode: null })
        setWaveAnimB(false)
      }
    }
  }

  function updateBpm(letter: 'A' | 'B', val: number) {
    if (letter === 'A') setDeckA(d => ({ ...d, bpm: val }))
    else setDeckB(d => ({ ...d, bpm: val }))
  }

  return (
    <>
      {/* Hero */}
      <section className="border-b border-[#3A2E52] pt-16 pb-14 relative overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[20%] -right-[5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,61,130,0.18),transparent_65%)]"
        />

        <div className="site-container relative">
          {/* Breadcrumb */}
          <p className="font-mono text-[0.75rem] text-[#ABA3C4] mb-6 tracking-wider">
            <Link
              href="/"
              className="text-[#ABA3C4] no-underline transition-colors duration-150 hover:text-[#FFB627]"
            >
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <span>DJ Simulator</span>
          </p>

          {/* Readout badge */}
          <span className="readout">Free · Browser-Based</span>

          {/* H1 */}
          <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-black uppercase leading-[1.05] tracking-tight text-[#EDEAF5] my-5">
            DJ Simulator
          </h1>

          {/* Subtitle */}
          <p className="font-body text-[1.1rem] text-[#ABA3C4] max-w-[640px] leading-relaxed">
            Two decks, a crossfader and adjustable tempo — no equipment needed. Tap play on both decks, adjust the tempo, then use the crossfader to blend.
          </p>
        </div>
      </section>

      {/* Simulator */}
      <section className="py-16">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="rounded-[14px] p-6 border border-[var(--color-line)]" style={{ background: 'var(--color-void)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {/* Deck A */}
              <DeckPanel
                letter="A"
                bpm={deckA.bpm}
                playing={deckA.playing}
                animated={waveAnimA}
                onToggle={() => toggleDeck('A')}
                onBpmChange={v => updateBpm('A', v)}
              />
              {/* Deck B */}
              <DeckPanel
                letter="B"
                bpm={deckB.bpm}
                playing={deckB.playing}
                animated={waveAnimB}
                onToggle={() => toggleDeck('B')}
                onBpmChange={v => updateBpm('B', v)}
              />
            </div>

            {/* Crossfader */}
            <div className="text-center mt-4">
              <p id="faderLabel" style={{ fontFamily: 'var(--font-mono)' }} className="text-[0.78rem] uppercase tracking-widest text-[var(--color-ink-dim)] mb-2">{faderLabel}</p>
              <input
                type="range" id="crossfader" min={0} max={100} value={crossfader}
                onChange={e => handleCrossfader(Number(e.target.value))}
                className="w-full max-w-sm accent-[var(--color-gold)]"
              />
            </div>
            <p className="mt-5 text-[0.82rem] text-[var(--color-ink-dim)] text-center">
              Demo loops are synthesized in-browser for this free tool — practice tempo and crossfader technique here, then bring real tracks to class.
            </p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 border-t border-[var(--color-line)]" style={{ background: 'var(--color-plum)' }}>
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-[14px] p-7 border border-[var(--color-line)]" style={{ background: 'var(--color-plum2)' }}>
            <span style={{ fontFamily: 'var(--font-mono)' }} className="text-[0.72rem] text-[var(--color-cyan)] uppercase tracking-widest">Tip</span>
            <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-[1.15rem] mt-3 mb-2 text-[var(--color-ink)]">Match tempo before you blend</h3>
            <p className="text-[0.92rem] text-[var(--color-ink-dim)]">Start both decks at the same BPM before moving the crossfader — that&apos;s the difference between a clean blend and a train wreck.</p>
          </div>
          <div className="rounded-[14px] p-7 border border-[var(--color-line)]" style={{ background: 'var(--color-plum2)' }}>
            <span style={{ fontFamily: 'var(--font-mono)' }} className="text-[0.72rem] text-[var(--color-cyan)] uppercase tracking-widest">Next step</span>
            <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-[1.15rem] mt-3 mb-2 text-[var(--color-ink)]">Check your key compatibility</h3>
            <p className="text-[0.92rem] text-[var(--color-ink-dim)]">Once tempo feels natural, head to the BPM &amp; Key Calculator to plan a full transition.</p>
            <Link href="/tools" style={{ fontFamily: 'var(--font-display)' }}
              className="inline-flex mt-4 items-center border border-[var(--color-line)] text-[var(--color-ink)] text-[0.85rem] uppercase tracking-widest px-5 py-3 rounded-full hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors">
              Open DJ Tools
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── Deck panel ──────────────────────────────────────── */
function DeckPanel({ letter, bpm, playing, animated, onToggle, onBpmChange }: {
  letter: 'A' | 'B'
  bpm: number
  playing: boolean
  animated: boolean
  onToggle: () => void
  onBpmChange: (v: number) => void
}) {
  return (
    <div className="rounded-[12px] p-5 border border-[var(--color-line)]" style={{ background: 'var(--color-plum)' }}>
      <h4 style={{ fontFamily: 'var(--font-mono)' }} className="text-[0.85rem] text-[var(--color-gold)] uppercase mb-3">Deck {letter}</h4>
      {/* Waveform */}
      <div className="flex items-end gap-[3px] h-[80px] mb-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              background: 'linear-gradient(180deg,var(--color-gold),var(--color-magenta))',
              animation: animated ? `pulse 1.4s ease-in-out ${i * 0.12}s infinite` : 'none',
              height: '100%',
              transform: animated ? undefined : 'scaleY(0.3)',
              transformOrigin: 'bottom',
            }}
          />
        ))}
      </div>
      {/* Controls */}
      <div className="flex gap-3 mb-4">
        <button
          id={`play${letter}`}
          onClick={onToggle}
          className="flex-1 rounded-lg py-3 border border-[var(--color-line)] text-[var(--color-ink)] transition hover:border-[var(--color-gold)]"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', background: 'var(--color-plum2)' }}
        >
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>
      {/* BPM */}
      <div>
        <label style={{ fontFamily: 'var(--font-mono)' }} className="flex justify-between text-[0.78rem] text-[var(--color-ink-dim)] mb-2 uppercase tracking-wider">
          <span>Tempo</span>
          <span id={`bpmLabel${letter}`}>{bpm} BPM</span>
        </label>
        <input
          type="range" min={90} max={150} value={bpm}
          onChange={e => onBpmChange(Number(e.target.value))}
          className="w-full accent-[var(--color-gold)]"
        />
      </div>
    </div>
  )
}
