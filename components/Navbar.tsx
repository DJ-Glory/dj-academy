'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '/',              label: 'HOME' },
  { href: '/courses',       label: 'COURSES' },
  { href: '/simulator',     label: 'DJ SIMULATOR' },
  { href: '/skill-test',    label: 'SKILL TEST' },
  { href: '/tools',         label: 'DJ TOOLS' },
  { href: '/knowledge-hub', label: 'KNOWLEDGE HUB' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  // Disable body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[rgba(20,16,31,0.95)] backdrop-blur-md border-b border-[#3A2E52]">
        <div className="site-container flex items-center justify-between py-4 gap-4">
          {/* Left: Brand Logo */}
          <Link
            href="/"
            onClick={() => setDrawerOpen(false)}
            className="flex flex-col leading-[1.15] gap-0.5 no-underline shrink-0"
          >
            <span className="font-display text-[0.95rem] font-bold uppercase tracking-wider text-[#EDEAF5]">
              AFFECTION
            </span>
            <span className="font-display text-[0.95rem] font-bold uppercase tracking-wider text-[#FFB627]">
              THE DJ ACADEMY
            </span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-body text-[0.82rem] uppercase tracking-wider no-underline transition-colors duration-150 whitespace-nowrap hover:text-[#FFB627] ${
                    active ? 'text-[#FFB627] font-semibold' : 'text-[#ABA3C4] font-medium'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Right: CTA Button + Hamburger Icon (on tablet/mobile) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop CTA */}
            <Link
              href="/courses#demo"
              className="hidden lg:inline-flex font-body text-[0.8rem] font-bold uppercase tracking-wider bg-[#FFB627] text-[#1A1206] px-6 py-3 rounded-full no-underline transition-all duration-150 hover:shadow-[0_0_0_4px_rgba(255,182,39,0.25)] whitespace-nowrap"
            >
              BOOK FREE DEMO
            </Link>

            {/* Mobile/Tablet CTA */}
            <Link
              href="/courses#demo"
              className="inline-flex lg:hidden font-body text-[0.72rem] font-bold uppercase tracking-wider bg-[#FFB627] text-[#1A1206] px-4 py-2 rounded-full no-underline whitespace-nowrap"
            >
              FREE DEMO
            </Link>

            {/* Hamburger Button (Right side beside FREE DEMO on Mobile/Tablet view) */}
            <button
              aria-label="Open navigation menu"
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden flex flex-col gap-1.5 p-1 bg-transparent border-0 cursor-pointer"
            >
              <span className="block w-[22px] h-[2px] bg-[#EDEAF5] rounded-sm" />
              <span className="block w-[22px] h-[2px] bg-[#EDEAF5] rounded-sm" />
              <span className="block w-[22px] h-[2px] bg-[#EDEAF5] rounded-sm" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Left Sidebar Drawer Backdrop */}
      <div
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 bg-[#0A0810]/75 backdrop-blur-sm z-[90] transition-opacity duration-250 lg:hidden ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile/Tablet Left Sidebar Drawer Content */}
      <aside
        aria-label="Navigation Menu Drawer"
        className={`fixed top-0 bottom-0 left-0 w-[290px] max-w-[85vw] bg-[#14101F] border-r border-[#3A2E52] z-[100] flex flex-col justify-between p-5 transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          drawerOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Top Header: Logo + Close Button */}
          <div className="flex items-center justify-between mb-7 pb-4 border-b border-[#3A2E52]">
            <Link
              href="/"
              onClick={() => setDrawerOpen(false)}
              className="flex flex-col leading-[1.15] gap-0.5 no-underline"
            >
              <span className="font-display text-[0.9rem] font-bold uppercase text-[#EDEAF5]">
                AFFECTION
              </span>
              <span className="font-display text-[0.9rem] font-bold uppercase text-[#FFB627]">
                THE DJ ACADEMY
              </span>
            </Link>

            {/* Close Button (X) */}
            <button
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
              className="w-[34px] h-[34px] rounded-full bg-[#3A2E52]/40 border border-[#3A2E52] flex items-center justify-center text-[#EDEAF5] text-[1.1rem] cursor-pointer leading-none"
            >
              ✕
            </button>
          </div>

          {/* Drawer Nav Links List */}
          <nav className="flex flex-col gap-1.5">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href)
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setDrawerOpen(false)}
                  className={`font-body text-[0.88rem] uppercase tracking-wider px-3.5 py-3 rounded-r-lg no-underline transition-all duration-150 ${
                    active
                      ? 'text-[#FFB627] font-semibold bg-[#FFB627]/10 border-l-3 border-[#FFB627]'
                      : 'text-[#ABA3C4] font-medium bg-transparent border-l-3 border-transparent hover:text-[#FFB627]'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Drawer Bottom CTA */}
        <div className="pt-5 mt-6 border-t border-[#3A2E52]">
          <Link
            href="/courses#demo"
            onClick={() => setDrawerOpen(false)}
            className="block w-full font-body text-[0.82rem] font-bold uppercase tracking-wider bg-[#FFB627] text-[#1A1206] px-5 py-3.5 rounded-full no-underline text-center shadow-[0_4px_14px_rgba(255,182,39,0.25)]"
          >
            BOOK FREE DEMO
          </Link>
        </div>
      </aside>
    </>
  )
}
