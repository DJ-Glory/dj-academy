import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'DJ Knowledge Hub — Learn DJ Terms & Concepts',
  description:
    'Free DJ knowledge hub: what is BPM, what is beatmatching, Rekordbox vs Serato, and more — explained simply by Affection The DJ Academy, Ahmedabad.',
  alternates: { canonical: `${SITE_URL}/knowledge-hub` },
  openGraph: {
    url: `${SITE_URL}/knowledge-hub`,
    title: 'DJ Knowledge Hub | Affection The DJ Academy',
    description: 'Free explainers on BPM, beatmatching, DJ software and more.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is BPM in DJing?',
      acceptedAnswer: { '@type': 'Answer', text: "BPM stands for beats per minute — it measures how fast a track's rhythm is, and matching BPM between two tracks is the foundation of beatmatching." },
    },
    {
      '@type': 'Question',
      name: 'What is beatmatching?',
      acceptedAnswer: { '@type': 'Answer', text: 'Beatmatching is the technique of aligning the tempo and beat timing of two tracks so they play in sync, allowing a DJ to blend from one to the other smoothly.' },
    },
    {
      '@type': 'Question',
      name: 'Rekordbox or Serato — which should a beginner learn first?',
      acceptedAnswer: { '@type': 'Answer', text: 'Both cover the same core skills. The better choice usually comes down to which software matches the hardware available at your venue or academy.' },
    },
  ],
}

const ARTICLES = [
  {
    href: '/knowledge-hub/what-is-bpm',
    tag: 'FUNDAMENTALS',
    h: 'What is BPM?',
    p: 'The measurement behind every beatmatch, explained with real DJ examples.',
  },
  {
    href: '/knowledge-hub/what-is-beatmatching',
    tag: 'FUNDAMENTALS',
    h: 'What is Beatmatching?',
    p: 'The core skill every DJ starts with — and how to actually practice it.',
  },
  {
    href: '/knowledge-hub/rekordbox-vs-serato',
    tag: 'SOFTWARE',
    h: 'Rekordbox vs Serato',
    p: 'How the two most common DJ software platforms compare for beginners.',
  },
]

const FAQS = [
  {
    q: 'What is BPM in DJing?',
    a: "BPM stands for beats per minute. It measures how fast a track's rhythm is, and matching BPM between two tracks is the foundation of beatmatching.",
  },
  {
    q: 'What is beatmatching?',
    a: 'Beatmatching is aligning the tempo and beat timing of two tracks so they play in sync, letting a DJ blend from one into the other smoothly.',
  },
  {
    q: 'Rekordbox or Serato — which should a beginner learn first?',
    a: 'Both cover the same core skills. The better choice usually comes down to which software matches the hardware available at your venue or academy.',
  },
]

export default function KnowledgeHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────── */}
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
            <span>Knowledge Hub</span>
          </p>

          {/* Readout badge */}
          <span className="readout">Free DJ Education</span>

          {/* H1 */}
          <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-black uppercase leading-[1.05] tracking-tight text-[#EDEAF5] my-5">
            Knowledge Hub
          </h1>

          {/* Subtitle */}
          <p className="font-body text-[1.1rem] text-[#ABA3C4] max-w-[560px] leading-relaxed">
            Plain-language explainers on the terms and tools every DJ runs into.
          </p>
        </div>
      </section>

      {/* ── ARTICLE CARDS ────────────────────────────────── */}
      <section className="py-14">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {ARTICLES.map(({ href, tag, h, p }) => (
              <ArticleCard key={href} href={href} tag={tag} title={h} description={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section id="faq" className="bg-[#241933] border-y border-[#3A2E52] py-18">
        <div className="site-container">
          {/* Section header */}
          <div className="mb-11">
            <span className="readout">FAQ</span>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-black uppercase tracking-tight text-[#EDEAF5] mt-4 leading-tight">
              Quick Answers
            </h2>
          </div>

          {/* FAQ items */}
          <div className="max-w-[760px]">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="faq-item border-b border-[#3A2E52]">
                <summary className="flex justify-between items-center gap-4 cursor-pointer py-5.5 font-display text-[0.82rem] font-bold uppercase tracking-wider text-[#EDEAF5] select-none">
                  <span>{q}</span>
                  <span aria-hidden="true" className="shrink-0 font-mono text-[1.4rem] text-[#FFB627] leading-none font-normal">
                    +
                  </span>
                </summary>
                <p className="font-body text-[0.95rem] text-[#ABA3C4] leading-relaxed pb-5.5 max-w-[680px]">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Open FAQ icon swap */}
      <style>{`
        details.faq-item[open] > summary span:last-child {
          content: '−';
        }
      `}</style>
    </>
  )
}

/* ── Article Card ────────────────────────────────────────── */
function ArticleCard({ href, tag, title, description }: { href: string; tag: string; title: string; description: string }) {
  return (
    <Link
      href={href}
      className="block bg-[#2E2043] border border-[#3A2E52] rounded-xl p-6.5 no-underline transition-all duration-180 hover:border-[#FFB627] hover:-translate-y-1"
    >
      {/* Tag */}
      <span className="block font-mono text-[0.68rem] font-bold uppercase tracking-widest text-[#33E6CC] mb-3">
        {tag}
      </span>

      {/* Title */}
      <h3 className="font-display text-[1.1rem] font-bold text-[#FFB627] mb-2.5 leading-snug tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-[0.88rem] text-[#ABA3C4] leading-relaxed">
        {description}
      </p>
    </Link>
  )
}
