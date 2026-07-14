import { IconCube, IconId, IconKey, IconNetwork, IconPlug, IconShield } from '@tabler/icons-react'
import { motion, useReducedMotion } from 'framer-motion'
import { getFadeInUpVariants, staggerContainer } from '../../lib/motion-variants'

const FEATURES = [
  {
    accent: 'terra',
    icon: IconNetwork,
    title: 'Agent-Native Authorization',
    description:
      'RFC 8693 on-behalf-of delegation, ReadOnly / Admin / Exec scope modes, and step-up authentication before dangerous operations — for any agent calling any API, not just MCP. Audience-bound tokens keep delegated access scoped to exactly what it should touch.',
    tag: 'RFC 8693 · Step-Up',
  },
  {
    accent: 'cyan',
    icon: IconPlug,
    title: 'MCP Out of the Box',
    description:
      'RFC 9728 protected-resource metadata and dynamic client registration so MCP servers just work. Drop in @qauth-labs/mcp-guard and you have an authorization layer validated end-to-end with Claude Code.',
    tag: 'RFC 9728 · mcp-guard',
  },
  {
    accent: 'terra',
    icon: IconKey,
    title: 'OAuth 2.1 & OIDC Core',
    description:
      'Humans and services authenticate on the same server. Authorization code flow with PKCE, client_credentials for machine-to-machine, refresh token rotation, discovery, and JWKS — all standards-compliant, no shortcuts.',
    tag: 'OAuth 2.1 · OIDC 1.0',
  },
  {
    accent: 'terra',
    icon: IconShield,
    title: 'Post-Quantum Ready',
    description:
      'Crypto-agile interfaces let you swap signing algorithms without touching business logic. Ed25519 (EdDSA) ships today; ML-DSA-65 hybrid signatures are the long-term target — Phase 5, 2027.',
    tag: 'Ed25519 · EdDSA',
  },
  {
    accent: 'cyan',
    icon: IconCube,
    title: 'Headless & Self-Hosted',
    description:
      'A full REST API with no mandatory UI — build your own branded login experience. One Docker Compose command gets you running on your own infrastructure: a single TypeScript/Fastify codebase, no telemetry, Apache 2.0 licensed.',
    tag: 'REST API · Docker · Apache 2.0',
  },
  {
    accent: 'cyan',
    icon: IconId,
    title: 'Wallet Federation',
    description:
      "eIDAS 2.0 EUDI Wallet support via OID4VC and SIOPv2 is the long-term platform we're building toward — verifiable credentials as a first-class upstream identity source, with no re-architecture required downstream.",
    tag: 'OID4VC · SIOPv2 · Planned',
  },
] as const

export function Features() {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)

  return (
    <section className="scroll-mt-24 py-24 md:py-32" id="features">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <motion.div animate="animate" className="mb-16 text-center" initial="initial" variants={variants}>
          <p className="mb-4 font-mono font-semibold text-[12px] text-highlight uppercase tracking-[0.12em]">
            Platform
          </p>
          <h2 className="mb-4 font-display font-normal text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.02em]">
            Built for what comes next
          </h2>
          <p className="mx-auto max-w-[560px] text-[17px] text-muted-foreground leading-[1.7]">
            Everything you need to ship secure authentication — for your users, your services, and the agents acting on
            their behalf.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          animate="animate"
          className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3"
          initial="initial"
          variants={staggerContainer}
        >
          {FEATURES.map(({ accent, icon: Icon, title, description, tag }) => (
            <motion.div
              className="group flex flex-col gap-5 bg-card p-8 transition-colors hover:bg-card/80 md:p-10"
              key={title}
              variants={variants}
            >
              <div
                className={
                  accent === 'terra'
                    ? 'flex size-11 items-center justify-center rounded-[10px] border border-primary/20 bg-primary/15 text-primary'
                    : 'flex size-11 items-center justify-center rounded-[10px] border border-highlight/20 bg-highlight/12 text-highlight'
                }
              >
                <Icon aria-hidden className="size-5" />
              </div>
              <div>
                <h3 className="mb-2.5 font-sans font-semibold text-[17px] leading-snug tracking-[-0.01em]">{title}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.65]">{description}</p>
              </div>
              <span className="mt-auto inline-block self-start rounded border border-border bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                {tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
