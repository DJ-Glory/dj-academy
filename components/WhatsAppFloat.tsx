'use client'

import Link from 'next/link'
import Image from 'next/image'
import { WHATSAPP_NUM } from '@/lib/config'

export default function WhatsAppFloat() {
  const isReal = WHATSAPP_NUM && WHATSAPP_NUM !== 'ADD_NUMBER'
  const href = isReal
    ? `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent('Hi! I want to book a free DJ demo at Affection The DJ Academy.')}`
    : '/courses#demo'

  return (
    <Link
      href={href}
      target={isReal ? '_blank' : undefined}
      rel={isReal ? 'noopener noreferrer' : undefined}
      aria-label="Book a free DJ demo via WhatsApp"
      className="fixed right-5 bottom-5 z-[60] w-14 h-14 rounded-full flex items-center justify-center bg-[#25d366] text-white shadow-[0_8px_30px_rgba(0,0,0,0.4)] border-[3px] border-[#14101F] transition-transform duration-150 hover:scale-110"
    >
      <Image
        src="/whatsapp-white-icon.svg"
        alt="WhatsApp"
        width={28}
        height={28}
        className="w-7 h-7 object-contain"
      />
    </Link>
  )
}
