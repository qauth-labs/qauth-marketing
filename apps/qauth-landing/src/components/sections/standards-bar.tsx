const STANDARDS = [
  'OAuth 2.1',
  'OIDC 1.0',
  'PKCE',
  'OID4VP',
  'SIOPv2',
  'SD-JWT VC',
  'NIST FIPS 204',
  'W3C DID',
] as const

export function StandardsBar() {
  return (
    <div className="border-border/40 border-y py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {STANDARDS.map((standard, i) => (
            <div className="flex items-center gap-6 md:gap-10" key={standard}>
              {i > 0 && (
                <span aria-hidden className="hidden size-1 shrink-0 rounded-full bg-muted-foreground/40 sm:block" />
              )}
              <span className="font-medium font-mono text-[13px] text-muted-foreground tracking-[0.04em] transition-colors hover:text-foreground">
                {standard}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
