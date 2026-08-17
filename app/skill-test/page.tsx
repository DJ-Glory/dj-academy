import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import SkillTestClient from '@/app/skill-test/SkillTestClient'

export const metadata: Metadata = {
  title: 'Free DJ Skill Test — Find Your DJ Level',
  description:
    'Take a free 10-question DJ skill test covering beatmatching, BPM, phrasing, EQ, harmonic mixing, track selection and crowd reading. Get your DJ level instantly.',
  alternates: { canonical: `${SITE_URL}/skill-test` },
  openGraph: {
    url: `${SITE_URL}/skill-test`,
    title: 'Free DJ Skill Test | Affection The DJ Academy',
    description: '10 real DJ scenarios. Find out your DJ level in two minutes.',
  },
}

export default function SkillTestPage() {
  return <SkillTestClient />
}
