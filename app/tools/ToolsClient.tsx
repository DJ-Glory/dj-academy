'use client'

import Link from 'next/link'
import { useState } from 'react'

const readout = 'readout'

const CAMELOT_KEYS = Array.from({ length: 12 }, (_, i) => i + 1).flatMap(n => [`${n}A`, `${n}B`])

interface Result {
  diff: string
  pctShift: string
  dir: string
  compatText: string
  compatColor: string
  suggestion: string
}

function calcTransition(bpmA: string, bpmB: string, keyA: string, keyB: string): Result | null {
  const a = parseFloat(bpmA), b = parseFloat(bpmB)
  if (!a || !b || !keyA || !keyB) return null

  const diff     = (b - a).toFixed(1)
  const pctShift = (((b - a) / a) * 100).toFixed(1)
  const dir      = b > a ? '(speed up)' : '(slow down)'

  const numA = parseInt(keyA), letA = keyA.slice(-1)
  const numB = parseInt(keyB), letB = keyB.slice(-1)
  let compatText  = 'Risky — clash ho sakta hai, filter/EQ se transition karo.'
  let compatColor = 'var(--color-magenta)'
  if (keyA === keyB) {
    compatText = 'Perfect match — direct blend karo.'
    compatColor = 'var(--color-cyan)'
  } else if (letA === letB && Math.abs(numA - numB) === 1) {
    compatText = 'Compatible — adjacent key, smooth mix hoga.'
    compatColor = 'var(--color-cyan)'
  } else if (numA === numB && letA !== letB) {
    compatText = 'Compatible — relative major/minor, energy shift ke liye accha.'
    compatColor = 'var(--color-cyan)'
  }

  const absDiff = Math.abs(parseFloat(diff))
  const suggestion = absDiff <= 3
    ? '16-bar intro blend, direct beatmatch'
    : absDiff <= 8
    ? 'Gradual tempo nudge over 32 bars, then EQ swap'
    : 'Filter/echo-out transition — tempo gap too large for a clean blend'

  return { diff, pctShift, dir, compatText, compatColor, suggestion }
}

export default function ToolsClient() {
  const [bpmA, setBpmA] = useState('')
  const [bpmB, setBpmB] = useState('')
  const [keyA, setKeyA] = useState('')
  const [keyB, setKeyB] = useState('')
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError]   = useState('')

  function handleCalc() {
    if (!bpmA || !bpmB || !keyA || !keyB) {
      setError('Dono tracks ka BPM aur Camelot Key bharo.')
      setResult(null)
      return
    }
    setError('')
    setResult(calcTransition(bpmA, bpmB, keyA, keyB))
  }

  const inputCls = 'w-full rounded-lg px-4 py-3 text-[0.95rem] mb-5 border border-[var(--color-line)] text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)] transition-colors'
  const inputStyle = { background: 'var(--color-void)', fontFamily: 'var(--font-body)' }
  const labelCls  = 'block text-[0.78rem] uppercase tracking-widest text-[var(--color-ink-dim)] mb-2'

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
            <span>DJ Tools</span>
          </p>

          {/* Readout badge */}
          <span className="readout">Free Tools</span>

          {/* H1 */}
          <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-black uppercase leading-[1.05] tracking-tight text-[#EDEAF5] my-5">
            BPM &amp; Key Calculator
          </h1>

          {/* Subtitle */}
          <p className="font-body text-[1.1rem] text-[#ABA3C4] max-w-[600px] leading-relaxed">
            Drop in two tracks&apos; BPM and Camelot key to get an instant compatibility read and a suggested transition.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="py-16">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <div className="rounded-[14px] p-8 border border-[var(--color-line)]" style={{ background: 'var(--color-plum)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-[1.1rem] text-[var(--color-ink)] mb-5">Track A</h3>
            <label style={{ fontFamily: 'var(--font-mono)' }} htmlFor="bpmA" className={labelCls}>BPM</label>
            <input type="number" id="bpmA" placeholder="e.g. 124" value={bpmA} onChange={e => setBpmA(e.target.value)}
              className={inputCls} style={inputStyle} />
            <label style={{ fontFamily: 'var(--font-mono)' }} htmlFor="keyA" className={labelCls}>Camelot Key</label>
            <select id="keyA" value={keyA} onChange={e => setKeyA(e.target.value)} className={inputCls} style={inputStyle}>
              <option value="">Select key</option>
              {CAMELOT_KEYS.map(k => <option key={k} value={k}>{k}</option>)}
            </select>

            <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-[1.1rem] text-[var(--color-ink)] mb-5 mt-2">Track B</h3>
            <label style={{ fontFamily: 'var(--font-mono)' }} htmlFor="bpmB" className={labelCls}>BPM</label>
            <input type="number" id="bpmB" placeholder="e.g. 128" value={bpmB} onChange={e => setBpmB(e.target.value)}
              className={inputCls} style={inputStyle} />
            <label style={{ fontFamily: 'var(--font-mono)' }} htmlFor="keyB" className={labelCls}>Camelot Key</label>
            <select id="keyB" value={keyB} onChange={e => setKeyB(e.target.value)} className={inputCls} style={inputStyle}>
              <option value="">Select key</option>
              {CAMELOT_KEYS.map(k => <option key={k} value={k}>{k}</option>)}
            </select>

            <button onClick={handleCalc} style={{ fontFamily: 'var(--font-display)' }}
              className="inline-flex items-center justify-center bg-[var(--color-gold)] text-[#1A1206] text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full font-bold transition hover:shadow-[0_0_0_4px_rgba(255,182,39,0.25)] mt-1">
              Calculate
            </button>

            {/* Error */}
            {error && <p className="mt-4 text-sm" style={{ color: 'var(--color-magenta)' }}>{error}</p>}

            {/* Result */}
            {result && (
              <div className="mt-5 rounded-[10px] p-5 border border-[var(--color-cyan)]" style={{ background: 'var(--color-void)', fontFamily: 'var(--font-mono)' }}>
                <div className="text-[2rem]" style={{ color: 'var(--color-gold)' }}>
                  {parseFloat(result.diff) > 0 ? '+' : ''}{result.diff} BPM
                </div>
                <p className="text-sm text-[var(--color-ink-dim)] mt-1">Tempo shift: {result.pctShift}% {result.dir}</p>
                <p className="text-sm mt-3" style={{ color: result.compatColor }}>Key compatibility: {result.compatText}</p>
                <p className="text-sm text-[var(--color-ink-dim)] mt-3">Suggested move: {result.suggestion}.</p>
              </div>
            )}
          </div>

          {/* Info cards */}
          <div className="space-y-5">
            <div className="rounded-[14px] p-7 border border-[var(--color-line)]" style={{ background: 'var(--color-plum)' }}>
              <span style={{ fontFamily: 'var(--font-mono)' }} className="text-[0.72rem] text-[var(--color-cyan)] uppercase tracking-widest">How it works</span>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-[1.1rem] text-[var(--color-ink)] mt-3 mb-3">Reading the result</h3>
              <p className="text-[0.92rem] text-[var(--color-ink-dim)]">
                The tempo shift shows how much you&apos;d need to nudge Track A&apos;s pitch to match Track B. Key compatibility uses the Camelot wheel — same number, adjacent numbers, or same number with a different letter are all safe combinations.
              </p>
            </div>
            <div className="rounded-[14px] p-7 border border-[var(--color-line)]" style={{ background: 'var(--color-plum)' }}>
              <span style={{ fontFamily: 'var(--font-mono)' }} className="text-[0.72rem] text-[var(--color-cyan)] uppercase tracking-widest">Next step</span>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-[1.1rem] text-[var(--color-ink)] mt-3 mb-3">Practice it live</h3>
              <p className="text-[0.92rem] text-[var(--color-ink-dim)] mb-4">Once you know the numbers, try the actual blend in the free simulator.</p>
              <Link href="/simulator" style={{ fontFamily: 'var(--font-display)' }}
                className="inline-flex items-center border border-[var(--color-line)] text-[var(--color-ink)] text-[0.85rem] uppercase tracking-widest px-5 py-3 rounded-full hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors">
                Open DJ Simulator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
