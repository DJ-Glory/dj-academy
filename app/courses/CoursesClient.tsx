'use client'

import Link from 'next/link'
import { WHATSAPP_NUM } from '@/lib/config'

const readout = 'readout'

const COURSES = [
  {
    id: 'beginner',
    tag: '01 · Beginner',
    h2: 'Beginner DJ Programme',
    lede: 'Start from zero without feeling lost. Learn the language of DJing and build the confidence to perform a complete set.',
    items: [
      'DJ equipment & signal-flow basics',
      'BPM, beat grids, beatmatching & phrasing',
      'EQ, gain, filters and clean transitions',
      'Rekordbox / library preparation',
      'Set preparation and track selection',
      'First recorded DJ mix',
    ],
    outcome: 'FIRST CONFIDENT MIX',
    outcomeSub: 'Finish with a structured understanding of the decks and a recorded mix you can review and improve.',
    duration: '3-Month Programme',
    ctaLabel: 'Ask About Beginner Course',
    gold: false,
    alt: false,
    reverse: false,
  },
  {
    id: 'professional',
    tag: '02 · Professional',
    h2: 'Professional DJ Programme',
    lede: 'For students who want to take DJing seriously and prepare for real wedding, club, festival and commercial environments.',
    items: [
      'Advanced transitions & harmonic mixing',
      'Crowd reading and energy management',
      'Wedding / Sangeet / Baraat programming',
      'Club & festival set structure',
      'Live performance preparation',
      'Gig-ready music organization and workflow',
    ],
    outcome: 'BOOKING-READY SKILLS',
    outcomeSub: 'Build the practical ability, set discipline and confidence needed before stepping into professional work.',
    duration: '6-Month Programme',
    ctaLabel: 'Ask About Professional Course',
    gold: true,
    alt: true,
    reverse: true,
  },
  {
    id: 'production',
    tag: '03 · Advanced',
    h2: 'DJ + Music Production',
    lede: 'Develop your own sound while becoming a stronger DJ. Ideal for students who want edits, mashups and production skills.',
    items: [
      'DJ performance workflow',
      'Edits, mashups and transition tools',
      'Music-production fundamentals',
      'Arrangement, drums, bass and FX basics',
      'DJ-friendly track preparation',
      'Portfolio project',
    ],
    outcome: 'YOUR OWN SOUND',
    outcomeSub: 'Combine performance knowledge with production fundamentals and create material that supports your DJ identity.',
    duration: '6-Month Programme',
    ctaLabel: 'Ask About DJ + Production',
    gold: false,
    alt: false,
    reverse: false,
  },
]

function submitDemo(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const form = e.currentTarget
  const name = (form.querySelector('#dName') as HTMLInputElement).value
  const phone = (form.querySelector('#dPhone') as HTMLInputElement).value
  const level = (form.querySelector('#dLevel') as HTMLSelectElement).value
  const goal = (form.querySelector('#dGoal') as HTMLSelectElement).value
  const msg = (form.querySelector('#dMsg') as HTMLTextAreaElement).value

  const targetNum = WHATSAPP_NUM && WHATSAPP_NUM !== 'ADD_NUMBER' ? WHATSAPP_NUM : '919033566514'

  const messageText = `Hi! I want to book a free DJ demo at Affection The DJ Academy.\n\n Name: ${name}\n Phone: ${phone}\n Level: ${level}\n Goal: ${goal}${msg ? `\n Note: ${msg}` : ''}`
  const encodedText = encodeURIComponent(messageText)

  window.open(`https://wa.me/${targetNum}?text=${encodedText}`, '_blank')
}

export default function CoursesClient() {
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
            <span>Courses</span>
          </p>

          {/* Readout badge */}
          <span className="readout">DJ Courses · Ahmedabad</span>

          {/* H1 */}
          <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-black uppercase leading-[1.05] tracking-tight text-[#EDEAF5] my-5">
            Choose your DJ path.
          </h1>

          {/* Subtitle */}
          <p className="font-body text-[1.1rem] text-[#ABA3C4] max-w-[640px] leading-relaxed">
            Every programme is designed around practical deck time, structured learning and the situations DJs actually face at events.
          </p>
        </div>
      </section>

      {/* Course details */}
      {COURSES.map(({ id, tag, h2, lede, items, outcome, outcomeSub, duration, ctaLabel, gold, alt, reverse }) => (
        <section key={id} id={id} className="py-20 border-b border-[var(--color-line)]"
          style={{ background: alt ? 'var(--color-plum)' : undefined }}>
          <div className="max-w-[1180px] mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center ${reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)' }} className="text-[0.72rem] text-[var(--color-cyan)] uppercase tracking-widest">{tag}</span>
                <h2 style={{ fontFamily: 'var(--font-display)' }} className="uppercase text-[clamp(1.6rem,3vw,2.4rem)] mt-3 mb-4 text-[var(--color-ink)]">{h2}</h2>
                <p className="text-[var(--color-ink-dim)] text-lg mb-5 max-w-[540px]">{lede}</p>
                <ul className="space-y-2 mb-7">
                  {items.map(item => (
                    <li key={item} className="relative pl-5 text-[0.85rem] text-[var(--color-ink-dim)] before:content-['✓'] before:absolute before:left-0 before:text-[var(--color-cyan)]">{item}</li>
                  ))}
                </ul>
                <Link href="#demo" style={{ fontFamily: 'var(--font-display)' }}
                  className={`inline-flex items-center justify-center text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full font-bold transition active:scale-[0.97] ${gold ? 'bg-[var(--color-gold)] text-[#1A1206] hover:shadow-[0_0_0_4px_rgba(255,182,39,0.25)]'
                      : 'border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]'}`}>
                  {ctaLabel}
                </Link>
              </div>
              <div className="rounded-[20px] p-8" style={{ background: 'var(--color-plum)', border: `1px solid ${gold ? 'var(--color-gold)' : 'var(--color-line)'}` }}>
                <span className={readout}>Outcome</span>
                <strong style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: 'var(--color-gold)' }} className="block mt-5 mb-3 leading-tight">{outcome}</strong>
                <p className="text-[var(--color-ink-dim)] text-sm">{outcomeSub}</p>
                <small style={{ fontFamily: 'var(--font-mono)' }} className="block mt-6 text-[0.7rem] text-[var(--color-cyan)]">{duration}</small>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Gujarat specialisations */}
      <section className="py-20 border-b border-[var(--color-line)]" style={{ background: 'var(--color-plum)' }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-[640px] mb-10">
            <span className={readout}>Gujarat Specialisations</span>
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="uppercase text-[clamp(1.7rem,3.4vw,2.6rem)] mt-4 text-[var(--color-ink)]">Train for the gigs around you.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { tag: 'Wedding', h: 'Sangeet & Baraat', p: 'Entries, energy control, commercial programming and fast decision-making.' },
              { tag: 'Festival', h: 'Garba & Navratri', p: 'Gujarati programming, BPM flow and long-form energy planning.' },
              { tag: 'Nightlife', h: 'Club & Festival', p: 'Longer sets, harmonic mixing, crowd reading and performance structure.' },
            ].map(({ tag, h, p }) => (
              <div key={h} className="rounded-[14px] p-7 border border-[var(--color-line)] transition-all hover:-translate-y-1 hover:border-[var(--color-gold)]" style={{ background: 'var(--color-plum2)' }}>
                <span style={{ fontFamily: 'var(--font-mono)' }} className="text-[0.72rem] text-[var(--color-cyan)] uppercase tracking-widest">{tag}</span>
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-[1.15rem] mt-3 mb-2 text-[var(--color-ink)]">{h}</h3>
                <p className="text-[0.92rem] text-[var(--color-ink-dim)]">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo form */}
      <section id="demo" className="py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-[640px] mb-10">
            <span className={readout}>Free Practical Session</span>
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="uppercase text-[clamp(1.7rem,3.4vw,2.6rem)] mt-4 mb-3 text-[var(--color-ink)]">Get on the decks before you enrol.</h2>
            <p className="text-[var(--color-ink-dim)] text-lg">Tell us your level and goal. The academy can confirm the demo over WhatsApp or phone.</p>
          </div>
          <form onSubmit={submitDemo} className="max-w-[760px] rounded-[14px] p-8 border border-[var(--color-line)]" style={{ background: 'var(--color-plum)' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
              {[
                { id: 'dName', label: 'Name', type: 'text', placeholder: 'Your name', autoComplete: 'name' },
                { id: 'dPhone', label: 'WhatsApp number', type: 'tel', placeholder: '+91 …', autoComplete: 'tel' },
              ].map(({ id, label, type, placeholder, autoComplete }) => (
                <div key={id}>
                  <label style={{ fontFamily: 'var(--font-mono)' }} htmlFor={id} className="block text-[0.72rem] uppercase tracking-widest text-[var(--color-ink-dim)] mb-2">{label}</label>
                  <input id={id} required type={type} autoComplete={autoComplete} placeholder={placeholder}
                    className="w-full rounded-lg px-4 py-3 text-[0.95rem] mb-5 border border-[var(--color-line)] text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)] transition-colors"
                    style={{ background: '#120e1a', fontFamily: 'var(--font-body)' }} />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: 'var(--font-mono)' }} htmlFor="dLevel" className="block text-[0.72rem] uppercase tracking-widest text-[var(--color-ink-dim)] mb-2">Your level</label>
                <select id="dLevel" className="w-full rounded-lg px-4 py-3 text-[0.95rem] mb-5 border border-[var(--color-line)] text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)] transition-colors" style={{ background: '#120e1a', fontFamily: 'var(--font-body)' }}>
                  <option>Complete beginner</option>
                  <option>I&apos;ve already tried DJing</option>
                  <option>I perform occasionally</option>
                  <option>Not sure</option>
                </select>
              </div>
              <div>
                <label style={{ fontFamily: 'var(--font-mono)' }} htmlFor="dGoal" className="block text-[0.72rem] uppercase tracking-widest text-[var(--color-ink-dim)] mb-2">Main goal</label>
                <select id="dGoal" className="w-full rounded-lg px-4 py-3 text-[0.95rem] mb-5 border border-[var(--color-line)] text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)] transition-colors" style={{ background: '#120e1a', fontFamily: 'var(--font-body)' }}>
                  <option>Learn DJing as a career</option>
                  <option>Wedding / event DJing</option>
                  <option>Club / festival DJing</option>
                  <option>Hobby / personal skill</option>
                  <option>DJ + Music Production</option>
                </select>
              </div>
            </div>
            <label style={{ fontFamily: 'var(--font-mono)' }} htmlFor="dMsg" className="block text-[0.72rem] uppercase tracking-widest text-[var(--color-ink-dim)] mb-2">Anything you want us to know?</label>
            <textarea id="dMsg" rows={4} placeholder="Age, experience, preferred timing, etc."
              className="w-full rounded-lg px-4 py-3 text-[0.95rem] mb-6 border border-[var(--color-line)] text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)] transition-colors resize-none"
              style={{ background: '#120e1a', fontFamily: 'var(--font-body)' }} />
            <button type="submit" style={{ fontFamily: 'var(--font-display)' }}
              className="inline-flex items-center justify-center bg-[var(--color-gold)] text-[#1A1206] text-[0.85rem] uppercase tracking-widest px-7 py-4 rounded-full font-bold transition hover:shadow-[0_0_0_4px_rgba(255,182,39,0.25)]">
              Send Demo Enquiry on WhatsApp
            </button>
            <p className="text-[0.72rem] text-[var(--color-ink-dim)] mt-3">Your message opens in WhatsApp. No payment is required to request the demo.</p>
          </form>
        </div>
      </section>
    </>
  )
}
