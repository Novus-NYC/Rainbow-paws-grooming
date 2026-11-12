import Link from "next/link"
import Image from "next/image"
import { bookingNotes, businessInfo, navigation, primaryActions } from "@/lib/site-data"

export default function Footer() {
  const address = businessInfo.address

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-lead">
          <div>
            <h2>Give your dog a calmer groom.</h2>
          </div>
          <div className="footer-actions">
            <Link className="footer-button" href={primaryActions.booking.href}>
              {primaryActions.booking.label}
            </Link>
            <a className="footer-button footer-button-outline" href={businessInfo.phone.href}>
              Call {businessInfo.phone.display}
            </a>
          </div>
        </div>

        <div className="footer-columns">
          <div>
            <div className="footer-brand">
              <Image
                src="/logo/rainbow-paws-dog-mark.png"
                alt=""
                width={76}
                height={98}
              />
              <h3>{businessInfo.name}</h3>
            </div>
            <p>Private, home-based grooming for dogs who need extra patience and comfort.</p>
            <div className="footer-socials">
              {businessInfo.socialLinks.map((item) => (
                <a
                  key={item.label}
                  className="footer-social-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                >
                  {item.label === "Instagram" ? <InstagramIcon /> : <TikTokIcon />}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3>Explore</h3>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div>
            <h3>Visit</h3>
            <a href={address.mapsUrl} target="_blank" rel="noreferrer">
              {address.street}<br />
              {address.city}, {address.region} {address.postalCode}
            </a>
            <a href={businessInfo.phone.href}>{businessInfo.phone.display}</a>
          </div>

          <div>
            <h3>Hours</h3>
            <p>{businessInfo.hours}</p>
            <p>{bookingNotes[1]}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{String.fromCharCode(169)} {new Date().getFullYear()} {businessInfo.name}</span>
          <a href="https://novusnyc.org" target="_blank" rel="noreferrer">
            Made by Novus
          </a>
        </div>
      </div>
      <div className="footer-rainbow" aria-hidden="true" />
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M16.6 3c.3 2.2 1.6 3.7 3.9 3.9v3.1c-1.3.1-2.5-.3-3.8-1.1v5.9c0 3.6-2.5 5.7-5.5 5.7-3.1 0-5.5-2.4-5.5-5.4 0-3.3 2.8-5.8 6.2-5.3v3.2c-1.5-.5-3 .4-3 2 0 1.2.9 2.1 2.1 2.1 1.3 0 2.2-1 2.2-2.4V3z" />
    </svg>
  )
}
