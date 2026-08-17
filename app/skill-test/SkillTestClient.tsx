'use client'

import Link from 'next/link'
import { useState } from 'react'
import { QUIZ } from '@/lib/quiz-data'

const readout = 'readout'

type Phase = 'intro' | 'quiz' | 'result'

export default function SkillTestClient() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [catScores, setCatScores] = useState<Record<string, number>>({})
  const [chosen, setChosen] = useState<number | null>(null)
  const [locked, setLocked] = useState(false)

  function startQuiz() {
    setPhase('quiz')
    setIndex(0)
    setScore(0)
    setCatScores({})
    setChosen(null)
    setLocked(false)
  }

  function answerQuiz(i: number) {
    if (locked) return
    setLocked(true)
    setChosen(i)
    const q = QUIZ[index]
    let newScore = score
    const newCat = { ...catScores }
    if (i === q.correct) {
      newScore++
      newCat[q.cat] = (newCat[q.cat] ?? 0) + 1
    }
    setScore(newScore)
    setCatScores(newCat)
    setTimeout(() => {
      if (index + 1 < QUIZ.length) {
        setIndex(index + 1)
        setChosen(null)
        setLocked(false)
      } else {
        setPhase('result')
      }
    }, 900)
  }

  // Result computations
  const pct = Math.round((score / QUIZ.length) * 100)
  const level = pct >= 80 ? 'Advanced' : pct >= 50 ? 'Intermediate' : 'Beginner'
  const sorted = Object.entries(catScores).sort((a, b) => b[1] - a[1])
  const strong = sorted.length ? sorted[0][0] : '—'
  const allCats = ['Beatmatching', 'BPM', 'Phrasing', 'EQ', 'Harmonic Mixing', 'Track Selection', 'Crowd Reading']
  const weakCats = allCats.filter(c => !catScores[c])
  const improve = weakCats.length ? weakCats.slice(0, 2).join(', ') : 'Fine-tuning advanced transitions'

  const q = QUIZ[index]
  const progress = (index / QUIZ.length) * 100

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
            <span>DJ Skill Test</span>
          </p>

          {/* Readout badge */}
          <span className="readout">7 Categories · 10 Questions</span>

          {/* H1 */}
          <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-black uppercase leading-[1.05] tracking-tight text-[#EDEAF5] my-5">
            DJ Skill Test
          </h1>

          {/* Subtitle */}
          <p className="font-body text-[1.1rem] text-[#ABA3C4] max-w-[640px] leading-relaxed">
            Beatmatching, BPM, phrasing, EQ, harmonic mixing, track selection and crowd reading — real scenarios, instant level.
          </p>
        </div>
      </section>

      {/* Quiz panel */}
      <section className="py-16">
        <div className="max-w-[1180px] mx-auto px-6">
          <div
            className="max-w-[680px] mx-auto rounded-[14px] p-8 border border-[var(--color-line)]"
            style={{ background: 'var(--color-plum)' }}
          >
            {/* ── Intro ── */}
            {phase === 'intro' && (
              <>
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-[1.25rem] text-[var(--color-ink)] mb-3">Ready?</h3>
                <p className="text-[var(--color-ink-dim)] mb-6">
                  10 questions, about 2 minutes. No signup needed — you&apos;ll get your DJ level and a personalised focus area at the end.
                </p>
                <button onClick={startQuiz} style={{ fontFamily: 'var(--font-display)' }}
                  className="inline-flex items-center justify-center bg-[var(--color-gold)] text-[#1A1206] text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full font-bold transition hover:shadow-[0_0_0_4px_rgba(255,182,39,0.25)]">
                  Start Skill Test
                </button>
              </>
            )}

            {/* ── Quiz ── */}
            {phase === 'quiz' && (
              <>
                {/* Progress bar */}
                <div className="h-2 rounded-full border border-[var(--color-line)] overflow-hidden mb-5" style={{ background: 'var(--color-void)' }}>
                  <div className="bar-fill" style={{ width: `${progress}%` }} />
                </div>
                <p style={{ fontFamily: 'var(--font-mono)' }} className="text-[0.8rem] text-[var(--color-ink-dim)] mb-2">
                  Question {index + 1} of {QUIZ.length}
                </p>
                <span className={readout} style={{ marginBottom: 16, display: 'inline-flex' }}>{q.cat}</span>
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-[1.1rem] text-[var(--color-ink)] mt-4 mb-5 leading-snug">{q.q}</h3>
                <div className="space-y-3">
                  {q.options.map((opt, i) => {
                    let cls = 'block w-full text-left rounded-[10px] px-4 py-4 border border-[var(--color-line)] text-[var(--color-ink)] text-[0.95rem] cursor-pointer transition-colors'
                    if (chosen !== null) {
                      if (i === q.correct) cls += ' border-[var(--color-cyan)] !bg-[rgba(51,230,204,0.08)]'
                      else if (i === chosen && chosen !== q.correct) cls += ' border-[var(--color-magenta)] !bg-[rgba(255,61,130,0.08)]'
                    } else {
                      cls += ' hover:border-[var(--color-gold)] cursor-pointer'
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => answerQuiz(i)}
                        className={cls}
                        style={{ background: 'var(--color-void)', fontFamily: 'var(--font-body)' }}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </>
            )}

            {/* ── Result ── */}
            {phase === 'result' && (
              <div className="text-center">
                {/* Score ring */}
                <div
                  className="w-[150px] h-[150px] rounded-full flex flex-col items-center justify-center mx-auto mb-5"
                  style={{ border: '8px solid var(--color-line)', fontFamily: 'var(--font-mono)' }}
                >
                  <span className="text-[2.2rem] leading-none" style={{ color: 'var(--color-gold)' }}>{pct}</span>
                  <span className="text-[0.7rem] text-[var(--color-ink-dim)]">/ 100</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-[1.25rem] text-[var(--color-ink)] mb-4">DJ Level: {level}</h3>
                <div className="text-left max-w-[420px] mx-auto mb-6 space-y-2">
                  <p><strong style={{ color: 'var(--color-cyan)' }}>Strong:</strong> <span className="text-[var(--color-ink-dim)]">{strong}</span></p>
                  <p><strong style={{ color: 'var(--color-magenta)' }}>Improve:</strong> <span className="text-[var(--color-ink-dim)]">{improve}</span></p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/courses#demo" style={{ fontFamily: 'var(--font-display)' }}
                    className="inline-flex items-center justify-center bg-[var(--color-gold)] text-[#1A1206] text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full font-bold transition hover:shadow-[0_0_0_4px_rgba(255,182,39,0.25)]">
                    Get Your Learning Roadmap
                  </Link>
                  <button onClick={startQuiz} style={{ fontFamily: 'var(--font-display)' }}
                    className="inline-flex items-center justify-center border border-[var(--color-line)] text-[var(--color-ink)] text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]">
                    Retake Test
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
