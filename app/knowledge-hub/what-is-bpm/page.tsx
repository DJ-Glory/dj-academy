import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: "What is BPM in DJing? A Beginner's Guide",
  description:
    "What BPM means, why it matters for beatmatching, and how to use it when picking your next track. A beginner's guide from Affection The DJ Academy.",
  alternates: { canonical: `${SITE_URL}/knowledge-hub/what-is-bpm` },
  openGraph: {
    url: `${SITE_URL}/knowledge-hub/what-is-bpm`,
    title: 'What is BPM in DJing?',
    description: "A beginner's guide to BPM and why it matters for beatmatching.",
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What is BPM in DJing?',
  author: { '@type': 'Organization', name: 'Affection The DJ Academy' },
  publisher: { '@type': 'Organization', name: 'Affection The DJ Academy' },
  mainEntityOfPage: `${SITE_URL}/knowledge-hub/what-is-bpm`,
}

export default function WhatIsBpmPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
            <Link href="/" className="text-[#ABA3C4] no-underline transition-colors duration-150 hover:text-[#FFB627]">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <Link href="/knowledge-hub" className="text-[#ABA3C4] no-underline transition-colors duration-150 hover:text-[#FFB627]">
              Knowledge Hub
            </Link>
            <span className="mx-1.5">/</span>
            <span>What is BPM?</span>
          </p>

          <span className="readout">Fundamentals</span>

          <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-black uppercase leading-[1.05] tracking-tight text-[#EDEAF5] my-5">
            What is BPM?
          </h1>
        </div>
      </section>

      {/* Article */}
      <section className="py-12">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-[720px]">
            <p style={{ fontFamily: 'var(--font-mono)' }} className="text-[0.78rem] text-[var(--color-ink-dim)] mb-7 uppercase tracking-wider">
              Affection The DJ Academy · Fundamentals
            </p>

            <p className="text-[var(--color-ink-dim)] mb-5 leading-relaxed">
              BPM stands for beats per minute — a count of how many rhythmic beats occur in one minute of a track. It&apos;s the single number that tells a DJ how fast or slow a song feels, and it&apos;s the starting point for almost every mixing decision.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)' }} className="uppercase text-[1.4rem] mt-9 mb-4 text-[var(--color-ink)]">Why BPM matters</h2>
            <p className="text-[var(--color-ink-dim)] mb-5 leading-relaxed">
              Every genre tends to sit in a rough BPM range: Bollywood party edits often sit around 100–128 BPM, techno commonly runs 125–135 BPM, and Afro house often sits a little lower with a rolling groove. Knowing the BPM of a track tells you instantly which other tracks it can sit next to without a jarring tempo jump.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)' }} className="uppercase text-[1.4rem] mt-9 mb-4 text-[var(--color-ink)]">BPM and beatmatching</h2>
            <p className="text-[var(--color-ink-dim)] mb-5 leading-relaxed">
              Beatmatching means adjusting one track&apos;s tempo so its beats line up with another track&apos;s beats. If Track A is 124 BPM and Track B is 128 BPM, a DJ nudges one deck&apos;s pitch control until both land on the same number — that&apos;s what makes a transition feel seamless instead of stumbling.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)' }} className="uppercase text-[1.4rem] mt-9 mb-4 text-[var(--color-ink)]">Half-time and double-time</h2>
            <p className="text-[var(--color-ink-dim)] mb-5 leading-relaxed">
              Some genre pairs don&apos;t match at face value but actually relate by a factor of two. A track at 140 BPM can sit comfortably against a track at 70 BPM, because the slower track&apos;s beat lines up with every other beat of the faster one. Recognising this relationship opens up far more mixing options than only matching identical numbers.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)' }} className="uppercase text-[1.4rem] mt-9 mb-4 text-[var(--color-ink)]">Practice it</h2>
            <p className="text-[var(--color-ink-dim)] mb-7 leading-relaxed">
              The fastest way to build a feel for BPM is to compare two tracks side by side and try to guess the tempo shift before checking the number.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/tools" style={{ fontFamily: 'var(--font-display)' }}
                className="inline-flex items-center justify-center bg-[var(--color-gold)] text-[#1A1206] text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full font-bold transition hover:shadow-[0_0_0_4px_rgba(255,182,39,0.25)]">
                Try the BPM Calculator
              </Link>
              <Link href="/simulator" style={{ fontFamily: 'var(--font-display)' }}
                className="inline-flex items-center justify-center border border-[var(--color-line)] text-[var(--color-ink)] text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]">
                Practice in the DJ Simulator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
