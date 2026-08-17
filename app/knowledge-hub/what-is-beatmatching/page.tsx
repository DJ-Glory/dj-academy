import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'What is Beatmatching? How DJs Blend Tracks',
  description:
    'Beatmatching explained simply: what it is, why it\'s the first skill every DJ learns, and how to practice it. A guide from Affection The DJ Academy.',
  alternates: { canonical: `${SITE_URL}/knowledge-hub/what-is-beatmatching` },
  openGraph: {
    url: `${SITE_URL}/knowledge-hub/what-is-beatmatching`,
    title: 'What is Beatmatching?',
    description: 'The first skill every DJ learns, explained simply.',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What is Beatmatching?',
  author: { '@type': 'Organization', name: 'Affection The DJ Academy' },
  publisher: { '@type': 'Organization', name: 'Affection The DJ Academy' },
  mainEntityOfPage: `${SITE_URL}/knowledge-hub/what-is-beatmatching`,
}

export default function WhatIsBeatmatchingPage() {
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
            <span>What is Beatmatching?</span>
          </p>

          <span className="readout">Fundamentals</span>

          <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-black uppercase leading-[1.05] tracking-tight text-[#EDEAF5] my-5">
            What is Beatmatching?
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
              Beatmatching is the technique of aligning the tempo and beat timing of two tracks so they play in sync — it&apos;s usually the very first hands-on skill a new DJ practices.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)' }} className="uppercase text-[1.4rem] mt-9 mb-4 text-[var(--color-ink)]">The basic process</h2>
            <ul className="space-y-3 mb-7 ml-5">
              {[
                'Play both tracks and listen for where their kick drums land.',
                'Adjust one deck\'s tempo (pitch fader) until the BPM numbers match.',
                'Nudge the jog wheel to line the beats up exactly, not just the tempo.',
                'Bring the second track in gradually using the crossfader or channel fader.',
              ].map(item => (
                <li key={item} className="list-disc text-[var(--color-ink-dim)] leading-relaxed text-[0.95rem]">{item}</li>
              ))}
            </ul>

            <h2 style={{ fontFamily: 'var(--font-display)' }} className="uppercase text-[1.4rem] mt-9 mb-4 text-[var(--color-ink)]">Why it&apos;s still worth learning</h2>
            <p className="text-[var(--color-ink-dim)] mb-5 leading-relaxed">
              Modern gear can sync tracks automatically, but training your ear to hear when two beats are out of alignment is what separates a DJ who can adapt on the fly from one who depends entirely on the sync button. It also makes every other skill — phrasing, harmonic mixing, crowd reading — easier to build on top of.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)' }} className="uppercase text-[1.4rem] mt-9 mb-4 text-[var(--color-ink)]">Common beginner mistakes</h2>
            <ul className="space-y-3 mb-7 ml-5">
              {[
                'Matching the BPM number but not actually aligning the beats.',
                'Bringing the second track in too fast, before the beatmatch has settled.',
                'Not listening on headphones before the track goes live to the crowd.',
              ].map(item => (
                <li key={item} className="list-disc text-[var(--color-ink-dim)] leading-relaxed text-[0.95rem]">{item}</li>
              ))}
            </ul>

            <h2 style={{ fontFamily: 'var(--font-display)' }} className="uppercase text-[1.4rem] mt-9 mb-4 text-[var(--color-ink)]">Practice it</h2>
            <p className="text-[var(--color-ink-dim)] mb-7 leading-relaxed">
              The free simulator lets you get a feel for tempo and crossfader control before you touch real equipment.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/simulator" style={{ fontFamily: 'var(--font-display)' }}
                className="inline-flex items-center justify-center bg-[var(--color-gold)] text-[#1A1206] text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full font-bold transition hover:shadow-[0_0_0_4px_rgba(255,182,39,0.25)]">
                Try the DJ Simulator
              </Link>
              <Link href="/skill-test" style={{ fontFamily: 'var(--font-display)' }}
                className="inline-flex items-center justify-center border border-[var(--color-line)] text-[var(--color-ink)] text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]">
                Take the Skill Test
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
