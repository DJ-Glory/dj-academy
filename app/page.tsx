import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Ticker from '@/components/Ticker'
import { SITE_URL, DJGLORY_URL, ACADEMY_ADDR, MAPS_URL, MAPS_EMBED_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: {
    absolute: 'DJ Academy in Ahmedabad | Affection The DJ Academy — Powered by DJ Glory',
  },
  description:
    'Affection The DJ Academy in Ahmedabad, powered by DJ Glory. Practical DJ training for beginners and aspiring professional DJs — weddings, clubs, festivals, commercial events and music production.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: 'Affection The DJ Academy | Ahmedabad',
    description: 'Learn DJing. Practice on real decks. Prepare for the real event floor.',
  },
}

const readout = 'readout'

export default function HomePage() {
  return (
    <>
      <Ticker />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[#3A2E52] pt-20 pb-16 md:pt-24 md:pb-20">
        {/* background glow */}
        <div className="pointer-events-none absolute -top-1/4 -right-16 w-[640px] h-[640px] rounded-full bg-[radial-gradient(circle,rgba(255,61,130,0.18),transparent_65%)]" />

        <div className="site-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            {/* Copy */}
            <div>
              <span className={readout}>TRP Mall · Ahmedabad · DJ Training</span>
              <h1 className="font-display text-[clamp(2.2rem,4.2vw,3.6rem)] uppercase leading-[1.1] tracking-tight mt-4 mb-5 text-[#EDEAF5]">
                Become a DJ.<br />
                <em className="not-italic text-[#FFB627]">Not just learn</em> DJing.
              </h1>
              <p className="font-body text-[#ABA3C4] text-lg max-w-[580px] leading-relaxed">
                Practical DJ training built for the real event floor — from your first beatmatch to confident wedding, club, festival and commercial sets.
              </p>

              <div className="flex flex-wrap gap-4 mt-7">
                <Link
                  href="/courses#demo"
                  className="font-display inline-flex items-center justify-center bg-[#FFB627] text-[#1A1206] text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full font-bold transition hover:shadow-[0_0_0_4px_rgba(255,182,39,0.25)] active:scale-[0.97]"
                >
                  Book Free DJ Session
                </Link>
                <Link
                  href="/skill-test"
                  className="font-display inline-flex items-center justify-center border border-[#3A2E52] text-[#EDEAF5] text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full transition hover:border-[#FFB627] hover:text-[#FFB627] active:scale-[0.97]"
                >
                  Take Free Skill Test
                </Link>
              </div>

              <div className="font-mono flex flex-wrap gap-x-5 gap-y-2 mt-5 text-[0.72rem] uppercase text-[#ABA3C4]">
                <span>✓ Beginner friendly</span>
                <span>✓ Real deck practice</span>
                <span>✓ Career-focused training</span>
              </div>
            </div>

            {/* Hero card — visual DJ deck */}
            <div className="rounded-[20px] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.35)] bg-[linear-gradient(145deg,#2e2043,#171321)] border border-[#3A2E52]">
              {/* top bar */}
              <div className="flex justify-between items-center gap-3 mb-0">
                <span className="font-mono text-[0.7rem] uppercase tracking-widest text-[#ABA3C4]">DJ GLORY / ACADEMY</span>
                <span className="font-mono text-[0.66rem] font-bold tracking-widest text-[#FF3D82]">LIVE TRAINING</span>
              </div>

              {/* visual deck */}
              <div className="relative rounded-[14px] my-5 overflow-hidden bg-[#0e0b14] border border-[#3b2d50] min-h-[300px]">
                {/* Jog wheel */}
                <div className="absolute right-5 top-8 w-[150px] h-[150px] rounded-full jog-spin border-2 border-[#5a466e] bg-[repeating-radial-gradient(circle,#17121f_0_6px,#0e0b14_7px_11px)] shadow-[inset_0_0_0_18px_#191323]" />

                {/* Deck screen */}
                <div className="absolute left-5 top-7 w-[140px] p-4 rounded-lg flex flex-col bg-[#081514] border border-[#285b55] text-[#33E6CC] font-mono">
                  <span className="text-[0.6rem] uppercase tracking-wider mb-1">DECK A</span>
                  <strong className="text-[2rem] leading-tight text-[#FFB627]">128.0</strong>
                  <small className="text-[0.58rem] mt-1">BPM · 8A · PEAK</small>
                </div>

                {/* Fader */}
                <div className="absolute left-6 rounded-[10px] h-2 bottom-[60px] w-[90px] bg-[linear-gradient(90deg,#FFB627,#FF3D82)]" />

                {/* Waveform */}
                <div className="absolute left-5 right-5 bottom-4 h-[60px] flex gap-[4px] items-end">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div key={i} className="waveform-bar h-full" />
                  ))}
                </div>
              </div>

              {/* bottom bar */}
              <p className="font-mono text-[0.65rem] font-bold tracking-widest text-[#ABA3C4] pt-3 pb-0">
                LEARN → PRACTICE → PERFORM → GET BOOKING-READY
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────── */}
      <section className="border-b border-[#3A2E52] bg-[#100c18]" aria-label="Why choose us">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { n: '01', t: 'Real equipment', s: 'Hands-on deck time' },
              { n: '02', t: 'Real scenarios', s: 'Wedding · club · festival' },
              { n: '03', t: 'Real feedback', s: 'Practice with direction' },
              { n: '04', t: 'Real confidence', s: 'Performance focused' },
            ].map(({ n, t, s }, i) => (
              <div
                key={n}
                className={`py-5 px-5 grid grid-cols-[auto_1fr] gap-x-3 ${i < 3 ? 'border-r border-[#3A2E52]' : ''} ${i >= 2 ? 'border-t border-[#3A2E52] lg:border-t-0' : ''}`}
              >
                <span className="font-mono text-[0.72rem] font-bold text-[#FFB627]">{n}</span>
                <div>
                  <span className="block font-extrabold text-[0.85rem] text-[#EDEAF5]">{t}</span>
                  <small className="text-[#ABA3C4] text-[0.72rem]">{s}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHOOSE YOUR PATH ──────────────────────────────── */}
      <section className="py-20">
        <div className="site-container">
          <div className="max-w-[640px] mb-11">
            <span className={readout}>Choose Your Path</span>
            <h2 className="font-display uppercase text-[clamp(1.7rem,3.4vw,2.6rem)] mt-4 mb-4 text-[#EDEAF5]">
              Where are you starting?
            </h2>
            <p className="font-body text-[#ABA3C4] text-lg">
              You don&apos;t need experience. Tell us what you want from DJing and start at the right level.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { n: '01', h: "I've never DJed", p: 'Start from zero. Learn equipment, beatmatching, phrasing and your first proper mix.', cta: 'Beginner DJ →', href: '/courses#beginner' },
              { n: '02', h: 'I can mix, but want to go pro', p: 'Build set structure, crowd reading, event preparation and performance confidence.', cta: 'Professional DJ →', href: '/courses#professional' },
              { n: '03', h: 'I want my own sound', p: 'Combine DJ performance with edits, mashups and music-production fundamentals.', cta: 'DJ + Production →', href: '/courses#production' },
            ].map(({ n, h, p, cta, href }) => (
              <Link
                key={n}
                href={href}
                className="block rounded-[16px] p-7 border border-[#3A2E52] bg-[#241933] transition-all duration-200 hover:-translate-y-1 hover:border-[#FFB627]"
              >
                <b className="font-mono text-[0.72rem] text-[#33E6CC]">{n}</b>
                <h3 className="font-display text-[1.15rem] mt-5 mb-3 text-[#EDEAF5]">{h}</h3>
                <p className="font-body text-[#ABA3C4] text-[0.9rem]">{p}</p>
                <span className="font-mono block mt-6 text-[0.76rem] font-bold text-[#FFB627]">{cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AFFECTION ─────────────────────────────────── */}
      <section className="py-20 border-y border-[#3A2E52] bg-[#241933]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
            <div>
              <span className={readout}>Why Affection</span>
              <h2 className="font-display uppercase text-[clamp(1.7rem,3.4vw,2.6rem)] mt-4 mb-4 text-[#EDEAF5]">
                Built for the Gujarat event floor.
              </h2>
              <p className="font-body text-[#ABA3C4] text-lg mb-8 max-w-[600px]">
                DJing in Gujarat is not one format. Weddings, sangeets, baraats, clubs, corporate shows, festivals and Navratri all demand different decisions.
              </p>
              <div className="grid grid-cols-2 gap-[1px] border border-[#3A2E52] bg-[#3A2E52]">
                {[
                  { b: 'Wedding & Sangeet', s: 'Energy control, entries, commercial programming and crowd requests.' },
                  { b: 'Club & Festival', s: 'Long-form sets, transitions, harmonic mixing and crowd reading.' },
                  { b: 'Garba & Navratri', s: 'Gujarati programming, BPM flow and non-stop energy planning.' },
                  { b: 'Commercial Events', s: 'Adapt your set to the brief, audience and venue.' },
                ].map(({ b, s }) => (
                  <div key={b} className="p-5 bg-[#241933]">
                    <b className="block text-[0.9rem] text-[#EDEAF5]">{b}</b>
                    <span className="block text-[0.78rem] text-[#ABA3C4] mt-1">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <div className="rounded-[18px] p-8 bg-[#17111f] border border-[#B8860F]">
              <span className={readout}>The Goal</span>
              <h3 className="font-display text-[1.3rem] leading-snug my-5 text-[#EDEAF5]">
                &ldquo;We don&rsquo;t promise fake bookings. We prepare you to become booking-ready.&rdquo;
              </h3>
              <p className="font-body text-[0.85rem] text-[#ABA3C4]">
                Build the skills, confidence and performance discipline that professional gigs actually require.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PROGRAMMES ──────────────────────────────── */}
      <section className="py-20">
        <div className="site-container">
          <div className="max-w-[640px] mb-11">
            <span className={readout}>Learn · Practice · Perform</span>
            <h2 className="font-display uppercase text-[clamp(1.7rem,3.4vw,2.6rem)] mt-4 text-[#EDEAF5]">
              Three programmes. One real-world goal.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                tag: '01 · Beginner', h: 'Beginner DJ',
                p: 'For complete beginners who want a strong foundation and their first confident mix.',
                items: ['Beatmatching & phrasing', 'EQ, gain & transitions', 'Controller / CDJ workflow', 'First recorded mix'],
                price: '3-Month Programme',
                cta: 'Explore Beginner', ctaHref: '/courses#beginner', gold: false,
              },
              {
                tag: '02 · Professional', h: 'Professional DJ',
                p: 'For students serious about weddings, clubs, festivals and commercial event work.',
                items: ['Set building & crowd reading', 'Harmonic mixing & advanced transitions', 'Wedding / club / festival scenarios', 'Performance preparation'],
                price: '6-Month Programme',
                cta: 'Explore Professional', ctaHref: '/courses#professional', gold: true,
              },
              {
                tag: '03 · Advanced', h: 'DJ + Music Production',
                p: 'Build your DJ identity with edits, mashups and music-production fundamentals.',
                items: ['Edits & mashups', 'Production fundamentals', 'DJ workflow integration', 'Portfolio-ready project'],
                price: '6-Month Programme',
                cta: 'Explore DJ + Production', ctaHref: '/courses#production', gold: false,
              },
            ].map(({ tag, h, p, items, price, cta, ctaHref, gold }) => (
              <article
                key={h}
                className={`flex flex-col rounded-[14px] p-7 border transition-all duration-200 hover:-translate-y-1 bg-[#241933] ${gold ? 'border-[#FFB627] shadow-[0_0_0_1px_rgba(255,182,39,0.15),0_20px_50px_rgba(0,0,0,0.2)]' : 'border-[#3A2E52]'
                  }`}
              >
                <span className="font-mono text-[0.72rem] text-[#33E6CC] uppercase tracking-widest">{tag}</span>
                <h3 className="font-display text-[1.15rem] mt-3 mb-2 text-[#EDEAF5]">{h}</h3>
                <p className="font-body text-[0.92rem] text-[#ABA3C4] mb-4">{p}</p>
                <ul className="space-y-2 mb-4">
                  {items.map(item => (
                    <li key={item} className="relative pl-5 text-[0.82rem] text-[#ABA3C4] before:content-['✓'] before:absolute before:left-0 before:text-[#33E6CC]">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="font-mono text-[#FFB627] text-[1.05rem] mt-auto pt-4">{price}</div>
                <Link
                  href={ctaHref}
                  className={`font-display mt-5 inline-flex items-center justify-center text-[0.85rem] uppercase px-6 py-3 rounded-full font-bold transition active:scale-[0.97] ${gold
                      ? 'bg-[#FFB627] text-[#1A1206] hover:shadow-[0_0_0_4px_rgba(255,182,39,0.25)]'
                      : 'border border-[#3A2E52] text-[#EDEAF5] hover:border-[#FFB627] hover:text-[#FFB627]'
                    }`}
                >
                  {cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DJ GLORY ──────────────────────────────────────── */}
      <section className="py-20 border-y border-[#3A2E52] bg-[radial-gradient(circle_at_80%_50%,rgba(255,61,130,0.12),transparent_35%),#100c18]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
            <div className="aspect-square max-w-sm w-full mx-auto rounded-[24px] overflow-hidden border border-[#3A2E52] shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
              <Image
                src="/DJ-Glory.jpg"
                alt="DJ Glory"
                width={480}
                height={480}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>

            <div>
              <span className={readout}>Powered by DJ Glory</span>
              <h2 className="font-display uppercase text-[clamp(1.7rem,3.4vw,2.6rem)] mt-4 mb-4 text-[#EDEAF5]">
                Learn from an active DJ ecosystem.
              </h2>
              <p className="font-body text-[#ABA3C4] text-lg mb-6 max-w-[560px]">
                Affection The DJ Academy is connected to the wider DJ Glory ecosystem — live performance, events, music and the realities of working as a DJ.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Live DJ experience', 'Event-focused knowledge', 'Music & artist ecosystem', 'Gujarat market understanding'].map(p => (
                  <span key={p} className="border border-[#3A2E52] rounded-full px-3 py-2 text-[0.72rem] text-[#ABA3C4] bg-[#241933]">
                    {p}
                  </span>
                ))}
              </div>
              <Link
                href={DJGLORY_URL}
                target="_blank"
                rel="noopener"
                className="font-mono text-[#FFB627] font-bold text-[0.78rem] hover:underline"
              >
                Explore DJ Glory →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE DJ LAB ───────────────────────────────────── */}
      <section className="py-20 bg-[#241933] border-y border-[#3A2E52]">
        <div className="site-container">
          <div className="max-w-[640px] mb-11">
            <span className={readout}>Free DJ Lab</span>
            <h2 className="font-display uppercase text-[clamp(1.7rem,3.4vw,2.6rem)] mt-4 mb-4 text-[#EDEAF5]">
              Don&apos;t just read about DJing. Try it.
            </h2>
            <p className="font-body text-[#ABA3C4] text-lg">
              Use the academy&apos;s free interactive tools before you decide what to learn next.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: '◉', h: 'DJ Simulator', p: 'Practice the basics in your browser with two decks and a crossfader.', cta: 'Open Simulator →', href: '/simulator' },
              { icon: '01', h: 'DJ Skill Test', p: 'Answer real DJ scenarios and discover your current level.', cta: 'Check Your Level →', href: '/skill-test' },
              { icon: 'BPM', h: 'DJ Tools', p: 'BPM, key and transition helpers for faster preparation.', cta: 'Explore Tools →', href: '/tools' },
            ].map(({ icon, h, p, cta, href }) => (
              <Link
                key={h}
                href={href}
                className="block rounded-[14px] p-7 border border-[#3A2E52] bg-[#2E2043] transition-all duration-200 hover:-translate-y-1 hover:border-[#FFB627]"
              >
                <span className="font-mono block text-[1.2rem] font-bold text-[#FFB627] mb-5">{icon}</span>
                <h3 className="font-display text-[1.15rem] mb-2 text-[#EDEAF5]">{h}</h3>
                <p className="font-body text-[0.92rem] text-[#ABA3C4] mb-5">{p}</p>
                <strong className="font-mono text-[0.75rem] font-bold text-[#FFB627]">{cta}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WEEKLY CHALLENGE ──────────────────────────────── */}
      <section className="py-20">
        <div className="site-container">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-start md:items-center rounded-[18px] p-9 bg-[linear-gradient(100deg,#241933,#211329)] border border-[#3A2E52]">
            <div>
              <span className={readout}>Weekly DJ Challenge</span>
              <h2 className="font-display uppercase text-[clamp(1.4rem,2.5vw,2rem)] mt-4 mb-3 text-[#EDEAF5]">
                Would you know what to play next?
              </h2>
              <p className="font-body text-[#ABA3C4] max-w-[580px]">
                DJing is decision-making under pressure. Try our free scenario and see how you think.
              </p>
            </div>
            <Link
              href="/skill-test"
              className="shrink-0 inline-flex items-center justify-center font-display text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full font-bold bg-[#FF3D82] text-[#1A0610] transition hover:shadow-[0_0_0_4px_rgba(255,61,130,0.25)] active:scale-[0.97]"
            >
              Take the Challenge
            </Link>
          </div>
        </div>
      </section>

      {/* ── LOCATION ──────────────────────────────────────── */}
      <section className="py-20 bg-[#0e0b14]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-16 items-center">
            <div>
              <span className={readout}>Visit the Academy</span>
              <h2 className="font-display uppercase text-[clamp(1.7rem,3.4vw,2.6rem)] mt-4 mb-3 text-[#EDEAF5]">
                Train in Ahmedabad.
              </h2>
              <p className="font-body text-[#ABA3C4] text-lg mb-2">{ACADEMY_ADDR}</p>
              <p className="font-body text-[0.88rem] text-[#ABA3C4] mb-7">
                Book a free demo session and visit the academy at TRP Mall, Ahmedabad.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/courses#demo"
                  className="font-display inline-flex items-center justify-center bg-[#FFB627] text-[#1A1206] text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full font-bold transition hover:shadow-[0_0_0_4px_rgba(255,182,39,0.25)]"
                >
                  Book Free Demo
                </Link>
                <Link
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display inline-flex items-center justify-center border border-[#3A2E52] text-[#EDEAF5] text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full transition hover:border-[#FFB627] hover:text-[#FFB627]"
                >
                  Open Maps
                </Link>
              </div>
            </div>

            <iframe
              title="Affection The DJ Academy location — TRP Mall, Ahmedabad"
              src={MAPS_EMBED_URL}
              className="min-h-[280px] w-full rounded-[20px] border border-[#3A2E52]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="site-container">
          <div className="rounded-[20px] px-10 py-14 text-center bg-[linear-gradient(120deg,#241933,#2E2043)] border border-[#3A2E52]">
            <span className={readout}>Your First Step</span>
            <h2 className="font-display uppercase text-[clamp(1.7rem,3.4vw,2.6rem)] mt-4 mb-3 text-[#EDEAF5]">
              Try a DJ session before you enrol.
            </h2>
            <p className="font-body text-[#ABA3C4] text-lg max-w-[580px] mx-auto mb-8">
              No experience required. Come to the academy, get on the decks and understand what DJing actually feels like.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/courses#demo"
                className="font-display inline-flex items-center justify-center bg-[#FFB627] text-[#1A1206] text-[0.85rem] uppercase tracking-widest px-8 py-4 rounded-full font-bold transition hover:shadow-[0_0_0_4px_rgba(255,182,39,0.25)]"
              >
                Book Free DJ Session
              </Link>
              <Link
                href="/skill-test"
                className="font-display inline-flex items-center justify-center border border-[#3A2E52] text-[#EDEAF5] text-[0.85rem] uppercase tracking-widest px-8 py-4 rounded-full transition hover:border-[#FFB627] hover:text-[#FFB627]"
              >
                Take Skill Test First
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
