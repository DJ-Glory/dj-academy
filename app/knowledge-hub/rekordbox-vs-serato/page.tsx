import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Rekordbox vs Serato — Which Should a Beginner DJ Learn?',
  description:
    'Rekordbox vs Serato compared for beginner DJs: workflow, hardware compatibility and which one to learn first. A guide from Affection The DJ Academy, Ahmedabad.',
  alternates: { canonical: `${SITE_URL}/knowledge-hub/rekordbox-vs-serato` },
  openGraph: {
    url: `${SITE_URL}/knowledge-hub/rekordbox-vs-serato`,
    title: 'Rekordbox vs Serato — Which Should a Beginner Learn?',
    description: 'A practical comparison for beginner DJs choosing their first software.',
    type: 'article',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rekordbox vs Serato — Which Should a Beginner DJ Learn?',
  author: { '@type': 'Organization', name: 'Affection The DJ Academy' },
  publisher: { '@type': 'Organization', name: 'Affection The DJ Academy' },
  mainEntityOfPage: `${SITE_URL}/knowledge-hub/rekordbox-vs-serato`,
}

export default function RekordboxVsSeratoPage() {
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
            <span>Rekordbox vs Serato</span>
          </p>

          <span className="readout">Software</span>

          <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-black uppercase leading-[1.05] tracking-tight text-[#EDEAF5] my-5">
            Rekordbox vs Serato
          </h1>
        </div>
      </section>

      {/* Article */}
      <section className="py-12">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-[720px]">
            <p style={{ fontFamily: 'var(--font-mono)' }} className="text-[0.78rem] text-[var(--color-ink-dim)] mb-7 uppercase tracking-wider">
              Affection The DJ Academy · Software
            </p>

            <p className="text-[var(--color-ink-dim)] mb-5 leading-relaxed">
              Rekordbox and Serato are the two DJ software platforms beginners run into most often. Both handle the same core job — organising your library and controlling playback — but they fit different setups.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)' }} className="uppercase text-[1.4rem] mt-9 mb-4 text-[var(--color-ink)]">Rekordbox</h2>
            <p className="text-[var(--color-ink-dim)] mb-5 leading-relaxed">
              Rekordbox is built by Pioneer DJ and pairs naturally with Pioneer&apos;s CDJ and XDJ hardware, which dominates club booths in India and internationally. If you expect to play on club-standard gear, Rekordbox familiarity is genuinely useful.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)' }} className="uppercase text-[1.4rem] mt-9 mb-4 text-[var(--color-ink)]">Serato</h2>
            <p className="text-[var(--color-ink-dim)] mb-5 leading-relaxed">
              Serato DJ Pro is hardware-agnostic and works with a wide range of controllers. Many home setups and mobile/wedding DJ rigs run on Serato because of its flexibility across different controller brands.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)' }} className="uppercase text-[1.4rem] mt-9 mb-4 text-[var(--color-ink)]">What actually matters for a beginner</h2>
            <ul className="space-y-3 mb-7 ml-5">
              {[
                'The fundamentals — beatmatching, EQ, phrasing — transfer between both platforms.',
                'Match the software to whatever hardware you\'ll actually practice and perform on.',
                'Club residencies favour Rekordbox familiarity; flexible freelance setups often lean Serato.',
              ].map(item => (
                <li key={item} className="list-disc text-[var(--color-ink-dim)] leading-relaxed text-[0.95rem]">{item}</li>
              ))}
            </ul>

            <h2 style={{ fontFamily: 'var(--font-display)' }} className="uppercase text-[1.4rem] mt-9 mb-4 text-[var(--color-ink)]">Our take</h2>
            <p className="text-[var(--color-ink-dim)] mb-7 leading-relaxed">
              Learn on whichever software matches the gear you&apos;ll use most in your first year of gigging — switching platforms later is far easier once the fundamentals are solid.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/courses#demo" style={{ fontFamily: 'var(--font-display)' }}
                className="inline-flex items-center justify-center bg-[var(--color-gold)] text-[#1A1206] text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full font-bold transition hover:shadow-[0_0_0_4px_rgba(255,182,39,0.25)]">
                Book a Free Demo
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
