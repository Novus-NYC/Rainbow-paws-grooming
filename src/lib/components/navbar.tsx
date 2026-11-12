"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { businessInfo, navigation, primaryActions } from "@/lib/data/business"

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }

    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [menuOpen])

  return (
    <>
      <div className="site-utility-bar">
        <div className="site-utility-inner">
          <p>
            {businessInfo.address.street}, {businessInfo.address.city},{" "}
            {businessInfo.address.region} {businessInfo.address.postalCode}.
            <span className="site-utility-note"> {businessInfo.appointmentNote}</span>
          </p>
          <a href={businessInfo.phone.href}>{businessInfo.phone.display}</a>
        </div>
      </div>

      <header className="site-header">
        <nav className="nav-pill" aria-label="Main navigation">
          <Link className="nav-brand" href="/" aria-label={`${businessInfo.name} home`}>
            <Image
              className="nav-logo"
              src="/logo/rainbow-paws-dog-mark.png"
              alt=""
              width={48}
              height={62}
              priority
            />
            <span>{businessInfo.shortName}</span>
          </Link>

          <div className="nav-links">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link className="nav-book" href={primaryActions.booking.href}>
            Book Appointment
          </Link>

          <button
            className="nav-menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span className="nav-menu-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {menuOpen ? (
                  <path d="m6 6 12 12M18 6 6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </span>
          </button>

          <div
            className="nav-mobile-panel"
            id="mobile-navigation"
            hidden={!menuOpen}
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="nav-mobile-book"
              href={primaryActions.booking.href}
              onClick={() => setMenuOpen(false)}
            >
              {primaryActions.booking.label}
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}
