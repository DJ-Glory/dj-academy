import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import CoursesClient from './CoursesClient'

export const metadata: Metadata = {
  title: 'DJ Courses in Ahmedabad',
  description:
    'Explore beginner, professional DJ and DJ + music production courses in Ahmedabad. Practical training for weddings, clubs, festivals, Garba, Sangeet and commercial events.',
  alternates: { canonical: `${SITE_URL}/courses` },
  openGraph: {
    url: `${SITE_URL}/courses`,
    title: 'DJ Courses in Ahmedabad',
    description: 'Three DJ programmes designed around practical deck time and real event scenarios.',
  },
}

export default function CoursesPage() {
  return <CoursesClient />
}
