import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import ToolsClient from './ToolsClient'

export const metadata: Metadata = {
  title: 'Free DJ Tools — BPM & Key Compatibility Calculator',
  description:
    'Free DJ tools: BPM matching calculator and Camelot key compatibility checker. Instantly see tempo shift, key compatibility and a suggested transition plan.',
  alternates: { canonical: `${SITE_URL}/tools` },
  openGraph: {
    url: `${SITE_URL}/tools`,
    title: 'Free DJ Tools — BPM & Key Calculator | Affection The DJ Academy',
    description: 'Instant BPM matching and Camelot key compatibility calculator for DJs.',
  },
}

export default function ToolsPage() {
  return <ToolsClient />
}
