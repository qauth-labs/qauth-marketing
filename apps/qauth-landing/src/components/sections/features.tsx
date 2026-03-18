import { IconCode, IconCube, IconId, IconNetwork, IconPackage, IconShield } from '@tabler/icons-react'
import { motion, useReducedMotion } from 'framer-motion'
import { getFadeInUpVariants, staggerContainer } from '../../lib/motion-variants'

const FEATURES = [
  {
    accent: 'terra',
    icon: IconShield,
    title: 'Post-Quantum Crypto',
    description:
      'ML-DSA-65 hybrid signatures with Ed25519 fallback. Crypto-agile architecture — swap algorithms without touching business logic.',
    tag: 'NIST FIPS 204',
  },
  {
    accent: 'cyan',
    icon: IconCube,
    title: 'Headless-First',
    description:
      'Full REST API with no mandatory UI. Ship your own branded login experience, connect any frontend, or use our composable UI kit.',
    tag: '@qauth-labs/auth-ui',
  },
  {
    accent: 'terra',
    icon: IconNetwork,
    title: 'Instance Federation',
    description:
      'A user registered on any QAuth instance can authenticate on yours — no re-registration, no custom integration. One identity across the entire QAuth network, gated by a proper consent screen.',
    tag: 'QAuth-to-QAuth',
  },
  {
    accent: 'cyan',
    icon: IconCode,
    title: 'TypeScript + Rust',
    description:
      'Application logic in TypeScript for velocity. Performance-critical crypto in Rust via WASM/napi-rs — zero-copy, production-hardened.',
    tag: 'aws-lc-rs · napi-rs',
  },
  {
    accent: 'terra',
    icon: IconPackage,
    title: 'Self-Hostable',
    description:
      'One Docker command. Your infrastructure, your data, your compliance. No telemetry, no vendor lock-in, Apache 2.0 licensed.',
    tag: 'docker · k8s',
  },
  {
    accent: 'cyan',
    icon: IconId,
    title: 'Wallet Credentials',
    description:
      'Native eIDAS 2.0 EUDI Wallet support via OID4VP and SIOPv2. Users authenticate with verifiable credentials — national IDs, diplomas, professional licences — no passwords, no forms.',
    tag: 'SIOPv2 · OID4VP · SD-JWT VC',
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
