'use client'

import { useEffect, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

function scrollToHash(hash: string, behavior: ScrollBehavior = 'smooth') {
  const id = hash.replace(/^#/, '')
  if (!id) return
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior, block: 'start' })
}

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0
}

export default function SmoothScroll() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    document.documentElement.classList.add('scroll-reveal-ready')

    const sections = document.querySelectorAll('main section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )

    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add('is-visible')
      } else {
        observer.observe(section)
      }
    })

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('scroll-reveal-ready')
      sections.forEach((section) => section.classList.remove('is-visible'))
    }
  }, [pathname])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (window.location.hash) {
      requestAnimationFrame(() => {
        scrollToHash(window.location.hash, reducedMotion ? 'auto' : 'smooth')
      })
    }

    function onAnchorClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest('a[href*="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      const hashIndex = href.indexOf('#')
      if (hashIndex === -1) return

      const path = href.slice(0, hashIndex) || pathname
      const hash = href.slice(hashIndex)

      if (path !== pathname && path !== '') return

      const id = hash.replace(/^#/, '')
      if (!document.getElementById(id)) return

      e.preventDefault()
      scrollToHash(hash, reducedMotion ? 'auto' : 'smooth')
      window.history.pushState(null, '', `${pathname}${hash}`)
    }

    document.addEventListener('click', onAnchorClick)
    return () => document.removeEventListener('click', onAnchorClick)
  }, [pathname])

  return null
}
