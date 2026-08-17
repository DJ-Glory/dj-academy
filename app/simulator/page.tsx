import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import SimulatorClient from './SimulatorClient'

export const metadata: Metadata = {
  title: 'Free Online DJ Simulator — Practice Beatmatching in Your Browser',
  description:
    'Free browser-based DJ simulator. Two decks, adjustable BPM and a crossfader — practice blending without any equipment.',
  alternates: { canonical: `${SITE_URL}/simulator` },
  openGraph: {
    url: `${SITE_URL}/simulator`,
    title: 'Free Online DJ Simulator | Affection The DJ Academy',
    description: 'Two decks, a crossfader, and live tempo control — right in your browser.',
    type: 'website',
  },
}

export default function SimulatorPage() {
  return <SimulatorClient />
}
