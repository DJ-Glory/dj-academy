import Link from 'next/link'
import { Phone, MapPin, Sparkles } from 'lucide-react'
import { PHONE_NUM, ACADEMY_ADDR } from '@/lib/config'

const phoneDisplay = `+91 ${PHONE_NUM.slice(2, 7)} ${PHONE_NUM.slice(7)}`
const phoneHref = `tel:+${PHONE_NUM}`

export default function Footer() {
  return (
    <footer className="border-t border-[#3A2E52] pt-12 pb-7 mt-0 bg-[#140C1D]/60 backdrop-blur-md">
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex flex-col leading-tight gap-0.5 mb-4">
              <span className="font-display text-[0.9rem] font-bold uppercase tracking-wider text-[#EDEAF5]">
                AFFECTION
              </span>
              <span className="font-display text-[0.9rem] font-bold uppercase tracking-wider text-[#FFB627]">
                THE DJ ACADEMY
              </span>
              <span className="font-mono text-[0.42rem] tracking-widest text-[#33E6CC] uppercase font-bold mt-1">
                POWERED BY DJ GLORY
              </span>
            </div>
            <p className="font-body text-[0.88rem] text-[#ABA3C4] leading-relaxed max-w-[260px]">
              A practical DJ academy in Ahmedabad for students who want to learn, practice and become performance-ready.
            </p>
          </div>

          {/* Learn Column */}
          <div>
            <h4 className="font-mono text-[0.72rem] tracking-widest uppercase text-[#ABA3C4] mb-4 font-bold">
              LEARN
            </h4>
            {[
              { href: '/courses',    label: 'Courses' },
              { href: '/simulator',  label: 'DJ Simulator' },
              { href: '/skill-test', label: 'Skill Test' },
              { href: '/tools',      label: 'DJ Tools' },
            ].map(({ href, label }) => (
              <FooterLink key={href} href={href}>{label}</FooterLink>
            ))}
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="font-mono text-[0.72rem] tracking-widest uppercase text-[#ABA3C4] mb-4 font-bold">
              EXPLORE
            </h4>
            <FooterLink href="/knowledge-hub">Knowledge Hub</FooterLink>
            <FooterLink href="/courses#demo">Free Demo</FooterLink>
            <FooterLink href="https://www.djglory.in/" target="_blank" rel="noopener">DJ Glory ↗</FooterLink>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-mono text-[0.72rem] tracking-widest uppercase text-[#ABA3C4] mb-4 font-bold">
              CONTACT
            </h4>
            <FooterLink
              href="/courses#demo"
              icon={<Sparkles className="w-4 h-4 shrink-0 text-white" />}
            >
              Book Free Demo
            </FooterLink>
            <FooterLink
              href={phoneHref}
              icon={<Phone className="w-4 h-4 shrink-0 text-white" />}
            >
              Call the Academy ({phoneDisplay})
            </FooterLink>
            <div className="flex items-center gap-2.5 font-body text-[0.82rem] text-[#ABA3C4] mt-3">
              <MapPin className="w-4 h-4 shrink-0 text-white" />
              <span>{ACADEMY_ADDR.replace(', India', '')}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-5 border-t border-[#3A2E52] flex flex-wrap justify-between items-center gap-2 font-body text-[0.8rem] text-[#ABA3C4]">
          <span>© 2026 Affection The DJ Academy, Ahmedabad.</span>
          <span>Powered by DJ Glory</span>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({
  href,
  children,
  icon,
  target,
  rel,
}: {
  href: string
  children: React.ReactNode
  icon?: React.ReactNode
  target?: string
  rel?: string
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className="group flex items-center gap-2.5 font-body text-[0.88rem] text-[#ABA3C4] mb-3 no-underline transition-colors duration-150 hover:text-[#FFB627]"
    >
      {icon}
      <span>{children}</span>
    </Link>
  )
}


