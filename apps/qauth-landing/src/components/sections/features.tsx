import { IconCode, IconCube, IconId, IconNetwork, IconPackage, IconShield } from '@tabler/icons-react'
import { motion, useReducedMotion } from 'framer-motion'
import { getFadeInUpVariants, staggerContainer } from '../../lib/motion-variants'

const FEATURES = [
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
    title: 'Headless-First',
    description:
      'A full REST API with no mandatory UI. Call the OAuth 2.1 and OIDC endpoints directly from any framework and build your own branded login experience — no bundled UI to fight.',
    tag: 'OAuth 2.1 · OIDC 1.0',
  },
  {
    accent: 'terra',
    icon: IconNetwork,
    title: 'MCP & Agent Authorization',
    description:
      'The self-hostable OAuth 2.1 authorization server built for MCP servers and AI agents. RFC 8693 on-behalf-of delegation, ReadOnly / Admin / Exec scope modes, and step-up authentication before dangerous operations — validated end-to-end with Claude Code.',
    tag: 'RFC 8693 · mcp-guard',
  },
  {
    accent: 'cyan',
    icon: IconCode,
    title: 'TypeScript-Native',
    description:
      'A single Fastify and TypeScript codebase — no native toolchain required to run it. Rust and napi-rs bindings for performance-critical signing are on the long-term roadmap.',
    tag: 'Fastify · jose',
  },
  {
    accent: 'terra',
    icon: IconPackage,
    title: 'Self-Hostable',
    description:
      'One Docker command. Your infrastructure, your data, your compliance. No telemetry, no vendor lock-in, Apache 2.0 licensed.',
    tag: 'Docker Compose',
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
            Everything you need to ship secure authentication — without locking yourself into a vendor or a dying
            standard.
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
