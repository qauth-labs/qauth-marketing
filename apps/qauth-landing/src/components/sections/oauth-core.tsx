import { motion, useReducedMotion } from 'framer-motion'
import { getFadeInUpVariants, staggerContainer } from '../../lib/motion-variants'

const STATS = [
  { val: 'PKCE', label: 'Mandatory on every authorization code flow' },
  { val: 'DCR', label: 'RFC 7591 dynamic client registration' },
  { val: 'JWKS', label: 'Rotating keys via the discovery endpoint' },
  { val: 'OIDC', label: 'Standard identity layer, no proprietary claims' },
] as const

export function OAuthCore() {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)

  return (
    <section className="relative scroll-mt-24 overflow-hidden py-24 md:py-32" id="oauth-core">
      {/* Background glow — purely decorative */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[600px] w-[800px] rounded-full bg-primary/10 opacity-25 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          {/* Left: diagram */}
          <motion.div animate="animate" initial="initial" variants={variants}>
            <div className="rounded-2xl border border-border bg-card p-10">
              <p className="mb-5 font-mono text-[11px] text-muted-foreground uppercase tracking-[0.1em]">
                Grants, side by side
              </p>

              {/* Row 1: Humans */}
              <div className="flex flex-wrap items-center gap-3 border-border py-4">
                <span className="min-w-[70px] font-mono text-[12px] text-muted-foreground">Humans</span>
                <span className="rounded-lg border border-primary/25 bg-primary/15 px-4 py-2 font-mono font-semibold text-[12px] text-primary">
                  authorization_code + PKCE
                </span>
                {/* Arrow is a visual connector, not content */}
                <span aria-hidden className="text-lg text-muted-foreground/60">
                  →
                </span>
                <span className="rounded-lg border border-border bg-white/[0.04] px-4 py-2 font-mono font-semibold text-[12px] text-muted-foreground">
                  Session + refresh token
                </span>
              </div>

              {/* Row 2: Services */}
              <div className="flex flex-wrap items-center gap-3 border-border border-t py-4">
                <span className="min-w-[70px] font-mono text-[12px] text-muted-foreground">Services</span>
                <span className="rounded-lg border border-highlight/25 bg-highlight/12 px-4 py-2 font-mono font-semibold text-[12px] text-highlight">
                  client_credentials
                </span>
                <span aria-hidden className="text-lg text-muted-foreground/60">
                  →
                </span>
                <span className="rounded-lg border border-border bg-white/[0.04] px-4 py-2 font-mono font-semibold text-[12px] text-muted-foreground">
                  Scoped access token
                </span>
              </div>

              {/* Row 3: Any client */}
              <div className="flex flex-wrap items-center gap-3 border-border border-t py-4">
                <span className="min-w-[70px] font-mono text-[12px] text-muted-foreground">Any client</span>
                <span className="rounded-lg border border-border bg-white/[0.04] px-4 py-2 font-mono font-semibold text-[12px] text-muted-foreground">
                  /.well-known/openid-configuration
                </span>
                <span aria-hidden className="text-lg text-muted-foreground/60">
                  →
                </span>
                <span className="rounded-lg border border-primary/25 bg-primary/15 px-4 py-2 font-mono font-semibold text-[12px] text-primary">
                  Register + discover JWKS
                </span>
              </div>

              <p className="mt-6 border-border border-t pt-5 text-[12px] text-muted-foreground leading-[1.6]">
                <span aria-hidden className="text-primary">
                  ↓
                </span>{' '}
                The same server issues tokens for logins, service calls, and
                <br />
                delegated agents — one identity core, not three bolted together.
              </p>
            </div>
          </motion.div>

          {/* Right: text + stats */}
          <motion.div
            animate="animate"
            initial="initial"
            style={{ transitionDelay: '0.15s' }}
            variants={staggerContainer}
          >
            <motion.div variants={variants}>
              <p className="mb-4 font-mono font-semibold text-[12px] text-primary uppercase tracking-[0.12em]">
                Core Protocol
              </p>
              <h2 className="mb-5 font-display font-normal text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.02em]">
                One auth server,
                <br />
                every kind of client
              </h2>
              <p className="mb-8 text-[17px] text-muted-foreground leading-[1.7]">
                Before an agent ever delegates anything, QAuth is a standards-compliant OAuth 2.1 and OIDC server:
                authorization code with mandatory PKCE for your users, client_credentials for your services, refresh
                token rotation, dynamic client registration, and discovery. No legacy implicit flow, no proprietary SDK
                required — agent delegation and MCP support are built on top of this same core.
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4" variants={variants}>
              {STATS.map(({ val, label }) => (
                <div className="rounded-xl border border-border bg-card p-5" key={val}>
                  <p className="mb-1 font-mono font-semibold text-[24px] text-primary">{val}</p>
                  <p className="text-[12px] text-muted-foreground">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
