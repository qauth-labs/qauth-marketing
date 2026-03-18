const FOOTER_COLS = [
  {
    heading: 'Project',
    links: [
      { label: 'Source Code', href: 'https://github.com/qauth-labs/qauth' },
      { label: 'Releases', href: 'https://github.com/qauth-labs/qauth/releases' },
      { label: 'Open Issues', href: 'https://github.com/qauth-labs/qauth/issues' },
      { label: 'License (Apache 2.0)', href: 'https://github.com/qauth-labs/qauth/blob/main/LICENSE' },
    ],
  },
  {
    heading: 'Security',
    links: [
      { label: 'Security Policy', href: 'https://github.com/qauth-labs/qauth/security/policy' },
      { label: 'Report Vulnerability', href: 'https://github.com/qauth-labs/qauth/security/advisories/new' },
      { label: 'NIST FIPS 204', href: 'https://csrc.nist.gov/pubs/fips/204/final' },
      { label: 'CRYSTALS-Kyber', href: 'https://pq-crystals.org/kyber/' },
    ],
  },
  {
    heading: 'Standards',
    links: [
      { label: 'OAuth 2.1', href: 'https://oauth.net/2.1/' },
      { label: 'OID4VP (OpenID4VP)', href: 'https://openid.net/specs/openid-4-verifiable-presentations-1_0.html' },
      { label: 'SIOPv2', href: 'https://openid.net/specs/openid-connect-self-issued-v2-1_0.html' },
      { label: 'eIDAS 2.0', href: 'https://digital-strategy.ec.europa.eu/en/policies/eidas-regulation' },
    ],
  },
] as const

function QAuthLogo() {
  return (
    <a
      aria-label="QAuth Labs home"
      className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      href="#"
    >
      <img alt="QAuth Labs" className="h-16 w-auto" height={64} src="/logo.svg" />
    </a>
  )
}

export function Footer() {
  return (
    <footer className="border-border border-t py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-wrap justify-between gap-10">
          {/* Brand */}
          <div>
            <QAuthLogo />
            <p className="mt-3 max-w-[300px] text-[13px] text-muted-foreground leading-[1.6]">
              Open-source identity infrastructure for the post-quantum era. A project of{' '}
              <a
                className="text-foreground transition-colors hover:text-primary"
                href="https://lylia.ee"
                rel="noopener noreferrer"
                target="_blank"
              >
                Lylia OÜ
              </a>
              .
            </p>
            <p className="mt-2 max-w-[300px] text-[12px] text-muted-foreground/70 leading-[1.5]">
              Core Auth API in active development · No public release yet
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-10 md:gap-16">
            {FOOTER_COLS.map(({ heading, links }) => (
              <div key={heading}>
                <h4 className="mb-4 font-sans font-semibold text-[12px] text-muted-foreground uppercase tracking-[0.08em]">
                  {heading}
                </h4>
                <nav aria-label={`${heading} links`} className="flex flex-col">
                  {links.map(({ label, href }) => (
                    <a
                      className="rounded py-1 text-[13px] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background"
                      href={href}
                      key={label}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex items-center justify-between border-border/40 border-t pt-6 text-[12px] text-muted-foreground">
          <span>
            © 2026 QAuth Labs ·{' '}
            <a
              className="text-foreground transition-colors hover:text-primary"
              href="https://lylia.ee"
              rel="noopener noreferrer"
              target="_blank"
            >
              Lylia OÜ
            </a>{' '}
            · Apache 2.0
          </span>
          {/* Single aria-label on the container; emoji are decorative/presentation only */}
          <p aria-label="Made in Europe, Estonia and Türkiye" className="flex gap-2 text-sm">
            <span aria-hidden>🇪🇪</span>
            <span aria-hidden>🇪🇺</span>
            <span aria-hidden>🇹🇷</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
